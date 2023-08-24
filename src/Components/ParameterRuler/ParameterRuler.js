import React from 'react';
import { View, StyleSheet } from 'react-native';

const ParameterRuler = () => {
    const colors = [
      '#FF0000', // Vermelho
      '#FFA500', // Laranja
      '#FFFF00', // Amarelo
      '#00FF00', // Verde
      '#0000FF', // Azul
    ];
  
    return (
      <View style={styles.rulerContainer}>
        {colors.map((color, index) => (
          <View
            key={index}
            style={{ flex: 1, backgroundColor: color }}
          />
        ))}
      </View>
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
});

export default ParameterRuler;
