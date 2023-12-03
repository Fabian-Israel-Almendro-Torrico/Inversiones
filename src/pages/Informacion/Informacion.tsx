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
    <IonHeader id='head'>
      <div id='tbh'>
      <IonButtons slot="start" id='btnt' >
      <IonBackButton defaultHref="/welcome" />
      </IonButtons>
        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>
        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
      </div>
    </IonHeader>
      <IonContent id='conte'>
      <h1 id="info-title">INFORMACIÓN</h1>
      <img id="info-image" src="https://www.universidades.com.bo/logos/original/logo-universidad-mayor-de-san-simon.png" alt="HombreRosa" />
      <h2 id="problem-title">PROBLEMA</h2>
      <p id="problem-text">Una empresa desea entrar en un nuevo negocio cuya inversión inicial requerida y los
        ingresos netos anuales después de impuestos están distribuidos como sigue:</p>
      <IonImg id='cuadro-ejercicio' src="https://cdn.discordapp.com/attachments/837905669138677770/1180997518436343829/image.png?ex=657f74a6&is=656cffa6&hm=77911eb2bf1cc6d20c59276ee098ffe241af4608e86f26faa941726bf118f13d&" alt="Logo" />
      <p id="solution-text">Si la administración ha establecido que un proyecto de inversión será emprendido si
      Prob (TIR mayor TREMA) ≥ 0.90, y la TREMA es de 30%, ¿debería la empresa X aceptar este nuevo
      proyecto de inversión? Asuma un horizonte de planeación de 5 años y un valor de rescate
      al término de este tiempo de cero.</p>

      <div id="contenedorBoot">
      <IonButton id="back-button" expand="full" onClick={handleWelcomeClick}>
          VOLVER
        </IonButton>
        <IonButton id="calculate-button" expand="full" onClick={handleInicioClick}>
          CALCULAR
        </IonButton>
        </div>
      </IonContent>
      <IonFooter id='footer'>
      <IonGrid id='grid-footer'>
        <IonRow id='row1-footer'>
          <IonCol id='col1-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToInformacion} id='info-btn-person'>
              <IonImg src="https://cdn3.iconfinder.com/data/icons/banking-and-finance-4-4/48/158-1024.png" alt="Informacion" id='personf'/>
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

export default Informacion;
