import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { login } from '../../api/backend/auth';
import AuthForm from '../../components/AuthForm';
import { Colors } from '../../constants/Colors';

const { width, height } = Dimensions.get('window');
const colorScheme = 'light'; // Atur sesuai kebutuhan, bisa pakai useColorScheme
const theme = Colors[colorScheme];

export default function Login() {   
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (form: { email: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await login(form);
      // Simpan token jika perlu: localStorage.setItem('token', res.token);
      alert("Berhasil Login dengan data: " + JSON.stringify(res));
      router.replace('/'); // atau ke halaman lain setelah sukses
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login gagal');
    }
    setLoading(false);
  };

  return (
    <View style={[styles.bg, { backgroundColor: theme.primary }]}> 
      {/* Leaf top-left */}
      <Image source={require('../../assets/images/leaf1.png')} style={styles.leafTopLeft} />
      {/* Leaf bottom-right */}
      <Image source={require('../../assets/images/leaf2.png')} style={styles.leafBottomRight} />
      {/* Title and subtitle at the top */}
      <View style={styles.headerTop}>
        <Text style={styles.title}>Masuk</Text>
        <Text style={styles.subtitle}>Silahkan masuk ke akun anda</Text>
      </View>
      <AuthForm type="login" onSubmit={handleLogin} loading={loading} error={error} />
      <TouchableOpacity onPress={() => router.push('/auth/register')}>
        <Text style={styles.link}>Belum punya akun? Daftar</Text>
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
  headerTitle: 'Login Baru', // Judul header
  headerStyle: { backgroundColor: theme.primary }, // Warna background header
  headerTintColor: '#fff', // Warna teks/icon header
};
