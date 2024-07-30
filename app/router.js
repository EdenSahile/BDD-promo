// contient toutes les routes
// je require expresse

const express=require("express");


// import des controllers

const mainController=require("./controllers/mainController.js")
const promosController=require("./controllers/promosController.js")

// on créé notre retour
// attention mAJUSCULE a Router
const router=express.Router();

// on écrit notre première route

// // au lieu de faire app.get , on fait router.get, étant donné que nous n'avons pas de variable  app ici
// router.get("/", (req,res)=>{
//     // fonction de callback (fonction passsée en param a une autre fonctione t qui est appelé plus tard.) ds ce cas, elle sera appellée
//     //quand on arrive sur l'url "/"
//     res.render('home')


// })

// si j'utilise un controller, le code ci-dessus pour la route home, je peux finalement l'écrire comme suit.
// en effet, le fichier router servira qu'à indiquer les routes et les controllers, indiquent ce que ca fait quand on clic sur une route. donc ce qui est dans le res.render, sera affiché dans les controlelrs
// je dois require le controller pour utiliser les controller
router.get("/",mainController.getHomePage);
    

// // on va faire une  deuxieme route pour les PROMOS
// router.get("/promos", (req,res)=>{
//     res.render('promos')

// })

// ajout controller
// pour chaque route, j'ajoute la méthode définit dans le controller soit getPromos dans ce cas voir fichier promosController
router.get("/promos", promosController.getPromos);

// on exporte le module router

module.exports=router