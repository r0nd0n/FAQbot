module.exports = {
  name: 'whitelist',
  description: 'Explains the process for getting whitelisted on NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
   description: 'To apply as an artist, log in to https://nftshowroom.com, click your name in the upper right menu > then click profile. Fill out the profile as best you can, **click update profile** then **agree to the TOS and apply.** Please be patient, an admin will contact you on social media for verification.'
}});
  },
};
