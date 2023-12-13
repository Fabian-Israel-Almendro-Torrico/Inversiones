/* VISTA INCIO (SIMPLE) */
/* APARTADO DONDE EL USUARIO PODRA INGRESAR VALORES DE MANERA SIMPLE */

/* IMPORTACIONES */
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButtons, IonBackButton, IonButton,IonFooter,IonImg } from '@ionic/react';
import { IonToast } from '@ionic/react';
import {IonLabel, IonHeader, IonTitle, IonGrid, IonRow, IonCol} from '@ionic/react';
import './IniSim.css';

/*
 Componente principal para la vista de INICIO (SIMPLE).
*/
const IniSim: React.FC = () => {
  // Hook para la gestión del historial de navegación
  const history = useHistory();

  {/*Estados para almacenar los valores ingresados por el usuario */}
  // Estados para Trema, valorMinimo (Flujo Neto - Inversion Inicial), valorMaximo (Flujo Neto - Inversion Inicial)
  const [trema, setTrema] = useState(0);
  const [valorMinimoInversion, setValorMinimoInversion] = useState(0);
  const [valorMaximoInversion, setValorMaximoInversion] = useState(0);
  const [valorMinimoFlujoNeto, setValorMinimoFlujoNeto] = useState(0);
  const [valorMaximoFlujoNeto, setValorMaximoFlujoNeto] = useState(0);
  const [valorProbableFlujoNeto, setValorProbableFlujoNeto] = useState(0);

  // Estados para $de Aceptacion, Numero de Corridas, Numero de Años
  const [porcentajeAceptacion, setPorcentajeAceptacion] = useState(0);
  const [numeroCorridas, setNumeroCorridas] = useState(0);
  const [numeroAnios, setNumeroAnios] = useState(5);

  // Estados para valor Probable de Inversion
  const [valorProbableInversion, setValorProbableInversion] = useState(0);

  // Estados para controlar los mensajes de éxito y error
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Función para redirigir a la vista de Inicio2
  const redirectToInicio = () => {
    history.push('/inicio2');
    window.location.reload();
  };

  // Función para redirigir a la vista de Inicio
  const redirectToInicio1 = () => {
    history.push('/inicio');
    window.location.reload();
  };

  // Función para redirigir a la vista de Información 
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

  // Función para redirigir a la vista de Welcome
  const redirectToWelcome = () => {
    history.push('/welcome');
    window.location.reload();
  };

  // Función para redirigir a la vista de Help (Simple)
  const redirectToHelp2 = () => {
    history.push('/help2');
    window.location.reload();
  };
  
  /*
      Función para establecer automáticamente los valores predeterminados.
  */
    const setValoresPredeterminados = () => {
      setTrema(30); 
      setPorcentajeAceptacion(90);
      setNumeroCorridas(5);
      setValorProbableInversion(100000);
    };


  /*
      Función para manejar el evento de clic en el botón de simulación.
  */
  const handleSimularClick = () => {
        // Validar que todos los campos necesarios estén completos y no tengan el valor 0
        if (
            porcentajeAceptacion <= 0 ||
            trema <= 0 ||
            numeroCorridas <= 0 ||
            valorProbableInversion <= 0 
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
          numeroCorridas <= 0 ||
          numeroCorridas > 100 ||
          trema < 1 ||
          trema > 100 ||
          valorProbableInversion < 10000 ||
          valorProbableInversion > 100000000
      ) {
          // Mostrar un mensaje de error 
          setErrorMessage('Verifica que todo este llenado correctamente');
          // Accion de exito
          setShowErrorToast(true);
          return;
      }

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


      // Funciones para calcular los valores de Inversión Inicial y una Desviación Estándar
      const calcularInversionMinima = (valorProbable: number) => {
        const desviacionEstandarInversion = 5000;
        return Math.max(valorProbable - desviacionEstandarInversion, 0);
      };
      
      const calcularInversionMaxima = (valorProbable: number) => {
        const desviacionEstandarInversion = 5000;
        return valorProbable + desviacionEstandarInversion;
      };
      
      // Generar un número aleatorio entre 0.10 y 0.90
      let porcentajeAleatorio = Math.random() * 0.7 + 0.2;
      porcentajeAleatorio = parseFloat(porcentajeAleatorio.toFixed(2));
      console.log(`Porcentaje Aleatorio: ${porcentajeAleatorio}`);

      // Funciones para calcular Flujo Neto en función de la Inversión Inicial y una Desviación Estándar
      const calcularFlujoNetoMinimo = (inversionInicial: number) => {
        if (inversionInicial === 100000) {
          return 27000;
        } else {
        const desviacionEstandarFlujoNeto = 3000;
        const porcentaje = parseFloat((porcentajeAleatorio - 0.05).toFixed(2));
        console.log(`Porcentaje para Flujo Neto Mínimo: ${porcentaje}`);
        return inversionInicial * porcentaje - desviacionEstandarFlujoNeto;
        }
      };

      const calcularFlujoNetoMaximo = (inversionInicial: number) => {
        if (inversionInicial === 100000) {
          return 33000;
        } else {
        const desviacionEstandarFlujoNeto = 3000;
        const porcentaje = parseFloat((porcentajeAleatorio + 0.05).toFixed(2));
        console.log(`Porcentaje para Flujo Neto Máximo: ${porcentaje}`);
        return inversionInicial * porcentaje + desviacionEstandarFlujoNeto;
        }
      };

      const calcularFlujoNetoProbable = (inversionInicial: number) => {
        if (inversionInicial === 100000) {
          return 30000;
        } else {
        console.log(`Porcentaje para Flujo Neto Probable: ${porcentajeAleatorio}`);
        return inversionInicial * porcentajeAleatorio;
        }
      };

          // Funcion que almacena los datos ingresados en esta vista
      const datosCorridas = {
        trema,
        porcentajeAceptacion,
        numeroCorridas,
        numeroAnios,
        valorProbableInversion,
        valorMinimoInversion: calcularInversionMinima(valorProbableInversion),
        valorMaximoInversion: calcularInversionMaxima(valorProbableInversion),
        valorMinimoFlujoNeto: calcularFlujoNetoMinimo(valorProbableInversion),
        valorMaximoFlujoNeto: calcularFlujoNetoMaximo(valorProbableInversion),
        valorProbableFlujoNeto: calcularFlujoNetoProbable(valorProbableInversion), 
      };

      // Log para verificar que los datos son pasados correctamente
      console.log('Datos de corridas antes de la redirección:', datosCorridas);

      //Paso de datos (datosCorridas) de la vista INICIO2 a la vista CORRIDAS
      history.push({
        pathname: "/corridas",
        state: { datosCorridas },
      });
      setShowSuccessToast(true);

    };

    //Renderizacion de la vista
    return (
        <IonPage id="pageIni">

        {/* Header de la vista INICIO2 */}  
        <IonHeader id='head'>
          <div id='tbh'>

          <IonButtons slot="start" id='btnt' >
          <IonBackButton defaultHref="/welcome" />
          </IonButtons>

            <IonTitle id='welcome-title'>INVERT.IO</IonTitle>

            <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
          </div>
        </IonHeader>

        {/* Contenido de la vista INICIO2 */}
          <IonContent id='InicioContent'>

          {/* Boton INICIO - RESETEAR VALORES - HELP2 */}
          <div id='contendor-b'>
          <IonButton expand="full" onClick={redirectToInicio1} id='IdButtonAltern1'>
                  <IonImg src="https://cdn.discordapp.com/attachments/837905669138677770/1181812806908125204/2830593.png?ex=65826bf2&is=656ff6f2&hm=a0738e45e9b02a26be54af5b567a40667c449ffce1c28371a587318a6e2ea3be&" alt="Informacion" id='img-help1'/>
          </IonButton>
          <IonButton id="IdButtonReset" expand="full" onClick={redirectToInicio}>
          RESETEAR VALORES
          </IonButton>
          <IonButton expand="full" onClick={redirectToHelp2} id='IdButtonAyuda2'>
                  <IonImg src="https://cdn.icon-icons.com/icons2/2596/PNG/512/help_question_icon_155279.png" alt="Informacion" id='img-help2'/>
          </IonButton>
          </div>

            <h1 id="H1Ini">INGRESA LOS VALORES</h1>
            <IonGrid id="IniGrid1">

            {/* Seccion que almacena Inversion Inicial y Numero de Corridas */}
              <IonRow id="Ini2Row4">
                <IonCol id="Ini2Col8">
                  <IonLabel id="Ini2LabelValProInver">Inversión Inicial</IonLabel>
                  <IonInput id="Ini2Inpu9"
                    type="number"
                    value={valorProbableInversion}
                    placeholder="Ingrese Valor Probable Inversión"
                    onIonChange={(e) => setValorProbableInversion(parseFloat(e.detail.value!))}
                  />
                {valorProbableInversion < 10000 || valorProbableInversion > 100000000 ? (
                  <IonLabel id="IniLabelAcepS" color="danger">
                    Solo se acepta de 10000 Bs. y 100000000 Bs.
                  </IonLabel>
                ) : null}
                </IonCol>

                <IonCol id="Ini2Col4">
                    <IonLabel id="IniLabelNum">Número de Corridas</IonLabel>
                    <IonInput id="IniInput5"
                    type="number"
                    value={numeroCorridas}
                    placeholder="Ingrese Número de Corridas"
                    onIonChange={(e) => setNumeroCorridas(parseInt(e.detail.value!, 10))}
                    />
                  {numeroCorridas <= 0 || numeroCorridas > 100 ? (
                  <IonLabel id="IniLabelAcepS" color="danger">
                    Solo se aceptan de 1 a 100 corridas
                  </IonLabel>
                ) : null}
                </IonCol>
              </IonRow>

            {/*  Seccion que almacena Trema y %de de Proyecto Aceptado  */}
            <IonRow id='Ini2Row'>
                <IonCol id="Ini2Col">
                <IonLabel id='Ini2LabelTrema'>TREMA (%)</IonLabel>
                  <IonInput id="Ini2Inpu"
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

                <IonCol id="Ini2Col2">
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

              {/* Mensaje de exito al ingresar todo correctamente */}
                <IonToast id="IniToast"
                isOpen={showSuccessToast}
                onDidDismiss={() => setShowSuccessToast(false)}
                message="Simulación realizada con éxito. Se muestran resultados..."
                duration={3000}  // Duración en milisegundos
                position="top"
                color="success"  // Puedes ajustar el color según tu estilo
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
                {/* Botón para la vista INFORMACION */}
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
                <IonButton expand="full" onClick={redirectToInicio} id='cal-btn-calculator'>
                  <IonImg src="https://th.bing.com/th/id/R.eee772e2bfa4f53491444d04b8025701?rik=X%2B595Tz%2FiRKy7g&pid=ImgRaw&r=0" alt="Inicio" id='calf'/>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
        </IonPage>
      );
    };

export default IniSim;