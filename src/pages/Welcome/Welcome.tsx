// Importa las bibliotecas necesarias
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';

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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido</IonTitle>
          <IonImg src="./src/images/Logo.png" alt="Logo" style={{width:'50px'}} />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Agrega tu logo aquí */}
        <img src="./src/images/Logo.png" alt="Logo" style={{width:'50px'}}/>

        {/* Mensaje de bienvenida */}
        <p>Bienvenido a la aplicación. ¡Esperamos que disfrutes tu experiencia!</p>

        {/* Botones para redirigir a Inicio e Información */}
        <IonButton expand="full" onClick={redirectToInicio}>
          Ir a Inicio
        </IonButton>
        <IonButton expand="full" onClick={redirectToInformacion}>
          Ir a Información
        </IonButton>
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInformacion}>
                <IonImg src="./src/images/person.png" alt="Informacion" style={{width:'20px'}} />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToWelcome}>
                <IonImg src="./src/images/home.png" alt="Welcome"style={{width:'20px'}} />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInicio}>
                <IonImg src="./src/images/calculator.png" alt="Inicio"style={{width:'20px'}} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Welcome;
