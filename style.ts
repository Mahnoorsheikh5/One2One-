import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,

         },
    
         leftContainer: {
            flexDirection: 'row',
        },
        midContainer: {
            justifyContent: 'space-around',
        },



    avatar:{
        width: 55,
        height: 55,
        
        marginRight: 15,
        borderRadius: 50,
    },
    username: {
        
        fontWeight: 'bold',
        fontSize: 16,

    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
       
       
    },
    time: {
        fontSize: 14,
        color: 'grey',
    }

});

export default styles;