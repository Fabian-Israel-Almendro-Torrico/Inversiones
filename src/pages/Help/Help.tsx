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
      <h1 id="info-title">¿Problemas?</h1>
      <p id="inicio-text">Acá te enseñamos a usar un poco la aplicación</p>

      <h2 id="titulo-ejemplo">TREMA - PROYECTO ACEPTADO</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181023425704235048/image.png?ex=657f8cc7&is=656d17c7&hm=56dd23130cc2ad722f0c1f5a8eaf196bbe186eb1d9d6b09ba557aab96b217931&" alt="HombreRosa" />
      <p id="texto-help"><strong>Trema: </strong>El trema es  <br /><strong>% Proyecto Aceptado: </strong>Se refiere al </p>

      <h2 id="titulo-ejemplo">NÚMERO DE CORRIDAS - NÚMERO DE AÑOS</h2>
      <img id="help-1" src="" alt="HombreRosa" />
      <p id="texto-help"><strong>Corridas: </strong>Se refiere a  <br /><strong>Años: </strong>Se refiere al </p>

      <h2 id="titulo-ejemplo">INVERSIÓN INICIAL</h2>
      <img id="help-1" src="" alt="HombreRosa" />
      <p id="texto-help"><strong>Inversión Inicial: </strong>Se refiere a... y cuenta con 3 campos <br />
      <strong>Valor Minimo: </strong>Se refiere al <br />
      <strong>Valor Maximo: </strong>Se refiere al <br />
      <strong>Valor Probable: </strong>Se refiere al </p>

      <h2 id="titulo-ejemplo">FLUJO NETO</h2>
      <img id="help-1" src="" alt="HombreRosa" />
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