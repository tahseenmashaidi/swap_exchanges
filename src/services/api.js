import axios from 'axios'

export const swapToken = async (from,to,value) => {
   try {
       const result = await axios
           .get(`https://api.1inch.exchange/v2.0/quote?fromTokenAddress=${from}&toTokenAddress=${to}&amount=${value}`
           )
       // .catch((err) => {
       //     console.log('err = ', err, err.response);
       //     if (err && err.response && err.response.status !== 400) {
       //         return "Request failed with status code 400"
       //     }
       // });
       if (result) {
           return result;
       }
   }catch (e) {
       return "1inch Request failed with status code 400"
   }
}
export const uniSwap=async (from,to)=> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "__cfduid=d86d4e92fdcde6f40278b7d71aebfe3041614347141");

    const graphql = JSON.stringify({
        query: `query($token0:String!,$token1:String!){pairs(where: {token0:$token0, token1: $token1}) {
    id
    token0 {
      name
      symbol
    }
    token0Price
    token1 {
      name
      symbol
    }
    token1Price
  }}`,
        variables: {
            token0:from,token1:to
        }
    })
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
    };
    try {
        const result = await fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", requestOptions)
        if (result) {
            return result;
        }
    }catch (e) {
        return "UniSwapRequest failed with status code 400"
    }
}
export const addToken = async (id) => {
        // let id="0x6b175474e89094c44da98b954eedeac495271d0f"
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "__cfduid=d86d4e92fdcde6f40278b7d71aebfe3041614347141");

    const graphql = JSON.stringify({
        query: `query($id:String!){token(id: $id) {    decimals    name    symbol    id  }}`,
        variables: {id:id}
    })
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
    };
    try {
        const result = await fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", requestOptions)
        if (result) {
            return result;
        }
    }catch (e) {
        return "Request failed with status code 400"
    }
}
