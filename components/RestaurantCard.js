import { View, Text } from 'react-native'
import React from 'react'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    short_description,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity>
        <Image 
        source={{
            uri:imgUrl
        }}
        />
    </TouchableOpacity>
  )
}

export default RestaurantCard;