export const generateCards = (n: number) => {
  const cards = new Array(n).fill(() => null);

  return cards.map((_, i) => {
    return {
      id: `card ${i}`,
      title: `card #${i}`,
      image: 'assets/placeholder.png',
      boldText: 'Bold text',
      underlineText: 'Underline text',
      boldAndUnderline: 'Bold and undeline',
    };
  });
};
