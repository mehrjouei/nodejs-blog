module.exports = {
  async up(db, client) {
    await db.collection("users").insertMany([
      {
        fullName: "Vahid Mehrjouei",
        email: "mehrjooei.v@gmail.com",
        password:
          "$2a$12$sQ24b3vA0TzhN4IybuGq/eatVeEvtNLC2INouXeT2fzTyMnIJ6uNK",
      },
    ]);
  },

  async down(db, client) {
    await db.collection("users").deleteMany({
      email: {
        $in: ["mehrjooei.v@gmail.com"],
      },
    });
  },
};
