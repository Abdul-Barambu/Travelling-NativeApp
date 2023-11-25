import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

export default function DestinationScreen(props) {

    const item = props.route.params
    const navigation = useNavigation()
    const [favorite, toggleFavorite] = useState(false)

    return (
        <View className='bg-white flex-1'>
            <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
            {/* <StatusBar style={'light'} /> */}

            {/* Back button */}
            <SafeAreaView className='flex-row justify-between items-center w-full absolute mt-8'>
                <TouchableOpacity onPress={() => navigation.goBack()} className='p-1 rounded-full ml-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                    <Entypo name="chevron-left" size={wp(9)} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorite(!favorite)} className='p-2 rounded-full mr-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                    <AntDesign name="heart" size={wp(5)} color={favorite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* Title, description, booking buttom */}
            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className='px-5 flex flex-1 justify-between bg-white pt-8 -mt-14'>
                <ScrollView showsVerticalScrollIndicator={false} className='space-y-5'>
                    <View className='flex-row justify-between items-start'>
                        <Text style={{ fontSize: wp(7) }} className='font-bold flex-1 text-neutral-700'>{item.title}</Text>
                        <Text style={{ fontSize: wp(7), color: theme.text }} className='font-semibold'>₦{item.price}</Text>
                    </View>
                    <Text style={{ fontSize: wp(3.7) }} className='text-neutral-700 tracking-wide mb-2'>{item?.longDescription}</Text>
                    <View className='flex-row justify-between mx-1'>
                        <View className='flex-row space-x-2'>
                            <AntDesign name="clockcircle" size={wp(7)} color="skyblue" />
                            <View className='flex space-y-2'>
                                <Text style={{fontSize: wp(4.5)}} className='text-neutral-700 font-bold'>{item.duration}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Duration</Text>
                            </View>
                        </View>
                        <View className='flex-row space-x-2'>
                            <FontAwesome name="map-marker" size={wp(7)} color="#f87171" />
                            <View className='flex space-y-2'>
                                <Text style={{fontSize: wp(4.5)}} className='text-neutral-700 font-bold'>{item.distance}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Distance</Text>
                            </View>
                        </View>
                        <View className='flex-row space-x-2'>
                            <Ionicons name="sunny" size={wp(7)} color="orange" />
                            <View className='flex space-y-2'>
                                <Text style={{fontSize: wp(4.5)}} className='text-neutral-700 font-bold'>{item.weather}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Sunny</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{backgroundColor: theme.bg(0.7), height: wp(15), width: wp(50)}} className='mb-6 mx-auto flex justify-center items-center rounded-full'>
                    <Text style={{fontSize: wp(5.5)}} className='text-white font-bold'>Book now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}