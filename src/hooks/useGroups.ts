import { useMemo } from "react";
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
    console.log("friends: ", friends)
    if ( friends === "" ) return true;
    if ( friends === "with_friends" ) return group.friends?.length;
    return !group.friends?.length;
}

export const useSortedGroups =
    (groups: Group[] | undefined,
     filter: FilterForm
    ) => {
        return useMemo(() => {
            if ( !groups ) return [];
            if ( filter.closed || filter.avatar_color || filter.friends ) {
                console.log("Группы в поиске: ", groups)
                console.log("Фильтры в поиске: ", filter)
                return [ ...groups ]
                    .filter((group) => filterPrivacy(group, filter.closed))
                    .filter((group) => filterAvatarColor(group, filter.avatar_color))
                    .filter((group) => filterHaveFriends(group, filter.friends));
            }
            
            return groups;
        }, [ groups, filter.closed, filter.avatar_color, filter.friends ])
    }