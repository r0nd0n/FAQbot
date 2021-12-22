module.exports = {
  name: 'guia',
  description: 'una guia completa para nuevos usuarios',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Nuevo en NFT Showroom? revisa esta [guia](https://peakd.com/hive-186377/@victoriabsb/nft-showroom-tutorial-completo) antes de que comiences.",
}});
  },
};
