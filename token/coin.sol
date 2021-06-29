pragma solidity ^0.5.0;

contract Token {
    string  public name = "StarburstCoin";//代幣名稱
    string  public symbol = "SBC";//代幣簡寫
    uint256 public totalSupply;//總供應量
    uint8   public decimals = 4;//代幣最小單位小數數量

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );
    //轉帳 _from:發送者 _to:收款者 _value交易數量
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
    //認證交易 
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    function balanceOfG(address account) public view returns (uint256) {
        return balanceOf[account];
    }

    function mint(address account,uint amount) public {
        require(amount < 1e60);
        balanceOf[account] += amount;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}