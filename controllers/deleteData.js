const Todo = require("../models/todo");

exports.deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const findtheid = await Todo.findByIdAndDelete({ _id: id });
    if (!findtheid) {
      return res.status(404).json({
        success: false,
        message: "No such post found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Post has been deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,

      message: "Post cannot be deleted",
    });
  }
};
