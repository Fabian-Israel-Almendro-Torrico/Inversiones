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
        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>
        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
      </div>
    </IonHeader>
    <IonContent id="content">
      {/* Mensaje de bienvenida */}
      <p id='welcome-message'>Bienvenido a la aplicación ¡Esperamos que disfrutes tu Experiencia!</p>
      {/* Agrega tu logo aquí */}
      <img src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" id='logo-content'/>
      {/* Botones para redirigir a Inicio e Información */}
      
      <div id="ContenedorHombres">
      <img src="https://i.pinimg.com/originals/f8/cc/62/f8cc627c323ba235823f85c97594040a.png" alt="Logo" id='img-HomAzul'/>
      <img src="https://i.pinimg.com/originals/9f/e6/d7/9fe6d7649d8aa272f21c93f0893e8f4b.png" alt="Logo" id='img-HomRosa'/>
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
              <IonImg src="https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_man_people_person_profile_user_icon_123385.png" alt="Informacion" id='personf'/>
            </IonButton>
          </IonCol>
          <IonCol id='col2-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToWelcome} id='home-btn-image'>
              <IonImg src="https://agenciafattobene.com.br/wp-content/uploads/2020/03/casa-mila.png" alt="Welcome" id='homef'/>
            </IonButton>
          </IonCol>
          <IonCol id='col3-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToInicio} id='cal-btn-calculator'>
              <IonImg src="https://th.bing.com/th/id/R.eee772e2bfa4f53491444d04b8025701?rik=X%2B595Tz%2FiRKy7g&pid=ImgRaw&r=0" alt="Inicio" id='calf'/>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  </IonPage>
  );
};

export default Welcome;
