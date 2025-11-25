import { NavBarButton } from "@/components/navBarButton";
import Card from "../components/Card";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Botao } from "@/components/Buttons";

const page = [
  {
    id: `financa`,
    display: `Finanças`,
  },
  {
    id: `calorias`,
    display: `Calorias`,
  },
  {
    id: `creatina`,
    display: `Creatina`,
  },
];

export default function Index() {
  const [pageView, showPage] = useState(page[1]);
  // Cores diferentes para cada botão quando ativo — personalize aqui

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {page.map((p) => (
          <NavBarButton
            active={pageView.id === p.id}
            onPress={() => showPage(p)}
            display={p.display}
            id={p.id}
            key={p.id}
          />
        ))}
      </View>
      {pageView.id === "financa" && (
        <>
          <Card title="Nova Transação">
             <Botao texto="Adicionar Transação" cor="#009689"></Botao>
          </Card>
          <Card title="Histórico">
            <></>
          </Card>
        </>
      )}
      {pageView.id === "calorias" && (
        <Card title="Calculo de IMC">
           <Botao texto="Calcular Agora" cor="#F25000"></Botao>
        </Card>
      )}
      {pageView.id === "creatina" && (
        <Card title="Tomei Creatina Hoje?">
          <></>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#efefef",
    gap: 16,
  },
  navBar: {
    width: `100%`,
    height: `15%`,
    backgroundColor: `#f9fafa`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `flex-end`,
  },
});
