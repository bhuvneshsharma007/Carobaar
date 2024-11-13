const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get("/sell",(req,res)=>{
    res.send("Create Post to sell the car")
})
app.get("/view",(req,res)=>{
    res.send("view the diffrent cars")
})
app.get("/delete",(req,res)=>{
    res.send("delete the User Post");
})
app.get("/edit",(req,res)=>{
    res.send("User can edit the details of the cars");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})