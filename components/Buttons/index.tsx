import { Pressable, Text, StyleSheet } from "react-native";

export const Botao = ({ texto, cor }: { texto: string; cor: string }) => {
  return (
    <Pressable style={[styles.botaoAddTrans, {backgroundColor: cor}]}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  botaoAddTrans: {
    backgroundColor: `#009689`,
    borderRadius: 12,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    padding: 10,
  },
  textoBotao: {
    color: `#f9fafa`,
    fontFamily: `Poppins`,
    fontWeight: `bold`,
    textAlign: `center`,
    fontSize: 14,
  },
});
