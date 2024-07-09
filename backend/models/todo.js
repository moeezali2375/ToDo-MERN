const mongoose = require("mongoose");

const todoModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: 0,
        required: true,
    }
}, {
    timestamps: true,
}
)

const Todo=mongoose.model("Todo",todoModel);

module.exports=Todo;