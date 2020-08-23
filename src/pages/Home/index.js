import React from 'react';
import {Text, SafeAreaView, View, ScrollView, Image} from 'react-native';
import {
  Container,
  TopContainer,
  BottomContainer,
  RightContainerBottom,
  LeftContainerBottom,
  ContainerButtonsActions,
  ButtonAccount,
  ContainerPayOrder,
  TitleSeparator,
  TopContainerPayOrder,
  MiddleContainerParOrder,
  BottomContainerPayOrder,
  TittleBottomContainer,
  TextMiddleContainer,
  LeftTopContainerPayOrder,
  RightTopContainerPayOrder,
  TittleTextRightTopContainer,
  SubtitleTextRightTopContainer,
} from './styles';
import {Avatar, Button} from 'react-native-paper';
import boleto from '../../assets/img/boleto.png';
import credito from '../../assets/img/credito.png';
import qrcode from '../../assets/img/qr-code.png';

export default function Home({navigation}) {
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
            <Text>Contas Cadastradas</Text>
            <Text>3</Text>
            <Button
              style={{marginTop: 10, width: 150}}
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Adicionar Conta
            </Button>
          </RightContainerBottom>
        </BottomContainer>
        <ContainerButtonsActions>
          <ButtonAccount onPress={() => navigation.navigate('PayOrder')}>
            <Image source={boleto} />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                color: '#666666',
                marginTop: 10,
              }}>
              Pagar Boleto
            </Text>
          </ButtonAccount>
          <ButtonAccount onPress={() => navigation.navigate('PayOrderForMe')}>
            <Image source={credito} />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                color: '#666666',
                marginTop: 10,
              }}>
              Solicitar Pagamento
            </Text>
          </ButtonAccount>
        </ContainerButtonsActions>
        <TitleSeparator>Boletos para Pagar</TitleSeparator>
        <ContainerPayOrder>
          <TopContainerPayOrder>
            <LeftTopContainerPayOrder>
              <Image
                source={qrcode}
                style={{
                  width: 50,
                  height: 50,
                  position: 'absolute',
                  resizeMode: 'contain',
                }}
              />
            </LeftTopContainerPayOrder>
            <RightTopContainerPayOrder>
              <TittleTextRightTopContainer>
                Conta de Sabesp LTDA
              </TittleTextRightTopContainer>
              <SubtitleTextRightTopContainer>
                3 dias restantes para pagar - Cadastrado há 3 min
              </SubtitleTextRightTopContainer>
            </RightTopContainerPayOrder>
          </TopContainerPayOrder>
          <MiddleContainerParOrder>
            <TextMiddleContainer>
              Meu primeiro boleto cadastrado na plataforma. Estou muito ansiosa
              para paga-lo.
            </TextMiddleContainer>
          </MiddleContainerParOrder>
          <BottomContainerPayOrder>
            <TittleBottomContainer>R$ 63,11</TittleBottomContainer>
          </BottomContainerPayOrder>
        </ContainerPayOrder>
        <TitleSeparator>Boletos pagos</TitleSeparator>
        <ContainerPayOrder />
      </Container>
    </ScrollView>
  );
}
