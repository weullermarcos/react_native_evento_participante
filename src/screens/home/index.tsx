
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles';
import { Participant } from "../../components/Participant";

export default function Home(){

  //Criando state para guardar os participantes
  const [participantes, setParticipantes] = useState<string[]>([]);

  //Criando state para pegar o nome digitado
  const [participanteName, setParticipanteName] = useState('');

  //Função chamada quando o botão é pressionado
  function handleParticipantAdd(){

    //Verifica se o nome do participante já existe no array
    if(participantes.includes(participanteName)){

      return Alert.alert('Atenção', 'Este nome de participante já existe.');
    }

    //Adiciona um novo participante ao array de participantes, mantendo o conteúdo já existente
    setParticipantes(prevState => [...prevState, participanteName]);

    //Após adicionar limpa o conteúdo já existente
    setParticipanteName('');
  }

  function handleParticipantRemove(name: string){

    //console.log(name);

    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim', 
        onPress: () => setParticipantes(prevState => participantes.filter(participante => participante !== name)) //Filtra o array e mantêm os participantes que são diferentes do selecionado
      },
      {
        text: 'Cancelar', 
        style: 'cancel'
      },
    ]);
  }

  return(
    <View style={styles.container}>

      <View style={styles.titles}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Sexta, 29 de Novembro de 2024</Text>
      </View>

      <View style={styles.form}>
        <TextInput 
          style = {styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6B6B6B'
          keyboardType="default"
          onChangeText={setParticipanteName}
          value={participanteName} //Limpa o input após adicionar o participante
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante adicionado</Text>
        )}
      />

    </View>
  );
}

