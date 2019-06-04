const toFar = temp => (temp * (9 / 5) + 32).toFixed(2);

const toKel = temp => (temp + 273.15);

const getTemp = (temp, unit) => {
  if (unit === "F") return `${toFar(temp)}º ${unit}`;
  if (unit === "K") return `${toKel(temp)}º ${unit}`;
  return `${temp}º ${unit}`;
};

export default getTemp;
