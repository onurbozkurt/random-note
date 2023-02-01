import React, { useState, useCallback, useEffect } from 'react';

const notes = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];

const threeRandomNotes = () => {
  const randomNotes = new Set();
  while (randomNotes.size < 3) {
    const randomIndex = Math.floor(Math.random() * notes.length);
    randomNotes.add(notes[randomIndex]);
  }
  return Array.from(randomNotes);
};

function App() {
  const [randomNotes, setRandomNotes] = useState(threeRandomNotes());

  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      setRandomNotes(threeRandomNotes());
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App bg-blue-300 h-screen p-8">
      <h1 className="text-4xl text-black">{randomNotes.join(' - ')}</h1>
      <div className='h-8'></div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setRandomNotes(threeRandomNotes())}>
          New
        </button>
      </div>
    </div>
  );
}

export default App;
