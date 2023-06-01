import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Box, Pressable, Center, Text, Divider,Image } from 'native-base'
import React from 'react'
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


export const DrawerMenu = ({navigation}:DrawerContentComponentProps) => {
  return (
    <Box flex={1}>
        <Center height={140} bg={'#3FB2E8ff'}>
            <Image height={'32'} width={'32'} source={require('../assets/logoDrawer.jpeg')} alt='imagen'/>
        </Center>
        <Center>
            
            <Pressable onPress={()=>navigation.navigate('Notificaciones')} height={'10'} mt={5} mb={2}  flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'} width={'full'}>
              <Icon style={{marginLeft:10}} name='email' size={28}/>
              <Text ml={3} textAlign={'center'} fontSize={17} fontWeight={'bold'}>Notificaciones</Text>
            </Pressable>
            <Divider width={'80%'} mb={2}/>

            <Pressable onPress={()=>navigation.navigate('MediosPago')} height={'10'} mb={2} flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'} width={'full'}>
              <Icon style={{marginLeft:10}} name='card-bulleted' size={28}/>
              <Text ml={3} textAlign={'center'} fontSize={17} fontWeight={'bold'}>Medios de pago</Text>
            </Pressable>
            <Divider width={'80%'} mb={2}/>

            <Pressable onPress={()=>navigation.navigate('Oficinas')} height={'10'} mb={2} flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'} width={'full'}>
              <Icon style={{marginLeft:10}} name='office-building-marker' size={28}/>
              <Text ml={3} textAlign={'center'} fontSize={17} fontWeight={'bold'}>Oficinas</Text>
            </Pressable>
            <Divider width={'80%'} mb={2}/>

            <Pressable onPress={()=>navigation.navigate('Contacto')} height={'10'} mb={2}  flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'} width={'full'}>
              <Icon style={{marginLeft:10}} name='wechat' size={28}/>
              <Text ml={3} textAlign={'center'} fontSize={17} fontWeight={'bold'}>Contacto</Text>
            </Pressable>
            <Divider width={'80%'} mb={2}/>

            <Pressable onPress={()=>navigation.navigate('Contraseña')} height={'10'} mb={2} flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'} width={'full'}>
              <Icon style={{marginLeft:10}} name='key-variant' size={28}/>
              <Text  ml={3} textAlign={'center'} fontSize={17} fontWeight={'bold'}>Cambiar contraseña</Text>
            </Pressable>
            <Divider width={'80%'} mb={2} />
            
            <Pressable onPress={()=> navigation.navigate('Login')} height={'10'} mb={2}  flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'} width={'full'}>
            <Icon style={{marginLeft:10}} name='logout' size={28}/>
              <Text ml={3} textAlign={'center'} fontSize={17} fontWeight={'bold'}>Cerrar sesión</Text>
            </Pressable>
            <Divider width={'80%'} mb={2}/>
        </Center>
        <Text position={'absolute'} left={5} bottom={2}> V 1.0.0</Text>
    </Box>
  )
}
