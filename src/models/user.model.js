module.exports = (prisma) => {
  return {
    //GETs
    findById(id) {
      return prisma.user.findUnique({ where: { id } });
    },

    //POSTs
    create(data) {
      console.log("created");
      return prisma.user.create({ data });
    }
  }
};