module.exports=app=>{

    const pessoas= app.dados.pessoas();

    app.get("/pessoas",(req,res)=>{

        res.status(200).json(pessoas);

    });

    app.get("/",(req,res)=>{

        res.status(200).send("Bem vindo a API Pessoas");

    });

}