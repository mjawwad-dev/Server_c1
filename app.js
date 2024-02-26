import express, { request, response } from "express";
import { productObj } from './data.js';
const app = express();
const PORT = 5000;

app.get ("/", (request, response)=>{
    response.send("Server Up");
});

// All Product API
app.get("/allproduct", (request, response)=>{
    console.log("All Product");
    response.send(productObj);
});

//Dynamic Query Params

// Dynamic Product APi
app.get("/allproduct/:id",(request, response)=>{
    console.log(request.params.id, "Params");
     const filterData = productObj.filter(
        (product) => product.id == request.params.id
     );
    response.send(filterData);
});

app.listen( PORT, ()=>{
    console.log(`server runnong on http://localhost:${PORT}`)
});
