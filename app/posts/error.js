
'use client' //Como o erro ocorre do lado do cliente, é necessário utilizar "use client"

import { useEffect } from "react";

const Error = ({ error, reset }) => {

    useEffect(() => {

        console.log(error);
    }, [error])

    return (
        <div>
            <h2>Algo de errado não está certo!</h2>
            <button
                //retorna o usuário para onde ele estava antes do erro.
                onClick={() => reset()}>
                Tentar novamente
            </button>
        </div>
    )
}

export default Error