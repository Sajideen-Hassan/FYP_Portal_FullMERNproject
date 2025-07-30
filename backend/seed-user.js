// backend/seed-user.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

// ✅ Ensure MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error("❌ Missing MONGO_URI in .env file");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ MongoDB connected");

    const users = [
      { email: "admin@gmail.com", password: "123" },
      { email: "student@gmail.com", password: "456" },
      { email: "mentor@gmail.com", password: "789" },
    ];

    for (const userData of users) {
      const existing = await User.findOne({ email: userData.email });
      if (existing) {
        console.log(`⚠️  User already exists: ${userData.email}`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = new User({
        email: userData.email,
        password: hashedPassword,
      });

      await newUser.save();
      console.log(`✅ User created: ${newUser.email}`);
    }

    await mongoose.disconnect();
    console.log("✅ MongoDB disconnected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
