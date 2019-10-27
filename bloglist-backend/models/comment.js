const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const commentSchema = mongoose.Schema({
  content: String,
  likes: { type: Number, default: 0 },
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  }
});

commentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;