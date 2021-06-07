import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonLabel } from '@ionic/react';
import './Home.css';
import Logo from "../img/logo.svg"
import Techcollege from "../img/techcollege.svg"

const Home: React.FC = () => {
  return (
    <IonPage className="mainpage">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="Title-logo">
            <img src={Logo} alt=""></img>
          </IonTitle>
          <IonTitle className="Title-Techcollege">
            <img src={Techcollege} alt=""></img>
          </IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent className="Content-section" fullscreen>
       <IonList>
          <IonItem className="Ion-items">
            <IonSelect className="Select" value="" placeholder="Vælg svejsning">
              <IonSelectOption value="FW">Kantsøm</IonSelectOption> 
              <IonSelectOption value="BW">Stumpsøm</IonSelectOption> 
            </IonSelect>
          </IonItem>

          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Pladetykkelse</IonLabel>
            <IonInput className="Input" placeholder="Pladetykkelse"></IonInput>
          </IonItem>

          <IonItem className="Ion-items">
            <IonLabel className="Checkbox-label">D (Moderat)</IonLabel>
            <IonCheckbox className="Checkbox"></IonCheckbox>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Checkbox-label">C (Mellem)</IonLabel>
            <IonCheckbox className="Checkbox"></IonCheckbox>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Checkbox-label">B (Skærpet)</IonLabel>
            <IonCheckbox className="Checkbox"></IonCheckbox>
          </IonItem>

       </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Home;
