const root = document.getElementById('root');
const game = new Game();
const view = new View(root, 600, 600);

window.game = game;
window.view = view;

view.render(game.getState());

document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 37:
            game.moveLeft();
            view.render(game.getState());
            break;
        case 38:
            game.moveUp();
            view.render(game.getState());
            console.log(game.getState().dif);
            break;
        case 39:
            game.moveRight();
            view.render(game.getState());
            break;
        case 40:
            game.moveDown();
            view.render(game.getState());
            console.log(game.getState().dif);
            break;
    }
})