import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonLabel } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <IonList>
       <IonItem>
            <IonSelect value="" placeholder="Vælg svejsning">
              <IonSelectOption value="FW">Kantsøm</IonSelectOption> 
              <IonSelectOption value="BW">Stumpsøm</IonSelectOption> 
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Pladetykkelse"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>D (Moderat)</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>C (Mellem)</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>B (Skærpet)</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>
       </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
