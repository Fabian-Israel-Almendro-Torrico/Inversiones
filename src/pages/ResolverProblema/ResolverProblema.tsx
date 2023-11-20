// src/pages/ResolverProblema/ResolverProblema.tsx

import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './ResolverProblema.css';

const ResolverProblema: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      <div className="resolver-text">¿Listo para saber si invertir o no?</div>
      {/* Otro contenido puede ir aquí */}
    </IonContent>
  </IonPage>
);

export default ResolverProblema;