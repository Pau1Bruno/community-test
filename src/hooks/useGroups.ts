import { useMemo, useState, useEffect } from "react";
import { Group } from "../../types";
import { FilterForm } from "../components/Filter/Filter";

const filterPrivacy = (group: Group, closed: string | boolean) => {
    if ( closed === "" ) return true;
    if ( closed === "open" ) return group.closed;
    else return !group.closed;
}

const filterAvatarColor = (group: Group, avatar_color: string) => {
    if ( avatar_color === "" ) return true;
    return group.avatar_color === avatar_color;
}

const filterHaveFriends = (group: Group, friends: string) => {
    if ( friends === "" ) return true;
    if ( friends === "with_friends" ) return group.friends?.length;
    return !group.friends?.length;
}

const useDelayedFilter = (filter: FilterForm): FilterForm => {
    const [ delayedFilter, setDelayedFilter ] = useState(filter);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDelayedFilter(filter);
        }, 1000);
        
        return () => {
            clearTimeout(handler);
        };
    }, [ filter ]);
    
    return delayedFilter;
};

export const useSortedGroups = (groups: Group[] | undefined, filter: FilterForm) => {
    const delayedFilter = useDelayedFilter(filter);
    
    return useMemo(() => {
        if ( !groups ) return [];
        if ( delayedFilter.closed || delayedFilter.avatar_color || delayedFilter.friends ) {
            return [ ...groups ]
                .filter((group) => filterPrivacy(group, delayedFilter.closed))
                .filter((group) => filterAvatarColor(group, delayedFilter.avatar_color))
                .filter((group) => filterHaveFriends(group, delayedFilter.friends));
        }
        
        return groups;
    }, [ groups, delayedFilter.closed, delayedFilter.avatar_color, delayedFilter.friends ]);
};