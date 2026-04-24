import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fileName: String,
    summary: Object,
    prediction: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Analysis", analysisSchema);