module.exports = {
  name: 'editions',
  description: 'Explaination about editions',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "In simple terms editions are like prints, or copies of the same art. It is important that you decide the number of editions when you are minting the token because you can't create more later.\n\nWhen tokenizing art the rarity is a very important aspect. Buyers will take this into consideration when making a purchase and it will a part of the equation when determining value. When you tokenize a piece of art you are setting the number of editions forever so please choose wisely.",
}});
  },
};
