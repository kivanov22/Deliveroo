import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard.js";
import sanityClient, { urlFor } from "../sanity.js";

const Categories = () => {
  const[categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"]
      `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // console.log(categories.image);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          // imgUrl="https://links.papareact.com/gn7"
          title={category.name}
        />
      ))}

      {/* Category Card */}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/> */}
    </ScrollView>
  );
};

export default Categories;
