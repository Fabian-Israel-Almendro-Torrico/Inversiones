import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IonToast } from '@ionic/react';
import {
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/react';
import { IonContent, IonPage, IonInput, IonButton } from '@ionic/react';

const Inicio: React.FC = () => {
  // Estados para almacenar los valores ingresados por el usuario
  const [trema, setTrema] = useState(0);
  const [porcentajeAceptacion, setPorcentajeAceptacion] = useState(0);
  const [numeroCorridas, setNumeroCorridas] = useState(0);
  const [numeroAnios, setNumeroAnios] = useState(0);

  const [valorMinimoInversion, setValorMinimoInversion] = useState(0);
  const [valorMaximoInversion, setValorMaximoInversion] = useState(0);
  const [valorProbableInversion, setValorProbableInversion] = useState(0);

  const [valorMinimoFlujoNeto, setValorMinimoFlujoNeto] = useState(0);
  const [valorMaximoFlujoNeto, setValorMaximoFlujoNeto] = useState(0);
  const [valorProbableFlujoNeto, setValorProbableFlujoNeto] = useState(0);


  const [showSuccessToast, setShowSuccessToast] = useState(false);


  const history = useHistory();
  const handleSimularClick = () => {
        // Validar que todos los campos necesarios estén completos y no tengan el valor 0
        if (
            trema <= 0 ||
            porcentajeAceptacion <= 0 ||
            numeroCorridas <= 0 ||
            numeroAnios <= 0 ||
            valorMinimoInversion <= 0 ||
            valorMaximoInversion <= 0 ||
            valorProbableInversion <= 0 ||
            valorMinimoFlujoNeto <= 0 ||
            valorMaximoFlujoNeto <= 0 ||
            valorProbableFlujoNeto <= 0
        ) {
            // Mostrar un mensaje de error o hacer lo que sea necesario
            console.error('Todos los campos son obligatorios y deben ser mayores que 0');
            return;
        }

    // Realizar cálculos según las fórmulas proporcionadas
    // Por ejemplo, para la inversión inicial
    const inversionInicial =
      Math.random() <= (valorProbableInversion - valorMinimoInversion) / (valorMaximoInversion - valorMinimoInversion)
        ? valorMinimoInversion +
          Math.sqrt(Math.random() * (valorMaximoInversion - valorMinimoInversion) * (valorProbableInversion - valorMinimoInversion))
        : valorMaximoInversion -
          Math.sqrt((1 - Math.random()) * (valorMaximoInversion - valorMinimoInversion) * (valorMaximoInversion - valorProbableInversion));

    // Para el flujo neto
    const flujoNeto =
      Math.random() <= (valorProbableFlujoNeto - valorMinimoFlujoNeto) / (valorMaximoFlujoNeto - valorMinimoFlujoNeto)
        ? valorMinimoFlujoNeto +
          Math.sqrt(Math.random() * (valorMaximoFlujoNeto - valorMinimoFlujoNeto) * (valorProbableFlujoNeto - valorMinimoFlujoNeto))
        : valorMaximoFlujoNeto -
          Math.sqrt((1 - Math.random()) * (valorMaximoFlujoNeto - valorMinimoFlujoNeto) * (valorMaximoFlujoNeto - valorProbableFlujoNeto));

    // Aquí deberías realizar más cálculos según tus necesidades

    // Redirige a la vista de Corridas y pasa los parámetros como parte del estado de la ubicación

  // Ejemplo de redirección a la vista de Corridas utilizando useHistory
    history.push(`/corridas/${trema}/${porcentajeAceptacion}/${numeroCorridas}/${numeroAnios}/${valorMinimoInversion}/${valorMaximoInversion}/${valorProbableInversion}/${valorMinimoFlujoNeto}/${valorMaximoFlujoNeto}/${valorProbableFlujoNeto}`);
    
    setShowSuccessToast(true);

};

return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a Inver.io</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>TREMA (%)</IonLabel>
              <IonInput
                type="number"
                value={trema}
                placeholder="Ingrese TREMA"
                min={1}  // Valor mínimo permitido
                max={100}  // Valor máximo permitido
                onIonChange={(e) => setTrema(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol>
              <IonLabel>Porcentaje de Proyecto Aceptado (%)</IonLabel>
              <IonInput
                type="number"
                value={porcentajeAceptacion}
                placeholder="Ingrese Porcentaje de Aceptación"
                min={1}  // Valor mínimo permitido
                max={100}  // Valor máximo permitido
                onIonChange={(e) => setPorcentajeAceptacion(parseFloat(e.detail.value!))}
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
                <IonLabel>Número de Corridas</IonLabel>
                <IonInput
                type="number"
                value={numeroCorridas}
                placeholder="Ingrese Número de Corridas"
                onIonChange={(e) => setNumeroCorridas(parseInt(e.detail.value!, 10))}
                />
            </IonCol>
            <IonCol>
                <IonLabel>Número de Años</IonLabel>
                <IonInput
                type="number"
                value={numeroAnios}
                placeholder="Ingrese Número de Años"
                onIonChange={(e) => setNumeroAnios(parseInt(e.detail.value!, 10))}
                />
            </IonCol>
            </IonRow>

          {/* Campos de entrada para datos de Inversión */}
          <p> Inversion Inicial </p>
          <IonRow>
            <IonCol>
              <IonLabel>Valor Mínimo Inversión</IonLabel>
              <IonInput
                type="number"
                value={valorMinimoInversion}
                placeholder="Ingrese Valor Mínimo Inversión"
                onIonChange={(e) => setValorMinimoInversion(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol>
              <IonLabel>Valor Máximo Inversión</IonLabel>
              <IonInput
                type="number"
                value={valorMaximoInversion}
                placeholder="Ingrese Valor Máximo Inversión"
                onIonChange={(e) => setValorMaximoInversion(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol>
              <IonLabel>Valor Probable Inversión</IonLabel>
              <IonInput
                type="number"
                value={valorProbableInversion}
                placeholder="Ingrese Valor Probable Inversión"
                onIonChange={(e) => setValorProbableInversion(parseFloat(e.detail.value!))}
              />
            </IonCol>
          </IonRow>

          <p> Inversion Inicial </p>
          {/* Campos de entrada para datos de Flujo Neto */}
          <IonRow>
            <IonCol>
              <IonLabel>Valor Mínimo Flujo Neto</IonLabel>
              <IonInput
                type="number"
                value={valorMinimoFlujoNeto}
                placeholder="Ingrese Valor Mínimo Flujo Neto"
                onIonChange={(e) => setValorMinimoFlujoNeto(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol>
              <IonLabel>Valor Máximo Flujo Neto</IonLabel>
              <IonInput
                type="number"
                value={valorMaximoFlujoNeto}
                placeholder="Ingrese Valor Máximo Flujo Neto"
                onIonChange={(e) => setValorMaximoFlujoNeto(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol>
              <IonLabel>Valor Probable Flujo Neto</IonLabel>
              <IonInput
                type="number"
                value={valorProbableFlujoNeto}
                placeholder="Ingrese Valor Probable Flujo Neto"
                onIonChange={(e) => setValorProbableFlujoNeto(parseFloat(e.detail.value!))}
              />
            </IonCol>

          </IonRow>

            <IonToast
            isOpen={showSuccessToast}
            onDidDismiss={() => setShowSuccessToast(false)}
            message="Simulación realizada con éxito. Redirigiendo a la vista de corridas..."
            duration={3000}  // Duración en milisegundos
            position="top"
            color="success"  // Puedes ajustar el color según tu estilo
            />

          <IonButton expand="full" onClick={handleSimularClick}>
            Simular Proyecto
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
