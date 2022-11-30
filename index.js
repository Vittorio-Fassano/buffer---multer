import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");


//storage
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})
const upload = multer({storage})
//;



//dest
// const upload = multer({dest: "uploads/"})
//;


//um arquivo
// app.post("/", upload.single("image"),(req, res) => {
//     console.log(req.body, req.file)
//     res.send("ok");
// });
//;


//varios arquivos
app.post("/", upload.array("images", 3),(req, res) => {
    console.log(req.body, req.file)
    res.send("ok");
});
//;


//get
app.get("/", (req, res) => {
    res.render("home");
  });
//;


//server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
