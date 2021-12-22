module.exports = {
  name: 'burn',
  description: 'How to burn your tokenized art',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "To burn a token make sure it is not listed for sale, visit your collection, click the manage button and go to your cart, choose burn 🔥",
}});
  },
};

