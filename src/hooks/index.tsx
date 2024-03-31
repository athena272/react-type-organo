import { useEffect, useState } from "react";

export function useLocalState<T>(key: string, initialValue: T | (() => T)) {
    const [state, setState] = useState<T>(() => {
        const storeData = localStorage.getItem(key);
        if (storeData) {
            return JSON.parse(storeData);
        }
        if (typeof initialValue === 'function') {
            return (initialValue as () => T)();
        }
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState] as const;
}
