
import React, { Component } from 'react';
import { StackNavigator,} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView, 
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';


class  LogoSevenApp extends Component 
{
  render() {

      return (

         <View>
              <Image   
                style = {styles.LogoSevenApp}
                source={require('./SevenApp.jpg')}
              />
        </View>

        );
    }
}

class GoButton extends Component 
{
  render() {

      return (

         <View>
              <Image
                style = {styles.GoButton}
                source={require('./gobutton.jpg')}
              />
        </View>

        );
    }
}

class SignUpWithFaceButton extends Component 
{
  render() {

      return (

         <View>
              <Image
                style = {styles.SignUpWithFaceButton}
                source={require('./facesignup.jpg')}
              />             
        </View>

        );
    }
}
class SignUpWithGoogleButton extends Component 
{
  render() {

      return (

         <View>
               <Image
                style = {styles.SignUpWithGoogleButton}
                source={require('./signwitgoogle.jpg')}
              />
        </View>

        );
    }
}


class SevenProjectAppAccueil extends Component
{
  render() {

    const { navigate } = this.props.navigation;

      return (

         <View>

                <LogoSevenApp/>

                <Text style = {styles.TextSurAccueil}>        Je dispose déja dun compte </Text>

                <Button 
                  
                  style = {styles.GoButton}
                  onPress={() => navigate('Home')} 
                  title="GO"
                  color="#D3D3D3"
                />

                 <Button  
                  onPress={() => navigate('Inscription')} 
                  title="Je Minscris"

                />

        </View>

        );
  }
}

class PageInscription extends Component
{
  render() 
  {
    const { navigate } = this.props.navigation;

      return (

         <View>

         <Button  
                  onPress={() => navigate('Home')} 
                  title="< Inscription"
         />

         <TouchableOpacity onPress={() => navigate('')} >
         <SignUpWithGoogleButton/>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigate('')} >
         <SignUpWithFaceButton/>
         </TouchableOpacity>
        

         <Text> ------------------------------------------------- ou  -------------------------------------------------</Text>
         
         <TextInput 
          style = {styles.entree}
          placeholder="Nom"
         />

         <TextInput 
          style = {styles.entree}
          placeholder="Prenom"
         />

         <TextInput 
          style = {styles.entree}
          placeholder="E-mail"
         />

         <TextInput 
          style = {styles.entree}
          placeholder="Créer mot de passe"
         />

         <TextInput 
          style = {styles.entree}
          placeholder="Confirmer mot de passe"
         />

         <Button  
            onPress={() => navigate('Home')} 
            title="OK"
         />
              
        </View>

      );
  }
}



const styles = StyleSheet.create ({
  
   LogoSevenApp: 
   {
      alignSelf: 'center',
      marginTop: 50
   },
   GoButton: 
   {
      alignSelf: 'flex-end',
      marginTop: -55,
      position: 'absolute',
      bottom: 35
   },
   SignUpWithFaceButton: 
   {
      alignSelf: 'flex-start',
      flexDirection:'row'
   },
   SignUpWithGoogleButton: 
   {
      alignSelf: 'flex-end',
      flexDirection:'row'
   },
   TextSurAccueil: 
   {
      marginTop: 180,
      textAlign: 'left',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20
   },
   TextJeMinscris: 
   {  
      marginTop: 10,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor: 'blue',
      borderLeftWidth: 40,
      borderRightWidth: 40,
      borderWidth: 0.1,
      borderColor: 'lightgray',
   },
   entree: {
      margin: 15,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1
   }

});

const SevenProjectApp = StackNavigator({
  Home: { screen: SevenProjectAppAccueil},
  Inscription: { screen: PageInscription}
});

AppRegistry.registerComponent('SevenProject', () => SevenProjectApp);
