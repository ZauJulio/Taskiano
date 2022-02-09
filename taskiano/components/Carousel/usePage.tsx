import { useState, useEffect } from 'react'

interface IUsePage {
  infiniteScroll?: boolean
  pageCount: number
  count: number
  hideArrowInFirstAndLastPage?: boolean
  howMany: number
  autoInfiniteScroll?: boolean
  autoInfiniteScrollInterval?: number
}

function usePage(props: IUsePage) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isInRange, setIsInRange] = useState<boolean>(true)

  useEffect(() => {
    setIsInRange(currentPage < props.pageCount)
  }, [currentPage, props.pageCount])

  useEffect(() => {
    props.autoInfiniteScroll &&
      setTimeout(
        () => handles.increase(),
        props.autoInfiniteScrollInterval ?? 3000
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const ShowArrowBackward = () => {
    return (
      !(currentPage === 1 && props.hideArrowInFirstAndLastPage) &&
      props.count > props.howMany
    )
  }

  const ShowArrowForward = () => {
    return (
      !(
        currentPage === props.pageCount - 1 && props.hideArrowInFirstAndLastPage
      ) && props.count > props.howMany
    )
  }

  const showInPage = (index: number) => {
    return (
      index + 1 <= currentPage * props.howMany &&
      index + 1 > (currentPage - 1) * props.howMany
    )
  }

  const handles = {
    decrease: () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1)
      else props.infiniteScroll && setCurrentPage(props.pageCount)
    },
    increase: () => {
      if (isInRange) setCurrentPage(currentPage + 1)
      else props.infiniteScroll && setCurrentPage(1)
    }
  }

  return {
    currentPage,
    setCurrentPage,
    handles,
    ShowArrowBackward,
    ShowArrowForward,
    showInPage
  }
}

export default usePage
