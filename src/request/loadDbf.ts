const loadDbf = (ruta: string): Promise<Response> => {
    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ruta})
    };
    return fetch('http://localhost:3132/readDBF', requestOptions)
};

export default loadDbf;