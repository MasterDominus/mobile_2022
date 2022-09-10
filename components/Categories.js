import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10,
     }}
     horizontal showsHorizontalScrollIndicator={false}
     >
      {/*Cards */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Produtos 1"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Produtos 2"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Produtos 3"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Produtos 1"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Produtos 2"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Produtos 3"/>
      
    </ScrollView>
  )
}

export default Categories 