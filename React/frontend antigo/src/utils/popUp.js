import M from 'materialize-css';

const PopUp = {
    exibeMensagem : (status, msg) => {
        if(status === "success"){

            M.toast({html:msg, classes:'green', displayLength: 2000});
        } 
        else if(status === "error" || status === "remove"){
            M.toast({html:msg, classes:'red', displayLength: 2000});
        }
    }
}

export default PopUp;
