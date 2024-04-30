const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://127.0.0.1:27017/pvgDB'
// mongodb://localhost:27017
const user=require('./models.js')

const app=express()

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {
    console.log('Connected successfully to the database');
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });
// const con=mongoose.connection

// con.on('open',function(){
// 	console.log("connected...")
// })
// mongodb://localhost:27017
app.use(express.json())

app.listen(9000,function(){
	console.log("App is running")
})


// get only one user by id
app.get('/:id',async(req,res)=>{
	try{

		// res.send("get request")
		const oneUser=await user.findById(req.params.id)
		res.json(oneUser)
	}catch{
		res.send("something went wrong")
	}
})

// for update
app.put('/:id',async(req,res)=>{
	try{

		// res.send("get request")
		const oneUser=await user.findById(req.params.id)
		oneUser.name=req.body.name
		oneUser.age=req.body.age
		oneUser.email=req.body.email
		oneUser.password=req.body.password

		const u=await oneUser.save()

		res.json(u)
	}
	catch{
		res.send("something went wrong")
	}
})

// for delete
app.delete('/:id',async(req,res)=>{
	try{

		// res.send("get request")
		const oneUser=await user.findById(req.params.id)
		oneUser.deleteOne()
		// const u=await oneUser.save()

		
		res.send("record deleted")
	}catch{
		res.send("something went wrong")
	}
})

//get all users
app.get('/',async(req,res)=>{
	try{

		// res.send("get request")
		const allUsers=await user.find()
		res.json(allUsers)
	}catch{
		res.send("something went wrong")
	}
})

// for signup
app.post('/SignUp',async (req,res)=>{
	const newUser =new user({
		name:req.body.name,
		password:req.body.password,
		email:req.body.email,
		age:req.body.age

})
try{
	const u=await newUser.save()
	res.json(u)
}catch(err){
	res.send("error")
	console.log("error is "+err)
}
})

// for login
app.post('/login',async (req,res)=>{
	
try{
	
	const dbUser=await user.findOne({name:req.body.name})
	if(dbUser==null){
		res.send("user not found")
		return
	}
	// const dbUser=await user.find(name==res.body.name)
	if(dbUser.password==req.body.password){
		res.send('login Successfull')
	}else{
		res.send("invalid credentials")
		console(dbUser.password)
		// console.log(req.body.password)
	}
	// const u=await newUser.save()
	// res.json(u)
}catch(err){
	res.send("error")
	console.log("error is "+err)
}
})