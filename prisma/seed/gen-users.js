const faker = require('faker')

module.exports = function users(count, role='USER') {
    let result = []

    let i = 0

    while (i < count) {
        result.push({
            email: faker.internet.email(),
            name: faker.name.findName(),
            role: role
        })
        i++
    }

    return result
}
