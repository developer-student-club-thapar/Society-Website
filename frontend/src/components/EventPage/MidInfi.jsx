import React from "react";
import AndroidLogo from "/src/assets/Projectcard.svg";
import BehanceLogo from "/src/assets/project.svg";
import GoogleLogo from "/src/assets/About_Image.png";
import styles from "/src/Css/MidInfi.module.css";
function MidInfi() {
  return (
    <div className={styles.main__container}>
      <section className={styles.enableAnimation}>
        <div className={styles.marquee}>
          <ul className={styles.marquee__content}>
            <li className={styles.marquee__item}>
              <img alt="first" src="path/to/image1.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="second" src="path/to/image2.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="third" src="path/to/image3.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="fourth" src="path/to/image4.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="fifth" src="path/to/image5.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="sixth" src="path/to/image6.jpg" />
            </li>
          </ul>

          <ul aria-hidden="true" className={styles.marquee__content}>
            <li className={styles.marquee__item}>
              <img alt="first" src="path/to/image1.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="second" src="path/to/image2.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="third" src="path/to/image3.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="fourth" src="path/to/image4.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="fifth" src="path/to/image5.jpg" />
            </li>
            <li className={styles.marquee__item}>
              <img alt="sixth" src="path/to/image6.jpg" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MidInfi;
