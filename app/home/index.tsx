import { StyleSheet, Platform, View, Text, FlatList, TouchableOpacity, Alert, TouchableHighlight, Pressable, Button, ScrollView, Modal } from 'react-native';
import { Image } from 'expo-image'

import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type ItemProps = {
  id: number;
  title: string;
  status: string;
}

const ItemRender = ({item, index, setData}: {item: ItemProps, index: number, setData: (items: ItemProps[] | ((items: ItemProps[]) => ItemProps[])) => void}) => {
  return <TouchableOpacity className='mb-3 border border-gray-300 rounded p-4 bg-white' onPress={() => {
    // confirm('Are you sure?')
    const latestStatus = item.status;
    const newStatus = latestStatus == 'done' ? 'ongoing' : 'done';
    setData(
      (items: ItemProps[]): ItemProps[] => (items.map((data: ItemProps): ItemProps => data.id === item.id ? {...item, status: newStatus} : data))
    )
  }}>
      <Text className={'text-xl' + (item.status == 'done' ? ' line-through' : '')}>{item.title}</Text>
  </TouchableOpacity>
}

export default function HomeScreen() {
  const [showCreate, setShowCreate] = useState(false);
  const [data, setData] = useState<ItemProps[]>([
    {
      "id": 0,
      "status": "ongoing",
      "title": "laborum minim laboris ad dolore"
    },
    {
      "id": 1,
      "status": "ongoing",
      "title": "voluptate pariatur laborum ullamco ad"
    },
    {
      "id": 2,
      "status": "ongoing",
      "title": "consequat sit minim fugiat pariatur"
    },
    {
      "id": 3,
      "status": "ongoing",
      "title": "proident ipsum consectetur amet cillum"
    },
    {
      "id": 4,
      "status": "ongoing",
      "title": "exercitation non laborum eu et"
    },
    {
      "id": 5,
      "status": "ongoing",
      "title": "excepteur ipsum ullamco aute culpa"
    },
    {
      "id": 6,
      "status": "ongoing",
      "title": "ipsum dolore reprehenderit et laboris"
    },
    {
      "id": 7,
      "status": "ongoing",
      "title": "dolor sint nostrud quis eu"
    },
    {
      "id": 8,
      "status": "ongoing",
      "title": "est cupidatat nostrud sit exercitation"
    },
    {
      "id": 9,
      "status": "ongoing",
      "title": "ut incididunt reprehenderit non aliqua"
    },
    {
      "id": 10,
      "status": "ongoing",
      "title": "commodo cillum do in consequat"
    },
    {
      "id": 11,
      "status": "ongoing",
      "title": "deserunt eu ut incididunt qui"
    },
    {
      "id": 12,
      "status": "ongoing",
      "title": "exercitation officia adipisicing minim commodo"
    },
    {
      "id": 13,
      "status": "ongoing",
      "title": "sint aliquip tempor in eiusmod"
    },
    {
      "id": 14,
      "status": "ongoing",
      "title": "fugiat voluptate aliquip esse deserunt"
    },
    {
      "id": 15,
      "status": "ongoing",
      "title": "ullamco officia irure commodo ut"
    },
    {
      "id": 16,
      "status": "ongoing",
      "title": "nisi qui commodo culpa duis"
    },
    {
      "id": 17,
      "status": "ongoing",
      "title": "nisi reprehenderit reprehenderit nostrud eu"
    },
    {
      "id": 18,
      "status": "ongoing",
      "title": "fugiat est commodo officia excepteur"
    }
  ])

  return (
    <View className='flex-[1] p-4 px-6 translate-y-[25] bg-[#EDF0F7]'>
      <ThemedView className='flex flex-row mb-4 items-center'>
        <View className='flex flex-row items-center w-full'>
          <Pressable className='rounded-full overflow-hidden border-2 border-white'>
            <Image
            source='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            style={{width: 50, height: 50}}
            />
          </Pressable>
          <View className='ml-4'>
            <Text className='text-lg text-gray-500 leading-none mb-1'>Hello</Text>
            <Text className='text-xl font-medium leading-none'>Joko Husein</Text>
          </View>

          <View className='flex flex-row gap-2 ml-auto'>
            <TouchableOpacity className='w-12 h-12 bg-transparent border border-gray-400 rounded-full flex justify-center items-center'>
              <Ionicons name='calendar-outline' size={20} />
            </TouchableOpacity>
            <TouchableOpacity className='w-12 h-12 bg-transparent border border-gray-400 rounded-full flex justify-center items-center'>
              <Ionicons name='notifications-outline' size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ThemedView>
      
      <ThemedView className='flex-1'>
        <FlatList data={data}
          renderItem={(item) => <ItemRender {...item} setData={setData} />}
          ListHeaderComponent={<View className='flex flex-row w-full'>
            <Text className='text-xl mb-3 font-medium'>Lists Todo</Text>
            <Text className='ml-auto text-sm text-blue-600'>View More</Text>
          </View>}
          />
      </ThemedView>

      <ThemedView className='mb-5'>
        <TouchableOpacity className='p-4 bg-blue-500 rounded-lg'
        onPress={() => {
          setShowCreate(true);
        }}
        >
          <View className='flex flex-row justify-center items-center'>
            <Ionicons name='add' size={20} color={'#fff'} style={{marginBottom: -3}} />
            <Text className='text-white text-xl ml-2'>Create New</Text>
          </View>
        </TouchableOpacity>
      </ThemedView>
      
      <Modal
      animationType='slide'
      visible={showCreate}
      >
        <View className='flex-[1] w-11/12 translate-y-[25] mx-auto'>
          <View className='flex flex-row'>
            <Pressable 
            onPress={() => setShowCreate(false)}
            className='w-10 h-10 flex items-center justify-center border rounded-full ml-auto'>
              <Ionicons name='close' size={20} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
