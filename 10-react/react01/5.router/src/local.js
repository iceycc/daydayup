const local =  {
    getList(){
        let userStr = localStorage.getItem('userlist');
        let users = userStr?JSON.parse(userStr):[];
        return users;
    },
    add(user){
        let oldUsers = local.getList();
        oldUsers.push(user);
        localStorage.setItem('userlist',JSON.stringify(oldUsers));
    },
    get(id){
        let oldUsers = local.getList();
        return oldUsers.find(item=>item.id == id);
    }
}
export default local;