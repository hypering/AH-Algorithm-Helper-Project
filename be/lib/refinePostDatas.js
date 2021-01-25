const { userModel } = require('../models');

module.exports = async function (posts) {
  const refinedDatas = await Promise.all(
    posts.map(async (element) => {
      console.log(element);
      const queryUser = await userModel.findOne({ _id: element.author });
      const refinedComment = await Promise.all(
        element.comment.map(async (e) => {
          const queryCommentUser = await userModel.findOne({ _id: e.writerId });
          return {
            _id: e._id,
            createAt: e.createAt,
            context: e.context,
            writerKey: e.writerId,
            writerId: queryCommentUser.userId,
            profile: queryCommentUser.profile,
          };
        }),
      );

      return {
        _id: element._id,
        tags: element.tags,
        heart: element.heart,
        comment: refinedComment,
        clicked: element.clicked,
        author: queryUser.userId,
        authorKey: queryUser._id,
        img_url: element.img_url,
        content: element.content,
        profile: queryUser.profile,
        createAt: element.createAt,
      };
    }),
  );

  return refinedDatas;
};
