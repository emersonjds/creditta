import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #cecece;
  padding: 15px 20px;
`;

export const TopContainer = styled.View`
  padding: 20px;
  width: 100%;
  background-color: yellow;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const BottomContainer = styled.View`
  padding: 15px;
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftContainerBottom = styled.View`
  height: 120px;
  width: 48%;
  background-color: yellow;
  align-items: center;
  justify-content: center;
`;

export const RightContainerBottom = styled.View`
  height: 120px;
  width: 48%;
  background-color: yellow;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtonsActions = styled.View`
  background-color: pink;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonAccount = styled.TouchableOpacity`
  height: 118px;
  width: 184px;
  border-radius: 4px;
  background-color: #cecece;
  justify-content: center;
  align-items: center;
`;

export const ContainerPayOrder = styled.View`
  height: 178px;
  width: 100%;
  border-radius: 6px;
  background-color: #ffffff;
  margin-top: 20px;
`;
