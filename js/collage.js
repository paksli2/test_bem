function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";
var k = 1;
for (var i = 0; i < 16; i++) {
  // var width = getRandomSize(80, 110);
  // var height =  getRandomSize(60, 100);

  allImages += '<img src="./img/collage/photo'+ k +'.jpg" alt="collage_photo" class = "collage__item">';
  k++;
}

$('.collage__unit').append(allImages);