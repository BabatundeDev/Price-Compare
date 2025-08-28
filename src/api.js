import axios from "axios";

// DummyJSON API (works for any keyword: phone, shoes, laptop, etc.)
export async function searchProducts(query) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return response.data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
