import { useState } from "react";
import paragraph from "./paragraph.json";

function App() {
  let [num, setNum] = useState(0);
  let [para, setPara] = useState([]);

  function generate() {
    if (paragraph.length >= num) {
      let temp = [];
      for (let i = 0; i < num; i++) {
        temp.push(paragraph[i]);
      }
      setPara(temp);
    } else if (paragraph.length < num) {
      alert(
        "Ayyo! You're demanding too many paragraphs in one go, kindly take little by little 😀"
      );
    } else if (num < 0) {
      alert("Ayyo! You know that you wrote a negative input 😵");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 animate-bounce">
          TIRED OF BORING LOREM IPSUM?
        </h1>
        <h3 className="text-xl font-semibold text-center mb-6 text-gray-800 animate-fade-in">
          Generate actual paragraphs, not random lorem ipsum
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <label className="text-lg text-gray-700 animate-slide-in-left">Paragraphs:</label>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
            placeholder="Number of paragraphs"
          />
          <button
            onClick={generate}
            className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-110 shadow-lg"
          >
            Generate
          </button>
        </div>
        <div className="space-y-4">
          {para.map((item, key) => (
            <p
              key={key}
              className="bg-gray-50 p-4 rounded-lg shadow transition duration-500 ease-in-out transform hover:scale-105 animate-fade-in"
            >
              <span className="font-semibold">{key + 1}: </span>
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
