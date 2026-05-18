module.exports = (prisma) => {
  return {
    async getFeaturedPostId() {

      //needs testing
      const featuredPostData = await prisma.siteSettings.findUnique({
        where: { id: "single" } //table has only 1 row and the id is "single"
      });

      const featuredPostId = featuredPostData.featuredPostId;

      return featuredPostId;
    },
    async setFeaturedPost(id) {
      return await prisma.siteSettings.upsert({
        where: { id: "single" },
        update: { featuredPostId: id },
        create: { featuredPostId: id }
      });
    },
    async removeFeaturedPost() {
      return await prisma.siteSettings.delete({
        where: { id: "single" }
      })
    }
  }
};