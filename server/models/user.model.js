import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
var SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({
        name: String,
        lastname: String,
        email: String,
        username: String,
        dateofbirth: Date,
        img: String,
        nationality: String,
        recidency: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
});
userSchema.pre('save', function(next) {
    
    var user = this;
    
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});
const User = mongoose.model("User", userSchema);

export default User;