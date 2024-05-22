import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import './index.css';

const App = () => {
  const [readme, setReadme] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Profile README Generator</h1>
      <Form setReadme={setReadme} />
      <Preview readme={readme} />
    </div>
  );
};

export default App;
