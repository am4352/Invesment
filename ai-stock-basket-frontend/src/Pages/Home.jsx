import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Invest Wisely</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Discover the best investment opportunities and manage your portfolio effortlessly with our platform.
      </p>
      {/* Use max-w-full and w-full to ensure the grid takes full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4 max-w-full">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Stocks</h2>
          <p>Invest in top-performing companies and grow your wealth over time.</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Bonds</h2>
          <p>Secure your future with fixed-income investments.</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Mutual Funds</h2>
          <p>Diversify your portfolio with professionally managed funds.</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Real Estate</h2>
          <p>Invest in property and earn rental income.</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Cryptocurrency</h2>
          <p>Explore digital currencies and invest in the future of finance.</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">ETFs</h2>
          <p>Gain exposure to a wide range of assets with lower fees.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
