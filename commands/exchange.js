module.exports = {
  name: 'exchange',
  description: 'como comprar HIVE',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Hive está disponible en un gran número de exchanges populares como Binance, Bittrex, Huobi etc. Las opciones libres de KYC recomendadas son https://blocktrades.us e https://ionomy.com.\n\nVea la lista completa de exchanges disponibles para comprar Hive en https://hive.io/",
}});
  },
};
