import React, { useEffect, useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import BorderlessButton from "../BorderlessButton";
import Input from "../Input";
import BtnRound from "../BtnRound";
import randomTable from "../../misc/randomTable";
import colors from "../../misc/colors";
import TextRandom from "../TextRandom";

export default function GeneratorModal({
  visible,
  closeModal,
  onSubmit,
  world,
  isEdit,
}) {
  const [worldName, setWorldName] = useState("");
  const [worldDescription, setWorldDescription] = useState("");

  const [terreno, setTerreno] = useState("");
  const [clima, setClima] = useState("");
  const [caracteristica, setCaracteristica] = useState("");

  const [sociedade, setSociedade] = useState("");
  const [dominante, setDominante] = useState("");
  const [politica, setPolitica] = useState("");
  const [predominante, setPredominante] = useState("");
  const [interRaciais, setInterRaciais] = useState("");

  const [deidade, setDeidade] = useState("");
  const [crenca, setCrenca] = useState("");
  const [relacaoReligao, setRelacaoReligiao] = useState("");

  const [vestimenta, setVestimenta] = useState("");
  const [comida, setComida] = useState("");
  const [festa, setfesta] = useState("");

  const [evento, setEvento] = useState("");
  const [personalidade, setPersonalidade] = useState("");
  const [reliquia, setReliquia] = useState("");

  const [grupo, setGrupo] = useState("");
  const [conflito, setConflito] = useState("");
  const [questoes, setQuestoes] = useState("");

  const [criatura, setCriatura] = useState("");
  const [vegetacao, setVegetacao] = useState("");
  const [ecossistema, setEcossistema] = useState("");

  const [recurso, setRecurso] = useState("");
  const [sistema, setSistema] = useState("");

  const [nivel, setNivel] = useState("");
  const [magia, setMagia] = useState("");

  const handleCloseModal = () => {
    if (!isEdit) {
      setWorldName("");
      setWorldDescription("");
      setTerreno("");
      setClima("");
      setCaracteristica("");
      setSociedade("");
      setPolitica("");
      setDominante("");
      setPredominante("");
      setInterRaciais("");
      setDeidade("");
      setCrenca("");
      setRelacaoReligiao("");
      setVestimenta("");
      setComida("");
      setfesta("");
      setEvento("");
      setPersonalidade("");
      setReliquia("");
      setGrupo("");
      setConflito("");
      setQuestoes("");
      setCriatura("");
      setVegetacao("");
      setEcossistema("");
      setRecurso("");
      setSistema("");
      setNivel("");
      setMagia("");
    }
    closeModal();
  };

  const handleSubmit = () => {
    if (isEdit) {
      onSubmit(
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
        Date.now()
      );
    } else {
      onSubmit(
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
      );
      setWorldName("");
      setWorldDescription("");
      setTerreno("");
      setClima("");
      setCaracteristica("");
      setSociedade("");
      setPolitica("");
      setDominante("");
      setPredominante("");
      setInterRaciais("");
      setDeidade("");
      setCrenca("");
      setRelacaoReligiao("");
      setVestimenta("");
      setComida("");
      setfesta("");
      setEvento("");
      setPersonalidade("");
      setReliquia("");
      setGrupo("");
      setConflito("");
      setQuestoes("");
      setCriatura("");
      setVegetacao("");
      setEcossistema("");
      setRecurso("");
      setSistema("");
      setNivel("");
      setMagia("");
    }
    closeModal();
  };

  const handleRandom = () => {
    setTerreno(
      randomTable.GEOGRAFIA.TERRENO[
        Math.floor(Math.random() * randomTable.GEOGRAFIA.TERRENO.length)
      ]
    );
    setClima(
      randomTable.GEOGRAFIA.CLIMA[
        Math.floor(Math.random() * randomTable.GEOGRAFIA.CLIMA.length)
      ]
    );
    setCaracteristica(
      randomTable.GEOGRAFIA.CARACTERISTICA[
        Math.floor(Math.random() * randomTable.GEOGRAFIA.CARACTERISTICA.length)
      ]
    );
    setSociedade(
      randomTable.SOCIEDADE.TIPO_SOCIEDADE[
        Math.floor(Math.random() * randomTable.SOCIEDADE.TIPO_SOCIEDADE.length)
      ]
    );
    setPolitica(
      randomTable.SOCIEDADE.POLITICA[
        Math.floor(Math.random() * randomTable.SOCIEDADE.POLITICA.length)
      ]
    );
    setDominante(
      randomTable.SOCIEDADE.DOMINANTE[
        Math.floor(Math.random() * randomTable.SOCIEDADE.DOMINANTE.length)
      ]
    );
    setPredominante(
      randomTable.SOCIEDADE.PREDOMINANTE[
        Math.floor(Math.random() * randomTable.SOCIEDADE.PREDOMINANTE.length)
      ]
    );
    setInterRaciais(
      randomTable.SOCIEDADE.RELACOES[
        Math.floor(Math.random() * randomTable.SOCIEDADE.RELACOES.length)
      ]
    );
    setDeidade(
      randomTable.RELIGIAO.DEIDADE[
        Math.floor(Math.random() * randomTable.RELIGIAO.DEIDADE.length)
      ]
    );
    setCrenca(
      randomTable.RELIGIAO.CRENCA[
        Math.floor(Math.random() * randomTable.RELIGIAO.CRENCA.length)
      ]
    );
    setRelacaoReligiao(
      randomTable.RELIGIAO.RELACOES[
        Math.floor(Math.random() * randomTable.RELIGIAO.RELACOES.length)
      ]
    );
    setVestimenta(
      randomTable.CULTURA.VESTIMENTA[
        Math.floor(Math.random() * randomTable.CULTURA.VESTIMENTA.length)
      ]
    );
    setComida(
      randomTable.CULTURA.COMIDA[
        Math.floor(Math.random() * randomTable.CULTURA.COMIDA.length)
      ]
    );
    setfesta(
      randomTable.CULTURA.FESTA[
        Math.floor(Math.random() * randomTable.CULTURA.FESTA.length)
      ]
    );
    setEvento(
      randomTable.HISTORIA.EVENTO[
        Math.floor(Math.random() * randomTable.HISTORIA.EVENTO.length)
      ]
    );
    setPersonalidade(
      randomTable.HISTORIA.PERSONALIDADE[
        Math.floor(Math.random() * randomTable.HISTORIA.PERSONALIDADE.length)
      ]
    );
    setReliquia(
      randomTable.HISTORIA.RELIQUIA[
        Math.floor(Math.random() * randomTable.HISTORIA.RELIQUIA.length)
      ]
    );
    setGrupo(
      randomTable.POLITICA.GRUPOS[
        Math.floor(Math.random() * randomTable.POLITICA.GRUPOS.length)
      ]
    );
    setConflito(
      randomTable.POLITICA.CONFLITOS[
        Math.floor(Math.random() * randomTable.POLITICA.CONFLITOS.length)
      ]
    );
    setQuestoes(
      randomTable.POLITICA.QUESTOES[
        Math.floor(Math.random() * randomTable.POLITICA.QUESTOES.length)
      ]
    );
    setCriatura(
      randomTable.ECOLOGIA.CRIATURA[
        Math.floor(Math.random() * randomTable.ECOLOGIA.CRIATURA.length)
      ]
    );
    setVegetacao(
      randomTable.ECOLOGIA.VEGETACAO_UNICA[
        Math.floor(Math.random() * randomTable.ECOLOGIA.VEGETACAO_UNICA.length)
      ]
    );
    setEcossistema(
      randomTable.ECOLOGIA.ECOSSISTEMA[
        Math.floor(Math.random() * randomTable.ECOLOGIA.ECOSSISTEMA.length)
      ]
    );
    setRecurso(
      randomTable.ECONOMIA.RECURSOS[
        Math.floor(Math.random() * randomTable.ECONOMIA.RECURSOS.length)
      ]
    );
    setSistema(
      randomTable.ECONOMIA.SISTEMA[
        Math.floor(Math.random() * randomTable.ECONOMIA.SISTEMA.length)
      ]
    );
    setNivel(
      randomTable.TECNOLOGIA.NIVEL[
        Math.floor(Math.random() * randomTable.TECNOLOGIA.NIVEL.length)
      ]
    );
    setMagia(
      randomTable.TECNOLOGIA.MAGIA[
        Math.floor(Math.random() * randomTable.TECNOLOGIA.MAGIA.length)
      ]
    );
  };

  useEffect(() => {
    if (isEdit) {
      setWorldName(world.worldName);
      setWorldDescription(world.worldDescription);
      setTerreno(world.terreno);
      setClima(world.clima);
      setCaracteristica(world.caracteristica);
      setSociedade(world.sociedade);
      setPolitica(world.politica);
      setDominante(world.dominante);
      setPredominante(world.predominante);
      setInterRaciais(world.interRaciais);
      setDeidade(world.deidade);
      setCrenca(world.crenca);
      setRelacaoReligiao(world.relacaoReligao);
      setVestimenta(world.vestimenta);
      setComida(world.comida);
      setfesta(world.festa);
      setEvento(world.evento);
      setPersonalidade(world.personalidade);
      setReliquia(world.reliquia);
      setGrupo(world.grupo);
      setConflito(world.conflito);
      setQuestoes(world.questoes);
      setCriatura(world.criatura);
      setVegetacao(world.vegetacao);
      setEcossistema(world.ecossistema);
      setRecurso(world.recurso);
      setSistema(world.sistema);
      setNivel(world.nivel);
      setMagia(world.magia);
    }
  }, [isEdit]);

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <View>
          <BorderlessButton
            btnName="arrow-left"
            onPress={handleCloseModal}
            size={24}
            color={colors.LIGHT}
          />
        </View>

        <Input
          value={worldName}
          placeholder="Nome do Mundo"
          onChangeText={(text) => setWorldName(text)}
        />
        <ScrollView style={{ marginTop: 10 }}>
          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Geografia:</Text>

            <TextRandom
              title="tipo de terreno:"
              text={terreno}
              onPress={() =>
                setTerreno(
                  randomTable.GEOGRAFIA.TERRENO[
                    Math.floor(
                      Math.random() * randomTable.GEOGRAFIA.TERRENO.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="clima:"
              text={clima}
              onPress={() =>
                setClima(
                  randomTable.GEOGRAFIA.CLIMA[
                    Math.floor(
                      Math.random() * randomTable.GEOGRAFIA.CLIMA.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Característica Geográfica Especial"
              text={caracteristica}
              onPress={() =>
                setCaracteristica(
                  randomTable.GEOGRAFIA.CARACTERISTICA[
                    Math.floor(
                      Math.random() *
                        randomTable.GEOGRAFIA.CARACTERISTICA.length
                    )
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Sociedade:</Text>

            <TextRandom
              title="Tipo de Sociedade:"
              text={sociedade}
              onPress={() =>
                setSociedade(
                  randomTable.SOCIEDADE.TIPO_SOCIEDADE[
                    Math.floor(
                      Math.random() *
                        randomTable.SOCIEDADE.TIPO_SOCIEDADE.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Organização Política:"
              text={politica}
              onPress={() =>
                setPolitica(
                  randomTable.SOCIEDADE.POLITICA[
                    Math.floor(
                      Math.random() * randomTable.SOCIEDADE.POLITICA.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Raça Dominante:"
              text={dominante}
              onPress={() =>
                setDominante(
                  randomTable.SOCIEDADE.DOMINANTE[
                    Math.floor(
                      Math.random() * randomTable.SOCIEDADE.DOMINANTE.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Raça Predominante:"
              text={predominante}
              onPress={() =>
                setPredominante(
                  randomTable.SOCIEDADE.PREDOMINANTE[
                    Math.floor(
                      Math.random() * randomTable.SOCIEDADE.PREDOMINANTE.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Relações Inter-raciais:"
              text={interRaciais}
              onPress={() =>
                setInterRaciais(
                  randomTable.SOCIEDADE.RELACOES[
                    Math.floor(
                      Math.random() * randomTable.SOCIEDADE.RELACOES.length
                    )
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Religião e Crença:</Text>

            <TextRandom
              title="Deidade:"
              text={deidade}
              onPress={() =>
                setDeidade(
                  randomTable.RELIGIAO.DEIDADE[
                    Math.floor(
                      Math.random() * randomTable.RELIGIAO.DEIDADE.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Principal Crença e Prática Religiosa:"
              text={crenca}
              onPress={() =>
                setCrenca(
                  randomTable.RELIGIAO.CRENCA[
                    Math.floor(
                      Math.random() * randomTable.RELIGIAO.CRENCA.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Relação entre as Religiões:"
              text={relacaoReligao}
              onPress={() =>
                setRelacaoReligiao(
                  randomTable.RELIGIAO.RELACOES[
                    Math.floor(
                      Math.random() * randomTable.RELIGIAO.RELACOES.length
                    )
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Cultura e Tradições:</Text>

            <TextRandom
              title="Vestimenta Típica:"
              text={vestimenta}
              onPress={() =>
                setVestimenta(
                  randomTable.CULTURA.VESTIMENTA[
                    Math.floor(
                      Math.random() * randomTable.CULTURA.VESTIMENTA.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Comida e Bebida:"
              text={comida}
              onPress={() =>
                setComida(
                  randomTable.CULTURA.COMIDA[
                    Math.floor(
                      Math.random() * randomTable.CULTURA.COMIDA.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Feriados e Festivais:"
              text={festa}
              onPress={() =>
                setfesta(
                  randomTable.CULTURA.FESTA[
                    Math.floor(Math.random() * randomTable.CULTURA.FESTA.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>História de Fundo:</Text>

            <TextRandom
              title="Evento Histórico Significativo:"
              text={evento}
              onPress={() =>
                setEvento(
                  randomTable.HISTORIA.EVENTO[
                    Math.floor(
                      Math.random() * randomTable.HISTORIA.EVENTO.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Figura Histórica Importante:"
              text={personalidade}
              onPress={() =>
                setPersonalidade(
                  randomTable.HISTORIA.PERSONALIDADE[
                    Math.floor(
                      Math.random() * randomTable.HISTORIA.PERSONALIDADE.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Artefatos Mágicos ou Relíquias Antigas:"
              text={reliquia}
              onPress={() =>
                setReliquia(
                  randomTable.HISTORIA.RELIQUIA[
                    Math.floor(
                      Math.random() * randomTable.HISTORIA.RELIQUIA.length
                    )
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Política e Conflito:</Text>

            <TextRandom
              title="Principais Grupos Políticos:"
              text={grupo}
              onPress={() =>
                setGrupo(
                  randomTable.POLITICA.GRUPOS[
                    Math.floor(
                      Math.random() * randomTable.POLITICA.GRUPOS.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Conflito em Andamento:"
              text={conflito}
              onPress={() =>
                setConflito(
                  randomTable.POLITICA.CONFLITOS[
                    Math.floor(
                      Math.random() * randomTable.POLITICA.CONFLITOS.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Questão Política Importante:"
              text={questoes}
              onPress={() =>
                setQuestoes(
                  randomTable.POLITICA.QUESTOES[
                    Math.floor(
                      Math.random() * randomTable.POLITICA.QUESTOES.length
                    )
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Ecologia e Criaturas:</Text>

            <TextRandom
              title="Criatura Lendária:"
              text={criatura}
              onPress={() =>
                setCriatura(
                  randomTable.ECOLOGIA.CRIATURA[
                    Math.floor(
                      Math.random() * randomTable.ECOLOGIA.CRIATURA.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Vegetação Única:"
              text={vegetacao}
              onPress={() =>
                setVegetacao(
                  randomTable.ECOLOGIA.VEGETACAO_UNICA[
                    Math.floor(
                      Math.random() *
                        randomTable.ECOLOGIA.VEGETACAO_UNICA.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Ecossistemas Únicos:"
              text={ecossistema}
              onPress={() =>
                setEcossistema(
                  randomTable.ECOLOGIA.ECOSSISTEMA[
                    Math.floor(
                      Math.random() * randomTable.ECOLOGIA.ECOSSISTEMA.length
                    )
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Economia e Recursos:</Text>

            <TextRandom
              title="Principal Recurso Natural:"
              text={recurso}
              onPress={() =>
                setRecurso(
                  randomTable.ECONOMIA.RECURSOS[
                    Math.floor(
                      Math.random() * randomTable.ECONOMIA.RECURSOS.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Moeda e Sistema Econômico:"
              text={sistema}
              onPress={() =>
                setSistema(
                  randomTable.ECONOMIA.SISTEMA[
                    Math.floor(
                      Math.random() * randomTable.ECONOMIA.SISTEMA.length
                    )
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Tecnologia e Magia:</Text>

            <TextRandom
              title="Níveis de Tecnologia:"
              text={nivel}
              onPress={() =>
                setNivel(
                  randomTable.TECNOLOGIA.NIVEL[
                    Math.floor(
                      Math.random() * randomTable.TECNOLOGIA.NIVEL.length
                    )
                  ]
                )
              }
            />

            <TextRandom
              title="Sistema de Magia:"
              text={magia}
              onPress={() =>
                setMagia(
                  randomTable.TECNOLOGIA.MAGIA[
                    Math.floor(
                      Math.random() * randomTable.TECNOLOGIA.MAGIA.length
                    )
                  ]
                )
              }
            />
          </View>
        </ScrollView>

        <Input
          value={worldDescription}
          numberOfLines={6}
          textAlignVertical={"top"}
          placeholder="Descrição do mundo...."
          onChangeText={(text) => setWorldDescription(text)}
        />

        <View style={styles.buttons}>
          <BtnRound
            colorInside={colors.LIGHT}
            backgroundColor={colors.BLUE_200}
            btnName="dice-d20"
            onPress={handleRandom}
          />
          {worldName.trim() ? (
            <BtnRound
              backgroundColor={colors.GREEN_200}
              colorInside={colors.LIGHT}
              btnName="save"
              onPress={handleSubmit}
            />
          ) : null}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.DARK,
  },
  generatorContainer: {
    marginTop: 8,
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.BLUE_200,
    gap: 4,
  },
  legend: {
    position: "absolute",
    top: -11,
    left: 10,
    backgroundColor: colors.DARK,
    borderRadius: 100,
    color: colors.LIGHT,
  },
  buttons: {
    position: "absolute",
    bottom: 40,
    right: 40,
    gap: 20,
  },
});
