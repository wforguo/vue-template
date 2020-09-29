const cloud = require('@cloudbase/node-sdk');

exports.main = async (event) => {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV
  });

  const db = app.database();
  const _ = db.command;

  const res = await db
      .collection('china-goods-member')
      .where({
        // gt 方法用于指定一个 "大于" 条件，此处 _.gt(30) 是一个 "大于 30" 的条件
        userMobile: _.eq(event.userMobile)
      })
      .get();
  return res;
};
