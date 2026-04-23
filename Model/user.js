import { mongoose } from "mongoose";
import bcrypt from "bcrypt";

export const UserSchema = new mongoose.Schema({
    from: {
        type: String,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    name: {
        type: String,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8, 
        trim: true
    },
    role: {
        type: String,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    bio: {
        type: "String",
        minlength: 3,
        maxlength: 1000,
        trim: true
    },
    skills : {
        type: [String],
        default: []
    },
    experience: {
        type: String,
        minlength: 3,
        maxlength: 200,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
});

UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.comparedPassword = async function (insertedPassword) {
    return await bcrypt.compare(insertedPassword, this.password);
}

const User = mongoose.model("User", UserSchema, "userCollection");

export default User;