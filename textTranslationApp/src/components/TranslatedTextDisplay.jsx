import React from 'react';

function TranslatedTextDisplay({ translatedText }) {
  return (
    <>
      {translatedText && (
        <div className="form-group">
          <label htmlFor="translated-text">Translated Text:</label>
          <p id="translated-text">{translatedText}</p>
        </div>
      )}
    </>
  );
}

export default TranslatedTextDisplay;
