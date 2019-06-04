const toFar = temp => parseFloat(temp * (9 / 5) + 32).toFixed(2);

const toKel = temp => parseFloat(temp + 273.15).toFixed(2);

const getTemp = (temp, unit) => {
  if (unit === "F") return `${toFar(temp)}º ${unit}`;
  if (unit === "K") return `${toKel(temp)}º ${unit}`;
  return `${temp}º ${unit}`;
};

export default getTemp;
