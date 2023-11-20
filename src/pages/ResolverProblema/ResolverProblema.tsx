// src/pages/ResolverProblema/ResolverProblema.tsx

import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonTitle,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonItem,
} from '@ionic/react';
import './ResolverProblema.css';

const ResolverProblema: React.FC = () => {
  const [inversionInicial, setInversionInicial] = useState<number>(0);
  const [numYears, setNumYears] = useState<number>(5);
  const [trema, setTREMA] = useState<number>(30);
  const [porcentajeAceptacion, setPorcentajeAceptacion] = useState<number>(90);
  const [corridas, setCorridas] = useState<number>(10);
  const [tirResults, setTIRResults] = useState<number[]>([]);

  const [inversionMin, setInversionMin] = useState<number>(0);
  const [inversionMax, setInversionMax] = useState<number>(0);
  const [inversionProbable, setInversionProbable] = useState<number>(0);

  const [flujoMin, setFlujoMin] = useState<number>(0);
  const [flujoMax, setFlujoMax] = useState<number>(0);
  const [flujoProbable, setFlujoProbable] = useState<number>(0);

  const calcularInversionInicial = (): number[] => {
    const inversionInicialArray: number[] = [inversionInicial];

    for (let i = 1; i <= numYears; i++) {
      const valorInversion = calcularValorDistribucionTriangular(inversionMin, inversionMax, inversionProbable);
      inversionInicialArray.push(valorInversion);
    }

    return inversionInicialArray;
  };

  const calcularFlujoNeto = (inversionInicialArray: number[]): number[] => {
    const flujoNetoArray: number[] = [-inversionInicialArray[0]];

    for (let i = 1; i <= numYears; i++) {
      const valorFlujo = calcularValorDistribucionTriangular(flujoMin, flujoMax, flujoProbable);
      flujoNetoArray.push(valorFlujo);
    }

    return flujoNetoArray;
  };

  const calcularValorDistribucionTriangular = (min: number, max: number, moda: number): number => {
    // Implementar la lógica de la transformada inversa de la distribución triangular
    // ...

    // Este es solo un ejemplo, ajusta según tus necesidades
    const U = Math.random();
    const F = (moda - min) / (max - min);
    return U <= F ? min + Math.sqrt(U * (max - min) * (moda - min)) :
                    max - Math.sqrt((1 - U) * (max - min) * (max - moda));
  };

  const calcularTIR = (flujoNetoArray: number[]): number => {
    // Implementar la lógica de cálculo de TIR aquí
    // ...

    // Este es solo un ejemplo, ajusta según tus necesidades
    const tir = Math.random() * 100; // Simulación de la TIR

    return tir;
  };

  const verificarAceptacion = (tir: number): boolean => {
    return tir > trema;
  };

  const simularProyecto = (): void => {
    const resultadosTIR: number[] = [];

    for (let i = 0; i < corridas; i++) {
      const inversionInicialArray = calcularInversionInicial();
      const flujoNetoArray = calcularFlujoNeto(inversionInicialArray);
      const tir = calcularTIR(flujoNetoArray);
      resultadosTIR.push(tir);
    }

    // Evaluar porcentaje de TIR > TREMA
    const porcentajeAceptacionReal = (resultadosTIR.filter(tir => tir > trema).length / corridas) * 100;

    // Evaluar si el porcentaje supera el porcentaje de aceptación ingresado por el usuario
    const proyectoAceptado = porcentajeAceptacionReal >= porcentajeAceptacion;

    // Actualizar el estado
    setTIRResults(resultadosTIR);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle className="resolver-title">Simulación de Proyecto de Inversión</IonTitle>

        {/* Campos para ingresar valores */}
        <IonList>
          {/* Campos para Inversión Inicial */}
          <IonItem>
            <IonLabel position="stacked">Inversión Inicial - Valor Mínimo:</IonLabel>
            <IonInput type="number" value={inversionMin} onIonChange={(e) => setInversionMin(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Inversión Inicial - Valor Máximo:</IonLabel>
            <IonInput type="number" value={inversionMax} onIonChange={(e) => setInversionMax(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Inversión Inicial - Valor Probable:</IonLabel>
            <IonInput type="number" value={inversionProbable} onIonChange={(e) => setInversionProbable(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          {/* Campos para Flujo Neto */}
          <IonItem>
            <IonLabel position="stacked">Flujo Neto - Valor Mínimo:</IonLabel>
            <IonInput type="number" value={flujoMin} onIonChange={(e) => setFlujoMin(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Flujo Neto - Valor Máximo:</IonLabel>
            <IonInput type="number" value={flujoMax} onIonChange={(e) => setFlujoMax(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Flujo Neto - Valor Probable:</IonLabel>
            <IonInput type="number" value={flujoProbable} onIonChange={(e) => setFlujoProbable(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Total de Años:</IonLabel>
            <IonInput type="number" value={numYears} onIonChange={(e) => setNumYears(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          {/* Repite lo mismo para los demás campos de inversión y flujo neto (máximo y probable) */}
          
          <IonItem>
            <IonLabel position="stacked">TREMA (%):</IonLabel>
            <IonInput type="number" value={trema} onIonChange={(e) => setTREMA(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Porcentaje de Aceptación (%):</IonLabel>
            <IonInput type="number" value={porcentajeAceptacion} onIonChange={(e) => setPorcentajeAceptacion(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Número de Corridas:</IonLabel>
            <IonInput type="number" value={corridas} onIonChange={(e) => setCorridas(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
        </IonList>

        {/* ... Resto de la interfaz de usuario ... */}

        <IonButton onClick={simularProyecto}>Simular Proyecto</IonButton>

        {/* Mostrar los resultados de la simulación */}
        {tirResults.length > 0 && (
          <div>
            <h2>Resultados de la Simulación:</h2>
            <ul>
              {tirResults.map((tir, index) => (
                <li key={index}>Corrida {index + 1}: TIR {tir.toFixed(2)}%</li>
              ))}
            </ul>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ResolverProblema;
