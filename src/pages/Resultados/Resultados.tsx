import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DatosCorridasType } from '../types';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';

const Resultados: React.FC = () => {
  // Obtén la ubicación actual
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

  const location = useLocation();
  const resultadosCorridas = (location.state as { resultados?: any })?.resultados || [];

  console.log('Resultados Corridas:', resultadosCorridas);

  // Estados para almacenar los resultados de las corridas
  /*const [resultados, setResultados] = useState<{ rendimiento: number, inversionInicial: number, flujos: number[], tir: number }[]>([]); */

  // Función para calcular la TIR promedio
  const calcularPromedioTIR = () => {
    console.log('TIR de cada corrida:', resultadosCorridas.map((resultado: any) => resultado.tir));

    const tirValidas = resultadosCorridas.filter((resultado: any) => !isNaN(resultado.tir));
    
    if (tirValidas.length === 0) {
      // No hay TIR válidas, puedes manejar este caso como desees
      console.log('No hay TIR válidas');

      return 0; // O cualquier otro valor predeterminado
    }
  
    const sumaTIR = tirValidas.reduce((suma: number, resultado: any) => suma + resultado.tir, 0);
    const promedioTIR = sumaTIR / tirValidas.length;
  
    return promedioTIR;
  };

  // Función para verificar si la TIR promedio es aceptada
  const esProyectoAceptado = () => {
    
    const promedioTIR = calcularPromedioTIR();
    const trema = resultadosCorridas[0]?.trema || 0; // asumimos que el TREMA es el mismo para todas las corridas
    return promedioTIR > trema;
  };

  // UseEffect para simular corridas al cargar la vista
  /*useEffect(() => {
    // Resto del código...
  }, [datosCorridas]); */

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/corridas" />
        </IonButtons>
        <IonTitle id='corridas-title'>INVERTI.IO</IonTitle>
        <IonImg id='corridas-logo' src="./src/images/Logo.png" alt="Logo" />
      </IonToolbar>
    </IonHeader>
      <IonContent id='resultados-content'>
      <h1 id='resultados-heading'>RESULTADOS</h1>
        {/* Muestra las TIR de cada corrida */}
        {resultadosCorridas.map((resultado: any, index: number) => (
          <div key={index}>
            <p id='corridas'>Corrida {index + 1}: TIR = {resultado.tir}%</p>
          </div>
        ))}

        {/* Muestra el promedio TIR */}
        <p id='resultados-promedio'>Promedio TIR: {calcularPromedioTIR()}%</p>

        {/* Muestra el resultado de aceptación o rechazo */}
        {esProyectoAceptado()  ? (
        <p id='resultados-aceptado'>¡El proyecto es ACEPTADO!</p>
        ) : (
          <p id='resultados-rechazado'>El proyecto es RECHAZADO</p>
          )}

<IonButton expand="full" onClick={redirectToWelcome} id='resultados-btn-volver'>
          VOLVER
        </IonButton>
        <IonButton expand="full" onClick={redirectToInicio} id='resultados-btn-calcular'>
          CALCULAR
        </IonButton>
      </IonContent>
      <IonFooter id='resultados-footer'>
        <IonGrid>
          <IonRow>
          <img src="./src/images/Senior.png" alt="Senior" />
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInformacion} id='resultados-btn-person'>
              <IonImg src="./src/images/person.png" alt="Informacion" />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToWelcome} id='resultados-btn-home'>
                <IonImg src="./src/images/home.png" alt="Welcome" />
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInicio} id='resultados-btn-calculator'>
                <IonImg src="./src/images/calculator.png" alt="Inicio" />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Resultados;
