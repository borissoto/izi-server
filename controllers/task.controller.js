const { response } = require("express");

const tareasGet = (req, res = response) => {
  res.json({
    msg: "get Api - controller",
  });
};

module.exports = {
  tareasGet,
};
