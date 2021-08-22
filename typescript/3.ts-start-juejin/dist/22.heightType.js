"use strict";
var htype22;
(function (htype22) {
    function pick(o, names) {
        return names.map(n => o[n]);
    }
    const user = {
        username: 'Jessica Lee',
        id: 460000201904141743,
        token: '460000201904141743',
        avatar: 'http://dummyimage.com/200x200',
        role: 'vip'
    };
    const res = pick(user, ['id']);
    class Images {
        constructor() {
            this.src = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
            this.alt = '谷歌';
            this.width = 500;
            this.isMale = false;
            this.say = () => {
                console.log(a + 'xxxxx');
            };
        }
    }
    let images = new Images();
    let fn = {
        say(v) {
            console.log(v + 'hhhhhhh');
        }
    };
    function pick2(o, name) {
        return name.map(n => o[n]);
    }
    pick2(user, ['username']);
})(htype22 || (htype22 = {}));
