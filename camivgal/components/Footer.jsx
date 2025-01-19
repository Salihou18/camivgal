import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul>
                    <li><a href='#'>À propos</a></li>
                    <li><a href='#'></a></li>
                    <li><a href='#'></a></li>
                    <li><a href='#'>Nous contacter</a></li>
                </ul>
            </nav>
            <p>&copy; {new Date().getFullYear()} Camivgal. Tous droits réservés.</p>
        </footer>
    );
}
