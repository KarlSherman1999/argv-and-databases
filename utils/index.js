const fs = require("fs");
let movieArr;

const pullMovieData = () => {
try {
    movieArr = JSON.parse(fs.readFileSync("./storage.json"));
} catch (error) {
    movieArr = [];
}
};

class Movie {
constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
}
add() {
    movieArr.push(this);
}
list() {
    console.log(movieArr);
}
save() {
    fs.writeFileSync("./storage.json", JSON.stringify(movieArr));
}
}

module.exports = { Movie, pullMovieData };