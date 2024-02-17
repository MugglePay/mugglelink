// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WalletBalance {
    function getBalance(address walletAddress) external view returns (uint256) {
        return walletAddress.balance;
    }
}

contract WalletBalances {
    function getBalance(address[] memory walletAddresses) external view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](walletAddresses.length);
        for (uint256 i = 0; i < walletAddresses.length; i++) {
            balances[i] = walletAddresses[i].balance;
        }
        return balances;
    }
}

contract WalletBalanceProxy {
    address public implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    fallback() external {
        address _impl = implementation;
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), _impl, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 { revert(0, returndatasize()) }
            default { return(0, returndatasize()) }
        }
    }

    function getBalance(address walletAddress) external view returns (uint256) {
        return WalletBalance(implementation).getBalance(walletAddress);
    }

    function upgradeImplementation(address _newImplementation) external {
        implementation = _newImplementation;
    }
}