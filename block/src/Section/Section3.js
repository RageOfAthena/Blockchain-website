import styles from "./Section3.module.css";
import { useInView } from "react-intersection-observer";
import React from "react";
import img from "./Image/safety.png";
// Section containing Is Blockchain Secure?
function Section3() {
  // For Intersection Obsever api
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.section} ref={ref} id="two">
      {/* the following will come to view when we have scrolled 30% of the section used intersection observer api */}
      {inView && (
        <div className={styles.flex}>
          <div className={styles.left1}>
            <img src={img} alt="how safe is blockchain" />
          </div>
          <div className={styles.right1}>
            <h1 className={styles.head}>Is Blockchain Secure?</h1>
            <p className={styles.para}>
              Blockchain technology achieves decentralized security and trust in
              several ways. To begin with, new blocks are always stored linearly
              and chronologically. That is, they are always added to the “end”
              of the blockchain. After a block has been added to the end of the
              blockchain, it is extremely difficult to go back and alter the
              contents of the block unless a majority of the network has reached
              a consensus to do so. That’s because each block contains its own
              hash, along with the hash of the block before it, as well as the
              previously mentioned timestamp. Hash codes are created by a
              mathematical function that turns digital information into a string
              of numbers and letters. If that information is edited in any way,
              then the hash code changes as well.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
export default Section3;
