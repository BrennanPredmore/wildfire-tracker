import { useState, useEffect } from 'react';
import Map from './components/Map';

function App() {
  const [event, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('');
      const { events } = res.json();
    };
  });
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
