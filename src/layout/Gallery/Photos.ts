const Photos = Array.from({ length: 18 }, (_, index) => {
  const imageNum = index + 1;
  return {
    alt: `image${imageNum}`,
    source: require(`../../assets/image/image${imageNum}.png`),
    width: "auto",
    height: "auto",
  };
});
export default Photos;
