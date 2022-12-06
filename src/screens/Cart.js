import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react';
import Header from '../common/Header';
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromCart, } from '../redux/actions/Actions';

const Cart = ({item}) => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch=useDispatch();
  

  return (
   
    <SafeAreaView >
      <Header />
      {console.log("cartdadddddd",cartData)}

      <View style={[{marginBottom:70}]}>
        <FlatList data={cartData} 
        
        renderItem={({ item, index }) => {
        
          return <CartItem 
           item={item}
          onAddWishlist={(x)=>{
            dispatch(addToWishList(item))
          }}
          onRemoveItem={()=>{
            dispatch(removeFromCart(index))
          }}
          
          
          />;
          

        }} />
      </View>
    
    </SafeAreaView>
  )
}
    




export default Cart

const styles = StyleSheet.create({})