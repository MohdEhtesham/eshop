import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeFromWhislist } from '../redux/actions/Actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const ProductItem = ({ props, item, onAddToCart, onAddWishlist, showproduct, onRemoveFromWishlist }) => {

    const navigation = useNavigation();
    const cartData = useSelector(state => state.Reducers);
    const cartData2 = useSelector(state => state.Reducers2);
    const dispatch = useDispatch();
    const [isUserLike, setIsuserLike] = useState(isUserLike);

    const onPressHeart = () => {
        setIsuserLike(!isUserLike);
    };


    return (
        <TouchableOpacity
            style={{

                width: 160,
                height: 200,
                marginTop: 5,
                borderRadius: 10,
                shadowOffset: { width: -2, height: 6 },
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

            onPress={() => {
                showproduct(item);
                navigation.navigate('NestedScreen')

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
                    }} onPress={() => {

                        let isCart = false;
                        cartData.forEach((cartItem) => {
                            if (cartItem.id === item.id) {
                                Alert.alert('Already added');
                                isCart = true;
                            }
                        })
                        if (!isCart) {
                            dispatch(addItemToCart(item))
                        }
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
                }}
                    // onPress={() => {
                    //     onAddWishlist(item);
                    // }}
                    onPress={() => {
                        onPressHeart();
                        let isCart = false;
                        cartData2.forEach((cartItem , index) => {
                            if (cartItem.id === item.id) {
                                Alert.alert('remove from wishist');
                                dispatch(removeFromWhislist(index))

                                isCart = true;
                            }
                        })
                        if (!isCart) {

                            onAddWishlist(item);

                        }
                    }}

                >
                    {/*                     
                    {iswish ? (
                        <Image source={require('eshop/src/images/redheart.png')} style={{ width: 24, height: 24, }} />
                    
                        ) : (

                        <Image source={require('eshop/src/images/heart.png')} style={{ width: 24, height: 24, }} />
                    )} */}




                    {
                        <Icon name={isUserLike ? "heart" : "heart-o"} size={25} color="#900"/>
                        // <Image source={require('eshop/src/images/heart.png')} style={{ width: 24, height: 24, }} />

                    }
                </TouchableOpacity>

            </View>


        </TouchableOpacity>
    )
}

export default ProductItem