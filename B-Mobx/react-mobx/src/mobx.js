import { observable ,action} from "mobx";

var appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});
setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

export default appState
