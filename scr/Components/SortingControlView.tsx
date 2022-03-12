import { Checkbox } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { SortingDirection } from '../Core/models/SortingDirection'

interface ISortingControlView {
    onChange: (dir: SortingDirection) => void;
}

export const SortingControlView: React.FC<ISortingControlView> = ({ onChange }) => {
    const sortValues: SortingDirection[] = ['Ascending', 'Descending', 'Alphabet'];
    const [selected, setSelected] = React.useState<SortingDirection>('Ascending');

    return (
        <View style={{ margin: 10 }} >
            {sortValues.map((sortD, index) =>
                <Checkbox key={index} value={sortD} isChecked={selected === sortD} onChange={() => {
                    setSelected(sortD)
                    onChange(sortD)
                }} >{sortD}</Checkbox>
            )}
        </View>
    )
}