

const ProductsAPI = async () => {

    try {
        const response = await fetch('https://furniture-api.fly.dev/v1/products?limit=24&offset=0&sort=newest', {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        console.log(products?.data);
        return products; 
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


export default ProductsAPI;
