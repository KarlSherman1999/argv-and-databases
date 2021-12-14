const yargs = require("yargs");
const {Anime,pullAnimeData} = require("./utils");
const args = yargs.argv;

const App = () =>{
    pullAnimeData();
    switch(args.command){
        case "add":
            const newAnime = new Anime(args.title,args.char)
            newAnime.add();
            newAnime.list();
            newAnime.save();
            break;
        case "add multi":
            const Anime1 = new Anime(args.title1,args.char1);
            const Anime2 = new Anime(args.title2,args.char2);
            Anime1.add();
            Anime2.add();
            Anime1.save();
            Anime2.save();
            Anime1.list();
            break;
            default:
                console.log("Incorrect Command");
    }
};

App()