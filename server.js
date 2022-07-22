const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'storybook-static');
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get('*', (_, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Application is up & running on http://localhost:${port}`)
});