import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1999",
      image: "/images/wireless-headphones.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2999",
      image: "/images/smartwatch.jpg",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: "₹2499",
      image: "/images/sportshoes.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;