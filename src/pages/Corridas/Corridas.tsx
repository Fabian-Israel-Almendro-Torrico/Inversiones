// Importa las bibliotecas necesarias
import * as finance from 'financejs';
import irr from 'irr';
import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons } from '@ionic/react';
import { useParams } from 'react-router-dom';

  interface CorridasParams {
    trema: string;
    porcentajeAceptacion: string;
    numeroCorridas: string;
    numeroAnios: string;
    valorMinimoInversion: string;
    valorMaximoInversion: string;
    valorProbableInversion: string;
    valorMinimoFlujoNeto: string;
    valorMaximoFlujoNeto: string;
    valorProbableFlujoNeto: string;
  }
  
  const Corridas: React.FC = () => {
    // Obtén los parámetros de la URL usando useParams de React Router
    const {
      trema,
      porcentajeAceptacion,
      numeroCorridas,
      numeroAnios,
      valorMinimoInversion,
      valorMaximoInversion,
      valorProbableInversion,
      valorMinimoFlujoNeto,
      valorMaximoFlujoNeto,
      valorProbableFlujoNeto,
    } = useParams<CorridasParams>();

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

    for (let i = 0; i < parseInt(numeroCorridas, 10); i++) {
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

    const inversionInicial =
      aleatorio <= (parseFloat(valorProbableInversion) - parseFloat(valorMinimoInversion)) / (parseFloat(valorMaximoInversion) - parseFloat(valorMinimoInversion))
        ? parseFloat(valorMinimoInversion) +
          Math.sqrt(aleatorio * (parseFloat(valorMaximoInversion) - parseFloat(valorMinimoInversion)) * (parseFloat(valorProbableInversion) - parseFloat(valorMinimoInversion)))
        : parseFloat(valorMaximoInversion) -
          Math.sqrt(
            (1 - aleatorio) * (parseFloat(valorMaximoInversion) - parseFloat(valorMinimoInversion)) * (parseFloat(valorMaximoInversion) - parseFloat(valorProbableInversion))
          );
  
    return inversionInicial;
  };

  const calcularFlujoNeto = () => {
    const aleatorio = Math.random();

    const flujoNeto =
      aleatorio <= (parseFloat(valorProbableFlujoNeto) - parseFloat(valorMinimoFlujoNeto)) / (parseFloat(valorMaximoFlujoNeto) - parseFloat(valorMinimoFlujoNeto))
        ? parseFloat(valorMinimoFlujoNeto) +
          Math.sqrt(aleatorio * (parseFloat(valorMaximoFlujoNeto) - parseFloat(valorMinimoFlujoNeto)) * (parseFloat(valorProbableFlujoNeto) - parseFloat(valorMinimoFlujoNeto)))
        : parseFloat(valorMaximoFlujoNeto) -
          Math.sqrt(
            (1 - aleatorio) * (parseFloat(valorMaximoFlujoNeto) - parseFloat(valorMinimoFlujoNeto)) * (parseFloat(valorMaximoFlujoNeto) - parseFloat(valorProbableFlujoNeto))
          );
  
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
        const tremaValue = parseFloat(trema);
        const porcentajeAceptacionValue = parseFloat(porcentajeAceptacion);
        const numeroCorridasValue = parseInt(numeroCorridas, 10);
        const numeroAniosValue = parseInt(numeroAnios, 10);
        const valorMinimoInversionValue = parseFloat(valorMinimoInversion);
        const valorMaximoInversionValue = parseFloat(valorMaximoInversion);
        const valorProbableInversionValue = parseFloat(valorProbableInversion);
        const valorMinimoFlujoNetoValue = parseFloat(valorMinimoFlujoNeto);
        const valorMaximoFlujoNetoValue = parseFloat(valorMaximoFlujoNeto);
        const valorProbableFlujoNetoValue = parseFloat(valorProbableFlujoNeto);
  
        // Realizar tus cálculos utilizando estas variables
    simularCorridas();
    } catch (error) {
    console.error("Error al convertir los parámetros:", error);
    // Manejo de error al convertir los parámetros
    // Puedes mostrar un mensaje de error en la interfaz o redirigir a una página de error
  }
  }, []); 

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
      {Array.from({ length: parseInt(numeroAnios, 10) }, (_, year) => {
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
