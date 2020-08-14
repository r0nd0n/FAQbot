module.exports = {
  name: 'rights',
  description: 'Differences between the rights options on NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "**Private** means you retain the full copyright to your image. The buyer may display the art as part of their collection or resell it on the secondary market.\n\n**Full Commercial** means you are selling the full commercial rights to your work. This means the buyer can do whatever they like with the image for profit. That could include using it on a commercial website, using it on printed merch etc.",
}});
  },
};
