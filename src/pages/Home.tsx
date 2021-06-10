import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonButton, IonNote, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useState } from 'react'
import './Home.css';
import Logo from "../img/logo.svg"
import Techcollege from "../img/techcollege.svg"

const Home: React.FC = () => {

  const [thickness, setThickness] = useState(Number)
  const handleThickness = (value: any) => {setThickness(value)}
  const errorType: Array<Object> = [
    {
      id: 1.1, 
      error: "Revne", 
      type: ["FW", "BW"],
      calc: (t: number) => {
        let errorArray = [];

        if (t >= 0.5) {
          return errorArray = [
            {name: 'D', message: 'Ikke tilladt'},
            {name: 'C', message: 'Ikke tilladt'},
            {name: 'B', message: 'Ikke tilladt'}
          ]
        }
      }   
    }, 
    {
      id: 1.2, 
      error: "Kraterevne", 
      type: ["FW", "BW"],
      calc: (t: number) => {
        let errorArray = [];

        if (t >= 0.5) {
          return errorArray = [
            {name: 'D', message: 'Ikke tilladt'},
            {name: 'C', message: 'Ikke tilladt'},
            {name: 'B', message: 'Ikke tilladt'}
          ]
        }
      }   
    },
    {
      id: 1.4, 
      error: "Åben Kraterpore", 
      type: ["FW", "BW"],
      calc: (t: number) => {
        let errorArray = [];

        if (t >= 0.5 && t <= 3) {
          return errorArray = [
            {name: 'D', message: 0.2 * t},
            {name: 'C', message: 'Ikke tilladt'},
            {name: 'B', message: 'Ikke tilladt'}
          ]
        } else if (t > 3) {
          return errorArray = [
            {name: 'D', message: 0.2 * t},
            {name: 'C', message: 0.1 * t},
            {name: 'B', message: 'Ikke tilladt'}
          ]
        }
      },
    }
  ]

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
            <IonInput className="Input" onKeyUp={(e) => {handleThickness(e.currentTarget.value)}} placeholder="Pladetykkelse"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">A-mål</IonLabel>
            <IonInput className="Input" placeholder="A-mål"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Stumpsøm tykkelse</IonLabel>
            <IonInput className="Input" placeholder=""></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Brede</IonLabel>
            <IonInput className="Input" placeholder="brede"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Vinkel</IonLabel>
            <IonInput className="Input" placeholder="Vinkel"></IonInput>
          </IonItem>
       </IonList>
       <IonButton expand="full">Test</IonButton>
       <IonList>
         <IonHeader>
           <IonToolbar>
             <IonGrid>
               <IonRow>
                 <IonCol>Id</IonCol>
                 <IonCol>Error</IonCol>
                 <IonCol>Name</IonCol>
               </IonRow>
             </IonGrid>
           </IonToolbar>
         </IonHeader>
          {errorType && errorType.map((item: any, index: any) => {
            return (
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonCol>{item.id}</IonCol>
                    <IonCol>{item.error}</IonCol>
                    <IonCol>Name</IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            )
          })}
       </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Home;
