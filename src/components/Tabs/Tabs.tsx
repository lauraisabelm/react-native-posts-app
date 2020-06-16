import React, { Component } from 'react';
import { ActiveTab, MainContainerTabs, NativeStyles, TabContainer, Title } from './styles';
import { isIos } from '../../utils/responsive';

interface Props {
  containerStyle?: object;
  items: any;
  onChangeIndex: (index: number) => void;
  selectedIndex: number;
}

type Item = {
  title: string;
  width: number;
};

class Tabs extends Component<Props> {
  isSelected = (selectedIndex: number, selfIndex: number) =>
    selectedIndex === selfIndex ? ActiveTab : {};

  onPressTab = (newIndex: number) => {
    const { selectedIndex, onChangeIndex } = this.props;
    if (newIndex !== selectedIndex) {
      onChangeIndex(newIndex);
    }
  };

  render() {
    const { items, selectedIndex, containerStyle } = this.props;

    return (
      <MainContainerTabs key={selectedIndex} style={[NativeStyles.shadow, containerStyle]}>
        {items.map((item: Item, index: number) => (
          <TabContainer
            activeOpacity={1}
            key={index}
            onPress={() => this.onPressTab(index)}
            tabWidth={item.width}
            style={this.isSelected(selectedIndex, index)}
          >
            <Title selected={selectedIndex === index}>
              {isIos ? item.title : item.title.toUpperCase()}
            </Title>
          </TabContainer>
        ))}
      </MainContainerTabs>
    );
  }
}

export default Tabs;
