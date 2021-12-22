module.exports = {
  name: 'tarifa',
  description: 'Cuanto cuesta tokenizar tu arte',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "5 SWAP.HIVE para crear 1 un token más 1 SWAP.HIVE por cada edición\n\nNFT Showroom cobra una comisión del 10% en cada venta primaria, la tarifa de venta secundaria también es del 10%, pero el 5% de esta va para el artista original.",
}});
  },
};
