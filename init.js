const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then ( () => {console.log("connection is succesful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
  {
    from: "aman",
    to: "rahul",
    msg: "send me your pic",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "priya",
    msg: "How are you?",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "rohit",
    msg: "Meeting at 5 PM.",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "neha",
    msg: "Please check the report.",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "aman",
    msg: "Thanks for your help!",
    created_at: new Date(),
  }
]

Chat.insertMany(allChats);
