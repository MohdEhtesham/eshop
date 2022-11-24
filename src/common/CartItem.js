import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CartItem = ({ item, onRemoveItem ,onAddWishlist ,isWishlist,onAddToCart,onRemoveFromWishlist,showtheproduct}) => {
    return (
        <TouchableOpacity
            style={{

                width: '94%',
                height: 200,
                shadowOffset: { width: -2, height: 6 },
                shadowColor: 'black',
                shadowOpacity: 0.6,
                shadowRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
                backgroundColor: 'white',
                marginVertical: 10,
                borderRadius: 20,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                elevation: 5
            }}
        >

            <View style={{ width: '100%', height: '100%' }}>
                <Image source={item.image} style={{
                    width: '60%', height: '50%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20, alignItems: 'center', alignSelf: 'center', margin: 20
                }} />
                <Text style={{ marginTop: 5, marginLeft: 30, fontSize: 15, fontWeight: 'bold' }}>
                    {item.name}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginTop: 5, marginBottom: 10, marginLeft: 30, fontSize: 15, fontWeight: '600' }}>
                        {'₹' + item.price}
                       
                    </Text>
                    {isWishlist?( <TouchableOpacity style={{
                            borderWidth: .5, padding: 5,
                            justifyContent: "center", alignItems: 'center',
                            borderRadius: 10,
                            marginRight: 20,
                            marginBottom: 5
                        }} onPress={()=>{
                            onAddToCart(item);
                        }}>
    
                            <Text style={{ fontSize: 15, fontWeight: '600' }}>
                                Add To cart
                            </Text>
                        </TouchableOpacity>):(
                             <TouchableOpacity style={{
                                borderWidth: .5, padding: 5,
                                justifyContent: "center", alignItems: 'center',
                                borderRadius: 10,
                                marginRight: 20,
                                marginBottom: 5
                            }} onPress={()=>{
                                onRemoveItem();
                            }}>
        
                                <Text style={{ fontSize: 15, fontWeight: '600' }}>
                                    Remove Item
                                </Text>
                            </TouchableOpacity>
                            
                        
                        
                        )}
                   
                </View>
                {isWishlist?(
                    <TouchableOpacity style={{
                        width: 40, height: 40,
    
                        justifyContent: 'center', alignItems: 'center',
                        position: 'absolute',
                        top: 30,
                        right: 10
                    }} onPress={()=>{
                        onRemoveFromWishlist();
                    }}>
                        <Image
                            source={require('eshop/src/images/redheart.png')} style={{ width: 24, height: 24, }} />
    
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity style={{
                        width: 40, height: 40,
    
                        justifyContent: 'center', alignItems: 'center',
                        position: 'absolute',
                        top: 30,
                        right: 10
                    }} onPress={()=>{
                        onAddWishlist(item);
                    }}>
                        <Image
                            source={require('eshop/src/images/heart.png')} style={{ width: 24, height: 24, }} />
    
                    </TouchableOpacity>
                )}
                
            </View>


        </TouchableOpacity>
    )
}

export default CartItem ;