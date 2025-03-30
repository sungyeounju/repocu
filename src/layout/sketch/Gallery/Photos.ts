const Photos = (id, count) => {
  return Array.from({ length: count }, (_, index) => {
    const imageNum = index + 1;
    return {
      alt: `image${imageNum}`,
      source: `/images/sketch/${id}/img${imageNum}.jpg`,
      width: "auto",
      height: "auto",
    };
  });
};

export default Photos;
