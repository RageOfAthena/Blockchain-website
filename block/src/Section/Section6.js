import styles from "./Section6.module.css";
import { useInView } from "react-intersection-observer";
import React from "react";
import img from "./Image/procons.png";
// Section containing Pros and Cons of Blockchain
function Section6() {
  // For Intersection Obsever api
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={styles.section} ref={ref} id="four">
      {/* the following will come to view when we have scrolled 30% of the section used intersection observer api */}
      {inView && (
        <React.Fragment>
          <h1 className={styles.head}>Pros and Cons of Blockchain</h1>
          <p className={styles.para}>
            For all of its complexity, blockchain’s potential as a decentralized
            form of record-keeping is almost without limit. From greater user
            privacy and heightened security to lower processing fees and fewer
            errors, blockchain technology may very well see applications beyond
            those outlined above. But there are also some disadvantages.
          </p>
          <div className={styles.grid}>
            <img src={img} alt="blockchain transaction process diagram" />
          </div>
        </React.Fragment>
      )}
    </section>
  );
}
export default Section6;
