import { useEffect, useState } from "react";

export function useLocalState(key, initialValue = '') {
    const [state, setState] = useState(() => {
        const storeData = localStorage.getItem(key);

        if (storeData) {
            //Se houver algo salvo, retorna
            return JSON.parse(storeData)
        }

        //Se não houver nada salvo, retorna o initialValue
        return initialValue;
    })

    useEffect(() => {
        //Toda vez que state for alterado, salva no localStorage...
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    //Deixamos o state e o setState acessíveis para quem for usar o hook

    return [state, setState]
}