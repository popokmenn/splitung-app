import { useTheme } from "@ui-kitten/components";
import Text from "components/Text";
import * as  React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  ColorValue,
} from "react-native";

interface Props {
  tabs?: string[];
  style?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  backgroundTab?: string | ColorValue;
  onChangeTab: (index: number) => void;
  tabActive: number;
  disabled?: boolean;
}
const TabBar = ({
  tabs,
  onChangeTab,
  style,
  tabStyle,
  backgroundTab,
  tabActive,
  disabled,
}: Props) => {
  const theme = useTheme();
  const _onChangeTab = React.useCallback(
    (number: number) => {
      onChangeTab(number);
    },
    [onChangeTab]
  );

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: backgroundTab,
          borderColor: theme["text-platinum-color"],
        },
      ]}
    >
      {tabs?.map((item, index) => {
        const backgroundColor = {
          backgroundColor:
            tabActive === index
              ? theme["text-info-color"]
              : theme["transparent"],
        };
        const tintColor = tabActive === index ? "basic" : "platinum";
        return (
          <TouchableOpacity
            onPress={() => _onChangeTab(index)}
            disabled={disabled}
            key={index}
            style={[
              styles.tabStyle,
              // tabActive === index && shadowStyle.shadowBtn,
              tabStyle,
              backgroundColor,
            ]}
          >
            <Text marginVertical={8} status={tintColor} center category="t5-sb">
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 99,
    marginHorizontal: 32,
    marginTop: 32,
    borderWidth: 0.7,
    padding: 4,
  },
  tabStyle: {
    height: 38,
    borderRadius: 99,
    justifyContent: "center",
    flex: 1,
  },
});
