var getRandomNumb = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var TYPES_HOTEL = ['palace', 'flat', 'house', 'bungalo'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var TYPES_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var ADDRESS_IMAGES = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

var getSameHotel = function(xx, title, x, y, price, rooms, guests) {

  return {
    author: {
      avatar: "img/avatars/user{{xx}}.png"
    },

    offer: {
      title,
      address: "{{location.x}}, {{location.y}}",
      price,
      type: TYPES_HOTEL[randomNumb(0, 3)],
      rooms,
      guests,
      checkin: TIME_CHECKIN[randomNumb(0, 3)],
      checkout: TIME_CHECKOUT[randomNumb(0, 3)],
      features: TYPES_FEATURES[randomNumb(0, 5)],
      description,
      photos: ADDRESS_IMAGES[randomNumb(0, 2)]
    },

    location: {
      x,
      y: getRandomNumb(130, 630)
    }
  }
};