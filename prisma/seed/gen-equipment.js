const faker = require('faker')

const categories = [
    "Air Compressor And Air Tools",
    "Heating, Venilation, And Air Conditioning",
    "Lawn, Landscape, And Tree",
]

module.exports = function equipment(count, userIds = []) {
    let result = []

    let i = 0

    while (i < count) {
        result.push({
            name: faker.commerce.productName(),
            model: faker.finance.bic(),
            manufacturer: faker.name.lastName(),
            image: faker.image.cats(480, 480, true),
            category: categories[Math.floor(Math.random() * categories.length)],
            isAvailable: true,
            description: faker.lorem.lines(3),
            price: faker.commerce.price(0, 200, 0, '$'),
            userId: null,
        })
        i++
    }

    // TODO:  implement real userIds in place of null for checked-out equipment.  Note that users must be of role, "USER".

    return result
}
