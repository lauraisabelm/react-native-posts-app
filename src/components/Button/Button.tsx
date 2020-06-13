// REACT NATIVE
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// LIBS
import ActionButton from 'react-native-action-button';

// STYLES
import { Title, Container } from './styles';
import { theme } from '../../utils/theme';
import { isIos } from '../../utils/responsive';

interface Props {
  color: string;
  name: string;
  width: number | string;
}

const Button = ({ color, name, width }: Props) => {
  if (isIos) {
    return (
      <Container backgroundColor={color} width={width}>
        <Title>{name}</Title>
      </Container>
    );
  }
  /*
  return (
    <ActionButton
      buttonColor={theme.red}
      onPress={}
      renderIcon={() => (
        <Icon color={blank0} name="md-locate" style={styles.actionButtonIcon} />
      )}
    />
  ); */
};

export default Button;
