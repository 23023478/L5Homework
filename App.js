import React from 'react';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, StatusBar, Image, Button} from 'react-native';

//Datasource (sectionlist)
const datasource = [
  {data:[
      {name: 'Kokushibo', image: require('./imgg/𝐊𝐨𝐤𝐮𝐬𝐡𝐢𝐛𝐨.jpg'), rank:'1'},
      {name: 'Doma', image: require('./imgg/❂ 𝐃𝐨𝐮𝐦𝐚.jpg'),  number:'2'},
      {name: 'Akaza', image: require('./imgg/Akaza.jpg'),  number:'3'},
      {name: 'Nakime', image: require('./imgg/Nakime.jpg'),  number:'4'},
      {name: 'Hantengu', image: require('./imgg/Hantengu_Full_Body_Anime.jpg'),  number:'4.5'},
      {name: 'Gyokko', image: require('./imgg/gyokko.jpg'),  number:'5'},
      {name: 'Gyutaro and Daki', image: require('./imgg/artworks-JhJCqsDAq1ehzYnq-SvR5OA-t500x500.jpg'),  number:'6'},
    ],
    title:"🌕Upper Moon",bgColor:'maroon', color:'white',},
  {data:[
      {name: 'Enmu', image: require('./imgg/enmu.jpg'), number:'1'},
      {name: 'Rokuro', image: require('./imgg/Rokuro.jpg'), number:'2'},
      {name: 'Wakuraba', image: require('./imgg/wakuraba.jpg'),  number:'3'},
      {name: 'Mukago', image: require('./imgg/Mukago_Anime_Profile.jpg'),  number:'4'},
      {name: 'Rui', image: require('./imgg/Rui_Anime_Profile.jpg'),  number:'5'},
      {name: 'Kamanue', image: require('./imgg/Kamanue.jpg'),  number:'6'},
      {name: 'Kyogai', image: require('./imgg/Kyogai.png'),  number:'(formally 6)'},
    ],
    title:"🌙Lower Moon",bgColor:'red', color:'white'},

];

//style
const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        margin: 10,
    },
    addButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        justifyContent: 'space-between', // Space between text and image
    },
    textStyle: {
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
        color: '#333',
        flex: 1, // Make text take available space to the left
        textAlign: 'left',

    },
    image: {
        width: 450,  // Larger width
        height: 300, // Larger height
        resizeMode: 'contain',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingVertical: 8,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
});

//RenderItem (sectionlist)
const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <View>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Image source={item.image} style={styles.image} />
        </View>
      </TouchableOpacity>

  );
};

//Main app
const Demons = () => {
  return (

      <View style={{marginBottom: 50, margin:10}}>
          <Text></Text>
        <Button title={'Add demons'} />
        <SectionList sections={datasource} renderItem={renderItem}
                     renderSectionHeader={({section:{title, bgColor,color}}) =>(
                         <Text style={[styles.headerText, {backgroundColor: bgColor},{color: color}]}>{title}</Text>

                     )}/>
        <StatusBar hidden={true} />
      </View>
  );
};

export default Demons



