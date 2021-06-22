// kun for at fjerne fejlenen
const weldingtype = 'BW';

const database = [
    // 1.1
    {
        id: '1.1',
        error: "Revne",
        type: ["FW", "BW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D, C & B', message: 'Ikke tilladt', details: {
                  id: 1.1,
                  error: "Revne",
                  image: [ErrorOne_One],
                }
              },
            ]
          }
        }
      },
    // 1.2
    {
        id: '1.2',
        error: "Kraterevne",
        type: ["FW", "BW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D, C & B', message: 'Ikke tilladt', details: {
                  id: 1.2,
                  error: "Kraterevne",
                  image: [ErrorOne_Two],
                }
              },
            ]
          }
        }
      },
    // 1.3
    {
        id: '1.3',
        error: "Overfladepore",
        type: ["FW", "BW"],
        calc: (t, a, s, b) => {
  
  
          if (t >= 0.5 && t <= 3) {
            if (weldingtype === 'FW') {
              if (!a) {
                return [
                  { name: 'Fejl', message: 'Du skal udfylde A-mål', }
                ]
              } else {
                if (weldingtype === "FW") {
                  return [
                    {
                      name: 'D', message: 'd ≤ ' + 0.3 * a + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    },
                    {
                      name: 'C', message: 'Ikke Tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    },
                    {
                      name: 'B', message: 'Ikke tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    }
                  ]
                }
              }
            } else if (weldingtype === 'BW') {
              if (!s) {
                return [
                  { name: 'Fejl', message: 'Du skal udfylde stumpsøms tykkelse', }
                ]
              } else {
                if (weldingtype === "BW") {
                  return [
                    {
                      name: 'D', message: 'd ≤ ' + 0.3 * s + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    },
                    {
                      name: 'C', message: 'Ikke tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    },
                    {
                      name: 'B', message: 'Ikke tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    }
                  ]
                }
              }
            }
          } else if (t > 3) {
            if (weldingtype === "FW") {
              if (!a) {
                return [
                  {
                    name: 'Fejl', message: 'Du skal udfylde A-mål', details: {
                      id: 1.3,
                      error: "Overfladepore",
                    }
                  }
                ]
              } else {
                if (0.3 * a <= 3) {
                  return [
                    {
                      name: 'D', message: 'd ≤ ' + 0.3 * a + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    }
                  ]
                } else if (0.2 * a <= 3) {
                  return [
                    {
                      name: 'C', message: 'd ≤ ' + 0.2 * a + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    }
                  ]
                } else {
                  return [
                    {
                      name: 'B', message: 'Ikke tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    }
                  ]
                }
              }
  
            } else if (weldingtype === "BW") {
              if (!s) {
                return [
                  {
                    name: 'Fejl', message: 'Du skal udfylde stumpsøms tykkelse', details: {
                      id: 1.3,
                      error: "Overfladepore",
                    }
                  }
                ]
              } else {
                if (0.3 * s <= 3) {
                  return [
                    {
                      name: 'D', message: 'd ≤ ' + 0.3 * s + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    }
                  ]
                } else if (0.2 * a <= 3) {
                  return [
                    {
                      name: 'C', message: 'd ≤ ' + 0.2 * s + 'mm', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [ErrorOne_Three],
                      }
                    }
                  ]
                } else {
                  return [
                    {
                      name: 'B', message: 'Ikke tilladt', details: {
                        id: 1.3,
                        error: "Overfladepore",
                        image: [],
                      }
                    }
                  ]
                }
              }
            }
          }
        },
      },
    // 1.4
    {
        id: '1.4',
        error: "Åben Kraterpore",
        type: ["FW", "BW"],
        calc: (t, a, s, b) => {
  
  
          if (t >= 0.5 && t <= 3) {
            return [
              {
                name: 'D', message: 'h ≤ ' + 0.2 * t + 'mm', details: {
                  id: 1.4,
                  error: "Åben Kraterpore",
                  image: [ErrorOne_Four],
                }
              },
              {
                name: 'C', message: 'Ikke tilladt', details: {
                  id: 1.4,
                  error: "Åben Kraterpore",
                  image: [ErrorOne_Four],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt', details: {
                  id: 1.4,
                  error: "Åben Kraterpore",
                  image: [ErrorOne_Four],
                }
              }
            ]
          } else if (t > 3) {
            return [
              {
                name: 'D', message: 'h ≤ ' + 0.2 * t + 'mm', details: {
                  id: 1.4,
                  error: "Åben Kraterpore",
                  image: [ErrorOne_Four],
                }
              },
              {
                name: 'C', message: 'h ≤ ' + 0.1 * t + 'mm', details: {
                  id: 1.4,
                  error: "Åben Kraterpore",
                  image: [ErrorOne_Four],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt', details: {
                  id: 1.4,
                  error: "Åben Kraterpore",
                  image: [ErrorOne_Four],
                }
              }
            ]
          }
        },
      },
    // 1.5
    {
        id: '1.5',
        error: "Bindingsfejl",
        type: ["FW", "BW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D, C & B', message: 'Ikke tilladt', details: {
                  id: 1.5,
                  error: "Bindingsfejl",
                  image: [ErrorOne_Five],
                }
              },
            ]
          }
        }
      },
    // 1.6
    {
        id: '1.6',
        error: "RodFejl",
        type: ["BW"],
        calc: (t, a, s, b) => {
          if (t >= 0.5) {
            return [
              {
                name: 'D', message: 'h ≤' + 0.2 * t + 'mm', details: {
                  id: 1.6,
                  error: "Rodfejl",
                  image: [ErrorOne_Six],
                }
              },
              {
                name: 'C', message: 'Ikke tilladt', details: {
                  id: 1.6,
                  error: "Rodfejl",
                  image: [ErrorOne_Six],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt', details: {
                  id: 1.6,
                  error: "Rodfejl",
                  image: [ErrorOne_Six],
                }
              }
            ]
          }
        }
      },
    // 1.7
    {
        id: '1.7',
        error: "Sidekærv",
        type: ["FW", "BW"],
        calc: (t, a, s, b) => {
  
  
          if (t >= 0.5 && t <= 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm', details: {
                  id: 1.7,
                  error: "Sidekærv",
                  image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm', details: {
                  id: 1.7,
                  error: "Sidekærv",
                  image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt', details: {
                  id: 1.7,
                  error: "Sidekærv",
                  image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
                }
              }
            ]
          } else if (t > 3) {
            return [
              {
                name: 'D', message: 'h ≤ ' + 0.2 * t + 'Max. 1mm', details: {
                  id: 1.7,
                  error: "Sidekærv",
                  image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
                }
              },
              {
                name: 'C', message: 'h ≤ ' + 0.1 * t + 'Max 0.5mm', details: {
                  id: 1.7,
                  error: "Sidekærv",
                  image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
                }
              },
              {
                name: 'B', message: 'h ≤ ' + 0.5 * t + 'Max 0.5mm', details: {
                  id: 1.7,
                  error: "Sidekærv",
                  image: [ErrorOne_SevenFW, ErrorOne_SevenBW],
                }
              },
            ]
          }
        },
      },
    // 1.8
    {
        id: '1.8',
        error: "Krympefuge(rodkærv)",
        type: ["BW"],
        calc: (t) => {
  
  
          if (t >= 0.5 && t <= 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm' + 0.1 + "t", details: {
                  id: 1.8,
                  error: "Krympefuge(rodkærv)",
                  image: [ErrorOne_Eight],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm', details: {
                  id: 1.8,
                  error: "Krympefuge(rodkærv)",
                  image: [ErrorOne_Eight],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt', details: {
                  id: 1.8,
                  error: "Krympefuge(rodkærv)",
                  image: [ErrorOne_Eight],
                }
              }
            ]
          } else if (t > 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'Max. 2mm', details: {
                  id: 1.8,
                  error: "Krympefuge(rodkærv)",
                  image: [ErrorOne_Eight],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'Max. 1mm', details: {
                  id: 1.8,
                  error: "Krympefuge(rodkærv)",
                  image: [ErrorOne_Eight],
                }
              },
              {
                name: 'B', message: 'Korte fejl: h ≤ ' + 0.05 * t + 'Max. 0,5mm', details: {
                  id: 1.8,
                  error: "Krympefuge(rodkærv)",
                  image: [ErrorOne_Eight],
                }
              },
            ]
          }
        },
      },
    // 1.9
    {
        id: '1.9',
        error: "Oversvulst(stumpsøm)",
        type: ["BW"],
        calc: (t, a, s, b) => {
          if (t >= 0.5 && t <= 3) {
            if (b) {
              return [
                {
                  name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 0.25 + b + 'Max 10mm', details: {
                    id: 1.9,
                    error: "Oversvulst(stumpsøm)",
                    image: [ErrorOne_Nine],
                  }
                },
                {
                  name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.15 + b + 'Max 7mm', details: {
                    id: 1.9,
                    error: "Oversvulst(stumpsøm)",
                    image: [ErrorOne_Nine],
                  }
                },
                {
                  name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.1 + b + 'Max 5mm', details: {
                    id: 1.9,
                    error: "Oversvulst(stumpsøm)",
                    image: [ErrorOne_Nine],
                  }
                }
              ]
            } else {
              return [
                { name: 'Fejl', message: "husk at fylde ud bredden", }
              ]
            }
          }
        }
      },
    // 1.10
    {
        id: '1.10',
        error: "Konveks sømoverflade(kantsøm)",
        type: ["FW"],
        calc: (t, a, s, b) => {
          if (t >= 0.5 && t <= 3) {
            if (b) {
              return [
                {
                  name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 0.25 + b + 'Max 10mm', details: {
                    id: 1.10,
                    error: "Konveks sømoverflade(kantsøm)",
                    image: [ErrorOne_Ten],
                  }
                },
                {
                  name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.15 + b + 'Max 7mm', details: {
                    id: 1.10,
                    error: "Konveks sømoverflade(kantsøm)",
                    image: [ErrorOne_Ten],
                  }
                },
                {
                  name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.1 + b + 'Max 5mm', details: {
                    id: 1.10,
                    error: "Konveks sømoverflade(kantsøm)",
                    image: [ErrorOne_Ten],
                  }
                }
              ]
            } else {
              return [
                { name: 'Fejl', message: "husk at fylde ud bredden", }
              ]
            }
          }
        }
      },
    // 1.11
    {
        id: '1.11',
        error: "Gennomløb",
        type: ["BW"],
        calc: (t, a, s, b) => {
  
  
          if (t >= 0.5 && t <= 3) {
            if (b) {
              return [
                {
                  name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 0.6 + b, details: {
                    id: 1.11,
                    error: "Gennomløb",
                    image: [ErrorOne_Eleven],
                  }
                },
                {
                  name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.3 + b, details: {
                    id: 1.11,
                    error: "Gennomløb",
                    image: [ErrorOne_Eleven],
                  }
                },
                {
                  name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.1 + b, details: {
                    id: 1.11,
                    error: "Gennomløb",
                    image: [ErrorOne_Eleven],
                  }
                }
              ]
            } else {
              return [
                { name: 'Fejl', message: "husk at fylde ud bredden", }
              ]
            }
  
          } else if (t > 3) {
            if (b) {
              return [
                {
                  name: 'D', message: 'h ≤ ' + 1 * t + 'mm' + 1.0 + b + 'Max. 5mm', details: {
                    id: 1.11,
                    error: "Gennomløb",
                    image: [ErrorOne_Eleven],
                  }
                },
                {
                  name: 'C', message: 'h ≤ ' + 1 * t + 'mm' + 0.6 + b + 'Max. 4mm', details: {
                    id: 1.11,
                    error: "Gennomløb",
                    image: [ErrorOne_Eleven],
                  }
                },
                {
                  name: 'B', message: 'h ≤ ' + 1 * t + 'mm' + 0.2 + b + 'Max. 3mm', details: {
                    id: 1.11,
                    error: "Gennomløb",
                    image: [ErrorOne_Eleven],
                  }
                }
              ]
            } else {
              return [
                { name: 'Fejl', message: "husk at fylde ud bredden" }
              ]
            }
          }
        },
      },
    // 1.12
    {
        id: '1.12',
        error: "Forkert overgang",
        type: ["BW", "FW"],
        calc: (t, a, s, b) => {
          if (t >= 0.5) {
            if (weldingtype === 'BW') {
              return [
                {
                  name: 'D', message: a + '≥' + 90 + 'grader', details: {
                    id: 1.12,
                    error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                    image: [ErrorOne_TwelveBW],
                  }
                },
                {
                  name: 'C', message: a + '≥' + 110 + 'grader', details: {
                    id: 1.12,
                    error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                    image: [ErrorOne_TwelveBW],
                  }
                },
                {
                  name: 'B', message: a + '≥' + 150 + 'grader', details: {
                    id: 1.12,
                    error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                    image: [ErrorOne_TwelveBW],
                  }
                }
              ]
            } else if (weldingtype === 'FW') {
              return [
                {
                  name: 'D', message: a + '≥' + 90 + 'grader', details: {
                    id: 1.12,
                    error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                    image: [ErrorOne_TwelveFW],
                  }
                },
                {
                  name: 'C', message: a + '≥' + 100 + 'grader', details: {
                    id: 1.12,
                    error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                    image: [ErrorOne_TwelveFW],
                  }
                },
                {
                  name: 'B', message: a + '≥' + 110 + 'grader', details: {
                    id: 1.12,
                    error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                    image: [ErrorOne_TwelveFW],
                  }
                }
              ]
            }
          }
        },
      },
    // 1.13
    {
        id: '1.13',
        error: "Overløbning af svejsemetal",
        type: ["BW"],
        calc: (t, a, s, b) => {
          if (t >= 0.5) {
            if (b) {
              return [
                {
                  name: 'D', message: 'h ≤ ' + 0.2 * b, details: {
                    id: 1.13,
                    error: "Overløbning af svejsemetal",
                    image: [ErrorOne_Thirteen],
                  }
                },
                {
                  name: 'C', message: 'Ikke tilladt', details: {
                    id: 1.13,
                    error: "Overløbning af svejsemetal",
                    image: [ErrorOne_Thirteen],
                  }
                },
                {
                  name: 'B', message: 'Ikke tilladt', details: {
                    id: 1.13,
                    error: "Overløbning af svejsemetal",
                    image: [ErrorOne_Thirteen],
                  }
                }
              ]
            } else {
              return [
                { name: 'Fejl', message: "husk at fylde ud bredden", }
              ]
            }
          }
        }
      },
    // 1.14
    {
        id: '1.14',
        error: "Nedløbet svejsemetal eller Manglende opfyldning",
        type: ["FW", "BW"],
        calc: (t) => {
  
          if (t >= 0.5 && t <= 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.25 * t + 'mm', details: {
                  id: 1.14,
                  error: "Nedøbet svejsemetal",
                  image: [ErrorOne_Fourteen],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm', details: {
                  id: 1.14,
                  error: "Nedøbet svejsemetal",
                  image: [ErrorOne_Fourteen],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt', details: {
                  id: 1.14,
                  error: "Nedøbet svejsemetal",
                  image: [ErrorOne_Fourteen],
                }
              }
            ]
          } else if (t > 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'Max. 2mm', details: {
                  id: 1.14,
                  error: "Manglende opfyldning",
                  image: [ErrorOne_Fourteen],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'Max. 1mm', details: {
                  id: 1.14,
                  error: "Manglende opfyldning",
                  image: [ErrorOne_Fourteen],
                }
              },
              {
                name: 'B', message: 'Korte fejl: h ≤ ' + 0.05 * t + 'Max. 0,5mm', details: {
                  id: 1.14,
                  error: "Manglende opfyldning",
                  image: [ErrorOne_Fourteen],
                }
              },
            ]
          }
        },
      },
    // 1.15
    {
        id: '1.15',
        error: "Gennom-brænding",
        type: ["BW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D, C & B',
                message: 'Ikke tilladt',
                details: {
                  id: 1.15,
                  error: "Gennom-brænding",
                  image: [ErrorOne_Fifthteen],
                }
              },
            ]
          }
        }
      },
    // 1.17
    {
        id: '1.17',
        error: "Indadhvælvning i roden",
        type: ["BW"],
        calc: (t) => {
  
          if (t >= 0.5 && t <= 3) {
            return [
              {
                name: 'D', message: 'h ≤ ' + 0.2 + 'mm' + 1 + t, details: {
                  id: 1.17,
                  error: "Indadhvælvning i roden",
                  image: [ErrorOne_Seventeen],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm', details: {
                  id: 1.17,
                  error: "Indadhvælvning i roden",
                  image: [ErrorOne_Seventeen],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt', details: {
                  id: 1.17,
                  error: "Indadhvælvning i roden",
                  image: [ErrorOne_Seventeen],
                }
              }
            ]
          } else if (t > 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'Max. 2mm', details: {
                  id: 1.17,
                  error: "Indadhvælvning i roden",
                  image: [ErrorOne_Seventeen],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.1 * t + 'Max. 1mm', details: {
                  id: 1.17,
                  error: "Indadhvælvning i roden",
                  image: [ErrorOne_Seventeen],
                }
              },
              {
                name: 'B', message: 'Korte fejl: h ≤ ' + 0.05 * t + 'Max. 0,5mm', details: {
                  id: 1.17,
                  error: "Indadhvælvning i roden",
                  image: [ErrorOne_Seventeen],
                }
              },
            ]
          }
        },
      },
    // 1.18
    {
        id: '1.18',
        error: "Porøsitet i rodvulst",
        type: ["BW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D',
                message: 'Tilladt lokalt',
                details: {
                  id: 1.18,
                  error: "Porøsitet i rodvulst",
                }
              },
              {
                name: 'D',
                message: 'Ikke tilladt',
                details: {
                  id: 1.18,
                  error: "Porøsitet i rodvulst",
                }
              },
              {
                name: 'D',
                message: 'Ikke tilladt',
                details: {
                  id: 1.18,
                  error: "Porøsitet i rodvulst"
                }
              },
            ]
          }
        }
      },
    // 1.19
    {
        id: '1.19',
        error: "Fejl ved genstart",
        type: ["BW", "FW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D',
                message: 'Tilladt',
                details: {
                  id: 1.19,
                  error: "Fejl ved genstart",
                  image: [ErrorOne_Nineteen],
                }
              },
              {
                name: 'D',
                message: 'Ikke tilladt',
                details: {
                  id: 1.19,
                  error: "Fejl ved genstart",
                  image: [ErrorOne_Nineteen],
                }
              },
              {
                name: 'D',
                message: 'Ikke tilladt',
                details: {
                  id: 1.19,
                  error: "Fejl ved genstart",
                  image: [ErrorOne_Nineteen],
                }
              },
            ]
          }
        }
      },
      // 1.20
      {
        id: '1.20',
        error: "Utilstrækkeligt a-mål",
        type: ["FW"],
        calc: (t, a) => {
  
          if (t >= 0.5 && t <= 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm' + 0.1 * a,
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [ErrorOne_Twenty],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [ErrorOne_Twenty],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [ErrorOne_Twenty],
                }
              }
            ]
          } else if (t > 3) {
            return [
              {
                name: 'D', message: 'Korte fejl: h ≤ ' + 0.3 * t + 'mm' + 0.1 * a + 'Max. 2mm',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [ErrorOne_Twenty],
                }
              },
              {
                name: 'C', message: 'Korte fejl: h ≤ ' + 0.3 * t + 'mm' + 0.1 * a + 'Max. 1mm',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [ErrorOne_Twenty],
                }
              },
              {
                name: 'B', message: 'Ikke tilladt',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [ErrorOne_Twenty],
                }
              },
            ]
          }
        },
      },
      // 1.21
      {
        id: '1.21',
        error: "Uforholdsmæssigt stort s-mål",
        type: ["FW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D',
                message: 'Tilladt',
                details: {
                  id: 1.21,
                  error: "Uforholdsmæssigt stort s-mål",
                  image: [ErrorOne_TwentyOne]
                }
              },
              {
                name: 'D',
                message: 'h ≤' + 1 * t + 'mm' + 0.2 * a + 'Max. 4mm',
                details: {
                  id: 1.21,
                  error: "Uforholdsmæssigt stort s-mål",
                  image: [ErrorOne_TwentyOne]
                }
              },
              {
                name: 'D',
                message: 'h ≤' + 1 * t + 'mm' + 0.15 * a + 'Max. 3mm',
                details: {
                  id: 1.21,
                  error: "Uforholdsmæssigt stort s-mål",
                  image: [ErrorOne_TwentyOne]
                }
              },
            ]
          }
        }
      },
      // 1.22
      {
        id: '1.22',
        error: "Tændsår",
        type: ["BW", "FW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D, C & B',
                message: 'Ikke tilladt',
                details: {
                  id: 1.22,
                  error: "Tændsår",
                  image: "Lokalt beskadigelse af grundmaterialets overflade ved siden af svejsesømme. Opstår ved tænding af lysbuen uden for svejsefugen."
                }
              },
            ]
          }
        }
      },
      // 1.23
      {
        id: '1.23',
        error: "Sprøjt",
        type: ["BW", "FW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D, C & B',
                message: 'Ikke tilladt',
                details: {
                  id: 1.23,
                  error: "Sprøjt",
                  image: "Dråber af svejsemetal eller tilsatsmateriale, der klæber sig fast på grundmaterialet eller på svejsningen.",
                }
              },
            ]
          }
        }
      },
      // 1.24
      {
        id: '1.24',
        error: "Anløbsfarve(misfarvning)",
        type: ["BW", "FW"],
        calc: (t, a, s, b) => {
  
          if (t >= 0.5) {
            return [
              {
                name: 'D, C & B',
                message: 'Ikke tilladt',
                details: {
                  id: 1.24,
                  error: "Gennom-brænding",
                  image: "Let oxideret overflade i en svejsezone, fx rustfrit stål.Forårsaget af svejsevarmen og/eller mangel på beskyttelse.",
                }
              },
            ]
          }
        }
      },

    // 2.10
    {
        id: '2.10',
        error: '',
        type: ['FW', 'BW'],
        calc: (t, a, s, b) => {
            if(t >= 0.5) {
                if(weldingtype === 'FW') {
                    if(!a) {
                        return [
                            {
                                name: 'Fejl', message: 'Du skal udfylde A-mål'
                            }
                        ]
                    } else {
                        if(0.4 * a <= 4) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: []
                                    }
                                } 
                            ]
                        }
                        else if(0.3 * a <= 3) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: []
                                    }
                                } 
                            ]
                        }
                        else if(0.2 * a <= 2) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: []
                                    }
                                } 
                            ]
                        }
                    }
                }
                else if(weldingtype === 'BW') {
                    if(!s) {
                        return [
                            {name: 'Fejl', message: 'Du skal udfylde stumsøms tykkelse'}
                        ]
                    } else {
                        if(0.4 * s <= 4) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: []
                                    }
                                } 
                            ]
                        }
                        else if(0.3 * s <= 3) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: []
                                    }
                                } 
                            ]
                        }
                        else if(0.2 * s <= 2) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: []
                                    }
                                } 
                            ]
                        }
                    }
                }
            }
        }
    },
    // 2.11
    {
        id: '2.11',
        error: '',
        type: ['FW', 'BW'],
        calc: (t, a, s, b) => {
            if(t >= 0.5) {
                return [
                    {
                        name: 'D, C & B', message: 'Ikke tilladt'
                    }
                ]
            }
        }
    },
    // 2.12
    {
        id: '2.12',
        error: '',
        type: ['FW', 'BW'],
        calc: (t, a, s, b) => {
            if(t >= 0.5) {
                if(weldingtype === 'FW') {
                    if(!a) {
                        return [
                            {
                                name: 'Fejl', message: 'Du skal udfylde A-mål'
                            }
                        ]
                    } else {
                        if (0.4 * a <= 4) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: [],
                                    }
                                }
                            ]
                        } else {
                            return [
                                {
                                    name: 'D & C', message: 'Ikke tilladt'
                                }
                            ]
                        }
                    }
                } else if(weldingtype === 'BW') {
                    if(!s) {
                        return [
                            {
                                name: 'Fejl', message: 'Du skal udfylde stumsøms tykkelse'
                            }
                        ]
                    } else {
                        if (0.4 * s <= 4) {
                            return [
                                {
                                    name: '', message: '', details: {
                                        id: '',
                                        error: '',
                                        image: [],
                                    }
                                }
                            ]
                        } else {
                            return [
                                {
                                    name: 'D & C', message: 'Ikke tilladt'
                                }
                            ]
                        }
                    }
                }
            }
        }
    },
    // 2.13 Mangler..
    // 3.1 kun plader
    {
        id: '3.1 Kun for plader',
        error: '',
        type: ['BW'],
        calc: (t, a, s, b) => {
            if(weldingtype === "BW") {
                if(t >= 0.5 && t <= 3) {
                    return [
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: []
                            }
                        },
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: []
                            }
                        },
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: []
                            }
                        },
                    ]
                } else if (t > 3) {
                    if (0.2 + 0.25 * t <= 5) {
                        return [
                            {
                                name: '', message: '', details: {
                                    id: '',
                                    error: '',
                                    image: []
                                }
                            }
                        ]
                    }
                    else if (0.2 + 0.15 * t <= 4) {
                        return [
                            {
                                name: '', message: '', details: {
                                    id: '',
                                    error: '',
                                    image: []
                                }
                            }
                        ]
                    }
                    else if (0.2 + 0.1 * t <= 3) {
                        return [
                            {
                                name: '', message: '', details: {
                                    id: '',
                                    error: '',
                                    image: []
                                }
                            }
                        ]
                    }
                }
            }
        }
    },
    // 3.1 kun rør
    {
        id: '3.1 Kun for rør',
        error: '',
        type: ['BW'],
        calc: (t, a, s, b) => {
            if(weldingtype === "BW") {
                if(t > 0.5) {
                    return [
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: []
                            }
                        },
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: []
                            }
                        },
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: []
                            }
                        }
                    ]
                }
            }
        }
    },
    // 3.2
    {
        id: '3.2',
        error: '',
        type: ['FW'],
        calc: (t, a, s, b) => {
            if(t >= 0.5 && t <= 3) {
                return [
                    {
                        name: '', message: '', details: {
                            id: '',
                            error: '',
                            image: [],
                        }
                    },
                    {
                        name: '', message: '', details: {
                            id: '',
                            error: '',
                            image: [],
                        }
                    },
                    {
                        name: '', message: '', details: {
                            id: '',
                            error: '',
                            image: [],
                        }
                    },
                ]
            } else if (t > 3) {
                if(1 + 0.3 * a <= 4) {
                    return [
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: [],
                            }   
                        }
                    ]
                } else if (0.5 + 0.2 * a <= 3) {
                    return [
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: [],
                            }
                        }
                    ]
                } else if (0.2 + 0.1 * a <= 2) {
                    return [
                        {
                            name: '', message: '', details: {
                                id: '',
                                error: '',
                                image: [],
                            }
                        }
                    ]
                }
            }
        }
    }
];

const chooseErrors = (welding, t, a, s, b) => {
    if(welding === 'FW') {
        const filteredDatabase = database.filter(elements => elements.type.includes('FW'));
        return filteredDatabase;
    }
    else if(welding === 'BW') {
        const filteredDatabase = database.filter(elements => elements.type.includes('BW'));
        return filteredDatabase;
    }
}

export default chooseErrors;