module.exports = {
  name: 'venta',
  description: 'Como vender tu arte tokenizado',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Una vez que haya tokenizado el arte, irá a su colección donde deberá ponerlo a la venta.\n\nPresione el botón azul con simbolo +, junto a la información en la parte inferior de su arte, verifique su carrito y establezca un precio esto lo listara para la venta.\n\n¡El arte aparecera una vez puesto a la venta en la Galería principal y también en tu galería personal!",
}});
  },
};
