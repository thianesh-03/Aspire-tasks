const mongoose = require("mongoose");

const schema = mongoose.Schema;

const skillSchema = new schema({
  skillName: String,
  experience: Number,
  proficiency: String,
});

const jobSeekerSchema = new schema({
  jobSeekerName: String,
  emailId: String,
  age: Number,
  certified: Boolean,
  skills: [skillSchema]
});

const js = mongoose.model("jobSeeker", jobSeekerSchema);
mongoose.connect("mongodb://127.0.0.1:27017/aspire");

const jobSeeker1 = new js({
  jobSeekerName: "thianesh",
  age: 20,
  emailId: "thianesh@gmail.com",
  certified: true,
  skills: [
    { skillName: "java", experience: 1, proficiency: "beginner" },
    { skillName: "c++", experience: 2, proficiency: "intermediate" }]
});

jobSeeker1.save();