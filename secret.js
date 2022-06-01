"use strict";

module.exports.handler = async (event) => {
  const secret = process.env.SECRET;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        secret: secret,
      },
      null,
      2
    ),
  };
};
