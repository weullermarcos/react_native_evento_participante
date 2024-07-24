import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

//Criando um tipo
type Props = {
    name: string,
    onRemove: () => void, //recebendo uma função como parametro
};

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.name}> {name} </Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  );
}