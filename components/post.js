import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"
import styles from '../styles/blog.module.css'

function Post({ post }) {
    const { contenido, imagen, titulo, url, publishedAt } = post
    return (
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt="img blog" />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link legacyBehavior href={`/blog/${url}`}>
                    <a className={styles.enlace}>
                        Leer Post
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Post