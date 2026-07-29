# El Trecho Justo

Juego familiar, inspirado en el popular concurso de televisión "El Precio Justo", donde hay que acertar distancias entre ciudades. El ganador del juego será el que diga la cifra en kilómetros que se aproxime más al trecho justo entre dos ciudades aleatorias.

Por tanto, cada jugador debe estimar la longitud entre dos puntos geográficos, en línea recta, sobre la superficie terrestre. Es decir, hay que calcular mentalmente la distancia más corta que volaría un dron desde el centro de una ciudad hasta el centro de la otra.


## 📈 Versión 1.0.1
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff)

Esta es una versión estable del proyecto, desarrollada únicamente con tecnologías Front-End nativas: JavaScript, HTML y CSS. Se utiliza la librería de estilos Bootstrap de manera local.

Se ha testado con éxito en diferentes tamaños de pantalla y la aplicación no necesita procesos de compilación, ni instalación de dependencias, ni conexión a Internet.

En esta versión sólo aparecen ciudades españolas, en total 20, que suponen 190 combinaciones posibles, es decir, 190 preguntas diferentes. Y el número de jugadores está fijado a 3 por ahora.


## 🎮 Jugar *online*
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white)

Gracias al despliegue en GitHub Pages, se puede jugar aquí:

👉 https://almagarinos.github.io/el-trecho-justo/ 👈

## 💻 Instalación local

![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)

Una vez que descargado este proyecto en un dispositivo local, ya no es necesario tener una conexión a Internet. La base de datos de las ciudades va incluida, no se requiere de consultas a un servidor remoto.

### Clonar repositorio ⬇️

Si se tiene instalado [Git](https://git-scm.com/), sólo hay que usar los siguientes comandos en un terminal, dentro de la ruta del directorio donde se quiera descargar el juego:
```bash
git clone https://github.com/almagarinos/el-trecho-justo   # Descarga el proyecto
el-trecho-justo\index.html                 # Ejecuta el juego en un navegador web
```

### Descargar fichero 🗂️
Se puede obtener todo el proyecto comprimido en [este ZIP](https://github.com/almagarinos/el-trecho-justo/archive/refs/heads/main.zip). Descomprímase su contenido dentro del directorio donde se quiera ubicar el juego, para luego abrir el archivo **index.html** en un navegador web.


## 📂 Estructura del proyecto

```bash
el-trecho-justo/
│
├── assets/
│   │
│   ├── css/
│   │   ├── bootstrap.min.css   # Librería Bootstrap v4.4.1
│   │   └── styles.css          # Estilos propios de la aplicación
│   │
│   ├── icon/
│   │   └── ...                 # Archivos de favicon, generados en https://favicon.io/
│   │
│   └── js/
│       ├── app.js              # Lógica principal del juego, incluye comentarios
│       └── datos-ciudades.js   # Base de datos usada para las preguntas
│
└── index.html                  # Punto de entrada de la aplicación
```


## 🕹️ Dinámica del juego

El flujo de la aplicación se repite cíclicamente y consiste en el siguiente:

```bash
┌───────────────────────┐
│   Selección de dos    │
│  ciudades aleatorias  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  Se muestra pregunta  │   # Visible en la interfaz
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Fórmula de Haversine  │
│ calcula la distancia  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Cada jugador responde │   # Visible en la interfaz
│  su estimación en km  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Se hace validación de │   # Visible en la interfaz
│ todas las respuestas  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Se comparan márgenes  │   # Visible en la interfaz
│ y se anuncia ganador  │
└───────────────────────┘
```

### Cálculo de la distancia exacta 📐
Se recurre a la **ley de Haversine**, que halla el valor numérico de la distancia ortodrómica entre dos puntos del planeta. Dicha distancia es la trayectoria más corta entre dos puntos sobre la superficie de una esfera. En este caso, se miden las distancias en kilómetros entre los centros de dos ciudades. En este cálculo se usa el radio medio de la Tierra, considerado como 6371.23 km.

### Respuestas admitidas y mensajes de error ⚠️
Las respuestas de los jugadores deben ser números naturales tales que n ∈ [1, 20037]. Antes de compararlas con el cálculo de la distancia exacta, se comprueba que tengan un formato válido.

| Norma de formato para rellenar los *inputs*                                                 | Mensaje de error, por cuadro de diálogo, en caso de incumplirla                  |
|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| Cada jugador debe rellenar su casilla usando solamente dígitos, no símbolos ni letras.      | *Todos los jugadores deben responder su cifra en kilómetros. Usen sólo números.* |
| Cada jugador debe escribir un número natural, no con decimales, ni negativo, ni igual a 0.  | *La cifra del jugador X debe ser un número entero mayor que cero.*               |
| Si un jugador escribe su cifra en kilómetros siendo mayor que 20037, se le indica el error. | *La cifra del jugador X supera el máximo de 20037 km entre antípodas.*           |
| Debido a la dinámica del juego, no puede existir el empate y se evitan respuestas iguales.  | *Eviten las respuestas repetidas entre jugadores. No puede haber empate.*        |


## 📊 Base de datos

Hay información de un total de 180 ciudades. Está recogida en el objeto almacenado en `el-trecho-justo/assets/js/datos-ciudades.js`:

```javascript
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
  /* ... */
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
  /* ... */
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
  /* Hasta un total de 180 */
];
```

Hay 5 datos en cada ciudad:
* Su nombre
* País al que pertenece
* Continente donde se encuentra
* Si es capital de su país o no (booleano)
* Coordenadas en grados decimales

De las 180 ciudades hay:
* 60 de Europa
* 60 de América
* 25 de Asia
* 20 de África
* 15 de Oceanía

Además, hay 20 ciudades de España (dentro de Europa) y 20 de Estados Unidos (dentro de América).

Hay 77 capitales nacionales y 82 países distintos, y los 5 países sin capitales son: Suiza, Bolivia, Sudáfrica, Nigeria y Sudán.

Las coordenadas se han obtenido de la API de Google Places, con un margen de error de 1 km respecto al centro de cada ciudad.


## 🧮 Filtrado de ciudades

En el archivo `el-trecho-justo/assets/js/app.js` se puede hacer el filtrado de la base de datos. La clave es el *array* `seleccionCiudades`:

```javascript
const seleccionCiudades = [];
for (let i = 0; i < ciudades.length; i++) {
  if (ciudades[i].pais == "España") { // Aquí seleccionamos sólo las españolas
    seleccionCiudades.push(ciudades[i]);
  }
}
```

En esta versión actual, la base de datos está filtrada para jugar solamente con ciudades españolas, pero esto se podría modificar. Por ejemplo:

| Condición de filtrado                       | Ciudades seleccionadas    |
|---------------------------------------------|---------------------------|
| `if (ciudades[i].pais == "Estados Unidos")` | Sólo de Estados Unidos    |
| `if (ciudades[i].continente == "África")`   | Sólo de África            |
| `if (ciudades[i].esCapitalDePais)`          | Sólo capitales de país    |
| `if (ciudades[i].coordenada.latitud >= 0)`  | Sólo del hemisferio norte |

A partir de lo anterior, se pueden aplicar más combinaciones. El filtrado dinámico elegido por el jugador está contemplado en versiones futuras.