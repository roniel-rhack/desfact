const autoFileName = () => {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var year = now.getFullYear();
    var today = day + "-" + month + "-" + year;

    return "Desglose_" + today + '_' + (Math.random() * 100).toFixed(0)
}

export default autoFileName;