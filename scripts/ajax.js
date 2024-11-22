function prepare_page(){
    url = 'http://lab7-api.std-900.ist.mospolytech.ru/api/dishes'
    const req = new XMLHttpRequest();
    var result = null
    req.open("GET", url, true);
    req.responseType = 'json'
    req.send();
    req.onload = (e) => {
        load_arrays(req.response)
    }
        
}