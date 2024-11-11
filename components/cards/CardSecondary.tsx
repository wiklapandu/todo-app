import { colorBorderTheme } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import moment from "moment";
import { Text, TouchableOpacity, View } from "react-native";


type ItemProps = {
    id: string;
    title: string;
    status: string;
    description: string;
    color?: 'error' | 'warning' | 'success' | 'primary';
    created_at: string;
}

export default function CardSecondary({ item, index, setData }: { item: ItemProps, index: number, setData: (items: ItemProps[] | ((items: ItemProps[]) => ItemProps[])) => void }) {
    const colorBorderThemeVar = item.color ? colorBorderTheme(item.color) : 'border-l-blue-500';
    const createdAt = moment(item.created_at, 'DD-MM-YYYY');
    return <TouchableOpacity className={`mb-3 border-2 border-y-gray-200 border-r-gray-200 rounded-xl border-l-4 ${colorBorderThemeVar} p-4 bg-white`} onPress={() => {
      const latestStatus = item.status;
      const newStatus = latestStatus == 'done' ? 'ongoing' : 'done';
      setData(
        (items: ItemProps[]): ItemProps[] => (items.map((data: ItemProps): ItemProps => data.id === item.id ? { ...item, status: newStatus } : data))
      )
    }}>
      <View className='flex flex-row items-center border-b-[.5px] border-b-gray-500 pb-4 mb-2'>
        <View className='mr-auto w-4/5'>
          <Text className={'text-xl' + (item.status == 'done' ? ' line-through' : '')}>{item.title}</Text>
          <Text className={'text-md text-gray-500'}>{item.description.slice(0, 35) + '...'}</Text>
        </View>
        <Ionicons name={item.status != 'done' ? 'checkmark-circle-outline' : 'checkmark-circle'} size={25} color={item.status != 'done' ? '#6b7280' : '#3b82f6'} />
      </View>
      <View>
        <Text className='text-gray-500'>{createdAt.format('dddd, DD MMMM YY')}</Text>
      </View>
    </TouchableOpacity>
  }