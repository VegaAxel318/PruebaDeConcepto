const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Inicio del servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en: http://localhost:${port}`);
});
