// Importa las bibliotecas necesarias
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Welcome.css'
// Componente de la vista de bienvenida
const Welcome: React.FC = () => {
  const history = useHistory();

  // Función para redirigir a la vista de Inicio
  const redirectToInicio = () => {
    history.push('/inicio');
    window.location.reload();
  };

  // Función para redirigir a la vista de Información (debes crearla)
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  const redirectToWelcome = () => {
    history.push('/welcome');
  };

  return (
    <IonPage id='page'>
    <IonHeader id='head'>
      <IonToolbar id='tbh'>
        <IonTitle id='welcome-title'>INVERTI.IO</IonTitle>
        <IonImg id='welcome-logo' src="./src/images/Logo.png" alt="Logo" />
      </IonToolbar>
    </IonHeader>
    <IonContent id="content">
      {/* Mensaje de bienvenida */}
      <p id='welcome-message'>Bienvenido a la aplicación. ¡Esperamos que disfrutes tu experiencia!</p>
      {/* Agrega tu logo aquí */}
      <img src="./src/images/Logo.png" alt="Logo" id='logo-content'/>
      {/* Botones para redirigir a Inicio e Información */}
      <IonButton expand="full" onClick={redirectToInicio} id='btn-calcular'>
        CALCULAR
      </IonButton>
      <IonButton expand="full" onClick={redirectToInformacion} id='btn-informacion'>
        INFORMACION
      </IonButton>
    </IonContent>
    <IonFooter id='footer'>
      <IonGrid id='grid-footer'>
        <IonRow id='row1-footer'>
          <IonCol id='col1-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToInformacion} id='info-btn-person'>
              <IonImg src="./src/images/person.png" alt="Informacion" id='personf'/>
            </IonButton>
          </IonCol>
          <IonCol id='col2-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToWelcome} id='home-btn-image'>
              <IonImg src="./src/images/home.png" alt="Welcome" id='homef'/>
            </IonButton>
          </IonCol>
          <IonCol id='col3-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToInicio} id='cal-btn-calculator'>
              <IonImg src="./src/images/calculator.png" alt="Inicio" id='calf'/>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  </IonPage>
  );
};

export default Welcome;
