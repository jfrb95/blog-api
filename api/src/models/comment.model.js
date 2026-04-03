module.exports = (prisma) => {
  return {
    findAll() {
      return prisma.comment.findMany();
    },
    findById(id) {
      return prisma.comment.findUnique({ where: { id } });
    },
    findByPostId(postId) {
      return prisma.comment.findUnique({ where: { postId } });
    },
    findByAuthorId(authorId) {
      //Needs testing
      return prisma.comment.findUnique({ where: { authorId } });
    },

    //POSTs
    create(data) {
      return prisma.comment.create({ data });
    },
    delete(id) {
      return prisma.comment.delete({ where: { id } });
    },

    //PUTS
    update(id, data) {
      return prisma.comment.update({ where: { id }, data });
    },
  }
};