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
      <p id="inicio-text">😁Tenemos un pequeño tutorial el cual te enseñara a llenar cada campo y que significa 😉</p>

      <h2 id="titulo-ejemplo">TREMA - PROYECTO ACEPTADO</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181030607208333443/image.png?ex=657f9377&is=656d1e77&hm=4bd078b51d91206aea81b1f0ea08a6e149f3305c2291c72958f949ac5db49469&" alt="HombreRosa" />
      <p id="texto-help"><strong>Trema: </strong>El trema es una medida de rentabilidad mínima que se le exige a una inversión para que sea viable.<br /><strong>% Proyecto Aceptado: </strong>Se refiere a la medida que indica el grado de satisfacción con el resultado de la simulación o producto del proyecto </p>

      <h2 id="titulo-ejemplo">CORRIDAS - AÑOS</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181026970516062218/image.png?ex=657f9014&is=656d1b14&hm=51fef8b435824301e669b5f534a4060ee2e2d55e836dced2dc24642325bf204d&" alt="HombreRosa" />
      <p id="texto-help"><strong>Corridas: </strong>Se refiere a el numero de iteraciones a realizar con diferentes valores y resultados <br /><strong>Años: </strong>Se refiere a la cantidad de años en la cual se proyectara el proyecto durante una iteración o corrida</p>

      <h2 id="titulo-ejemplo">INVERSIÓN INICIAL</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181027628791111801/image.png?ex=657f90b1&is=656d1bb1&hm=04a20a9152aa4f7c63865553ad1e69d8d972fcd7407c2e5cd3bd7e24d91c41ae&" alt="HombreRosa" />
      <p id="texto-help">La <strong>Inversión Inicial </strong>Se refiere al dinero que se necesita para empezar un negocio o un proyecto. Para resolver la simulación usando la distribucion triangular esta cuenta con 3 campos <br />
      <strong>-Valor Minimo: </strong>Se refiere al valor más pequeño que puede tomar la variable aleatoria<br />
      <strong>-Valor Maximo: </strong>Se refiere al valor más grande que puede tomar la variable aleatoria<br />
      <strong>-Valor Probable: </strong>Se refiere al  valor más frecuente o más esperado que puede tomar la variable en este caso sera su inversion inicial</p>

      <h2 id="titulo-ejemplo">FLUJO NETO</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181028036032876554/image.png?ex=657f9112&is=656d1c12&hm=cf4780adf1a0c712d60a017fe26e73920c9023f1903182afdf161678afbed57c&" alt="HombreRosa" />
      <p id="texto-help">El <strong>Flujo Neto </strong>Se refiere a la cantidad de dinero que entra y sale de una empresa al finalizar el año. Para resolver la simulación usando la distribucion triangular cuenta con 3 campos <br />
      <strong>-Valor Minimo: </strong>Se refiere al valor más pequeño que puede tomar la variable aleatoria<br />
      <strong>-Valor Maximo: </strong>Se refiere al valor más grande que puede tomar la variable aleatoria <br />
      <strong>-Valor Probable: </strong>Se refiere al valor más frecuente o más esperado que puede tomar la variable en este caso sera su flujo neto</p>

      <h2 id="titulo-ejemplo">BOTONES</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181029086852825148/image.png?ex=657f920c&is=656d1d0c&hm=48d53e906395957a46a59c3e72287797971b0342d4895ac4cc31cbf8361b6434&" alt="botones-abajo" />
      <img id="help-2" src='https://cdn.discordapp.com/attachments/837905669138677770/1182030053006127185/image.png?ex=65833645&is=6570c145&hm=90868260294b77e42d6e1a98be7853e6b0987341c520b923a18e7041c23564dd&' alt='botones-arriba'/>
      {/*
      <div id="contenedorBoot">
      <IonButton id="back-button" expand="full" onClick={handleWelcomeClick}>
          VOLVER
        </IonButton>
        <IonButton id="calculate-button" expand="full" onClick={handleInicioClick}>
          CALCULAR
        </IonButton>
       </div>*/}
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