import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native'
import React, { useState } from 'react';
import Header from '../common/Header';
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeFromCart, removeFromWhislist,onAddToCart } from '../redux/actions/Actions';

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  const dispatch=useDispatch();
  // setCartList(cartData);
  return (
    <SafeAreaView>

        <Header />
      <View style={[{ marginBottom:40}]} >
        <FlatList data={cartData} 
        
        renderItem={({ item, index }) => {
          return <CartItem 
          isWishlist={'s'}
          item={item}
          onRemoveFromWishlist={()=>{
            dispatch(removeFromWhislist(index))
          }}
          onAddToCart={(x)=>{
          dispatch(addItemToCart(x))
          }} />;
          

        }} />
      </View>
    </SafeAreaView>
  )
}

export default Wishlist

const styles = StyleSheet.create({})




// const details={
//   email:"",
//   password:""
// }
// axios.post("https://ots-shop.herokuapp.com/register",details).
// then(()=>{

// }).catch((err)=>{})