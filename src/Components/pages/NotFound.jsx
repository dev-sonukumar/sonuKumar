const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="text-center p-8  bg-opacity-80 rounded-lg  w-full max-w-lg transform hover:scale-105 transition-all duration-300">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 animate-pulse">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-400">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          We couldn't find the page you are looking for. It might have been
          moved, or you may have the wrong URL.
        </p>
        <a
          href="/"
          className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
