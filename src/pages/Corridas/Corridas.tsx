/* VISTA CORRIDAS */
/* APARTADO DONDE EL USUARIO PODRA VER LAS CORRIDAS */

/* IMPORTACIONES */
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as finance from 'financejs';
import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useParams } from 'react-router-dom';
import './Corridas.css';

    // Funcion para convertir y especificar que los valores son numericos
    interface DatosCorridasType {
      trema: number;
      porcentajeAceptacion: number;
      numeroCorridas: number;
      numeroAnios: number;
      valorMinimoInversion: number;
      valorMaximoInversion: number;
      valorProbableInversion: number;
      valorMinimoFlujoNeto: number;
      valorMaximoFlujoNeto: number;
      valorProbableFlujoNeto: number;
    }
      
    // Funcion para convertir y especificar que los simulados son numericos
    interface ResultadoSimulado {
      rendimiento: number;
      inversionInicial: number;
      flujos: number[];
      tir: number;
    }

/*
 Componente principal para la vista de CORRIDAS.
*/
  const Corridas: React.FC = () => {
  // Hook para la gestión del historial de navegación
  const history = useHistory();

  // Función para redirigir a la vista de Inicio
  const redirectToInicio = () => {
    history.push('/inicio2');
    window.location.reload();
  };

  // Función para redirigir a la vista de Información 
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  // Función para redirigir a la vista de Welcome
  const redirectToWelcome = () => {
    history.push('/welcome');
    window.location.reload();
  };

  // Obtencion de los valores introducidos en la vista INICIO - INICIO2
  const location = useLocation();
  const datosCorridas = (location.state as { datosCorridas?: DatosCorridasType })?.datosCorridas;

  // Estados para almacenar los resultados de las corridas
  const [resultados, setResultados] = useState<{ rendimiento: number, inversionInicial: number, flujos: number[], tir: number }[]>([]);

  const [resultadosSimulados, setResultadosSimulados] = useState<ResultadoSimulado[]>([]);

  // Función para calcular la inversión inicial en cada corrida
  const calcularInversionInicial = () => {
    const aleatorio = Math.random();

    const valorMinimoInversion = datosCorridas?.valorMinimoInversion || 0;
    const valorMaximoInversion = datosCorridas?.valorMaximoInversion || 1;
    const valorProbableInversion = datosCorridas?.valorProbableInversion || 0;

    const inversionInicial =
    aleatorio <= (valorProbableInversion - valorMinimoInversion) / (valorMaximoInversion - valorMinimoInversion)
    ? valorMinimoInversion + Math.sqrt(aleatorio * (valorMaximoInversion - valorMinimoInversion) * (valorProbableInversion - valorMinimoInversion))
    : valorMaximoInversion -
      Math.sqrt((1 - aleatorio) * (valorMaximoInversion - valorMinimoInversion) * (valorMaximoInversion - valorProbableInversion));

  
    return parseFloat(inversionInicial.toFixed(2));
  };

  // Función para calcular el flujo neto en cada año de cada corrida
  const calcularFlujoNeto = () => {
    const aleatorio = Math.random();

    const valorMinimoFlujoNeto = datosCorridas?.valorMinimoFlujoNeto || 0;
    const valorMaximoFlujoNeto = datosCorridas?.valorMaximoFlujoNeto || 1;
    const valorProbableFlujoNeto = datosCorridas?.valorProbableFlujoNeto || 0;

    const flujoNeto =
    aleatorio <= (valorProbableFlujoNeto - valorMinimoFlujoNeto) / (valorMaximoFlujoNeto - valorMinimoFlujoNeto)
    ? valorMinimoFlujoNeto + Math.sqrt(aleatorio * (valorMaximoFlujoNeto - valorMinimoFlujoNeto) * (valorProbableFlujoNeto - valorMinimoFlujoNeto))
    : valorMaximoFlujoNeto -
      Math.sqrt((1 - aleatorio) * (valorMaximoFlujoNeto - valorMinimoFlujoNeto) * (valorMaximoFlujoNeto - valorProbableFlujoNeto));
    let flujoredondeado = flujoNeto.toFixed(2)
  return parseFloat(flujoredondeado);
  };

  // Función para calcular la TIR de una corrida
    const calcularTIR = (inversionInicial: number, flujos: number[]) => {
      const maxIteraciones = 1000;
      const tolerancia = 0.0001;

      let tir = 0.1; // Supongamos una tasa inicial
      let vpn = vpnFlujos(inversionInicial, flujos, tir);

      for (let i = 0; i < maxIteraciones; i++) {
        const derivada = derivadaVPNFlujos(inversionInicial, flujos, tir);
        tir = tir - vpn / derivada;

        vpn = vpnFlujos(inversionInicial, flujos, tir);

        if (Math.abs(vpn) < tolerancia) {
          // Se alcanzó la tolerancia deseada
          break;
        }
      }

      return parseFloat((tir * 100).toFixed(2));
    };

    // Función para calcular el Valor Presente Neto (VPN) de los flujos de efectivo
    const vpnFlujos = (inversionInicial: number, flujos: number[], tir: number) => {
      let suma = 0;
      for (let t = 0; t < flujos.length; t++) {
        suma += flujos[t] / Math.pow(1 + tir, t + 1);
      }
      return -inversionInicial + suma;
    };

    // Función para calcular la derivada del VPN respecto a la tasa
    const derivadaVPNFlujos = (inversionInicial: number, flujos: number[], tir: number) => {
      let suma = 0;
      for (let t = 0; t < flujos.length; t++) {
        suma += -flujos[t] * (t + 1) / Math.pow(1 + tir, t + 2);
      }
      return suma;
    };


    // Función para simular las corridas y almacenar los resultados
    const simularCorridas = () => {
      const resultadosSimuladosNuevos: {
          rendimiento: number;
          inversionInicial: number;
          flujos: number[];
          tir: number;
        }[] = [];

    for (let i = 0; i < (datosCorridas?.numeroCorridas || 0); i++) {
      const inversionInicial = calcularInversionInicial();
      const flujos: number[] = []; // Array para guardar los flujos de efectivo
      for (let j = 0; j < (datosCorridas?.numeroAnios || 0); j++) {
        const flujoNeto = calcularFlujoNeto();
        flujos.push(flujoNeto); // Agregar el flujo de efectivo al array
      }
      const tir = calcularTIR(inversionInicial, flujos);
    
      const resultado = {
          rendimiento: Math.random() * 100,
          inversionInicial,
          flujos,
          tir,
          trema: datosCorridas?.trema || 0, // Asegúrate de incluir el TREMA en cada resultado
    };
    resultadosSimuladosNuevos.push(resultado);

  }

  setResultadosSimulados(resultadosSimuladosNuevos);

};

  useEffect(() => {
    try {
        // Convertir los parámetros a números
        const trema = datosCorridas?.trema;
        const porcentajeAceptacion = datosCorridas?.porcentajeAceptacion;
        const numeroCorridas = datosCorridas?.numeroCorridas;
        const numeroAnios = datosCorridas?.numeroAnios;
        const valorMinimoInversion = datosCorridas?.valorMinimoInversion;
        const valorMaximoInversion = datosCorridas?.valorMaximoInversion;
        const valorProbableInversion = datosCorridas?.valorProbableInversion;
        const valorMinimoFlujoNeto = datosCorridas?.valorMinimoFlujoNeto;
        const valorMaximoFlujoNeto = datosCorridas?.valorMaximoFlujoNeto;
        const valorProbableFlujoNeto = datosCorridas?.valorProbableFlujoNeto
  
      // Realizar tus cálculos utilizando estas variables
      simularCorridas();
      } catch (error) {
      //Log para verificar si existen errores al convertir los parametros
      console.error("Error al convertir los parámetros:", error);
      }
      }, [datosCorridas]); 


  //Renderizacion de la vista
  return (
    <IonPage id="CorriPage">

     {/* Header de la vista CORRIDAS */} 
    <IonHeader id='head'>
      <div id='tbh'>

      <IonButtons slot="start" id='btnt' >
      <IonBackButton defaultHref="/inicio" />
      </IonButtons>

        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>

        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
      </div>
    </IonHeader>

    {/* Contenido de la vista RESULTADOS */}
      <IonContent id='CorriContent'>
      <h1 id='H1Corri'>CORRIDAS</h1>

    {/* CONTENEDOR DE TODAS LAS CORRIDAS */}
      <IonList id="CorriList1">
      {resultadosSimulados.map((resultado: ResultadoSimulado, index: number) => (
      <IonItem id="CorriItem1" key={index}>
      <IonLabel id="CorriLabelCori" >C. {index + 1}</IonLabel>

      {/* TITULOS - CALCULO (INVERSION INICIAL - FLUJO NETO) */}
      <IonList id="CorriList2" lines="none">
      {/* TITULOS de Año - Inversion Inicial - Flujo Neto */}
      <IonItem id="CorriItem2" lines="none"> 
        <div id="CorriLabelAnio">Año</div>
        <div id="CorriInverIni">Inversión Inicial</div>
        <div id="CorriNeto">Flujo Neto</div>
      </IonItem>

      {/* Columna de Inversion Inicial ingresada al inicio */}
      <IonItem id="CorriItem3" lines="none">
      <div id="CorriLabel0">0</div>
        <div id="CorriLabelResultInverIni">{resultado.inversionInicial}</div>
        <div id="CorriLabelResultMInverIni">{-resultado.inversionInicial}</div>
      </IonItem>

      {/* Columna de Flujo Neto (calculos) */}
      {Array.from({ length: datosCorridas?.numeroAnios || 0 }, (_, year) => {
      const flujoNetoAnio = calcularFlujoNeto();
      const inversionInicialAnio = year === 0 ? resultado.inversionInicial : 0;
      return (
        <IonItem id="CorriItem3" lines="none" key={year + 1}>
          <div id="CorriLabelYear">{year + 1}</div>
          <div id="CorriLabelYear0">{0}</div>
          <div id="CorriLabelFlujoNetoAnio">
            {flujoNetoAnio}
          </div>
        </IonItem>
      );
    })}
    </IonList>

    {/* Calculo de TIR por corrida */}
    <div id="CorriTirResult">TIR: {resultado.tir}</div>
  </IonItem>
  ))}
  </IonList>

        {/* Boton VER RESULTADOS: manda los resultados a la siguiente vista */}
        <IonButton id="ButtonVerResultados"
          expand="full"
          onClick={() =>     
            history.push('/resultados', { resultados: resultadosSimulados, datosCorridas})}
        >
          VER RESULTADOS
        </IonButton>
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

export default Corridas;
