import { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { renderButton } from './components/renderButton'

export default function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handlePressNumber = (num) => {
    setCurrentValue((prev) => {
      if (num === '.' && prev.includes('.')) return prev;
      if (prev === '0' && num !== '.') return num;
      return prev + num;
    });
  };

  const handleOperator = (op) => {
    if (currentValue === '') return;
    if (previousValue !== null && operator !== null) {
      handleEqual();
      setOperator(op);
    } else {
      setPreviousValue(currentValue);
      setCurrentValue('');
      setOperator(op);
    }
  };

  const handleEqual = () => {
    if (!operator || previousValue === null || currentValue === '') return;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);
    let result = 0;
    switch (operator) {
      case '+': result = prev + curr; break;
      case '-': result = prev - curr; break;
      case '*': result = prev * curr; break;
      case '/':
        if (curr === 0) {
          result = 'Error';
        } else {
          result = prev / curr;
        }
        break;
      default: break;
    }
    setCurrentValue(result.toString());
    setPreviousValue(null);
    setOperator(null);
  };

  const handleClear = () => {
    setCurrentValue('0');
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>
        Nguyen Van Minh - 22003405 - TK01
      </Text>
      <View style={styles.display}>
        <Text style={styles.displayText}>{currentValue}</Text>
      </View>
      <View style={styles.row}>
        {renderButton('7', () => handlePressNumber('7'))}
        {renderButton('8', () => handlePressNumber('8'))}
        {renderButton('9', () => handlePressNumber('9'))}
        {renderButton('C', handleClear, 'red')}
      </View>
      <View style={styles.row}>
        {renderButton('4', () => handlePressNumber('4'))}
        {renderButton('5', () => handlePressNumber('5'))}
        {renderButton('6', () => handlePressNumber('6'))}
        {renderButton('+', () => handleOperator('+'), 'red')}
      </View>
      <View style={styles.row}>
        {renderButton('1', () => handlePressNumber('1'))}
        {renderButton('2', () => handlePressNumber('2'))}
        {renderButton('3', () => handlePressNumber('3'))}
        {renderButton('-', () => handleOperator('-'), 'red')}
      </View>
      <View style={styles.row}>
        {renderButton('0', () => handlePressNumber('0'))}
        {renderButton('.', () => handlePressNumber('.'))}
        {renderButton('=', handleEqual, 'red')}
        {renderButton('*', () => handleOperator('*'), 'red')}
        {renderButton('/', () => handleOperator('/'), 'red')}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  display: {
    minHeight: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
  },
  displayText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  }
});