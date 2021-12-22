module.exports = {
  name: 'keychain',
  description: 'How to install Keychain or use Smartlock for NFT Showroom login',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "The HIVE Keychain extension is recommended to use NFT Showroom. To install it, use the appropriate link below\n[Chrome/Brave](https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/hive-keychain)\n\nHive keychain is now also available on mobile, see this post on [Mobile Keychain setup](https://peakd.com/art/@nftshowroom/hive-keychain-mobile-update-the-app-browser-is-now-live):\n[Android](https://play.google.com/store/apps/details?id=com.mobilekeychain)\n[iOS](https://apps.apple.com/us/app/hive-keychain/id1552190010)",
}});
  },
};
