import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DatosCorridasType } from '../types';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import './Resultados.css'

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
  
    return parseFloat(promedioTIR.toFixed(2));
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
      <div id='tbh'>
      <IonButtons slot="start" id='btnt' >
      <IonBackButton defaultHref="/corridas" />
      </IonButtons>
        <IonTitle id='welcome-title'>INVERTI.IO</IonTitle>
        <IonImg id='welcome-logo' src="../public/Logo.png" alt="Logo" />
      </div>
    </IonHeader>
      <IonContent id='resultados-content'>
      <h1 id="resultados-content-title">RESULTADOS</h1>
  
        {resultadosCorridas.map((resultado: any, index: number) => (
          <div key={index} id='div-resultados'>
            <p id='resultados-corridas'>Corrida {index + 1}: TIR = {resultado.tir}%</p>
          </div>
        ))}

        <p id='resultados-promedio'>Promedio TIR: {calcularPromedioTIR()}%</p>
        {/* Muestra el resultado de aceptación o rechazo */}
        {esProyectoAceptado()  ? (
        <p id='resultados-aceptados'>
            <span id="proyecto1">El Proyecto es: </span>
            <span id="aceptado">ACEPTADO</span>
        </p>
        ) : (
          <p id='resultados-rechazado'>
            <span id="proyecto">El Proyecto es: </span>
              <span id="rechazado">RECHAZADO</span>
          </p>
          )}
          <div>
          <img id='senior1' src="https://images.vexels.com/media/users/3/127303/isolated/preview/d2d88005bdd8195bb5930634e712c8de-dibujos-animados-de-profesion-de-empresario.png" alt="Senior" />
          </div>
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
            <IonButton expand="full" onClick={redirectToInformacion} id='info-btn-person'>
              <IonImg src="../public/person.png" alt="Informacion" id='personf'/>
            </IonButton>
          </IonCol>
          <IonCol id='col2-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToWelcome} id='home-btn-image'>
              <IonImg src="../public/home.png" alt="Welcome" id='homef'/>
            </IonButton>
          </IonCol>
          <IonCol id='col3-footer'>
            {/* Botón con ícono personalizado desde la carpeta 'images' */}
            <IonButton expand="full" onClick={redirectToInicio} id='cal-btn-calculator'>
              <IonImg src="../public/calculator.png" alt="Inicio" id='calf'/>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
    </IonPage>
  );
};

export default Resultados;
