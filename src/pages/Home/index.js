import React from 'react';
import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import {
  Container,
  TopContainer,
  BottomContainer,
  RightContainerBottom,
  LeftContainerBottom,
  ContainerButtonsActions,
  ButtonAccount,
  ContainerPayOrder,
} from './styles';
import {Avatar, Button} from 'react-native-paper';

export default function Home() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
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
          <ButtonAccount>
            <Text>Icone</Text>
            <Text>Pagar Boleto</Text>
          </ButtonAccount>
          <ButtonAccount>
            <Text>Icone</Text>
            <Text style={{fontSize: 14, lineHeight: 16, color: '#666666'}}>
              Solicitar Pagamento
            </Text>
          </ButtonAccount>
        </ContainerButtonsActions>
        <Text>Boletos para Pagar</Text>
        <ContainerPayOrder />
        <Text>Boletos pagos</Text>
        <ContainerPayOrder />
      </Container>
    </ScrollView>
  );
}
