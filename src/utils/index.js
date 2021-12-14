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
constructor(title, char = "Not specified") {
    this.title = title;
    this.char = char;
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