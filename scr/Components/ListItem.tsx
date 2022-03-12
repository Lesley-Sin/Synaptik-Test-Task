import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { imageSource } from '../Core/models/imageSource'
import { margins, paddings, radiusScheme, colorScheme } from '../Shared/styleSchemes/constants'

import type { ListItemModel } from './models/ListItemModel'

interface IListItem {
    model: ListItemModel;
    onPress: () => void;
};

export class ListItem extends React.PureComponent<IListItem> {
    private model: ListItemModel;
    private onPress: () => void;

    constructor(props: IListItem) {
        super(props)
        this.model = props.model;
        this.onPress = props.onPress;
    };

    private userAvatar(): JSX.Element {
        return (
            <Image source={imageSource(this.model.avatar)} style={style.image} />
        )
    };

    private userCreditials(): JSX.Element {
        return (
            <View style={{ marginHorizontal: margins.deafaultMargins, justifyContent: 'center' }} >
                <Text style={{ color: colorScheme.def }} >First name: {this.model.firstName}</Text>
                <Text style={{ color: colorScheme.def }} >Last name: {this.model.lastName}</Text>
            </View>
        )
    };

    public render(): React.ReactNode {
        return (
            <Pressable
                style={[style.mainContainer, { backgroundColor: this.model.profileColor }]}
                onPress={this.onPress}
            >
                <View style={style.viewContainer}>
                    {this.userAvatar()}
                    {this.userCreditials()}
                </View>
            </Pressable >
        )
    };

};

const style = StyleSheet.create({
    mainContainer: {
        marginHorizontal: margins.smallMargin,
        marginVertical: margins.exSmallMargin,
        padding: paddings.smallPadding,
        borderRadius: radiusScheme.def
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    image: {
        backgroundColor: colorScheme.def,
        borderRadius: radiusScheme.rounded
    }

});
