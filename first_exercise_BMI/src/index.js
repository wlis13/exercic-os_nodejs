const { infoUser } = require('./bmi');
const { print } = require('./printSimpsons');
const values = require('../util/simpsons.json');


const main = () => {
  console.log(infoUser());
  console.log(print(values));

};

main();