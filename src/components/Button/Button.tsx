// REACT NATIVE
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// LIBS
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

// STYLES
import { Container, Title } from './styles';
import { isIos } from '../../utils/responsive';
import { theme } from '../../utils/theme';

interface Props {
  color: string;
  iconName: string;
  name: string;
  width: number | string;
}

const Button = ({ color, iconName, name, width }: Props) => {
  if (isIos) {
    return (
      <Container backgroundColor={color} width={width}>
        <Title>{name}</Title>
      </Container>
    );
  }

  return (
    <ActionButton
      buttonColor={color}
      onPress={() => {}}
      renderIcon={() => <Icon color={theme.white} name={iconName} size={25} />}
    />
  );
};

export default Button;
