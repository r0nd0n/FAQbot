module.exports = {
  name: 'rights',
  description: 'Differences between the rights options on NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "**Private** means you retain the full copyright to your image. The buyer may display the art as part of their collection or resell it on the secondary market.\n\n**Limited Reproduction Rights** means the artist grants the owner full commercial rights for the work to be used or recreated in commerce, but does not give away the creator's license.",
}});
  },
};
