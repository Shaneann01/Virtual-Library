// create your Media class:
class Media {
  static totalMediaCount = 0;
  constructor(title, genre, year) {
    this.title = title;
    this.genre = genre;
    this.year = year;
  }
  summary() {
    return `${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}
// uncomment below to export it:
module.exports = Media;
