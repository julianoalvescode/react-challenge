export function getRandomBgColor(): string {
  const colors: string[] = [
    "bg-rose-600",
    "bg-green-500",
    "bg-blue-700",
    "bg-amber-400",
  ];
  return colors[Math.floor(Math.random() * colors.length)].toLocaleLowerCase();
}
