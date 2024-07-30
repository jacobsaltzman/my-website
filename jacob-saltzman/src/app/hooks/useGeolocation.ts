import { useState, useEffect } from 'react';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

const useGeolocation = (): Location => {
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error fetching geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation not supported');
    }
  }, []);
  console.log(location);
  return location;
};

export default useGeolocation;
