/* VISTA WELCOME */
/* APARTADO DONDE EL USUARIO VERA EL INICIO DE LA APP */

/* IMPORTACIONES */
import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Welcome.css'

/*
 Componente principal para la vista de WELCOME.
*/
const Welcome: React.FC = () => {
  // Hook para la gestión del historial de navegación
  const history = useHistory();

  // Función para redirigir a la vista de Inicio
  const redirectToInicio = () => {
    history.push('/inicio2');
    window.location.reload();
  };

  // Función para redirigir a la vista de Información 
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  // Función para redirigir a la vista de Welcome
  const redirectToWelcome = () => {
    history.push('/welcome');
  };

  //Renderizacion de la vista
  return (
    <IonPage id='page'>

    {/* Header de la vista WELCOME */}     
    <IonHeader id='head'>
      <div id='tbh'>

        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>

        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
      </div>
    </IonHeader>

    {/* Contenido de la vista WELCOME */}
    <IonContent id="content">
      {/* Mensaje de bienvenida y Logo de la App */}
      <p id='welcome-message'>Bienvenido a la aplicación ¡Esperamos que disfrutes tu Experiencia!</p>
      <img src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" id='logo-content'/>

      {/* Imagenes de Inicio e Información */}
      <div id="ContenedorHombres">
      <img src="https://image.freepik.com/vector-gratis/ilustracion-concepto-calculadora_114360-1239.jpg" alt="Logo" id='img-HomAzul'/>
      <img src="https://1.bp.blogspot.com/-kQw78cBMIB0/Wl1s8XCDUrI/AAAAAAAAEoQ/Kwl04DNlHB46BiRG5-eki4RsoOjN9WD0gCLcBGAs/s1600/INFOR.jpg" alt="Logo" id='img-HomRosa'/>
      </div>

      {/* Boton CALCULAR - INFORMACION*/}
      <div id="ContenedorBotones" >
      <IonButton expand="full" onClick={redirectToInicio} id='btn-calcular'>
        CALCULAR
      </IonButton>
      <IonButton expand="full" onClick={redirectToInformacion} id='btn-informacion'>
        INFORMACIÓN
      </IonButton>
      </div>
    </IonContent>

    {/* Inicio del Footer */}
    <IonFooter id='footer'>
      <IonGrid id='grid-footer'>
        <IonRow id='row1-footer'>

          <IonCol id='col1-footer'>
            {/* Botón para la vista INFORMACION */}
            <IonButton expand="full" onClick={redirectToInformacion} id='info-btn-person'>
              <IonImg src="https://cdn3.iconfinder.com/data/icons/banking-and-finance-4-4/48/158-1024.png" alt="Informacion" id='personf'/>
            </IonButton>
          </IonCol>

          <IonCol id='col2-footer'>
            {/* Botón para la vista WELCOME */}
            <IonButton expand="full" onClick={redirectToWelcome} id='home-btn-image'>
              <IonImg src="https://agenciafattobene.com.br/wp-content/uploads/2020/03/casa-mila.png" alt="Welcome" id='homef'/>
            </IonButton>
          </IonCol>

          <IonCol id='col3-footer'>
            {/* Botón para la vista INICIO2 */}
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
