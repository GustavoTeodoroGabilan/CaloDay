import { View, StyleSheet, Text } from "react-native";

type CardProps = {
  children: React.ReactNode;
  title: string;
};

export default function Card({ children, title }: CardProps) {
  return <View style={styles.cardTrans}>
    <Text style={styles.titleCard}>{title}</Text>
    {children}
    </View>;
}

const styles = StyleSheet.create({
  cardTrans: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#f9fafa",
    width: `90%`,
    borderRadius: 16,
    elevation: 5,
    gap: 14,
  },
   titleCard: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#262626",
  },
});
