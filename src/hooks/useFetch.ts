import { useEffect, useState } from "react";
import { GetGroupsResponse } from "../../types";


export const useFetch = (): GetGroupsResponse => {
    const [ query, setQuery ] = useState([]);
    // const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(undefined);
    
    useEffect(() => {
        // setLoading(true);
        fetch("http://localhost:3000/groups.json")
            .then(response => response.json())
            .then(setQuery)
            .catch(setError)
        // .finally(() => setLoading(false))
    }, []);
    
    if ( error || !query.length ) return {
        result: 0,
    }
    
    return {
        result: 1,
        data: query
    };
}
