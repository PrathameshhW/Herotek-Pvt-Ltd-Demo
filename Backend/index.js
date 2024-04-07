import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose, { mongo } from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const User = new mongoose.model("User", userSchema);
const UserData = new mongoose.model("UserData", userDataSchema);

// Add validation to check if the user data already exists in the database
app.post("/register", (req, res) => {
  const { name, email, phone } = req.body;
  UserData.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        res
          .status(400)
          .send({ message: "User already exists in the database" });
      } else {
        const userData = new UserData({
          name,
          email,
          phone,
        });
        userData
          .save()
          .then((savedUserData) => {
            res.send({
              message: "User data saved successfully",
              userData: savedUserData,
            });
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "Error occurred while saving user data" });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ message: "Error occurred while checking for existing user" });
    });
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});
