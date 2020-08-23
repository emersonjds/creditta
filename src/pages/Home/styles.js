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
  background-color: lightblue;
  justify-content: center;
  align-items: center;
`;

export const ContainerPayOrder = styled.View`
  height: 178px;
  width: 100%;
  border-radius: 6px;
  background-color: #ffffff;
  margin-top: 20px;
  padding: 23px 13px;
  border: 1px solid #cecece;
`;

export const TitleSeparator = styled.Text`
  font-size: 11px;
  line-height: 13px;
  margin-top: 15px;
  color: #666666;
`;

export const TopContainerPayOrder = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftTopContainerPayOrder = styled.View`
  width: 20%;

  /* background-color: red; */
  align-items: flex-start;
  justify-content: center;
`;

export const RightTopContainerPayOrder = styled.View`
  width: 80%;
  height: 50px;
  /* background-color: red; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const TittleTextRightTopContainer = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #454545;
`;

export const SubtitleTextRightTopContainer = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: #666666;
`;

export const MiddleContainerParOrder = styled.View`
  margin-top: 15px;
`;

export const BottomContainerPayOrder = styled.View`
  margin-top: 15px;
  align-items: flex-end;
`;

export const TextMiddleContainer = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
`;

export const TittleBottomContainer = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #666666;
`;
