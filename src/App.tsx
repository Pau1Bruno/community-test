import React, { useState } from 'react';
import { useFetch } from "./hooks/useFetch";
import GroupCard from "./components/GroupCard/GroupCard";
import Loading from "./components/Loading/Loading";
import Filter, { FilterForm } from "./components/Filter/Filter";
import { useSortedGroups } from "./hooks/useGroups";

function App() {
    const { result, data } = useFetch();
    const [filter, setFilter] = useState<FilterForm>(
        {closed: "", avatar_color: "", friends: ""}
    )
    
    const groups = useSortedGroups(data, filter)
    console.log(groups)
    
    return (
        <div className="App">
            <Filter filter={filter} setFilter={setFilter}/>
            {result ? groups?.map(group =>
                <GroupCard key={group.id} group={group}/>
            ) : <Loading/>}
        </div>
    );
}

export default App;
