import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Products are unavailable");
        }

        const data = await response.json();

        const mappedProducts = data.map((item) => ({
          id: item.id,
          productname: item.title,
          price: item.price,
          description: item.description,
          image: item.image,
        }));

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>The Curio Shop</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
