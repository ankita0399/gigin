import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev123.gigin.ai/abc/index.php/Api_controller/get_jobs', {
          method: 'POST',  // Change this to the correct method
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if required
          },
          // Add body if it's a POST request with data
          // body: JSON.stringify({ key: 'value' }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {/* Render your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyComponent;
