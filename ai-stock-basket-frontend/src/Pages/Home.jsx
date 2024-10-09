import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-6 text-yellow-300">Invest Wisely</h1> {/* Brightened and larger header */}
      <p className="text-2xl mb-10 text-center max-w-xl text-gray-300">
        Discover the best investment opportunities and manage your portfolio effortlessly with our platform.
      </p>
      {/* Use max-w-full and w-full to ensure the grid takes full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-8 max-w-6xl">
        <div className="bg-gray-800 hover:bg-gray-700 transition-all shadow-xl rounded-lg p-8 transform hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Stocks</h2> {/* Brighter and larger text */}
          <p className="text-lg text-gray-400">Invest in top-performing companies and grow your wealth over time.</p>
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 transition-all shadow-xl rounded-lg p-8 transform hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Bonds</h2>
          <p className="text-lg text-gray-400">Secure your future with fixed-income investments.</p>
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 transition-all shadow-xl rounded-lg p-8 transform hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Mutual Funds</h2>
          <p className="text-lg text-gray-400">Diversify your portfolio with professionally managed funds.</p>
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 transition-all shadow-xl rounded-lg p-8 transform hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Real Estate</h2>
          <p className="text-lg text-gray-400">Invest in property and earn rental income.</p>
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 transition-all shadow-xl rounded-lg p-8 transform hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Cryptocurrency</h2>
          <p className="text-lg text-gray-400">Explore digital currencies and invest in the future of finance.</p>
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 transition-all shadow-xl rounded-lg p-8 transform hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">ETFs</h2>
          <p className="text-lg text-gray-400">Gain exposure to a wide range of assets with lower fees.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
