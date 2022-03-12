import { Modal } from 'native-base';
import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { DependenciesContainer } from '../Core/models/DependenciesContainer';
import { imageSource } from '../Core/models/imageSource';
import { colorScheme, margins, radiusScheme } from '../Shared/styleSchemes/constants';
import { ListItemModel } from './models/ListItemModel';

interface IModalView {
    deps: DependenciesContainer;
};

export const ModalView: React.FC<IModalView> = ({ deps }) => {
    const [open, setOpen] = React.useState(false);
    const itemModel = React.useRef<ListItemModel>();
    const { eventsSetvice } = deps;

    //initial events subscription
    React.useEffect(() => {
        eventsSetvice.addListener(`openModal`, onModalOpen);

        return () => {
            eventsSetvice.removeAllListeners(`openModal`)
        };
    }, []);

    //event callback
    function onModalOpen(model: ListItemModel) {
        itemModel.current = model
        setOpen(true)
    };

    return (
        <Modal isOpen={open} onClose={() => setOpen(false)}  >
            <Modal.Content >
                <Modal.CloseButton />
                <Modal.Header  >
                    <Text style={style.text} >{`${itemModel.current?.firstName} ${itemModel.current?.lastName}`}</Text>
                </Modal.Header>
                <Modal.Body>
                    <View style={style.rowContainer} >
                        <Image source={imageSource(itemModel.current?.avatar, 75, 75)} style={[style.image, { backgroundColor: itemModel.current?.profileColor }]} />
                        <View style={style.textContainer} >
                            <Text style={style.text} >Country: {itemModel.current?.county}</Text>
                            <Text style={style.text} >Sity: {itemModel.current?.city}</Text>
                            <Text style={style.text} >Phone number: {itemModel.current?.phone}</Text>
                            <Text style={style.text} >ID: {itemModel.current?.id}</Text>
                        </View>
                    </View>
                </Modal.Body>
            </Modal.Content>
        </Modal >
    );

};

const style = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row'
    },
    text: {
        color: colorScheme.secondary
    },
    textContainer: {
        flexDirection: 'column',
        marginHorizontal: margins.smallMargin
    },
    image: {
        borderRadius: radiusScheme.rounded
    }
});