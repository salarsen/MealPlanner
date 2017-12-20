const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true,
    },
    source : {
        type: String,
        trim: true,
    },
    sourceType : {
        type: String,
    },
    pageNumber : {
        type: Number,
    },
    _creator : {
        type: Schema.Types.ObjectId,
        ref : 'User',
    },
    _favorited : [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
},{
    timestamps: true,
});

module.exports = mongoose.model('Recipe', recipeSchema);
