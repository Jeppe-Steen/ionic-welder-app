import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonGrid, IonRow, IonCol, IonItemDivider, IonText, IonModal, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react'
import './Home.css';
import Logo from "../img/logo.svg"
import Techcollege from "../img/techcollege.svg"
import chooseErrors from '../Assets/Database/database';

import ErrorOne_One from '../Assets/errorTypes/fejltype1_1.png';
import ErrorOne_Two from '../Assets/errorTypes/fejltype1_2.png';
import ErrorOne_Three from '../Assets/errorTypes/fejltype1_3.png';
import ErrorOne_Four from '../Assets/errorTypes/fejltype1_4.png';
import ErrorOne_Five from '../Assets/errorTypes/fejltype1_5.png';
import ErrorOne_Six from '../Assets/errorTypes/fejltype1_6.png';
import ErrorOne_SevenFW from '../Assets/errorTypes/fejltype1_7FW.png';
import ErrorOne_SevenBW from '../Assets/errorTypes/fejltype1_7BW.png';
import ErrorOne_Eight from '../Assets/errorTypes/fejltype1_8.png';
import ErrorOne_Nine from '../Assets/errorTypes/fejltype1_9.png';
import ErrorOne_Ten from '../Assets/errorTypes/fejltype1_10.png';
import ErrorOne_Eleven from '../Assets/errorTypes/fejltype1_11.png';
import ErrorOne_Twelve from '../Assets/errorTypes/fejltype1_12.png';
import ErrorOne_Thirteen from '../Assets/errorTypes/fejltype1_13.png';
import ErrorOne_Fourteen from '../Assets/errorTypes/fejltype1_14.png';
import ErrorOne_Fifthteen from '../Assets/errorTypes/fejltype1_15.png';
import ErrorOne_Sixteen from '../Assets/errorTypes/fejltype1_16.png';
import ErrorOne_Seventeen from '../Assets/errorTypes/fejltype1_17.png';
import ErrorOne_Eightteen from '../Assets/errorTypes/fejltype1_18.png';
import ErrorOne_Nineteen from '../Assets/errorTypes/fejltype1_19.png';
import ErrorOne_Twenty from '../Assets/errorTypes/fejltype1_20.png';
import ErrorOne_TwentyOne from '../Assets/errorTypes/fejltype1_21.png';


const Home: React.FC = () => {

  const [thickness, setThickness] = useState(Number);
  const [bwThickness, setbwThickness] = useState(Number);
  const [fwThickness, setfwThickness] = useState(Number);
  const [weldingtype, setWeldingtype] = useState(String);
  const [modalOpen, setModalOpen] = useState(false);
  const [choosenElement, setChoosenElement] = useState({name: '', message: '', details: {id: Number, error: '', image: []}});

  const [data, setData] = useState([{id: '', error: '', type: [''], calc: Function}]);

  const [width, setWidth] = useState(Number);
  const handleThickness = (value: any) => {setThickness(value.currentTarget.value)};
  const handlebwThickness = (value: any) => {setbwThickness(value.currentTarget.value)};
  const handlefwThickness = (value: any) => {setfwThickness(value.currentTarget.value)};
  const handleWeldingtype = (value: any) => {value.preventDefault(); setWeldingtype(value.currentTarget.value)};
  const handleWidth = (value: any) => {setWidth(value.currentTarget.value)};

  const handleChooseElement = (value: any) => {
      setChoosenElement(value);
      setModalOpen(true);
      console.log(choosenElement);
  }

  const errorType: Array<Object> = [
    {
      id: 1.1, 
      error: "Revne", 
      type: ["FW", "BW"],
      calc: (t: number, a: number, s: number, b: number) => {
      
        if (t >= 0.5) {
          return [
            {name: 'D, C & B', message: 'Ikke tilladt', details: {
                id: 1.1,
                error: "Revne",
                image: [ErrorOne_One],
            }},
          ]
        }
      }   
    }, 
    {
      id: 1.2, 
      error: "Kraterevne", 
      type: ["FW", "BW"],
      calc: (t: number, a: number, s: number, b: number) => {
      
        if (t >= 0.5) {
          return [
            {name: 'D, C & B', message: 'Ikke tilladt', details: {
                id: 1.2,
                error: "Kraterevne",
                image: [ErrorOne_Two],
            }},
          ]
        }
      }   
    },
    {
      id: 1.3, 
      error: "Overfladepore", 
      type: ["FW", "BW"],
      calc: (t: number, a: number, s: number, b: number) => {
        if (t >= 0.5 && t <= 3) {
          if (weldingtype === 'FW') {
            if(!a) {
              return [
                {name: 'Fejl', message: 'Du skal udfylde A-mål',}
              ]
            } else {
              if (weldingtype === "FW"){
                return [
                  {name: 'D', message: 'd ≤ ' + 0.3 * a + 'mm', details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [ErrorOne_Three],
                }},
                  {name: 'C', message: 'Ikke Tilladt', details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [ErrorOne_Three],
                }},
                  {name: 'B', message: 'Ikke tilladt', details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [ErrorOne_Three],
                }}
                ]
              }
            }
          } else if (weldingtype === 'BW') {
            if (!s) {
              return [
                {name: 'Fejl', message: 'Du skal udfylde stumpsøms tykkelse',}
              ]
            } else {
              if (weldingtype === "BW") {
                return [
                  {name: 'D', message: 'd ≤ ' + 0.3 * s + 'mm', details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [ErrorOne_Three],
                }},
                  {name: 'C', message: 'Ikke tilladt', details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [ErrorOne_Three],
                }},
                  {name: 'B', message: 'Ikke tilladt', details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [ErrorOne_Three],
                }}
                ]
              }
            }  
          }
        } else if (t > 3) {
            if (weldingtype === "FW"){
              if (!a) {
                return [
                  {name: 'Fejl', message: 'Du skal udfylde A-mål'}
                ]
              } else {
                if (0.3 * a <= 3){
                  return [
                    {name: 'D', message: 'd ≤ ' + 0.3 * a + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                    }}
                  ]
                } else if(0.2 * a <= 3) {
                    return [
                      {name: 'C', message: 'd ≤ ' + 0.2 * a + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                    }}
                    ]
                } else {
                  return [
                    {name: 'B', message: 'Ikke tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                    }}
                  ]
                }
              }

            } else if (weldingtype === "BW") {
              if(!s) {
                return [
                  {name: 'Fejl', message: 'Du skal udfylde stumpsøms tykkelse'}
                ]
              } else {
                if (0.3 * s <= 3){
                  return [
                    {name: 'D', message: 'd ≤ ' + 0.3 * s + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                    }}
                  ]
                } else if(0.2 * a <= 3) {
                  return [
                    {name: 'C', message: 'd ≤ ' + 0.2 * s + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                    }}
                  ]
                } else {
                    return [
                      {name: 'B', message: 'Ikke tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [],
                    }}
                    ]
                  }
                }
              }
        }
      },
    },
    {
      id: 1.4, 
      error: "Åben Kraterpore", 
      type: ["FW", "BW"],
      calc: (t: number, a: number, s: number, b: number) => {
       

        if (t >= 0.5 && t <= 3) {
          return [
            {name: 'D', message: 'h ≤ ' + 0.2 * t + 'mm', details: {
                id: 1.4,
                error: "Åben Kraterpore",
                image: [ErrorOne_Four],
            }},
            {name: 'C', message: 'Ikke tilladt', details: {
                id: 1.4,
                error: "Åben Kraterpore",
                image: [ErrorOne_Four],
            }},
            {name: 'B', message: 'Ikke tilladt', details: {
                id: 1.4,
                error: "Åben Kraterpore",
                image: [ErrorOne_Four],
            }}
          ]
        } else if (t > 3) {
          return [
            {name: 'D', message: 'h ≤ ' + 0.2 * t + 'mm', details: {
                id: 1.4,
                error: "Åben Kraterpore",
                image: [ErrorOne_Four],
            }},
            {name: 'C', message: 'h ≤ ' + 0.1 * t + 'mm', details: {
                id: 1.4,
                error: "Åben Kraterpore",
                image: [ErrorOne_Four],
            }},
            {name: 'B', message: 'Ikke tilladt', details: {
                id: 1.4,
                error: "Åben Kraterpore",
                image: [ErrorOne_Four],
            }}
          ]
        }
      },
    },
    {
      id: 1.5, 
      error: "Bindingsfejl", 
      type: ["FW", "BW"],
      calc: (t: number, a: number, s: number, b: number) => {
      
        if (t >= 0.5) {
          return [
            {name: 'D, C & B', message: 'Ikke tilladt', details: {
                id: 1.5,
                error: "Bindingsfejl",
                image: [ErrorOne_Five],
            }},
          ]
        }
      }   
    }, 
  {
    id: 1.6,
    error: "RodFejl",
    type: ["BW"], 
    calc: (t: number, a: number, s: number, b: number) => {
      if (t >= 0.5) {
        return [
          {name: 'D', message: 'h ≤' + 0.2 * t + 'mm', details: {
            id: 1.6,
            error: "Rodfejl",
            image: [ErrorOne_Six],
        }},
          {name: 'C', message: 'Ikke tilladt', details: {
            id: 1.6,
            error: "Rodfejl",
            image: [ErrorOne_Six],
        }},
          {name: 'B', message: 'Ikke tilladt', details: {
            id: 1.6,
            error: "Rodfejl",
            image: [ErrorOne_Six],
        }}
        ]
      }
    }
  },
  {
    id: 1.7, 
    error: "Sidekærv", 
    type: ["FW", "BW"],
    calc: (t: number, a: number, s: number, b: number) => {
     

      if (t >= 0.5 && t <= 3) {
        return [
          {name: 'D', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm', details: {
            id: 1.7,
            error: "Sidekærv",
            image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
        }},
          {name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm', details: {
            id: 1.7,
            error: "Sidekærv",
            image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
        }},
          {name: 'B', message: 'Ikke tilladt', details: {
            id: 1.7,
            error: "Sidekærv",
            image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
        }}
        ]
      } else if (t > 3) {
        return [
          {name: 'D', message: 'h ≤ ' + 0.2 * t + 'Max. 1mm', details: {
            id: 1.7,
            error: "Sidekærv",
            image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
        }},
          {name: 'C', message: 'h ≤ ' + 0.1 * t + 'Max 0.5mm', details: {
            id: 1.7,
            error: "Sidekærv",
            image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
        }},
          {name: 'B', message: 'h ≤ ' + 0.5 * t + 'Max 0.5mm', details: {
            id: 1.7,
            error: "Sidekærv",
            image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
        }},
        ]
      }
    },
  },
  { 
    id: 1.9, 
    error: "Oversvulst (stumpsøm)",
    type: ["BW"], 
    calc: (t: number, a: number, s: number, b: number) => {
      if (t >= 0.5 && t <= 3) {
        if (b) {
          return [
            {name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 0.25 + b + 'Max 10mm', details: {
                id: 1.9,
                error: "Oversvulst(stumpsøm)",
                image: [ErrorOne_Nine],
            }},
            {name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.15 + b + 'Max 7mm', details: {
                id: 1.9,
                error: "Oversvulst(stumpsøm)",
                image: [ErrorOne_Nine],
            }},
            {name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.1 + b + 'Max 5mm', details: {
                id: 1.9,
                error: "Oversvulst(stumpsøm)",
                image: [ErrorOne_Nine],
            }}
          ]
        } else {
          return [
            {name: 'Fejl', message: "husk at fylde ud bredden",}
          ]
        } 
      }
    }
  },
  { 
    id: 1.10, 
    error: "Konveks sømoverflade (kantsøm)",
    type: ["FW"], 
    calc: (t: number, a: number, s: number, b: number) => {
      if (t >= 0.5 && t <= 3) {
        if (b) { 
          return [
            {name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 0.25 + b + 'Max 10mm', details: {
                id: 1.10,
                error: "Konveks sømoverflade(kantsøm)",
                image: [ErrorOne_Ten],
            }},
            {name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.15 + b + 'Max 7mm', details: {
                id: 1.10,
                error: "Konveks sømoverflade(kantsøm)",
                image: [ErrorOne_Ten],
            }},
            {name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.1 + b + 'Max 5mm', details: {
                id: 1.10,
                error: "Konveks sømoverflade(kantsøm)",
                image: [ErrorOne_Ten],
            }}
          ]
        } else {
          return [
            {name: 'Fejl', message: "husk at fylde ud bredden",}
          ]
        }
      }
    }
  },
  {
    id: 1.11, 
    error: "Gennomløb", 
    type: ["BW"],
    calc: (t: number, a: number, s: number, b: number) => {
      if (t >= 0.5 && t <= 3) {
        if (b) {
          return [
          {name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 0.6 + b, details: {
            id: 1.11,
            error: "Gennomløb",
            image: [ErrorOne_Eleven],
        }},
          {name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.3 + b, details: {
            id: 1.11,
            error: "Gennomløb",
            image: [ErrorOne_Eleven],
        }},
          {name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.1 + b, details: {
            id: 1.11,
            error: "Gennomløb",
            image: [ErrorOne_Eleven],
        }}
          ]
        } else {
          return [
            {name: 'Fejl', message: "husk at fylde ud bredden",}
          ]
        }
    
      } else if (t > 3) {
        if (b) {
          return [
          {name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 1.0 + b + 'Max. 5mm', details: {
            id: 1.11,
            error: "Gennomløb",
            image: [ErrorOne_Eleven],
        }},
          {name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.6 + b + 'Max. 4mm', details: {
            id: 1.11,
            error: "Gennomløb",
            image: [ErrorOne_Eleven],
        }},
          {name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.2 + b + 'Max. 3mm', details: {
            id: 1.11,
            error: "Gennomløb",
            image: [ErrorOne_Eleven],
        }}
          ]
        } else {
          return [
           {name: 'Fejl', message: "husk at fylde ud bredden"}
          ]
        }
      }
    },
  },
];

useEffect(() => {
  const testData = chooseErrors(weldingtype, thickness, fwThickness, bwThickness, width);
  console.log(testData)
}, [weldingtype])

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
            <IonInput className="Input" onIonChange={(e) => {handleThickness(e)}} placeholder="Pladetykkelse i mm"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">A-mål</IonLabel>
            <IonInput className="Input" onIonChange={(e) => {handlefwThickness(e)}} placeholder="A-mål i mm"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Stumpsøm tykkelse</IonLabel>
            <IonInput className="Input" onIonChange={(e) => {handlebwThickness(e)}} placeholder="Stumpsøm tykkelse i mm"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Brede</IonLabel>
            <IonInput className="Input" onIonChange={(e) => {handleWidth(e)}} placeholder="Bredde i mm"></IonInput>
          </IonItem>
          <IonItem className="Ion-items">
            <IonLabel className="Input-label">Vinkel</IonLabel>
            <IonInput className="Input" placeholder="Vinkel i grader"></IonInput>
          </IonItem>
       </IonList>

         <IonHeader>
           <IonToolbar>
            <IonText>
              Fejlmeddelelser
            </IonText>
           </IonToolbar>
         </IonHeader>
         {weldingtype && errorType && errorType.map((item: any, index: any) => {
            // hvis ikke calc functionen har en value, så skal der ikke vises noget
            if(!item.calc(thickness, fwThickness, bwThickness, width)) {
              return (
                <IonItem key={index} className="showNone"></IonItem>
              )
            } else {
            return (
              <IonList key={index}>
                <IonItemDivider>
                  <IonLabel>
                    {item.id}
                  </IonLabel>
                  <IonText>
                    {item.error}
                  </IonText>
                </IonItemDivider>

                {item.calc(thickness, fwThickness, bwThickness, width) && item.calc(thickness, fwThickness, bwThickness, width).map((element: any, index: any) => {
                    return (
                      <IonItem onClick={() => {handleChooseElement(element)}} className="show" key={index}>
                        <IonGrid>
                          <IonRow>
                            <IonCol>{element.name}</IonCol>
                            <IonCol>{element.message}</IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonItem>
                    )
                  })}
              </IonList>
            )
          }})}

          {choosenElement &&
            choosenElement.name === 'Fejl' ? null :
            <IonModal isOpen={modalOpen}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>{choosenElement.details.id} {choosenElement.details.error}</IonTitle>
                </IonToolbar>
              </IonHeader>
              {choosenElement.details.image.map((item: any, index: any) => {
                  return (
                      <img key={index} src={item} alt="" />
                  )
              })}
              <IonButton expand="full" onClick={(e) => {setModalOpen(false)}}>Close Modal</IonButton>
            </IonModal>
          }
      </IonContent>
    </IonPage>
  );
};

export default Home; 
