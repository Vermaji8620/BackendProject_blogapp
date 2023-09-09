const Todo = require("../models/todo");

exports.createData = async (req, res) => {
  try {
    const { post, like, comment } = req.body;
    const datagiven = await Todo.create({ post, like, comment });
    res.status(200).json({
      success: true,
      data: datagiven,
      message: "post was successsfully created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
    process.exit(1);
  }
};
