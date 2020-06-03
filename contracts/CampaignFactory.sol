pragma solidity >=0.5.0 <0.7.0;


contract CampaignFactory {
    address[] public depdCampaignAdd;

    function createCampaign(uint256 minimum) public {
        address newCampaign = address(new Campaign(minimum, msg.sender));
        depdCampaignAdd.push(newCampaign);
    }

    function getCampaign() public view returns (address[] memory) {
        return depdCampaignAdd;
    }
}


contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address payable recipient;
        bool complete;
        uint256 voteCount;
        mapping(address => bool) votes;
    }

    Request[] public requests;
    address public manager;
    uint256 minimumcontribution;
    uint256 public approversCount = 0;

    mapping(address => bool) approvers;

    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint256 minvalue, address creator) public {
        //constructor Campaign
        manager = creator;
        minimumcontribution = minvalue;
    }

    function contribute() public payable {
        require(msg.value > minimumcontribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string memory description,
        uint256 value,
        address payable recipient
    ) public onlyManager {
        Request memory obj = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            voteCount: 0
        });
        requests.push(obj);
    }

    function approveRequest(uint256 index) public {
        require(approvers[msg.sender]);
        require(!requests[index].votes[msg.sender]);

        requests[index].votes[msg.sender] = true;
        requests[index].voteCount++;
    }

    function finalize(uint256 index) public payable onlyManager {
        require(!requests[index].complete);
        require(requests[index].voteCount > (approversCount / 2));
        requests[index].recipient.transfer(requests[index].value);
        requests[index].complete = true;
    }

    function getSummary()public view returns (uint256, uint256, uint256, uint256, address){
        return (
            minimumcontribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint256) {
     return requests.length;
    }
}
