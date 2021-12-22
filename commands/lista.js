module.exports = {
  name: 'lista',
  description: 'Explica el Preceso para ser aprobado en la lista blanca de NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Para postularse como artista, inicie sesión en nftshowroom.com, haga clic en su nombre en el menú superior derecho, luego haga clic en perfil. Complete el perfil lo mejor que pueda, haga clic en actualizar perfil, luego acepte los Terminos de Servicios y de click en Apply to be Whitelisted. Tenga paciencia, un moderador se comunicará con usted en sus redes sociales para verificarlo.",
}});
  },
};

