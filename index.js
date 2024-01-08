const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
let a = [
    {
        name:"debasis",
        phone:"923456097",
    },
    {
        name:"HNS",
        phone:"67987977873",
    },
    {
        name:"bijay",
        phone:"8657-383934",
    }
];
app.get('/', (req, res) => {
  res.status(200).json(a);
})
app.post('/',(req,res)=>{
    const obj = req.body;
    a=[...a,obj];
    res.status(200).json("Data Saved Successfully");
})
app.put('/:name',(req,res)=>{
    const name = req.params.name;
    const obj = req.body;
    a = a.filter(function (val){
        return val.name!=name;
    })
    a = [...a,obj];
    res.send('updated successfully');
})
app.delete('/:name',(req,res)=>{
    const name = req.params.name;
    a = a.filter(function (val){
        return val.name!=name;
    })
    res.send('deleted successfully');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})