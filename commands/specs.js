module.exports = {
  name: 'specs',
  description: 'The file types and sizes supported on NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Current supported formats: jpeg, png and gif, MP4\n\njpeg, png gif: Max 30 MB\n\nMP4: Max 100 MB\n\nYou will also need a thumbnail 1 MB or smaller for each upload",
}});
  },
};
