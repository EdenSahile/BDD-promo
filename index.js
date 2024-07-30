
// require dotenv pour la gestion des variables d'environnement
// toujours tout en haut du fichier

const dotenv=require('dotenv');
dotenv.config();

// import du package express avec require
const express = require ('express');




// je require mon router. que j'ai créé dans un autre fichier et que j'ai exporté dans l'autre fichier
const router=require("./app/router.js")


// exéctuer express (la variable app est la valeur de retour de la fonction ci-dessus express)
const  app=express();


// ON PRÉcise quel moteur de rendu, on utilise
// pas besoin de require EJS, expresse se débrouille
app.set("view engine", 'ejs');
// on precise le chemin des vues
// __dirname = chemin du dossier courant
app.set('views', __dirname+  '/app/views')

// on indique a express où se trouve le dossier avec les assets statics

app.use(express.static(__dirname + '/public/'))


// on définiti le port, exemple ci-dessous avant d'utiliser les variables d'environnement. le plus simple. avec
// les variable d'environnement; on utiliser en bas : process.envo
//const PORT = 3002

// j'utiliser mon router

app.use(router)



 
// on lance notre serveur
app.listen(process.env.PORT, ()=>{ 
    // fonction de callback,e xécutée une fois que le port est sur écoute= serveur lancé;

    console.log (`app on http://localhost:${process.env.PORT}`)

})




