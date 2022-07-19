const users = require('./gen-users')
const equipment = require('./gen-equipment')

const numUsersRecordsRoleUser = 30;
const numUsersRecordsRoleEmployee = 5;
const numUsersRecordsRoleAdmin = 1;

const numEquipmentRecords = 20;

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.$queryRaw`TRUNCATE TABLE "equipment" RESTART IDENTITY CASCADE`
        await prisma.$queryRaw`TRUNCATE TABLE "user" RESTART IDENTITY CASCADE`

        await prisma.user.createMany({
            data: users(numUsersRecordsRoleUser, 'USER')
        })
        await prisma.user.createMany({
            data: users(numUsersRecordsRoleEmployee, 'EMPLOYEE')
        })
        await prisma.user.createMany({
            data: users(numUsersRecordsRoleAdmin, 'ADMIN')
        })

        const usersRoleUser = await prisma.user.findMany({
            where: {
                role: 'USER'
            },
            select: {
                id: true
            }
        })

        const equipmentCheckoutUsers = usersRoleUser.map(i => i.id)

        await prisma.equipment.createMany({
            data: equipment(numEquipmentRecords, equipmentCheckoutUsers)
        })

    } catch (e) {
        console.error(e)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

load()
