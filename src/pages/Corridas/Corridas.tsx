// src/pages/Corridas/Corridas.tsx

import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonTitle, IonList, IonItem, IonLabel } from '@ionic/react';

const Corridas: React.FC = () => {
  const [corridasData, setCorridasData] = useState<number[][]>([]);

  useEffect(() => {
    // Aquí deberías calcular y establecer los datos de las corridas
    // Puedes usar tu lógica de cálculo de Inversión Inicial, Flujo Neto y TIR aquí
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle>Detalle de Corridas</IonTitle>
        <IonList>
          {corridasData.map((corridaData, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{index + 1}° Corrida</h2>
                {/* Mostrar datos de la corrida actual */}
                {/* Año, Inversión Inicial, Flujo Neto, TIR, etc. */}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        {/* Botón para ir a la vista de Resultados */}
      </IonContent>
    </IonPage>
  );
};

export default Corridas;
