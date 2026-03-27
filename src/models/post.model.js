module.exports = (prisma) => {
  return {
    //GETs
    findAll() {
      return prisma.post.findMany();
    },
    findById(id) {
      return prisma.post.findUnique({ where: { id } });
    },
    findByAuthorId(authorId) {
      //Needs testing
      return prisma.post.findUnique({ where: { authorId } });
    },

    //POSTs
    create(data) {
      return prisma.post.create({ data });
    },
    delete(id) {
      return prisma.post.delete({ where: { id } });
    },

    //PUTS
    update(id, data) {
      return prisma.post.update({ where: { id }, data });
    },    
  }
};