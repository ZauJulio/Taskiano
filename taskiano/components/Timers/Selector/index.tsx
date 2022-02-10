import React, { Children, ReactNode, useEffect, useState } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import styles from './styles.module.scss'

interface ISelector {
  textOnEmpty?: string
  onChange: (value: number) => void
  current?: number
  children: ReactNode[]
}

function Selector(props: ISelector) {
  const [selected, setSelected] = useState(props.current ?? 0)
  const childrenCount = Children.count(props.children)

  const handles = {
    decrease: () => {
      selected === 0
        ? setSelected(childrenCount - 1)
        : setSelected(selected - 1)
    },
    increase: () => {
      selected === childrenCount - 1
        ? setSelected(0)
        : setSelected(selected + 1)
    }
  }

  useEffect(() => {
    props.onChange(selected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <div className={styles.selector}>
      {childrenCount > 0 ? (
        <>
          {childrenCount > 1 && (
            <div className={styles.circleIcon} onClick={handles.decrease}>
              <IoIosArrowBack />
            </div>
          )}

          <div className={styles.children}>{props.children[selected]}</div>

          {childrenCount > 1 && (
            <div className={styles.circleIcon} onClick={handles.increase}>
              <IoIosArrowForward />
            </div>
          )}
        </>
      ) : (
        <h1 className={styles.title}>{props.textOnEmpty}</h1>
      )}
    </div>
  )
}

export default Selector
