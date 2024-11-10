import { StyleSheet, Platform, View, Text, FlatList, TouchableOpacity, Alert, TouchableHighlight, Pressable, Button, ScrollView, Modal, TextInput, KeyboardAvoidingView } from 'react-native';
import { Image } from 'expo-image'

import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type ItemProps = {
  id: number;
  title: string;
  status: string;
}

const ItemRender = ({ item, index, setData }: { item: ItemProps, index: number, setData: (items: ItemProps[] | ((items: ItemProps[]) => ItemProps[])) => void }) => {
  const colors = ['border-l-red-500', 'border-l-blue-500', 'border-l-orange-500', 'border-l-green-500'];
  const random = Math.floor(Math.random() * colors.length);
  return <TouchableOpacity className={`mb-3 border-2 border-y-gray-200 border-r-gray-200 rounded-xl border-l-4 ${colors[random]} p-4 bg-white`} onPress={() => {
    // confirm('Are you sure?')
    const latestStatus = item.status;
    const newStatus = latestStatus == 'done' ? 'ongoing' : 'done';
    setData(
      (items: ItemProps[]): ItemProps[] => (items.map((data: ItemProps): ItemProps => data.id === item.id ? { ...item, status: newStatus } : data))
    )
  }}>
    <View className='flex flex-row items-center border-b-[.5px] border-b-gray-500 pb-4 mb-2'>
      <View className='mr-auto w-4/5'>
        <Text className={'text-xl' + (item.status == 'done' ? ' line-through' : '')}>{item.title}</Text>
        <Text className={'text-md text-gray-500'}>Maxime totam odit. Et dolor...</Text>
      </View>
      <Ionicons name={item.status != 'done' ? 'checkmark-circle-outline' : 'checkmark-circle'} size={25} color={item.status != 'done' ? '#6b7280' : '#3b82f6'} />
    </View>
    <View>
      <Text className='text-gray-500'>Today 11:25 PM</Text>
    </View>
  </TouchableOpacity>
}

export default function HomeScreen() {
  const [showCreate, setShowCreate] = useState(false);
  const [data, setData] = useState<ItemProps[]>([
    {
      "id": 0,
      "status": "ongoing",
      "title": "laborum minim laboris"
    },
    {
      "id": 1,
      "status": "ongoing",
      "title": "voluptate pariatur"
    },
    {
      "id": 2,
      "status": "ongoing",
      "title": "consequat sit minim"
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
              style={{ width: 50, height: 50 }}
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
            <Ionicons name='add' size={20} color={'#fff'} style={{ marginBottom: -3 }} />
            <Text className='text-white text-xl ml-2'>Create New</Text>
          </View>
        </TouchableOpacity>
      </ThemedView>

      <Modal
        transparent={true}
        animationType='slide'
        visible={showCreate}
        onRequestClose={() => {
          setShowCreate(false);
        }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // Adjust as needed
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View className='h-3/4 bg-white bottom-0 mt-auto rounded-t-2xl p-8'>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View className='border-b border-b-gray-100 pb-6 mb-4'>
                  <Text className='text-center text-xl'>New Task ToDo</Text>
                </View>

                <View>
                  <View className='mb-4'>
                    <Text className='font-semibold mb-2'>Title Task</Text>
                    <TextInput className='bg-gray-200 py-2 px-4 rounded-xl' placeholder='Add Task Name...' />
                  </View>
                  <View className='mb-4'>
                    <Text className='font-semibold mb-2'>Description</Text>
                    <TextInput
                      multiline={true}
                      numberOfLines={5}
                      className='bg-gray-200 py-4 px-4 rounded-xl'
                      style={{ textAlignVertical: 'top' }}
                      placeholder='Add description...'
                    />
                  </View>
                  <View className='flex flex-row gap-1'>
                    <View className='mb-4 w-1/2'>
                      <Text className='font-semibold mb-2'>Date</Text>
                      <View className='flex flex-row items-center border border-gray-200 bg-gray-200 rounded-xl px-4'>
                        <Ionicons name='calendar' size={18} color={'#6b7280'} />
                        <TextInput className='py-2 ml-2 w-full' placeholder='dd/mm/yy' />
                      </View>
                    </View>
                    <View className='mb-4 w-1/2'>
                      <Text className='font-semibold mb-2'>Time</Text>
                      <View className='flex flex-row items-center border border-gray-200 bg-gray-200 rounded-xl px-4'>
                        <Ionicons name='time' size={18} color={'#6b7280'} />
                        <TextInput className='py-2 ml-2 w-full' placeholder='hh:mm' />
                      </View>
                    </View>
                  </View>
                </View>

                <View className='flex flex-row bottom-0 bg-white px-2 gap-x-2'>
                  <TouchableOpacity
                    onPress={() => {
                      setShowCreate(false);
                    }}
                    className='border bg-white border-blue-500 rounded-xl px-4 py-3 w-1/2'
                  >
                    <Text className='text-center text-blue-500'>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className='border rounded-xl w-1/2 px-4 py-3 border-blue-500 bg-blue-500'
                    style={{ shadowColor: '#3b82f6' }}
                  >
                    <Text className='text-center text-white'>Create</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
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
