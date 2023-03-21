import React ,{useContext}from 'react'
import {Box, Divider, Pressable, Text} from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Inmuebles, UserContext} from '../context/Usercontext'
import {Info} from '../screens/inmuebleScreeens/InmuebleScreen';
import { useNavigation } from '@react-navigation/native';

interface ListItem{
    item:Inmuebles
}

interface Props{
    setData:React.Dispatch<React.SetStateAction< Info|null>>,
    item:ListItem 
}

export const TableItem = ({item, setData}:Props) => {

    const {setInmuebleId} = useContext(UserContext);

    const navigation = useNavigation();
    const nombre = item.item.nombre;
    const cuenta = item.item.cuenta;
    const deuda = item.item.deuda;
    const info = item.item.info;

    const guardarId = ()=>{
        setInmuebleId(item.item.id)
    }
    const guardarInfo = () => {
        setData(info);
        console.log(info);
    }

  return (
    <>
    <Box mt={2} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
            <Box width={'30%'} >
                <Pressable
                    display={'flex'} 
                    flexDirection={'row'} 
                    alignItems={'center'} 
                    justifyContent={'space-between'}
                     onPress={()=> guardarId()}
                >
                    <Text textAlign={'center'} fontSize={10}>
                        {nombre}
                    </Text>
                <Box
                    height={4}
                    borderWidth={1}
                    borderColor={'purple.800'} 
                    borderRadius={'4'}
                    alignItems={'center'}
                    justifyContent={'center'} 
                    width={4}>
                        <Icon name={'pencil'} size={12}/>
                </Box>
                </Pressable>
            </Box>
            <Box width={'28%'}>
                
                <Pressable 
                    display={'flex'} 
                    flexDirection={'row'} 
                    alignItems={'center'} 
                    justifyContent={'space-between'}
                    onPress={()=> guardarInfo()}
                >
                        <Text textAlign={'center'} fontSize={10} >
                            {cuenta}
                        </Text>
                        <Box
                        height={4}
                        borderWidth={1}
                        borderColor={'purple.800'} 
                        borderRadius={'4'}
                        alignItems={'center'}
                        justifyContent={'center'} 
                        width={4}
                        >
                           <Icon name={'information-variant'} size={10}/> 
                        </Box>
                        
                </Pressable>
            </Box>
            <Box width={'27%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <Text textAlign={'center'} fontSize={10} fontWeight={'bold'}>
                    $ {deuda.total.toFixed(3)}
                </Text>
            </Box>
            <Box width={'10%'} display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Pressable 
                    onPress={() => navigation.navigate('VerInmueble' as never)}
                    alignSelf={'center'}
                    ml={1}
                    height={4}
                    backgroundColor={'#2596be'}
                    borderRadius={'4'} 
                    alignItems={'center'}
                    justifyContent={'center'} 
                    width={4}>
                        <Icon name={'printer'} color={'#fff'} size={14}/>
                </Pressable>
            </Box>
        </Box>
        <Divider mt={1}/>
    </>
  )
}
