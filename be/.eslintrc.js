module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2], // 들여쓰기 1칸
    quotes: ['error', 'single'], // 더블쿼터 사용
    semi: 2, // 세미클론 사용
  
  },
};
