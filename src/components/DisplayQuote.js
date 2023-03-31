import React, { useState, useEffect } from 'react';
import './calculator.css';

const DisplayQuote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: { 'X-Api-Key': 'xD+t15tpQjOjBQyyBhktQw==SqUL5GzHllZGE6mr' },
          contentType: 'application/json',
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="quote-container">
      {data.map((item) => (

        <>
          <span className="quote">
            <strong>Quote:</strong>
            {' '}
            {item.quote}
          </span>
          <span className="author">
            <strong>Author:</strong>
            {' '}
            {item.author}
          </span>
        </>
      ))}
    </div>

  );
};

export default DisplayQuote;
