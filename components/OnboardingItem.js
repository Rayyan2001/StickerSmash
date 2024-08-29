import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

export default OnboardingItem = ({item}) => {

    const {width} = useWindowDimensions();
    
  return (
    <View style= {[styles.container, {width}]}>
      <Image source={item.image} style= {[styles.container, {width, resizeMode: 'contain'}]} />
      
      <View>
      <Text style= {styles.title}>{item.title}</Text>
      <Text style= {styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 500
    },

    image: {
        flex: 0.7,
        justifyContent: 'center',
        
      },
      
    title: {
        fontWeight: '800',
        fontSize: 28,        
        marginBottom: 20,
        textAlign: 'center',
        color: "#493d8a"
      },
      
    description: {
        fontWeight: '200',
        paddingHorizontal: 64,
        textAlign: 'center',
        color: "#62656b",
        marginBottom: 20,
      },
  });