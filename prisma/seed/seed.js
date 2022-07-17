const users = require('./gen-users')
const equipment = require('./gen-equipment')

// console.log(users(4))
// console.log(equipment(4))

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.$queryRaw`TRUNCATE TABLE "equipment" RESTART IDENTITY CASCADE`
        await prisma.$queryRaw`TRUNCATE TABLE "user" RESTART IDENTITY CASCADE`
    } catch (e) {
        console.error(e)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

load()
