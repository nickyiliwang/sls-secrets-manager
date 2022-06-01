"use strict";

module.exports.handler = async (event) => {
  const secret = process.env.SECRET;
  const home = process.env.HOME;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: secret,
        home: home,
      },
      null,
      2
    ),
  };
};
