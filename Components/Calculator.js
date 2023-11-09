import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const result = evaluate(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    }
     else if (value === 'D') {
        let tempData = expression
    setExpression(tempData.slice(0, -1));
  }
    
    else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const renderButtons = () => {
    const buttons = ['=','C', 'D', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0',  '+', '-', '.', '*', '/'];

    return buttons.map((button) => (
      <TouchableOpacity
        key={button}
        style={styles.button}
        onPress={() => handlePress(button)}
      >
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#282c34',
    },
    expression: {
      fontSize: 24,
      color: '#61dafb',
      marginBottom: 10,
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      width: '30%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#61dafb', // Blue button color
      margin: 2,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff', // White text color
    },
  });
  

export default Calculator;
