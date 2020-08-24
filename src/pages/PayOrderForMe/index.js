import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {
  TopContainer,
  Container,
  Title,
  FirstTitle,
  DataBox,
  ContainerDataBox,
  ContainerIcon,
  ContainerDescription,
  ContainerTop,
  TextBillingAccount,
  TitleBilling,
  ContainerTitleCircle,
  Circle,
  TitleContainerTitleCircle,
  ContainerOptionBilling,
} from './styles.js';
import credito from '../../assets/img/credito.png';
import {Button} from 'react-native-paper';
import remove from '../../assets/img/remover.png';
import claro from '../../assets/img/claro.png';
import sabesp from '../../assets/img/sabesp.jpg';
import enel from '../../assets/img/enel.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Modalize} from 'react-native-modalize';
import Modal from 'react-native-modal';

export default function PayOrderForMe() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const modalizeRef = useRef(<Modalize />);
  const [isModalVisible, setModalVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Container>
        <TopContainer>
          <Image source={credito} />
          <FirstTitle>Pagar para mim</FirstTitle>
          <Title>
            Escolha seus boletos e solicite o pagamento. Analizaremos o seu
            pedido e respondemos o seu requerimento.
          </Title>
        </TopContainer>
        <ContainerTitleCircle>
          <Circle />
          <TitleContainerTitleCircle>
            Selecionar Boletos
          </TitleContainerTitleCircle>
        </ContainerTitleCircle>

        <DataBox>
          <ContainerDataBox>
            <ContainerTop>
              <ContainerIcon>
                <Image
                  source={sabesp}
                  style={{
                    width: 50,
                    height: 50,
                    position: 'absolute',
                    resizeMode: 'contain',
                  }}
                />
              </ContainerIcon>
              <ContainerDescription>
                <TitleBilling>Boleto de Sabesp LTDA</TitleBilling>
                <TextBillingAccount>
                  00000.00000 00000.000000 00000.000000 0 00000000000000
                </TextBillingAccount>
              </ContainerDescription>
            </ContainerTop>

            <Button
              mode="contained"
              onPress={onOpen}
              style={{width: 200, marginTop: 20}}>
              Adicionar Boleto
            </Button>
          </ContainerDataBox>
        </DataBox>
        <ContainerTitleCircle>
          <Circle />
          <TitleContainerTitleCircle>
            Data de Pagamento
          </TitleContainerTitleCircle>
        </ContainerTitleCircle>

        <View>
          <Button
            style={{width: 200, marginTop: 20}}
            onPress={showDatepicker}
            mode="contained">
            Agendar
          </Button>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{height: 50, marginTop: 30}}
          />
        )}

        <Button
          style={{
            width: 300,
            marginTop: 20,
            alignSelf: 'center',
            marginTop: 80,
          }}
          onPress={toggleModal}
          mode="contained"
          color={'#27AE60'}>
          Solicitar Pagamento
        </Button>

        <Modalize ref={modalizeRef} snapPoint={220} modalHeight={700}>
          <View style={{padding: 30}}>
            <Text>Boletos Identificados no seu CPF</Text>
            <ContainerTop style={{marginTop: 20}}>
              <ContainerIcon>
                <Image
                  source={sabesp}
                  style={{
                    width: 50,
                    height: 50,
                    position: 'absolute',
                    resizeMode: 'contain',
                  }}
                />
              </ContainerIcon>
              <ContainerDescription>
                <TitleBilling>Boleto de SABESP LTDA</TitleBilling>
                <TextBillingAccount>
                  00000.00000 00000.000000 00000.000000 0 00000000000000
                </TextBillingAccount>
              </ContainerDescription>
            </ContainerTop>

            <ContainerTop style={{marginTop: 20}}>
              <ContainerIcon>
                <Image
                  source={claro}
                  style={{
                    width: 50,
                    height: 50,
                    position: 'absolute',
                    resizeMode: 'contain',
                  }}
                />
              </ContainerIcon>
              <ContainerDescription>
                <TitleBilling>Boleto de ENEL SA</TitleBilling>
                <TextBillingAccount>
                  00000.00000 00000.000000 00000.000000 0 00000000000000
                </TextBillingAccount>
              </ContainerDescription>
            </ContainerTop>

            <ContainerTop style={{marginTop: 20}}>
              <ContainerIcon>
                <Image
                  source={enel}
                  style={{
                    width: 50,
                    height: 50,
                    position: 'absolute',
                    resizeMode: 'contain',
                  }}
                />
              </ContainerIcon>
              <ContainerDescription>
                <TitleBilling>Boleto de SABESP LTDA</TitleBilling>
                <TextBillingAccount>
                  00000.00000 00000.000000 00000.000000 0 00000000000000
                </TextBillingAccount>
              </ContainerDescription>
            </ContainerTop>

            <Button
              onPress={toggleModal}
              mode="contained"
              style={{
                width: 300,
                marginTop: 20,
                alignSelf: 'center',
              }}>
              Selecionar Todos
            </Button>

            <ContainerOptionBilling />
          </View>
        </Modalize>

        <View style={{flex: 1}}>
          <Modal isVisible={isModalVisible}>
            <View
              style={{
                height: 200,
                backgroundColor: '#FFF',
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>
                Tudo certo, iremos analisar os boletos enviados e voce receberá
                o informe por email
              </Text>

              <Button
                title="Hide modal"
                onPress={toggleModal}
                mode="contained"
                style={{
                  width: 300,
                  marginTop: 20,
                  alignSelf: 'center',
                }}>
                Fechar
              </Button>
            </View>
          </Modal>
        </View>
      </Container>
    </>
  );
}
