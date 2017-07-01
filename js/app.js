new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.playerHealth= 100;
            this.monsterHealth= 100;
            this.gameIsRunning= true;
            this.turns=[];
        },
        attack: function(){
                      
            this.playerAttack();
            if(this.checkWin()){
                return;
            } 
            this.monsterAttack();
        },
        specialAttack: function(){
            this.playerAttack(10,20);
            if(this.checkWin()){
                return;
            } 
            this.monsterAttack();
        },
        playerAttack: function(min=3,max=10){
            var damage = this.calculateDamage(min,max);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster ' + (min==3 ? '' : 'Hard ') + 'for ' + damage
            });
            
        },
        monsterAttack: function(){
            var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
            this.checkWin();
        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if(this.playerHealth <= 0 || this.monsterHealth <= 0){
                var message = "You Won!";
                if(this.playerHealth < this.monsterHealth){
                    message = "You Lost!"
                }
                if(confirm(message + 'New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }else{
                return false;
            }
        }
    }
});