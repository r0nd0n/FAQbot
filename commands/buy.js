module.exports = {
  name: 'buy',
  description: 'How to purchase HIVE tokens',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Hive is available on a number of popular exchanges such as Binance, Bittrex, Huobi etc. For no KYC options we recommend [blocktrades.us](https://blocktrades.us/en/trade), [swapspace.co](https://swapspace.co/?to=eth&amount=0.1), or [ionomy.com](https://ionomy.com/).\n\nFor more details, see this blog post [How to get HIVE in your wallet](https://peakd.com/art/@nftshowroom/how-to-get-hive-in-your-wallet)\n\nAlso, there is a new DEX to directly trade for swap.hive on [TribalDex](https://peakd.com/nftshowroom/@nftshowroom/tribaldex-tutorial-how-to-deposit-eth-btc-ltc-and-more-and-exchange-for-swaphive)",
}});
  },
};
