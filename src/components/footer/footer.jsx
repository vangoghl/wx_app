import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

export default class Footer extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    return <View className="footerWapper">footer</View>;
  }
}
