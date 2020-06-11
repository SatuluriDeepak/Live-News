import React, { Component } from 'react';
import { Container, Header,ScrollableTab, Content, Tab, Tabs ,Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header  hasTabs >
          <Left/>
            <Body>
              <Title>Daily News</Title>
            </Body>
            <Right />
        </Header>
    <Tabs renderTabBar={()=> <ScrollableTab />}tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab heading="Politics">
            <Tab1 />
          </Tab>
          <Tab heading="Business">
            <Tab2 />
          </Tab>
          <Tab heading="Sports">
            <Tab3 />
          </Tab>
          <Tab heading="Technology">
            <Tab4 />
          </Tab>
          <Tab heading="Entertainment">
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}
export default TabsExample;