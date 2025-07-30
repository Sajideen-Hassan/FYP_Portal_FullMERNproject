// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected to FYP-portal"))
.catch((err) => {
  console.error("❌ Main DB connection failed:", err.message);
  process.exit(1);
});

// Routes
const authRoutes = require("./routes/authRoutes");
const otpRoutes = require("./routes/otpRoutes");
const supervisorRoutes = require("./routes/supervisorRoutes"); // ✅ NEW

app.use("/api/auth", authRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/supervisors", supervisorRoutes); // ✅ NEW

app.get("/", (req, res) => {
  res.send("🚀 FYP-Portal Backend API Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
