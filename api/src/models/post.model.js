const includeAuthorData = {
  author: {
    select: {
      id: true,
      name: true,
      username: true,
    }
  }
};

module.exports = (prisma) => {
  return {
    //GETs
    findAll() {
      return prisma.post.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        include: includeAuthorData
      });
    },
    findById(id) {
      return prisma.post.findUnique({ 
        where: { id }, 
        include: includeAuthorData 
      });
    },
    findByAuthorId(authorId) {
      //Needs testing
      return prisma.post.findUnique({ 
        where: { authorId },
        orderBy: {
          createdAt: 'desc'
        },
        include: includeAuthorData
      });
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