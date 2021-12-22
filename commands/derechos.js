module.exports = {
  name: 'derechos',
  description: 'Las diferencias entre las opciones de Derechos de Autor que hay en NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Private/Privado: significa que conserva todos los derechos de autor de su arte. El comprador puede exhibir el arte como parte de su colección o revenderlo en el mercado secundario.\n\nFull Commercial: significa que está vendiendo todos los derechos comerciales de su trabajo. El comprador puede hacer lo que quiera con la imagen para obtener ganancias. Eso podría incluir usarlo en un sitio web comercial, usarlo en productos impresos, etc.",
}});
  },
};
