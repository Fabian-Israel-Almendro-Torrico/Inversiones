// Informacion.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Informacion: React.FC = () => {
  const history = useHistory();

  // Función para redirigir a la vista de Inicio
  const redirectToInicio = () => {
    history.push('/inicio');
  };

  // Función para redirigir a la vista de Información (debes crearla)
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  const redirectToWelcome = () => {
    history.push('/welcome');
  };


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

        <IonButtons slot="start">
            <IonBackButton defaultHref="/welcome" />
        </IonButtons>
            
          <IonTitle>INVERT.IO</IonTitle>
          <IonImg src="./src/images/Logo.png" alt="Logo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>INFORMACION</h1>
        <img src="./src/images/HombreRosa.png" alt="HombreRosa" />
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
          VOLVER
        </IonButton>
        <IonButton expand="full" onClick={handleInicioClick}>
          CALCULAR
        </IonButton>
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInformacion}>
                <IonImg src="./src/images/person.png" alt="Informacion" />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToWelcome}>
                <IonImg src="./src/images/home.png" alt="Welcome" />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInicio}>
                <IonImg src="./src/images/calculator.png" alt="Inicio" />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Informacion;
