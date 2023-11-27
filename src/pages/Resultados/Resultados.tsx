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
    window.location.reload();
  };

  // Función para redirigir a la vista de Información (debes crearla)
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  const redirectToWelcome = () => {
    localStorage.clear();
    history.push('/welcome');
    window.location.reload();
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
    <IonPage id='page'>
    <IonHeader id='head'>
      <IonToolbar id='tbh'>
        <IonButtons slot="start" id='btnt'>
          <IonBackButton defaultHref="/corridas" />
        </IonButtons>
        <IonTitle id='resultados-title'>INVERTI.IO</IonTitle>
        <IonImg id='resultados-logo' src="./src/images/Logo.png" alt="Logo" />
      </IonToolbar>
    </IonHeader>
      <IonContent id='resultados-content'>
      <h1 id='resultados-content-title'>RESULTADOS</h1>
        {/* Muestra las TIR de cada corrida */}
        {resultadosCorridas.map((resultado: any, index: number) => (
          <div key={index} id='div-resultados'>
            <p id='resultados-corridas'>Corrida {index + 1}: TIR = {resultado.tir}%</p>
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
          <img id='senior1' src="./src/images/Senior.png" alt="Senior" />
<IonButton expand="full" onClick={redirectToWelcome} id='resultados-btn-volver'>
          VOLVER
        </IonButton>
        <IonButton expand="full" onClick={redirectToInicio} id='resultados-btn-calcular'>
          CALCULAR
        </IonButton>
      </IonContent>
      <IonFooter id='footer'>
        <IonGrid id='grid-footer'>
          <IonRow id='row1-footer'>
            <IonCol id='col1-footer'>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInformacion} id='info-btn-person1'>
              <IonImg src="./src/images/person.png" alt="Informacion" id='personf'/>
              </IonButton>
            </IonCol>
            <IonCol id='col2-footer'>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToWelcome} id='home-btn'>
                <IonImg src="./src/images/home.png" alt="Welcome"  id='homef'/>
              </IonButton>
            </IonCol>
            <IonCol>
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton expand="full" onClick={redirectToInicio} id='cal-btn-calculator'>
                <IonImg src="./src/images/calculator.png" alt="Inicio" id='calf'/>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Resultados;
