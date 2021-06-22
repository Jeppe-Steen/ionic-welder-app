// kun for at fjerne fejlenen
const weldingtype = 'BW';

const database = [
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