class Media {
	constructor(title, duration, isPlaying = false) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = isPlaying;
  }

  start() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }
}

class Song extends Media {
  constructor(title, artist, duration, isPlaying = false) {
    super(title, duration, isPlaying);
    this.artist = artist;
  }
}

class Movie extends Media {
  constructor(title, year, duration, isPlaying = false) {
    super(title, duration, isPlaying);
    this.year = year;
  }
}

console.log((new Media()) instanceof Media);
console.log((new Song()) instanceof Media);
console.log((new Movie()) instanceof Media);
