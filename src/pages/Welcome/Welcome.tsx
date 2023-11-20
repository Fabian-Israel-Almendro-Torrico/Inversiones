// src/pages/Welcome/Welcome.tsx

import React from 'react';
import { IonContent, IonButton, IonPage, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importa useHistory
import './Welcome.css';

const Welcome: React.FC = () => {
  const history = useHistory(); // Inicializa useHistory

  const handleStartButtonClick = () => {
    // Redirige a la ruta "/resolver-problema" al hacer clic en el botón
    history.push('/inicio');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle className="app-title">IonicApp</IonTitle>
        <div className="header">
          <h1>Bienvenido a Invertir.IO</h1>
          <p>¿No sabes si invertir o no?</p>
        </div>

        <div className="logo">
          {/* Asegúrate de cambiar 'path/a/tu/logo.png' con la ruta correcta a tu logo */}
          <img src="path/a/tu/logo.png" alt="Logo de Invertir.IO" />
        </div>

        <IonButton className="start-button" expand="full" onClick={handleStartButtonClick}>
          Empezar Prueba
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;