const nameStart = (str) => {
  return str[0] === " " && str[1] === " ";
};

const isLetter = (str) => {
  return str.length === 1 && str.toLowerCase() !== str.toUpperCase();
}

const parser = (rawText) => {
  return rawText.split("");
  const dict = {};

  return [rawText];
};

module.exports = { parser };

console.log(" " === " ".toUpperCase());

console.log(isLetter(""));