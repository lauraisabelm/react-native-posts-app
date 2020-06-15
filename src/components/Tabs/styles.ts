import styled from 'styled-components/native';
import { TextProps, ViewProps } from 'react-native';
import { theme } from '../../utils/theme';
import { isIos, responsiveSize } from '../../utils/responsive';

export const ActiveTab = {
  backgroundColor: isIos ? theme.green : null,
  borderBottomColor: isIos ? null : theme.white,
  borderBottomWidth: 2,
};

type TabContainerProps = {
  tabWidth: number;
} & ViewProps;

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';

export const TabContainer = styled.TouchableOpacity(({ tabWidth }: TabContainerProps) => ({
  borderColor: isIos ? theme.green : theme.transparent,
  borderRadius: responsiveSize(isIos ? 8 : 0),
  borderWidth: isIos ? 1 : 0,
  height: responsiveSize(isIos ? 38 : 45),
  justifyContent: 'center' as JustifyContent,
  width: `${isIos ? tabWidth - 5 : tabWidth}%`,
}));

export const MainContainerTabs = styled.View({
  alignItems: 'center',
  backgroundColor: isIos ? theme.whiteSmoke : theme.green,
  flexDirection: 'row',
  height: responsiveSize(45),
  justifyContent: 'center',
  width: '100%',
});

type TitleProps = {
  selected: boolean;
} & TextProps;

type TextAlign = 'left' | 'right' | 'center' | 'justify';

export const Title = styled.Text(({ selected }: TitleProps) => ({
  color: isIos && !selected ? theme.green : theme.white,
  fontSize: isIos ? 17 : 14,
  textAlign: 'center' as TextAlign,
}));
