var playlist = { Montand: "Feuilles Mortes"};

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
  return playlist;
};

function removeFromPlaylist(playlist, artist) {
<<<<<<< HEAD
  delete playlist[artist];
=======
  delete playlist.artist;
>>>>>>> 17ac3d5e2b595a5151de4e27c04c54162cdf94d3
  return playlist;
};
