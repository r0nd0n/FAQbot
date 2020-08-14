module.exports = {
  name: 'sell',
  description: 'How to sell your tokenized art',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Once you have tokenized art it goes to your collection where you will need to list it for sale.\n\nPress the blue plus button next to the information at the bottom, check your cart and set a price/list for sale.\n\nThe art should now appear in the main Gallery and also in your personal gallery!",
}});
  },
};

