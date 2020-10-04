import { useMemo } from 'react';

import { addCamelCaseKeys } from '../../../lib';
import s from './UnderConstruction.module.scss';

/**
 * The under construction animation on the landing page.
 */
const UnderConstruction: React.FC = () => {
  const styles = useMemo(() => addCamelCaseKeys(s), []);
  return (
    <>
      <div className={styles.ucContainer}>
        <div className={styles.cat}>
          <div className={styles.head}>
            <div className={styles.earContainer}>
              <div className={`${styles.ear} ${styles.earLeft}`}></div>
              <div className={`${styles.ear} ${styles.earRight}`}></div>
            </div>
            <div className={styles.eyeContainer}>
              <div className={`${styles.eye} ${styles.eyeLeft}`}></div>
              <div className={`${styles.eye} ${styles.eyeRight}`}></div>
            </div>
            <div className={styles.nose}></div>
          </div>
          <div className={styles.body}></div>
          <div className={`${styles.hand} ${styles.handLeft}`}></div>
          <div className={`${styles.hand} ${styles.handRight}`}></div>
        </div>
        <div className={`${styles.lap} ${styles.lapLeft}`}>
          <div className={styles.lid}></div>
          <div className={styles.keyboard}></div>
        </div>
        <div className={`${styles.lap} ${styles.lapCenter}`}>
          <div className={styles.lid}></div>
        </div>
        <div className={`${styles.lap} ${styles.lapRight}`}>
          <div className={styles.lid}></div>
          <div className={styles.keyboard}></div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
