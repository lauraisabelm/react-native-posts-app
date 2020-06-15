// REACT NATIVE
import React from 'react';
import { Animated, Text } from 'react-native';

// LIBS
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Ionicons';

// STYLED & UTILS
import {
  AnimatedIconContainer,
  BlueDot,
  Item,
  LeftContainer,
  MiddleContainer,
  NativeStyles,
  RightContainer,
  Separator,
} from './styles';
import { isIos } from '../../utils/responsive';
import { theme } from '../../utils/theme';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface Props {
  isFavorite: boolean;
  isRead: boolean;
  onPressDelete: (position: number) => void;
  onPressItem: () => void;
  position: number;
  title: string;
}

const PostItem = ({ isFavorite, isRead, onPressDelete, onPressItem, position, title }: Props) => {
  const renderRightActions = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <AnimatedIconContainer onPress={() => onPressDelete(position)}>
        <AnimatedIcon
          name="md-trash"
          size={30}
          color="#fff"
          style={[NativeStyles.animatedIcon, { transform: [{ scale }] }]}
        />
      </AnimatedIconContainer>
    );
  };

  const renderLeftContent = () => {
    if (isRead) {
      return <BlueDot />;
    }
    if (isIos && isFavorite) {
      return <Icon color={theme.yellow} name="ios-star" size={20} />;
    }
    return null;
  };

  const renderRightContent = () => {
    if (isIos) {
      return <Icon color={theme.lightGrey} name="ios-arrow-forward" size={25} />;
    }
    if (isFavorite) {
      return <Icon color={theme.yellow} name="ios-star" size={20} />;
    }
    return null;
  };

  return (
    <>
      <Swipeable
        friction={2}
        leftThreshold={80}
        renderRightActions={renderRightActions}
        rightThreshold={40}
      >
        <Item onPress={onPressItem}>
          <LeftContainer isRead={isRead}>{renderLeftContent()}</LeftContainer>
          <MiddleContainer isFavorite={isFavorite}>
            <Text>{title}</Text>
          </MiddleContainer>
          <RightContainer>{renderRightContent()}</RightContainer>
        </Item>
      </Swipeable>
      <Separator />
    </>
  );
};

export default PostItem;
