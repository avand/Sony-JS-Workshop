// Define the base class
function Media(title, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype = {
  start: function start() {
    this.isPlaying = true;
  },

  stop: function stop() {
    this.isPlaying = false;
  }
};

// Define a superclass
function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

// Define another superclass
function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

// All instances are instance of Media
console.log((new Media()) instanceof Media);
console.log((new Song()) instanceof Media);
console.log((new Movie()) instanceof Media);
