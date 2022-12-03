const mongoose = require("mongoose");

const todoScheme = new mongoose.Schema(
    {
        description: {
            type: String,
            require: [true, "Please description"],
            trim: true,
        },
        status: {
            type: String,
            enum: ["pending", "done"],
            default: "pending",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("todo", todoScheme);
