const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config()

const DB=process.env.DATABASE;
// console.log(DB,"pdatabase ")
mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("Connection Successful to mongo")
}).catch((err)=>{
    console.log(err)
})
