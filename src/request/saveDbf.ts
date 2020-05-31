const saveDbf = (desgloses: any[]): Promise<Response> => {
    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(desgloses)
    };
    return fetch('http://localhost:3132/createDBF', requestOptions)
};

export default saveDbf;