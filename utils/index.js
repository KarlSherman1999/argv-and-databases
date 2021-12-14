const fs = require("fs");
let AnimeArr;

const pullAnimeData = () => {
try {
    AnimeArr = JSON.parse(fs.readFileSync("./storage.json"));
} catch (error) {
    AnimeArr = [];
}
};

class Anime {
constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
}
add() {
    AnimeArr.push(this);
}
list() {
    console.log(AnimeArr);
}
save() {
    fs.writeFileSync("./storage.json", JSON.stringify(AnimeArr));
}
}

module.exports = { Anime, pullAnimeData };