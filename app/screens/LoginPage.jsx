import React, { useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
});

export default function LoginPage({ navigation }) {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = () => navigation.replace('Tabs');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>
      <TextInput placeholder="Email" style={styles.input} onChangeText={(text) => setValue('email', text)} />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={(text) => setValue('password', text)} />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { color: '#5d08c6', fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 20 },
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  input: { borderWidth: 2, borderColor: '#5d08c6', padding: 15, marginBottom: 10, borderRadius: 10, },
  error: { color: 'red', marginBottom: 10, marginTop: -5 },
});
