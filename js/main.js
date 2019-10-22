var getRandomNumb = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var TYPES_HOTEL = ['palace', 'flat', 'house', 'bungalo'];

var getSameHotel = function(xx, title, x, y, price) {

  return {
    "author": {
      "avatar": "img/avatars/user{{xx}}.png"
    },

    "offer": {
      title,
      "address": "{{location.x}}, {{location.y}},
      price,
      type: TYPES_HOTEL[randomNumb(0, 3)],
      "rooms": "",
      "guests": "",
      "checkin": "",
      "checkout": "",
      "features": "",
      "description": "",
      "photos": ""
    },

    "location": {
      "x": "",
      "y": ""
    }
  }
};