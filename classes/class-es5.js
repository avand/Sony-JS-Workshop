"use strict";

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;

  this.start = function() {
    this.isPlaying = true;
  };

  this.stop = function() {
    this.isPlaying = false;
  };
}

var song = new Song("Uptown Funk", "Mark Ronson", "4:29");

console.log(song);
