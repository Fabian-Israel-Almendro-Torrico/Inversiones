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
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

    // Función para establecer automáticamente los valores predeterminados
    const setValoresPredeterminados = () => {
      setTrema(30);
      setPorcentajeAceptacion(90);
      setNumeroCorridas(5);
      setNumeroAnios(5);
      setValorMinimoInversion(95000);
      setValorMaximoInversion(105000);
      setValorProbableInversion(100000);
      setValorMinimoFlujoNeto(27000);
      setValorMaximoFlujoNeto(33000);
      setValorProbableFlujoNeto(30000);
    };

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
            setErrorMessage('Todos los campos son obligatorios y deben ser mayores que 0');
            setShowErrorToast(true);
            return;
        }

        // Validar que los porcentajes estén en el rango permitido (1% - 100%)
        const validateInput = (value: number, min: number, max: number, errorMessage: string) => {
            if (value < min || value > max) {
              setErrorMessage(errorMessage);
              setShowErrorToast(true);
              return false;
            }
            return true;
          };
          
          // Llamada a la función de validación
          validateInput(trema, 1, 100, 'El TREMA debe estar entre 1% y 100%');


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
  const datosCorridas = {
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
  };
  
  console.log('Datos de corridas antes de la redirección:', datosCorridas);

  history.push({
    pathname: "/corridas",
    state: { datosCorridas },
  });

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
            {trema < 1 || trema > 100 ? (
              <IonLabel color="danger">El TREMA debe estar entre 1% y 100%</IonLabel>
            ) : null}
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
            {porcentajeAceptacion < 1 || porcentajeAceptacion > 100 ? (
              <IonLabel color="danger">El porcentaje de aceptación debe estar entre 1% y 100%</IonLabel>
            ) : null}
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

          <p> Flujo Neto </p>
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

            <IonToast
                isOpen={showErrorToast}
                onDidDismiss={() => setShowErrorToast(false)}
                message={errorMessage}
                duration={3000}
                position="top" 
                color="danger"
             />

          <IonButton expand="full" onClick={handleSimularClick}>
            Simular Proyecto
          </IonButton>
          <IonButton expand="full" onClick={setValoresPredeterminados}>
            Valores Predeterminados
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
