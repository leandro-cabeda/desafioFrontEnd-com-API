const express=require("express");
const app = express();
const consign = require("consign");


consign()
.then("./middlewares")
.then("./dados/pessoas.js")
.then("./rotas")
.into(app);

module.exports=app;