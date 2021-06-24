// kun for at fjerne fejlenen
const weldingtype = 'BW';

const widthErrorText = 'Du skal huske at udfylde bredden';
const FWErrorText = 'Du skal huske at udfylde A-mål';
const BWErrorText = 'Du skal huske at udfylde Stumpsøms tykkelsen';
const angleErrorText = 'Du skal huske at udfylde Vinklen';

const database = [
  // 1.1
  {
    id: '1.1',
    error: "Revne",
    type: ["FW", "BW"],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        return [
          {
            name: 'D, C & B',
            message: 'Ikke tilladt',
            details: {
              id: 1.1,
              error: "Revne",
              image: [],
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        return [
          {
            name: 'D, C & B',
            message: 'Ikke tilladt',
            details: {
              id: 1.2,
              error: "Kraterevne",
              image: [],
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        if (weldingtype === 'FW') {
          if (!a) {
            return [
              {
                name: 'Fejl',
                message: FWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            return [
              {
                name: 'D',
                message: 'd ≤ ' + 0.3 * a + 'mm',
                details: {
                  id: 1.3,
                  error: "Overfladepore",
                  image: [],
                }
              },
              {
                name: 'C',
                message: 'Ikke Tilladt',
                details: {
                  id: 1.3,
                  error: "Overfladepore",
                  image: [],
                }
              },
              {
                name: 'B',
                message: 'Ikke tilladt',
                details: {
                  id: 1.3,
                  error: "Overfladepore",
                  image: [],
                }
              }
            ]
          }
        } else if (weldingtype === 'BW') {
          if (!s) {
            return [
              {
                name: 'Fejl',
                message: BWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            return [
              {
                name: 'D',
                message: 'd ≤ ' + 0.3 * s + 'mm',
                details: {
                  id: 1.3,
                  error: "Overfladepore",
                  image: [],
                }
              },
              {
                name: 'C',
                message: 'Ikke tilladt',
                details: {
                  id: 1.3,
                  error: "Overfladepore",
                  image: [],
                }
              },
              {
                name: 'B',
                message: 'Ikke tilladt',
                details: {
                  id: 1.3,
                  error: "Overfladepore",
                  image: [],
                }
              }
            ]
          }
        }
      } else if (t > 3) {
        if (weldingtype === "FW") {
          if (!a) {
            return [
              {
                name: 'Fejl',
                message: FWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.3 * a <= 3) {
              return [
                {
                  name: 'D',
                  message: 'd ≤ ' + 0.3 * a + 'mm',
                  details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [],
                  }
                }
              ]
            } else if (0.2 * a <= 3) {
              return [
                {
                  name: 'C',
                  message: 'd ≤ ' + 0.2 * a + 'mm',
                  details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [],
                  }
                }
              ]
            } else {
              return [
                {
                  name: 'B',
                  message: 'Ikke tilladt',
                  details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [],
                  }
                }
              ]
            }
          }

        } else if (weldingtype === "BW") {
          if (!s) {
            return [
              {
                name: 'Fejl',
                message: BWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.3 * s <= 3) {
              return [
                {
                  name: 'D',
                  message: 'd ≤ ' + 0.3 * s + 'mm',
                  details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [],
                  }
                }
              ]
            } else if (0.2 * a <= 3) {
              return [
                {
                  name: 'C',
                  message: 'd ≤ ' + 0.2 * s + 'mm',
                  details: {
                    id: 1.3,
                    error: "Overfladepore",
                    image: [],
                  }
                }
              ]
            } else {
              return [
                {
                  name: 'B',
                  message: 'Ikke tilladt',
                  details: {
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        return [
          {
            name: 'D',
            message: 'h ≤ ' + 0.2 * t + 'mm',
            details: {
              id: 1.4,
              error: "Åben Kraterpore",
              image: [],
            }
          },
          {
            name: 'C',
            message: 'Ikke tilladt',
            details: {
              id: 1.4,
              error: "Åben Kraterpore",
              image: [],
            }
          },
          {
            name: 'B',
            message: 'Ikke tilladt',
            details: {
              id: 1.4,
              error: "Åben Kraterpore",
              image: [],
            }
          }
        ]
      } else if (t > 3) {
        return [
          {
            name: 'D',
            message: 'h ≤ ' + 0.2 * t + 'mm',
            details: {
              id: 1.4,
              error: "Åben Kraterpore",
              image: [],
            }
          },
          {
            name: 'C',
            message: 'h ≤ ' + 0.1 * t + 'mm',
            details: {
              id: 1.4,
              error: "Åben Kraterpore",
              image: [],
            }
          },
          {
            name: 'B',
            message: 'Ikke tilladt',
            details: {
              id: 1.4,
              error: "Åben Kraterpore",
              image: [],
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        return [
          {
            name: 'D, C & B',
            message: 'Ikke tilladt',
            details: {
              id: 1.5,
              error: "Bindingsfejl",
              image: [],
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        return [
          {
            name: 'D',
            message: 'h ≤' + 0.2 * t + 'mm',
            details: {
              id: 1.6,
              error: "Rodfejl",
              image: [],
            }
          },
          {
            name: 'C',
            message: 'Ikke tilladt',
            details: {
              id: 1.6,
              error: "Rodfejl",
              image: [],
            }
          },
          {
            name: 'B',
            message: 'Ikke tilladt',
            details: {
              id: 1.6,
              error: "Rodfejl",
              image: [],
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        return [
          {
            name: 'D',
            message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm',
            details: {
              id: 1.7,
              error: "Sidekærv",
              image: [],
            }
          },
          {
            name: 'C',
            message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm',
            details: {
              id: 1.7,
              error: "Sidekærv",
              image: [],
            }
          },
          {
            name: 'B',
            message: 'Ikke tilladt',
            details: {
              id: 1.7,
              error: "Sidekærv",
              image: [],
            }
          }
        ]
      } else if (t > 3) {
        if (0.2 * t <= 1) {
          return [{
            name: 'D',
            message: 'h ≤ ' + 0.2 * t + 'mm',
            details: {
              id: 1.7,
              error: "Sidekærv",
              image: [],
            }
          }]
        }
        else if (0.1 * t <= 0.5) {
          return [{
            name: 'C',
            message: 'h ≤ ' + 0.1 * t + 'mm',
            details: {
              id: 1.7,
              error: "Sidekærv",
              image: [],
            }
          }]
        }
        else if (0.5 * t <= 0.5) {
          return [
            {
              name: 'B',
              message: 'h ≤ ' + 0.5 * t + 'mm',
              details: {
                id: 1.7,
                error: "Sidekærv",
                image: [],
              }
            }
          ]
        }
      }
    },
  },
  // 1.8
  {
    id: '1.8',
    error: "Krympefuge(rodkærv)",
    type: ["BW"],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        return [
          {
            name: 'D',
            message: 'Korte fejl: h ≤ ' + 0.2 * t + 0.1 + "mm",
            details: {
              id: 1.8,
              error: "Krympefuge(rodkærv)",
              image: [],
            }
          },
          {
            name: 'C',
            message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm',
            details: {
              id: 1.8,
              error: "Krympefuge(rodkærv)",
              image: [],
            }
          },
          {
            name: 'B',
            message: 'Ikke tilladt',
            details: {
              id: 1.8,
              error: "Krympefuge(rodkærv)",
              image: [],
            }
          }
        ]
      } else if (t > 3) {
        if (0.2 * t <= 2) {
          return [
            {
              name: 'D',
              message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm',
              details: {
                id: 1.8,
                error: "Krympefuge(rodkærv)",
                image: [],
              }
            }
          ]
        }
        else if (0.1 * t <= 1) {
          return [
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm',
              details: {
                id: 1.8,
                error: "Krympefuge(rodkærv)",
                image: [],
              }
            }
          ]
        }
        else if (0.05 * t <= 0.5) {
          return [
            {
              name: 'B',
              message: 'Korte fejl: h ≤ ' + 0.05 * t + 'mm',
              details: {
                id: 1.8,
                error: "Krympefuge(rodkærv)",
                image: [],
              }
            }
          ]
        }
      }
    },
  },
  // 1.9
  {
    id: '1.9',
    error: "Oversvulst(stumpsøm)",
    type: ["BW"],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        if (b) {
          if (1 * t + 0.25 + b <= 10) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + 1 * t + 0.25 + b + 'mm',
                details: {
                  id: 1.9,
                  error: "Oversvulst(stumpsøm)",
                  image: [],
                }
              }
            ]
          }
          else if (1 * t + 0.15 + b <= 7) {
            return [
              {
                name: 'C',
                message: 'h ≤ ' + 1 * t + 0.15 + b + 'mm',
                details: {
                  id: 1.9,
                  error: "Oversvulst(stumpsøm)",
                  image: [],
                }
              }
            ]
          }
          else if (1 * t + 0.1 + b <= 5) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + 1 * t + 0.1 + b + 'mm',
                details: {
                  id: 1.9,
                  error: "Oversvulst(stumpsøm)",
                  image: [],
                }
              }
            ]
          }
        } else {
          return [
            {
              name: 'Fejl',
              message: widthErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        if (b) {
          if (1 * t + 0.25 + b <= 10) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + 1 * t + 0.25 + b + 'mm',
                details: {
                  id: 1.10,
                  error: "Konveks sømoverflade(kantsøm)",
                  image: [],
                }
              }
            ]
          }
          else if (1 * t + 0.15 + b <= 7) {
            return [
              {
                name: 'C',
                message: 'h ≤ ' + 1 * t + 0.15 + b + 'mm',
                details: {
                  id: 1.10,
                  error: "Konveks sømoverflade(kantsøm)",
                  image: [],
                }
              }
            ]
          }
          else if (1 * t + 0.1 + b <= 5) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + 1 * t + 0.1 + b + 'mm',
                details: {
                  id: 1.10,
                  error: "Konveks sømoverflade(kantsøm)",
                  image: [],
                }
              }
            ]
          }
        } else {
          return [
            {
              name: 'Fejl',
              message: widthErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
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
    calc: (t, a, s, b, v) => {


      if (t >= 0.5 && t <= 3) {
        if (b) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + 1 * t + 0.6 + b + 'mm',
              details: {
                id: 1.11,
                error: "Gennomløb",
                image: [],
              }
            },
            {
              name: 'C',
              message: 'h ≤ ' + 1 * t + 0.3 + b + 'mm',
              details: {
                id: 1.11,
                error: "Gennomløb",
                image: [],
              }
            },
            {
              name: 'B',
              message: 'h ≤ ' + 1 * t + 0.1 + b + 'mm',
              details: {
                id: 1.11,
                error: "Gennomløb",
                image: [],
              }
            }
          ]
        } else {
          return [
            {
              name: 'Fejl',
              message: widthErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        }

      } else if (t > 3) {
        if (b) {
          if (1 * t + 1 + b <= 5) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + 1 * t + 1.0 + b + 'mm',
                details: {
                  id: 1.11,
                  error: "Gennomløb",
                  image: [],
                }
              }
            ]
          }
          else if (1 * t + 0.6 + b <= 4) {
            return [
              {
                name: 'C',
                message: 'h ≤ ' + 1 * t + 0.6 + b + 'mm',
                details: {
                  id: 1.11,
                  error: "Gennomløb",
                  image: [],
                }
              }
            ]
          }
          else if (1 * t + 0.2 + b <= 3) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + 1 * t + 0.2 + b + 'mm',
                details: {
                  id: 1.11,
                  error: "Gennomløb",
                  image: [],
                }
              }
            ]
          }
        } else {
          return [
            {
              name: 'Fejl',
              message: widthErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        if (v) {
          if (t >= 0.5) {
            if (weldingtype === 'BW') {
              if (v >= 90) {
                return [
                  {
                    name: 'D',
                    message: v + '≥' + 90 + 'grader',
                    details: {
                      id: 1.12,
                      error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                      image: [],
                    }
                  }
                ]
              }
              else if (v >= 110) {
                return [
                  {
                    name: 'C',
                    message: v + '≥' + 110 + 'grader',
                    details: {
                      id: 1.12,
                      error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                      image: [],
                    }
                  }
                ]
              }
              else if (v >= 150) {
                return [
                  {
                    name: 'B',
                    message: v + '≥' + 150 + 'grader',
                    details: {
                      id: 1.12,
                      error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                      image: [],
                    }
                  }
<<<<<<< HEAD
                }
              ]
            } else {
              return [
                {
                  name: 'D, C & B',
                  message: 'Ikke tilladt',
                  details: {
                    id: 1.12,
                    error: '',
                    image: [],
                  }
                }
              ]
            }
          } else if (weldingtype === 'FW') {
            if (v >= 90) {
              return [
                {
                  name: 'D',
                  message: v + '≥' + 90 + 'grader',
                  details: {
                    id: 1.12,
                    error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                    image: [],
=======
                ]
              }
            } else if (weldingtype === 'FW') {
              if (v >= 90) {
                return [
                  {
                    name: 'D',
                    message: v + '≥' + 90 + 'grader',
                    details: {
                      id: 1.12,
                      error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                      image: [],
                    }
>>>>>>> 42d961c6021b9b4668eed9a340866710690c6f7a
                  }
                ]
              }
              else if (v >= 110) {
                return [
                  {
                    name: 'C',
                    message: v + '≥' + 110 + 'grader',
                    details: {
                      id: 1.12,
                      error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                      image: [],
                    }
                  }
                ]
              }
              else if (v >= 150) {
                return [
                  {
                    name: 'B',
                    message: v + '≥' + 150 + 'grader',
                    details: {
                      id: 1.12,
                      error: "Forkert overgang (mellem grund- materialets overflade og svejsesøm)",
                      image: [],
                    }
                  }
<<<<<<< HEAD
                }
              ]
            } else {
              return [
                {
                  name: 'D, C & B',
                  message: 'Ikke tilladt',
                  details: {
                    id: 1.12,
                    error: '',
                    image: [],
                  }
                }
              ]
=======
                ]
              }
>>>>>>> 42d961c6021b9b4668eed9a340866710690c6f7a
            }
          }
        } else {
          return [
            {
              name: 'Fejl',
              message: angleErrorText,
              details: {
                id: '',
                error: '',
                image: [],
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        if (b) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + 0.2 * b,
              details: {
                id: 1.13,
                error: "Overløbning af svejsemetal",
                image: [],
              }
            },
            {
              name: 'C',
              message: 'Ikke tilladt',
              details: {
                id: 1.13,
                error: "Overløbning af svejsemetal",
                image: [],
              }
            },
            {
              name: 'B',
              message: 'Ikke tilladt',
              details: {
                id: 1.13,
                error: "Overløbning af svejsemetal",
                image: [],
              }
            }
          ]
        } else {
          return [
            {
              name: 'Fejl',
              message: widthErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
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
    calc: (t, a, s, b, v) => {

      if (t >= 0.5 && t <= 3) {
        return [
          {
            name: 'D',
            message: 'Korte fejl: h ≤ ' + 0.25 * t + 'mm',
            details: {
              id: 1.14,
              error: "Nedøbet svejsemetal",
              image: [],
            }
          },
          {
            name: 'C',
            message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm',
            details: {
              id: 1.14,
              error: "Nedøbet svejsemetal",
              image: [],
            }
          },
          {
            name: 'B',
            message: 'Ikke tilladt',
            details: {
              id: 1.14,
              error: "Nedøbet svejsemetal",
              image: [],
            }
          }
        ]
      } else if (t > 3) {
        if (0.2 * t <= 2) {
          return [
            {
              name: 'D',
              message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm',
              details: {
                id: 1.14,
                error: "Manglende opfyldning",
                image: [],
              }
            }
          ]
        }
        else if (0.1 * t <= 1) {
          return [
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm',
              details: {
                id: 1.14,
                error: "Manglende opfyldning",
                image: [],
              }
            }
          ]
        }
        else if (0.05 * t <= 0.5) {
          return [
            {
              name: 'B',
              message: 'Korte fejl: h ≤ ' + 0.05 * t + 'mm',
              details: {
                id: 1.14,
                error: "Manglende opfyldning",
                image: [],
              }
            },
          ]
        }
      }
    },
  },
  // 1.15
  {
    id: '1.15',
    error: "Gennom-brænding",
    type: ["BW"],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        return [
          {
            name: 'D, C & B',
            message: 'Ikke tilladt',
            details: {
              id: 1.15,
              error: "Gennom-brænding",
              image: [],
            }
          },
        ]
      }
    }
  },
  // 1.16
  {
    id: '1.16',
    error: "Ulige store kateter(z-mål) ved kantsøm",
    type: ["FW"],
    calc: (t, a, s, b, v) => {
      if (a) {
        if (t >= 0.5) {
          return [
            {
              name: 'D',
              message: 'h ≤' + 2 * t + 0.2 * a + 'mm',
              details: {
                id: 1.16,
                error: "Ulige store kateter(z-mål) ved kantsøm",
                image: []
              }
            },
            {
              name: 'D',
              message: 'h ≤' + 2 * t + 0.15 * a + 'mm',
              details: {
                id: 1.16,
                error: "Ulige store kateter(z-mål) ved kantsøm",
                image: []
              }
            },
            {
              name: 'D',
              message: 'h ≤' + 1.5 * t + 0.15 * a + 'mm',
              details: {
                id: 1.16,
                error: "Ulige store kateter(z-mål) ved kantsøm",
                image: []
              }
            },
          ]
        } else {
          return [
            {
              name: 'Fejl',
              message: FWErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        }
      }
    }
  },
  // 1.17
  {
    id: '1.17',
    error: "Indadhvælvning i roden",
    type: ["BW"],
    calc: (t, a, s, b, v) => {

      if (t >= 0.5 && t <= 3) {
        return [
          {
            name: 'D',
            message: 'h ≤ ' + 0.2 + 1 + t + 'mm',
            details: {
              id: 1.17,
              error: "Indadhvælvning i roden",
              image: [],
            }
          },
          {
            name: 'C',
            message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm',
            details: {
              id: 1.17,
              error: "Indadhvælvning i roden",
              image: [],
            }
          },
          {
            name: 'B',
            message: 'Ikke tilladt',
            details: {
              id: 1.17,
              error: "Indadhvælvning i roden",
              image: [],
            }
          }
        ]
      } else if (t > 3) {
        if (0.2 * t <= 2) {
          return [
            {
              name: 'D',
              message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm',
              details: {
                id: 1.17,
                error: "Indadhvælvning i roden",
                image: [],
              }
            }
          ]
        }
        else if (0.1 * t <= 1) {
          return [
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + 0.1 * t + 'mm',
              details: {
                id: 1.17,
                error: "Indadhvælvning i roden",
                image: [],
              }
            }
          ]
        }
        else if (0.05 * t <= 0.5) {
          return [
            {
              name: 'B',
              message: 'Korte fejl: h ≤ ' + 0.05 * t + 'mm',
              details: {
                id: 1.17,
                error: "Indadhvælvning i roden",
                image: [],
              }
            },
          ]
        }
      }
    },
  },
  // 1.18
  {
    id: '1.18',
    error: "Porøsitet i rodvulst",
    type: ["BW"],
    calc: (t, a, s, b, v) => {

      if (t >= 0.5) {
        return [
          {
            name: 'D',
            message: 'Tilladt lokalt',
            details: {
              id: 1.18,
              error: "Porøsitet i rodvulst",
              image: []
            }
          },
          {
            name: 'D',
            message: 'Ikke tilladt',
            details: {
              id: 1.18,
              error: "Porøsitet i rodvulst",
              image: []
            }
          },
          {
            name: 'D',
            message: 'Ikke tilladt',
            details: {
              id: 1.18,
              error: "Porøsitet i rodvulst",
              image: []
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
    calc: (t, a, s, b, v) => {

      if (t >= 0.5) {
        return [
          {
            name: 'D',
            message: 'Tilladt',
            details: {
              id: 1.19,
              error: "Fejl ved genstart",
              image: [],
            }
          },
          {
            name: 'D',
            message: 'Ikke tilladt',
            details: {
              id: 1.19,
              error: "Fejl ved genstart",
              image: [],
            }
          },
          {
            name: 'D',
            message: 'Ikke tilladt',
            details: {
              id: 1.19,
              error: "Fejl ved genstart",
              image: [],
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
    calc: (t, a, s, b, v) => {
      if
        (t >= 0.5 && t <= 3) {
        if (a) {
          return [
            {
              name: 'D',
              message: 'Korte fejl: h ≤ ' + 0.2 * t + 0.1 * a + 'mm',
              details: {
                id: 1.20,
                error: "Utilstrækkeligt a-mål",
                image: [],
              }
            },
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + 0.2 * t + 'mm',
              details: {
                id: 1.20,
                error: "Utilstrækkeligt a-mål",
                image: [],
              }
            },
            {
              name: 'B',
              message: 'Ikke tilladt',
              details: {
                id: 1.20,
                error: "Utilstrækkeligt a-mål",
                image: [],
              }
            }
          ]
        } else if (t > 3) {
          if (0.3 * t + 0.1 * a <= 2) {
            return [
              {
                name: 'D',
                message: 'Korte fejl: h ≤ ' + 0.3 * t + 0.1 * a + 'mm',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [],
                }
              },
            ]
          }
          else if (0.3 * t + 0.1 * a <= 1) {
            return [
              {
                name: 'C',
                message: 'Korte fejl: h ≤ ' + 0.3 * t + 0.1 * a + 'mm',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [],
                }
              },
            ]
          }
          else {
            return [
              {
                name: 'B',
                message: 'Ikke tilladt',
                details: {
                  id: 1.20,
                  error: "Utilstrækkeligt a-mål",
                  image: [],
                }
              },
            ]
          }
        }

        else {
          return [
            {
              name: 'Fejl',
              message: FWErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        }
      }
    },
  },
  // 1.21
  {
    id: '1.21',
    error: "Uforholdsmæssigt stort s-mål",
    type: ["FW"],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        if (a) {
          if (1 * t + 0.2 * a <= 4) {
            return [
              {
                name: 'D',
                message: 'h ≤' + 1 * t + 'mm' + 0.2 * a + 'Max. 4mm',
                details: {
                  id: 1.21,
                  error: "Uforholdsmæssigt stort s-mål",
                  image: []
                }
              },
            ]
          }
          else if (1 * t + 0.15 * a <= 3) {
            return [
              {
                name: 'D',
                message: 'h ≤' + 1 * t + 'mm' + 0.15 * a + 'Max. 3mm',
                details: {
                  id: 1.21,
                  error: "Uforholdsmæssigt stort s-mål",
                  image: []
                }
              },
            ]
          }
          else {
            return [
              {
                name: 'D',
                message: 'Tilladt',
                details: {
                  id: 1.21,
                  error: "Uforholdsmæssigt stort s-mål",
                  image: []
                }
              },
            ]
          }
        }
        else {
          return [
            {
              name: 'Fejl',
              message: FWErrorText,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        }
      }
    }
  },
  // 1.22
  {
    id: '1.22',
    error: "Tændsår",
    type: ["BW", "FW"],
    calc: (t, a, s, b, v) => {
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
    calc: (t, a, s, b, v) => {
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
  // 2.6
  {
    id: '2.6',
    error: '',
    type: ['FW', 'BW'],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        if (weldingtype === 'FW') {
          if (0.4 * a <= 4) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + 0.4 * a,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (a <= 75) {
            return [
              {
                name: 'D',
                message: 'l ≤ ' + a,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (0.3 * a <= 3) {
            return [
              {
                name: 'C',
                message: 'h ≤ ' + 0.3 * a,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (a <= 50) {
            return [
              {
                name: 'C',
                message: 'l ≤ ' + a,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (0.2 * a <= 2) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + 0.2 * a,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (a <= 25) {
            return [
              {
                name: 'B',
                message: 'l ≤ ' + a,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
        }
        else if (weldingtype === 'BW') {
          if (s <= 75) {
            return [
              {
                name: 'D, C & B',
                message: 'l ≤ ' + s,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (0.4 * s <= 4) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + 0.4 * s,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (0.3 * s <= 3) {
            return [
              {
                name: 'C',
                message: 'h ≤ ' + 0.3 * s,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          }
          else if (0.2 * s <= 2) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + 0.2 * s,
                details: {
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
  },
  // 2.7
  {
    id: '2.7',
    error: '',
    type: ['FW', 'BW'],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        return [
          {
            name: 'D',
            message: 'Ikke tillads, dog kun korte fejl, se forklaring',
            details: {
              id: '',
              error: '',
              image: [],
            }
          },
          {
            name: 'C & B',
            message: 'Ikke tilladt',
            details: {
              id: '',
              error: '',
              image: [],
            }
          }
        ]
      }
    }
  },
  // 2.8
  {
    id: '2.8',
    error: '',
    type: ['FW', 'BW'],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        return [
          {
            name: 'D',
            message: 'h eller l ≤ ' + 0.2 * t,
            details: {
              id: '',
              error: '',
              image: []
            }
          },
          {
            name: 'C & B',
            message: 'Ikke tilladt',
            details: {
              id: '',
              error: '',
              image: [],
            }
          }
        ]
      } else if (t > 3) {
        if (0.2 * t <= 2) {
          return [
            {
              name: 'D',
              message: 'h eller l ≤ ' + 0.2 * t,
              details: {
                id: '',
                error: '',
                image: []
              }
            },
            {
              name: 'C & B',
              message: 'Ikke tilladt',
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        } else {
          return [
            {
              name: 'C & B',
              message: 'Ikke tilladt',
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        }
      }
    }
  },
  // 2.9
  {
    id: '2.9',
    error: '',
    type: ['FW', 'BW'],
    calc: (t, a, s, b, v) => {
      if (t > 0.5) {
        if (weldingtype === 'FW') {
          if (!a) {
            return [
              {
                name: 'Fejl',
                message: FWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.4 * a <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + 0.4 * a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            } else if (a <= 75) {
              return [
                {
                  name: 'D',
                  message: 'l ≤ ' + a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                },
              ]
            }
            else if (0.3 * a <= 3) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + 0.3 * a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            } else if (a <= 50) {
              return [
                {
                  name: 'C',
                  message: 'l ≤ ' + a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                },
              ]
            }
            else if (0.2 * a <= 2) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + 0.2 * a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            } else if (a <= 25) {
              return [
                {
                  name: 'B',
                  message: 'l ≤ ' + a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                },
              ]
            }
          }
        }
        else if (weldingtype === 'BW') {
          if (!s) {
            return [
              {
                name: 'Fejl',
                message: BWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.4 * s <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + 0.4 * s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            } else if (s <= 75) {
              return [
                {
                  name: 'D',
                  message: 'l ≤ ' + s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            }
            else if (0.3 * s <= 3) {
              return [
                {
                  name: '',
                  message: 'h ≤ ' + 0.3 * s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            } else if (s <= 50) {
              return [
                {
                  name: '',
                  message: 'l ≤ ' + s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                },
              ]
            }
            else if (0.2 * s <= 2) {
              return [
                {
                  name: '',
                  message: 'h ≤ ' + 0.2 * s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                },
              ]
            } else if (s <= 25) {
              return [
                {
                  name: '',
                  message: 'l ≤ ' + s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                },
              ]
            }
          }
        }
      }
    }
  },
  // 2.10
  {
    id: '2.10',
    error: '',
    type: ['FW', 'BW'],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        if (weldingtype === 'FW') {
          if (!a) {
            return [
              {
                name: 'Fejl',
                message: FWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.4 * a <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + 0.4 * a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            }
            else if (0.3 * a <= 3) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + 0.3 * a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            }
            else if (0.2 * a <= 2) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + 0.2 * a,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            }
          }
        }
        else if (weldingtype === 'BW') {
          if (!s) {
            return [
              {
                name: 'Fejl',
                message: BWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.4 * s <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + 0.4 * s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            }
            else if (0.3 * s <= 3) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + 0.3 * s,
                  details: {
                    id: '',
                    error: '',
                    image: []
                  }
                }
              ]
            }
            else if (0.2 * s <= 2) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + 0.2 * s,
                  details: {
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        return [
          {
            name: 'D, C & B',
            message: 'Ikke tilladt',
            details: {
              id: '',
              error: '',
              image: [],
            }
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
    calc: (t, a, s, b, v) => {
      if (t >= 0.5) {
        if (weldingtype === 'FW') {
          if (!a) {
            return [
              {
                name: 'Fejl',
                message: FWErrorText,
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.4 * a <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + 0.4 * a,
                  details: {
                    id: '',
                    error: '',
                    image: [],
                  }
                }
              ]
            } else {
              return [
                {
                  name: 'D & C',
                  message: 'Ikke tilladt',
                  details: {
                    id: '',
                    error: '',
                    image: [],
                  }
                }
              ]
            }
          }
        } else if (weldingtype === 'BW') {
          if (!s) {
            return [
              {
                name: 'Fejl',
                message: 'Du skal udfylde stumsøms tykkelse',
                details: {
                  id: '',
                  error: '',
                  image: [],
                }
              }
            ]
          } else {
            if (0.4 * s <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + 0.4 * s,
                  details: {
                    id: '',
                    error: '',
                    image: [],
                  }
                }
              ]
            } else {
              return [
                {
                  name: 'D & C',
                  message: 'Ikke tilladt',
                  details: {
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
    }
  },
  // 2.13 Mangler..
  // 3.1 kun plader
  {
    id: '3.1 Kun for plader',
    error: '',
    type: ['BW'],
    calc: (t, a, s, b, v) => {
      if (weldingtype === "BW") {
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + 0.2 + 0.25 * t,
              details: {
                id: '',
                error: '',
                image: []
              }
            },
            {
              name: 'C',
              message: 'h ≤ ' + 0.2 + 0.15 * t,
              details: {
                id: '',
                error: '',
                image: []
              }
            },
            {
              name: 'B',
              message: 'h ≤ ' + 0.2 + 0.1 * t,
              details: {
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
                name: 'D',
                message: 'h ≤ ' + 0.2 + 0.25 * t,
                details: {
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
                name: 'C',
                message: 'h ≤ ' + 0.2 + 0.15 * t,
                details: {
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
                name: 'B',
                message: 'h ≤ ' + 0.2 + 0.1 * t,
                details: {
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
    calc: (t, a, s, b, v) => {
      if (weldingtype === "BW") {
        if (t > 0.5) {
          if (0.5 * t <= 4) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + 0.5 * t,
                details: {
                  id: '',
                  error: '',
                  image: []
                }
              }
            ]
          }
          else if (0.5 * t <= 3) {
            return [
              {
                name: 'C',
                message: 'h ≤ ' + 0.5 * t,
                details: {
                  id: '',
                  error: '',
                  image: []
                }
              }
            ]
          }
          else if (0.5 * t <= 2) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + 0.5 * t,
                details: {
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
  // 3.2
  {
    id: '3.2',
    error: '',
    type: ['FW'],
    calc: (t, a, s, b, v) => {
      if (t >= 0.5 && t <= 3) {
        return [
          {
            name: 'D',
            message: 'h ≤ ' + 0.5 + 0.1 * a,
            details: {
              id: '',
              error: '',
              image: [],
            }
          },
          {
            name: 'C',
            message: 'h ≤ ' + 0.5 + 0.1 * a,
            details: {
              id: '',
              error: '',
              image: [],
            }
          },
          {
            name: 'B',
            message: 'h ≤ ' + 0.2 + 0.1 * a,
            details: {
              id: '',
              error: '',
              image: [],
            }
          },
        ]
      } else if (t > 3) {
        if (1 + 0.3 * a <= 4) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + 1 + 0.3 * a,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        } else if (0.5 + 0.2 * a <= 3) {
          return [
            {
              name: 'C',
              message: 'h ≤ ' + 0.5 + 0.2 * a,
              details: {
                id: '',
                error: '',
                image: [],
              }
            }
          ]
        } else if (0.2 + 0.1 * a <= 2) {
          return [
            {
              name: 'B',
              message: 'h ≤ ' + 0.2 + 0.1 * a,
              details: {
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

export default database;