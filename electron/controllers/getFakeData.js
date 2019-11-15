var faker = require("faker");

module.exports ={
  user: generateFakeUser = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
  },
   product: generateFakeProduct = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
  },
  categorie: generateFakeCategorie = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
  },
  correio: generateFakeCategorie = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
  },
}



