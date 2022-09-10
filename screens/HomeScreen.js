import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../imgs/delivery.jpg'
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import { UserIcon, SearchIcon, AdjustmentsIcon, ChevronDownIcon} from "react-native-heroicons/solid";
import Categories from '../components/Categories'

const HomeScreen = () => {
  const navigation=useNavigation();

    useLayoutEffect(() =>{
      navigation.setOptions({
        headerShown: false,
      });
    },[]);

  return (
  <SafeAreaView className="bg-white pt-5"> 
    
      {/* Cabeçalho TOPO */}
      <View className="flex-row pb-3 mx-4 space-x-2">
       <Image source={{uri:'https://links.papareact.com/wru'}}         
        className="h-9 w-9 bg-gray-300 p-4 rounded-full" />
       
        <View className='flex-1'>
          <Text className='font-bold text-gray-400' text-xs>Campos Delivery !</Text>
          <Text className="font-bold  text-sm">Localização Atual
          <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
          
        </View>
        <UserIcon size={35} color="#00CCBB" />
    </View>
    
      {/*Buscador */}
      <View className="flex-row pb-2 items-center space-x-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3"> 
        <SearchIcon color="#00CCBB" size={20} align="center" />
          <TextInput className=""
          placeholder="O que procura ?"
          keyboardType="default" 
          
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/*BODY */}
        <ScrollView className="bg-gray-100"
        contentContainerStyle={{paddingBottom:100}}>
          {/*Categorias */}
          <Categories />
        {/*Features Row */}
          <FeaturedRow 
            title="Featured"
            description="Localizacao dos parceiros"
            featuredCategory="featured"
          />
        </ScrollView>
    
  </SafeAreaView>
  );
}

export default HomeScreen;