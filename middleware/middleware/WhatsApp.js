// utils/whatsapp.js
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('WhatsApp client is ready');
});

client.on('message', (message) => {
  console.log(`Received message: ${message.body}`);
});

const sendMessage = async (number, message) => {
  try {
    await client.sendMessage(number, message);
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
  }
};

module.exports = { sendMessage };
