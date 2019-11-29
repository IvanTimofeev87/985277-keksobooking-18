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
var HOTELS_TYPES_DICTIONARY = { flat: 'Квартира', bungalo: 'Бунгало', house: 'Дом', palace: 'Дворец' };
var TYPES_HOTEL = ['palace', 'flat', 'house', 'bungalo'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var TYPES_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var ADDRESS_IMAGES = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var ADS_COUNT = 8;
var SAME_HOTELS = mockAds();
var AD_FILTER = document.querySelector('map__filters-container');




//Функции
function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getRandomItem(array) {
  return array[getRandomNumb(0, array.length)];
};

function getSameHotel(idx) {
  var pin_coordinate_x = getRandomNumb(100, 900);
  var pin_coordinate_y = getRandomNumb(130, 630);

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
    hotelElement.style.left = (SAME_HOTELS[i].location.x - 25) + 'px';
    hotelElement.style.top = (SAME_HOTELS[i].location.y - 70) + 'px';
    avatarImage[0].src = SAME_HOTELS[i].author.avatar;
    avatarImage[0].alt = SAME_HOTELS[i].offer.title;
    MAP.appendChild(hotelElement);
  });
};

function selectionOfHotelTypes(type) {
  return HOTELS_TYPES_DICTIONARY[type];
}

function createPopup(ad) {
  var popupElement = POPUP_TEMPLATE.cloneNode(true);
  var adsType = ad.offer.type;
  var popupElementImages = popupElement.getElementsByTagName("img");

  var popupDescription = {
    title: ad.offer.title,
    'text--address': ad.offer.address,
    'text--price': ad.offer.price + '₽/ночь',
    type: selectionOfHotelTypes(adsType),
    'text--capacity': ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей',
    'text--time': 'Заезд после' + ad.offer.checkin + ', выезд до' + ad.offer.checkout,
    description: ad.offer.description,
  };

  for (var [key, value] of Object.entries(popupDescription)) {
    popupElement.querySelector('.popup__' + key).textContent = value;
  }

  popupElementImages[0].src = ad.author.avatar;
  popupElementImages[1].src = ad.offer.photos;
  MAP.insertBefore(popupElement, AD_FILTER);
};



createPins();
createPopup(SAME_HOTELS[0]);