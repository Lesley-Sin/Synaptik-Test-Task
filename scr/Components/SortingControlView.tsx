import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Checkbox } from 'native-base'
import { margins, colorScheme } from '../Shared/styleSchemes/constants'

import type { SortingDirection } from '../Core/models/SortingDirection'

interface ISortingControlView {
    onChange: (dir: SortingDirection) => void;
};

export const SortingControlView: React.FC<ISortingControlView> = ({ onChange }) => {
    const sortValues: SortingDirection[] = ['Ascending', 'Descending', 'Alphabet'];
    const [selected, setSelected] = React.useState<SortingDirection>('Ascending');

    return (
        <View style={style.container} >
            {sortValues.map((sortD, index) =>
                <Checkbox
                    key={index}
                    value={sortD}
                    isChecked={selected === sortD}
                    onChange={() => {
                        setSelected(sortD)
                        onChange(sortD)
                    }}
                >
                    <Text style={style.text} >{sortD}</Text>
                </Checkbox>
            )}
        </View >
    )
};

const style = StyleSheet.create({
    text: {
        margin: margins.exSmallMargin,
        color: colorScheme.secondary
    },
    container: {
        margin: margins.smallMargin
    }
})