// Importa las bibliotecas necesarias
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

// Componente de la vista de bienvenida
const Welcome: React.FC = () => {
  const history = useHistory();

  // Función para redirigir a la vista de Inicio
  const redirectToInicio = () => {
    history.push('/inicio');
  };

  // Función para redirigir a la vista de Información (debes crearla)
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Agrega tu logo aquí */}
        <img src="../images/Logo.png" alt="Logo" style={{ maxWidth: '100%', maxHeight: '200px' }} />

        {/* Mensaje de bienvenida */}
        <p>Bienvenido a la aplicación. ¡Esperamos que disfrutes tu experiencia!</p>

        {/* Botones para redirigir a Inicio e Información */}
        <IonButton expand="full" onClick={redirectToInicio}>
          Ir a Inicio
        </IonButton>
        <IonButton expand="full" onClick={redirectToInformacion}>
          Ir a Información
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
