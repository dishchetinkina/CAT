import axios from "axios"

interface ICuerrencyApi {
    getCurrencies: () => Promise<any>
}


export const cuerrencyApi: ICuerrencyApi = {

    getCurrencies: () => {
        return axios.get('https://api.coinbase.com/v2/currencies')
            .then((response) => response.data)
            .catch((error) => { throw error })
    }

}