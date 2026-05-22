export class Keytracker {
    constructor(){
        this.states = {
            'w' : false,
            'a' : false,
            's' : false,
            'd' : false,
            'up' : false,
            'left' : false,
            'down' : false,
            'right' : false,
            'spaceBar' : false,
            'e' : false,
            'q' : false
        };
        this.running = false;
    }
    checkKeys(){
        window.addEventListener('keydown', (e)=>{
            if(e.key === 'w'){
                this.states.w = true;
            }
            if(e.key === 'a'){
                this.states.a = true;
            }
            if(e.key === 's'){
                this.states.s = true;
            }
            if(e.key === 'd'){
                this.states.d = true;
            }
            if(e.key === 'ArrowUp'){
                this.states.up = true;
            }
            if(e.key === 'ArrowLeft'){
                this.states.left = true;
            }
            if(e.key === 'ArrowDown'){
                this.states.down = true;
            }
            if(e.key === 'ArrowRight'){
                this.states.right = true;
            }
            if(e.keyCode === 32){
                this.states.spaceBar = true;
            }
            if(e.key === 'e'){
                this.states.e = true;
            }
            if(e.key === 'q'){
                this.states.q = true;
            }
        });

        window.addEventListener('keyup', (e)=>{
            if(e.key === 'w'){
                this.states.w = false;
            }
            if(e.key === 'a'){
                this.states.a = false;
            }
            if(e.key === 's'){
                this.states.s = false;
            }
            if(e.key === 'd'){
                this.states.d = false;
            }
            if(e.key === 'ArrowUp'){
                this.states.up = false;
            }
            if(e.key === 'ArrowLeft'){
                this.states.left = false;
            }
            if(e.key === 'ArrowDown'){
                this.states.down = false;
            }
            if(e.key === 'ArrowRight'){
                this.states.right = false;
            }
            if(e.keyCode === 32){
                this.states.spaceBar = false;
            }
            if(e.key === 'e'){
                this.states.e = false;
            }
            if(e.key === 'q'){
                this.states.q = false;
            }
        });
    }
}