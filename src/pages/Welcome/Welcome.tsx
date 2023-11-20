// src/pages/Welcome/Welcome.tsx

import React from 'react';
import { IonContent, IonButton, IonPage, IonTitle } from '@ionic/react';
import './Welcome.css';

const Welcome: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      <IonTitle>Bienvenido a Mi Aplicación</IonTitle>
      <p>¡Resuelve el problema y haz clic en el botón para empezar!</p>
      <IonButton routerLink="/resolver-problema" expand="full">Ir a Resolver Problema</IonButton>
    </IonContent>
  </IonPage>
);

export default Welcome;