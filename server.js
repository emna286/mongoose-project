const express= require('express')
const app=express()
const mongoose=require ('mongoose')
const{Schema,model}=mongoose;
const connectDB=require("./dbConnection")
const cors=require('cors')
const port=5000




connectDB()
//create person Schema
const personSchema=new Schema({
    
  name:{
    type: String,
    required: true
},
  age:Number,
  favoriteFood:[String]
})

//create a model
const Person=mongoose.model('person',personSchema)



  let person_1=new Person({
      name:'Emna',
      age:30,
      favoriteFood:['pizza','lablebi']
  })
//person_1.save()

let person_2=new Person({
  name:'moez',
  age:40,
  favoriteFood:['farfouch']
})
//person_2.save()

/*Person.create([{name:'mamouche',age:4,favoriteFood:['omlette,chicken']},
{name:'hamour',age:3,favoriteFood:['chicken']},
{name:'soltan',age:3,favoriteFood:['thon,chicken']}
])*/



//Use model.find() to Search Your Database
const find=async()=>{

  const fnd=await Person.find({name:'moez'})
  
console.log(fnd)
}
//find()

//Use model.findOne() to Return a Single Matching Document from Your Database
const findone=async()=>{
const fndone=await Person.findOne({favoriteFood:'farfouch'})
console.log(fndone)
}
//findone()

//Use model.findById() to Search Your Database By _id
const findbyid=async()=>{
const fndid=await Person.findById('640b80270d69771c26d3e970')
console.log(fndid)
}
//findbyid()

//Perform Classic Updates by Running Find, Edit, then Save
const findEditSave=async()=>{
const update_person =await Person.findById('640b805a320b1978181c162b')
update_person.favoriteFood.push('hamburger')
update_person.save()
console.log(update_person)
}
//findEditSave()

//Perform New Updates on a Document Using model.findOneAndUpdate()
const findOneUpdate=async()=>{

const fou=await Person.findOneAndUpdate({name:'Emna'},{age:20},{new:true}) 
console.log(fou)
}
//findOneUpdate()

//Delete One Document Using model.findByIdAndRemove
const findRemove=async()=>{

const fd=await Person.findByIdAndRemove('640b80270d69771c26d3e96e')
console.log(fd)
}
//findRemove()

//MongoDB and Mongoose - Delete Many Documents with model.remove()

const delateMany=async()=>{
const dm=await Person.deleteMany({age:3})
console.log(dm)
}
//delateMany()

//Chain Search Query Helpers to Narrow Search Results
const lastFunction=async()=>{
const met_one=await Person.find({age:3}).sort({name: 'asc'}).limit(2).select('_id name favoriteFood').exec()

console.log(met_one)
}
//lastFunction()

app.get('/', (req, res) => res.send('Hello!'))
app.listen(5000)