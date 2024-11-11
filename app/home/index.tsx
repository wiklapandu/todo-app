import { StyleSheet, Platform, View, Text, FlatList, TouchableOpacity, Alert, TouchableHighlight, Pressable, Button, ScrollView, Modal, TextInput, KeyboardAvoidingView } from 'react-native';
import { Image } from 'expo-image'

import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import CardPrimary from '@/components/cards/CardPrimary';
import CardSecondary from '@/components/cards/CardSecondary';

type ItemProps = {
  id: string;
  title: string;
  status: string;
  description: string;
  color?: 'error' | 'warning' | 'success' | 'primary';
  created_at: string;
}

export default function HomeScreen() {
  const [showCreate, setShowCreate] = useState(false);
  const [showTodo, setShowTodo] = useState<ItemProps>();
  const [colorShowTodo, setColorShowTodo] = useState<string>();
  const [statusShowTodo, setStatusShowTodo] = useState<string>();

  const [data, setData] = useState<ItemProps[]>([
    {
      "id": "673201171d9304883c88a873",
      "title": "Lorem ipsum odor amet, consectetuer adipiscing elit.",
      "status": "ongoing",
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nam amet nibh in in ultricies enim. At praesent erat dictum nullam imperdiet tincidunt curae. Varius interdum nisi lacinia porta pulvinar praesent? Porttitor suspendisse justo efficitur penatibus lectus scelerisque. Tellus non sit netus felis ullamcorper metus cursus curabitur mi. Molestie potenti volutpat lectus cras aptent dapibus purus? Nullam ornare bibendum elit urna a. Torquent dapibus sapien sed natoque quisque volutpat mattis nullam. Leo eu primis malesuada facilisi dis ex lectus proin.\n\n\nEleifend duis ut venenatis malesuada phasellus et ultricies consectetur. Pharetra ante sed molestie primis convallis elit. Orci lectus lacinia elit tortor fames; magnis praesent. Senectus montes egestas dolor lacus turpis amet non condimentum est. Interdum et lacinia libero himenaeos nisl, parturient semper libero consectetur. Dolor natoque vehicula dis amet maecenas amet praesent varius egestas. Fames enim aenean suscipit mus ornare.",
      "color": "error",
      "created_at": "09-11-2024"
    },
    {
      "id": "673201171d9304883c88a874",
      "title": "Lorem ipsum odor amet, consectetuer adipiscing elit.",
      "status": "ongoing",
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nam amet nibh in in ultricies enim. At praesent erat dictum nullam imperdiet tincidunt curae. Varius interdum nisi lacinia porta pulvinar praesent? Porttitor suspendisse justo efficitur penatibus lectus scelerisque. Tellus non sit netus felis ullamcorper metus cursus curabitur mi. Molestie potenti volutpat lectus cras aptent dapibus purus? Nullam ornare bibendum elit urna a. Torquent dapibus sapien sed natoque quisque volutpat mattis nullam. Leo eu primis malesuada facilisi dis ex lectus proin.\n\n\nEleifend duis ut venenatis malesuada phasellus et ultricies consectetur. Pharetra ante sed molestie primis convallis elit. Orci lectus lacinia elit tortor fames; magnis praesent. Senectus montes egestas dolor lacus turpis amet non condimentum est. Interdum et lacinia libero himenaeos nisl, parturient semper libero consectetur. Dolor natoque vehicula dis amet maecenas amet praesent varius egestas. Fames enim aenean suscipit mus ornare.",
      "color": "primary",
      "created_at": "10-11-2024"
    }
  ])

  const sections = [
    {
      title: `On Progress`,
      data: data.filter(item => item.status != 'done'),
      length: data.filter(item => item.status != 'done').length,
      component: CardPrimary
    },
    {
      title: 'Completed',
      data: data.filter(item => item.status == 'done'),
      component: CardSecondary
    }
  ];

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
        <FlatList
          data={sections}
          renderItem={({ item }) => (<View>
          <FlatList data={item.data}
            renderItem={(dataItem) => <item.component {...dataItem} setData={setData} setShowTodo={setShowTodo} />}
            ListHeaderComponent={<View className='flex flex-row w-full'>
              <Text className='text-xl mb-3 font-medium'>{item.title} {item.length ? (<Text className='text-gray-400 font-normal'>({item.length.toString().padStart(2, '0')})</Text>) : ''}</Text>
              <Text className='ml-auto text-sm text-blue-600'>View More</Text>
            </View>}
          />
          </View>)}
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
        visible={showTodo != undefined}
      >
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View className='h-3/4 bg-white mt-auto rounded-t-2xl p-8'>
              <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                <View className='border-b border-b-gray-100 pb-6 mb-4'>
                  <Text className='text-center text-xl'>{showTodo?.title}</Text>
                </View>

                <View className='mb-4'>
                  <View className='mb-4'>
                    <Text className='text-gray-800 font-medium mb-2 text-xl'>Description:</Text>
                    <Text className='text-lg text-gray-500'>{showTodo?.description}</Text>
                  </View>

                  <View className='mb-4'>
                    <Text className='text-gray-800 font-medium text-xl mb-4'>Color:</Text>
                    <View className='flex flex-row gap-2'>
                      <TouchableOpacity onPress={() => {
                          setShowTodo((data) => {
                            if (data) {
                              data.color = 'error';
                            }
                            return data;
                          });
                        }} className={`w-14 h-14 border-2 border-red-500 bg-red-${showTodo?.color !== 'error' ? '200' : '500'} rounded-full`}></TouchableOpacity>
                      <TouchableOpacity onPress={() => {
                          setShowTodo((data) => {
                            if (data) {
                              data.color = 'primary';
                            }
                            return data;
                          });
                        }} className={`w-14 h-14 border-2 border-blue-500 bg-blue-${showTodo?.color !== 'primary' ? '200' : '500'} rounded-full`}></TouchableOpacity>
                      <TouchableOpacity onPress={() => {
                          setShowTodo((data) => {
                            if (data) {
                              data.color = 'success';
                            }
                            return data;
                          });
                        }} className={`w-14 h-14 border-2 border-green-500 bg-green-${showTodo?.color !== 'success' ? '200' : '500'} rounded-full`}></TouchableOpacity>
                      <TouchableOpacity onPress={() => {
                          setShowTodo((data) => {
                            if(data) {
                              data.color = 'warning';
                            }
                            return data;
                          });
                        }} className={`w-14 h-14 border-2 border-yellow-500 bg-yellow-${showTodo?.color !== 'warning' ? '200' : '500'} rounded-full`}></TouchableOpacity>
                    </View>
                  </View>

                  <View className='mb-4'>
                    <Text className='text-gray-800 font-medium text-xl mb-4'>Status:</Text>

                    <View className='bg-gray-300 flex flex-row gap-1 p-2 rounded-xl'>
                      <TouchableOpacity onPress={() => {
                        setShowTodo((data) => {
                          if (data) {
                            data.status = 'ongoing';
                          }
                          return data;
                        })
                      }} className={`${showTodo?.status == 'ongoing' ? 'bg-blue-500' : ''} p-4 w-1/2 flex flex-row justify-center items-center rounded-xl`}>
                        <Ionicons name='checkmark-circle-outline' color={showTodo?.status == 'ongoing' ? '#fff' : '#6b7280'} size={18} />
                        <Text className={`${showTodo?.status == 'ongoing' ? 'text-white' : 'text-gray-500'} font-medium ml-2`}>On Going</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {
                        setShowTodo((data) => {
                          if (data) {
                            data.status = 'done';
                          }
                          return data;
                        })
                      }} className={`${showTodo?.status == 'done' ? 'bg-blue-500' : ''} p-4 w-1/2 flex flex-row justify-center items-center rounded-xl`}>
                        <Ionicons name='checkmark-done-circle-outline' color={showTodo?.status == 'done' ? '#fff' : '#6b7280'} size={18} />
                        <Text className={`${showTodo?.status == 'done' ? 'text-white' : 'text-gray-500'} font-medium ml-2`}>Done</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View className='flex flex-row bottom-0 bg-white px-2 gap-x-2'>
                  <TouchableOpacity
                    onPress={() => {
                      setShowTodo(undefined);
                    }}
                    className='border bg-white border-blue-500 rounded-xl px-4 py-3 w-1/2'
                  >
                    <Text className='text-center text-blue-500'>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className='border rounded-xl w-1/2 px-4 py-3 border-blue-500 bg-blue-500'
                    style={{ shadowColor: '#3b82f6' }}
                  >
                    <Text className='text-center text-white'>Update</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

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
