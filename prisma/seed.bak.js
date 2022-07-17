import { PrismaClient } from '@prisma/client';
import {faker} from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
    await prisma.equipment.deleteMany();
    await prisma.user.deleteMany();

    for (let i=0; i<5; i++) {
        await prisma.user.create({
            data: {
                email: `${faker.internet.email()}`,
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                rentals: {
                    create: [
                        {   
                            name: faker.commerce.productName(),
                            model: faker.random.numeric(5),
                            manufacturer: faker.name.lastName(),
                            price: faker.commerce.price(0, 200, 0, '$'),
                            image: faker.image.abstract(250, 250, true),
                            category: "Air Compressor And Air Tools",
                            isAvailable: false,
                            description: faker.lorem.lines(3),
                        },
                        {       
                            name: faker.commerce.productName(),
                            model: faker.random.numeric(5),
                            manufacturer: faker.name.lastName(),
                            price: faker.commerce.price(0, 200, 0, '$'),
                            image: faker.image.cats(480, 480, true),
                            category: "Heating, Venilation, And Air Conditioning",
                            isAvailable: false,
                            description: faker.lorem.lines(3),
                        },
                        {
                            name: faker.commerce.productName(),
                            model: faker.random.numeric(5),
                            manufacturer: faker.name.lastName(),
                            price: faker.commerce.price(0, 200, 0, '$'),
                            image: faker.image.image(480, 480, true),
                            category: "Lawn, Landscape, And Tree",
                            isAvailable: false,
                            description: faker.lorem.lines(3),
                        },
                    ],
                },
            },
        });
    }

    // for (let i=0; i<2; i++) {
    //     await prisma.equipment.create({
    //         data: {
    //                 name: faker.commerce.productName(),
    //                 model: faker.random.numeric(5),
    //                 manufacturer: faker.name.lastName(),
    //                 price: faker.commerce.price(0, 200, 0, '$'),
    //                 image: faker.image.abstract(480, 480, true),
    //                 category: "Air Compressor And Air Tools",
    //                 description: faker.lorem.lines(3),
    //         },
    //     });
    // }
    // for (let i=0; i<2; i++) {
    //     await prisma.equipment.create({
    //         data: {
    //                 name: faker.commerce.productName(),
    //                 model: faker.random.numeric(5),
    //                 manufacturer: faker.name.lastName(),
    //                 price: faker.commerce.price(0, 200, 0, '$'),
    //                 image: faker.image.cats(480, 480, true),
    //                 category: "Heating, Venilation, And Air Conditioning",
    //                 description: faker.lorem.lines(3),
    //         },
    //     });
    // }
    // for (let i=0; i<2; i++) {
    //     await prisma.equipment.create({
    //         data: {
    //                 name: faker.commerce.productName(),
    //                 model: faker.random.numeric(5),
    //                 manufacturer: faker.name.lastName(),
    //                 price: faker.commerce.price(0, 200, 0, '$'),
    //                 image: faker.image.image(480, 480, true),
    //                 category: "Lawn, Landscape, And Tree",
    //                 description: faker.lorem.lines(3),
    //         },
    //     });
    // }
}

main().catch (e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
