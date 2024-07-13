/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Pagination = ({ page, setPage, totalPages }) => {
  const getPages = () => {
    const pages = [];
    for (
      let i = Math.max(1, page - 1);
      i <= Math.min(totalPages, page + 2);
      i++
    ) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPages();

  return (
    <div className='flex justify-center mt-4 mb-8'>
      {page > 1 && (
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className='px-4 py-2  rounded-l-lg'
        >
          <FaChevronLeft />
        </button>
      )}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-4 py-2 ${
            p === page ? 'bg-[#9352b3] rounded-full text-white' : ''
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className='px-4 py-2 rounded-r-lg'
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
