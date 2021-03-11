var User =(function(){
    var name = "";
    var getName = function(){
        return name;
    }
    var setName = function(login_name){
        name = login_name
    }

    return{
        getName: getName,
        setName: setName
    }
})();
export default User;