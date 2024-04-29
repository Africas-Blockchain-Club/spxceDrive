// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Spxce {
    struct User {
        address uid;
        File[] files;
        File[] shared;
    }

    struct File {
        address owner;
        string cid;
        string key;
    }

    mapping(address => User) users;

    mapping(string => File) files;

    function getUser()
        public
        view
        isUserExists(msg.sender)
        returns (address uid)
    {
        return users[msg.sender].uid;
    }

    function isUser() public view returns (bool isuser) {
        isuser = false;
        if (users[msg.sender].uid == msg.sender) {
            isuser = true;
        } else {
            isuser = false;
        }

        return isuser;
    }

    function createUser() public {
        require(users[msg.sender].uid != msg.sender, "USER ALREADY");

        users[msg.sender].uid = msg.sender;
    }

    function getFiles()
        public
        view
        isUserExists(msg.sender)
        returns (File[] memory)
    {
        File[] memory _files = new File[](users[msg.sender].files.length);

        for (uint256 idx = 0; idx < _files.length; idx++) {
            _files[idx] = users[msg.sender].files[idx];
        }

        return _files;
    }

    function getSharedFiles()
        public
        view
        isUserExists(msg.sender)
        returns (File[] memory)
    {
        File[] memory _files = new File[](users[msg.sender].shared.length);

        for (uint256 idx = 0; idx < _files.length; idx++) {
            _files[idx] = users[msg.sender].shared[idx];
        }

        return _files;
    }

    function addFile(string calldata cid, string calldata key) public {
        users[msg.sender].uid = msg.sender;
        users[msg.sender].files.push(File(msg.sender, cid, key));
        files[cid] = File(msg.sender, cid, key);
    }

    function shareFile(
        address uid,
        string memory cid,
        string memory key
    )
        public
        isUserExists(uid) //  isFileExists(cid)
    //   isFileOwner(cid)
    {
        // bool isShared = false;

        // for (uint256 idx = 0; idx < users[uid].shared.length; idx++) {
        //     if (
        //         keccak256(bytes(users[uid].shared[idx].cid)) ==
        //         keccak256(bytes(cid))
        //     ) {
        //         isShared = true;
        //         break;
        //     }
        // }

        // require(isShared == false, "File Already Shared With Account.");

        users[uid].shared.push(File(msg.sender, cid, key));
    }

    modifier isUserExists(address uid) {
        require(users[msg.sender].uid == msg.sender, "USER NOT FOUND");
        _;
    }

    modifier isFileExists(string memory cid) {
        require(
            keccak256(bytes(files[cid].cid)) == keccak256(bytes(cid)),
            "FILE NOT FOUND"
        );
        _;
    }

    modifier isFileOwner(string memory cid) {
        require(files[cid].owner == msg.sender);
        _;
    }
}
//
