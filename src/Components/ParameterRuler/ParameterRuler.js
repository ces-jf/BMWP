import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const ParameterRuler = ({ score }) => {
  const rulerWidth = 278; // Largura total da régua
  const markerCount = 150; // Número de marcadores
  const markerWidth = rulerWidth / markerCount; // Largura de cada marcador

  return (
    <ImageBackground
      source={require('../../../assets/gradient.png')}
      style={styles.rulerContainer}
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {[...Array(markerCount + 1).keys()].map((index) => {
          const isScoreMarker = index === score;
          return (
            <View
              key={index}
              style={[
                styles.marker,
                {
                  left: index * markerWidth,
                  width: markerWidth, // Largura do marcador
                  height: 47, // Altura fixa igual à da régua
                  backgroundColor: isScoreMarker ? 'white' : 'transparent',
                  borderWidth: isScoreMarker ? 0.5 : 0, // Adicione a borda apenas ao marcador do score
                  borderColor: 'black', // Cor da borda
                },
              ]}
            >
              {isScoreMarker && (
                <Text style={styles.scoreText}>{score}</Text>
              )}
            </View>
          );
        })}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rulerContainer: {
    flexDirection: 'row',
    height: 47,
    marginHorizontal: 20,
    marginTop: 20,
    overflow: 'hidden',
  },
  marker: {
    flex: 1,
    position: 'absolute',
    top: 0,
    justifyContent: 'center', // Alinhar o número ao centro verticalmente
  },
  scoreText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ParameterRuler;