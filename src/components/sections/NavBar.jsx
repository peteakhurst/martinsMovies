import {
  FaMagnifyingGlass,
  FaGlobe,
  FaUser,
  FaAngleDown,
  FaBars,
} from 'react-icons/fa6';

const NavBar = () => {
  return (
    <nav className='bg-white p-4'>
      <div className=' mx-auto flex justify-between items-center px-4'>
        <div className='text-gray-600 text-lg font-bold'>
          🎥 Martin&apos;s Movies
        </div>
        <div className='hidden md:flex'>
          <a
            href='/'
            className='text-gray-600 hover:opacity-90 px-4 text-center py-2 rounded-md '
          >
            Home{' '}
            <span className='inline-flex align-middle'>
              <FaAngleDown />
            </span>
          </a>
          <a
            href='#'
            className='text-gray-600 hover:opacity-90 px-4 text-center py-2 rounded-md '
          >
            Pages{' '}
            <span className='inline-flex align-middle'>
              <FaAngleDown />
            </span>
          </a>
          <a
            href='#'
            className='text-gray-600 hover:opacity-90 px-4 text-center py-2 rounded-md '
          >
            Movies & TV Shows{' '}
            <span className='inline-flex align-middle'>
              <FaAngleDown />
            </span>
          </a>
          <a
            href='#'
            className='text-gray-600 hover:opacity-90 px-4 text-center py-2 rounded-md '
          >
            Blog{' '}
            <span className='inline-flex align-middle'>
              <FaAngleDown />
            </span>
          </a>
          <a
            href='#'
            className='text-gray-600 hover:opacity-90 px-4 text-center py-2 rounded-md '
          >
            Contact Us
          </a>
        </div>
        <FaBars className='md:hidden flex' />
        <div className='items-center justify-between hidden md:flex'>
          <a
            href='#'
            className='text-gray-600 hover:opacity-90 px-4 text-center py-2 rounded-md  '
          >
            <FaMagnifyingGlass />
          </a>
          <a
            href='#'
            className='text-gray-600 hover:opacity-90 px-4 text-center py-2 rounded-md text-sm  relative mr-4'
          >
            <FaGlobe />
            <small className='absolute bg-[#eb1436] rounded-full text-white top-0 bottom-2 h-4 w-4 leading-snug'>
              2
            </small>
          </a>
          <button className='flex items-center bg-[#9352b3] text-white hover:opacity-90 opacity-90 px-4 text-center py-2 rounded-md text-sm font-medium'>
            <FaUser className='mr-3' /> Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
