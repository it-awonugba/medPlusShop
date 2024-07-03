import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

export default function CustomButton({label, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
  },
  buttonText: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
