module.exports = {
  name: 'blame',
  description: 'Blames Shane for whatever is wrong',
  execute(msg, args) {
    msg.channel.send('This is Shane\'s fault, blame him.');
  },
};
