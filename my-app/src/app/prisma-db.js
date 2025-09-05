import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const initItems = async () => {
  try {
    const ct = await prisma.item.count();
    if (ct == 0) {
      await prisma.item.createMany({
        data: [
          { title: "item1", price: 200 },
          { title: "item2", price: 300 },
        ],
      });
      console.log("items created");
    }
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
};
initItems();
