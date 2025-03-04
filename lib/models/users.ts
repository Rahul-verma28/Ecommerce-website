import mongoose, { Document, Model, Schema } from "mongoose";
interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  password?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  wishlist: string[];
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    wishlist: {
      type: [String],
      default: [],
    },
    password: { type: String, required: false },
    resetPasswordToken: { type: String, required: false },
    resetPasswordExpires: { type: Date, required: false },
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;