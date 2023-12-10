/* VISTA RESULTADOS */
/* APARTADO DONDE EL USUARIO PODRA VER LOS RESULTADOS DE LA SIMULACION */

/* IMPORTACIONES */
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DatosCorridasType } from '../types';
import { IonPage, IonHeader, IonTitle, IonContent, IonBackButton, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import './Resultados.css'

/*
 Componente principal para la vista de INICIO (EXPERTO).
*/
const Resultados: React.FC = () => {
  // Hook para la gestión del historial de navegación
  const history = useHistory();

  // Estado para manejar el despliegue de detalles adicionales
  const [mostrarMas, setMostrarMas] = useState(false);

  // Función para cambiar el estado de mostrarMas
  const toggleMostrarMas = () => {
    setMostrarMas(!mostrarMas);
  };

  // Función para redirigir a la vista de Inicio2
  const redirectToInicio = () => {
    history.push('/inicio2');
    window.location.reload();
  };

  // Función para redirigir a la vista de Información 
  const redirectToInformacion = () => {
    history.push('/informacion');
  };

    // Función para redirigir a la vista de Welcome
  const redirectToWelcome = () => {
    localStorage.clear();
    history.push('/welcome');
    window.location.reload();
  };

  // Obtener datos de la ubicación (resultados y datosCorridas) de la vista CORRIDAS
  const location = useLocation();
  const { resultados, datosCorridas } = (location.state as { resultados?: any, datosCorridas?: DatosCorridasType }) || {};
  const resultadosCorridas = resultados || [];

  //Log para verificar la llegada con exito de los datos
  console.log('Resultados Corridas:', resultadosCorridas);

  // Función para calcular la TIR promedio
  const calcularPromedioTIR = () => {
    //Log para verificar que el TIR de cada corrida es exitoso
    console.log('TIR de cada corrida:', resultadosCorridas.map((resultado: any) => resultado.tir));

    const tirValidas = resultadosCorridas.filter((resultado: any) => !isNaN(resultado.tir));
    
    if (tirValidas.length === 0) {
      //Log para verificar si hay TIR validas
      console.log('No hay TIR válidas');
      return 0; 
    }
  
    const sumaTIR = tirValidas.reduce((suma: number, resultado: any) => suma + resultado.tir, 0);
    const promedioTIR = sumaTIR / tirValidas.length;
  
    return parseFloat(promedioTIR.toFixed(2));
  };

  // Función para verificar si el proyecto es aceptado
  const esProyectoAceptado = () => {
    const promedioTIR = calcularPromedioTIR();
    const trema = resultadosCorridas[0]?.trema || 0;
    return promedioTIR > trema;
  };

  // Función para calcular conclusiones adicionales
  const calcularSegundaConclusión = () => {
    // Paso 1: Calcular el Promedio de la Inversión Inicial
    const sumaInversiones = resultadosCorridas.reduce((suma: number, resultado: any) => suma + resultado.inversionInicial, 0);
    const promedioInversion = sumaInversiones / resultadosCorridas.length;

    // Log para verificar el correcto funcionamiento del Promedio de Inversion Inicial
    console.log(`Promedio de Inversión Inicial: ${promedioInversion}`);

    // Paso 2: Calcular el Promedio de los Flujos Netos por Año (sin incluir el año 0)
    const promediosFlujosPorAño = Array.from({ length: (datosCorridas?.numeroAnios || 0) }, (_, year: number) => {
      // Suma de los flujos netos solo para el año actual
      const sumaFlujos = resultadosCorridas.reduce((suma: number, resultado: any) => suma + resultado.flujos[year + 1], 0);
      // Promedio del flujo neto del año actual
      const promedio = sumaFlujos / resultadosCorridas.length;

      // Log para verificar el correcto funcionamiento de Promedio de Flujos Netos por año
      console.log(`Promedio de Flujos Netos para el Año ${year + 1}: ${promedio}`);

      return promedio;
    });

    // Log para verificar el correcto funcionamiento de Promedio de Flujos Netos por año
    console.log('Promedios de Flujos Netos por Año:', promediosFlujosPorAño);

    // Paso 3: Encontrar el Primer Año en que la Suma Acumulativa de los Promedios sea Mayor o Igual al Promedio de la Inversión Inicial
    let primerAnio = -1;
    let sumaAcumulativa = 0;

    for (let year = 0; year < promediosFlujosPorAño.length; year++) {
      sumaAcumulativa += promediosFlujosPorAño[year];
      // Log para verificar el correcto funcionamiento de la suma de Flujos Netos
      console.log(`Suma Acumulativa hasta el Año ${year + 1}: ${sumaAcumulativa}`);

      if (sumaAcumulativa >= promedioInversion) {
        primerAnio = year + 1;
        // Log para verificar el correcto funcionamiento para encontrar el año 
        console.log(`¡Encontrado! Primer año: ${primerAnio}`);
        break;
      }
    }

    // Paso 4: Calcular la Ganancia desde el primer año encontrado 
    const ganancia = promediosFlujosPorAño.slice(primerAnio).filter((valor) => !isNaN(valor)).reduce((suma, promedio) => suma + promedio, 0);
    // Log para verificar el correcto funcionamiento del calculo de Ganancia
    console.log('Ganancia:', ganancia);
    return { primerAnio, ganancia };
    };

    const { primerAnio, ganancia } = calcularSegundaConclusión();
    const gananciaRedondeada = ganancia.toFixed(2);

    // Log para verificar los dos resultados esperados
    console.log('Resultados Finales:', { primerAnio, gananciaRedondeada });


      return (
        <IonPage id='page'>

        {/* Header de la vista RESULTADOS */}
        <IonHeader id='head'>
          <div id='tbh'>

          <IonButtons slot="start" id='btnt' >
          <IonBackButton defaultHref="/corridas" />
          </IonButtons>

            <IonTitle id='welcome-title'>INVERT.IO</IonTitle>

            <IonImg id='welcome-logo' src="https://th.bing.com/th/id/OIG.6w9pUphiH9Sh8Jt9720p?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
          </div>
        </IonHeader>

        {/* Contenido de la vista RESULTADOS */}
          <IonContent id='resultados-content'>

          <h1 id="resultados-content-title">RESULTADOS</h1>
      
        {/* Muestra todas las TIR de las CORRIDAS */}
            {resultadosCorridas.map((resultado: any, index: number) => (
              <div key={index} id='div-resultados'>
                <p id='resultados-corridas'>Corrida {index + 1}: TIR = {resultado.tir}%</p>
              </div>
            ))}
            <p id='resultados-promedio'>Promedio TIR: {calcularPromedioTIR()}%</p>
 
        {/* Muestra el resultado de aceptación o rechazo */}
            {esProyectoAceptado()  ? (
            <div>
            {/* ACEPTADO */}
            <p id='resultados-aceptados'>
                <span id="proyecto1">El Proyecto es: </span>
                <span id="aceptado">ACEPTADO</span>
            </p>

            {/* CONCLUSION */} 
            <img id='senior1' src="https://cdn.discordapp.com/attachments/837905669138677770/1181068262642024500/a6a0db7b-f3b8-4e33-93b8-269645219f8e.jpeg?ex=657fb689&is=656d4189&hm=468e9b97529cb01212e92cd696da7ade9d56ca3f3204ec40beabdcfb44f85b6b&" alt="Senior" />
            <p id='conclu-acep'><strong>Conclusión: </strong> 
            El proyecto cumple con las expectativas esperadas superando la probabilidad de aceptacion del proyecto establecido por la 
            empresa con una Inversion Inicial de: <strong>{datosCorridas?.valorProbableInversion} Bs.</strong> La cual se recuperará en <strong>{datosCorridas?.numeroAnios}</strong> años 
            con un TIR de <strong>{calcularPromedioTIR()}%</strong></p>

            {/* MOSTRADO DE GANANCIAS Y RECUPERACION DE INVERSION INICIAL */}
            <p id='conclu-acep'><strong>Dato Extra: </strong> 
            "Usted acaba de Invertir <strong>{datosCorridas?.valorProbableInversion}</strong>, recuperara dicha Inversión en <strong>{primerAnio}</strong> años
            con una ganancia de <strong>{gananciaRedondeada}</strong> Bs. en {datosCorridas?.numeroAnios} años.</p>
            </div>
            ) : (
              <div>
              {/* RECHAZADO */}
              <p id='resultados-rechazado'>
                <span id="proyecto">El Proyecto es: </span>
                <span id="rechazado">RECHAZADO</span>
              </p>

              {/* CONCLUSION */}
            <img id='senior1' src="https://cdn.discordapp.com/attachments/837905669138677770/1181069843240337480/OIG.png?ex=657fb801&is=656d4301&hm=1f88cc21491f9501b06f11e622af86169c7bcc6f4d12ae7e64cee5bb72029c17&" alt="Senior" />
            <p id='conclu-recha'><strong>Conclusión: </strong> 
            El proyecto es rechazado porque no cumple con las expectativas deseadas por la empresa ya que no supera la probabildiad 
            de aceptacion establecida del <strong>{datosCorridas?.porcentajeAceptacion}%.</strong></p>
              </div>
              )}

          {/* Boton desplegable (VALORES DE INICIO) */}
          <div id='mostrar-mas-section'>
          <button onClick={toggleMostrarMas} id='mostrar-mas-btn'>
            {mostrarMas ? 'Cerrar Detalles' : 'Desplegar Detalles'}
          </button>

          {mostrarMas && (
            <p id='mostrar-mas-texto' className='active'>
              <strong>Inversión Inicial: </strong>
              {datosCorridas?.valorProbableInversion} Bs. <br></br>
              <strong>Años: </strong>
              {datosCorridas?.numeroAnios} Años <br></br>
              <strong>Trema: </strong>
              {datosCorridas?.trema}% <br></br>
              <strong>%Aceptación: </strong>
              {datosCorridas?.porcentajeAceptacion}%
            </p>
          )}
        </div>

        {/* Botones VOLVER - CALCULAR */}
            <IonButton expand="full" onClick={redirectToWelcome} id='resultados-btn-volver'>
              VOLVER
            </IonButton>

            <IonButton expand="full" onClick={redirectToInicio} id='resultados-btn-calcular'>
              CALCULAR
            </IonButton>
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

export default Resultados;
