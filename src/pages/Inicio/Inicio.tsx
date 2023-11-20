// src/pages/Inicio/Inicio.tsx

import React, { useState } from 'react';
import { IonPage, IonContent, IonTitle, IonLabel, IonInput, IonButton, IonList, IonItem } from '@ionic/react';

const Inicio: React.FC = () => {
  const [valorMinInversion, setValorMinInversion] = useState<number>(0);
  const [valorMaxInversion, setValorMaxInversion] = useState<number>(0);
  const [valorProbableInversion, setValorProbableInversion] = useState<number>(0);

  const [valorMinFlujo, setValorMinFlujo] = useState<number>(0);
  const [valorMaxFlujo, setValorMaxFlujo] = useState<number>(0);
  const [valorProbableFlujo, setValorProbableFlujo] = useState<number>(0);

  const [trema, setTREMA] = useState<number>(30);
  const [porcentajeAceptacion, setPorcentajeAceptacion] = useState<number>(90);
  const [numCorridas, setNumCorridas] = useState<number>(10);
  const [numYears, setNumYears] = useState<number>(5);

  // Añade más estados según sea necesario para otros parámetros

  const handleSimularClick = () => {
    // Aquí deberías redirigir a la vista de Corridas y pasar todos los parámetros necesarios
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle>Bienvenido a Inver.io</IonTitle>
        {/* Añade tus campos de entrada aquí (IonInput, IonLabel, etc.) */}
        {/* Añade botón para simular */}
        <IonButton onClick={handleSimularClick}>Simular Proyecto</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
