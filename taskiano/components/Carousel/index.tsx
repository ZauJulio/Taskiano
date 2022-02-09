import React, { ReactNode, Children } from 'react';

import usePage from './usePage';
import Arrow from './Arrow';
import PageIndicators from './PageIndicator';

import styles from './styles.module.scss';

interface ICarousel {
  className?: string;
  gap?: number;
  infiniteScroll?: boolean;
  autoInfiniteScroll?: boolean;
  autoInfiniteScrollInterval?: number;
  showIndicator?: boolean;
  hideArrowInFirstAndLastPage?: boolean;
  howMany: number;
  children: ReactNode | Element[];
}

function Carousel(props: ICarousel) {
  const childrenCount = Children.count(props.children);
  const pageCount = Math.ceil(childrenCount / props.howMany);
  const itemsContainerStyle = { gap: `${props.gap ?? 2}rem` };

  const {
    handles,
    currentPage,
    setCurrentPage,
    ShowArrowBackward,
    ShowArrowForward,
    showInPage,
  } = usePage({
    pageCount,
    count: childrenCount,
    ...props,
  });

  return (
    <div className={`${styles.carouselContainer}  ${props?.className}`}>
      <div className={styles.widgetsSlider}>
        <Arrow
          direction="left"
          onClick={handles.decrease}
          show={ShowArrowBackward()}
        />

        <div className={styles.itemsContainer} style={itemsContainerStyle}>
          {React.Children.map(
            props.children,
            (child, index) => showInPage(index) && child
          )}
        </div>

        <Arrow
          direction="right"
          onClick={handles.increase}
          show={ShowArrowForward()}
        />
      </div>

      <PageIndicators
        show={props.showIndicator}
        count={pageCount}
        currentPage={currentPage}
        onClick={(index: number) => setCurrentPage(index)}
      />
    </div>
  );
}

export default Carousel;
