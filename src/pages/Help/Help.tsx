// Help.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Help.css'
const Help: React.FC = () => {
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
      <IonBackButton defaultHref="/inicio" />
      </IonButtons>
        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>
        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
      </div>
    </IonHeader>
      <IonContent id='conte'>
      <h1 id="titulo-problema">¿Problemas?</h1>
      <p id="inicio-text">Acá te enseñamos a llenar esta parte 😁</p>

      <h2 id="titulo-ejemplo">TREMA - PROYECTO ACEPTADO</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181026064668041266/image.png?ex=657f8f3c&is=656d1a3c&hm=d2b375ba7c85c45eca7c42f4ce499b94017a7d6f4cb4ac1b7a8dce2959f34576&" alt="HombreRosa" />
      <p id="texto-help"><strong>Trema: </strong>El trema es  <br /><strong>% Proyecto Aceptado: </strong>Se refiere al </p>

      <h2 id="titulo-ejemplo">CORRIDAS - AÑOS</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181026970516062218/image.png?ex=657f9014&is=656d1b14&hm=51fef8b435824301e669b5f534a4060ee2e2d55e836dced2dc24642325bf204d&" alt="HombreRosa" />
      <p id="texto-help"><strong>Corridas: </strong>Se refiere a  <br /><strong>Años: </strong>Se refiere al </p>

      <h2 id="titulo-ejemplo">INVERSIÓN INICIAL</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181027628791111801/image.png?ex=657f90b1&is=656d1bb1&hm=04a20a9152aa4f7c63865553ad1e69d8d972fcd7407c2e5cd3bd7e24d91c41ae&" alt="HombreRosa" />
      <p id="texto-help"><strong>Inversión Inicial: </strong>Se refiere a... y cuenta con 3 campos <br />
      <strong>Valor Minimo: </strong>Se refiere al <br />
      <strong>Valor Maximo: </strong>Se refiere al <br />
      <strong>Valor Probable: </strong>Se refiere al </p>

      <h2 id="titulo-ejemplo">FLUJO NETO</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181028036032876554/image.png?ex=657f9112&is=656d1c12&hm=cf4780adf1a0c712d60a017fe26e73920c9023f1903182afdf161678afbed57c&" alt="HombreRosa" />
      <p id="texto-help"><strong>Flujo Neto: </strong>Se refiere a... y cuenta con 3 campos <br />
      <strong>Valor Minimo: </strong>Se refiere al <br />
      <strong>Valor Maximo: </strong>Se refiere al <br />
      <strong>Valor Probable: </strong>Se refiere al </p>

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

export default Help;