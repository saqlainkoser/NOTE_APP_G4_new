var express = require('express');
var router = express.Router();
var User = require('../Models/userModel.js');


let secret = "mysecretkey"

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', async (req, res) => {
  const { username, name, email, password } = req.body;
  let emailCon = await User.findOne({ email });
  if (emailCon) {
    return res.json({
      message: "Email already exists"
    })
  }
  else {
    //encrypting password
    var bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt,async function (err, hash) {
        //creating new data
        let user = await User.create({
          username,
          name,
          email,
          password: hash
        });
        var jwt = require('jsonwebtoken');
        var token = jwt.sign({ userId: user._id, email: user.email }, secret);

        res.json({
          success: true,
          userId: user._id,
          token: token,
          message: "User created successfully"
        })

      });
    })
  }})

router.post('/login',async (req,res)=>{
  const {email,password}=req.body;
  let user = await User.findOne({email});
  if(user){
    var bcrypt = require('bcryptjs');
    bcrypt.compare(password,user.password,async function(err,result){
      if(result){
        const jwt = require('jsonwebtoken');
        var token = jwt.sign({userId:user._id,email:user.email},secret)
        res.json({
          success:true,
          userId:user._id,
          token:token,
          message:"User logged in successfully"
        })
      }
      else{
        res.json({
          success:false,
          message:"Invalid Credentials"
        });
      }
    })
  }
  else{
    return res.json({
      success:false,
      message:"Email Id Not Exists , User Not Found !"
    })
  }

})

//Note 
//apis for Note
//getNotes

const notesModel = require("../Models/noteModel.js")

router.post('/getNotes',async(req,res)=>{
  let notes = await notesModel.find({uploadedBy:req.body.uploadedBy});
  if(notes.length > 0 ){
    res.json(notes);
  }
  else{
    res.json({
      success:false,
      msg:"No Notes Found !"
    })
  }
})

router.post('/addNotes',async (req,res)=>{
  let {title,description,content,isImportant,uploadedBy} = req.body;

  let note = notesModel.create({
    title,
    description,
    content,
    isImportant,
    uploadedBy
  })

  res.json({
    success:true,
    noteId:note._id
  })
})


router.post('/deleteNote',async(req,res)=>{
  let note = await notesModel.findByIdAndDelete({_id:req.body.noteId});
  res.json({
    success:true,
    msg:"Note Deleted Successfully !",
    deleteNote:req.body.noteId
  })
})


router.post('/getNote',async(req,res)=>{
  let note = await notesModel.findOne({_id:req.body.noteId});
  if(note){
    res.json(note);
  }
  else{
    res.json({
      success:false,
      msg:"No Note Found !"
    })
  }
})

router.post('/updateNote',async(req,res)=>{
  let result = await notesModel.updateOne(
    {_id:req.body.noteId},
    {$set:{
      title:req.body.title,
      description:req.body.description,
      content:req.body.content, 
      isImportant:req.body.isImportant,
      uploadedBy:req.body.uploadedBy
    }}
  );
  if(result){
    res.json(result);
  }
  else{
    res.json({
      success:false,
      msg:"No Note Found !"
    })
  }
})




//addNotes
//DeleteNotes
//updateNotes


    module.exports = router;
