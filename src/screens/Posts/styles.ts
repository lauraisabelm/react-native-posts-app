// LIBS
import styled from 'styled-components/native';

// UTILS
import { theme } from '../../utils/theme';
import { isIos } from '../../utils/responsive';

export const Container = styled.View({
  backgroundColor: isIos ? theme.whiteSmoke : theme.gray98,
  flex: 1,
  width: '100%',
});

export const MainContainer = styled.SafeAreaView({
  backgroundColor: theme.red,
  flex: 1,
});
