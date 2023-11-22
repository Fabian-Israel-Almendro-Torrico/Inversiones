import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { DatosCorridasType } from '../types';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonBackButton, IonButtons } from '@ionic/react';

const Resultados: React.FC = () => {
  // Obtén la ubicación actual
  const location = useLocation();
  const resultadosCorridas = (location.state as { resultados?: any })?.resultados || [];

  // Estados para almacenar los resultados de las corridas
  /*const [resultados, setResultados] = useState<{ rendimiento: number, inversionInicial: number, flujos: number[], tir: number }[]>([]); */

  // Función para calcular la TIR promedio
  const calcularPromedioTIR = () => {
    const sumaTIR = resultadosCorridas.reduce((suma: number, resultado: any) => suma + resultado.tir, 0);
    const promedioTIR = sumaTIR / resultadosCorridas.length;
    return promedioTIR;
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
    <IonPage>
      <IonHeader>
        {/* Resto del código... */}
      </IonHeader>
      <IonContent>
        {/* Resto del código... */}
        
        {/* Muestra las TIR de cada corrida */}
        {resultadosCorridas.map((resultado: any, index: number) => (
          <div key={index}>
            <p>Corrida {index + 1}: TIR = {resultado.tir}%</p>
          </div>
        ))}

        {/* Muestra el promedio TIR */}
        <p>Promedio TIR: {calcularPromedioTIR()}%</p>

        {/* Muestra el resultado de aceptación o rechazo */}
        {esProyectoAceptado() ? (
          <p>¡El proyecto es ACEPTADO!</p>
        ) : (
          <p>El proyecto es RECHAZADO</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Resultados;
