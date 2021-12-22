module.exports = {
  name: 'ediciones',
  description: 'Explicacion de Las Ediciones',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "En términos simples, las ediciones son como impresiones o copias del mismo arte. Es importante que decidas el número de ediciones cuando se hace el token porque no podrás crear más una vez tokenizado.\n\nCuando se tokeniza el arte, la rareza es un aspecto muy importante. Los compradores tendrán esto en cuenta al realizar una compra y será parte de la ecuación al determinar el valor. Cuando tokeniza una obra de arte, está estableciendo el número de ediciones para siempre, así que elija sabiamente.",
}});
  },
};
