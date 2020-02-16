pragma solidity ^0.5.0;

contract Offer {
    string title;
    string description;
    uint quantity;
    uint price;
    address owner;
    address[] claimers;

    constructor(string memory _title, string memory _description, uint _quantity, uint _price, address _owner) public {
        title = _title;
        description = _description;
        quantity = _quantity;
        price = _price;
        owner = _owner;
    }

    function claimOffer() public payable {
        require(claimers.length < quantity);
        require(msg.value >= price);
        claimers.push(msg.sender);
    }

    function getDetails() public view returns(string memory, string memory, uint, uint, address, address[] memory) {
        return (title, description, quantity, price, owner, claimers);
    }
}
