const express = require("express");
const cors = require("cors");
const app = express();
const options = {
    origin:(orgin,callback) => {
        callback(null,true)
    }
}
app.use(cors(options));  

app.use(express.json());
 app.use(cors());

 app.use(express.json());

 app.post('/',(req,res) => {
     studentData.push(req,body);
     console.log(req,body);
     res.send("Done")
 })

const data = ['hello',123,{"key":"value"}];
app.get('/',(req,res) => {
    res.send(data)

})

let studentData = [{
    name:"karthick",
    age: 22,
    rollNumber: 23451

}];

app.get('/student',(req,res) => {
   res.send(studentData);

})

app.listen(3333,()=>{
    console.log("started")
})