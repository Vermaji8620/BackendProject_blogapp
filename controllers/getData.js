const Todo = require("../models/todo");

exports.getData = async (req, res) => {
  try {
    const findalldata = await Todo.find({});
    res.status(200).json({
      success: true,
      data: findalldata,
      message: "all data fetched",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getDatausingId = async (req, res) => {
  try {
    const id = req.params.id;
    const dataa = await Todo.find({ _id: id });

    if (!dataa) {
      return res.status(404).json({
        success: false,
        message: "No such data is found",
      });
    }
    res.status(200).json({
      success: true,
      data: dataa,
      message: "specific data found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
