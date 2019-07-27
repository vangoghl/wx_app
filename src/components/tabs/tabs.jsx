import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import Menu from "../menu/menu";
import "./tabs.less";

export default class Index extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    return (
      <View className="tabs">
        <View className="tabsTitle">
          <View>菜单</View>
          <View>评价</View>
          <View>商家</View>
        </View>
        <View>
          <Menu />
        </View>

        {/* <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View style="background-color: #FAFBFC">
              <Menu />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              标签页二的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              标签页三的内容
            </View>
          </AtTabsPane>
        </AtTabs> */}
      </View>
    );
  }
}
