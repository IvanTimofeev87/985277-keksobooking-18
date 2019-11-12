//Перечисление
var PricesOfHotels = {
  MIN: 1000,
  MAX: 4000,
};
var RoomsCount = {
  MIN: 1,
  MAX: 4,
};
var GuestsCount = {
  MIN: 1,
  MAX: 4,
};

//Константы
var TYPES_HOTEL = ['100', '200'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var TYPES_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var ADDRESS_IMAGES = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var BORDER_PINS = 9;
var SAME_HOTELS = makeSameHotelArray();



//Функции
function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getRandomItem(array) {
  return array[getRandomNumb(0, array.length)];
};

function getCoordinateX() {
  return getRandomNumb(100, 900);
};

function getCoordinateY() {
  return getRandomNumb(130, 630);
};

function getSameHotel(idx) {
  var pin_coordinate_x = getCoordinateX();
  var pin_coordinate_y = getCoordinateY();

  return {
    author: {
      avatar: "img/avatars/user0" + idx + ".png",
    },

    offer: {
      title: "best room",
      address: pin_coordinate_x + "," + pin_coordinate_y,
      price: getRandomNumb(PricesOfHotels.MIN, PricesOfHotels.MAX),
      type: getRandomItem(TYPES_HOTEL),
      rooms: getRandomNumb(RoomsCount.MIN, RoomsCount.MAX),
      guests: getRandomNumb(GuestsCount.MIN, GuestsCount.MAX),
      checkin: getRandomItem(TIME_CHECKIN),
      checkout: getRandomItem(TIME_CHECKOUT),
      features: getRandomItem(TYPES_FEATURES),
      description: "description room",
      photos: getRandomItem(ADDRESS_IMAGES),
    },

    location: {
      x: pin_coordinate_x,
      y: pin_coordinate_y,
    }
  }
};

function makeSameHotelArray() {
  var array = [];
  for (var i = 1; i < BORDER_PINS; i++) {
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