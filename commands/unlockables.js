module.exports = {
  name: 'unlockables',
  description: 'Explains unlockables on NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
   description: 'Unlockables allow you to add a higher quality image/video etc. that only your buyer can access. There are two formats, file or link, you can use one or the other, not both.\n\nAfter tokenizing visit your collection. click on the art, scroll down and add the unlockable of your choice.\n\nFILE JPEG, PNG, GIF, MP4 or PDF up to 100 mb\n\nLINK Add a self hosted link to google drive, dropbox, mega.nz etc.\n\nFor more detailed info see this post: [Unlockables and Referrals](https://peakd.com/art/@nftshowroom/nft-showroom-updates-new-look-unlockables-referral-system)'
}});
  },
};
