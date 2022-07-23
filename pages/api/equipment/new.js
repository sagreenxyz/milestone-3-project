import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST")
    try {
      const { name, manufacturer, model, category, price, description } =
        req.body;
      const createdEquipment = await prisma.equipment.create({
        // where: { id : parseInt(id) },
        data: {
          isAvailable: true,
          manufacturer: manufacturer,
          model: model,
          price: price,
          category: category,
          image: "https://loremflickr.com/200/200/cats",
          description: description,
          name: name,
        //   renter: {
        //       id: 0,
        //       name: null,
        //       email: null,
        //       emailVerified: null,
        //       image: null,
        //   },
          userId: "cl5t0vnz100398gsoxam1d7ds"
        },
      });
      res.status(200).json(createdEquipment);
    } catch (err) {
        console.log(err)
      res.status(500).json({ error: `could not add new equipment` });
    }
}
