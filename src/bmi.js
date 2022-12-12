const readLine = require('readline-sync');

const infoUser = () => {
  const weight = readLine.questionFloat('digite seu peso:');
  const height = readLine.questionFloat('digite sua altura:');
  if (height > 3 || weight > 400) {
    return 'Valor não calculável.';
  }
  const qualculate = Number((weight / height ** 2).toFixed(1));
  console.log(typeof qualculate)

  if (qualculate >= 18.5 && qualculate <= 24.9) {
    return `You BMI is ${ qualculate }, is normal weight`
  };
  if (qualculate >= 25.0 && qualculate <= 29.9) {
    return `You BMI is ${ qualculate }, is overweight`
  };
  if (qualculate >= 30.0 && qualculate <= 34.9) {
    return `You BMI is ${ qualculate }, is class 1 obesity`
  };
  if (qualculate >= 35.0 && qualculate <= 39.9) {
    return `You BMI is ${ qualculate }, is class 2 obesity`
  };
  if (qualculate > 39.9) {
    return `You BMI is ${ qualculate }, is class 3 obesity`
  };
};

module.exports =
{
  infoUser,
};
