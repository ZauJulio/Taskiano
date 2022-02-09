import React from 'react'
import Modal from '../Modal'

import styles from './styles.module.scss'

interface ILoader {
  isLoading?: boolean
}

function Loader(props: ILoader) {
  return (
    <Modal className={props.isLoading ? '' : styles.none}>
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    </Modal>
  )
}

export default Loader
