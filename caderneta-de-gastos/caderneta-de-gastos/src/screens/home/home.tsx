import { router } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Forms from '../forms/forms'
import { useGastos } from '@/src/screens/context/gastosContext'

export default function Home() {

    const { list, removerGasto } = useGastos()

    const total = (list || []).reduce((acc, item) => {
        return acc + item.valor
    }, 0)
    return (
        <View
            style={{
                flex: 1,
                padding: 20
            }}
        >

            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom: 20
                }}
            >
                Total: R$ {total.toFixed(2)}
            </Text>

            <TouchableOpacity
                onPress={() => router.push('/forms')}
                style={{
                    backgroundColor: 'blue',
                    padding: 14,
                    borderRadius: 8,
                    marginBottom: 20
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        textAlign: 'center'
                    }}
                >
                    Novo Gasto
                </Text>
            </TouchableOpacity>

            <FlatList
                data={list}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            borderWidth: 1,
                            padding: 12,
                            borderRadius: 8,
                            marginBottom: 10
                        }}
                    >
                        <Text>
                            Tipo: {item.tipo}
                        </Text>

                        <Text>
                            Valor: R$ {item.valor}
                        </Text>

                        <TouchableOpacity
                            onPress={() => removerGasto(index)}
                            style={{
                                backgroundColor: 'red',
                                marginTop: 10,
                                padding: 10,
                                borderRadius: 8
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    textAlign: 'center'
                                }}
                            >
                                Excluir
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}