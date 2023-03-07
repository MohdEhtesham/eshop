import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  addToWishList,
  removeFromCart,
} from '../redux/actions/Actions';
// import Productview from '../common/Prductview';

const NestedScreen = ({
  onRemoveItem,
  onAddWishlist,
  isWishlist,
  onAddToCart,
  onRemoveFromWishlist,
}) => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const item = useSelector(state => state.home.selectedProduct);
  const dispatch = useDispatch();

  // setCartList(cartData);
  return (
    <SafeAreaView>
      <Header />
      {console.log('cartdadddddd', item)}

      <View style={[{marginBottom: 70}]}>
        <TouchableOpacity
          style={{
            width: '94%',
            height: 500,
            shadowOffset: {width: -2, height: 6},
            shadowColor: 'black',
            shadowOpacity: 0.6,
            shadowRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            backgroundColor: 'white',
            marginVertical: 10,
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            elevation: 5,
          }}>
          <View style={{width: '100%', height: '100%'}}>
            <Image
              source={item.image}
              style={{
                width: '90%',
                height: '80%',
                alignItems: 'center',
                alignSelf: 'center',
                margin: 20,
              }}
            />
            <Text
              style={{
                marginTop: 5,
                marginLeft: 30,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginTop: 5,
                  marginBottom: 10,
                  marginLeft: 30,
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                {'₹' + item.price}
              </Text>
              {item.isWishlist ? (
                <TouchableOpacity
                  style={{
                    borderWidth: 0.5,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginRight: 20,
                    marginBottom: 5,
                  }}
                  onPress={() => {
                    onAddToCart(item);
                  }}></TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    borderWidth: 0.5,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginRight: 20,
                    marginBottom: 5,
                  }}
                  onPress={() => {
                    let isCart = false;
                    cartData.forEach(cartItem => {
                      if (cartItem.id === item.id) {
                        Alert.alert('Already added');
                        isCart = true;
                      }
                    });
                    if (!isCart) {
                      dispatch(addItemToCart(item));
                    }
                  }}>
                  <Text style={{fontSize: 15, fontWeight: '600'}}>
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            {item.isWishlist ? (
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,

                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 30,
                  right: 10,
                }}
                onPress={() => {}}>
                <Image
                  source={require('eshop/src/images/redheart.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,

                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 30,
                  right: 10,
                }}
                onPress={() => {
                  dispatch(addToWishList(item));
                }}>
                <Image
                  source={require('eshop/src/images/heart.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NestedScreen;

const styles = StyleSheet.create({});
