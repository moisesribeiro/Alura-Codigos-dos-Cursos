const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs){
    try{
        const arrayStatus = await Promise.
        all(arrayURLs
            .map(async url => {
            const res = await fetch(url)
            return res.status;
    })) 
    return arrayStatus;
    }catch(erro){
        manejaErros(erro);
    }
}
    function geraArrayDeURLs(arrayLinks) {
    return arrayLinks
     .map(objetoLink => Object
        .values(objetoLink).join());
}

async function validaURLs(arryLinks) {
    const links =  geraArrayDeURLs(arryLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arryLinks.map((objeto, indice) => ({ 
        ...objeto, 
        status:statusLinks[indice] 
    }))
    return resultados;
}

module.exports = validaURLs;