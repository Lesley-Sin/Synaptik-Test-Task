import React from 'react'
import { View, Text, StyleSheet, VirtualizedList } from 'react-native'
import { ListItem } from '../Components/ListItem';
import { SortingControlView } from '../Components/SortingControlView';
import { colorScheme, margins } from '../Shared/styleSchemes/constants';

import type { ListItemModel } from '../Components/models/ListItemModel';
import type { SortingDirection } from '../Core/models/SortingDirection';
import type { IMainScreen } from './models/IMainScree'

export const MainScreen: React.FC<IMainScreen> = ({ deps }) => {
    const { reqresService, eventsSetvice } = deps;
    const [listData, setListData] = React.useState<ListItemModel[]>([]);
    const [sorting, setSorting] = React.useState<SortingDirection>('Ascending');

    //initial req 
    React.useMemo(async () => {
        const res = await reqresService.send(`/d02ba5c2-5d93-49bc-b445-a3ed29d59761`, 'GET');
        const result: ListItemModel[] = await res.json();
        setListData(result)
    }, [])

    //sorting direction change callback
    function onSortingDirectionChange(sortDirection: SortingDirection) {
        setSorting(sortDirection);
    };

    //view of list
    const sortedDataArr = React.useMemo(() => {
        const sortedArr = listData.sort((a, b) => {
            switch (sorting) {
                case 'Ascending': {
                    //sort by id ascending
                    return a.id - b.id
                };
                case 'Descending': {
                    //sort by id descending
                    return b.id - a.id
                };
                case 'Alphabet': {
                    //sort by alphabet to a->z
                    const nameA = a.firstName.toLowerCase();
                    const nameB = b.firstName.toLowerCase();
                    if (nameA < nameB) {
                        return -1
                    } else return 0;
                };
                default:
                    break;
            };
        });
        return sortedArr
    }, [listData, sorting])

    function getItemCount() {
        return sortedDataArr.length;
    };

    function getItem(arr: ListItemModel[], index) {
        return arr[index];
    };

    return (
        <View style={style.container} >
            <Text style={style.text}>Select sort direction</Text>
            <SortingControlView onChange={(dir) => onSortingDirectionChange(dir)} />
            <VirtualizedList<ListItemModel>
                data={sortedDataArr}
                extraData={sortedDataArr}
                renderItem={({ item }) => <ListItem model={item} onPress={() => eventsSetvice.emit(`openModal`, item)} />}
                keyExtractor={(item) => item.id.toString()}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </View >
    );

};

const style = StyleSheet.create({
    text: {
        margin: margins.smallMargin,
        color: colorScheme.secondary
    },
    container: {
        marginBottom: 150
    }
});