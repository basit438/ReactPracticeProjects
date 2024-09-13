import React from 'react';

function Textform() {
  return (
    <div className="flex mt-4 justify-center min-h-screen bg-gray-100">
      <textarea
        className="w-full max-w-lg h-64 border-4 border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize"
        id="textarea"
        cols="30"
        rows="10"
        placeholder="Enter your text here..."
      ></textarea>
    </div>
  );
}

export default Textform;
