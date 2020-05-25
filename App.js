import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Modal, Button, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

// export default class App extends Component{

export default function App(){
  // _handleButtonPress = () => {
  //   setModalVisible(true);
  // };
  
  // setModalVisible = (visible) => {
  //   return visible
  // }

  const [modalVisible, setModalVisible] = useState(false);
  
  // render(){
    
    // var [state,setState] = useState([
    //   {modalVisible: true}
    // ]);
    var todos = ""
    var [todos, setTodos] = useState([
      {text: 'buy coffee', key: '1'}
    ]);

    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};

    var pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
      })
    }

    var submitHandler = (text) => {
      setTodos((prevTodos) => {
        setModalVisible(!modalVisible);
        return  [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }

    return (
      <View style={styles.container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')}}
        >
          <View style={[styles.modals, modalBackgroundStyle]}>
            <View>
              <View style={innerContainerTransparentStyle, styles.a}>
                <AddTodo submitHandler={submitHandler}/>
                <View style={{marginTop:20, marginBottom:20}}>
                  <Button title="Close" color='#ff7e5f' onPress={() => {setModalVisible(!modalVisible)}}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Header />
        <View style={styles.content}>
          {/* <AddTodo submitHandler={submitHandler}/> */}
          <ScrollView style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </ScrollView>
        </View>
        <View style={styles.btnAdd}>
          <ActionButton
            buttonColor="#ff7e5f"
            style={styles.btnAdd}
            onPress={
              () => setModalVisible(true)
            }
          />
        </View>
      </View>
    );
  }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f3',
  },
  content: {
    flex: 8,
    padding: 40,
    paddingTop: 0
  },
  list: {
    marginTop: 20,
  },

  btnAdd: {
    flex: 1,
  },

  modals: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding:10
  },

  a:{
    borderWidth:1,
    borderColor:"#fff",
    backgroundColor:"#fff",
    borderRadius: 20,
    padding:20
  },
});
