import { Checkbox } from 'native-base';
import React from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { ListItem } from '../Components/ListItem';
import { ModalView } from '../Components/ModalView';

import type { ListItemModel } from '../Components/models/ListItemModel';
import { SortingControlView } from '../Components/SortingControlView';
import { SortingDirection } from '../Core/models/SortingDirection';
import type { IMainScreen } from './models/IMainScree'

export const MainScreen: React.FC<IMainScreen> = ({ deps }) => {
    const { reqresService, eventsSetvice } = deps;
    const [data, setData] = React.useState<ListItemModel[]>([]);
    const [sorting, setSorting] = React.useState<SortingDirection>('ASC');

    React.useMemo(async () => {
        const res = await reqresService.send(`/d02ba5c2-5d93-49bc-b445-a3ed29d59761`, 'GET');
        const result: ListItemModel[] = await res.json();
        setData(result)
    }, [])

    function onSortingDirectionChange(sortDirection: SortingDirection) {
        setSorting(sortDirection);
    };

    const ListView = React.useMemo(() => {
        const sortedArr = data.sort((a, b) => {
            switch (sorting) {
                case 'Ascending': {
                    return a.id - b.id
                };
                case 'Descending': {
                    return b.id - a.id
                };
                case 'Alphabet': {
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
        return (
            <ScrollView>
                {sortedArr.map((item, index) => <ListItem key={index} model={item} onPress={() => eventsSetvice.emit(`openModal`, item)} />)}
            </ScrollView>
        )
    }, [data, sorting])

    return (
        <View>
            <Text style={{margin: 10}} >Select sort direction</Text>
            <SortingControlView onChange={(dir) => onSortingDirectionChange(dir)} />
            {ListView}
        </View >
    );

};