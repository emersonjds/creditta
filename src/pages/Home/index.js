import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {
  Container,
  TopContainer,
  BottomContainer,
  RightContainerBottom,
  LeftContainerBottom,
  ContainerButtonsActions,
} from './styles';
import {Avatar, Button} from 'react-native-paper';

export default function Home() {
  return (
    <Container>
      <TopContainer>
        <Avatar.Image
          size={100}
          source={require('../../assets/img/avatar.jpg')}
        />
        <Text style={{marginTop: 10}}>@Marcela</Text>
        <Text style={{marginTop: 10}}>Marcela Silva e Silva</Text>
        <Button
          style={{marginTop: 10}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Editar
        </Button>
      </TopContainer>
      <BottomContainer>
        <LeftContainerBottom>
          <Text>Saldo em Contas</Text>
          <Text>R$ 648,32</Text>
          <Button
            style={{marginTop: 10, width: 150}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Ver Contas
          </Button>
        </LeftContainerBottom>
        <RightContainerBottom>
          <Text>Saldo em Contas</Text>
          <Text>R$ 648,32</Text>
          <Button
            style={{marginTop: 10, width: 150}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Adicionar Conta
          </Button>
        </RightContainerBottom>
      </BottomContainer>

      <ContainerButtonsActions>
        <RightContainerBottom>
          <Text>Saldo em Contas</Text>
          <Text>R$ 648,32</Text>
          <Button
            style={{marginTop: 10, width: 150}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Adicionar Conta
          </Button>
        </RightContainerBottom>
        <RightContainerBottom>
          <Text>Saldo em Contas</Text>
          <Text>R$ 648,32</Text>
          <Button
            style={{marginTop: 10, width: 150}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Adicionar Conta
          </Button>
        </RightContainerBottom>
      </ContainerButtonsActions>
    </Container>
  );
}
