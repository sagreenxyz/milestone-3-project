import prisma from '../../../lib/prisma'

// const prisma = new PrismaClient();

export default async function handler(req, res) {

    const { id } = req.query

    if (req.method === 'DELETE') {
        const deletedEquipment = await prisma.equipment.delete({
            where: { id : parseInt(id)}
        })
        res.json(deletedEquipment)
    } else
    try {
        //findUnique not findOne
        const equipmentFound = await prisma.equipment.findUnique({
            where: {id: parseInt(id)}
        })
        res.status(200).json(equipmentFound)
    } catch (err) {
        res.status(500).json({error: `could not find data for equipment ID: ${equipmentId}`})
    }

}