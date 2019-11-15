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
var MAP = document.querySelector('.map__pins');
MAP.classList.remove('map--faded');
var MAP_PIN_TEMPLATE = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');
var POPUP_TEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');
var TYPES_HOTEL = ['palace', 'flat', 'house', 'bungalo'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var TYPES_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var ADDRESS_IMAGES = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var ADS_COUNT = 8;
var SAME_HOTELS = mockAds();



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

function mockAds() {
  var array = [];
  for (var i = 1; i <= ADS_COUNT; i++) {
    array.push(getSameHotel(i));
  }
  return array;
};

function createPins() {
  SAME_HOTELS.forEach(function(item, i) {
    var hotelElement = MAP_PIN_TEMPLATE.cloneNode(true);
    var avatarImage = hotelElement.getElementsByTagName("img");
    hotelElement.style.left = ((SAME_HOTELS[i].location.x) - 25) + 'px';
    hotelElement.style.top = ((SAME_HOTELS[i].location.y) - 70) + 'px';
    avatarImage[0].src = SAME_HOTELS[i].author.avatar;
    avatarImage[0].alt = SAME_HOTELS[i].offer.title;
    MAP.appendChild(hotelElement);
  });
};

createPins();

function selectionOfHotelTypes(type) {
  if (type === flat) {
    return Квартира;
  } else if (type === bungalo) {
    return Бунгало;
  } else if (type === house) {
    return Дом;
  } else {
    return Дворец;
  }
}

function createPopup() {
  var popupElement = POPUP_TEMPLATE.cloneNode(true);
  var firstPin = SAME_HOTELS[0];
  var adsType = firstPin.offer.type;
  selectionOfHotelTypes(adsType);
  var insertElementBefore = document.querySelector('map__filters-container');
  popupElement.querySelector('.popup__title').textContent = firstPin.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = firstPin.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = firstPin.offer.price + '₽/ночь';
  popupElement.querySelector('.popup__type').textContent = adsType;
  MAP.insertBefore(popupElement, insertElementBefore);
};

createPopup();