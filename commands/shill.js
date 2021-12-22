module.exports = {
  name: 'shill',
  description: 'How to market your artwork after tokenizing',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Marketing your artwork can be tricky in this ever increasing market. Luckily, our alien queen Julia wrote a handy guide.\n\n[Click here to learn more](https://peakd.com/hive-158694/@juliakponsford/the-power-of-crypto-art-twitter-tips-for-promoting-art)",
}});
  },
};
