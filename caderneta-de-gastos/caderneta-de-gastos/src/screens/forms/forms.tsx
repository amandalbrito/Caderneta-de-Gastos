import { router } from 'expo-router'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Input } from '@/src/components/input'
import { useGastos } from '@/src/screens/context/gastosContext'

export default function Forms() {

    const [tipoGasto, setTipoGasto] = useState("")
    const [valorGasto, setValorGasto] = useState("")
    const [erro, setErro] = useState("")

    const { adicionarGasto } = useGastos()

    const adicionaNaLista = () => {

        if (tipoGasto.length === 0) {
            setErro("Digite o tipo do gasto")
            return
        }
        if (Number(valorGasto) <= 0 || isNaN(Number(valorGasto))) {
            setErro("Digite um valor válido")
            return
        }

        adicionarGasto(
            tipoGasto,
            Number(valorGasto)
        )

        setTipoGasto("")
        setValorGasto("")
        setErro("")

        router.back()
    }

    return (
        <View
            style={{
                flex: 1,
                padding: 20,
                justifyContent: 'center'
            }}
        >

            <Input
                name='Tipo do Gasto'
                setValue={setTipoGasto}
                value={tipoGasto}
            />

            <Input
                name='Valor do Gasto'
                setValue={setValorGasto}
                value={valorGasto}
                keyboardType='numeric'
            />

            {
                erro.length > 0 &&
                (
                    <Text
                        style={{
                            color: 'red',
                            marginBottom: 12
                        }}
                    >
                        {erro}
                    </Text>
                )
            }

            <TouchableOpacity
                onPress={adicionaNaLista}
                style={{
                    backgroundColor: 'green',
                    padding: 14,
                    borderRadius: 8
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        textAlign: 'center'
                    }}
                >
                    Salvar
                </Text>
            </TouchableOpacity>

        </View>
    )
}