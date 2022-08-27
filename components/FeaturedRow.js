import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard.js';

const FeaturedRow = ({id,title,description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-400 px-4">{description}</Text>

        <ScrollView horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        > 

        <RestaurantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        short_description="this is a test description"
        dishes={[]}
        long={4}
        lat={3}
        />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow;