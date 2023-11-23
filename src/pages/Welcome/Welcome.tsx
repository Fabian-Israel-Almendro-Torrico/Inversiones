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
  };

  // Función para redirigir a la vista de Información (debes crearla)
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  const redirectToWelcome = () => {
    history.push('/welcome');
  };

  return (
    <IonPage>
      <IonHeader className='head'>
          <IonTitle className='titleh'>INVERTI.IO</IonTitle>
          <IonImg src="./src/images/Logo.png" alt="Logo" className='logoH'/>
        </IonHeader>
      <IonContent className="contenido">
        {/* Mensaje de bienvenida */}
        <p className='titleC'>Bienvenido a la aplicación. ¡Esperamos que disfrutes tu experiencia!</p>
        {/* Agrega tu logo aquí */}
        <img src="./src/images/Logo.png" alt="Logo" className='logoC'/>
        {/* Botones para redirigir a Inicio e Información */}
        <IonButton expand="full" onClick={redirectToInicio} className='BC'>
          CALCULAR
        </IonButton>
        <IonButton expand="full" onClick={redirectToInformacion} className='BI'>
          INFORMACION
        </IonButton>
      </IonContent>
      <IonFooter className='footer'>
        <IonGrid>
          <IonRow>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInformacion} className='BPF'>
                <IonImg src="./src/images/person.png" alt="Informacion" className='personf'/>
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToWelcome} className='BHF'>
                <IonImg src="./src/images/home.png" alt="Welcome" className='homef'/>
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInicio} className='BCF'>
                <IonImg src="./src/images/calculator.png" alt="Inicio" className='calf'/>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Welcome;
