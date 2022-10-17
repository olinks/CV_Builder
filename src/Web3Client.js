// import Web3 from 'web3';

let address;

export const init = () => {
    let provider = window.ethereum;

    if(typeof provider !== 'undefined'){
      
      //Get Accounts and Addresses
      provider
      .request({method: 'eth_requestAccounts'})
      .then(accounts => {
          address = accounts[0];
        console.log(`connected account ${address}`);
      })
      .catch(err => {
        console.log(err);
      });

      // Listen to account Change
      window.ethereum.on('accountsChanged', function (accounts){
          address = accounts[0];
          console.log(`Acconts changed to ${address}`);
        });

        // const getaddy = () => {
            
        // }
        return address;

    }

    // const web3 = new Web3(provider);
}
