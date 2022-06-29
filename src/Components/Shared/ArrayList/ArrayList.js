import React from 'react'
import { FlatList } from 'react-native'

export default function ArrayList(props) {

    const { renderItem, data, keyExtractor, horizontal, style, numColumns } = props
    return (
        <>
            <FlatList
                style={style && style}
                keyExtractor={keyExtractor}
                bounces={false}
                data={data}
                numColumns={numColumns && numColumns}
                renderItem={renderItem}
                horizontal={horizontal ? horizontal : false}
            />
        </>
    )
}
