ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [45.044521, 41.969083],
            zoom: 8
        }),

        myPlacemark1 = new ymaps.Placemark([45.035526, 38.974711], {
            balloonContent: 'Краснодар'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[0,0], [26, 47]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11],
        }),

        myPlacemark2 = new ymaps.Placemark([44.609764, 40.100516], {
            balloonContent: 'Майкоп'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[34,0], [62, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark3 = new ymaps.Placemark([44.635387, 40.724459], {
            balloonContent: 'Лабинск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark4 = new ymaps.Placemark([45.001116, 41.132429], {
            balloonContent: 'Армавир'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark5 = new ymaps.Placemark([45.493304, 41.215388], {
            balloonContent: 'новоалександровск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark6 = new ymaps.Placemark([45.845050, 41.514437], {
            balloonContent: 'Красногвардейское'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark7 = new ymaps.Placemark([45.295195, 41.494018], {
            balloonContent: 'солнечнодольск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark8 = new ymaps.Placemark([45.454757, 41.975569], {
            balloonContent: 'Донское'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark9 = new ymaps.Placemark([45.368536, 41.708644], {
            balloonContent: 'Изобильный'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark10 = new ymaps.Placemark([45.129667, 42.028803], {
            balloonContent: 'Михайловск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark11 = new ymaps.Placemark([45.044521, 41.969083], {
            balloonContent: 'Ставрополь'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark12 = new ymaps.Placemark([44.638287, 41.936061], {
            balloonContent: 'Невинномысск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark13 = new ymaps.Placemark([44.453472, 42.493089], {
            balloonContent: 'Курсавка'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark14 = new ymaps.Placemark([44.044526, 42.858910], {
            balloonContent: 'Ессентуки'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark15 = new ymaps.Placemark([44.039290, 43.070840], {
            balloonContent: 'Пятигорск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark16 = new ymaps.Placemark([44.148599, 43.473896], {
            balloonContent: 'Георгиевск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark17 = new ymaps.Placemark([44.781528, 44.165024], {
            balloonContent: 'Будённовск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        }),

        myPlacemark18 = new ymaps.Placemark([43.905225, 42.716796], {
            balloonContent: 'Кисловодск'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'assets/img/icon-map.png',
            iconImageSize: [22, 22],
            iconImageOffset: [-11, -11]
        });


    myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9)
        .add(myPlacemark10)
        .add(myPlacemark11)
        .add(myPlacemark12)
        .add(myPlacemark13)
        .add(myPlacemark14)
        .add(myPlacemark15)
        .add(myPlacemark16)
        .add(myPlacemark17)
        .add(myPlacemark18);
}