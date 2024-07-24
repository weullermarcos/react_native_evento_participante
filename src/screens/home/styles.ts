import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },

    titles:{
        alignItems: 'center',
    },

    eventName:{
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
        alignItems: 'center',
    },

    eventDate:{
        color: '#6B6B6B',
        fontSize: 16,
        marginTop: 5,
    },

    input:{
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5, //arredonda as bordas do componente
        color: '#FFFFFF', //cor do texto interno
        padding: 16, //dá um espaçamento dentro da caixa do texto
        fontSize: 16,
        marginRight: 12,
    },

    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        justifyContent: 'center', //alinhamento na vertical
        alignItems: 'center', //alinhamento na horizontal
    },

    buttonText:{
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },

    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },

    emptyListText:{
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
    },

});