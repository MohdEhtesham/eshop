import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../common/Header';
import { Products } from '../screens/Products';
import ProductItem from '../common/ProductItem';
import { addItemToCart, addToWishList, removeFromWhislist, showtheproduct, } from '../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import Slideshow from "react-native-image-slider-show";

const dataSource = [
  {
   
    url:
    'https://cdn.pixabay.com/photo/2019/05/05/18/58/girl-4181395__340.jpg'
  },
  {
   
    url:
      "https://cdn.pixabay.com/photo/2014/02/01/17/50/money-256281__340.jpg"
  },
  {
    // title: "Burger 3",
    // caption: "Mouthfull Of Happiness",
    url:
      "https://cdn.pixabay.com/photo/2020/12/05/17/48/christmas-5806672__340.jpg"
  }
];

const Main = ({navigation}) => {
  

  const [position, setPosition] = useState(0);
   const dispatch=useDispatch();
  const [categoryList, setCategoryList] = useState([0]);
  const [shirtList, setShirtList] = useState([]);
  const[tshirtList, setTshirtList]=useState([]);
  const[shoesList, setShoesList]=useState([]);
  const[pantList,setPantList]=useState([]);
  const[topList,setTopList]=useState([]);
  const[lahngaList,setLahngaList]=useState([]);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

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
      <ScrollView
     showsVerticalScrollIndicator={false}  >

        <View style={{marginBottom:70,flex:1 }} >
         
        {/* <FlatList
              showsHorizontalScrollIndicator={false}
             
              horizontal
              data={categoryList}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{

                      width: 90,
                      height: 30,
                      borderRadius: 30,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',

                      marginBottom:10,
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item}</Text>

                  </TouchableOpacity>
                )
              }} /> */}
      
       <View>
      <Slideshow position={position} dataSource={dataSource} />
    </View>
          <View>
            <Text style={{marginTop: 5,  marginLeft: 30, fontSize: 20, color:'black',fontWeight:'600' }}>Shirts</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={shirtList}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem
                  item={item} 
                   showproduct={(x)=>{
                    showtheproduct(item,dispatch);
                  }}
                  onAddWishlist={(x)=>{
                    dispatch(addToWishList(item))
                  }} 
                  
                  

                   />
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
                  <ProductItem item={item}
                  
                  showproduct={(x)=>{
                    showtheproduct(item,dispatch);
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
                  <ProductItem item={item} 
                 
                  showproduct={(x)=>{
                    showtheproduct(item,dispatch);
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
                  <ProductItem item={item} 
                
                  showproduct={(x)=>{
                    showtheproduct(item,dispatch);
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
                  <ProductItem item={item}
                   
                  showproduct={(x)=>{
                    showtheproduct(item,dispatch);
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
                 <ProductItem item={item} 
                //  onAddToCart={(x)=>{
                //   dispatch(addItemToCart(item))
                // }}
                showproduct={(x)=>{
                  showtheproduct(item,dispatch);
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

