// kun for at fjerne fejlenen

import image_one_one from '../errorTypes/fejltype1_1.png';
import image_one_two from '../errorTypes/fejltype1_2.png';
import image_one_three from '../errorTypes/fejltype1_3.png';
import image_one_four from '../errorTypes/fejltype1_4.png';
import image_one_five from '../errorTypes/fejltype1_5.png';
import image_one_six from '../errorTypes/fejltype1_6.png';
import image_one_seven_bw from '../errorTypes/fejltype1_7BW.png';
import image_one_seven_fw from '../errorTypes/fejltype1_7FW.png';
import image_one_eight from '../errorTypes/fejltype1_8.png';
import image_one_nine from '../errorTypes/fejltype1_9.png';
import image_one_ten from '../errorTypes/fejltype1_10.png';
import image_one_eleven from '../errorTypes/fejltype1_11.png';
import image_one_twelve_bw from '../errorTypes/fejltype1_12BW.png';
import image_one_twelve_fw from '../errorTypes/fejltype1_12FW.png';
import image_one_thirteen from '../errorTypes/fejltype1_13.png';
import image_one_fourteen from '../errorTypes/fejltype1_14.png';
import image_one_fifteen from '../errorTypes/fejltype1_15.png';
import image_one_sixteen from '../errorTypes/fejltype1_16.png';
import image_one_seventeen from '../errorTypes/fejltype1_17.png';
import image_one_nineteen from '../errorTypes/fejltype1_19.png';
import image_one_twenty from '../errorTypes/fejltype1_20.png';
import image_one_twentyone from '../errorTypes/fejltype1_21.png';
import image_two_three from '../errorTypes/fejltype2_3.png';
import image_two_four from '../errorTypes/fejltype2_4.png';
import image_two_five from '../errorTypes/fejltype2_5.png';
import image_two_six from '../errorTypes/fejltype2_6.png';
import image_two_seven from '../errorTypes/fejltype2_7.png';
import image_two_eight from '../errorTypes/fejltype2_8.png';
import image_two_nine from '../errorTypes/fejltype2_9.png';
import image_two_twelve_one from '../errorTypes/fejltype2_12_1.png';
import image_two_twelve_two from '../errorTypes/fejltype2_12_2.png';
import image_two_twelve_three from '../errorTypes/fejltype2_12_3.png';
import image_two_twelve_all from '../errorTypes/fejltype2_12All.png';
import image_two_thirteen_bw_one from '../errorTypes/fejltype2_13BW_1.png';
import image_two_thirteen_bw_two from '../errorTypes/fejltype2_13BW_2.png';
import image_two_thirteen_fw_one from '../errorTypes/fejltype2_13FW_1.png';
import image_two_thirteen_fw_two from '../errorTypes/fejltype2_13FW_2.png';
import image_three_one_plade from '../errorTypes/fejltype3_1Plade.png';
import image_three_one_tube from '../errorTypes/fejltype3_1Tube.png';
import image_three_two from '../errorTypes/fejltype3_2.png';

const widthErrorText = 'Du skal huske at udfylde bredden';
const FWErrorText = 'Du skal huske at udfylde A-mål';
const BWErrorText = 'Du skal huske at udfylde Stumpsøms tykkelsen';
const notAllowedText = 'Ikke tilladt';
// const angleErrorText = 'Du skal huske at udfylde Vinklen';

const callFunction = (weldingtype) => {
  const database = [
    // 1.1
    {
      id: 1.1,
      error: 'Revne',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 1.1,
                error: 'Revne',
                image: [image_one_one], 
                remark: []
              }
            },
          ]
        }
      }
    },
    // 1.2
    {
      id: 1.2,
      error: 'Kraterevne',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 1.2,
                error: 'Kraterevne',
                image: [image_one_two], 
                remark: []
              }
            },
          ]
        }
      }
    },
    // 1.3
    {
      id: 1.3,
      error: 'Overfladepore',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          if (weldingtype === 'FW') {
            if (!a) {
              return [
                {
                  name: 'Fejl',
                  message: FWErrorText,
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                }
              ]
            } else {
              return [
                {
                  name: 'D',
                  message: 'd ≤ ' + (0.3 * a) + 'mm',
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                },
                {
                  name: 'C',
                  message: 'Ikke Tilladt',
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                },
                {
                  name: 'B',
                  message: notAllowedText,
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
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
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                }
              ]
            } else {
              return [
                {
                  name: 'D',
                  message: 'd ≤ ' + (0.3 * s) + 'mm',
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                },
                {
                  name: 'C',
                  message: notAllowedText,
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                },
                {
                  name: 'B',
                  message: notAllowedText,
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                }
              ]
            }
          }
        } else if (t > 3) {
          if (weldingtype === 'FW') {
            if (!a) {
              return [
                {
                  name: 'Fejl',
                  message: FWErrorText,
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                }
              ]
            } else {
              if (0.3 * a <= 3) {
                return [
                  {
                    name: 'D',
                    message: 'd ≤ ' + (0.3 * a) + 'mm',
                    details: {
                      id: 1.3,
                      error: 'Overfladepore',
                      image: [image_one_three], 
                      remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                    }
                  }
                ]
              } else if (0.2 * a <= 3) {
                return [
                  {
                    name: 'C',
                    message: 'd ≤ ' + (0.2 * a) + 'mm',
                    details: {
                      id: 1.3,
                      error: 'Overfladepore',
                      image: [image_one_three], 
                      remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                    }
                  }
                ]
              } else {
                return [
                  {
                    name: 'B',
                    message: notAllowedText,
                    details: {
                      id: 1.3,
                      error: 'Overfladepore',
                      image: [image_one_three], 
                      remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
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
                  message: BWErrorText,
                  details: {
                    id: 1.3,
                    error: 'Overfladepore',
                    image: [image_one_three], 
                    remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                  }
                }
              ]
            } else {
              if (0.3 * s <= 3) {
                return [
                  {
                    name: 'D',
                    message: 'd ≤ ' + (0.3 * s) + 'mm',
                    details: {
                      id: 1.3,
                      error: 'Overfladepore',
                      image: [image_one_three], 
                      remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                    }
                  }
                ]
              } else if (0.2 * a <= 3) {
                return [
                  {
                    name: 'C',
                    message: 'd ≤ ' + (0.2 * s) + 'mm',
                    details: {
                      id: 1.3,
                      error: 'Overfladepore',
                      image: [image_one_three], 
                      remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                    }
                  }
                ]
              } else {
                return [
                  {
                    name: 'B',
                    message: notAllowedText,
                    details: {
                      id: 1.3,
                      error: 'Overfladepore',
                      image: [image_one_three], 
                      remark: ['Max. dimension af enkelt pore: 0.5 til 3mm']
                    }
                  }
                ]
              }
            }
          }
        }
      }
    },
    // 1.4
    {
      id: 1.4,
      error: 'Åben Kraterpore',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + (0.2 * t) + 'mm',
              details: {
                id: 1.4,
                error: 'Åben Kraterpore',
                image: [image_one_four], 
                remark: []
              }
            },
            {
              name: 'C',
              message: notAllowedText,
              details: {
                id: 1.4,
                error: 'Åben Kraterpore',
                image: [image_one_four], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.4,
                error: 'Åben Kraterpore',
                image: [image_one_four], 
                remark: []
              }
            }
          ]
        } else if (t > 3) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + (0.2 * t) + 'mm',
              details: {
                id: 1.4,
                error: 'Åben Kraterpore',
                image: [image_one_four], 
                remark: []
              }
            },
            {
              name: 'C',
              message: 'h ≤ ' + (0.1 * t) + 'mm',
              details: {
                id: 1.4,
                error: 'Åben Kraterpore',
                image: [image_one_four], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.4,
                error: 'Åben Kraterpore',
                image: [image_one_four], 
                remark: []
              }
            }
          ]
        } 
      }
    },
    // 1.5
    {
      id: 1.5,
      error: 'Bindingsfejl',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 1.5,
                error: 'Bindingsfejl',
                image: [image_one_five], 
                remark: []
              }
            },
          ]
        }
      }
    },
    // 1.6
    {
      id: 1.6,
      error: 'RodFejl',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D',
              message: 'h ≤' + (0.2 * t) + 'mm',
              details: {
                id: 1.6,
                error: 'Rodfejl',
                image: [image_one_six], 
                remark: []
              }
            },
            {
              name: 'C',
              message: notAllowedText,
              details: {
                id: 1.6,
                error: 'Rodfejl',
                image: [image_one_six], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.6,
                error: 'Rodfejl',
                image: [image_one_six], 
                remark: []
              }
            }
          ]
        }
      }
    },
    // 1.7
    {
      id: 1.7,
      error: 'Sidekærv',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'Korte fejl: h ≤ ' + (0.2 * t) + 'mm',
              details: {
                id: 1.7,
                error: 'Sidekærv',
                image: [image_one_seven_bw, image_one_seven_fw], 
                remark: []
              }
            },
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + (0.1 * t) + 'mm',
              details: {
                id: 1.7,
                error: 'Sidekærv',
                image: [image_one_seven_bw, image_one_seven_fw], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.7,
                error: 'Sidekærv',
                image: [image_one_seven_bw, image_one_seven_fw], 
                remark: []
              }
            }
          ]
        } else if (t > 3) {
          if (0.2 * t <= 1) {
            return [{
              name: 'D',
              message: 'h ≤ ' + (0.2 * t) + 'mm',
              details: {
                id: 1.7,
                error: 'Sidekærv',
                image: [image_one_seven_bw, image_one_seven_fw], 
                remark: []
              }
            }]
          }
          else if (0.1 * t <= 0.5) {
            return [{
              name: 'C',
              message: 'h ≤ ' + (0.1 * t) + 'mm',
              details: {
                id: 1.7,
                error: 'Sidekærv',
                image: [image_one_seven_bw, image_one_seven_fw], 
                remark: []
              }
            }]
          }
          else if (0.5 * t <= 0.5) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + (0.5 * t) + 'mm',
                details: {
                  id: 1.7,
                  error: 'Sidekærv',
                  image: [image_one_seven_bw, image_one_seven_fw], 
                  remark: []
                }
              }
            ]
          }
        }
      },
    },
    // 1.8
    {
      id: 1.8,
      error: 'Krympefuge(rodkærv)',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'Korte fejl: h ≤ ' + (0.2 * t + 0.1).toFixed(2) + 'mm',
              details: {
                id: 1.8,
                error: 'Krympefuge(rodkærv)',
                image: [image_one_eight], 
                remark: []
              }
            },
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + (0.1 * t) + 'mm',
              details: {
                id: 1.8,
                error: 'Krympefuge(rodkærv)',
                image: [image_one_eight], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.8,
                error: 'Krympefuge(rodkærv)',
                image: [image_one_eight], 
                remark: []
              }
            }
          ]
        } else if (t > 3) {
          if (0.2 * t <= 2) {
            return [
              {
                name: 'D',
                message: 'Korte fejl: h ≤ ' + (0.2 * t) + 'mm',
                details: {
                  id: 1.8,
                  error: 'Krympefuge(rodkærv)',
                  image: [image_one_eight], 
                  remark: []
                }
              }
            ]
          }
          else if (0.1 * t <= 1) {
            return [
              {
                name: 'C',
                message: 'Korte fejl: h ≤ ' + (0.1 * t) + 'mm',
                details: {
                  id: 1.8,
                  error: 'Krympefuge(rodkærv)',
                  image: [image_one_eight], 
                  remark: []
                }
              }
            ]
          }
          else if (0.05 * t <= 0.5) {
            return [
              {
                name: 'B',
                message: 'Korte fejl: h ≤ ' + (0.05 * t) + 'mm',
                details: {
                  id: 1.8,
                  error: 'Krympefuge(rodkærv)',
                  image: [image_one_eight], 
                  remark: []
                }
              }
            ]
          }
        }
      },
    },
    // 1.9
    {
      id: 1.9,
      error: 'Oversvulst(stumpsøm)',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          if (b) {
            if (1 * t + 0.25 + b <= 10) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + (1 * t + 0.25 + b) + 'mm',
                  details: {
                    id: 1.9,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_nine], 
                    remark: []
                  }
                },
                {
                  name: 'C & B',
                  message: notAllowedText,
                  details: {
                    id: 1.9,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_nine], 
                    remark: []
                  }
                }
              ]
            }
            else if (1 * t + 0.15 + b <= 7) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + (1 * t + 0.15 + b) + 'mm',
                  details: {
                    id: 1.9,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_nine], 
                    remark: []
                  }
                },
                {
                  name: 'D & B',
                  message: 'Ikke Tilladt',
                  details: {
                    id: 1.9,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_nine], 
                    remark: []
                  }
                }
              ]
            }
            else if (1 * t + 0.1 + b <= 5) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + (1 * t + 0.1 + b) + 'mm',
                  details: {
                    id: 1.9,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_nine], 
                    remark: []
                  }
                },
                {
                  name: 'D & C',
                  message: 'Ikke Tilladt',
                  details: {
                    id: 1.9,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_nine], 
                    remark: []
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
                  id: 1.9,
                  error: 'Oversvulst(stumpsøm)',
                  image: [image_one_nine], 
                  remark: []
                }
              }
            ]
          }
        }
      }
    },
    // 1.10
    {
      id: 1.10,
      error: 'Konveks sømoverflade(kantsøm)',
      type: ['FW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          if (b) {
            if (1 * t + 0.25 + b <= 10) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + (1 * t + 0.25 + b) + 'mm',
                  details: {
                    id: 1.10,
                    error: 'Konveks sømoverflade(kantsøm)',
                    image: [image_one_ten], 
                    remark: []
                  }
                },
                {
                  name: 'B & C',
                  message: 'Ikke Tilladt',
                  details: {
                    id: 1.10,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_ten], 
                    remark: []
                  }
                }
              ]
            }
            else if (1 * t + 0.15 + b <= 7) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + (1 * t + 0.15 + b) + 'mm',
                  details: {
                    id: 1.10,
                    error: 'Konveks sømoverflade(kantsøm)',
                    image: [image_one_ten], 
                    remark: []
                  }
                },
                {
                  name: 'D & B',
                  message: 'Ikke Tilladt',
                  details: {
                    id: 1.10,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_ten], 
                    remark: []
                  }
                }
              ]
            }
            else if (1 * t + 0.1 + b <= 5) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + (1 * t + 0.1 + b) + 'mm',
                  details: {
                    id: 1.10,
                    error: 'Konveks sømoverflade(kantsøm)',
                    image: [image_one_ten], 
                    remark: []
                  }
                },
                {
                  name: 'D & C',
                  message: 'Ikke Tilladt',
                  details: {
                    id: 1.10,
                    error: 'Oversvulst(stumpsøm)',
                    image: [image_one_ten], 
                    remark: []
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
                  id: 1.10,
                  error: 'Oversvulst(stumpsøm)',
                  image: [image_one_ten], 
                  remark: []
                }
              }
            ]
          }
        }
      }
    },
    // 1.11
    {
      id: 1.11,
      error: 'Gennomløb',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          if (b) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + (1 * t + 0.6 + b) + 'mm',
                details: {
                  id: 1.11,
                  error: 'Gennomløb',
                  image: [image_one_eleven], 
                  remark: []
                }
              },
              {
                name: 'C',
                message: 'h ≤ ' + (1 * t + 0.3 + b) + 'mm',
                details: {
                  id: 1.11,
                  error: 'Gennomløb',
                  image: [image_one_eleven], 
                  remark: []
                }
              },
              {
                name: 'B',
                message: 'h ≤ ' + (1 * t + 0.1 + b) + 'mm',
                details: {
                  id: 1.11,
                  error: 'Gennomløb',
                  image: [image_one_eleven], 
                  remark: []
                }
              }
            ]
          } else {
            return [
              {
                name: 'Fejl',
                message: widthErrorText,
                details: {
                  id: 1.11,
                  error: 'Gennomløb',
                  image: [image_one_eleven], 
                  remark: []
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
                  message: 'h ≤ ' + (1 * t + 1.0 + b) + 'mm',
                  details: {
                    id: 1.11,
                    error: 'Gennomløb',
                    image: [image_one_eleven], 
                    remark: []
                  }
                }
              ]
            }
            else if (1 * t + 0.6 + b <= 4) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + (1 * t + 0.6 + b) + 'mm',
                  details: {
                    id: 1.11,
                    error: 'Gennomløb',
                    image: [image_one_eleven], 
                    remark: []
                  }
                }
              ]
            }
            else if (1 * t + 0.2 + b <= 3) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + (1 * t + 0.2 + b) + 'mm',
                  details: {
                    id: 1.11,
                    error: 'Gennomløb',
                    image: [image_one_eleven], 
                    remark: []
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
                  id: 1.11,
                  error: 'Gennomløb',
                  image: [image_one_eleven], 
                  remark: []
                }
              }
            ]
          }
        }
      },
    },
    // 1.12
    {
      id: 1.12,
      error: 'Forkert overgang',
      type: ['BW', 'FW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          if (weldingtype === 'BW') {
            return [
              {
                name: 'D',
                message: v + '≥' + 90 + 'grader',
                details: {
                  id: 1.12,
                  error: 'Forkert overgang (mellem grund- materialets overflade og svejsesøm)',
                  image: [image_one_twelve_bw], 
                  remark: []
                }
              },
              {
                name: 'C',
                message: v + '≥' + 110 + 'grader',
                details: {
                  id: 1.12,
                  error: 'Forkert overgang (mellem grund- materialets overflade og svejsesøm)',
                  image: [image_one_twelve_bw], 
                  remark: []
                }
              },
              {
                name: 'B',
                message: v + '≥' + 150 + 'grader',
                details: {
                  id: 1.12,
                  error: 'Forkert overgang (mellem grund- materialets overflade og svejsesøm)',
                  image: [image_one_twelve_bw], 
                  remark: []
                }
              }
            ]
          } else if (weldingtype === 'FW') {
            return [
              {
                name: 'D',
                message: 'vinkel ≥ ' + 90 + 'grader',
                details: {
                  id: 1.12,
                  error: 'Forkert overgang (mellem grund- materialets overflade og svejsesøm)',
                  image: [image_one_twelve_fw], 
                  remark: []
                }
              },
              {
                name: 'C',
                message: 'vinkel ≥ ' + 110 + 'grader',
                details: {
                  id: 1.12,
                  error: 'Forkert overgang (mellem grund- materialets overflade og svejsesøm)',
                  image: [image_one_twelve_fw], 
                  remark: []
                }
              },
              {
                name: 'B',
                message: 'vinkel ≥ ' + 150 + 'grader',
                details: {
                  id: 1.12,
                  error: 'Forkert overgang (mellem grund- materialets overflade og svejsesøm)',
                  image: [image_one_twelve_fw], 
                  remark: []
                }
              }
            ]
          }    
        }
      },
    },
    // 1.13
    {
      id: 1.13,
      error: 'Overløbning af svejsemetal',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          if (b) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + (0.2 * b),
                details: {
                  id: 1.13,
                  error: 'Overløbning af svejsemetal',
                  image: [image_one_thirteen], 
                  remark: []
                }
              },
              {
                name: 'C',
                message: notAllowedText,
                details: {
                  id: 1.13,
                  error: 'Overløbning af svejsemetal',
                  image: [image_one_thirteen], 
                  remark: []
                }
              },
              {
                name: 'B',
                message: notAllowedText,
                details: {
                  id: 1.13,
                  error: 'Overløbning af svejsemetal',
                  image: [image_one_thirteen], 
                  remark: []
                }
              }
            ]
          } else {
            return [
              {
                name: 'Fejl',
                message: widthErrorText,
                details: {
                  id: 1.13,
                  error: 'Overløbning af svejsemetal',
                  image: [image_one_thirteen], 
                  remark: []
                }
              }
            ]
          }
        }
      }
    },
    // 1.14
    {
      id: 1.14,
      error: 'Nedløbet svejsemetal eller Manglende opfyldning',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
  
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'Korte fejl: h ≤ ' + (0.25 * t) + 'mm',
              details: {
                id: 1.14,
                error: 'Nedøbet svejsemetal',
                image: [image_one_fourteen], 
                remark: []
              }
            },
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + (0.1 * t) + 'mm',
              details: {
                id: 1.14,
                error: 'Nedøbet svejsemetal',
                image: [image_one_fourteen], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.14,
                error: 'Nedøbet svejsemetal',
                image: [image_one_fourteen], 
                remark: []
              }
            }
          ]
        } else if (t > 3) {
          if (0.2 * t <= 2) {
            return [
              {
                name: 'D',
                message: 'Korte fejl: h ≤ ' + (0.2 * t) + 'mm',
                details: {
                  id: 1.14,
                  error: 'Manglende opfyldning',
                  image: [image_one_fourteen], 
                  remark: []
                }
              }
            ]
          }
          else if (0.1 * t <= 1) {
            return [
              {
                name: 'C',
                message: 'Korte fejl: h ≤ ' + (0.1 * t) + 'mm',
                details: {
                  id: 1.14,
                  error: 'Manglende opfyldning',
                  image: [image_one_fourteen], 
                  remark: []
                }
              }
            ]
          }
          else if (0.05 * t <= 0.5) {
            return [
              {
                name: 'B',
                message: 'Korte fejl: h ≤ ' + (0.05 * t) + 'mm',
                details: {
                  id: 1.14,
                  error: 'Manglende opfyldning',
                  image: [image_one_fourteen], 
                  remark: []
                }
              },
            ]
          }
        }
      },
    },
    // 1.15
    {
      id: 1.15,
      error: 'Gennom-brænding',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 1.15,
                error: 'Gennom-brænding',
                image: [image_one_fifteen], 
                remark: ['Hul i svejsesømmen']
              }
            },
          ]
        }
      }
    },
    // 1.16
    {
      id: 1.16,
      error: 'Ulige store kateter(z-mål) ved kantsøm',
      type: ['FW'],
      calc: (t, a, s, b, v) => {
        if (a) {
          if (t >= 0.5) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + (2 + 0.2 * a) + 'mm',
                details: {
                  id: 1.16,
                  error: 'Ulige store kateter(z-mål) ved kantsøm',
                  image: [image_one_sixteen],
                  remark: []
                }
              },
              {
                name: 'C',
                message: 'h ≤ ' + (2 + 0.15 * a) + 'mm',
                details: {
                  id: 1.16,
                  error: 'Ulige store kateter(z-mål) ved kantsøm',
                  image: [image_one_sixteen],
                  remark: []
                }
              },
              {
                name: 'B',
                message: 'h ≤ ' + (1.5 + 0.15 * a) + 'mm',
                details: {
                  id: 1.16,
                  error: 'Ulige store kateter(z-mål) ved kantsøm',
                  image: [image_one_sixteen],
                  remark: []
                }
              },
            ]
          } else {
            return [
              {
                name: 'Fejl',
                message: FWErrorText,
                details: {
                  id: 1.16,
                  error: 'Ulige store kateter(z-mål) ved kantsøm',
                  image: [image_one_sixteen],
                  remark: []
                }
              }
            ]
          }
        }
      }
    },
    // 1.17
    {
      id: 1.17,
      error: 'Indadhvælvning i roden',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
  
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + (0.2 + 1 + t) + 'mm',
              details: {
                id: 1.17,
                error: 'Indadhvælvning i roden',
                image: [image_one_seventeen], 
                remark: []
              }
            },
            {
              name: 'C',
              message: 'Korte fejl: h ≤ ' + (0.1 * t) + 'mm',
              details: {
                id: 1.17,
                error: 'Indadhvælvning i roden',
                image: [image_one_seventeen], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.17,
                error: 'Indadhvælvning i roden',
                image: [image_one_seventeen], 
                remark: []
              }
            }
          ]
        } else if (t > 3) {
          if (0.2 * t <= 2) {
            return [
              {
                name: 'D',
                message: 'Korte fejl: h ≤ ' + (0.2 * t) + 'mm',
                details: {
                  id: 1.17,
                  error: 'Indadhvælvning i roden',
                  image: [image_one_seventeen], 
                  remark: []
                }
              }
            ]
          }
          else if (0.1 * t <= 1) {
            return [
              {
                name: 'C',
                message: 'Korte fejl: h ≤ ' + (0.1 * t) + 'mm',
                details: {
                  id: 1.17,
                  error: 'Indadhvælvning i roden',
                  image: [image_one_seventeen], 
                  remark: []
                }
              }
            ]
          }
          else if (0.05 * t <= 0.5) {
            return [
              {
                name: 'B',
                message: 'Korte fejl: h ≤ ' + (0.05 * t) + 'mm',
                details: {
                  id: 1.17,
                  error: 'Indadhvælvning i roden',
                  image: [image_one_seventeen], 
                  remark: []
                }
              },
            ]
          }
        }
      },
    },
    // 1.18
    {
      id: 1.18,
      error: 'Porøsitet i rodvulst',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
  
        if (t >= 0.5) {
          return [
            {
              name: 'D',
              message: 'Tilladt lokalt',
              details: {
                id: 1.18,
                error: 'Porøsitet i rodvulst',
                image: [],
                remark: ['Svampelignede udseende af svejseroden på grund af bobler i svejsemetallet ved størkningen. (fx mangelfuld baggas)']
              }
            },
            {
              name: 'C',
              message: notAllowedText,
              details: {
                id: 1.18,
                error: 'Porøsitet i rodvulst',
                image: [],
                remark: ['Svampelignede udseende af svejseroden på grund af bobler i svejsemetallet ved størkningen. (fx mangelfuld baggas)']
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.18,
                error: 'Porøsitet i rodvulst',
                image: [],
                remark: ['Svampelignede udseende af svejseroden på grund af bobler i svejsemetallet ved størkningen. (fx mangelfuld baggas)']
              }
            },
          ]
        }
      }
    },
    // 1.19
    {
      id: 1.19,
      error: 'Fejl ved genstart',
      type: ['BW', 'FW'],
      calc: (t, a, s, b, v) => {
  
        if (t >= 0.5) {
          return [
            {
              name: 'D',
              message: 'Tilladt',
              details: {
                id: 1.19,
                error: 'Fejl ved genstart',
                image: [image_one_nineteen], 
                remark: []
              }
            },
            {
              name: 'C',
              message: notAllowedText,
              details: {
                id: 1.19,
                error: 'Fejl ved genstart',
                image: [image_one_nineteen], 
                remark: []
              }
            },
            {
              name: 'B',
              message: notAllowedText,
              details: {
                id: 1.19,
                error: 'Fejl ved genstart',
                image: [image_one_nineteen], 
                remark: []
              }
            },
          ]
        }
      }
    },
    // 1.20
    {
      id: 1.20,
      error: 'Utilstrækkeligt a-mål',
      type: ['FW'],
      calc: (t, a, s, b, v) => {
        if
          (t >= 0.5 && t <= 3) {
          if (a) {
            return [
              {
                name: 'D',
                message: 'Korte fejl: h ≤ ' + (0.2 * t + 0.1 * a) + 'mm',
                details: {
                  id: 1.20,
                  error: 'Utilstrækkeligt a-mål',
                  image: [image_one_twenty], 
                  remark: []
                }
              },
              {
                name: 'C',
                message: 'Korte fejl: h ≤ ' + (0.2 * t) + 'mm',
                details: {
                  id: 1.20,
                  error: 'Utilstrækkeligt a-mål',
                  image: [image_one_twenty], 
                  remark: []
                }
              },
              {
                name: 'B',
                message: notAllowedText,
                details: {
                  id: 1.20,
                  error: 'Utilstrækkeligt a-mål',
                  image: [image_one_twenty], 
                  remark: []
                }
              }
            ]
          } else if (t > 3) {
            if (0.3 * t + 0.1 * a <= 2) {
              return [
                {
                  name: 'D',
                  message: 'Korte fejl: h ≤ ' + (0.3 * t + 0.1 * a) + 'mm',
                  details: {
                    id: 1.20,
                    error: 'Utilstrækkeligt a-mål',
                    image: [image_one_twenty], 
                    remark: []
                  }
                },
              ]
            }
            else if (0.3 * t + 0.1 * a <= 1) {
              return [
                {
                  name: 'C',
                  message: 'Korte fejl: h ≤ ' + (0.3 * t + 0.1 * a) + 'mm',
                  details: {
                    id: 1.20,
                    error: 'Utilstrækkeligt a-mål',
                    image: [image_one_twenty], 
                    remark: []
                  }
                },
              ]
            }
            else {
              return [
                {
                  name: 'B',
                  message: notAllowedText,
                  details: {
                    id: 1.20,
                    error: 'Utilstrækkeligt a-mål',
                    image: [image_one_twenty], 
                    remark: []
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
                  id: 1.20,
                  error: 'Utilstrækkeligt a-mål',
                  image: [image_one_twenty], 
                  remark: []
                }
              }
            ]
          }
        }
      },
    },
    // 1.21
    {
      id: 1.21,
      error: 'Uforholdsmæssigt stort s-mål',
      type: ['FW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          if (a) {
            if (1 * t + 0.2 * a <= 4) {
              return [
                {
                  name: 'C',
                  message: 'h ≤' + (1 * t) + 'mm' + (0.2 * a) + 'Max. 4mm',
                  details: {
                    id: 1.21,
                    error: 'Uforholdsmæssigt stort s-mål',
                    image: [image_one_twentyone],
                    remark: []
                  }
                },
                {
                  name: 'D & B',
                  message: notAllowedText,
                  details: {
                    id: 1.21,
                    error: 'Uforholdsmæssigt stort s-mål',
                    image: [image_one_twentyone],
                    remark: []
                  }
                }
              ]
            }
            else if (1 * t + 0.15 * a <= 3) {
              return [
                {
                  name: 'B',
                  message: 'h ≤' + (1 * t) + 'mm' + (0.15 * a) + 'Max. 3mm',
                  details: {
                    id: 1.21,
                    error: 'Uforholdsmæssigt stort s-mål',
                    image: [image_one_twentyone],
                    remark: []
                  }
                },
                {
                  name: 'D & C',
                  message: notAllowedText,
                  details: {
                    id: 1.21,
                    error: 'Uforholdsmæssigt stort s-mål',
                    image: [image_one_twentyone],
                    remark: []
                  }
                }
              ]
            }
            else {
              return [
                {
                  name: 'D',
                  message: 'Tilladt',
                  details: {
                    id: 1.21,
                    error: 'Uforholdsmæssigt stort s-mål',
                    image: [image_one_twentyone],
                    remark: []
                  }
                },
                {
                  name: 'B & C',
                  message: notAllowedText,
                  details: {
                    id: 1.21,
                    error: 'Uforholdsmæssigt stort s-mål',
                    image: [image_one_twentyone],
                    remark: []
                  }
                }
              ]
            }
          }
          else {
            return [
              {
                name: 'Fejl',
                message: FWErrorText,
                details: {
                  id: 1.21,
                  error: 'Uforholdsmæssigt stort s-mål',
                  image: [image_one_twentyone],
                  remark: []
                }
              }
            ]
          }
        }
      }
    },
    // 1.22
    {
      id: 1.22,
      error: 'Tændsår',
      type: ['BW', 'FW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 1.22,
                error: 'Tændsår',
                image: [],
                remark: ['Lokalt beskadigelse af grundmaterialets overflade ved siden af svejsesømme. Opstår ved tænding af lysbuen uden for svejsefugen.']
              }
            },
          ]
        }
      }
    },
    // 1.23
    {
      id: 1.23,
      error: 'Sprøjt',
      type: ['BW', 'FW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 1.23,
                error: 'Sprøjt',
                image: [],
                remark: ['Dråber af svejsemetal eller tilsatsmateriale, der klæber sig fast på grundmaterialet eller på svejsningen.']
              }
            },
          ]
        }
      }
    },
    // 1.24
    {
      id: 1.24,
      error: 'Anløbsfarve(misfarvning)',
      type: ['BW', 'FW'],
      calc: (t, a, s, b) => {
  
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 1.24,
                error: 'Gennom-brænding',
                image: [],
                remark: ['Let oxideret overflade i en svejsezone, fx rustfrit stål.Forårsaget af svejsevarmen og/eller mangel på beskyttelse.']
              }
            },
          ]
        }
      }
    },
    // 2.6
    {
      id: 2.6,
      error: 'Lang pore ormehuller',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          if (weldingtype === 'FW') {
            if (0.4 * a <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + (0.4 * a),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (a <= 75) {
              return [
                {
                  name: 'D',
                  message: 'l ≤ ' + (a),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (0.3 * a <= 3) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + (0.3 * a),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (a <= 50) {
              return [
                {
                  name: 'C',
                  message: 'l ≤ ' + (a),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (0.2 * a <= 2) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + (0.2 * a),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (a <= 25) {
              return [
                {
                  name: 'B',
                  message: 'l ≤ ' + (a),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
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
                  message: 'l ≤ ' + (s),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (0.4 * s <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + (0.4 * s),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (0.3 * s <= 3) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + (0.3 * s),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
                  }
                }
              ]
            }
            else if (0.2 * s <= 2) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + (0.2 * s),
                  details: {
                    id: 2.6,
                    error: 'Lang pore ormehuller',
                    image: [image_two_six], 
                    remark: []
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
      id: 2.7,
      error: 'Sugning',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D',
              message: 'Ikke tillads, dog kun korte fejl, se forklaring',
              details: {
                id: 2.7,
                error: 'Suginig',
                image: [image_two_seven], 
                remark: []
              }
            },
            {
              name: 'C & B',
              message: notAllowedText,
              details: {
                id: 2.7,
                error: 'Suginig',
                image: [image_two_seven], 
                remark: []
              }
            }
          ]
        }
      }
    },
    // 2.8
    {
      id: 2.8,
      error: 'Kraterpore',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'h eller l ≤ ' + (0.2 * t),
              details: {
                id: 2.8,
                error: 'Kraterpore',
                image: [image_two_eight],
                remark: []
              }
            },
            {
              name: 'C & B',
              message: notAllowedText,
              details: {
                id: 2.8,
                error: 'Kraterpore',
                image: [image_two_eight],
                remark: []
              }
            }
          ]
        } else if (t > 3) {
          if (0.2 * t <= 2) {
            return [
              {
                name: 'D',
                message: 'h eller l ≤ ' + (0.2 * t),
                details: {
                  id: 2.8,
                  error: 'Kraterpore',
                  image: [image_two_eight],
                  remark: []
                }
              },
              {
                name: 'C & B',
                message: notAllowedText,
                details: {
                  id: 2.8,
                  error: 'Kraterpore',
                  image: [image_two_eight],
                  remark: []
                }
              }
            ]
          } else {
            return [
              {
                name: 'C & B',
                message: notAllowedText,
                details: {
                  id: 2.8,
                  error: 'Kraterpore',
                  image: [image_two_eight],
                  remark: []
                }
              }
            ]
          }
        }
      }
    },
    // 2.9
    {
      id: 2.9,
      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
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
                    id: 2.9,
                    error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                    image: [image_two_nine], 
                    remark: []
                  }
                }
              ]
            } else {
              if (0.4 * a <= 4) {
                return [
                  {
                    name: 'D',
                    message: 'h ≤ ' + (0.4 * a),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  }
                ]
              } else if (a <= 75) {
                return [
                  {
                    name: 'D',
                    message: 'l ≤ ' + (a),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  },
                ]
              }
              else if (0.3 * a <= 3) {
                return [
                  {
                    name: 'C',
                    message: 'h ≤ ' + (0.3 * a),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  }
                ]
              } else if (a <= 50) {
                return [
                  {
                    name: 'C',
                    message: 'l ≤ ' + (a),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  },
                ]
              }
              else if (0.2 * a <= 2) {
                return [
                  {
                    name: 'B',
                    message: 'h ≤ ' + (0.2 * a),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  }
                ]
              } else if (a <= 25) {
                return [
                  {
                    name: 'B',
                    message: 'l ≤ ' + (a),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
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
                    id: 2.9,
                    error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                    image: [image_two_nine], 
                    remark: []
                  }
                }
              ]
            } else {
              if (0.4 * s <= 4) {
                return [
                  {
                    name: 'D',
                    message: 'h ≤ ' + (0.4 * s),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  }
                ]
              } else if (s <= 75) {
                return [
                  {
                    name: 'D',
                    message: 'l ≤ ' + (s),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  }
                ]
              }
              else if (0.3 * s <= 3) {
                return [
                  {
                    name: '',
                    message: 'h ≤ ' + (0.3 * s),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  }
                ]
              } else if (s <= 50) {
                return [
                  {
                    name: '',
                    message: 'l ≤ ' + (s),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  },
                ]
              }
              else if (0.2 * s <= 2) {
                return [
                  {
                    name: '',
                    message: 'h ≤ ' + (0.2 * s),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
                    }
                  },
                ]
              } else if (s <= 25) {
                return [
                  {
                    name: '',
                    message: 'l ≤ ' + (s),
                    details: {
                      id: 2.9,
                      error: 'Indeslutning, Slaggeindeslutninger, Flux eller Oxidindeslutninger',
                      image: [image_two_nine], 
                      remark: []
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
      id: 2.10,
      error: 'Metalliske indeslutninger undtagen kobber',
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
                    id: 2.10,
                    error: 'Metalliske indeslutninger undtagen kobber',
                    image: [], 
                    remark: []
                  }
                }
              ]
            } else {
              if (0.4 * a <= 4) {
                return [
                  {
                    name: 'D',
                    message: 'h ≤ ' + (0.4 * a),
                    details: {
                      id: 2.10,
                      error: 'Metalliske indeslutninger undtagen kobber',
                      image: [], 
                      remark: []
                    }
                  }
                ]
              }
              else if (0.3 * a <= 3) {
                return [
                  {
                    name: 'C',
                    message: 'h ≤ ' + (0.3 * a),
                    details: {
                      id: 2.10,
                      error: 'Metalliske indeslutninger undtagen kobber',
                      image: [], 
                      remark: []
                    }
                  }
                ]
              }
              else if (0.2 * a <= 2) {
                return [
                  {
                    name: 'B',
                    message: 'h ≤ ' + (0.2 * a),
                    details: {
                      id: 2.10,
                      error: 'Metalliske indeslutninger undtagen kobber',
                      image: [], 
                      remark: []
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
                    id: 2.10,
                    error: 'Metalliske indeslutninger undtagen kobber',
                    image: [], 
                    remark: []
                  }
                }
              ]
            } else {
              if (0.4 * s <= 4) {
                return [
                  {
                    name: 'D',
                    message: 'h ≤ ' + (0.4 * s),
                    details: {
                      id: 2.10,
                      error: 'Metalliske indeslutninger undtagen kobber',
                      image: [], 
                      remark: []
                    }
                  }
                ]
              }
              else if (0.3 * s <= 3) {
                return [
                  {
                    name: 'C',
                    message: 'h ≤ ' + (0.3 * s),
                    details: {
                      id: 2.10,
                      error: 'Metalliske indeslutninger undtagen kobber',
                      image: [], 
                      remark: []
                    }
                  }
                ]
              }
              else if (0.2 * s <= 2) {
                return [
                  {
                    name: 'B',
                    message: 'h ≤ ' + (0.2 * s),
                    details: {
                      id: 2.10,
                      error: 'Metalliske indeslutninger undtagen kobber',
                      image: [], 
                      remark: []
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
      id: 2.11,
      error: 'Kobberindeslutninger',
      type: ['FW', 'BW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5) {
          return [
            {
              name: 'D, C & B',
              message: notAllowedText,
              details: {
                id: 2.11,
                error: 'Kobberindeslutninger',
                image: [], 
                remark: []
              }
            }
          ]
        }
      }
    },
    // 2.12
    {
      id: 2.12,
      error: 'Bindingsfejl i siden, mellem de enkelte strenge eller i riden',
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
                    id: 2.12,
                    error: 'Bindingsfejl i siden, mellem de enkelte strenge eller i riden',
                    image: [image_two_twelve_one, image_two_twelve_two, image_two_twelve_three], 
                    remark: []
                  }
                }
              ]
            } else {
              if (0.4 * a <= 4) {
                return [
                  {
                    name: 'D',
                    message: 'h ≤ ' + (0.4 * a),
                    details: {
                      id: 2.12,
                      error: 'Bindingsfejl i siden, mellem de enkelte strenge eller i riden',
                      image: [image_two_twelve_one, image_two_twelve_two, image_two_twelve_three], 
                      remark: []
                    }
                  }
                ]
              } else {
                return [
                  {
                    name: 'D & C',
                    message: notAllowedText,
                    details: {
                      id: 2.12,
                      error: 'Bindingsfejl i siden, mellem de enkelte strenge eller i riden',
                      image: [image_two_twelve_one, image_two_twelve_two, image_two_twelve_three], 
                      remark: []
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
                    id: 2.12,
                    error: 'Bindingsfejl i siden, mellem de enkelte strenge eller i riden',
                    image: [image_two_twelve_one, image_two_twelve_two, image_two_twelve_three], 
                    remark: []
                  }
                }
              ]
            } else {
              if (0.4 * s <= 4) {
                return [
                  {
                    name: 'D',
                    message: 'h ≤ ' + (0.4 * s),
                    details: {
                      id: 2.12,
                      error: 'Bindingsfejl i siden, mellem de enkelte strenge eller i riden',
                      image: [image_two_twelve_one, image_two_twelve_two, image_two_twelve_three], 
                      remark: []
                    }
                  }
                ]
              } else {
                return [
                  {
                    name: 'D & C',
                    message: notAllowedText,
                    details: {
                      id: 2.12,
                      error: 'Bindingsfejl i siden, mellem de enkelte strenge eller i riden',
                      image: [image_two_twelve_one, image_two_twelve_two, image_two_twelve_three], 
                      remark: []
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
    {
      id: 2.13,
      error: 'Mangelfuld indtrængning',
      type: ['BW', 'FW'],
      calc: (t, a, s, b , v) => {
        if (t >= 0.5) {
          if(weldingtype === 'FW') {
            if(a) {
              return []
            }
          } else if(weldingtype === 'BW') {
            if(s) {
              return []
            }
          }
        }
      }
    },
    // 3.1 kun plader
    {
      id: '3.1 Kun for plader',
      error: 'Kantforsætning mellem plader',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (weldingtype === 'BW') {
          if (t >= 0.5 && t <= 3) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + (0.2 + 0.25 * t),
                details: {
                  id: 3.1,
                  error: 'Kantforsætning mellem plader',
                  image: [image_three_one_plade],
                  remark: []
                }
              },
              {
                name: 'C',
                message: 'h ≤ ' + (0.2 + 0.15 * t),
                details: {
                  id: 3.1,
                  error: 'Kantforsætning mellem plader',
                  image: [image_three_one_plade],
                  remark: []
                }
              },
              {
                name: 'B',
                message: 'h ≤ ' + (0.2 + 0.1 * t),
                details: {
                  id: 3.1,
                  error: 'Kantforsætning mellem plader',
                  image: [image_three_one_plade],
                  remark: []
                }
              },
            ]
          } else if (t > 3) {
            if (0.2 + 0.25 * t <= 5) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + (0.2 + 0.25 * t),
                  details: {
                    id: 3.1,
                    error: 'Kantforsætning mellem plader',
                    image: [image_three_one_plade],
                    remark: []
                  }
                }
              ]
            }
            else if (0.2 + 0.15 * t <= 4) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + (0.2 + 0.15 * t),
                  details: {
                    id: 3.1,
                    error: 'Kantforsætning mellem plader',
                    image: [image_three_one_plade],
                    remark: []
                  }
                }
              ]
            }
            else if (0.2 + 0.1 * t <= 3) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + (0.2 + 0.1 * t),
                  details: {
                    id: 3.1,
                    error: 'Kantforsætning mellem plader',
                    image: [image_three_one_plade],
                    remark: []
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
      error: 'Kantforsætning mellem rør rundsømme',
      type: ['BW'],
      calc: (t, a, s, b, v) => {
        if (weldingtype === 'BW') {
          if (t > 0.5) {
            if (0.5 * t <= 4) {
              return [
                {
                  name: 'D',
                  message: 'h ≤ ' + (0.5 * t),
                  details: {
                    id: 3.1,
                    error: 'Kantforsætning mellem rør rundsømme',
                    image: [image_three_one_tube],
                    remark: []
                  }
                }
              ]
            }
            else if (0.5 * t <= 3) {
              return [
                {
                  name: 'C',
                  message: 'h ≤ ' + (0.5 * t),
                  details: {
                    id: 3.1,
                    error: 'Kantforsætning mellem rør rundsømme',
                    image: [image_three_one_tube],
                    remark: []
                  }
                }
              ]
            }
            else if (0.5 * t <= 2) {
              return [
                {
                  name: 'B',
                  message: 'h ≤ ' + (0.5 * t),
                  details: {
                    id: 3.1,
                    error: 'Kantforsætning mellem rør rundsømme',
                    image: [image_three_one_tube],
                    remark: []
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
      id: 3.2,
      error: 'Dårlig tilpasning af rodspalten, kantsømme',
      type: ['FW'],
      calc: (t, a, s, b, v) => {
        if (t >= 0.5 && t <= 3) {
          return [
            {
              name: 'D',
              message: 'h ≤ ' + (0.5 + 0.1 * a).toFixed(2),
              details: {
                id: 3.2,
                error: 'Dårlig tilpasning af rodspalten, kantsømme',
                image: [image_three_two], 
                remark: []
              }
            },
            {
              name: 'C',
              message: 'h ≤ ' + (0.5 + 0.1 * a).toFixed(2),
              details: {
                id: 3.2,
                error: 'Dårlig tilpasning af rodspalten, kantsømme',
                image: [image_three_two], 
                remark: []
              }
            },
            {
              name: 'B',
              message: 'h ≤ ' + (0.2 + 0.1 * a).toFixed(2),
              details: {
                id: 3.2,
                error: 'Dårlig tilpasning af rodspalten, kantsømme',
                image: [image_three_two], 
                remark: []
              }
            },
          ]
        } else if (t > 3) {
          if (1 + 0.3 * a <= 4) {
            return [
              {
                name: 'D',
                message: 'h ≤ ' + (1 + 0.3 * a).toFixed(2),
                details: {
                  id: 3.2,
                  error: 'Dårlig tilpasning af rodspalten, kantsømme',
                  image: [image_three_two], 
                  remark: []
                }
              }
            ]
          } else if (0.5 + 0.2 * a <= 3) {
            return [
              {
                name: 'C',
                message: 'h ≤ ' + (0.5 + 0.2 * a).toFixed(2),
                details: {
                  id: 3.2,
                  error: 'Dårlig tilpasning af rodspalten, kantsømme',
                  image: [image_three_two], 
                  remark: []
                }
              }
            ]
          } else if (0.2 + 0.1 * a <= 2) {
            return [
              {
                name: 'B',
                message: 'h ≤ ' + (0.2 + 0.1 * a).toFixed(2),
                details: {
                  id: 3.2,
                  error: 'Dårlig tilpasning af rodspalten, kantsømme',
                  image: [image_three_two], 
                  remark: []
                }
              }
            ]
          }
        }
      }
    }
  ];

  return database;
};

export default callFunction;