module.exports = {
  name: 'guide',
  description: 'A full guide for new users',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "New to NFT Showroom? Check out this [guide](https://peakd.com/art/@nftshowroom/nft-showroom-artist-guide-faq-and-whitelisting) to get you started.",
}});
  },
};
