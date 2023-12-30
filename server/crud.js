import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer"
import path from "path"

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ dest: 'uploads/' })

app.set("view engine","ejs")
app.set("pages",path.resolve("./pages"));

app.use(express.urlencoded({extended: false}))

app.get("/uploadfilepage",(req, res)=>{
  return res.send("uploadfilepage")

})

app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body)
    console.log(req.file)

    return res.redirect("/uploadfilepage")
})
// Connect to MongoDB (ensure MongoDB is running locally on default port 27017)
mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  gender: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  age: Number,
});

const User = mongoose.model("users", userSchema);



// Fetch user data by ID
app.get("/api/users/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Update user information
app.put("/api/users/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new user
app.post("/api/users", async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
    console.log("created the user");
  } catch (err) {
    console.log(err);
  }
});


// Delete a user
app.delete("/api/users/:userId", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



