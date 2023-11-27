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
    window.location.reload();
  };

  const handleInicioClick = () => {
    history.push('/inicio');
    window.location.reload();
  };

  return (
    <IonPage id='page'>
    <IonHeader id = "head">
      <IonToolbar id = "tbh">
        <IonButtons slot="start" id='btnt'>
          <IonBackButton defaultHref="/welcome" />
        </IonButtons>
        <IonTitle id='info-titulo'>INVERTI.IO</IonTitle>
        <IonImg id='info-logo' src="./src/images/Logo.png" alt="Logo" />
      </IonToolbar>
    </IonHeader>
      <IonContent id='conte'>
      <h1 id="info-title">INFORMACION</h1>
      <img id="info-image" src="./src/images/HombreRosa.png" alt="HombreRosa" />
      <h2 id="problem-title">Problema</h2>
      <p id="problem-text">"Imagina que una empresa está pensando en invertir en algo nuevo. Quieren asegurarse de que esta inversión sea rentable. Para decidirlo, usan algo llamado TIR, que mide cuánto dinero ganarán con esta inversión. Tienen una regla que dice que solo harán la inversión si hay al menos un 90% de posibilidad de que ganen más de lo que esperan, que es un 30%. Así que básicamente están calculando si este nuevo proyecto tiene una alta probabilidad de ser rentable, y solo lo harán si están bastante seguros de que harán más dinero de lo que esperan en los próximos 5 años. No están considerando ningún valor de rescate al final, solo quieren estar seguros de que valdrá la pena."</p>


      <h2 id="solution-title">Solucion</h2>
      <p id="solution-text">METODO DE LA TRANSFORMADA INVERSA DE DISTRIBUCION TIRANGULAR </p>


      <IonButton id="back-button" expand="full" onClick={handleWelcomeClick}>
          VOLVER
        </IonButton>
        <IonButton id="calculate-button" expand="full" onClick={handleInicioClick}>
          CALCULAR
        </IonButton>
      </IonContent>
      <IonFooter id='footer'>
        <IonGrid id='grid-footer'>
          <IonRow id='row-footer'>
            <IonCol id='col1-footer'>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="info-button-informacion" expand="full" onClick={redirectToInformacion}>
              <IonImg id='info-imagen' src="./src/images/person.png" alt="Informacion" />
              </IonButton>
            </IonCol>
            <IonCol id='col2-footer'>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="info-button-welcome" expand="full" onClick={redirectToWelcome}>
              <IonImg id='home-image' src="./src/images/home.png" alt="Welcome" />
              </IonButton>
            </IonCol>
            <IonCol id='col3-footer'>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="info-button-calculate" expand="full" onClick={redirectToInicio}>
              <IonImg  id='cal-image'  src="./src/images/calculator.png" alt="Inicio" />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Informacion;
