/* VISTA HELP (SIMPLE) */
/* APARTADO DONDE EL USUARIO PODRA INGRESAR VALORES DE MANERA EXPERTA */

/* IMPORTACIONES */
import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './HelpSim.css'

/*
 Componente principal para la vista de INICIO (EXPERTO).
*/
const HelpSim: React.FC = () => {
  // Hook para la gestión del historial de navegación
  const history = useHistory();

  // Función para redirigir a la vista de Inicio
  const redirectToInicio = () => {
    history.push('/inicio');
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

    {/* Header de la vista HELP */} 
    <IonHeader id='head'>
      <div id='tbh'>

      <IonButtons slot="start" id='btnt' >
      <IonBackButton defaultHref="/inicio2" />
      </IonButtons>
        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>
        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
      </div>
    </IonHeader>

    {/* Contenido de la vista HELP */}
      <IonContent id='conte'>

      {/* Bienvenida a la vista HELP */}
      <h1 id="titulo-problema">¿Problemas?</h1>
      <p id="inicio-text">😁Tenemos un pequeño tutorial el cual te enseñara a llenar cada campo y que significa 😉</p>

      {/* GUIA PARA INVERSION INICIAL - NUMERO DE CORRIDAS */}
      <h2 id="titulo-ejemplo">INVERSION INCIAL - NUMERO DE CORRIDAS</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1182031718400671825/image.png?ex=658337d2&is=6570c2d2&hm=83380d4f5d12536c89fc851633fbfbc9067abb7b7451fbf0916082693f397a13&" alt="HombreRosa" />
      <p id="texto-help">La <strong>Inversión Inicial </strong>Se refiere al dinero que se necesita para empezar un negocio o un proyecto.<br />
      <strong>Corridas: </strong>Se refiere a el numero de iteraciones a realizar con diferentes valores y resultados. <br />
      </p>

      {/* GUIA PARA TREMA - %PROYECTO ACEPTADO */}
      <h2 id="titulo-ejemplo">TREMA - % PROYECTO ACEPTADO </h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1182032253153448047/image.png?ex=65833852&is=6570c352&hm=57f736a4c19352c7760f8caba98f28b1eb510935eb632daa8a7f26c8baf548f8&" alt="HombreRosa" />
      <p id="texto-help"><strong>Trema: </strong>El trema es una medida de rentabilidad mínima que se le exige a una inversión para que sea viable.<br /><strong>% Proyecto Aceptado: </strong>Se refiere a la medida que indica el grado de satisfacción con el resultado de la simulación o producto del proyecto </p>
      
      {/* GUIA PARA LOS BOTONES */}
      <h2 id="titulo-ejemplo">BOTONES</h2>
      <img id="help-1" src="https://cdn.discordapp.com/attachments/837905669138677770/1181029086852825148/image.png?ex=657f920c&is=656d1d0c&hm=48d53e906395957a46a59c3e72287797971b0342d4895ac4cc31cbf8361b6434&" alt="botones-abajo" />
      <img id='help-2' src='https://cdn.discordapp.com/attachments/837905669138677770/1182030261106520074/image.png?ex=65833677&is=6570c177&hm=53db607f7c8e11bea00debb6835aa5fb89448045128efa4debd24c0bc0bf1531&'alt='botones-arriba'/>
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

export default HelpSim;