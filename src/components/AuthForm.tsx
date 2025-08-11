import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  label: { color: '#fff' },
});

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Colors } from '../constants/Colors';
import Form, { FormField } from './Form';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (form: { name?: string; username?: string; email: string; password: string }) => void;
  loading?: boolean;
  error?: string | null;
}

const colorScheme = 'light';
const theme = Colors[colorScheme];

export default function AuthForm({ type, onSubmit, loading, error }: AuthFormProps) {
  const fields: FormField[] = type === 'register'
    ? [
        {
          key: 'name',
          label: 'Nama Lengkap',
          placeholder: 'Masukkan nama lengkap',
          icon: <MaterialIcons name="person" size={22} color={theme.highlight} style={{ marginRight: 8 }} />,
        },
        {
          key: 'username',
          label: 'Nama Pengguna',
          placeholder: 'Masukkan nama pengguna',
          icon: <MaterialIcons name="account-circle" size={22} color={theme.highlight} style={{ marginRight: 8 }} />,
        },
        {
          key: 'email',
          label: 'Alamat Email',
          placeholder: 'Masukkan alamat email',
          icon: <MaterialIcons name="email" size={22} color={theme.highlight} style={{ marginRight: 8 }} />,
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        },
        {
          key: 'password',
          label: 'Kata Sandi',
          placeholder: 'Masukkan kata sandi',
          icon: <MaterialIcons name="lock" size={22} color={theme.highlight} style={{ marginRight: 8 }} />,
          secureTextEntry: true,
        },
      ]
    : [
        {
          key: 'email',
          label: 'Alamat Email',
          placeholder: 'Masukkan alamat email',
          icon: <MaterialIcons name="email" size={22} color={theme.highlight} style={{ marginRight: 8 }} />,
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        },
        {
          key: 'password',
          label: 'Kata Sandi',
          placeholder: 'Masukkan kata sandi',
          icon: <MaterialIcons name="lock" size={22} color={theme.highlight} style={{ marginRight: 8 }} />,
          secureTextEntry: true,
        },
      ];

  return (
    <Form
      fields={fields}
      onSubmit={(values) => {
        const { name, username, email, password } = values;
        onSubmit({
          name,
          username,
          email,
          password,
        });
      }}
      loading={loading}
      error={error}
      buttonText={type === 'login' ? 'Masuk' : 'Daftar'}
      theme={theme}
      labelStyle={{ color: '#fff' }}
    />
  );
}
