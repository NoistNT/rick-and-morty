import { FC, useCallback } from 'react'

interface PaginationProps {
  onNextPage: () => void
  onPrevPage: () => void
  hasMore: boolean
}

const Paginate: FC<PaginationProps> = ({ onNextPage, onPrevPage, hasMore }) => {
  const handleNextPage = useCallback(() => {
    onNextPage()
  }, [onNextPage])

  const handlePrevPage = useCallback(() => {
    onPrevPage()
  }, [onPrevPage])

  return (
    <div>
      <button onClick={handlePrevPage} disabled={!hasMore}>
        Prev Page
      </button>
      <button onClick={handleNextPage} disabled={!hasMore}>
        Next Page
      </button>
    </div>
  )
}

export default Paginate
