import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, FormControl, Heading, Icon, Image, Input, VStack } from 'native-base';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<any>();

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log('submiting with ', data);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('App');
    }, 5000);
  };
  return (
    <Center height="full">
      <VStack width="full" px={6} space={'4'}>
        <Image
          source={{
            uri: 'https://www.acovisa.com.br/wp-content/uploads/2021/02/cropped-Acovisa-Logo-PNG.png',
          }}
          alt="logo"
          resizeMode="contain"
          width={'2xl'}
          height={'60'}
          alignSelf="center"
          mb={8}
        />
        <Heading size={'md'}>Entrar na sua conta:</Heading>
        <FormControl isRequired isInvalid={'userName' in errors}>
          <FormControl.Label isInvalid={'userName' in errors} _invalid={{ color: 'red.500' }}>
            Usuário
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                InputLeftElement={<Icon as={MaterialCommunityIcons} name="account" size={5} mx={2} />}
                onBlur={onBlur}
                placeholder="Digite seu usuario"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
            name="userName"
            rules={{ required: 'Campo obrigatório', minLength: 3 }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>{errors.userName?.message}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={'password' in errors}>
          <FormControl.Label>Senha</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                InputLeftElement={<Icon as={MaterialCommunityIcons} name="lock" size={5} mx={2} />}
                secureTextEntry
                onBlur={onBlur}
                placeholder="Digite sua senha"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
            name="password"
            rules={{ required: 'Campo obrigatório', minLength: 3 }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>{errors.password?.message}</FormControl.ErrorMessage>
        </FormControl>
        <Button isLoading={isLoading} isLoadingText="Entrando" onPress={handleSubmit(onSubmit)} color="primary.500">
          Entrar
        </Button>
      </VStack>
    </Center>
  );
}
