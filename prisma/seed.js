const { PrismaClient } = require('@prisma/client');
const faker = require("faker")

const prisma = new PrismaClient();

const categories = [
    "Air Compressor And Air Tools",
    "Heating, Ventilation, And Air Conditioning",
    "Lawn, Landscape, And Tree", "Concrete",
]

const images = [
    "https://loremflickr.com/200/200/cats",
    "https://loremflickr.com/200/200/dog",
    "https://loremflickr.com/200/200/food",
]

//main seeder function
async function main() {
    //reset faker test data
    await prisma.equipment.deleteMany();
    await prisma.user.deleteMany();
    //create new faker test data
    for (let i=0; i<30; i++) {
        await prisma.user.create({
            data: {
                email: `${faker.internet.email()}`,
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                rentals: {
                    create: [
                        {   
                            name: faker.commerce.productName(),
                            model: faker.datatype.string(5),
                            manufacturer: faker.name.lastName(),
                            price: faker.commerce.price(0, 200, 0, '$'),
                            image: images[Math.floor(Math.random() * images.length)],
                            category: categories[Math.floor(Math.random() * categories.length)],
                            isAvailable: false,
                            description: faker.lorem.lines(3),
                        }
                    ],
                },
            },
        });
    }
}
//error catch and disconnect from database
main().catch (e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
