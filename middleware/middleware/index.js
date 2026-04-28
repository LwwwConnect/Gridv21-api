// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const errorHandler = require('./middleware/errorHandler');
const healthRoute = require('./routes/health');

app.use(express.json());
app.use('/health', healthRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
