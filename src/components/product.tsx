import { forwardRef } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  View,
  Text,
} from "react-native";

import { formatCurrency } from "@/utils/functions/format-currency";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
  quantity?: number
  price: number
  id: string
}

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}
export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest }, ref) => {

const price = formatCurrency((data.quantity >= 1 ? data.price * data.quantity : data.price))

  return (
    <TouchableOpacity ref={ref} className="w-full flex-row items-center pb-4" {...rest}>
      <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
      <View className="flex-1 ml-3">
        <View className="flex-row items-center">
          <Text className="text-slate-100 font-subtitle text-base flex-1">
            {data.title}
          </Text>
          {data.price && (
            <Text className="text-slate-400 font-subtitle text-sm">{price}</Text>
          )}
        </View>
        <Text className="text-slate-400 text-xs leading-5 mt-0.5">
          {data.description}
        </Text>
        <View className="flex-row pt-1">
          {data.quantity && (
            <Text className="text-slate-400 font-subtitle text-sm">
              Quantidade: {data.quantity}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
})