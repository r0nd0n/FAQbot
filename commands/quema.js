module.exports = {
  name: 'quema',
  description: 'como quemar/burn tokens para eliminarlos.',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Para burn/quemar un token asegúrese que no está listado para la venta, de click en el botón azul que lo enviara al carro del menú superior para que pueda manejarlo, elija la opción de burn 🔥",
}});
  },
};
