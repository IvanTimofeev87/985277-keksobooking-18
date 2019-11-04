var TYPES_HOTEL = ['palace', 'flat', 'house', 'bungalo'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var TYPES_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var ADDRESS_IMAGES = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var SAME_HOTEL_ARRAY = makeSameHotelArray();

function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getSameHotel(idx) {
  var x = getRandomNumb(0, 100);
  var y = getRandomNumb(101, 200)
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
  for (var i = 0; i < 8; i++) {
    array.push(getSameHotel(i));
  }
  return array;
};

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var similarHotelTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

for (var i = 0; i < 8; i++) {
  var hotelElement = similarHotelTemplate.cloneNode(true);
  var avatarImage = hotelElement.getElementsByTagName("img");
  hotelElement.style.left = SAME_HOTEL_ARRAY[i].location.x + 'px';
  hotelElement.style.top = SAME_HOTEL_ARRAY[i].location.y + 'px';
  avatarImage[0].src = SAME_HOTEL_ARRAY[i].author.avatar;
  map.appendChild(hotelElement);
}
