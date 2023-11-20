// src/pages/ResolverProblema/ResolverProblema.tsx

import React, { useState } from 'react';
import { IonContent, IonPage, IonTitle, IonLabel, IonInput, IonButton } from '@ionic/react';
import './ResolverProblema.css';

const ResolverProblema: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [modalValue, setModalValue] = useState<number>(0);
  const [numYears, setNumYears] = useState<number>(5);
  const [trema, setTREMA] = useState<number>(0.3);
  const [simulationResults, setSimulationResults] = useState<number[]>([]);

  const simulateProject = () => {
    // Lógica de simulación aquí usando transformada inversa
    // ...

    // Ejemplo: Generación de 5 valores aleatorios entre minValue y maxValue utilizando la distribución triangular
    const simulatedValues = Array.from({ length: numYears }, () => {
      const U = Math.random();
      const F = (modalValue - minValue) / (maxValue - minValue);
      return U <= F ? minValue + Math.sqrt(U * (maxValue - minValue) * (modalValue - minValue)) : 
                      maxValue - Math.sqrt((1 - U) * (maxValue - minValue) * (maxValue - modalValue));
    });

    // Mostrar los resultados de la simulación
    setSimulationResults(simulatedValues);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle className="resolver-title">Simulación de Proyecto de Inversión</IonTitle>

        <IonLabel position="stacked">Valor Mínimo:</IonLabel>
        <IonInput type="number" value={minValue} onIonChange={(e) => setMinValue(parseFloat(e.detail.value!))}></IonInput>

        <IonLabel position="stacked">Valor Máximo:</IonLabel>
        <IonInput type="number" value={maxValue} onIonChange={(e) => setMaxValue(parseFloat(e.detail.value!))}></IonInput>

        <IonLabel position="stacked">Valor Modal:</IonLabel>
        <IonInput type="number" value={modalValue} onIonChange={(e) => setModalValue(parseFloat(e.detail.value!))}></IonInput>

        <IonLabel position="stacked">Número de Años:</IonLabel>
        <IonInput type="number" value={numYears} onIonChange={(e) => setNumYears(parseInt(e.detail.value!, 10))}></IonInput>

        <IonLabel position="stacked">TREMA:</IonLabel>
        <IonInput type="number" value={trema} onIonChange={(e) => setTREMA(parseFloat(e.detail.value!))}></IonInput>

        <IonButton onClick={simulateProject}>Simular Proyecto</IonButton>

        {/* Mostrar los resultados de la simulación */}
        {simulationResults.length > 0 && (
          <div>
            <h2>Resultados de la Simulación:</h2>
            <ul>
              {simulationResults.map((value, index) => (
                <li key={index}>Año {index + 1}: {value}</li>
              ))}
            </ul>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ResolverProblema;
