// Informacion.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Informacion.css'
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
      <IonHeader className='head'>
        <IonButtons slot="start" className='botona'>
            <IonBackButton defaultHref="/welcome" />
        </IonButtons>
        <IonTitle id="header-title">INVERT.IO</IonTitle>
        <IonImg id="header-logo" src="./src/images/Logo.png" alt="Logo" />
      </IonHeader>
      <IonContent>
      <h1 id="info-title">INFORMACION</h1>
      <img id="info-image" src="./src/images/HombreRosa.png" alt="HombreRosa" />
      <h2 id="problem-title">Problema</h2>
      <p id="problem-text">FABIAN PTO</p>


      <h2 id="solution-title">Solucion</h2>
      <p id="solution-text">CHRIS PTO</p>


      <IonButton id="back-button" expand="full" onClick={handleWelcomeClick}>
          VOLVER
        </IonButton>
        <IonButton id="calculate-button" expand="full" onClick={handleInicioClick}>
          CALCULAR
        </IonButton>
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="info-button-informacion" expand="full" onClick={redirectToInformacion}>
              <IonImg src="./src/images/person.png" alt="Informacion" />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="info-button-welcome" expand="full" onClick={redirectToWelcome}>
              <IonImg src="./src/images/home.png" alt="Welcome" />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="info-button-inicio" expand="full" onClick={redirectToInicio}>
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
