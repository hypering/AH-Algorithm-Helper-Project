const refinePostDatas = require('../lib/refinePostDatas');
const { boardModel, addComment } = require('../models');
const { userModel } = require('../models');

const BoardService = {
  selectBoard: async ({ startIdx }) => {
    const boardDatas = await boardModel.find().sort({ _id: -1 }).skip(Number(startIdx)).limit(5);
    const refinedDatas = await refinePostDatas(boardDatas);

    return refinedDatas;
  },
  searchBoard: async ({ type, value }) => {
    if (type === 'author') {
      const queryUser = await userModel.findOne({ userId: value });
      const searchResults = await boardModel.find({ author: queryUser._id }).sort({ _id: -1 });
      const refinedDatas = await refinePostDatas(searchResults);

      return refinedDatas;
    } else if (type === 'tag') {
      const searchResults = await boardModel.find().sort({ _id: -1 });
      const filterDatas = searchResults.filter((post) => {
        return post.tags.includes(value);
      });
      const refinedDatas = await refinePostDatas(filterDatas);

      return refinedDatas;
    }
  },

  addBoardView: async ({ contentId, curIp }) => {
    const queryContent = await boardModel.findOne({ _id: contentId });

    const isExist = queryContent.clicked.filter((element) => {
      return element === curIp;
    });

    if (isExist.length == 0) {
      queryContent.clicked.push(curIp);
      queryContent.save();
      return { status: 200, clicked: queryContent.clicked.length };
    } else {
      return { status: 404 };
    }
  },

  writeBoard: async ({ content, tags, imgName, user }) => {
    const hash = tags.split(',').filter((e) => {
      return e.length >= 1;
    });
    const author = user._id;
    const newPost = await boardModel.create({
      author,
      img_url: imgName,
      content: content,
      tags: hash,
    });

    const queryUser = await userModel.findOne({ _id: author });
    await queryUser.posts.push(newPost._id);
    queryUser.save();
  },

  addBoardHeart: async ({ contentId, user }) => {
    const queryContent = await boardModel.findOne({ _id: contentId });

    const isExist = queryContent.heart.filter((element) => {
      return element === user._id;
    });

    if (isExist.length == 0) {
      queryContent.heart.push(user._id);
      queryContent.save();
      return { status: 200, clicked: queryContent.heart.length };
    }
    return { status: 404 };
  },

  writeBoardComment: async ({ writer, boardId, createAt, context }) => {
    const newCommentId = await addComment(boardId, {
      writerId: writer,
      createAt,
      context,
    });
    return newCommentId;
  },

  deleteBoardComment: async ({ boardId, key }) => {
    const queryContent = await boardModel.findOne({ _id: boardId });

    const removedComment = queryContent.comment.find((element) => {
      return String(element._id) === key;
    });

    if (removedComment !== undefined) {
      await boardModel.findOneAndUpdate(
        {
          _id: boardId,
        },
        {
          $pull: { comment: removedComment },
        },
        { new: true },
      );
      return true;
    }
    return false;
  },

  deleteBoard: async ({ boardId, user }) => {
    const queryContent = await boardModel.deleteOne({ _id: boardId });
    const queryUser = await userModel.findOne({ _id: user._id });
    const idx = queryUser.posts.findIndex((e) => e === boardId);

    queryUser.posts.splice(idx, 1);
    await queryUser.save();

    if (queryContent !== undefined) return true;
    return false;
  },
};

module.exports = BoardService;
