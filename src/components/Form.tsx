import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface FormField {
  key: string;
  label: string;
  placeholder?: string;
  icon?: React.ReactNode;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export interface FormProps {
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
  loading?: boolean;
  error?: string | null;
  buttonText?: string;
  theme?: {
    background?: string;
    primary?: string;
    secondary?: string;
    accent?: string;
    highlight?: string;
    [key: string]: string | undefined;
  };
  style?: ViewStyle;
  labelStyle?: TextStyle;
  inputBoxStyle?: ViewStyle;
  inputStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}

export default function Form({
  fields,
  onSubmit,
  loading,
  error,
  buttonText = 'Submit',
  theme = {},
  style,
  labelStyle,
  inputBoxStyle,
  inputStyle,
  buttonStyle,
  buttonTextStyle,
}: FormProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <View style={[styles.formContainer, style]}> 
      {fields.map(field => (
        <React.Fragment key={field.key}>
          <Text style={[styles.label, labelStyle]}>{field.label}</Text>
          <View style={[styles.inputBox, inputBoxStyle, { backgroundColor: theme.background }]}> 
            {field.icon}
            <TextInput
              style={[styles.input, inputStyle]}
              placeholder={field.placeholder}
              placeholderTextColor={theme.highlight || '#A5A3B8'}
              value={values[field.key] || ''}
              onChangeText={text => handleChange(field.key, text)}
              secureTextEntry={field.secureTextEntry}
              keyboardType={field.keyboardType}
              autoCapitalize={field.autoCapitalize}
            />
          </View>
        </React.Fragment>
      ))}
      {error && <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text>}
      <TouchableOpacity style={[styles.button, buttonStyle, { backgroundColor: theme.secondary }]} onPress={handleSubmit} disabled={loading}>
        <Text style={[styles.buttonText, buttonTextStyle, { color: theme.accent }]}>{loading ? 'Memproses...' : buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: { fontSize: 16, fontWeight: '500', width: 315, marginBottom: 10 },
  inputBox: {
    width: 315,
    height: 50,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#393939',
  },
  button: { width: 315, height: 50, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 16 },
  buttonText: { fontSize: 16, fontWeight: '500' },
});
