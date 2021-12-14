import { useState, useEffect } from 'react'

const CryptoContainer = () => {

    const [topCryptos, setTopCryptos] = useState(null)
    const [storedCryptos, setStoredCryptos] = useState([])

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

    const getRandomCrypto = () => {
        const setRandomCrypto = Math.floor(Math.random() * 101)
        setStoredCryptos([...storedCryptos, topCryptos[setRandomCrypto]])
    }

    return (
        <div>
            <input type="button" onClick={() => getRandomCrypto()} value="click Me!!" />
            {storedCryptos.length > 0 ? 
            storedCryptos.map((crypto) => <li key={crypto.id}> {crypto.name} - {crypto.symbol}</li>) 
            :
            "no stored crypto"}
            {/* {topCryptos.map((crypto) => <li key={crypto.id}>{crypto.name} - {crypto.symbol}</li>)} */}
            {/* {topCryptos.sort((a, b) => {
                return a.rank - b.rank
            })} */}
            {/* {topCryptos[0].data.map((crypto) => <>{crypto.id}</>)} */}
        </div>
    )
}

export default CryptoContainer
