const ProductsAPI = async (offset=0) => {
  try {
    const response = await fetch(
      `https://furniture-api.fly.dev/v1/products?limit=24&offset=${offset}&sort=newest`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return products?.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default ProductsAPI;
