const express=require ('express');
const app=express();
const port=8000;
 

console.log(port)
app.listen(port,function(err){
    if (err){
        console.log(`Error : ${err}`);



    }
    console.log(`server is running on port : ${port}`);

});
// hi
