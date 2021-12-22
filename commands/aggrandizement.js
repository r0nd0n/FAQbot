module.exports = {
  name: 'aggrandizement',
  description: 'Julia talks about herself in the third person',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "It is currently possible to implement infrastructure where Hive NFTs are transferred to ETH and it’s something we have on our radar. It does present some issues such as cutting out secondary sales for artists, also it would introduce gas fees, which we are trying to avoid so there are many things to consider.\n\nWe would like to focus on making sure our own infrastructure and user experience is as smooth as possible before embarking on cross chain transactions, but we are aware that it’s highly requested.",
}});
  },
};
