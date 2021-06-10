import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useEffect, useState } from 'react'
import './Home.css';
import Logo from "../img/logo.svg"
import Techcollege from "../img/techcollege.svg"

const Home: React.FC = () => {

  const [thickness, setThickness] = useState(Number);
  const [bwThickness, setbwThickness] = useState(Number);
  const [fwThickness, setfwThickness] = useState(Number);
  const [weldingtype, setWeldingtype] = useState(String);
  const handleThickness = (value: any) => {setThickness(value.currentTarget.value); console.log(thickness)};
  const handlebwThickness = (value: any) => {setbwThickness(value.currentTarget.value); console.log(bwThickness)};
  const handlefwThickness = (value: any) => {setfwThickness(value.currentTarget.value); console.log(fwThickness)};
  const handleWeldingtype = (value: any) => {value.preventDefault(); setWeldingtype(value.currentTarget.value)}
  useEffect(() => {
    console.log(weldingtype)
  }, [weldingtype])

  const errorType: Array<Object> = [
    {
      id: 1.1, 
      error: "Revne", 
      type: ["FW", "BW"],
      calc: (t: number) => {
      
        if (t >= 0.5) {
          return [
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
      
        if (t >= 0.5) {
          return [
            {name: 'D, C & B', message: 'Ikke tilladt'},
          ]
        }
      }   
    },
    {
      id: 1.3, 
      error: "Overfladepore", 
      type: ["FW", "BW"],
      calc: (t: number, s: number, a:number) => {
     

        if (t >= 0.5 && t <= 3) {
          if (weldingtype === "kantsøm"){
            return [
              {name: 'D', message: 'd ≤' + 0.3 * a + 'mm'},
              {name: 'C', message: 'Ikke Tilladt'},
              {name: 'B', message: 'Ikke tilladt'}
            ]
          } else if (weldingtype === "stumpsøm") {
            return [
              {name: 'D', message: 'd ≤' + 0.3 * s + 'mm'},
              {name: 'C', message: 'Ikke tilladt'},
              {name: 'B', message: 'Ikke tilladt'}
            ]
          }
          
        } else if (t > 3) {
            if (weldingtype === "kantsøm"){
              if (0.3 * a <= 3){
                return [
                  {name: 'D', message: 'd ≤' + 0.3 * a + 'mm'}
                ]
              } else if(0.2 * a <= 3) {
                  return [
                    {name: 'C', message: 'd ≤' + 0.2 * a + 'mm'}
                  ]
              } else {
                return [
                  {name: 'B', message: 'Ikke tilladt'}
                ]
              }

            } else if (weldingtype === "stumpsøm") {
              if (0.3 * s <= 3){
                return [
                  {name: 'D', message: 'd ≤' + 0.3 * s + 'mm'}
                ]
              } else if(0.2 * a <= 3) {
                return [
                  {name: 'C', message: 'd ≤' + 0.2 * s + 'mm'}
                ]
            } else {
                return [
                  {name: 'B', message: 'Ikke tilladt'}
                ]
              }
            }
        }
      },
    },
    {
      id: 1.4, 
      error: "Åben Kraterpore", 
      type: ["FW", "BW"],
      calc: (t: number) => {
       

        if (t >= 0.5 && t <= 3) {
          return [
            {name: 'D', message: 'h ≤ ' + 0.2 * t + 'mm'},
            {name: 'C', message: 'Ikke tilladt'},
            {name: 'B', message: 'Ikke tilladt'}
          ]
        } else if (t > 3) {
          return [
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
            <IonSelect className="Select" value={weldingtype} placeholder="Vælg svejsning" onIonChange={(e) => {handleWeldingtype(e)}}>
              <IonSelectOption value="FW" >Kantsøm</IonSelectOption> 
              <IonSelectOption value="BW">Stumpsøm</IonSelectOption> 
            </IonSelect>
          </IonItem>

          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Pladetykkelse</IonLabel>
            <IonInput className="Input" onIonChange={(e) => {handleThickness(e)}} placeholder="Pladetykkelse"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">A-mål</IonLabel>
            <IonInput className="Input" onIonChange={(e) => {handlefwThickness(e)}} placeholder="A-mål"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Stumpsøm tykkelse</IonLabel>
            <IonInput className="Input" onIonChange={(e) => {handlebwThickness(e)}} placeholder=""></IonInput>
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
            if(!item.calc(thickness, bwThickness, fwThickness)) {
              return (
                <IonItem key={index} className="showNone"></IonItem>
              )
            } else {
            return (
              <IonItem key={index}>
                <IonGrid>
                {item.calc(thickness, bwThickness, fwThickness) && item.calc(thickness, bwThickness, fwThickness).map((element: any, index: any) => {
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
