import { createContext, ReactNode, useContext, useState } from 'react'

interface IList {
    tipo: string
    valor: number
}

interface IContext {
    list: IList[]
    adicionarGasto: (tipo: string, valor: number) => void
    removerGasto: (index: number) => void
}

const GastosContext = createContext({} as IContext)

export const GastosProvider = ({
    children
}: {
    children: ReactNode
}) => {

    const [list, setList] = useState<IList[]>([])

    const adicionarGasto = (
        tipo: string,
        valor: number
    ) => {

        setList((prev) => [
            ...prev,
            {
                tipo,
                valor
            }
        ])
    }

    const removerGasto = (index: number) => {

        const novaLista = [...list]

        novaLista.splice(index, 1)

        setList(novaLista)
    }

    return (
        <GastosContext.Provider
            value={{
                list,
                adicionarGasto,
                removerGasto
            }}
        >
            {children}
        </GastosContext.Provider>
    )
}

export const useGastos = () => {
    return useContext(GastosContext)
}