
// require dotenv pour la gestion des variables d'environnement
// toujours tout en haut du fichier

const dotenv=require('dotenv');
dotenv.config();

// import du package express avec require
const express = require ('express');

// exéctuer express (la variable app est la valeur de retour de la fonction ci-dessus express)
const  app=express();

// on définiti le port
//const PORT = 3002


// routes

app.get("/", (req,res)=>{
    // fonction de callback (fonction passsée en param a une autre fonctione t qui est appelé plus tard.) ds ce cas, elle sera appellée
    //quand on arrive sur l'url "/"
    res.send("coucou")


})

 
// on lance notre serveur
app.listen(process.env.PORT, ()=>{ 
    // fonction de callback,e xécutée une fois que le port est sur écoute= serveur lancé;

    console.log (`app on http://localhost:${process.env.PORT}`)

})




