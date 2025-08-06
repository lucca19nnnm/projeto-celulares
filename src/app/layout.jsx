import Header from '../components/Header/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header title="Mobile Store" subtitle="Os melhores produtos para você!" />
        {children}
      </body>
    </html>
  );
}