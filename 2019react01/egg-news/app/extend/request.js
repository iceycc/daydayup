module.exports = {
    get isChrome(){
        console.log('this',this);//this指向的是request
        let userAgent = this.get('user-agent').toLowerCase();
        return userAgent.includes('chrome');
    }
}
// request.isChrome