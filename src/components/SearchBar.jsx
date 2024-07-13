import { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <form onSubmit={handleSearch} className='flex justify-center mb-4'>
      <input
        type='text'
        placeholder='Search movies...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='p-2 border border-gray-300 rounded-l-lg w-1/2'
      />
      <button
        type='submit'
        className='p-2 bg-[#9352b3] text-white rounded-r-lg'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
