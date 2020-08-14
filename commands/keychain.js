module.exports = {
  name: 'keychain',
  description: 'keychain',
  execute(msg, args) {
    msg.channel.send({embed: {
	color: 3447003,
	description: "You need HIVE Keychain to use NFT Showroom. To get it, use the appropriate link below\n[Chrome/Brave](https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/hive-keychain)\n\n[Get a hive account and install keychain video tutorial](https://www.youtube.com/watch?v=iAEuiVaUZXg)",
}});
  },
};
