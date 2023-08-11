
const tmi = require('tmi.js');

const opts = {
  identity: {
    username: 'talhacaba',
    password: 'oauth:74cenlcumvyoyxkz5mnmpmdy0l6r96'
  },
  channels: ['talhacaba']
};

const client = new tmi.client(opts);

client.connect();


client.on('follow', (channel, username, self) => {
  if (self) return;

  client.say(channel, `Merhaba @${username}! Takip ettiğin için teşekkür ederim!`);
});

const customCommands = {
  'merhaba': 'Merhaba, nasılsınız?',
  'sa': 'Aleyküm Selam, Hoşgeldin!',
  'selam': 'Aleyküm Selam, Hoşgeldin!',
  'mrb': 'Merhaba, Nasılsın?',
  '!instagram': 'https://www.instagram.com/',
  '!youtube': 'https://www.youtube.com/',
  '!github': 'https://github.com/talhacaba'
};

client.on('message', (channel, userstate, message, self) => {
  if (self) return;

  const commandName = message.trim();

  if (customCommands[commandName]) {
    client.say(channel, customCommands[commandName]);
  }
});


client.on('subscription', (channel, username, method, message, userstate) => {
  client.say(channel, `Tebrikler @${username}! Abone oldunuz, destek için teşekkür ederiz.`);
});

client.on('cheer', (channel, userstate, message) => {
  client.say(channel, `Teşekkür ederiz ${userstate.bits} Bits için, @${userstate.username}!`);
});


client.on('disconnected', (reason) => {
  console.log(`Bot bağlantısı kesildi: ${reason}`);
  process.exit(1); 
});


client.on('connected', () => {
  console.log('Bot bağlandı.');
});
// Github Adresim: github.com/talhacaba
// Komutların Çalışabilmesi İçin tmi.js Modülünü Yüklemeniz Gerekiyor.