import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButtons, IonBackButton, IonButton,IonFooter,IonImg } from '@ionic/react';
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
import './Inicio.css';

const Inicio: React.FC = () => {

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

  /*history.push({
    pathname: "/corridas",
    state: { datosCorridas },
  });*/
  // Almacenar datos en localStorage
  localStorage.setItem('datosCorridas', JSON.stringify(datosCorridas));

  // Navegar a la vista de corridas
  history.push("/corridas");

  setShowSuccessToast(true);

};

return (
    <IonPage id="pageIni">
    <IonHeader id="HeadIni">
      <IonToolbar id="ToolIni">
        <IonButtons id="btonReturn" slot="start">
          <IonBackButton defaultHref="/welcome" />
        </IonButtons>
        <IonTitle id='TitulCorri'>INVERTI.IO</IonTitle>
        <IonImg id='CorridasLogo' src="./src/images/Logo.png" alt="Logo" />
      </IonToolbar>
    </IonHeader>
      <IonContent id='InicioContent' className="contenido">
        <h1 id="H1Ini">INGRESA LOS VALORES</h1>
        <IonGrid id="IniGrid1">
        <IonRow id='IniRow'>
            <IonCol id="IniCol">
            <IonLabel id='IniLabelTrema'>TREMA (%)</IonLabel>
              <IonInput id="IniInpu"
                type="number"
                value={trema}
                placeholder="Ingrese TREMA"
                min={1}  // Valor mínimo permitido
                max={100}  // Valor máximo permitido
                onIonChange={(e) => setTrema(parseFloat(e.detail.value!))}
              />
            {trema < 1 || trema > 100 ? (
            <IonLabel id='IniLaberError' color="danger">El TREMA debe estar entre 1% y 100%</IonLabel>
            ) : null}
            </IonCol>
            <IonCol id="IniCol2">
              <IonLabel id="IniLabelPor">Porcentaje de Proyecto Aceptado (%)</IonLabel>
              <IonInput id="IniInpu2"
                type="number"
                value={porcentajeAceptacion}
                placeholder="Ingrese Porcentaje de Aceptación"
                min={1}  // Valor mínimo permitido
                max={100}  // Valor máximo permitido
                onIonChange={(e) => setPorcentajeAceptacion(parseFloat(e.detail.value!))}
              />
            {porcentajeAceptacion < 1 || porcentajeAceptacion > 100 ? (
              <IonLabel id="IniLabelAcepS" color="danger">El porcentaje de aceptación debe estar entre 1% y 100%</IonLabel>
            ) : null}
            </IonCol>
          </IonRow>

          <IonRow id="IniRow3">
            <IonCol id="IniCol4">
                <IonLabel id="IniLabelNum">Número de Corridas</IonLabel>
                <IonInput id="IniInput5"
                type="number"
                value={numeroCorridas}
                placeholder="Ingrese Número de Corridas"
                onIonChange={(e) => setNumeroCorridas(parseInt(e.detail.value!, 10))}
                />
            </IonCol>
            <IonCol id="IniCol5">
                <IonLabel id="IniLabelAnios">Número de Años</IonLabel>
                <IonInput id="IniInput6"
                type="number"
                value={numeroAnios}
                placeholder="Ingrese Número de Años"
                onIonChange={(e) => setNumeroAnios(parseInt(e.detail.value!, 10))}
                />
            </IonCol>
            </IonRow>

          {/* Campos de entrada para datos de Inversión */}
          <p id="IniInverIni"> Inversion Inicial </p>
          <IonRow id="IniRow4">
            <IonCol id="IniCol6">
              <IonLabel id="IniLaelMinInver">Valor Mínimo</IonLabel>
              <IonInput id="IniInput7"
                type="number"
                value={valorMinimoInversion}
                placeholder="Ingrese Valor Mínimo Inversión"
                onIonChange={(e) => setValorMinimoInversion(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol id="IniCol7">
              <IonLabel id="IniLabelMaxInv">Valor Máximo</IonLabel>
              <IonInput id="IniInpu8"
                type="number"
                value={valorMaximoInversion}
                placeholder="Ingrese Valor Máximo Inversión"
                onIonChange={(e) => setValorMaximoInversion(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol id="IniCol8">
              <IonLabel id="IniLabelValProInver">Valor Probable</IonLabel>
              <IonInput id="IniInpu9"
                type="number"
                value={valorProbableInversion}
                placeholder="Ingrese Valor Probable Inversión"
                onIonChange={(e) => setValorProbableInversion(parseFloat(e.detail.value!))}
              />
            </IonCol>
          </IonRow>

          <p id="IniFlujoNeto"> Flujo Neto </p>
          {/* Campos de entrada para datos de Flujo Neto */}
          <IonRow id="IniRow5">
            <IonCol id="IniCol9">
              <IonLabel id="IniLabelValMinFlu">Valor Mínimo</IonLabel>
              <IonInput id="IniInput10"
                type="number"
                value={valorMinimoFlujoNeto}
                placeholder="Ingrese Valor Mínimo Flujo Neto"
                onIonChange={(e) => setValorMinimoFlujoNeto(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol id="IniInput11">
              <IonLabel id="IniLabelValMaxFlu">Valor Máximo</IonLabel>
              <IonInput id="IniInput11"
                type="number"
                value={valorMaximoFlujoNeto}
                placeholder="Ingrese Valor Máximo Flujo Neto"
                onIonChange={(e) => setValorMaximoFlujoNeto(parseFloat(e.detail.value!))}
              />
            </IonCol>
            <IonCol id="IniInput12">
              <IonLabel id="IniLabelValProFlu">Valor Probable</IonLabel>
              <IonInput id="IniInput12"
                type="number"
                value={valorProbableFlujoNeto}
                placeholder="Ingrese Valor Probable Flujo Neto"
                onIonChange={(e) => setValorProbableFlujoNeto(parseFloat(e.detail.value!))}
              />
            </IonCol>

          </IonRow>

            <IonToast id="IniToast"
            isOpen={showSuccessToast}
            onDidDismiss={() => setShowSuccessToast(false)}
            message="Simulación realizada con éxito. Redirigiendo a la vista de corridas..."
            duration={3000}  // Duración en milisegundos
            position="top"
            color="success"  // Puedes ajustar el color según tu estilo
            />

            <IonToast id="IniToast1"
                isOpen={showErrorToast}
                onDidDismiss={() => setShowErrorToast(false)}
                message={errorMessage}
                duration={3000}
                position="top" 
                color="danger"
             />

          {/*<img src="./src/images/HombreAzul.png" alt="HombreAzul" className='info-image'/>*/}
          <IonButton id="IdButtonSim" expand="full" onClick={handleSimularClick}>
            SIMULAR
          </IonButton>
          <IonButton id="IdButtonValor" expand="full" onClick={setValoresPredeterminados}>
            DAR VALORES
          </IonButton>
        </IonGrid>
      </IonContent>
      <IonFooter id="IniFooter">
        <IonGrid id="IniGrid2">
          <IonRow id="IniRow6">
            <IonCol id="IniCol13">
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="IniButtonReuturnInfo" expand="full" onClick={redirectToInformacion}>
              <IonImg id="IniImaInfo" src="./src/images/person.png" alt="Informacion" />
              </IonButton>
            </IonCol>
            <IonCol id="IniCol14">
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="IniButtonReturnWel" expand="full" onClick={redirectToWelcome}>
              <IonImg id="IniImgWel" src="./src/images/home.png" alt="Welcome" />
              </IonButton>
            </IonCol>
            <IonCol id="IniCol15">
              {/* Botón con ícono personalizado desde la carpeta 'images' */}
              <IonButton id="IniButtonReturnIni" expand="full" onClick={redirectToInicio}>
              <IonImg id="IniImgIni" src="./src/images/calculator.png" alt="Inicio" />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Inicio;
