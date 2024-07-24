import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  name:{
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 16,
  },

  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    justifyContent: 'center', //alinhamento na vertical
    alignItems: 'center', //alinhamento na horizontal
},

buttonText:{
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
},

});