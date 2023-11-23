// src/App.tsx

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Inicio from './pages/Inicio/Inicio';
import Corridas from './pages/Corridas/Corridas';
import Resultados from './pages/Resultados/Resultados';
import Welcome from './pages/Welcome/Welcome';
import Informacion from './pages/Informacion/Informacion';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/inicio" component={Inicio} exact />
        <Route path="/corridas" component={Corridas} exact />
        <Route path="/resultados" component={Resultados} exact />
        <Route path="/welcome" component={Welcome} exact />
        <Route path="/informacion" component={Informacion} exact />

        <Redirect exact from="/" to="/inicio" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

