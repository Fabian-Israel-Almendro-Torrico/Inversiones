/* VISTA INFORMACIO */
/* APARTADO DONDE EL USUARIO PODRA VER EL EJERCICIO A RESOLVER A DETALLE */

/* IMPORTACIONES */
import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Informacion.css'

/*
 Componente principal para la vista de INICIO (SIMPLE).
*/
const Informacion: React.FC = () => {
  // Hook para la gestión del historial de navegación
  const history = useHistory();

  // Función para redirigir a la vista de Inicio
  const redirectToInicio = () => {
    history.push('/inicio2');
  };

  // Función para redirigir a la vista de Información 
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  // Función para redirigir a la vista de Welcome
  const redirectToWelcome = () => {
    history.push('/welcome');
  };

  // Función para redirigir a la vista de Welcome
  const handleWelcomeClick = () => {
    history.push('/welcome');
    window.location.reload();
  };

  // Función para redirigir a la vista de Inicio2
  const handleInicioClick = () => {
    history.push('/inicio2');
    window.location.reload();
  };

      //Renderizacion de la vista
      return (
        <IonPage id='page'>

        {/* Header de la vista INFORMACION */}  
        <IonHeader id='head'>
          <div id='tbh'>

          <IonButtons slot="start" id='btnt' >
          <IonBackButton defaultHref="/welcome" />
          </IonButtons>

            <IonTitle id='welcome-title'>INVERT.IO</IonTitle>

            <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
          </div>
        </IonHeader>

        {/* Contenido de la vista INFORMACION */}
          <IonContent id='conte'>

          {/* PRESENTACION */}
          <h1 id="info-title">INFORMACIÓN</h1>
          <img id="info-image" src="https://www.universidades.com.bo/logos/original/logo-universidad-mayor-de-san-simon.png" alt="HombreRosa" />
          <h2 id="problem-title">PROBLEMA</h2>

          {/* INICIO DEL PROBLEMA */}
          <p id="problem-text">Una empresa desea entrar en un nuevo negocio cuya inversión inicial requerida y los
            ingresos netos anuales después de impuestos están distribuidos como sigue:</p>


          <IonImg id='cuadro-ejercicio' src="https://cdn.discordapp.com/attachments/837905669138677770/1181001029731483648/image.png?ex=657f77eb&is=656d02eb&hm=a6f2fc899467c21d4357fc68d32ac46f5acfd6e4006a9de3bf5d30e45bb26d79&" alt="Logo" />
          
          <p id="solution-text">Si la administración ha establecido que un proyecto de inversión será emprendido. <br /> Si
          <strong> Prob(TIR &gt; TREMA) ≥ 0.90</strong>, y la <strong>TREMA es de 30%</strong>. <br /> ¿Debería la empresa X aceptar este nuevo
          proyecto de inversión?<br /> Asuma un horizonte de planeación de 5 años y un valor de rescate al término de este tiempo de cero.</p>

          {/* BOTONES VOLVER - CALCULAR */}
          <div id="contenedorBoot">
          <IonButton id="back-button" expand="full" onClick={handleWelcomeClick}>
              VOLVER
            </IonButton>
            <IonButton id="calculate-button" expand="full" onClick={handleInicioClick}>
              CALCULAR
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

export default Informacion;
