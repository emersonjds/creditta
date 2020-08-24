import React, {useRef} from 'react';
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
import boleto from '../../assets/img/boleto-colorido-1.png';
import credito from '../../assets/img/credito-colorido-1.png';
import qrcode from '../../assets/img/qr-code.png';
import boleto_2 from '../../assets/img/boleto-colorido-2.png';
import {Modalize} from 'react-native-modalize';
import {TextInput} from 'react-native-paper';

export default function Home({navigation}) {
  const modalizeRef = useRef(<Modalize />);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Container>
        <View
          style={{
            height: 200,
            position: 'absolute',
            backgroundColor: '#8257E5',
            width: '120%',
            borderBottomRightRadius: 20,
            borderLeftRightRadius: 20,
          }}
        />
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
            onPress={onOpen}
            color={'#8257E5'}>
            Editar
          </Button>
        </TopContainer>
        <BottomContainer>
          <LeftContainerBottom>
            <Text style={{fontSize: 16, color: '#8257E5'}}>
              Boletos em Aberto
            </Text>
            <Text style={{fontSize: 18, color: '#8257E5'}}>R$ 413,29</Text>
            <Button
              style={{marginTop: 10, width: 150}}
              mode="contained"
              onPress={() => navigation.navigate('PayOrder')}
              color={'#8257E5'}>
              Ver Contas
            </Button>
          </LeftContainerBottom>
          <RightContainerBottom>
            <Text style={{fontSize: 18, color: '#8257E5'}}>Contas Pagas</Text>
            <Text style={{fontSize: 18, color: '#8257E5'}}>3</Text>
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
        <TitleSeparator>Ultimos Boletos Pagos</TitleSeparator>
        <ContainerPayOrder>
          <TopContainerPayOrder>
            <LeftTopContainerPayOrder>
              <Image
                source={boleto_2}
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
                Pago em 22/08/2020
              </SubtitleTextRightTopContainer>
            </RightTopContainerPayOrder>
          </TopContainerPayOrder>
          <MiddleContainerParOrder>
            <TextMiddleContainer>
              Meu primeiro boleto pago na plataforma.
            </TextMiddleContainer>
          </MiddleContainerParOrder>
          <BottomContainerPayOrder>
            <TittleBottomContainer>R$ 63,11</TittleBottomContainer>
          </BottomContainerPayOrder>
        </ContainerPayOrder>
        <TitleSeparator>Boletos pagos</TitleSeparator>
        <ContainerPayOrder>
          <TopContainerPayOrder>
            <LeftTopContainerPayOrder>
              <Image
                source={boleto_2}
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
                Boleto da Vivo SA
              </TittleTextRightTopContainer>
              <SubtitleTextRightTopContainer>
                Vencido ontem - Conta paga em 24/08/2020{' '}
              </SubtitleTextRightTopContainer>
            </RightTopContainerPayOrder>
          </TopContainerPayOrder>
          <MiddleContainerParOrder>
            <TextMiddleContainer>
              Este boleto foi pago com atraso, tome mais cuidado na proxima
            </TextMiddleContainer>
          </MiddleContainerParOrder>
          <BottomContainerPayOrder>
            <TittleBottomContainer>R$ 122,25</TittleBottomContainer>
          </BottomContainerPayOrder>
        </ContainerPayOrder>
      </Container>
      <Modalize ref={modalizeRef} modalHeight={600}>
        <View style={{padding: 30}}>
          <TextInput
            style={{marginBottom: 15}}
            label="Usuario"
            value={'@marcelasilva'}
            type="flat"
            disable={true}
          />
          <TextInput
            style={{marginBottom: 15}}
            label="Nome Completo"
            value={'Marcela Silva e Silva'}
            type="flat"
            disable={true}
          />
          <TextInput
            style={{marginBottom: 15}}
            label="CPF"
            value={'801.726.440-20'}
            type="flat"
            disable={true}
          />
          <TextInput
            style={{marginBottom: 10}}
            label="Senha"
            value={'*****************'}
            type="flat"
            disable={true}
          />
          <Button
            style={{marginTop: 10}}
            mode="contained"
            onPress={onOpen}
            color={'#8257E5'}>
            Salvar
          </Button>
        </View>
      </Modalize>
    </ScrollView>
  );
}
