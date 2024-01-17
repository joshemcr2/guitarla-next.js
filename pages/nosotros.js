import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Blog de musica, venta de guitarras"}
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="iamagen nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur lobortis lectus quis euismod semper. Nullam varius
                urna augue, quis dictum nulla dapibus eu. Aliquam aliquet purus
                ut odio scelerisque, et accumsan orci mattis. Curabitur lectus
                odio, semper ut fermentum vel, condimentum quis velit. Integer
                sollicitudin elit dictum dolor auctor condimentum. Proin
                tincidunt, mi vitae tristique gravida, ex dolor scelerisque dui,
                quis ultricies nulla urna eget felis.
              </p>
              <p>
                ipsum ultrices sapien, sed egestas neque nisi ut tellus. Proin
                ornare nisl at urna mollis lobortis. Nunc non tortor eu turpis
                porta dictum non in tellus. Cras gravida viverra ligula et
                sodales. Sed nisi orci, malesuada at rutrum eu, blandit luctus
                nunc. Integer at maximus quam. Morbi egestas consequat
                convallis. Integer fermentum fringilla eros sed scelerisque.
                Vivamus ultricies pharetra quam non vehicula. Sed sagittis et
                velit nec cursus.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Nosotros;
