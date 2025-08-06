import styles from './Header.module.css';
import Image from 'next/image';

export default function Header({ title, subtitle }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/image/nova-logo.jpg"
                    alt="Logo da empresa"
                    width={80}
                    height={80}
                    priority
                />
            </div>
            <div className={styles.texts}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
            </div>
        </header>
    );
}
