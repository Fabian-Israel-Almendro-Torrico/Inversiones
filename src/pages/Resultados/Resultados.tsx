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

  {/*const location = useLocation();
const resultadosCorridas = (location.state as { resultados?: any })?.resultados || []; */}

  const location = useLocation();
  const { resultados, datosCorridas } = (location.state as { resultados?: any, datosCorridas?: DatosCorridasType }) || {};
  const resultadosCorridas = resultados || [];

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
        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>
        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
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
        <div>
        <p id='resultados-aceptados'>
            <span id="proyecto1">El Proyecto es: </span>
            <span id="aceptado">ACEPTADO</span>
        </p> 
        <img id='senior1' src="https://th.bing.com/th/id/R.c11fdb13b7d410e9e8de3bc7a40567f6?rik=%2fTP6w%2bURcn%2b9Zw&pid=ImgRaw&r=0" alt="Senior" />
        <p id='conclu-acep'><strong>Conclusión: </strong> 
        El proyecto cumple con las expectativas esperadas superando la probabilidad de aceptacion del proyecto establecido por la 
        empresa con una Inversion Inicial de: <strong>"{datosCorridas?.valorProbableInversion}"</strong>, la cual se recuperara en <strong>"{datosCorridas?.numeroAnios}"</strong> años 
        con un TIR de <strong>{calcularPromedioTIR()}%</strong></p>
        </div>
        ) : (
          <div>
          <p id='resultados-rechazado'>
            <span id="proyecto">El Proyecto es: </span>
              <span id="rechazado">RECHAZADO</span>
          </p>
        <img id='senior1' src="https://cdn.discordapp.com/attachments/837905669138677770/1181033033235705938/360_F_6323356_UNMbB0uOmhkfPFC2JpzX5QX3Nnj9xMVI.png?ex=657f95b9&is=656d20b9&hm=42ecefc9c8e27b6829e4e6d02b0c30a06d9d87d1e000b8dcf7db1c295d3ab7a9&" alt="Senior" />
        <p id='conclu-recha'><strong>Conclusión: </strong> 
        El proyecto es rechazado porque no cumple con las expectativas deseadas por la empresa ya que no supera la probabildiad 
        de aceptacion establecida del <strong>"{datosCorridas?.porcentajeAceptacion}%".</strong></p>
          </div>
          )}
          {/*
          <div>
          <img id='senior1' src="https://th.bing.com/th/id/R.c11fdb13b7d410e9e8de3bc7a40567f6?rik=%2fTP6w%2bURcn%2b9Zw&pid=ImgRaw&r=0" alt="Senior" />
          </div>
          */}
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

export default Resultados;
