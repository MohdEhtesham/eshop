import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../common/Header';
import { Products } from '../screens/Products';
import ProductItem from '../common/ProductItem';
import { addItemToCart, addToWishList } from '../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
const{width,length}=Dimensions.get('window')
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


const Main = ({navigation}) => {
   const dispatch=useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [shirtList, setShirtList] = useState([]);
  const[tshirtList, setTshirtList]=useState([]);
  const[shoesList, setShoesList]=useState([]);
  const[pantList,setPantList]=useState([]);
  const[topList,setTopList]=useState([]);
  const[lahngaList,setLahngaList]=useState([]);
  useEffect(() => {
    let categories = [];
    Products.category.map(item => {
      categories.push(item.category);
    });
    setShirtList(Products.category[0].data);
    setTshirtList(Products.category[1].data);
    setShoesList(Products.category[2].data);
    setPantList(Products.category[3].data);
    setTopList(Products.category[4].data);
    setLahngaList(Products.category[5].data);
    
    setCategoryList(categories);
    // console.log(JSON.stringify(categories));
  }, [])
  const items=useSelector(state=>state);
  // console.log(items);
  return (
    <SafeAreaView>
       <Header />
      <ScrollView>

        <View style={{marginBottom:40,flex:1 }} >
         
        <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={categoryList}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{

                      width: 90,
                      height: 30,
                      marginTop: 10,
                      borderRadius: 30,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 10
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item}</Text>

                  </TouchableOpacity>
                )
              }} />
          <Image source={require('eshop/src/images/download.png')}
            style={{
              width: '94%', height: 230, alignSelf: 'center', borderWidth: 1,
              marginTop: 20, borderRadius: 10
            }} />
          <View>
          
          </View>
          <View>
            <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 20, color:'black',fontWeight:'600' }}>Shirts</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={shirtList}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem item={item} onAddToCart={(x)=>{
                    dispatch(addItemToCart(item))
                  }}
                  onAddWishlist={(x)=>{
                    dispatch(addToWishList(item))
                  }}/>
                 )
              }} />
          </View>
          <View>
            <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 20, fontWeight: '600',color:'black' }}>T-Shirts</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={tshirtList}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem item={item} onAddToCart={(x)=>{
                    dispatch(addItemToCart(item))
                  }}
                  onAddWishlist={(x)=>{
                    dispatch(addToWishList(item))
                  }}/>
                 )
              }} />
          </View>
          <View>
            <Text style={{ marginTop: 10, marginLeft: 30, 
              fontSize: 20, fontWeight: 'bold' }}>Shoes</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={shoesList}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem item={item} onAddToCart={(x)=>{
                    dispatch(addItemToCart(item))
                  }}
                  onAddWishlist={(x)=>{
                    dispatch(addToWishList(item))
                  }}/>
                 )
              }} />
          </View>
          <View>
            <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 20, fontWeight: '600',color:'black' }}>Pant</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={pantList}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem item={item} onAddToCart={(x)=>{
                    dispatch(addItemToCart(item))
                  }}
                  onAddWishlist={(x)=>{
                    dispatch(addToWishList(item))
                  }}/>
                 )
              }} />
          </View>
          <View>
            <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 20, fontWeight: '600', color:'black' }}>Top</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={topList}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem item={item} onAddToCart={(x)=>{
                    dispatch(addItemToCart(item))
                  }}
                  onAddWishlist={(x)=>{
                    dispatch(addToWishList(item))
                  }}/>
                 )
              }} />
          </View>
          <View>
            <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 20, fontWeight: '600', color:'black' }}>Lahnga</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={lahngaList}
              renderItem={({ item, index }) => {
                return (
                 <ProductItem item={item} onAddToCart={(x)=>{
                  dispatch(addItemToCart(item))
                }}
                onAddWishlist={(x)=>{
                  dispatch(addToWishList(item))
                }}/>
                )
              }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({})