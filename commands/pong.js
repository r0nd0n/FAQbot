module.exports = {
  name: 'pong',
  description: 'Pong!',
  execute(msg, args) {
    msg.reply('let\'s see if this works');
    msg.channel.send('!keychain');
  },
};
