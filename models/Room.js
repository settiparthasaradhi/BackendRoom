import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: false }, // ✅ Added name field
  roomNumber: { type: Number, required: true, unique: true },
  status: {
    type: String,
    enum: ["Pending", "Cleaning", "Completed", "No Need", "Checkout Room", "Dusting Room", "Room Service"], 
    default: "Pending",
  },
  serviceType: {
    type: String,
    enum: ["Checkout Room", "Dusting Room", "Room Service"],
    default: "Room Service",
  },
});

const Room = mongoose.model("Room", roomSchema);
export default Room;