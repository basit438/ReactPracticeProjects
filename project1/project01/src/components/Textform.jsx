import React, { useState } from 'react';

function Textform() {
  const [text, setText] = useState("");

  let toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  let toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  let handleOnChange = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col mt-4 h-80 bg-gray-100 items-center p-4">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="w-full max-w-lg h-64 border-4 border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          id="textarea"
          placeholder="Enter your text here..."
        ></textarea>
        <div className="flex mt-4 space-x-4">
          <button
            onClick={toUpper}
            className='px-4 py-2 border h-10 bg-green-500 rounded-lg text-white hover:bg-green-600 active:bg-green-700'
          >
            To UPPERCASE
          </button>
          <button
            onClick={toLower}
            className='px-4 py-2 border h-10 bg-green-500 rounded-lg text-white hover:bg-green-600 active:bg-green-700'
          >
            To lowercase
          </button>
        </div>
      </div>
      <div className='container mx-auto my-8 p-4 bg-white border border-gray-300 rounded-lg shadow-md'>
        <h1 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
          Preview
        </h1>
        <p className="text-lg mb-4">
          {text}
        </p>
        <h2 className="text-md font-medium mb-2">
          Your text contains {text.length} characters / {text.split(" ").filter(Boolean).length} words
        </h2>
        <h2 className="text-md font-medium">
          {0.008 * text.split(" ").filter(Boolean).length} Minutes Average time to read the above text
        </h2>
      </div>
    </>
  );
}

export default Textform;
