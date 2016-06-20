function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype = {
  start: function start() {
    this.isPlaying = true;
  },

  stop: function stop() {
    this.isPlaying = false;
  }
}
