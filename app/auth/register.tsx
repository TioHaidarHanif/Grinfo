import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
const { width, height } = Dimensions.get('window');
const colorScheme = 'light'; // Atur sesuai kebutuhan, bisa pakai useColorScheme
const theme = Colors[colorScheme];

export default function Register() {
  const router = useRouter();

  return (
    <View style={[styles.bg, { backgroundColor: theme.primary }]}> 
      {/* Leaf top-left */}
      <Image source={require('../assets/images/leaf1.png')} style={styles.leafTopLeft} />
      {/* Leaf bottom-right */}
      <Image source={require('../assets/images/leaf2.png')} style={styles.leafBottomRight} />
      {/* Title and subtitle at the top */}
      <View style={styles.headerTop}>
        <Text style={styles.title}>Daftar</Text>
        <Text style={styles.subtitle}>Silahkan masuk ke akun anda</Text>
      </View>
      <View style={styles.formContainer}>
        {/* Nama Lengkap */}
        <Text style={styles.label}>Nama Lengkap</Text>
        <View style={styles.inputBox}>
          <MaterialIcons name="person" size={22} color={theme.highlight} style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Masukkan nama lengkap" placeholderTextColor="#A5A3B8" />
        </View>
        {/* Nama Pengguna */}
        <Text style={styles.label}>Nama Pengguna</Text>
        <View style={styles.inputBox}>
          <MaterialIcons name="account-circle" size={22} color={theme.highlight} style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Masukan nama pengguna" placeholderTextColor="#A5A3B8" />
        </View>
        {/* Email */}
        <Text style={styles.label}>Alamat Email</Text>
        <View style={styles.inputBox}>
          <MaterialIcons name="email" size={22} color={theme.highlight} style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Masukan alamat email" placeholderTextColor="#A5A3B8" />
        </View>
        {/* Kata Sandi */}
        <Text style={styles.label}>Kata Sandi</Text>
        <View style={styles.inputBox}>
          <MaterialIcons name="lock" size={22} color={theme.highlight} style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Masukan kata sandi" placeholderTextColor="#A5A3B8" secureTextEntry />
        </View>
        {/* Tombol Daftar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push('/auth/login')}>
        <Text style={styles.link}>Sudah punya akun? Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.primary,
    position: 'relative',
    overflow: 'hidden',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  headerTop: {
    alignItems: 'flex-start',
    width: 315,
    marginTop: 32,
    marginLeft: 24,
    marginBottom: 32,
    zIndex: 3,
  },
  title: { fontSize: 24, fontWeight: '600', color: theme.background, marginBottom: 4 },
  subtitle: { fontSize: 14, color: theme.background, marginBottom: 24 },
  label: { fontSize: 16, fontWeight: '500', color: theme.background, width: 315, marginBottom: 10 },
  inputBox: {
    width: 315,
    height: 50,
    backgroundColor: theme.background,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#393939',
  },
  button: { width: 315, height: 50, backgroundColor: theme.secondary, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 16 },
  buttonText: { fontSize: 16, fontWeight: '500', color: theme.accent },
  link: { fontSize: 12, color: theme.background, marginBottom: 24, textAlign: 'center'  },
});

export const options = {
  headerTitle: 'Register Baru', // Judul header
  headerStyle: { backgroundColor: '#51C17E' }, // Warna background header
  headerTintColor: '#fff', // Warna teks/icon header
};
