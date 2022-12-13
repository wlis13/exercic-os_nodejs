const fs = require('fs').promises;
const path = require('path');
const FILE = '../util/simpsonsFamily.json';

const replace = async (newValue) => {
  const characters = await fs.readFile(path.resolve(__dirname, FILE));
  const jsonCharacter = JSON.parse(characters);
  const removeValues = jsonCharacter.filter((iten) => iten.id !== '5');
  const newValues = [...removeValues, newValue];
  console.log(newValues);
  // await fs.writeFile(path.resolve(__dirname, FILE));
};
replace({ id: "5", name: "Marge Simpson" });
