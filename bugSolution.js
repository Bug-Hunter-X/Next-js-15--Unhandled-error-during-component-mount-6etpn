```javascript
//pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [error, setError] = useState(null);
  useEffect(() => {
    // Simulate an error during mount
    setTimeout(() => {
      setError(new Error('About page error'));
    }, 1000);
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```