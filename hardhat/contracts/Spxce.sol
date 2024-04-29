// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Spxce {
    struct User {
        // user id [account address]
        address uid;
        // owned files
        File[] files;
        // files shared with this use [temporarily owned]
        File[] shared;
    }

    struct File {
        // owner of this file
        address owner;
        // ipfs cid pin
        string cid;
        // encryption key | encrypted with the owners public key
        string key;
        // users [addresses] that have access to this address
        address[] accessors;
    }

    // map of address to user
    mapping(address => User) users;

    // map of file cid to file
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
        address[] memory _accessors = new address[](0);

        users[msg.sender].files.push(File(msg.sender, cid, key, _accessors));
        // files[cid] = File(msg.sender, cid, key);
        files[cid].owner = msg.sender;
        files[cid].cid = cid;
        files[cid].key = key;
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
        files[cid].accessors.push(uid);
        users[uid].shared.push(
            File(files[cid].owner, files[cid].cid, key, files[cid].accessors)
        );
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
