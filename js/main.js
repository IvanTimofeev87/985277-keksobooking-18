//Константы
var TYPES_HOTEL = ['100', '200'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var TYPES_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var ADDRESS_IMAGES = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var SAME_HOTELS = makeSameHotelArray();

//Функции
function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getRandomItem(array) {
  return array[getRandomNumb(0, array.length)];
};

function getCoordinateX() {
  return getRandomNumb(100, 200);
};

function getCoordinateY() {
  return getRandomNumb(200, 300);
};

function getSameHotel(idx) {
  var PIN_COORDINATE_X = getCoordinateX();
  var PIN_COORDINATE_Y = getCoordinateY();

  return {
    author: {
      avatar: "img/avatars/user0" + idx + ".png",
    },

    offer: {
      title: "best room",
      address: PIN_COORDINATE_X + "," + PIN_COORDINATE_Y,
      price: 1000,
      type: getRandomItem(TYPES_HOTEL),
      rooms: 3,
      guests: 2,
      checkin: getRandomItem(TIME_CHECKIN),
      checkout: getRandomItem(TIME_CHECKOUT),
      features: getRandomItem(TYPES_FEATURES),
      description: "description room",
      photos: getRandomItem(ADDRESS_IMAGES),
    },

    location: {
      x: PIN_COORDINATE_X,
      y: PIN_COORDINATE_Y,
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

function createPins() {

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

};

createPins();