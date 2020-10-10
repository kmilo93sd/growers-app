export const grows = () => {
  let rents = [];
  for (let i = 0; i < 100; i++) {
    rents.push({
      id: i.toString(),
      title: `Planta ${i}`,
      cover:
        'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo ex, scelerisque nec auctor a, venenatis et turpis. Aenean facilisis mauris felis, bibendum euismod velit eleifend ut. Morbi at sagittis mi. Praesent et ligula eget enim finibus posuere. ',
      strain: 'White widow',
      ownerId: '1',
      images: [
        'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
        'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
        'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
      ],
    });
  }
  return rents;
};
