const yargs = require("yargs");
const {Movie,pullMovieData} = require("./utils");
const args = yargs.argv;

const App = () =>{
    pullMovieData();
    switch(args.command){
        case "add":
            const newMovie = new Movie(args.title,args.actor)
            newMovie.add();
            newMovie.list();
            newMovie.save();
            break;
        case "add multi":
            const movie1 = new Movie(args.title1,args.actor1);
            const movie2 = new Movie(args.title2,args.actor2);
            movie1.add();
            movie2.add();
            movie1.save();
            movie2.save();
            movie1.list();
            break;
            default:
                console.log("Incorrect Command");
    }
};

App()