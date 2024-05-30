# AR.js con Node.js

Este repositorio contiene una aplicación básica en Node.js que sirve una página HTML con AR.js y A-Frame para mostrar un cuadrado rojo usando el marcador Hiro.

## Requisitos

- Node.js y npm instalados en tu máquina. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/arjs-app.git
    cd arjs-app
    ```

2. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:

    ```bash
    node server.js
    ```

2. Abre tu navegador y ve a `http://localhost:3000`.

3. Apunta tu webcam al marcador Hiro. Deberías ver un cuadrado rojo aparecer en la pantalla.

## Estructura del Proyecto

- `public/index.html`: Contiene la página HTML que utiliza AR.js y A-Frame.
- `server.js`: Configuración del servidor Express para servir archivos estáticos.

## Código del HTML

El contenido del archivo `public/index.html` es el siguiente:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>AR.js Example</title>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://rawgit.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.js"></script>
  </head>
  <body style="margin: 0; overflow: hidden;">
    <a-scene embedded arjs="sourceType: webcam;">
      <a-marker preset="hiro">
        <a-plane position="0 0 0" rotation="-90 0 0" width="1" height="1" color="red"></a-plane>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
