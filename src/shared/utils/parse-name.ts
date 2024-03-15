export function parseName(name?: string): string {
  if (!name) return "P";
  const nameParts = name.split(" ");

  if (nameParts.length >= 2) {
    return nameParts[0][0] + nameParts[1][0];
  } else {
    return name[0];
  }
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
