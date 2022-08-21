import styles from "./Section2.module.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import img from "./Image/transactionprocess.png";
// Section containing How Does a Blockchain Work?
function Section2(props) {
  // For Intersection Obsever api
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={styles.section} ref={ref} id="one">
      {/* the following will come to view when we have scrolled 30% of the section used intersection observer api */}
      {inView && (
        <React.Fragment>
          <h1 className={styles.head}>How Does a Blockchain Work?</h1>
          <p className={styles.para}>
            The goal of blockchain is to allow digital information to be
            recorded and distributed, but not edited. In this way, a blockchain
            is the foundation for immutable ledgers, or records of transactions
            that cannot be altered, deleted, or destroyed. This is why
            blockchains are also known as a distributed ledger technology (DLT).
          </p>
          <div className={styles.grid}>
            <img src={img} alt="blockchain transaction process diagram" />
          </div>
        </React.Fragment>
      )}
    </section>
  );
}
export default Section2;
