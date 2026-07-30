import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import AssetExampl3 from './components/AssetExampl3';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Kaji's Project (o゜▽゜)o☆ !!! WIP (╯°□°）╯︵ ┻━┻ !!!
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Card>
        <AssetExampl3 />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ff6b35',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardImage: {
    borderWidth: 3,
    borderColor: '#ff6b35',
    borderRadius: 12,
  },
});
