// Importa las bibliotecas necesarias
import { useLocation } from 'react-router-dom';
import * as finance from 'financejs';
import irr from 'irr';
import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons } from '@ionic/react';
import { useParams } from 'react-router-dom';

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
  
  const Corridas: React.FC = () => {

  // Obtén la ubicación actual
  const location = useLocation();
  const datosCorridas = (location.state as { datosCorridas?: DatosCorridasType })?.datosCorridas;

  // Estados para almacenar los resultados de las corridas
  const [resultados, setResultados] = useState<{ rendimiento: number, inversionInicial: number, flujoNeto: number, tir: number }[]>([]);

  // Función para realizar los cálculos de las corridas
  const simularCorridas = () => {
    const resultadosSimulados: {
        rendimiento: number;
        inversionInicial: number;
        flujoNeto: number;
        tir: number;
      }[] = [];

      for (let i = 0; i < (datosCorridas?.numeroCorridas || 0); i++) {
        const inversionInicial = calcularInversionInicial();
        const flujoNeto = calcularFlujoNeto();
        const tir = calcularTIR(inversionInicial, flujoNeto);
      
        const resultado = {
            rendimiento: Math.random() * 100,
            inversionInicial,
            flujoNeto,
            tir,
      };
      resultadosSimulados.push(resultado);
    }
  
    // Agrega console.log para verificar los resultados simulados
    console.log('Resultados Simulados:', resultadosSimulados);

    // Actualiza el estado con los resultados simulados
    setResultados(resultadosSimulados);
  };


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

  
    return inversionInicial;
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

  return flujoNeto;
  };

  const calcularTIR = (inversionInicial: number, flujoNeto: number) => {
    // Utiliza la función irr para calcular la TIR
    const cashflows = [-inversionInicial, flujoNeto];
    const tir = irr(cashflows);

  return tir * 100; // Multiplica por 100 para obtener el porcentaje
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
    <IonPage>
      <IonHeader>
        <IonToolbar>

        <IonButtons slot="start">
        <IonBackButton defaultHref="/inicio" />
          </IonButtons>

          <IonTitle>Resultados de Corridas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
      {resultados.map((resultado, index) => (
  <IonItem key={index}>
    <IonLabel>Corrida {index + 1}</IonLabel>
    <IonLabel>
      Rendimiento: {resultado.rendimiento}
    </IonLabel>
    <IonList lines="none">
      <IonItem lines="none">
        <IonLabel>Año</IonLabel>
        <IonLabel>Inversión Inicial</IonLabel>
        <IonLabel>Flujo Neto</IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>0</IonLabel>
        <IonLabel>{-resultado.inversionInicial}</IonLabel>
        <IonLabel>0</IonLabel>
      </IonItem>
      {Array.from({ length: datosCorridas?.numeroAnios || 0 }, (_, year) => {
        const flujoNetoAnio = calcularFlujoNeto();
        return (
          <IonItem lines="none" key={year + 1}>
            <IonLabel>{year + 1}</IonLabel>
            <IonLabel>{resultado.inversionInicial}</IonLabel>
            <IonLabel>
              {flujoNetoAnio}
            </IonLabel>
          </IonItem>
        );
      })}
    </IonList>
    <IonLabel>TIR: {resultado.tir}</IonLabel>
  </IonItem>
))}

</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Corridas;