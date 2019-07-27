import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import Head from "../../components/head/head";
import Tabs from "../../components/tabs/tabs";
import Footer from "../../components/footer/footer";

import "./index.less";

class Index extends Component {
  config = {
    navigationBarTitleText: "四海游龙"
  };

  componentWillReceiveProps() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Head />
        <Tabs />
        <Footer />
      </View>
    );
  }
}

export default Index;
