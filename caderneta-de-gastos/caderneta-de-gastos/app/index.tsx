import  Home from '@/src/screens/home/home';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from "react-native";

export default function App () {
    const [respostaApi, setRespostaApi] = useState("")
    const [loading, setLoading] = useState(true)

   
    return <Home/>


    // const chamaApi = async () => {
    //     setTimeout(async() => {
    //         await axios.get("https://www.themealdb.com/api/json/v1/1/").then((resposta) => {
    //         console.log("RESPOSTA DA API", resposta.data)
    //         setRespostaApi(resposta.data)
    //     }).finally(() => {
    //         setLoading(false)
    //     })
    // }, 3000);
    // }

    // useEffect(() => {
    //     chamaApi()
    // }, [])

    return (
        <View>
            {/* {
                loading ? <ActivityIndicator size={50}/> : <Text>{respostaApi}</Text>
            } */}
        </View> 
    )
}