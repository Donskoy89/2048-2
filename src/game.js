class Game {
    constructor() {
        this.score = 0;
        this.playfield = [
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.differences = {
            rid: [],
            appears: []
        };
        // this.createCell();
        // this.createCell();
    }
    createCell() {
        let emptyCells = [];
        for (let y = 0; y < this.playfield.length; y++) {
            for (let x = 0; x < this.playfield[y].length; x++) {
                if (this.playfield[y][x] == 0)
                    emptyCells.push([y, x]);
            }
        }
        let [y, x] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        this.playfield[y][x] = Math.random() < 0.8 ? 2 : 4;
        this.differences.appears.push([y, x]);
    }
    //***************************************************
    // Собирае массив координат изменённого состояния и передаём его в getStatus!!
    //***************************************************

    copyArr() {
        let copyMainArr = [];
        for (let y = 0; y < this.playfield.length; y++) {
            copyMainArr[y] = [];
            for (let x = 0; x < this.playfield[y].length; x++) {
                copyMainArr[y][x] = this.playfield[y][x];
            }
        }
        return copyMainArr;
    }

    moveUp() {
        let playfield = this.playfield;
        let flag = false;

        let copyMainArr = this.copyArr();

        // loop1:
        for (let x = 0; x < 4; x++) {
            let colArr = [];
            for (let y = 0; y < 4; y++) {
                colArr.push(playfield[y][x])
            }

            for (let i = 0; i < 4; i++) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.push(0);
                }
            }

            for (let i = 0; i < colArr.length; i++) {
                if (colArr[i] == 0) break;
                if (colArr[i] == colArr[+i+1]) {
                    colArr[i] *= 2;
                    colArr[+i+1] = 0;
                    this.score += colArr[i];
                    i++;
                }
            }

            for (let i = 0; i < 4; i++) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.push(0);
                }
            }

            for (let i = 0; i < 4; i++) {
                playfield[i][x] = colArr[i];
            }
        }
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (playfield[y][x] != copyMainArr[y][x]) {
                    flag = true;
                    if(this.playfield[y][x] == 0) {
                        this.differences.rid.push([y,x]);
                    } else {
                        this.differences.appears.push([y,x]);
                    }
                }
            }
        }
        if(flag) this.createCell();
        console.log(this.score);
    }

    moveDown() {
        let playfield = this.playfield;
        let flag = false;

        let copyMainArr = this.copyArr();

        // loop1:
        for (let x = 0; x < 4; x++) {
            let colArr = [];
            for (let y = 0; y < 4; y++) {
                colArr.push(playfield[y][x])
            }

            for (let i = 0; i < 4; i++) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.unshift(0);
                }
            }


            for (let i = 3; i >= 0; i--) {
                if (colArr[i] == 0) break;
                if (colArr[i] == colArr[i-1]) {
                    colArr[i] *= 2;
                    colArr[i-1] = 0;
                    this.score += colArr[i];
                    i--;
                }
            }

            for (let i = 0; i < 4; i++) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.unshift(0);
                }
            }

            for (let i = 0; i < 4; i++) {
                playfield[i][x] = colArr[i];
            }
        }
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (playfield[y][x] != copyMainArr[y][x]) {
                    flag = true;
                    if(this.playfield[y][x] == 0) {
                        this.differences.rid.push([y,x]);
                    } else {
                        this.differences.appears.push([y,x]);
                    }
                }
            }
        }
        if(flag) this.createCell();
        console.log(this.score);
    }

    moveLeft() {
        let playfield = this.playfield;
        let flag = false;

        let copyMainArr = this.copyArr();

        // loop1:
        for (let y = 0; y < 4; y++) {
            let colArr = [];
            for (let x = 0; x < 4; x++) {
                colArr.push(playfield[y][x])
            }

            for (let i = colArr.length-1; i >= 0; i--) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.push(0);
                }
            }

            for (let i = 0; i < 4; i++) {
                if (colArr[i] == 0) break;
                if (colArr[i] == colArr[i+1]) {
                    colArr[i] *= 2;
                    colArr[i+1] = 0;
                    this.score += colArr[i];
                    i++;
                }
            }

            for (let i = colArr.length-1; i >= 0; i--) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.push(0);
                }
            }

            playfield.splice(y, 1, colArr);
        }
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (playfield[y][x] != copyMainArr[y][x]) {
                    flag = true;
                    if(this.playfield[y][x] == 0) {
                        this.differences.rid.push([y,x]);
                    } else {
                        this.differences.appears.push([y,x]);
                    }
                }
            }
        }
        if(flag) this.createCell();
        console.log(this.score);
    }

    moveRight() {
        let playfield = this.playfield;
        let flag = false;

        let copyMainArr = this.copyArr();

        // loop1:
        for (let y = 0; y < 4; y++) {
            let colArr = [];
            for (let x = 0; x < 4; x++) {
                colArr.push(playfield[y][x])
            }

            for (let i = 0; i < 4; i++) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.unshift(0);
                }
            }

            for (let i = 3; i >= 0; i--) {
                if (colArr[i] == 0) break;
                if (colArr[i] == colArr[i-1]) {
                    colArr[i] *= 2;
                    colArr[i-1] = 0;
                    this.score += colArr[i];
                    i--;
                }
            }

            for (let i = 0; i < 4; i++) {
                if(colArr[i] == 0) {
                    colArr.splice(i, 1);
                    colArr.unshift(0);
                }
            }

            playfield.splice(y, 1, colArr);
        }
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (playfield[y][x] != copyMainArr[y][x]) {
                    flag = true;
                    if(this.playfield[y][x] == 0) {
                        this.differences.rid.push([y,x]);
                    } else {
                        this.differences.appears.push([y,x]);
                    }
                }
            }
        }
        if(flag) this.createCell();
        console.log(this.score);
    }
   
    getState() {
        return {
            playfield: this.playfield,
            score: this.score,
            dif: this.differences
        };
    }
}