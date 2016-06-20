var song = {
  title: null,
  artist: null,
  duration: null,
  isPlaying: false,

  start: function start() {
    this.isPlaying = true;
  },

  stop: function stop() {
    this.isPlaying = false;
  }
}
