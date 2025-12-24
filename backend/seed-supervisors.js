// backend/seed-supervisors.js
const mongoose = require("mongoose");
const Supervisor = require("./models/Supervisor");
require("dotenv").config();

// Ensure MONGO_URI exists
if (!process.env.MONGO_URI) {
    console.error("❌ Missing MONGO_URI in .env file");
    process.exit(1);
}

const supervisors = [
    {
        name: "Dr. Ali Khan",
        designation: "Professor",
        email: "ali.khan@lgu.edu.pk",
        phone: "0300-1234567"
    },
    {
        name: "Dr. Sarah Ahmed",
        designation: "Assistant Professor",
        email: "sarah.ahmed@lgu.edu.pk",
        phone: "0321-9876543"
    },
    {
        name: "Dr. Usman Malik",
        designation: "Professor",
        email: "usman.malik@lgu.edu.pk",
        phone: "0333-5556667"
    },
    {
        name: "Ms. Hina Batool",
        designation: "Assistant Professor",
        email: "hina.batool@lgu.edu.pk",
        phone: "0312-4443322"
    },
    {
        name: "Mr. Rizwan Shahid",
        designation: "Assistant Professor",
        email: "rizwan.shahid@lgu.edu.pk",
        phone: "0345-6667788"
    }
];

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        console.log("✅ MongoDB connected");

        // Clear existing supervisors to avoid duplicates (optional)
        // await Supervisor.deleteMany({});
        // console.log("🗑️ Existing supervisors cleared");

        for (const supervisorData of supervisors) {
            const existing = await Supervisor.findOne({ email: supervisorData.email });
            if (existing) {
                console.log(`⚠️  Supervisor already exists: ${supervisorData.email}`);
                continue;
            }

            const newSupervisor = new Supervisor(supervisorData);
            await newSupervisor.save();
            console.log(`✅ Supervisor created: ${newSupervisor.name}`);
        }

        await mongoose.disconnect();
        console.log("✅ MongoDB disconnected");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err.message);
    });
