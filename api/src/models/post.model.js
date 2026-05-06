const includeAuthorData = {
  include: {
    author: {
      select: {
        id: true,
        name: true,
        username: true,
      }
    }
  }
};

module.exports = (prisma) => {
  return {
    //GETs
    findAll() {
      return prisma.post.findMany({
        include: {
          author: {
            select: {
              id: true,
              name: true,
              username: true,
            }
          }
        }
      });
    },
    findById(id) {
      return prisma.post.findUnique({ where: { id }, includeAuthorData });
    },
    findByAuthorId(authorId) {
      //Needs testing
      return prisma.post.findUnique({ where: { authorId, includeAuthorData } });
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