const mongoose = require('mongoose');
const { Schema } = mongoose;

const mealSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true,
        default: 'Misc.'
    },
    mealTime : {
        type: Date,
        required: true,
        trim: true,
    },
    _recipes : [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    }],
    _creator : {
        type: Schema.Types.ObjectId,
        ref : 'User',
    },
    _sharedWith : [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
},{
    timestamps: true,
});

module.exports = mongoose.model('Meal',mealSchema);
