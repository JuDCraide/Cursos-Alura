const urlBase = 'http://localhost:8000/api/autor'

const ConsomeApi = (parametro = '', method = 'GET', body ) => {
    return fetch(`${urlBase}/${parametro}`, {
        method,
        headers:{'content-type':'aplication/json'},
        body
    })
    .then(res => APIService.TratarErros(res))
    .then(res => res.json())    
}

const APIService = {

    ListaAutores:() => ConsomeApi(),
    
    CriaAutor: autor => ConsomeApi('', 'POST', autor),/*{
        return fetch('http://localhost:8000/api/autor',{method: 'POST', headers:{'content-type':'application/json'}, body:autor})
        .then(res => APIService.TratarErros(res))
        .then(res => res.json())
    },*/
    ListaNomes: ()=>  ConsomeApi('nome') ,

    ListaLivros: ()=>  ConsomeApi('livro'),

    RemoveAutor: id =>  ConsomeApi(id,'DELETE') ,
   
    TratarErros : res =>{
        if(!res.ok){
            throw Error(res.responseText);            
        }
        return res;
    }

}

export default APIService;