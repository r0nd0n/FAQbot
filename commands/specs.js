module.exports = {
  name: 'specs',
  description: 'The file types and sizes supported on NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "IMAGE: JPEG, PNG and GIF: Maximum of 30 mb and you will need a 1 mb version for the thumbnail\n\nMP4: max 100 MB (you will also need a 5 mb thumbnail in MP4 format)\n\nFor MP4 we recommend using H264 codec as that will play reliably in most browsers!\n\nAudio: MP3 or WAV file: maximum of 30 mb and you will need a 1 Mb image for the thumbnail/cover art",
}});
  },
};
