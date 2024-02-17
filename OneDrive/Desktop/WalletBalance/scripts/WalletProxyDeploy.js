const main = async () => {
  
    const WalletBalances = await ethers.getContractFactory("WalletBalances");
    const walletBalances = await WalletBalances.deploy();
  
    await walletBalances.deployed()

    const WalletBalanceProxy = await ethers.getContractFactory("WalletBalanceProxy");
    const walletBalanceProxy = await WalletBalanceProxy.deploy(walletBalances.address);
  
    await walletBalanceProxy.deployed()
    console.log("WalletBalanceProxy deployed to:", walletBalanceProxy.address);
  
  };
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });