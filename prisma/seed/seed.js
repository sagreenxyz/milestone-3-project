const users = require('./gen-users.js')

console.log(users(4))


// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();

// const load = async () => {
//     try {

//     } catch (e) {
//         console.error(e)
//         process.exit(1)
//     } finally {
//         await prisma.$disconnect()
//     }
// }

// load()
