const mongoose = require("mongoose");

const dbStarter = async () => {
  const CONNECT_URL = process.env.DEV_DB_URL;
  console.log(CONNECT_URL);
  if (CONNECT_URL === undefined) throw Error("DB Connection Fail");
  await mongoose.connect(CONNECT_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
};

module.exports = dbStarter;
