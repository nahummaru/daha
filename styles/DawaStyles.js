import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5%;
`;

export const Card = styled.View`
    background-color: #f8f8f8;
    width: 50%;
    margin-bottom: 10px;
    border-radius: 5%;
    padding: 10px;
`;


export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const TopLevel = styled.View`
    flex-direction: row;
    justify-content: flex-start;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;

`;

export const PostDist = styled.Text`
    font-size: 12px;
    color: #666;
`;

export const StateText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #b22222;
`;

export const PostText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 5%; 
    border-radius: 10%;
    margin-bottom: 5%;
`;


export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-self: flex-start;

`;

export const LocationWrapper = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-self: flex-start;
    

`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: 'transparent';

`;

export const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.active ? '#a5353a' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;

