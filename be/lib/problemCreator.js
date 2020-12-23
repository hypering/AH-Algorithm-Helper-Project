const axios = require('axios');
const cheerio = require('cheerio');

const Levels = [
  'Unrated',
  'Bronze V',
  'Bronze IV',
  'Bronze III',
  'Bronze II',
  'Bronze I',
  'Silver V',
  'Silver IV',
  'Silver III',
  'Silver II',
  'Silver I',
  'Gold V',
  'Gold IV',
  'Gold III',
  'Gold II',
  'Gold I',
  'Platinum V',
  'Platinum IV',
  'Platinum III',
  'Platinum II',
  'Platinum I',
  'Diamond V',
  'Diamond IV',
  'Diamond III',
  'Diamond II',
  'Diamond I',
  'Ruby V',
  'Ruby IV',
  'Ruby III',
  'Ruby II',
  'Ruby I',
];
const getlevelNum = (level) => {
  for (let i = 0; i < Levels.length; i++) {
    if (level === Levels[i]) return i;
  }
  return 0;
};

const getProblem = (number, name, categoryName, level) => {
  return {
    num: Number(number),
    name: name,
    category: [categoryName],
    level: Number(getlevelNum(level)),
  };
};

const getBaekJoonHTML = async (word) => {
  try {
    if (word != 1) return await axios.get('https://solved.ac/problems/tags/recursion?page=' + word);
    else return await axios.get('https://solved.ac/problems/tags/recursion');
  } catch (error) {
    console.log(error);
  }
};

export const getBaekJoonDate = async (i) => {
  const problems = [];
  const htmlBaekJoonDate = await getBaekJoonHTML(i);
  const $ = cheerio.load(htmlBaekJoonDate.data);
  $('div.sticky-table-row').each((index, item) => {
    const number = $(item)
      .find('div > span > a.ProblemInline__ProblemStyle-cvf1lm-0 > span')
      .text()
      .split('\n');
    const name = $(item).find('div > span > a.hover_underline > span').text().split('\n');
    const level = $(item).find('div > span > a > img').attr('alt');
    for (let i = 0; i < number.length; i++) {
      const problem = getProblem(number[0], name[0], '재귀', level);
      problems.push(problem);
    }
  });
  return problems.splice(1);
};

// 문제 생성 API

// app.get('/problem/add', async (req, res) => {
//   for (let i = 1; i <= 1; i++) {
//     const BaekJoondata = await getBaekJoonDate(i);
//     BaekJoondata.forEach(async (ele) => {
//       const data = await problemModel.findOne({ name: ele.name });
//       if (data) {
//         let f = 0;
//         for (let j = 0; j < data.category.length; j++) {
//           if (data.category[j] === ele.category[0]) {
//             f = 1;
//             break;
//           }
//         }
//         if (f === 0)
//           await problemModel.update({ name: ele.name }, { $push: { category: ele.category } });
//       } else {
//         await problemModel.create(ele);
//       }
//     });
//   }
//   res.json(true);
// });
