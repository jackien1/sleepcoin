pragma solidity ^0.5.0;

contract ShopOwnership {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        _;
        require(msg.sender == owner);
    }

    function setOwner(address _newOwner) onlyOwner public {
        owner = _newOwner;
    }
}
