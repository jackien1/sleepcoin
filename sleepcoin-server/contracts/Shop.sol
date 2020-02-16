pragma solidity ^0.5.0;
import "./ShopOwnership.sol";
import "./Offer.sol";

contract Shop is ShopOwnership {
    address[] public deployedOffers;

    function createRequest(string memory _title, string memory _description, uint _quantity, uint _price) public {
        address newOffer = address(new Offer(_title, _description, _quantity, _price, msg.sender));
        deployedOffers.push(newOffer);
    }

    function returnOffers() public view returns(address[] memory) {
        return deployedOffers;
    }
}
