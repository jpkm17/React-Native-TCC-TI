import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({    
  
      container: {
        backgroundColor: '#F8F8FF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      logo:{
        marginTop: -100,
        width: '150px',
        height: '150px',
        marginBottom:'130px',
      },
      
      login: {
        marginTop: -80,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '35px',
      },

      button:{
        marginTop: '20px',
        color:'#841584',
      },

      input1:{
        textAlign:'center', 
        justifyContent: 'center', 
        height: 40, 
        width: 250, 
        marginBottom:'20px', 
        marginTop:'25px',
        borderColor: 'black',
        borderWidth: '2px',
        borderRadius: '25px',
        fontSize: '15px'

      },

      input2:{
        justifyContent: 'center' ,
        textAlign:'center',
        height: 40,
        width: 250,
        marginBottom:'20px',
        borderColor: 'black',
        borderWidth: '2px',
        borderRadius: '5px',
        borderRadius: '25px',
        fontSize: '15px' 
      },

  });