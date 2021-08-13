import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonGrid, IonRow, IonCol, IonItemDivider, IonText, IonModal, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react'
import './Home.css';
import Logo from "../img/logo.svg"
import Techcollege from "../img/techcollege.svg"
import callFunction from '../Assets/Database/database';

const Home: React.FC<any> = () => {

  const [thickness, setThickness] = useState(Number);
  const [bwThickness, setbwThickness] = useState(Number);
  const [fwThickness, setfwThickness] = useState(Number);
  const [weldingtype, setWeldingtype] = useState(String);
  const [width, setWidth] = useState(Number);
  const [angle, setAngle] = useState(Number);
  const [modalOpen, setModalOpen] = useState(false);
  const [choosenElement, setChoosenElement] = useState({ name: '', message: '', details: { id: Number, error: '', image: [] } });

  const handleThickness = (value: any) => { setThickness(value.currentTarget.value) };
  const handlebwThickness = (value: any) => { setbwThickness(value.currentTarget.value) };
  const handlefwThickness = (value: any) => { setfwThickness(value.currentTarget.value) };
  const handleWeldingtype = (value: any) => { value.preventDefault(); setWeldingtype(value.currentTarget.value) };
  const handleWidth = (value: any) => { setWidth(value.currentTarget.value) };
  const handleAngle = (value: any) => { setAngle(value.currentTarget.value) };

  const handleChooseElement = (value: any) => {
    setChoosenElement(value);
    setModalOpen(true);
    console.log(choosenElement);
  }

  //darktheme enable
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  toggleDarkTheme(prefersDark.matches);

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

  // Add or remove the "dark" class based on if the media query matches
  function toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  let usedArray = callFunction(weldingtype);


  useEffect(() => {
    usedArray = usedArray.filter(elements => elements.type.includes(weldingtype));
    console.log(angle)
  }, [weldingtype, thickness, fwThickness, bwThickness, width, angle])

  return (
    <IonPage className="mainpage">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="Title-logo">
            <img className="Logo" src={Logo} alt=""></img>
          </IonTitle>
          <IonTitle className="Title-Techcollege">
            <img src={Techcollege} alt=""></img>
          </IonTitle>


        </IonToolbar>
      </IonHeader>


      <IonContent className="Content-section" fullscreen>
        <IonList>
          <IonItem className="Ion-items">
            <IonSelect className="Select" value={weldingtype} placeholder="Vælg svejsning" onIonChange={(e) => { handleWeldingtype(e) }}>
              <IonSelectOption value="FW" >Kantsøm</IonSelectOption>
              <IonSelectOption value="BW">Stumpsøm</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Pladetykkelse</IonLabel>
            <IonInput className="Input" onIonChange={(e) => { handleThickness(e) }} placeholder="Pladetykkelse i mm"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">A-mål</IonLabel>
            <IonInput className="Input" onIonChange={(e) => { handlefwThickness(e) }} placeholder="A-mål i mm"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Stumpsøm tykkelse</IonLabel>
            <IonInput className="Input" onIonChange={(e) => { handlebwThickness(e) }} placeholder="Stumpsøm tykkelse i mm"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Bredde</IonLabel>
            <IonInput className="Input" onIonChange={(e) => { handleWidth(e) }} placeholder="Bredde i mm"></IonInput>
          </IonItem>
          { /*<IonItem className="Ion-items">
            <IonLabel className="Input-label">Vinkel</IonLabel>
            <IonInput className="Input" onIonChange={(e) => { handleAngle(e) }} placeholder="Vinkel i grader"></IonInput>
          </IonItem>*/ }
        </IonList>

        <IonHeader>
          <IonToolbar className="Ion-toolbar">
            <IonText className="Ion-errors">
              Fejlmeddelelser
            </IonText>
          </IonToolbar>
        </IonHeader>
        {weldingtype && usedArray && usedArray.map((item: any, index: any) => {
          // hvis ikke calc functionen har en value, så skal der ikke vises noget
          if (!item.calc(thickness, fwThickness, bwThickness, width)) {
            return (
              <IonItem key={index} className="showNone"></IonItem>
            )
          } else {
            return (
              <IonList key={index} className="Ion-list">
                <IonItemDivider className="Ion-divider">
                  <IonLabel className="Ion-label">
                    {item.id}
                  </IonLabel>
                  <IonText className="Ion-text">
                    {item.error}
                  </IonText>
                </IonItemDivider>

                {item.calc(thickness, fwThickness, bwThickness, width) && item.calc(thickness, fwThickness, bwThickness, width, angle).map((element: any, index: any) => {
                  return (
                    <IonItem onClick={() => { handleChooseElement(element) }} className="show" key={index}>
                      <IonGrid className="Ion-col">
                        <IonRow>
                          <IonCol className="Ion-col">{element.name}</IonCol>
                          <IonCol className="Ion-col">{element.message}</IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonItem>
                  )
                })}
              </IonList>
            )
          }
        })}

        {choosenElement &&
          choosenElement.name === 'Fejl' ? null :
          <IonModal isOpen={modalOpen}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>{choosenElement.details.id} <br />{choosenElement.details.error}</IonTitle>
              </IonToolbar>
            </IonHeader>
            {choosenElement.details.image.map((item: any, index: any) => {
              return (
                <img key={index} src={item} alt="" />
              )
            })}
            <IonButton expand="full" onClick={(e) => { setModalOpen(false) }}>luk fane</IonButton>
          </IonModal>
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;