import React, { useEffect, useState } from 'react';
import useGeolocation from '@/app/hooks/useGeolocation';

const MyComponent: React.FC = () => {
  const { latitude, longitude } = useGeolocation();
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('BEFORE API');

  const handleButtonClick = async () => {
    if (latitude !== null && longitude !== null) {
      setStatus('BEFORE API');
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/geolocation`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ latitude, longitude }),
          });
          const data = await response.json();
          setApiResponse(`Received lat: ${data.latitude}, lng: ${data.longitude}`);
          setStatus('AFTER API');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  };

  return (
    <div>
      <p>
        Latitude: {latitude}, Longitude: {longitude}, Status: {status}
      </p>
      <button onClick={handleButtonClick}>Send to API</button>
      {apiResponse && <p>{apiResponse}</p>}
    </div>
  );
};

export default MyComponent;
