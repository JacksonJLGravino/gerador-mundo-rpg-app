import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../../misc/colors";
import BtnRound from "../../components/BtnRound";
import GeneratorModal from "../../components/GeneratorModal";
import Input from "../../components/Input";
import World from "../../components/World";
import { useNavigation } from "@react-navigation/native";
import { useWorlds } from "../../contexts/WorldProvider";
import BackgroundView from "../../components/backgroundView";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuer, setSearchQuer] = useState("");
  const [resultNotFound, setResultNotFound] = useState(false);
  const { worlds, setWorlds, findWorlds } = useWorlds();

  const navigation = useNavigation();

  const handleOnSubmit = async (
    worldName,
    worldDescription,
    terreno,
    clima,
    caracteristica,
    sociedade,
    dominante,
    politica,
    predominante,
    interRaciais,
    deidade,
    crenca,
    relacaoReligao,
    vestimenta,
    comida,
    festa,
    evento,
    personalidade,
    reliquia,
    grupo,
    conflito,
    questoes,
    criatura,
    vegetacao,
    ecossistema,
    recurso,
    sistema,
    nivel,
    magia
  ) => {
    const time = new Date().getTime();
    const world = {
      id: time,
      worldName,
      worldDescription,
      terreno,
      clima,
      caracteristica,
      sociedade,
      dominante,
      politica,
      predominante,
      interRaciais,
      deidade,
      crenca,
      relacaoReligao,
      vestimenta,
      comida,
      festa,
      evento,
      personalidade,
      reliquia,
      grupo,
      conflito,
      questoes,
      criatura,
      vegetacao,
      ecossistema,
      recurso,
      sistema,
      nivel,
      magia,
      time,
    };
    const addWord = [...worlds, world];
    setWorlds(addWord);
    await AsyncStorage.setItem("worlds", JSON.stringify(addWord));
  };

  const openWorldDetails = (world) => {
    navigation.navigate("WorldDetails", { world });
  };

  const handleOnSearchInput = async (text) => {
    setSearchQuer(text);
    if (!text.trim()) {
      setSearchQuer("");
      setResultNotFound(false);
      return await findWorlds();
    }
    const filteredWorld = worlds.filter((world) => {
      if (world.worldName.toLowerCase().includes(text.toLowerCase())) {
        return world;
      }
    });

    if (filteredWorld.length) {
      setWorlds([...filteredWorld]);
    } else {
      setResultNotFound(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Meus Mundos</Text>
        <View>
          <Input
            value={searchQuer}
            onChangeText={handleOnSearchInput}
            placeholder="Procure seus mundos já criadoados..."
          />
        </View>

        {!worlds.length ? <BackgroundView text="Sem mundo criado" /> : null}

        {resultNotFound ? (
          <BackgroundView text="nenhum mundo encontrado" />
        ) : (
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            data={worlds}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <World onPress={() => openWorldDetails(item)} item={item} />
            )}
          />
        )}

        <View style={styles.btnView}>
          <BtnRound
            btnName="plus"
            onPress={() => setModalVisible(true)}
            colorInside={colors.LIGHT}
            backgroundColor={colors.SECONDARY}
          />
        </View>
      </View>

      <GeneratorModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />

      <View style={{ height: 80, backgroundColor: colors.BACKGROUND }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 20,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.DARK,
  },
  btnView: {
    position: "absolute",
    bottom: 40,
    right: 40,
  },
});
