// Informacion.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Informacion: React.FC = () => {
  const history = useHistory();

  const handleWelcomeClick = () => {
    history.push('/welcome');
  };

  const handleInicioClick = () => {
    history.push('/inicio');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>INFORMACION</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Problema</h2>
        <p>
          {/* Agrega tu párrafo sobre el problema aquí */}
          FABIAN PTO
        </p>

        <h2>Solución</h2>
        <p>
          {/* Agrega tu párrafo sobre la solución aquí */}
          CHRIS PTO
        </p>

        <IonButton expand="full" onClick={handleWelcomeClick}>
          Ir a Welcome
        </IonButton>
        <IonButton expand="full" onClick={handleInicioClick}>
          Ir a Inicio
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Informacion;
