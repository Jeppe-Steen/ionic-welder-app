import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonButton, IonNote, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useState } from 'react'
import './Home.css';
import Logo from "../img/logo.svg"
import Techcollege from "../img/techcollege.svg"

const Home: React.FC = () => {

  const [thickness, setThickness] = useState(Number);
  const [weldingtype, setWeldingtype] = useState(String);
  const handleThickness = (value: any) => {setThickness(value)};
  const handleWeldingtype = (value: any) => {setWeldingtype(value)}
  const errorType: Array<Object> = [
    {
      id: 1.1, 
      error: "Revne", 
      type: ["FW", "BW"],
      calc: (t: number) => {
        let errorArray: any = [];

        if (t >= 0.5) {
          return errorArray = [
            {name: 'D, C & B', message: 'Ikke tilladt'},
          ]
        }
      }   
    }, 
    {
      id: 1.2, 
      error: "Kraterevne", 
      type: ["FW", "BW"],
      calc: (t: number) => {
        let errorArray: any = [];

        if (t >= 0.5) {
          return errorArray = [
            {name: 'D, C & B', message: 'Ikke tilladt'},
          ]
        }
      }   
    },
    {
      id: 1.4, 
      error: "Åben Kraterpore", 
      type: ["FW", "BW"],
      calc: (t: number) => {
        let errorArray: any = [];

        if (t >= 0.5 && t <= 3) {
          return errorArray = [
            {name: 'D', message: 'h ≤ ' + 0.2 * t + 'mm'},
            {name: 'C', message: 'Ikke tilladt'},
            {name: 'B', message: 'Ikke tilladt'}
          ]
        } else if (t > 3) {
          return errorArray = [
            {name: 'D', message: 'h ≤ ' + 0.2 * t + 'mm'},
            {name: 'C', message: 'h ≤ ' + 0.1 * t + 'mm'},
            {name: 'B', message: 'Ikke tilladt'}
          ]
        }
      },
    }
  ]

  const testArray: any = [];

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
            <IonSelect className="Select" value="" placeholder="Vælg svejsning" onChange={(e) => {handleWeldingtype(e.currentTarget.value)}}>
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
       <IonList>
         <IonHeader>
           <IonToolbar>
             <IonGrid>
               <IonRow>
                 <IonCol>Nummer</IonCol>
                 <IonCol>Fejlbetegnelse</IonCol>
                 <IonCol>Kvalitetsniveau</IonCol>
               </IonRow>
             </IonGrid>
           </IonToolbar>
         </IonHeader>
          {errorType && errorType.map((item: any, index: any) => {
            // hvis ikke calc functionen har en value, så skal der ikke vises noget
            if(!item.calc(thickness)) {
              return (
                <IonItem key={index} className="showNone"></IonItem>
              )
            } else {
            return (
              <IonItem key={index}>
                <IonGrid>
                {item.calc(thickness) && item.calc(thickness).map((element: any, index: any) => {
                    return (
                      <IonRow className="show" key={index}>
                        <IonCol>{item.id}</IonCol>
                        <IonCol>{item.error}</IonCol>
                        <IonCol>{element.name}: {element.message}</IonCol>
                      </IonRow>
                    )
                  })}
                </IonGrid>
              </IonItem>
            )
          }})}
       </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Home;
