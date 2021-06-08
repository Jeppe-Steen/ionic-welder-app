import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Home.css';

const Home: React.FC<any> = () => {
  const [tykkelse, setTykkelse] = useState(Number);
  const [select, setSelect] = useState('');

  const [filter, setFilter] = useState(Array);

  const array = [
    {
      id: 1.1,
      type: ["BW"],
      calc: (t: number) => {
        if (t >= 3) {
          return t
        } else {
          return 'fejl'
        }
      }
    },
    {
      id: 1.2,
      type: ["FW"],
      calc: (t: number) => {
        return t;
      }
    },
  ];

  const handleTykkelse = (e: any) => {
    setTykkelse(e.target.value);
  }

  const handleSelect = (e: any) => {
    setSelect(e.target.value);
  }

  const handleClick = () => {
    const filterForSelect = array.filter(elements => elements.type.includes(select))
    setFilter(filterForSelect)
  }

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
            <IonSelect placeholder="Vælg svejsning" onIonChange={(e) => {handleSelect(e)}}>
              <IonSelectOption value="FW">Kantsøm</IonSelectOption> 
              <IonSelectOption value="BW">Stumpsøm</IonSelectOption> 
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonInput onKeyUp={(e) => {handleTykkelse(e)}} placeholder="Pladetykkelse"></IonInput>
          </IonItem>
       </IonList>
       <IonButton onClick={handleClick} expand="full">test</IonButton>
       <IonList>
         <IonHeader>
           <IonToolbar>
            <IonTitle>
              liste
            </IonTitle>
           </IonToolbar>
         </IonHeader>
         {filter && filter.map((item: any, index: any) => {
           return (
             <IonItem key={index}>
               <p>{item.id}</p>
               <p>{item.calc(tykkelse)}</p>
             </IonItem>
           )
         })}
       </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
