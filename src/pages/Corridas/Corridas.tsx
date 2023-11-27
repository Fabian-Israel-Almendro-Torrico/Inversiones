// Importa las bibliotecas necesarias
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import * as finance from 'financejs';
import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useParams } from 'react-router-dom';
import './Corridas.css';
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
  
interface ResultadoSimulado {
  rendimiento: number;
  inversionInicial: number;
  flujos: number[];
  tir: number;
}

  const Corridas: React.FC = () => {
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

  // Obtén la ubicación actual
  const location = useLocation();
  const datosCorridas = (location.state as { datosCorridas?: DatosCorridasType })?.datosCorridas;

  // Estados para almacenar los resultados de las corridas
  const [resultados, setResultados] = useState<{ rendimiento: number, inversionInicial: number, flujos: number[], tir: number }[]>([]);

  const [resultadosSimulados, setResultadosSimulados] = useState<ResultadoSimulado[]>([]);
    /*rendimiento: number;
    inversionInicial: number;
    flujos: number[];
    tir: number;
  }[]>([]);*/
  // Función para realizar los cálculos de las corridas



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

 /* const calcularTIR = (inversionInicial: number, flujoNeto: number) => {
    // Utiliza la función irr para calcular la TIR
    const cashflows = [-inversionInicial, flujoNeto];
    const tir = irr(cashflows);

  return tir * 100; // Multiplica por 100 para obtener el porcentaje
}; */

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

    /*console.log('Resultados Simulados:', resultadosSimulados);*/

    /*resultadosSimulados.push(resultado);*/
    resultadosSimuladosNuevos.push(resultado);

  }
    // Agrega console.log para verificar los resultados simulados
     // Actualiza el estado con los resultados simulados
  /*setResultados(resultadosSimulados);*/
  setResultadosSimulados(resultadosSimuladosNuevos);
  /*console.log('Resultados Simulados:', resultadosSimulados);*/

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
    console.error("Error al convertir los parámetros:", error);
    // Manejo de error al convertir los parámetros
    // Puedes mostrar un mensaje de error en la interfaz o redirigir a una página de error
    
  }
  }, [datosCorridas]); 

  return (
    <IonPage id="CorriPage">
    <IonHeader id="CorriHeader">
      <IonToolbar id="CorriToolbar">
        <IonButtons id="CorriButtonRet" slot="start">
          <IonBackButton defaultHref="/inicio" />
        </IonButtons>
        <IonTitle id='CorriInver'>INVERTI.IO</IonTitle>
        <IonImg id='CorriLogo' src="./src/images/Logo.png" alt="Logo" />
      </IonToolbar>
    </IonHeader>
      <IonContent id='CorriContent'>
      <h1 id='H1Corri'>CORRIDAS</h1>
      <IonList id="CorriList1">
      {resultadosSimulados.map((resultado: ResultadoSimulado, index: number) => (
  <IonItem id="CorriItem1" key={index}>
    <IonLabel id="CorriLabelCori" >Corrida {index + 1}</IonLabel>

    <IonList id="CorriList2" lines="none">
      <IonItem id="CorriItem2" lines="none">
        <IonLabel id="CorriLabelAnio">Año</IonLabel>
        <IonLabel id="CorriInverIni">Inversión Inicial</IonLabel>
        <IonLabel id="CorriNeto">Flujo Neto</IonLabel>
      </IonItem>
      <IonItem id="CorriItem3" lines="none">
      <IonLabel id="CorriLabel0">0</IonLabel>
        <IonLabel id="CorriLabelResultInverIni">{resultado.inversionInicial}</IonLabel>
        <IonLabel id="CorriLabelResultMInverIni">{-resultado.inversionInicial}</IonLabel>
      </IonItem>
      {Array.from({ length: datosCorridas?.numeroAnios || 0 }, (_, year) => {
  const flujoNetoAnio = calcularFlujoNeto();
  const inversionInicialAnio = year === 0 ? resultado.inversionInicial : 0;
  return (
    <IonItem id="CorriItem3" lines="none" key={year + 1}>
      <IonLabel id="CorriLabelYear">{year + 1}</IonLabel>
      <IonLabel id="CorriLabelYear0">{0}</IonLabel>
      <IonLabel id="CorriLabelFlujoNetoAnio">
        {flujoNetoAnio}
      </IonLabel>
    </IonItem>
  );
})}
    </IonList>
    <IonLabel id="CorriTirResult">TIR: {resultado.tir}</IonLabel>
  </IonItem>
))}

</IonList>
        <IonButton id="ButtonVerResultados"
          expand="full"
          onClick={() => history.push('/resultados', { resultados: resultadosSimulados })}
        >
          VER RESULTADOS
        </IonButton>
      </IonContent>
      <IonFooter id="CorriFooter">
        <IonGrid id="CorriGrid2">
          <IonRow id="CorriRow2">
            <IonCol id="CorriCol2">
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="CorriBttonReturnInfo" expand="full" onClick={redirectToInformacion}>
                <IonImg id="CorriImgInfo" src="./src/images/person.png" alt="Informacion" />
              </IonButton>
            </IonCol>
            <IonCol id="CorriCol3">
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="CorriBttonReturnWel" expand="full" onClick={redirectToWelcome} >
                <IonImg id="CorriImgWel" src="./src/images/home.png" alt="Welcome" />
              </IonButton>
            </IonCol>
            <IonCol id="CorriCol4">
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="CorriBttonReturnIni" expand="full" onClick={redirectToInicio} >
                <IonImg id="CorriImgIni" src="./src/images/calculator.png" alt="Inicio" />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Corridas;
