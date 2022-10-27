export function filtraObjeto(obj, pesquisa, chavesDePesquisa) {

    const stringPesquisa = pesquisa.replace(/[*()+\[\]/]/gi, '');

    // Verifica se digitou alguma coisa
    if (stringPesquisa.length > 0) {

        // Pega as keys do objeto
        const keys = chavesDePesquisa ? chavesDePesquisa : Object.keys(obj);

        // Faz a comparação em cada key do objeto
        const encontrou = keys.find( key => {

            // Verifica se é diferente de null
            if(obj[key]){

                if(typeof obj[key] === 'number'){

                    return obj[key].toString().match(new RegExp(`${stringPesquisa}`, "gi"));

                }else if(typeof obj[key] === 'string'){

                    return obj[key].match(new RegExp(`${stringPesquisa}`, "gi"));

                }
            }

            return false;
        });

        return encontrou; 

    } else {
        return obj;
    }
}