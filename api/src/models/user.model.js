module.exports = (prisma) => {
  return {
    //GETs
    findAll() {
      return prisma.user.findMany();
    },
    findById(id) {
      return prisma.user.findUnique({ where: { id } });
    },
    findByEmail(email) {
      return prisma.user.findUnique({ where: { email } });
    },
    findByUsername(username) {
      return prisma.user.findUnique({ where: { username } });
    },
    findAuthors(limit = null) {
      const queryOptions = {
        where: {
          role: "AUTHOR"
        },
        
      };

      if (limit) {
        queryOptions.take = limit;
        queryOptions.orderBy = {
          createdAt: 'desc'
        }
      }

      const authors = prisma.user.findMany(queryOptions);
      return authors;
    },

    //POSTs
    create(data) {
      return prisma.user.create({ data });
    },
    delete(id) {
      return prisma.user.delete({ where: { id } });
    },

    //PUTS
    update(id, data) {
      return prisma.user.update({ where: { id }, data });
    },
  }
};