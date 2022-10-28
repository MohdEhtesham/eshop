import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProductItem = ({ item, onAddToCart ,onAddWishlist}) => {
    return (
        <TouchableOpacity
            style={{

                width: 160,
                height: 200,
                marginTop: 5,
                borderRadius: 10,
                shadowOffset: {width: -2, height: 6},  
                shadowColor: 'black',  
                shadowOpacity: 0.6,  
                shadowRadius: 3,  
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                elevation: 10,
                backgroundColor: 'white',  
                marginVertical: 10,  
            }}
        >

            <View style={{ width: '100%', height: '100%' }}>
                <Image source={item.image} style={{
                    width: '60%', height: '50%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10, alignItems: 'center', alignSelf: 'center', margin: 20
                }} />
                <Text style={{ marginTop: 5, marginLeft: 10, fontSize: 15, fontWeight: 'bold' }}>
                    {item.name}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginTop: 5, marginBottom: 13, marginLeft: 10, fontSize: 15, fontWeight: '600' }}>
                        {'₹' + item.price}
                    </Text>
                    <TouchableOpacity style={{
                        borderWidth: .5, padding: 5,
                        justifyContent: "center", alignItems: 'center',
                        borderRadius: 10,
                        marginRight: 15,
                        marginBottom: 5
                    }} onPress={()=>{
                        onAddToCart(item);
                    }}>

                        <Text style={{ fontSize: 10, fontWeight: '600' }}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={{
                    width: 40, height: 40,

                    justifyContent: 'center', alignItems: 'center',
                    position: 'absolute',
                    top: 10,
                    right: 2
                }} onPress={()=>{
                    onAddWishlist(item);
                }}>
                    <Image
                        source={require('eshop/src/images/heart.png')} style={{ width: 24, height: 24, }} />

                </TouchableOpacity>
            </View>


        </TouchableOpacity>
    )
}

export default ProductItem