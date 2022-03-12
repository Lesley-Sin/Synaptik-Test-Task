import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { imageSource } from '../Core/models/imageSource'

import type { ListItemModel } from './models/ListItemModel'

interface IListItem {
    model: ListItemModel;
    onPress: () => void;
};

export function ListItem({ model, onPress }: IListItem): JSX.Element {


    function userAvatar() {
        return (
            <Image source={imageSource(model.avatar)} style={{ backgroundColor: '#DCDCDC', borderRadius: 45 }} />
        )
    };

    function userCreditials() {
        return (
            <View style={{ marginHorizontal: 15, justifyContent: 'center' }} >
                <Text style={{ color: 'white' }} >First name: {model.firstName}</Text>
                <Text style={{ color: 'white' }} >Last name: {model.lastName}</Text>
            </View>
        )
    };

    function userId() {
        return (
            <View style={{alignSelf: 'center'}} >
                <Text style={{ color: 'white' }} >User ID: {model.id}</Text>
            </View>
        )
    };

    return (
        <Pressable
            style={{ marginHorizontal: 10, marginVertical: 5, padding: 15, backgroundColor: model.profileColor, borderRadius: 15 }}
            onPress={onPress}
        >
            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                {userAvatar()}
                {userCreditials()}
                {userId()}
            </View>
        </Pressable >
    );

};