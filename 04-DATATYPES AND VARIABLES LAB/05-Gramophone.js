function solve(band, album, song) {
   let result = band.length * album.length * song.length/2;
   console.log(`The plate was rotated ${Math.ceil(result / 2.5)} times.`); 
}