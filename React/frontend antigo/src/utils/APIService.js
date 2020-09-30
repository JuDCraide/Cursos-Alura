const APIService = {
    ListaAutores:() => {
        return fetch('http://localhost:8000/api/autor')
        .then(res => APIService.TratarErros(res))
        .then(res => res.json())
    },
    CriaAutor: autor =>{
        return fetch('http://localhost:8000/api/autor',{method: 'POST', headers:{'content-type':'application/json'}, body:autor})
        .then(res => APIService.TratarErros(res))
        .then(res => res.json())
    },
    ListaNomes: ()=> {
        return fetch('http://localhost:8000/api/autor/nome')
        .then(res => APIService.TratarErros(res))
        .then(res => res.json())
    },
    ListaLivros: ()=> {
        return fetch('http://localhost:8000/api/autor/livro')
        .then(res => APIService.TratarErros(res))
        .then(res => res.json())
    },
    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`,{method: 'DELETE', headers:{'content-type':'aplication/json'}})
        .then(res => APIService.TratarErros(res))
        .then(res => res.json())
    },
    TratarErros : res =>{
        if(!res.ok){
            throw Error(res.responseText);            
        }
        return res;
    }

}

export default APIService;