import { useState } from 'react';
import axios from 'axios'; // or use 'fetch'

function App() {
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const runPythonScript = async () => {
    try {
      const response = await axios.get('http://localhost:5000/run-script').then(function (response) {
        setOutput(response.data);
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={runPythonScript}>Run Python Script</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
        <h3>Error:</h3>
        <pre>{error}</pre>
      </div>
    </div>
  );
}

export default App;
