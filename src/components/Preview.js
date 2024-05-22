import React from 'react';

const Preview = ({ readme }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Preview</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {readme}
      </pre>
    </div>
  );
};

export default Preview;
