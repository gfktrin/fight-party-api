function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function setRandomAttributes(character) {
  for (let x = 0; x < 5; x++) {
    const attribute = getRandomIntInclusive(0, 2);

    if (attribute == 0) {
      character.strength += 1;
    }
    if (attribute == 1) {
      character.defense += 1;
    }
    if (attribute == 2) {
      character.agility += 1;
    }
  }

  return character;
}
