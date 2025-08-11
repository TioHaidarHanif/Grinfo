import { useColorScheme } from '@/src/hooks/useColorScheme';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function SplashScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];
  const { width, height } = Dimensions.get('window');
  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}> 
      {/* Leaf top-left */}
      <Image source={require('../assets/images/leaf1.png')} style={styles.leafTopLeft} />
      {/* Leaf bottom-right */}
      <Image source={require('../assets/images/leaf2.png')} style={styles.leafBottomRight} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <View style={styles.textRow}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
        width: 240,
        height: 240,
        marginBottom: 32,
        resizeMode: 'contain',
      },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  leafTopLeft: {
    position: 'absolute',
    top: -40,
    left: -40,
    width: 160,
    height: 160,
    resizeMode: 'contain',
    zIndex: 2,
    transform: [{ rotate: '-250deg' }],
  },
  leafBottomRight: {
      position: 'absolute',
      bottom: -10,
      right: -50,
      width: 160,
      height: 160,
      resizeMode: 'contain',
      zIndex: 2,
      
    },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
