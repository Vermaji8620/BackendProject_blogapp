const Todo = require("../models/todo");

exports.updateData = async (req, res) => {
  try {
    const { post, like, comment } = req.body;
    const { id } = req.params;
    const findandupdate = await Todo.findByIdAndUpdate(
      { _id: id },
      { post, like, comment }
    );
    if (!findandupdate) {
      return res.status(404).json({
        success: false,
        message: "Not found any such data",
      });
    }
    res.status(200).json({
      success: true,
      data: findandupdate,
      message: "The data has been updated",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};
