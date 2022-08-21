import styles from "./Section4.module.css";
import { useInView } from "react-intersection-observer";
import React from "react";
import img1 from "./Image/decentral.svg";
// Section containing What Is Decentralization in Blockchain?
function Section4() {
  // For Intersection Obsever api
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <section className={styles.sectionb} ref={ref}>
      {/* the following will come to view when we have scrolled 30% of the section used intersection observer api */}
      {inView && (
        <div className={styles.flex}>
          <div className={styles.left2}>
            <h1 className={styles.head}>
              What Is Decentralization in Blockchain?
            </h1>
            <p className={styles.para}>
              One of the most important concepts in blockchain technology is
              decentralization. No one computer or organization can own the
              chain. Instead, it is a distributed ledger via the nodes connected
              to the chain. Blockchain nodes can be any kind of electronic
              device that maintains copies of the chain and keeps the network
              functioning. Every node has its own copy of the blockchain and the
              network must algorithmically approve any newly mined block for the
              chain to be updated, trusted and verified. Since blockchains are
              transparent, every action in the ledger can be easily checked and
              viewed. Each participant is given a unique alphanumeric
              identification number that shows their transactions.
            </p>
          </div>
          <div className={styles.right1}>
            <img src={img1} alt="decentralized block" />
          </div>
        </div>
      )}
    </section>
  );
}
export default Section4;
