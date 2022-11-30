import chainIds from "./chainList.js";

const button = document.getElementById('button-click')
const address = document.getElementById('address')
const network = document.getElementById('network')

button.addEventListener('click' , e =>{
    let account;
    ethereum.request({method: 'eth_requestAccounts'}).then(acc=>{
        account = acc[0]
        address.innerText = 'Your addres is: ' + account
    })

    ethereum.request({ method: 'eth_chainId' }).then(chainId=>{
        getCurrentChain(chainId)
    })
})

ethereum.on('chainChanged', (chainId) => {
    getCurrentChain(chainId)
});

const getCurrentChain = (chainId)=>{
    const chain = chainIds[parseInt(chainId)];
    if(chain){
        return network.innerText = 'you are connected to: ' + chain
    }
    return network.innerText = `chain not found, might be a test net`
}

