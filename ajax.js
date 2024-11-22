function prepare_page(){
    url = 'https://edu.std-900.ist.mospolytech.ru/labs/api/dishes'
    const req = new XMLHttpRequest();
    req.setRequestHeader('Access-Control-Allow-Origin: *;')
    var result = null
    req.open("GET", url, true);
    req.responseType = 'json'
    req.send();
    req.onload = (e) => {
        load_arrays(req.response)
    }
        
}