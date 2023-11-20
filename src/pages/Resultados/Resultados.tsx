// src/pages/Resultados/Resultados.tsx

import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonTitle, IonList, IonItem, IonLabel } from '@ionic/react';

const Resultados: React.FC = () => {
  const [tirResults, setTIRResults] = useState<number[]>([]);

  useEffect(() => {
    // Aquí deberías calcular y establecer los resultados de TIR
    // y porcentaje de TIR > TREMA
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle>Resultados</IonTitle>
        <IonList>
          {tirResults.map((tir, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{index + 1}° Corrida</h2>
                {/* Mostrar TIR de la corrida actual */}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        {/* Mostrar porcentaje de TIR > TREMA y si el proyecto es aceptado o rechazado */}
      </IonContent>
    </IonPage>
  );
};

export default Resultados;
