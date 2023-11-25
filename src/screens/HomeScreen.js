import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destinations from '../components/Destinations';

const ios = Platform.OS == 'ios';
const topMargin = ios ? 'mt-3' : 'mt-10';
const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView showsHorizontalScrollIndicator={false} className={' ' + topMargin}>
        {/* Avatar */}
        <View className='mx-5 flex-row justify-between items-center mb-10'>
          <Text style={{ fontSize: wp(7) }} className='font-bold text-neutral-700'>Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{ width: wp(12), height: wp(12) }} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View className='mx-5 mb-4'>
          <View className='flex-row items-center bg-neutral-100 rounded-full p-3 space-x-2 pl-6'>
            <Feather name="search" size={24} color="gray" />
            <TextInput placeholder='Search destination' placeholderTextColor={'gray'}
              className='flex-1 text-base mb-1 pl-1 tracking-wider'
            />
          </View>
        </View>

        {/* categories */}
        <View className='mb-4'>
          <Categories />
        </View>

        {/* sort categories */}
        <View className='mb-4'>
          <SortCategories />
        </View>

        {/* destinations */}
        <View className='mb-4'>
          <Destinations />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen