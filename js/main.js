//Константы
var TYPES_HOTEL = ['palace', 'flat', 'house', 'bungalo'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var TYPES_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var ADDRESS_IMAGES = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var SAME_HOTELS = makeSameHotelArray();

//Функции
function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getSameHotel(idx) {
  var x = getRandomNumb(100, 200);
  var y = getRandomNumb(201, 300);
  return {
    author: {
      avatar: "img/avatars/user0" + idx + ".png",
    },

    offer: {
      title: "best room",
      address: x + "," + y,
      price: 1000,
      type: TYPES_HOTEL[getRandomNumb(0, 3)],
      rooms: 3,
      guests: 2,
      checkin: TIME_CHECKIN[getRandomNumb(0, 3)],
      checkout: TIME_CHECKOUT[getRandomNumb(0, 3)],
      features: TYPES_FEATURES[getRandomNumb(0, 5)],
      description: "description room",
      photos: ADDRESS_IMAGES[getRandomNumb(0, 2)],
    },

    location: {
      x: x,
      y: y,
    }
  }
};

function makeSameHotelArray() {
  var array = [];
  for (var i = 1; i < 9; i++) {
    array.push(getSameHotel(i));
  }
  return array;
};

var Map = document.querySelector('.map');
Map.classList.remove('map--faded');

var SimilarHotelTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

SAME_HOTELS.forEach(function(item, i) {
  var hotelElement = SimilarHotelTemplate.cloneNode(true);
  var avatarImage = hotelElement.getElementsByTagName("img");
  hotelElement.style.left = ((SAME_HOTELS[i].location.x) - 25) + 'px';
  hotelElement.style.top = ((SAME_HOTELS[i].location.y) - 70) + 'px';
  avatarImage[0].src = SAME_HOTELS[i].author.avatar;
  avatarImage[0].alt = SAME_HOTELS[i].offer.title;
  Map.appendChild(hotelElement);
});