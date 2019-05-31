const toFar = temp => temp * (9 / 5) + 32;

const toKel = temp => temp + 273.15;

const getTemp = (temp, unit) => {
  if (unit === "Fº") return `${toFar(temp).toFixed(2)} ${unit}`;
  if (unit === "Kº") return `${toKel(temp).toFixed(2)} ${unit}`;
  return `${temp} ${unit}`;
};

export default getTemp;
