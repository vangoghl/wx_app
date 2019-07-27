import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./head.less";
import { AtTag } from "taro-ui";
// import { AtTabs, AtTabsPane } from "taro-ui";

class Head extends Component {
  state = {
    current: 0
  };
  render() {
    return (
      <View className="head">
        <Image className="img" src={require("../../assets/img/long.jpeg")} />
        <View>
          <View className="headContent">
            <View className="leftText">
              <View>配送约54分钟</View>
              <View>公告：四海游龙，为你而来。</View>
            </View>
            <View className="rightBtn">关注</View>
          </View>
          {/* <View>
            <AtTabs
              current={this.state.current}
              tabList={tabList}
              onClick={this.handleClick.bind(this)}
            >
              <AtTabsPane current={this.state.current} index={0}>
                <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
                  标签页一的内容
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
            </AtTabs>
          </View> */}

          <View className="tag">
            <View className="tag_1">
              <AtTag name="tagText" type="primary" size="small">
                28减2
              </AtTag>
            </View>
            <View className="tag_1">
              <AtTag name="tagText" type="primary" size="small">
                28减2
              </AtTag>
            </View>
            <View className="tag_1">
              <AtTag name="tagText" type="primary" type="primary" size="small">
                28减2
              </AtTag>
            </View>
            <View className="tag_1">
              <AtTag name="tagText" type="primary" size="small">
                28减2
              </AtTag>
            </View>

            <Image
              className="qianjin"
              src={require("../../assets/img/qian.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Head;
