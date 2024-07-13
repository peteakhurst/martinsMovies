const Header = () => {
  return (
    <header className='relative text-white p-4 bg-hero-image bg-cover bg-center after:content-[""] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#a11f3c]  after:to-[#a11f3c] after:opacity-60 after:z-[1] '>
      <div className='container mx-auto py-12 z-10 relative'>
        <h1 className='text-3xl font-normal'>
          Welcome to Martin&apos;s Movies
        </h1>
        <p className='mt-2'>
          Your ultimate destination for movie reviews and ratings.
        </p>
      </div>
    </header>
  );
};

export default Header;
