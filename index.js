window.addEventListener('DOMContentLoaded',()=>{

    const tiles=document.querySelectorAll('.tile')
    const playerDisplay=document.querySelector('.display-player')
    const resetBtn=document.querySelector('#reset');
    const announcer=document.querySelector(".announcer");
    const bavk=document.querySelector('.background')

    let currentPlayer='X';
    let gameActive=true;


    const PLAYERX_WON='PLAYERX_WON'
    const PLAYERO_WON='PLAYERO_WON'
    const TIE='TIE';




    let board=['','','','','','','','','']
    let wining=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]


    ]



    function Resultvalidation(){

        let round=false;
        for(let i=0;i<=7;i++){

            let temp=wining[i];
            let a=board[temp[0]];
            let b=board[temp[1]];
            let c=board[temp[2]];
            if(a==''||b==''||c==''){
                continue
            }
            if(a==b && b==c){
                round=true
                break;
            }
          


        }

        if(round){
            announce(currentPlayer==='X'?PLAYERX_WON:PLAYERO_WON)//announce(PLAYERO_WON)
            gameActive=false
            bavk.style.backgroundColor="black"
            return

        }

        if(!board.includes("")){
            announce(TIE)
        }



    }

    function announce(type){

        switch(type){
            case PLAYERX_WON:
                announcer.innerHTML=`PLayer <span class="playerX">X</span> won `;
                break;
                case PLAYERO_WON:
                    announcer.innerHTML=`PLayer <span class="playerO">O</span> won `;
                    break

                    case TIE:
                        announce.innerText="It is a Tie"
                        break
        }
        announcer.classList.remove('hide');

    }


    function upadateBord(index){
        board[index]=currentPlayer;
    }

    function changePlayer(){

        playerDisplay.classList.remove(`player${currentPlayer}`)
        currentPlayer=currentPlayer==='X'?'O':"X";
        playerDisplay.innerText=currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`)
    }


    function isValid(ele){
        if(ele.innerText=='X'||ele.innerText=='O'){
            return false
        }
        return true;
    }



    function userAction(element,index){

        if(isValid(element) && gameActive){
            element.innerText=currentPlayer
            element.classList.add(`player${currentPlayer}`);
            upadateBord(index);
            Resultvalidation();
    
            changePlayer();
        }


    }


    function resetBoard(){

     
        if(currentPlayer==='O'){
            changePlayer()
        }

        tiles.forEach(element=>{
            element.innerText=""
            element.classList.remove('playerX');
            element.classList.remove('playerO');

        })
        announcer.innerHTML=""
        announcer.classList.add("hide")
    }


    tiles.forEach(function(element,index){
        
        element.addEventListener('click',()=>userAction(element,index))

    })

    resetBtn.addEventListener('click',resetBoard);




















})
