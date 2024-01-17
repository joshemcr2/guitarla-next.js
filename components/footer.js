import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
          <p className={styles.copyright}>
            GuitarLA Next.js - Hecho por Jose A Munoz Cardozo{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
