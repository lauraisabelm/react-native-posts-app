// LIBS
import styled from 'styled-components/native';

// UTILS
import { theme } from '../../utils/theme';
import { isIos, responsiveSize } from '../../utils/responsive';

export const Body = styled.Text({
  color: theme.grey,
  fontSize: 16,
  lineHeight: '22px',
});

export const Item = styled.View({
  padding: responsiveSize(15),
});

export const Separator = styled.View({
  alignSelf: 'flex-end',
  backgroundColor: theme.gainsboro,
  height: 1,
  width: isIos ? '95%' : '100%',
});
