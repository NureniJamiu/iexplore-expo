import { Icon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { Circle, KeyRoundIcon } from "lucide-react-native";
import { StyleSheet } from "react-native";

const RadioButton = ({ children, selectedOption, setSelectedOption }) => {
  return (
    <Box className="py-3">
      <Box style={styles.label}></Box>
      <Icon
        as={selectedOption == children ? KeyRoundIcon : Circle}
        size={24}
        onPress={() => {
          setSelectedOption(children);
        }}
        className="text-yellow"
      />
    </Box>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  label: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
  },
});
