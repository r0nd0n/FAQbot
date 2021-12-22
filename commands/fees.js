module.exports = {
  name: 'fees',
  description: 'What it costs to tokenize your art',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "- 5 SWAP.HIVE to create 1 token plus 1 SWAP.HIVE for each edition\n- NFT Showroom takes a 10% commission on each primary sale, on secondary sales the artist receives a 10% royalty",
}});
  },
};
