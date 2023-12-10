/* VISTA INCIO (EXPERTO) */
/* APARTADO DONDE EL USUARIO PODRA INGRESAR VALORES DE MANERA EXPERTA */

/* IMPORTACIONES */
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButtons, IonBackButton, IonButton,IonFooter,IonImg } from '@ionic/react';
import { IonToast } from '@ionic/react';
import {IonLabel, IonHeader, IonTitle, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Inicio.css';

/*
 Componente principal para la vista de INICIO (EXPERTO).
*/
const Inicio: React.FC = () => {
    // Hook para la gestión del historial de navegación
    const history = useHistory();

  {/*Estados para almacenar los valores ingresados por el usuario */}
  // Estados para Trema, Porcentaje de Aceptacion, Numero de Corridas y Numero de Años
  const [trema, setTrema] = useState(0);
  const [porcentajeAceptacion, setPorcentajeAceptacion] = useState(0);
  const [numeroCorridas, setNumeroCorridas] = useState(0);
  const [numeroAnios, setNumeroAnios] = useState(0);

  // Estados para la inversión inicial
  const [valorMinimoInversion, setValorMinimoInversion] = useState(0);
  const [valorMaximoInversion, setValorMaximoInversion] = useState(0);
  const [valorProbableInversion, setValorProbableInversion] = useState(0);

  // Estados para el flujo neto
  const [valorMinimoFlujoNeto, setValorMinimoFlujoNeto] = useState(0);
  const [valorMaximoFlujoNeto, setValorMaximoFlujoNeto] = useState(0);
  const [valorProbableFlujoNeto, setValorProbableFlujoNeto] = useState(0);

  // Estados para controlar los mensajes de éxito y error
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Función para redirigir a la vista de Inicio
  const redirectToInicio1 = () => {
    history.push('/inicio');
    window.location.reload();
  };

  // Función para redirigir a la vista de Informacion
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  // Función para redirigir a la vista de Welcome
  const redirectToWelcome = () => {
    history.push('/welcome');
    window.location.reload();
  };

  // Función para redirigir a la vista de Help (Inicio)
  const redirectToHelp = () => {
    history.push('/help');
    window.location.reload();
  };

  // Función para redirigir a la vista de Inicio2
  const redirectToIni2 = () => {
    history.push('/inicio2');
    window.location.reload();
  };

  /*
    Función para establecer automáticamente los valores predeterminados.
  */
    const setValoresPredeterminados = () => {
      setTrema(30);
      setPorcentajeAceptacion(90);
      setNumeroCorridas(5);
      setNumeroAnios(6);
      setValorMinimoInversion(95000);
      setValorMaximoInversion(105000);
      setValorProbableInversion(100000);
      setValorMinimoFlujoNeto(27000);
      setValorMaximoFlujoNeto(33000);
      setValorProbableFlujoNeto(30000);
    };


  /*
    Función para manejar el evento de clic en el botón de simulación.
  */
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
            // Mostrar un mensaje de error 
            setErrorMessage('Todos los campos son obligatorios y deben ser mayores que 0');
            // Accion de exito
            setShowErrorToast(true);
            return;
        }

      // Validar que los campos esten llenados correctamente
        if (
          porcentajeAceptacion < 0 ||
          porcentajeAceptacion > 100 ||
          numeroCorridas < 3 ||
          numeroCorridas > 100 ||
          numeroAnios < 3 ||
          numeroAnios > 10 ||
          trema < 1 ||
          trema > 100 
      ) {
          // Mostrar un mensaje de error 
          setErrorMessage('Verifica que todo este llenado correctamente');
          // Accion de exito
          setShowErrorToast(true);
          return;
      }

      // Validar que los campos de Inversion sean llenados correctamente
        if (
          valorMinimoInversion >= valorMaximoInversion ||
          valorMinimoInversion >= valorProbableInversion ||
          valorMaximoInversion <= valorMinimoInversion ||
          valorMaximoInversion <= valorProbableInversion ||
          valorProbableInversion <= valorMinimoInversion ||
          valorProbableInversion >= valorMaximoInversion
        ) {
          // Mostrar un mensaje de error 
          setErrorMessage('Las restricciones para la Inversión Inicial no se cumplen.');
          // Accion de exito
          setShowErrorToast(true);
          return;
        }

      // Validar que los campos de Flujo Neto sean llenados correctamente
        if (
          valorMinimoFlujoNeto >= valorMaximoFlujoNeto ||
          valorMinimoFlujoNeto >= valorProbableFlujoNeto ||
          valorMaximoFlujoNeto <= valorMinimoFlujoNeto ||
          valorMaximoFlujoNeto <= valorProbableFlujoNeto ||
          valorProbableFlujoNeto <= valorMinimoFlujoNeto ||
          valorProbableFlujoNeto >= valorMaximoFlujoNeto
        ) {
          setErrorMessage('Las restricciones para el Flujo Neto no se cumplen.');
          // Accion de exito
          setShowErrorToast(true);
          return;
        }


  /*
    Función para mostrar mensajes para el llenado correcto
  */
      const validateInput = (value: number, min: number, max: number, errorMessage: string) => {
          if (value < min || value > max) {
            setErrorMessage(errorMessage);
            setShowErrorToast(true);
            return false;
          }
          return true;
        };
          
        // Mensaje
        validateInput(trema, 1, 100, 'El TREMA debe estar entre 1% y 100%');


    // Funcion para calcular la Inversion Inicial
    const inversionInicial =
      Math.random() <= (valorProbableInversion - valorMinimoInversion) / (valorMaximoInversion - valorMinimoInversion)
        ? valorMinimoInversion +
          Math.sqrt(Math.random() * (valorMaximoInversion - valorMinimoInversion) * (valorProbableInversion - valorMinimoInversion))
        : valorMaximoInversion -
          Math.sqrt((1 - Math.random()) * (valorMaximoInversion - valorMinimoInversion) * (valorMaximoInversion - valorProbableInversion));

    // Funcion para calcular el Flujo Neto
    const flujoNeto =
      Math.random() <= (valorProbableFlujoNeto - valorMinimoFlujoNeto) / (valorMaximoFlujoNeto - valorMinimoFlujoNeto)
        ? valorMinimoFlujoNeto +
          Math.sqrt(Math.random() * (valorMaximoFlujoNeto - valorMinimoFlujoNeto) * (valorProbableFlujoNeto - valorMinimoFlujoNeto))
        : valorMaximoFlujoNeto -
          Math.sqrt((1 - Math.random()) * (valorMaximoFlujoNeto - valorMinimoFlujoNeto) * (valorMaximoFlujoNeto - valorProbableFlujoNeto));

    // Funcion que almacena los datos ingresados en esta vista
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
    // Log para verificar que los datos son pasados correctamente
    console.log('Datos de corridas antes de la redirección:', datosCorridas);

    //Paso de datos (datosCorridas) de la vista INICIO a la vista CORRIDAS
      history.push({
        pathname: "/corridas",
        state: { datosCorridas },
      });
      setShowSuccessToast(true);

  };

  //Renderizacion de la vista
  return (
      <IonPage id="pageIni">

      {/* Header de la vista INICIO */}
      <IonHeader id='head'>
        <div id='tbh'>

        <IonButtons slot="start" id='btnt' >
        <IonBackButton defaultHref="/welcome" />
        </IonButtons>

        <IonTitle id='welcome-title'>INVERT.IO</IonTitle>

        <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
        </div>
      </IonHeader>

      {/* Contenido de la vista INICIO */}
        <IonContent id='InicioContent' className="contenido">

      {/* Boton INICIO2 - RESETEAR VALORES - HELP */}
        <div id='contendor-b'>
        <IonButton expand="full" onClick={redirectToIni2} id='IdButtonAltern2'>
                <IonImg src="https://cdn.discordapp.com/attachments/837905669138677770/1181812752319266846/912265.png?ex=65826be5&is=656ff6e5&hm=3726c4dc1f51f1ee091df3821fd7fb3bfe16f7bcddc96f1cc7abb7975b35a75d&" alt="Informacion" id='img-help'/>
        </IonButton>
        <IonButton id="IdButtonReset" expand="full" onClick={redirectToInicio1}>
              RESETEAR VALORES
        </IonButton>
        <IonButton expand="full" onClick={redirectToHelp} id='IdButtonAyuda'>
                <IonImg src="https://cdn.icon-icons.com/icons2/2596/PNG/512/help_question_icon_155279.png" alt="Informacion" id='img-help'/>
        </IonButton>
        </div>

          <h1 id="H1Ini">INGRESA LOS VALORES</h1>
          <IonGrid id="IniGrid1">

          {/* Seccion que almacena TREMA y %de Aceptacion */}
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

            {/* Seccion que almacena Numero de Corridas y Numero de Años */}
            <IonRow id="IniRow3">
              <IonCol id="IniCol4">
                  <IonLabel id="IniLabelNum">Número de Corridas</IonLabel>
                  <IonInput id="IniInput5"
                  type="number"
                  value={numeroCorridas}
                  placeholder="Ingrese Número de Corridas"
                  onIonChange={(e) => setNumeroCorridas(parseInt(e.detail.value!, 10))}
                  />
              {numeroCorridas < 3 || numeroCorridas > 100 ? (
                <IonLabel id="IniLabelAcepS" color="danger">
                  Solo se aceptan de 3 a 100 corridas
                </IonLabel>
              ) : null}
              </IonCol>

              <IonCol id="IniCol5">
                  <IonLabel id="IniLabelAnios">Número de Años</IonLabel>
                  <IonInput id="IniInput6"
                  type="number"
                  value={numeroAnios}
                  placeholder="Ingrese Número de Años"
                  onIonChange={(e) => setNumeroAnios(parseInt(e.detail.value!, 10))}
                  />
              {numeroAnios < 3 || numeroAnios > 10 ? (
                <IonLabel id="IniLabelAcepS" color="danger">
                  Solo se aceptan de 3 a 10 años
                </IonLabel>
              ) : null}
              </IonCol>
              </IonRow>

            {/* Seccion que almacena los valores de INVERSION */}
            <p id="IniInverIni"> INVERSION INICIAL </p>
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

            {/* Seccion que almacena los valores de Flujo Neto */}
            <p id="IniFlujoNeto"> FLUJO NETO </p>
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

              <IonCol id="IniCol10">
                <IonLabel id="IniLabelValMaxFlu">Valor Máximo</IonLabel>
                <IonInput id="IniInput11"
                  type="number"
                  value={valorMaximoFlujoNeto}
                  placeholder="Ingrese Valor Máximo Flujo Neto"
                  onIonChange={(e) => setValorMaximoFlujoNeto(parseFloat(e.detail.value!))}
                />
              </IonCol>

              <IonCol id="IniCol11">
                <IonLabel id="IniLabelValProFlu">Valor Probable</IonLabel>
                <IonInput id="IniInput12"
                  type="number"
                  value={valorProbableFlujoNeto}
                  placeholder="Ingrese Valor Probable Flujo Neto"
                  onIonChange={(e) => setValorProbableFlujoNeto(parseFloat(e.detail.value!))}
                />
              </IonCol>
            </IonRow>

              {/* Mensaje de exito al ingresar todo correctamente */}
              <IonToast id="IniToast"
              isOpen={showSuccessToast}
              onDidDismiss={() => setShowSuccessToast(false)}
              message="Simulación realizada con éxito. Se muestran resultados..."
              duration={3000}  
              position="top"
              color="success"  
              />

            {/* Accion de error al ingresar algun campo incorrectamente */}
              <IonToast id="IniToast1"
                  isOpen={showErrorToast}
                  onDidDismiss={() => setShowErrorToast(false)}
                  message={errorMessage}
                  duration={3000}
                  position="top" 
                  color="danger"
              />

            {/* BOTON DE SIMULAR Y DAR VALORES */}
            <div id="contenedorBotones">
            <IonButton id="IdButtonSim" expand="full" onClick={handleSimularClick}>
              SIMULAR
            </IonButton>

            <IonButton id="IdButtonValor" expand="full" onClick={setValoresPredeterminados}>
              DAR VALORES
            </IonButton>
            </div>
          </IonGrid>
        </IonContent>

        {/* Inicio del Footer */}
        <IonFooter id='footer'>
        <IonGrid id='grid-footer'>
          <IonRow id='row1-footer'>

            <IonCol id='col1-footer'>
              {/* Botón para la vista INFORMACIO */}
              <IonButton expand="full" onClick={redirectToInformacion} id='info-btn-person'>
                <IonImg src="https://cdn3.iconfinder.com/data/icons/banking-and-finance-4-4/48/158-1024.png" alt="Informacion" id='personf'/>
              </IonButton>
            </IonCol>

            <IonCol id='col2-footer'>
              {/* Botón para la vista WELCOME */}
              <IonButton expand="full" onClick={redirectToWelcome} id='home-btn-image'>
                <IonImg src="https://agenciafattobene.com.br/wp-content/uploads/2020/03/casa-mila.png" alt="Welcome" id='homef'/>
              </IonButton>
            </IonCol>

            <IonCol id='col3-footer'>
              {/* Botón para la vista INICIO2 */}
              <IonButton expand="full" onClick={redirectToInicio1} id='cal-btn-calculator'>
                <IonImg src="https://th.bing.com/th/id/R.eee772e2bfa4f53491444d04b8025701?rik=X%2B595Tz%2FiRKy7g&pid=ImgRaw&r=0" alt="Inicio" id='calf'/>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
      </IonPage>
    );
  };

export default Inicio;
