const app= require("./server/server");
const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Servidor está rodando na porta ${port}`);
});