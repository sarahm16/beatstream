const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors);



// app.get(`/results/:artist`, (req, res) => {
//   console.log(req.params)
//   request(
//     { url: `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=artist:'${req.params.artist}'`},
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }
//       console.log(JSON.parse(body))
//       res.json(JSON.parse(body));
//     }
//   )
// });

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));