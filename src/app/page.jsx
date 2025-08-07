import ProductCard from '../components/ProductCard/ProductCard';
import styles from '../app/page.module.css';
import produtos from '../data/products';
import './globals.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Produtos🔥</h1>
      <div>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            name={produto.name}
            description={produto.description}
            image={produto.image}
            price={produto.price}
            />
      ))}
      </div>
    </main>
  );
}
