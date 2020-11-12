import { GeolocationPosition, Plugins } from '@capacitor/core';
import { IonButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { Geolocation } = Plugins;
  const [coords, setCoords] = useState<GeolocationPosition>();
  const [error, setError] = useState<string>('');
  
  const getCurrentPosition = async () => {
    try {
      const coords = await Geolocation.getCurrentPosition({timeout: 10000});
      setCoords(coords);
      setError('');
    } catch (error) {
      setError(JSON.stringify(error));
    }
  };


  useEffect(() => {
    getCurrentPosition();
  }, [])
  
  return (
    <div className="container">
      <strong>Ready to get your geolocation?</strong>
      <p>{coords?.coords.latitude} | { coords?.coords.longitude }</p>
      <IonButton onClick={() => getCurrentPosition()}>Get Location</IonButton>
      <p>{error}</p>
    </div>
  );
};

export default ExploreContainer;
