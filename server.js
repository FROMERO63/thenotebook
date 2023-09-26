const express = require('express');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');
const app = express();
const PORT = 3001;

//calls so we can use these
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);

//listen method which will listen at specified port
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});