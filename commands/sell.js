module.exports = {
  name: 'sell',
  description: 'How to sell your tokenized art',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Once you have tokenized art it goes to your collection where you will need to list it for sale.\n\nClick on the art, scroll down and press the manage button next to the token information , check your cart, then choose sell.\n\nThe art should now appear in the main Gallery and also in your personal gallery!",
}});
  },
};

