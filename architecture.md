# archi


## Initialiser npm

`npm init -y` : on initialise notre app sous node

=> conséquences : génère un fichier package.json (fiche identité de notra app)

### package.json
=> on peut ajouter des scripts pour par ex lancer plus vite nos apps
    ex : "start" qui permet de lancer l'app avec nodemon ou node dev. Pour exécuter le script, on fait :
    npm run nomduscript
    exception START, on peut lancer  en faisant directement npm start ( pas la pein de faire npm run start)

## Créer notre index.js
à la racin du projet, on crée le point d'entrée "index.js"

## installer express

`npm i express` = pour utiliser expres
=> conséquences = ca crée le "node-modules" avec toute les dépendances de mes modules et express dans le dépencdances

ajouter le gitignore immédiatement;; on ne veut pas commit le node module qui est trop lourd. nous alllons donc demander a git d'ignorer tout ce qui est dans le dossier node module en créatn un fichier .gitignore à la racine, en y indiquant les ou le fichiers à ignorer (ne pas faire de faute d'orthographe.)
si node_modules/ (slash veut dire que tout ce qui est dans le dossier est ignoré.)

**Node.js** et Express : Node.js est la plateforme de base qui permet d'exécuter du JavaScript côté serveur.
**Express**  est un framework pour Node.js qui facilite la création de serveurs web et d'API.
**npm (Node Package Manager)**  : C'est un gestionnaire de paquets pour Node.js, utilisé pour installer et gérer les bibliothèques et outils nécessaires pour une application Node.js.
Il permet de télécharger et de mettre à jour des packages (comme Express) facilemen

## variables d'environnement

ce sont des variables globales. 
pour récupérer ces variables sous node via l'objet "process".
`process.env.nomdelavariable`

Pour ajouter variable environnement
- ajouter fichier a la racine de l'app`.env`
- dans ce fichier, les variables d envirtonnement, par convention, les variables sont notées en UPPERCASE 
- snakecase "NOM_DE_VARIABLE"
- pas d espace autour des égal. valeur déclarée sans guillemets ou quotes
- pas de point virgules


uppercase : tout en majuscule
snake_case : mot séparé par underscore
camelCase = mot séparé par des majuscules
kebab-case= mot séparé par tiret du 6

on ne commit pas ce fichier, il peut contenir des données sensibles, par exemple des mots de passe. on ne veut pas le retrouver sur github. on l'ajoute donc au .gitignore

SI un autre dév prend notre projet, comment il fait pour savoir les varaibles nécessaires à faire marcher l'app ?? on crée un fichier d'exemple pour les futures dévs de mon projet `.env.example` où on ecrit des exemples

exemple : le dev doit créer un fichier .env de son côté en respectant ce que j'ai indiqué dans le fichier .env.example. par ex pour PORT, je lui dit qu'il doit utiliser une variable PORT avec 4 chiffres.

PORT=1234
PASS=utiliserunMDP
Je fais une copie de mon .env pour créer le .env.example.
.env dans le gitignore mais le ;env.example doit etre poussé sur github

pour utiliser les variables d'environnement dans mon index.js. il faut installer  `dotenv`

`npm i dotenv`
 
 https://www.npmjs.com/package/dotenv

 # lsite des dépendances a ajouter a chaque nouveau projet

 express
 nodemon
 dotenv 





# Initialiser Git 

Envoi fichier vers github
git init
git add .
git commit -m 'mon texte'
git remote add origin git@github.com:EdenSahile/BDD-promo.git
git push -u origin main 