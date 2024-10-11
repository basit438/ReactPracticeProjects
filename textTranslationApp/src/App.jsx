import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [languages, setLanguages] = useState([]);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  async function fetchedData() {
    const options = {
      method: 'GET',
      url: 'https://text-translator2.p.rapidapi.com/getLanguages',
      headers: {
        'x-rapidapi-key': 'bc25168b9dmsh4c9aca617811c05p1706d8jsna05c6ae75a75',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data.languages);
      setLanguages(response.data.data.languages);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchedData();
  }, []);

  let from = useRef(null);
  let to = useRef(null);

  async function postFetchedData() {
    let fromVal = from.current.value;
    let toVal = to.current.value;

    const data = new FormData();
    data.append('source_language', fromVal);
    data.append('target_language', toVal);
    data.append('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': 'bc25168b9dmsh4c9aca617811c05p1706d8jsna05c6ae75a75',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      },
      data: data
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app-container">
      <h1>Language Translator</h1>
      <p>Translate text from one language to another effortlessly!</p>
      <form>
        <div className="form-group">
          <label htmlFor="from-select">From:</label>
          <select name="from" id="from-select" ref={from}>
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to-select">To:</label>
          <select name="to" id="to-select" ref={to}>
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Enter text to translate..."
            cols={40}
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={postFetchedData}>
            Translate
          </button>
        </div>
        {translatedText && (
          <div className="form-group">
            <label htmlFor="translated-text">Translated Text:</label>
            <p id="translated-text">{translatedText}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;