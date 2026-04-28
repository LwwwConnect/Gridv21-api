// routes/health.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Service is running' });
});

module.exports = router;
