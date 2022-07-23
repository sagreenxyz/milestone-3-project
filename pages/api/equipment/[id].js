import prisma from "../../../lib/prisma";

// const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const deletedEquipment = await prisma.equipment.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(deletedEquipment);
  } else if (req.method === "PUT") {
    const { manufacturer, model, price, description } = req.body;
    const updatedEquipment = await prisma.equipment.update({
      where: { id: parseInt(id) },
      data: {
        isAvailable: false,
        manufacturer: manufacturer,
        model: model,
        price: price,
        description: description,
      },
    });
    res.status(200).json(updatedEquipment);
  } else if (req.method === "GET")
    try {
      //findUnique not findOne
      const equipmentFound = await prisma.equipment.findUnique({
        where: { id: parseInt(id) },
      });
      res.status(200).json(equipmentFound);
    } catch (err) {
      res
        .status(500)
        .json({ error: `could not find data for equipment ID: ${id}` });
    }
}
