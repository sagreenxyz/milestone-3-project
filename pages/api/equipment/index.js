import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    const equipmentFound = await prisma.equipment.findMany({});
    res.status(200).json(equipmentFound);
  } catch (err) {
    res.status(500).json({ error: "could not find data" });
  }
}
