const express =  require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const cors = require('cors')
const multer = require('multer')
const app = express()
dotenv.config();
const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json())


// mongo db connection

mongoose.connect(process.env.MONGO_URI,{
	useNewUrlParser:true,
}).then(()=>{
	console.log("Success connected")
}).catch((e)=>{
	console.log("Error in connecting: ",e)
})



// multer 

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, './uploads')
	},
	filename: function (req, file, cb) {
	  const uniqueSuffix = Date.now()
	  cb(null,uniqueSuffix+file.originalname)
	}
  })
  
  const upload = multer({ storage: storage })





  // making post api for getting request from ui
  app.post('/upload-files', upload.single("file"), async (req,res)=>{
	console.log(req.file )
	res.send("Han bhai hai to sae.")
  })




























app.get('/',(req,res)=>{
	res.send("Hello g")
})

app.listen(port,(req,res)=> {console.log("Hello g server chl rha hai bhai,",port)})
