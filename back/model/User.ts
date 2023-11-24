import mongoose, { Schema, models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = models?.User || mongoose.model('User', UserSchema, 'user');
export default User;
