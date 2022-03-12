import { Modal } from 'native-base';
import React from 'react'
import { Image, Text, View } from 'react-native'
import { DependenciesContainer } from '../Core/models/DependenciesContainer';
import { imageSource } from '../Core/models/imageSource';
import { ListItemModel } from './models/ListItemModel';

interface IModalView {
    deps: DependenciesContainer;
};

export const ModalView: React.FC<IModalView> = ({ deps }) => {
    const [open, setOpen] = React.useState(false);
    const itemModel = React.useRef<ListItemModel>();
    const { eventsSetvice } = deps;

    React.useEffect(() => {
        eventsSetvice.addListener(`openModal`, (data: ListItemModel) => onModalOpen(data));

        return () => {
            eventsSetvice.removeAllListeners(`openModal`)
        };
    }, []);

    function onModalOpen(model: ListItemModel) {
        itemModel.current = model
        setOpen(true)
        console.log(itemModel)
    };

    return (
        <Modal isOpen={open} onClose={() => setOpen(false)}  >
            <Modal.Content >
                <Modal.CloseButton />
                <Modal.Header>{`${itemModel.current?.firstName} ${itemModel.current?.lastName}`}</Modal.Header>
                <Modal.Body>
                    <View style={{ flexDirection: 'row' }} >
                        <Image source={imageSource(itemModel.current?.avatar, 85, 85)} style={{ backgroundColor: itemModel.current?.profileColor, borderRadius: 50 }} />
                        <View style={{ flexDirection: 'column', marginHorizontal: 10 }} >
                            <Text>Country: {itemModel.current?.county}</Text>
                            <Text>Sity: {itemModel.current?.city}</Text>
                            <Text>Phone number: {itemModel.current?.phone}</Text>
                            <Text>ID: {itemModel.current?.id}</Text>
                        </View>
                    </View>
                </Modal.Body>
            </Modal.Content>
        </Modal >
    );

};