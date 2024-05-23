export function drawStatusText(context, input, player) {
    context.fillStyle = 'black';
    context.font = '30px consolas';
    context.fillText('Last input: ' + input.lastKey, 20, 50);
    context.fillText('Current state: ' + player.currentState.state, 20, 90);
}