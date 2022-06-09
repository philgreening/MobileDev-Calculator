import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,
         Dimensions, SafeAreaView,
         TouchableOpacity } from 'react-native';
import { useState } from 'react';

const screen = Dimensions.get("window");
const btnWidth = screen.width / 4;
const width = screen.width;

export default function App() {

  const [answerValue, setAnswerValue] = useState(0);
  const [readyToReplace, setReadyToReplace] = useState(true)

  const [memoryValue, setMemoryValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState(0);

  function buttonPressed(value) {

    if (Number.isInteger(value)){
      handleNumber(value);
    }
    else if(value === 'C') { // resets value to zero
      setAnswerValue(0);
      setMemoryValue(0);
      setOperatorValue(0);
      setReadyToReplace(true);
    }
    else if(value === '/' || value === 'x' || value === '-' || value === '+') {
      setMemoryValue(answerValue);
      setReadyToReplace(true);
      setOperatorValue(value);
      console.log(operatorValue, memoryValue);
    }
    else if(value === '=') {

    }

  }

  function handleNumber(value) {
    // alert('Called ' + value);
    if(readyToReplace) {
      alert('rtr ' + value );
      setAnswerValue(value);
    }else{
      alert('called');
      setAnswerValue(answerValue.toString() + value.toString());
    }
    return answerValue;
  }

  function calculatesEquals() {
    
  }

  return (
    <View style={[styles.container]}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.number}>{ answerValue }</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.greyButton} onPress={() => buttonPressed('C')}>
            <Text style={styles.buttonTextDark}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greyButton} onPress={() => buttonPressed('+/-')}>
            <Text style={styles.buttonTextDark}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greyButton} onPress={() => buttonPressed('%')}>
            <Text style={styles.buttonTextDark}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('x')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('-')}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.darkButtonLong} onPress={() => buttonPressed(0)}>
            <Text style={styles.buttonLongText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton} onPress={() => buttonPressed('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '3%',
  },
  number: {
    textAlign: 'center',
    color: 'white',
    fontSize: width * 0.2,
    marginRight: '3%',
  },
  row: {
    flexDirection: 'row',
  },
  greyButton: {
    flex: 1,
    backgroundColor: '#a6a6a6',
    height: btnWidth * 0.8,
    borderRadius: btnWidth,
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  blueButton:{
    flex: 1,
    backgroundColor: '#0984e3',
    height: btnWidth * 0.8,
    borderRadius: btnWidth,
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkButton: {
    flex: 1,
    backgroundColor: '#333333',
    height: btnWidth * 0.8,
    borderRadius: btnWidth,
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkButtonLong: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#333333',
    height: btnWidth * 0.8,
    borderRadius: btnWidth,
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonText: {
    fontSize: width * 0.06,
    color: 'white',
  },
  buttonTextDark: {
    fontSize: width * 0.06,
    color: 'black',
  },
  buttonLongText:{
    fontSize: width * 0.06,
    color: 'white',
    left: '40%'
  }
});
