import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  inputBox: {
    position: 'relative',
  },
  search: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  inputHome: {
    marginBottom: 20,
    paddingLeft: 35,
    paddingRight: 5,
    paddingVertical: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(150, 150, 150)',
  },
  buttonAdd: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    paddingVertical: 5,
    borderBottomColor: 'rgb(150, 150, 150)',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  text: {
    color: 'rgb(100, 100, 100)',
    fontSize: 15,
    marginBottom: 5,
  },
  imageContact: {
    width: 150,
    height: 150,
    marginVertical: 30,
    borderRadius: 150,
  },
  imageBox: {
    display: 'flex',
    alignItems: 'center',
  },
  btnBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  button: {
    minWidth: 100,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  buttonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
  },
  delete: {
    backgroundColor: 'rgb(255, 50, 50)',
  },
  call: {
    backgroundColor: 'rgb(50, 150, 255)',
  },
  card: {
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 20,
    color: 'rgb(100, 100, 100)',
    fontSize: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  textError: {
    fontSize: 10,
    color: 'rgb(255, 0, 0)',
    marginBottom: 10,
  },
  add: {
    backgroundColor: 'rgb(50, 150, 255)',
  },
  title: {
    fontSize: 10,
  },
  price: {
    fontSize: 10,
  },
  description: {
    fontSize: 10,
  },
});
