const ciudades = [
  {
    nombre: "Madrid",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 40.41673,
      longitud: -3.70329
    }
  },
  {
    nombre: "Valladolid",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 41.65436,
      longitud: -4.72227
    }
  },
  {
    nombre: "Sevilla",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 37.38909,
      longitud: -5.98446
    }
  },
  {
    nombre: "Barcelona",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 41.38744,
      longitud: 2.16865
    }
  },
  {
    nombre: "Málaga",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 36.71782,
      longitud: -4.42556
    }
  },
  {
    nombre: "Bilbao",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 43.26338,
      longitud: -2.93481
    }
  },
  {
    nombre: "Zaragoza",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 41.64743,
      longitud: -0.88615
    }
  },
  {
    nombre: "Murcia",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 37.9893,
      longitud: -1.13201
    }
  },
  {
    nombre: "Palma de Mallorca",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 39.57265,
      longitud: 2.65686
    }
  },
  {
    nombre: "Ibiza",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 38.90661,
      longitud: 1.42074
    }
  },
  {
    nombre: "Las Palmas de Gran Canaria",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 28.12355,
      longitud: -15.43626
    }
  },
  {
    nombre: "Santa Cruz de Tenerife",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 28.46363,
      longitud: -16.25185
    }
  },
  {
    nombre: "Alicante",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 38.34577,
      longitud: -0.49094
    }
  },
  {
    nombre: "Vigo",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 42.2406,
      longitud: -8.72073
    }
  },
  {
    nombre: "Gijón",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 43.53225,
      longitud: -5.66097
    }
  },
  {
    nombre: "Oviedo",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 43.36225,
      longitud: -5.84855
    }
  },
  {
    nombre: "Santander",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 43.46363,
      longitud: -3.82264
    }
  },
  {
    nombre: "Salamanca",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 40.9701,
      longitud: -5.66354
    }
  },
  {
    nombre: "Toledo",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 39.8581,
      longitud: -4.02263
    }
  },
  {
    nombre: "Santiago de Compostela",
    pais: "España",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 42.87686,
      longitud: -8.54417
    }
  },
  {
    nombre: "París",
    pais: "Francia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 48.85755,
      longitud: 2.35138
    }
  },
  {
    nombre: "Londres",
    pais: "Reino Unido",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 51.50722,
      longitud: -0.12759
    }
  },
  {
    nombre: "Roma",
    pais: "Italia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 41.89671,
      longitud: 12.4822
    }
  },
  {
    nombre: "Berlín",
    pais: "Alemania",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 52.52001,
      longitud: 13.40495
    }
  },
  {
    nombre: "Lisboa",
    pais: "Portugal",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 38.72225,
      longitud: -9.13934
    }
  },
  {
    nombre: "Ámsterdam",
    pais: "Países Bajos",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 52.36757,
      longitud: 4.90414
    }
  },
  {
    nombre: "Viena",
    pais: "Austria",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 48.20807,
      longitud: 16.37131
    }
  },
  {
    nombre: "Praga",
    pais: "República Checa",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 50.07554,
      longitud: 14.4378
    }
  },
  {
    nombre: "Atenas",
    pais: "Grecia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 37.98381,
      longitud: 23.72754
    }
  },
  {
    nombre: "Marsella",
    pais: "Francia",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 43.30257,
      longitud: 5.36907
    }
  },
  {
    nombre: "Lyon",
    pais: "Francia",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 45.76404,
      longitud: 4.83566
    }
  },
  {
    nombre: "Milán",
    pais: "Italia",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 45.4685,
      longitud: 9.1824
    }
  },
  {
    nombre: "Nápoles",
    pais: "Italia",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 40.85177,
      longitud: 14.26812
    }
  },
  {
    nombre: "Turín",
    pais: "Italia",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 45.07049,
      longitud: 7.68682
    }
  },
  {
    nombre: "Hamburgo",
    pais: "Alemania",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 53.54883,
      longitud: 9.98717
    }
  },
  {
    nombre: "Múnich",
    pais: "Alemania",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 48.13513,
      longitud: 11.58198
    }
  },
  {
    nombre: "Oporto",
    pais: "Portugal",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 41.15794,
      longitud: -8.62911
    }
  },
  {
    nombre: "Róterdam",
    pais: "Países Bajos",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 51.92442,
      longitud: 4.47773
    }
  },
  {
    nombre: "Dublín",
    pais: "Irlanda",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 53.34981,
      longitud: -6.26031
    }
  },
  {
    nombre: "Mánchester",
    pais: "Reino Unido",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 53.48076,
      longitud: -2.24263
    }
  },
  {
    nombre: "Liverpool",
    pais: "Reino Unido",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 53.40837,
      longitud: -2.99157
    }
  },
  {
    nombre: "Kiev",
    pais: "Ucrania",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 50.45036,
      longitud: 30.5245
    }
  },
  {
    nombre: "Palermo",
    pais: "Italia",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 38.11569,
      longitud: 13.36146
    }
  },
  {
    nombre: "Bruselas",
    pais: "Bélgica",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 50.8477,
      longitud: 4.3572
    }
  },
  {
    nombre: "Amberes",
    pais: "Bélgica",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 51.21993,
      longitud: 4.41499
    }
  },
  {
    nombre: "Copenhague",
    pais: "Dinamarca",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 55.6761,
      longitud: 12.56834
    }
  },
  {
    nombre: "Estocolmo",
    pais: "Suecia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 59.3327,
      longitud: 18.06563
    }
  },
  {
    nombre: "Oslo",
    pais: "Noruega",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 59.91217,
      longitud: 10.73127
    }
  },
  {
    nombre: "Helsinki",
    pais: "Finlandia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 60.16986,
      longitud: 24.93838
    }
  },
  {
    nombre: "Varsovia",
    pais: "Polonia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 52.22968,
      longitud: 21.01227
    }
  },
  {
    nombre: "Cracovia",
    pais: "Polonia",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 50.06465,
      longitud: 19.94498
    }
  },
  {
    nombre: "Budapest",
    pais: "Hungría",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 47.49791,
      longitud: 19.04023
    }
  },
  {
    nombre: "Bucarest",
    pais: "Rumanía",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 44.42677,
      longitud: 26.10254
    }
  },
  {
    nombre: "Sofía",
    pais: "Bulgaria",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 42.69771,
      longitud: 23.32187
    }
  },
  {
    nombre: "Zúrich",
    pais: "Suiza",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 47.37689,
      longitud: 8.54169
    }
  },
  {
    nombre: "Ginebra",
    pais: "Suiza",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 46.20439,
      longitud: 6.14316
    }
  },
  {
    nombre: "Belgrado",
    pais: "Serbia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 44.81254,
      longitud: 20.46123
    }
  },
  {
    nombre: "Reikiavik",
    pais: "Islandia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 64.14699,
      longitud: -21.94076
    }
  },
  {
    nombre: "Riga",
    pais: "Letonia",
    continente: "Europa",
    esCapitalDePais: true,
    coordenada: {
      latitud: 56.96769,
      longitud: 24.10562
    }
  },
  {
    nombre: "Colonia",
    pais: "Alemania",
    continente: "Europa",
    esCapitalDePais: false,
    coordenada: {
      latitud: 50.93753,
      longitud: 6.96028
    }
  },
  {
    nombre: "Washington D. C.",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 38.90729,
      longitud: -77.03693
    }
  },
  {
    nombre: "Nueva York",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 40.71278,
      longitud: -74.00597
    }
  },
  {
    nombre: "Miami",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 25.76168,
      longitud: -80.19179
    }
  },
  {
    nombre: "Los Ángeles",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 34.05491,
      longitud: -118.24264
    }
  },
  {
    nombre: "Las Vegas",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 36.17156,
      longitud: -115.1391
    }
  },
  {
    nombre: "Ciudad de México",
    pais: "México",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 19.43261,
      longitud: -99.13321
    }
  },
  {
    nombre: "Tijuana",
    pais: "México",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 32.5332,
      longitud: -117.01928
    }
  },
  {
    nombre: "Bogotá",
    pais: "Colombia",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 4.71099,
      longitud: -74.07209
    }
  },
  {
    nombre: "Medellín",
    pais: "Colombia",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 6.24764,
      longitud: -75.56582
    }
  },
  {
    nombre: "Cali",
    pais: "Colombia",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 3.45165,
      longitud: -76.53199
    }
  },
  {
    nombre: "Brasilia",
    pais: "Brasil",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: -15.79752,
      longitud: -47.89189
    }
  },
  {
    nombre: "Río de Janeiro",
    pais: "Brasil",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -22.90685,
      longitud: -43.1729
    }
  },
  {
    nombre: "Buenos Aires",
    pais: "Argentina",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: -34.60367,
      longitud: -58.38212
    }
  },
  {
    nombre: "Otawa",
    pais: "Canadá",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 45.42006,
      longitud: -75.70034
    }
  },
  {
    nombre: "Toronto",
    pais: "Canadá",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 43.65483,
      longitud: -79.38845
    }
  },
  {
    nombre: "Vancouver",
    pais: "Canadá",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 49.28273,
      longitud: -123.12074
    }
  },
  {
    nombre: "Montreal",
    pais: "Canadá",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 45.50189,
      longitud: -73.56739
    }
  },
  {
    nombre: "Monterrey",
    pais: "México",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 25.68661,
      longitud: -100.31611
    }
  },
  {
    nombre: "La Habana",
    pais: "Cuba",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 23.13387,
      longitud: -82.35857
    }
  },
  {
    nombre: "Santiago de Cuba",
    pais: "Cuba",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 20.01693,
      longitud: -75.83015
    }
  },
  {
    nombre: "Santo Domingo",
    pais: "República Dominicana",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 18.46262,
      longitud: -69.93609
    }
  },
  {
    nombre: "Punta Cana",
    pais: "República Dominicana",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 18.56008,
      longitud: -68.37253
    }
  },
  {
    nombre: "Ciudad de Panamá",
    pais: "Panamá",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 8.98238,
      longitud: -79.51987
    }
  },
  {
    nombre: "Managua",
    pais: "Nicaragua",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 12.11499,
      longitud: -86.23617
    }
  },
  {
    nombre: "Tegucigalpa",
    pais: "Honduras",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 14.06071,
      longitud: -87.18245
    }
  },
  {
    nombre: "San Salvador",
    pais: "El Salvador",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 13.69806,
      longitud: -89.19153
    }
  },
  {
    nombre: "Ciudad de Guatemala",
    pais: "Guatemala",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 14.63491,
      longitud: -90.50688
    }
  },
  {
    nombre: "Quito",
    pais: "Ecuador",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: -0.22325,
      longitud: -78.51411
    }
  },
  {
    nombre: "Lima",
    pais: "Perú",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: -12.04669,
      longitud: -77.04309
    }
  },
  {
    nombre: "Cusco",
    pais: "Perú",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -13.53195,
      longitud: -71.96746
    }
  },
  {
    nombre: "Rosario",
    pais: "Argentina",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -32.9587,
      longitud: -60.69304
    }
  },
  {
    nombre: "Santa Cruz de la Sierra",
    pais: "Bolivia",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -17.79807,
      longitud: -63.19251
    }
  },
  {
    nombre: "Montevideo",
    pais: "Uruguay",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: -34.9055,
      longitud: -56.18511
    }
  },
  {
    nombre: "Punta del Este",
    pais: "Uruguay",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -34.93606,
      longitud: -54.93781
    }
  },
  {
    nombre: "Santiago de Chile",
    pais: "Chile",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: -33.44889,
      longitud: -70.66927
    }
  },
  {
    nombre: "Valparaíso",
    pais: "Chile",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -33.04731,
      longitud: -71.61275
    }
  },
  {
    nombre: "Mendoza",
    pais: "Argentina",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -32.88946,
      longitud: -68.84584
    }
  },
  {
    nombre: "Caracas",
    pais: "Venezuela",
    continente: "América",
    esCapitalDePais: true,
    coordenada: {
      latitud: 10.5017,
      longitud: -66.91111
    }
  },
  {
    nombre: "Maracaibo",
    pais: "Venezuela",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 10.64101,
      longitud: -71.60738
    }
  },
  {
    nombre: "Cochabamba",
    pais: "Bolivia",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -17.38201,
      longitud: -66.15958
    }
  },
  {
    nombre: "São Paulo",
    pais: "Brasil",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: -23.55577,
      longitud: -46.63956
    }
  },
  {
    nombre: "Chicago",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 41.88325,
      longitud: -87.63239
    }
  },
  {
    nombre: "Houston",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 29.76008,
      longitud: -95.37011
    }
  },
  {
    nombre: "Dallas",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 32.77666,
      longitud: -96.79699
    }
  },
  {
    nombre: "San Antonio",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 29.42519,
      longitud: -98.49459
    }
  },
  {
    nombre: "San Francisco",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 37.77493,
      longitud: -122.41942
    }
  },
  {
    nombre: "Seattle",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 47.60614,
      longitud: -122.33285
    }
  },
  {
    nombre: "Boston",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 42.35551,
      longitud: -71.05654
    }
  },
  {
    nombre: "Filadelfia",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 39.95258,
      longitud: -75.16522
    }
  },
  {
    nombre: "San Diego",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 32.71574,
      longitud: -117.16108
    }
  },
  {
    nombre: "Aspen",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 39.1911,
      longitud: -106.81754
    }
  },
  {
    nombre: "Cancún",
    pais: "México",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 21.16191,
      longitud: -86.85153
    }
  },
  {
    nombre: "Veracruz",
    pais: "México",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 19.17377,
      longitud: -96.13422
    }
  },
  {
    nombre: "Acapulco",
    pais: "México",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 16.86395,
      longitud: -99.88228
    }
  },
  {
    nombre: "Denver",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 39.73924,
      longitud: -104.99025
    }
  },
  {
    nombre: "Nueva Orleans",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 29.95089,
      longitud: -90.07584
    }
  },
  {
    nombre: "Atlanta",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 33.75013,
      longitud: -84.38852
    }
  },
  {
    nombre: "Detroit",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 42.32972,
      longitud: -83.04245
    }
  },
  {
    nombre: "Nashville",
    pais: "Estados Unidos",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 36.16266,
      longitud: -86.7816
    }
  },
  {
    nombre: "Cartagena de Indias",
    pais: "Colombia",
    continente: "América",
    esCapitalDePais: false,
    coordenada: {
      latitud: 10.39323,
      longitud: -75.48323
    }
  },
  {
    nombre: "Tokio",
    pais: "Japón",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 35.6895,
      longitud: 139.69171
    }
  },
  {
    nombre: "Kabul",
    pais: "Afganistán",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 34.55535,
      longitud: 69.20749
    }
  },
  {
    nombre: "Pekín",
    pais: "China",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 39.90421,
      longitud: 116.40739
    }
  },
  {
    nombre: "Shanghái",
    pais: "China",
    continente: "Asia",
    esCapitalDePais: false,
    coordenada: {
      latitud: 31.23042,
      longitud: 121.4737
    }
  },
  {
    nombre: "Seúl",
    pais: "Corea del Sur",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 37.566,
      longitud: 126.9784
    }
  },
  {
    nombre: "Bombay",
    pais: "India",
    continente: "Asia",
    esCapitalDePais: false,
    coordenada: {
      latitud: 18.95823,
      longitud: 72.83195
    }
  },
  {
    nombre: "Nueva Deli",
    pais: "India",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 28.61393,
      longitud: 77.20883
    }
  },
  {
    nombre: "Hong Kong",
    pais: "China",
    continente: "Asia",
    esCapitalDePais: false,
    coordenada: {
      latitud: 22.27832,
      longitud: 114.17469
    }
  },
  {
    nombre: "Bangkok",
    pais: "Tailandia",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 13.75633,
      longitud: 100.50177
    }
  },
  {
    nombre: "Ciudad de Singapur",
    pais: "Singapur",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 1.28967,
      longitud: 103.85007
    }
  },
  {
    nombre: "Manila",
    pais: "Filipinas",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 14.59951,
      longitud: 120.98423
    }
  },
  {
    nombre: "Hanói",
    pais: "Vietnam",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 21.02776,
      longitud: 105.83416
    }
  },
  {
    nombre: "Dubái",
    pais: "Emiratos Árabes Unidos",
    continente: "Asia",
    esCapitalDePais: false,
    coordenada: {
      latitud: 25.20485,
      longitud: 55.27078
    }
  },
  {
    nombre: "Abu Dabi",
    pais: "Emiratos Árabes Unidos",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 24.45388,
      longitud: 54.37734
    }
  },
  {
    nombre: "Damasco",
    pais: "Siria",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 33.51322,
      longitud: 36.27682
    }
  },
  {
    nombre: "Taipéi",
    pais: "Taiwán",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 25.03297,
      longitud: 121.56542
    }
  },
  {
    nombre: "Kioto",
    pais: "Japón",
    continente: "Asia",
    esCapitalDePais: false,
    coordenada: {
      latitud: 35.01156,
      longitud: 135.76815
    }
  },
  {
    nombre: "Ankara",
    pais: "Turquía",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 39.93336,
      longitud: 32.85974
    }
  },
  {
    nombre: "Calcuta",
    pais: "India",
    continente: "Asia",
    esCapitalDePais: false,
    coordenada: {
      latitud: 22.57435,
      longitud: 88.36287
    }
  },
  {
    nombre: "Doha",
    pais: "Catar",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 25.28545,
      longitud: 51.53104
    }
  },
  {
    nombre: "Manama",
    pais: "Baréin",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 26.22353,
      longitud: 50.58759
    }
  },
  {
    nombre: "Ciudad de Kuwait",
    pais: "Kuwait",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 29.37803,
      longitud: 47.97512
    }
  },
  {
    nombre: "Riad",
    pais: "Arabia Saudí",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 24.71355,
      longitud: 46.6753
    }
  },
  {
    nombre: "Teherán",
    pais: "Irán",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 35.72186,
      longitud: 51.3347
    }
  },
  {
    nombre: "Bagdad",
    pais: "Irak",
    continente: "Asia",
    esCapitalDePais: true,
    coordenada: {
      latitud: 33.31524,
      longitud: 44.36607
    }
  },
  {
    nombre: "El Cairo",
    pais: "Egipto",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: 30.04442,
      longitud: 31.23571
    }
  },
  {
    nombre: "Alejandría",
    pais: "Egipto",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 31.20009,
      longitud: 29.91874
    }
  },
  {
    nombre: "Casablanca",
    pais: "Marruecos",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 33.57311,
      longitud: -7.58984
    }
  },
  {
    nombre: "Rabat",
    pais: "Marruecos",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: 34.00836,
      longitud: -6.85387
    }
  },
  {
    nombre: "Johannesburgo",
    pais: "Sudáfrica",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: -26.20565,
      longitud: 28.03372
    }
  },
  {
    nombre: "Praia",
    pais: "Cabo Verde",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: 14.91977,
      longitud: -23.50734
    }
  },
  {
    nombre: "Nairobi",
    pais: "Kenia",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: -1.29207,
      longitud: 36.82195
    }
  },
  {
    nombre: "Fez",
    pais: "Marruecos",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 34.01812,
      longitud: -5.00785
    }
  },
  {
    nombre: "Marrakech",
    pais: "Marruecos",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 31.62252,
      longitud: -7.98983
    }
  },
  {
    nombre: "Tánger",
    pais: "Marruecos",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 35.75947,
      longitud: -5.83395
    }
  },
  {
    nombre: "Lagos",
    pais: "Nigeria",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 6.61374,
      longitud: 3.35526
    }
  },
  {
    nombre: "Trípoli",
    pais: "Libia",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: 32.88771,
      longitud: 13.18719
    }
  },
  {
    nombre: "Dakar",
    pais: "Senegal",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: 14.71668,
      longitud: -17.46769
    }
  },
  {
    nombre: "Argel",
    pais: "Argelia",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: 36.77638,
      longitud: 3.05861
    }
  },
  {
    nombre: "Luxor",
    pais: "Egipto",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 25.68724,
      longitud: 32.63964
    }
  },
  {
    nombre: "Asuán",
    pais: "Egipto",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 24.08894,
      longitud: 32.89983
    }
  },
  {
    nombre: "Puerto Sudán",
    pais: "Sudán",
    continente: "África",
    esCapitalDePais: false,
    coordenada: {
      latitud: 19.60197,
      longitud: 37.20758
    }
  },
  {
    nombre: "Luanda",
    pais: "Angola",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: -8.81466,
      longitud: 13.23018
    }
  },
  {
    nombre: "Maputo",
    pais: "Mozambique",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: -25.96925,
      longitud: 32.57317
    }
  },
  {
    nombre: "Antananarivo",
    pais: "Madagascar",
    continente: "África",
    esCapitalDePais: true,
    coordenada: {
      latitud: -18.91846,
      longitud: 47.52113
    }
  },
  {
    nombre: "Camberra",
    pais: "Australia",
    continente: "Oceanía",
    esCapitalDePais: true,
    coordenada: {
      latitud: -35.28018,
      longitud: 149.13103
    }
  },
  {
    nombre: "Sídney",
    pais: "Australia",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -33.86225,
      longitud: 151.20768
    }
  },
  {
    nombre: "Melbourne",
    pais: "Australia",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -37.81363,
      longitud: 144.96306
    }
  },
  {
    nombre: "Auckland",
    pais: "Nueva Zelanda",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -36.85088,
      longitud: 174.76449
    }
  },
  {
    nombre: "Wellington",
    pais: "Nueva Zelanda",
    continente: "Oceanía",
    esCapitalDePais: true,
    coordenada: {
      latitud: -41.29238,
      longitud: 174.77875
    }
  },
  {
    nombre: "Adelaida",
    pais: "Australia",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -34.9285,
      longitud: 138.60075
    }
  },
  {
    nombre: "Brisbane",
    pais: "Australia",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -27.47045,
      longitud: 153.02603
    }
  },
  {
    nombre: "Darwin",
    pais: "Australia",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -12.46373,
      longitud: 130.84444
    }
  },
  {
    nombre: "Hobart",
    pais: "Australia",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -42.88261,
      longitud: 147.32572
    }
  },
  {
    nombre: "Queenstown",
    pais: "Nueva Zelanda",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -45.03015,
      longitud: 168.66151
    }
  },
  {
    nombre: "Suva",
    pais: "Fiyi",
    continente: "Oceanía",
    esCapitalDePais: true,
    coordenada: {
      latitud: -18.12656,
      longitud: 178.43991
    }
  },
  {
    nombre: "Nadi",
    pais: "Fiyi",
    continente: "Oceanía",
    esCapitalDePais: false,
    coordenada: {
      latitud: -17.78063,
      longitud: 177.4299
    }
  },
  {
    nombre: "Honiara",
    pais: "Islas Salomón",
    continente: "Oceanía",
    esCapitalDePais: true,
    coordenada: {
      latitud: -9.43067,
      longitud: 159.95268
    }
  },
  {
    nombre: "Apia",
    pais: "Samoa",
    continente: "Oceanía",
    esCapitalDePais: true,
    coordenada: {
      latitud: -13.83161,
      longitud: -171.76891
    }
  },
  {
    nombre: "Majuro",
    pais: "Islas Marshall",
    continente: "Oceanía",
    esCapitalDePais: true,
    coordenada: {
      latitud: 7.09157,
      longitud: 171.3804
    }
  }
];
/*
* Coordenadas obtenidas: API de Google Places.
* Ayuda: https://www.geodatos.net/coordenadas
* 180 ciudades: 60 de Europa, 60 de América,
* 25 de Asia, 20 de África y 15 de Oceanía.
* Hay 20 ciudades de España y 20 de EE.UU.
* Hay 82 países distintos y 77 capitales.
* Los 5 países sin capitales son: Suiza,
* Bolivia, Sudáfrica, Nigeria y Sudán.
*/