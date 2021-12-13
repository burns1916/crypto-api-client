import { useState, useEffect } from 'react'

const CryptoContainer = () => {

    const [topCryptos, setTopCryptos] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
           const res = await fetchTopCryptos()
           setTopCryptos(res)
        }
        fetchData()
    }, [])

    const fetchTopCryptos = async () => {
        const res = await fetch('https://api.coinlore.net/api/tickers/')
        const blah = await res.json()
        const blahblah = blah
        return blahblah.data

    }



    return (
        <div>
            {topCryptos.map((crypto) => <li key={crypto.id}>{crypto.name} - {crypto.symbol}</li>)}
            {/* {topCryptos.sort((a, b) => {
                return a.rank - b.rank
            })} */}
            {/* {topCryptos[0].data.map((crypto) => <>{crypto.id}</>)} */}
        </div>
    )
}

export default CryptoContainer
