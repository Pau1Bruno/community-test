import { useEffect, useState } from "react";
import { GetGroupsResponse } from "../../types";

export const useFetch = (): GetGroupsResponse => {
    const [ query, setQuery ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(undefined);
    
    
    useEffect(() => {
        setLoading(true);
        fetch("https://pau1bruno.github.io/community-test/groups.json")
            .then()
            .then(response => response.json())
            .then(setQuery)
            .catch(setError)
            .then(async () => {
                await new Promise(() => setTimeout(() => setLoading(false), 1000))
            })
    }, []);
    
    if ( error || !query.length || loading ) return {
        result: 0,
    }
    
    return {
        result: 1,
        data: query
    };
}
