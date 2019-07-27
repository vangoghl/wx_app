import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./menu.less";

export default class Index extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      list: [
        {
          id: 1,
          url: "hongshaorou.jpg",
          title: "牛肉拌面",
          detail: "没分锅贴带一包酱爆",
          num: "678",
          num1: "23",
          money: "22"
        },
        {
          id: 2,
          url: "hongshaorou.jpg",
          title: "牛肉拌面",
          detail: "没分锅贴带一包酱爆",
          num: "678",
          num1: "23",
          money: "22"
        },
        {
          id: 3,
          url: "hongshaorou.jpg",
          title: "牛肉拌面",
          detail: "没分锅贴带一包酱爆",
          num: "678",
          num1: "23",
          money: "22"
        },
        {
          id: 4,
          url: "hongshaorou.jpg",
          title: "牛肉拌面",
          detail: "没分锅贴带一包酱爆",
          num: "678",
          num1: "23",
          money: "22"
        },
        {
          id: 4,
          url: "hongshaorou.jpg",
          title: "牛肉拌面",
          detail: "没分锅贴带一包酱爆",
          num: "678",
          num1: "23",
          money: "22"
        }
      ],
      list2: [
        {
          id: "1",
          name: "热销"
        },
        {
          id: "2",
          name: "折扣"
        },
        {
          id: "3",
          name: "主食"
        },
        {
          id: "4",
          name: "凉菜"
        },
        {
          id: "5",
          name: "荤菜"
        },
        {
          id: "6",
          name: "素菜"
        },
        {
          id: "7",
          name: "汤"
        }
      ]
    };
  }
  render() {
    console.log(this.state.list2);
    return (
      <View className="menuWapper">
        <View className="menuLeft">
          {this.state.list2.map(item => {
            return (
              <Text key={item.id} className="leftText">
                {item.name}
              </Text>
            );
          })}
        </View>
        <View className="menuRight">
          {this.state.list.map(item => {
            return (
              <View className="rightItem item">
                <Image
                  className="itemImg"
                  src={require("../../assets/img/hongshaorou.jpg")}
                />
                <View className="itemText">
                  <Text className="text1">{item.title}</Text>
                  <Text className="text2">{item.detail}</Text>
                  <Text className="text3">
                    月售{item.num} 赞{item.num1}
                  </Text>
                  <View className="itemBottom">
                    <View className="money">
                      <Text className="text4">¥{item.money}</Text>
                    </View>
                    <View className="itemNum">
                      <Image
                        className="itemNumImg"
                        src={require("../../assets/img/jian.png")}
                      />
                      <Text className="itemNumText">3</Text>
                      <Image
                        className="itemNumImg"
                        src={require("../../assets/img/jia.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
