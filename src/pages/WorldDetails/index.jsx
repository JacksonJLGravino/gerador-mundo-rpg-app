import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import BtnRound from "../../components/BtnRound";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useWorlds } from "../../contexts/WorldProvider";
import GeneratorModal from "../../components/GeneratorModal";
import colors from "../../misc/colors";
import BorderlessButton from "../../components/BorderlessButton";
import InfoText from "../../components/InfoText";
import { useNavigation } from "@react-navigation/native";

const formatDate = (time) => {
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

export default function WorldDetails(props) {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [world, setWorld] = useState(props.route.params.world);
  const { setWorlds } = useWorlds();

  const navigation = useNavigation();

  const deleteWorld = async () => {
    const result = await AsyncStorage.getItem("worlds");
    let worlds = [];
    if (result !== null) worlds = JSON.parse(result);

    const newWorlds = worlds.filter((w) => w.id !== world.id);
    setWorlds(newWorlds);
    await AsyncStorage.setItem("worlds", JSON.stringify(newWorlds));
    props.navigation.goBack();
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Você tem certeza?",
      "Isso irá apagar esse mundo permanentemente",
      [
        {
          text: "Sim",
          onPress: deleteWorld,
        },
        {
          text: "Não",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const handleOnClose = () => {
    setShowModal(false);
  };

  const handleUpdate = async (
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
    time
  ) => {
    const result = await AsyncStorage.getItem("worlds");
    let worlds = [];
    if (result !== null) worlds = JSON.parse(result);

    const newWorlds = worlds.filter((w) => {
      if (w.id === world.id) {
        w.worldName = worldName;
        w.worldDescription = worldDescription;
        w.terreno = terreno;
        w.clima = clima;
        w.caracteristica = caracteristica;
        w.sociedade = sociedade;
        w.dominante = dominante;
        w.politica = politica;
        w.predominante = predominante;
        w.interRaciais = interRaciais;
        w.deidade = deidade;
        w.crenca = crenca;
        w.relacaoReligao = relacaoReligao;
        w.vestimenta = vestimenta;
        w.comida = comida;
        w.festa = festa;
        w.evento = evento;
        w.personalidade = personalidade;
        w.reliquia = reliquia;
        w.grupo = grupo;
        w.conflito = conflito;
        w.questoes = questoes;
        w.criatura = criatura;
        w.vegetacao = vegetacao;
        w.ecossistema = ecossistema;
        w.recurso = recurso;
        w.sistema = sistema;
        w.nivel = nivel;
        w.magia = magia;
        w.isUpdated = true;
        w.time = time;

        setWorld(w);
      }
      return w;
    });

    setWorlds(newWorlds);
    await AsyncStorage.setItem("worlds", JSON.stringify(newWorlds));
  };

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {world.isUpdated
          ? `atualizado em ${formatDate(world.time)}`
          : `criado em ${formatDate(world.time)}`}
      </Text>

      <View style={styles.header}>
        <BorderlessButton
          btnName="arrow-left"
          size={24}
          color={colors.DARK}
          onPress={navigation.goBack}
        />
        <Text style={styles.headerText}>{world.worldName}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <InfoText title="Descrição:" desc={world.worldDescription} />

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Geografia:</Text>
          <InfoText title="Tipo de Terreno:" desc={world.terreno} />
          <InfoText title="Clima:" desc={world.clima} />
          <InfoText
            title="Característica Geográfica Especial:"
            desc={world.caracteristica}
          />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Sociedade:</Text>
          <InfoText title="Tipo de Sociedade:" desc={world.sociedade} />
          <InfoText title="Organização Política:" desc={world.dominante} />
          <InfoText title="Raça Dominante:" desc={world.politica} />
          <InfoText title="Raça Predominante:" desc={world.predominante} />
          <InfoText title="Relações Inter-raciais:" desc={world.interRaciais} />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Religião e Crença:</Text>
          <InfoText title="Deidade:" desc={world.deidade} />
          <InfoText
            title="Principal Crença e Prática Religiosa:"
            desc={world.crenca}
          />
          <InfoText
            title="Relação entre as Religiões:"
            desc={world.relacaoReligao}
          />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Cultura e Tradições:</Text>
          <InfoText title="Vestimenta Típica:" desc={world.vestimenta} />
          <InfoText title="Comida e Bebida:" desc={world.comida} />
          <InfoText title="Feriados e Festivais:" desc={world.festa} />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>História de Fundo:</Text>
          <InfoText
            title="Evento Histórico Significativo:"
            desc={world.evento}
          />
          <InfoText
            title="Figura Histórica Importante:"
            desc={world.personalidade}
          />
          <InfoText
            title="Artefatos Mágicos ou Relíquias Antigas:"
            desc={world.reliquia}
          />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Política e Conflito:</Text>
          <InfoText title="Principais Grupos Políticos:" desc={world.grupo} />
          <InfoText title="Conflito em Andamento:" desc={world.conflito} />
          <InfoText
            title="Questão Política Importante:"
            desc={world.questoes}
          />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Ecologia e Criaturas:</Text>
          <InfoText title="Criatura Lendária:" desc={world.criatura} />
          <InfoText title="Vegetação Única:" desc={world.vegetacao} />
          <InfoText title="Ecossistemas Únicos:" desc={world.ecossistema} />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Economia e Recursos:</Text>
          <InfoText title="Principal Recurso Natural:" desc={world.recurso} />
          <InfoText title="Moeda e Sistema Econômico:" desc={world.sistema} />
        </View>

        <View style={styles.generatorContainer}>
          <Text style={styles.legend}>Tecnologia e Magia:</Text>
          <InfoText title="Níveis de Tecnologia:" desc={world.nivel} />
          <InfoText title="Sistema de Magia:" desc={world.magia} />
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <BtnRound
          colorInside={colors.LIGHT}
          backgroundColor={colors.SECONDARY}
          btnName="pencil-alt"
          onPress={openEditModal}
        />
        <BtnRound
          backgroundColor={colors.DANGER}
          colorInside={colors.LIGHT}
          btnName="trash"
          onPress={displayDeleteAlert}
        />
      </View>

      <GeneratorModal
        isEdit={isEdit}
        world={world}
        closeModal={handleOnClose}
        onSubmit={handleUpdate}
        visible={showModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.BACKGROUND,
  },
  date: {
    position: "absolute",
    right: 10,
    fontSize: 12,
    color: colors.LIGHT,
    fontWeight: "300",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttons: {
    position: "absolute",
    bottom: 40,
    right: 40,
    gap: 20,
  },

  generatorContainer: {
    marginTop: 8,
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.SECONDARY,
    gap: 4,
  },
  legend: {
    position: "absolute",
    top: -11,
    left: 10,
    backgroundColor: colors.BACKGROUND,
    borderRadius: 100,
    color: colors.SECONDARY,
  },
});
