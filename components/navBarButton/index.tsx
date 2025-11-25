import { StyleSheet, Text, Pressable } from "react-native";

export const NavBarButton = ({
  active,
  onPress,
  display,
  id,
}: {
  active: boolean;
  onPress: () => void;
  display: string;
  id: string;
}) => {
  const activeTextColors: Record<string, string> = {
    financa: `#00BC86`,
    calorias: `#E76F51`,
    creatina: `#6688EF`,
  };

  return (
    <Pressable
      style={[
        active
          ? [
              styles.navBarButtonActive,
              { borderBottomColor: activeTextColors[id] },
            ]
          : null,
        styles.navBarButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.navBarButtonText,
          active && {
            color: activeTextColors[id] || styles.navBarButtonTextActive.color,
          },
        ]}
      >
        {display}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  navBarButton: {
    width: `33%`,
    height: `60%`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  navBarButtonActive: {
    borderBottomColor: `#00BC86`,
    borderBottomWidth: 5,
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 3,
  },
  navBarButtonText: {
    fontSize: 13,
    color: `#262626`,
    padding: 8,
    fontWeight: `bold`,
  },
  navBarButtonTextActive: {
    color: "#00BC86",
    fontWeight: `bold`,
  },
});
