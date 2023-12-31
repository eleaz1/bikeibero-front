const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/bike-front'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/bike-front/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
