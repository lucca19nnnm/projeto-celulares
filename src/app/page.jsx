  import ProductCard from '../components/ProductCard/ProductCard';

  export default function Page() {
    return (
      <main>
        <h1>Produtos🔥</h1>
        <ProductCard 
          image="/image/iphone13.jpeg"
          name="IPHONE 13"
          price="3.499,99"
        />

        <ProductCard 
          image="/image/iphone15.jpeg"
          name="IPHONE 15"
          price="4.899,99"
        />
      </main>
    );
  }