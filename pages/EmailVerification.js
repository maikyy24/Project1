import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView,TouchableHighlight, TextInput} from 'react-native';

export default function EmailV() {
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.box}>{/*will be a box for now*/}
    <Text style={{alignSelf:'center'}}>Verify Your Email</Text>
    <View style={styles.mail}/>
    </View>
    <Text style={styles.dirText}>Please enter the 4 digit code sent to your email.</Text>
      <TextInput placeholder='---   ---   ---   ---' placeholderTextColor='#FFFFFF' style={styles.inp}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.paragraph}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textButt}><Text style={{color:'#B8F14A'}}>Resend</Text> Email</Text>
      </TouchableOpacity>
      <TouchableOpacity>{/**Resend button has width of screen need to fix */}
        <Text style={styles.textButt}>Change Email</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent:'center',
    backgroundColor: '#2C2C2E',

  },
  inp: {
    marginTop:7,
    backgroundColor: '#2C2C2E',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#757575',
    marginLeft:30,
    marginRight:30,
    paddingLeft:20,
    padding:10,
    fontSize: 15,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  dirText:{
    margin: 10,
    marginLeft:30,
    marginRight:30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  }, 
  button: {
    marginTop:40,
    marginBottom: 15,
    backgroundColor: '#B8F14A',
    borderRadius: 10,
    marginLeft:75,
    marginRight:75,

  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textButt: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  box:{
    height:200,
    backgroundColor: '#B8F14A',
    marginBottom:100,
  },
  mail: {
    height: 150,
    width:200,
    backgroundColor: '#B8F14A',
    borderWidth: 10,
    borderColor: '#000000',
    margin: 20,
    alignSelf:'center',

  }
});