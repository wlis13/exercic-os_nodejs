const { infoUser } = require('./bmi');

const main = () => {
  const endResult = infoUser();
  console.log(endResult);
};

main();