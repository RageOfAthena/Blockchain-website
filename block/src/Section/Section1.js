import styles from "./Section1.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Section for showing Definition
function Section1(props) {
  // Hook for Intersection Observer Api
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    rootMargin: "-100px",
  });
  // useEffect to notify header to change header when we have scrolled some part of section
  useEffect(() => {
    props.getval(entry?.isIntersecting);
  }, [entry]);
  return (
    <section className={styles.section}>
      {/* For design of First section */}
      <div className={styles.shape}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      {/* Contains all the contents of Section 1 */}
      <div className={styles.content} ref={ref}>
        <div className={styles.text}>
          <h1 className={styles.texth1}>What Is a Blockchain?</h1>
          <p className={styles.textp}>
            A blockchain is a type of Digital Ledger Technology (DLT) that
            consists of growing list of records, called blocks, that are
            securely linked together using cryptography. Each block contains a
            cryptographic hash of the previous block, a timestamp, and
            transaction data (generally represented as a Merkle tree, where data
            nodes are represented by leafs).
          </p>
        </div>
        {/* Contains svg for first Section */}
        <div className={styles.img}>
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/hero-img.svg"
            alt=""
            className={styles.imgimg}
          />
        </div>
      </div>
    </section>
  );
}
export default Section1;
