import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { ListItem } from 'react-native-elements'



export default function ListaContatosScreen({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>

<View style={{ flex: 1,  paddingTop: 20, alignItems: "center", marginLeft:850, flexDirection: "row" }} >
                <Text h1 style={{ fontSize: 40 }}>Lista de Contatos</Text>
                <Button style={ { paddingLeft: 15}}
                    icon={
                        <Icon
                            name="plus"
                            size={20}
                            color="white"
                        /> }
                    onPress={()=> navigation.navigate('CadastroContato')}
                />
            </View>
            
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>


            <ListItem containerStyle={{ width: 396, borderBottomWidth: 4 }} onPress={()=> navigation.navigate('Contatos')}>
                <Avatar
                    size='large'
                    rounded
                    source={{
                      uri:
                        'https://static.vecteezy.com/ti/vetor-gratis/p1/5026528-vector-illustration-female-avatar-in-flat-style-gr%C3%A1tis-vetor.jpg',
                    }}
                />

                <View style={{ width: 255, marginLeft: 5, alignItems: 'flex-start' }}>
                    <Text h4>Marcos Adrade</Text>
                    <Text>(81) 988553424</Text>
                </View>
                
            </ListItem>

            <ListItem containerStyle={{ width: 396, borderBottomWidth: 4 }} onPress={()=> navigation.navigate('Contatos')}>
                <Avatar
                    size='large'
                    rounded
                    source={{
                      uri:
                        'https://static.vecteezy.com/ti/vetor-gratis/p1/5026528-vector-illustration-female-avatar-in-flat-style-gr%C3%A1tis-vetor.jpg',
                    }}
                />

                <View style={{ width: 255, marginLeft: 5, alignItems: 'flex-start' }}>
                    <Text h4>Patrícia Tavares</Text>
                    <Text>(81) 998765332</Text>
                </View>
            </ListItem>

            <ListItem containerStyle={{ width: 396, borderBottomWidth: 4 }}>
                <Avatar
                    size='large'
                    rounded
                    source={{
                      uri:
                        'https://static.vecteezy.com/ti/vetor-gratis/p1/5026528-vector-illustration-female-avatar-in-flat-style-gr%C3%A1tis-vetor.jpg',
                    }}
                />

                <View style={{ width: 255, marginLeft: 5, alignItems: 'flex-start' }} onPress={()=> navigation.navigate('Contatos')}>
                    <Text h4>Rodrigo Antunes</Text>
                    <Text>(81) 987765525</Text>
                </View>
            </ListItem>




        </View>
   
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });






 


  
  
  
  