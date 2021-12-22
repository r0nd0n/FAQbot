module.exports = {
  name: 'kc',
  description: 'Obten una cuenta de Hive e Instala Keychain',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "La Extensión de HIVE Keychain es recomendada para usar NFT Showroom. Para instalarla, use el link correspondiente de abajo.\n\n[Chrome/Brave](https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep) o [Firefox](https://addons.mozilla.org/en-US/firefox/addon/hive-keychain)\n\nTambien puede usar la opcion de SmartLock tanto en la version movil como desktop (escritorio), debe ingresar su clave activa privada y crear su propio Código PIN.",
}});
  },
};
