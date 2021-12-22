module.exports = {
  name: 'archivos',
  description: 'Los tipos de archivos y tamaños permitidos en NFT Showroom',
  execute(msg, args) {
    msg.channel.send({embed: {
        color: 3447003,
        description: "Formatos admitidos actualmente: jpeg, png y gif, MP4\n\njpeg, png y gif: Máx.30 MB\n\nMP4: máximo 100 MB\n\nTambién necesitará una miniatura de 1 MB o menos para cada arte.",
}});
  },
};
