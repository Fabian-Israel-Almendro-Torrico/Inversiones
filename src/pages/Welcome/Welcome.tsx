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
      <div id='tbh'>
        <IonTitle id='welcome-title'>INVERTI.IO</IonTitle>
        <IonImg id='welcome-logo' src="../assets/images/Logo.png" alt="Logo" />
      </div>
    </IonHeader>
    <IonContent id="content">
      {/* Mensaje de bienvenida */}
      <p id='welcome-message'>Bienvenido a la aplicación ¡Esperamos que disfrutes tu Experiencia!</p>
      {/* Agrega tu logo aquí */}
      <img src="../assets/images/Logo.png" alt="Logo" id='logo-content'/>
      {/* Botones para redirigir a Inicio e Información */}
      
      <div id="ContenedorHombres">
      <img src="../assets/images/HombreAzul.png" alt="Logo" id='img-HomAzul'/>
      <img src="../assets/images/HombreRosa.png" alt="Logo" id='img-HomRosa'/>
      </div>

      <div id="ContenedorBotones" >
      <IonButton expand="full" onClick={redirectToInicio} id='btn-calcular'>
        CALCULAR
      </IonButton>
      <IonButton expand="full" onClick={redirectToInformacion} id='btn-informacion'>
        INFORMACIÓN
      </IonButton>
      </div>
    </IonContent>
    <IonFooter id='footer'>
      <IonGrid id='grid-footer'>
        <IonRow id='row1-footer'>
          <IonCol id='col1-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToInformacion} id='info-btn-person'>
              <IonImg src="../assets/images/person.png" alt="Informacion" id='personf'/>
            </IonButton>
          </IonCol>
          <IonCol id='col2-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToWelcome} id='home-btn-image'>
              <IonImg src="../assets/images/home.png" alt="Welcome" id='homef'/>
            </IonButton>
          </IonCol>
          <IonCol id='col3-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToInicio} id='cal-btn-calculator'>
              <IonImg src="../assets/images/calculator.png" alt="Inicio" id='calf'/>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  </IonPage>
  );
};

export default Welcome;
