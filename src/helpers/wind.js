const getWindDir = deg => {
  if (deg >= 337.5 || deg < 22.5) return `${deg}º N`;
  if (deg >= 22.5 && deg < 67.5) return `${deg}º NE`;
  if (deg >= 67.5 && deg < 112.5) return `${deg}º E`;
  if (deg >= 112.5 && deg < 157.5) return `${deg}º SE`;
  if (deg >= 157.5 && deg < 202.5) return `${deg}º S`;
  if (deg >= 202.5 && deg < 247.5) return `${deg}º SW`;
  if (deg >= 247.5 && deg < 292.5) return `${deg}º W`;
  return `${deg}º NW`;
};

export default getWindDir;
