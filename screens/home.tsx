import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { Heading, HStack, Icon, Select, Text, VStack } from 'native-base';

export function Home() {
  return (
    <VStack p={6} width="full" height={'full'} bg={'white'}>
      <HStack space={2} justifyContent="center">
        <Icon as={MaterialCommunityIcons} name="account" size={'lg'} color={'primary.500'} />
        <Heading size={'md'} fontWeight="medium" color={'primary.500'}>
          CPD
        </Heading>
      </HStack>
      <VStack width={'full'} my={4}>
        <Select defaultValue="1" selectedValue="1">
          <Select.Item label="ACOVISA (MATRIZ)" value="1" />
        </Select>
      </VStack>
      <VStack width={'100%'} justifyContent="center" py={6} bg="white" shadow={'4'} rounded={4}>
        <HStack width={'100%'}>
          <VStack width={'50%'} alignItems="center">
            <Heading size={'md'}>0</Heading>
            <Text>Cliente ativos</Text>
          </VStack>
          <VStack width={'50%'} alignItems="center">
            <Heading size={'md'}>0</Heading>
            <Text>Cliente inativos</Text>
          </VStack>
        </HStack>
        <HStack borderTopWidth={1} borderColor="primary.200">
          <VStack width={'50%'} alignItems="center">
            <Heading size={'md'}>0</Heading>
            <Text>Cliente ativos</Text>
          </VStack>
          <VStack width={'50%'} alignItems="center">
            <Heading size={'md'}>0</Heading>
            <Text>Cliente inativos</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
