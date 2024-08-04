var computerScore = 0;
var playerScore = 0;

var  originalHTML = document.body.innerHTML;


var myrock = document.getElementById('rock');
var mypaper = document.getElementById('paper');
var myscissors = document.getElementById('scissors');

var mychoices = document.querySelector('.choices');
var mychoicesContainer = document.querySelector('.choice-container');
var mylines = document.querySelectorAll('.mylines');

function mygame()
{
    document.addEventListener('DOMContentLoaded', () => {
        const rules = document.querySelector('.rules');
        const pressToggleRules = document.querySelector('.rules-btn');
        const cancellingButton = document.querySelector('.cancel');
    
       pressToggleRules.addEventListener('click', () => {
            rules.classList.toggle('after');
            pressToggleRules.style.visibility = 'hidden';
        });
    
        cancellingButton.addEventListener('click', () => {
            if (rules.classList.contains('after')) {
                rules.classList.remove('after');
            } 
            pressToggleRules.style.visibility = 'visible';
        });
    
        myrock.addEventListener('click', () => {
            console.log('Clicked rock');
            rps('rock');
        });
    
        mypaper.addEventListener('click', () => {
            console.log('Clicked paper');
            rps('paper');
        });
    
        myscissors.addEventListener('click', () => {
            console.log('Clicked scissors');
            rps('scissors');
        });
    
       mychoices.addEventListener('click', () => {
            console.log('yes');
            rules.style.marginBottom = '1800px';
            if (mychoicesContainer.classList.contains('after')) {
                mychoicesContainer.classList.remove('after');
            } else {
                mychoicesContainer.style.visibility = 'hidden';
            }
    
            mychoicesContainer.querySelectorAll('button').forEach(element => {
                element.classList.remove('after');
            });
            mylines.forEach(element => {
                element.style.visibility = 'hidden';
            });
        });
    });
    
    function randomSelector(arr) {
        const randomChoice = Math.floor(Math.random() * arr.length);
        return arr[randomChoice];
    }
    
    function rps(userChoice) 
    {
        var options = ['rock', 'paper', 'scissors'];

        var computerChoice = randomSelector(options);
        let line1, line2;
    
        if (userChoice === computerChoice) {
            line1 = 'TIE UP';
            line2 = '';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            line1 = 'YOU WIN';
            line2 = 'AGAINST PC';
            playerScore++;
            

            //I need to append outercircles behind this 
            // may be something like outercircles.appenchild = playerscore
            




        } else {
            line1 = 'YOU LOST';
            line2 = 'AGAINST PC';
            computerScore++;
        }
    
        document.getElementById('scoreid').innerText = playerScore;
        document.getElementById('compid').innerText = computerScore;

        function outercircles(){
            var circles = document.createElement('div');
            circles.style.width = '135px';
            circles.style.height = '125px';
            circles.style.borderRadius = '90px';
            circles.style.backgroundClip = 'green';
            circles.style.zIndex = '-1';

        }

        outercircles();
    
        let resultContainer = document.getElementById('Textresult');
        resultContainer.innerHTML = '';
        resultContainer.style.height = '500px';
        resultContainer.style.display = 'flex';
        resultContainer.style.justifyContent = 'center';
        resultContainer.style.alignItems = 'center';
        resultContainer.style.flexDirection = 'column';
        resultContainer.style.lineHeight = '2';
        resultContainer.style.position = 'relative';
    
        let resultMessage = document.createElement('div');
        resultMessage.innerText = line1;
        resultMessage.style.color = 'white';
        resultMessage.style.fontSize = '38px';
        resultMessage.style.textAlign = 'center';
        resultMessage.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
        resultMessage.style.zIndex = 2;
        resultMessage.style.fontWeight = '700';
        resultMessage.style.marginBottom = '18px';
        resultMessage.style.letterSpacing = '2.3px';
        resultContainer.appendChild(resultMessage);
    
        let resultMessage2 = document.createElement('div');
        resultMessage2.innerText = line2;
        resultMessage2.style.color = 'white';
        resultMessage2.style.fontSize = '23px';
        resultMessage2.style.textAlign = 'center';
        resultMessage2.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
        resultMessage2.style.zIndex = 2;
        resultMessage2.style.fontWeight = '700';
        resultMessage2.style.position = 'absolute';
        resultMessage2.style.marginBottom = '-64px';
        resultMessage2.style.letterSpacing = '2.5px';
        resultContainer.appendChild(resultMessage2);
    
        var playagain = document.createElement('button');
        playagain.innerText = 'PLAY AGAIN';
        playagain.style.backgroundColor = 'white';
        playagain.style.fontSize = '15px';
        playagain.style.textAlign = 'center';
        playagain.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
        playagain.style.zIndex = 2;
        playagain.style.fontWeight = '600';
        playagain.style.width = '174px';
        playagain.style.display = 'flex';
        playagain.style.justifyContent = 'center';
        playagain.style.alignItems = 'center';
        playagain.style.height = '44px';
        playagain.style.borderRadius = '9px';
        playagain.style.position = 'absolute';
        playagain.style.marginBottom = '-180px';
        playagain.style.color = 'rgba(107, 107, 107, 1)';
        playagain.style.border = '0.1px solid white';
        playagain.style.letterSpacing = '1px';
        resultContainer.appendChild(playagain);
    
        // Show player's choice

        // Here we just referenced or predeclared our func and gave some values to it 

        displayChoice(resultContainer, userChoice, true);
        displayChoice(resultContainer, computerChoice, false);
    
        playagain.addEventListener('click', () => {
            while (resultContainer.firstChild) {
                resultContainer.removeChild(resultContainer.firstChild);
            }
    
            if (mychoicesContainer.classList.contains('after')) {
                mychoices.classList.remove('after');
            } else {
                mychoicesContainer.style.visibility = 'visible';
            }
    
            mychoicesContainer.querySelectorAll('button').forEach(myElement => {
                myElement.classList.add('after');
                myElement.style.zIndex = '4';
            });
            mylines.forEach(newelement => {
                newelement.style.visibility = 'visible';
                newelement.style.zIndex = '3';
            });
        });

      
    
        if (computerScore === 15|| playerScore === 15) 
            {
            clearInterval(interval);
            document.body.innerHTML = '';
            let cupImage = document.createElement('div');
            let hurray = document.createElement('div');
            let wongamemessage = document.createElement('div');
            cupImage.style.backgroundSize = 'cover';
            cupImage.style.width = '208px'; 
             cupImage.style.height = '206px'; 
             cupImage.style.margin = 'auto'; 
             cupImage.style.position = 'absolute';
             cupImage.style.top = '250px'; 
            cupImage.style.left = '50%'; 
            cupImage.style.backgroundImage ='url(./cup.png)';
            cupImage.style.marginTop = '18px';
            cupImage.style.zIndex = '3';
            cupImage.style.transform = 'translate(-50%, -50%)'; //remember this for centering  
            hurray.innerText = 'HURRAY!!';
            hurray.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
            hurray.style.fontWeight = '600';
            hurray.style.fontSize = '99px';
            hurray.style.lineHeight = '106px';
            hurray.style.top = '400px';
            hurray.style.left = '34%';
            hurray.style.zIndex = '3';
            hurray.style.height = '78px';
            hurray.style.width = '464px';
            hurray.style.color = 'rgba(255, 255, 255, 1)';
            hurray.style.position = 'absolute';
            hurray.style.margin = 'auto';
            hurray.style.letterSpacing = '9px';

            wongamemessage.innerText = 'YOU WON THE GAME';
            wongamemessage.style.color = 'rgba(255, 255, 255, 1)';
            wongamemessage.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
            wongamemessage.style.fontWeight = '600'
            wongamemessage.style.fontSize = '40px';
            wongamemessage.style.lineHeight = '48px';
            wongamemessage.style.margin = 'auto';
            wongamemessage.style.top = '514px';
            wongamemessage.style.position = 'absolute';
            wongamemessage.style.height = '48px';
            wongamemessage.style.width = '510px';
            wongamemessage.style.letterSpacing = '6.6px';
            wongamemessage.style.left = '34.5%';

            var playagain2 = document.createElement('button');
            playagain2.innerText = 'PLAY AGAIN';
            playagain2.style.backgroundColor = 'white';
            playagain2.style.fontSize = '15px';
            playagain2.style.textAlign = 'center';
            playagain2.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
            playagain2.style.zIndex = 2;
            playagain2.style.fontWeight = '600';
            playagain2.style.width = '174px';
            playagain2.style.height = '44px';
            playagain2.style.borderRadius = '9px';
            playagain2.style.position = 'absolute';
            playagain2.style.top = '610px';
            playagain2.style.color = 'rgba(107, 107, 107, 1)';
            playagain2.style.border = '0.1px solid white';
            playagain2.style.letterSpacing = '1px';
            playagain2.style.left = '44.7%';

          


            var star1 = document.createElement('div');
            star1.style.backgroundSize = 'cover';
            star1.style.width = '130px'; 
            star1.style.height = '125px'; 
            star1.style.margin = 'auto'; 
            star1.style.position = 'absolute';
            star1.style.top = '226px'; 
            star1.style.left = '59%'; 
            star1.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star1.style.zIndex = '3';

            var star2= document.createElement('div');
            star2.style.backgroundSize = 'cover';
            star2.style.width = '115px'; 
            star2.style.height = '115px'; 
            star2.style.margin = 'auto'; 
            star2.style.position = 'absolute';
            star2.style.top = '179px'; 
            star2.style.left = '31%'; 
            star2.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star2.style.zIndex = '3';


            var star3 = document.createElement('div');
            star3.style.backgroundSize = 'cover';
            star3.style.width = '94px'; 
            star3.style.height = '93px'; 
            star3.style.margin = 'auto'; 
            star3.style.position = 'absolute';
            star3.style.top = '62px'; 
            star3.style.left = '54%'; 
            star3.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star3.style.zIndex = '3';

            var star4 = document.createElement('div');
            star4.style.backgroundSize = 'cover';
            star4.style.width = '32px'; 
            star4.style.height = '32px'; 
            star4.style.margin = 'auto'; 
            star4.style.position = 'absolute';
            star4.style.top = '94.5px'; 
            star4.style.left = '47%'; 
            star4.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star4.style.zIndex = '3';

            var star5 = document.createElement('div');
            star5.style.backgroundSize = 'cover';
            star5.style.width = '65px'; 
            star5.style.height = '65px'; 
            star5.style.margin = 'auto'; 
            star5.style.position = 'absolute';
            star5.style.top = '119.5px'; 
            star5.style.left = '37%'; 
            star5.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star5.style.zIndex = '3';

            
            var star6 = document.createElement('div');
            star6.style.backgroundSize = 'cover';
            star6.style.width = '32px'; 
            star6.style.height = '32px'; 
            star6.style.margin = 'auto'; 
            star6.style.position = 'absolute';
            star6.style.top = '62px'; 
            star6.style.left = '41%'; 
            star6.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star6.style.zIndex = '3';

                 
            var star7 = document.createElement('div');
            star7.style.backgroundSize = 'cover';
            star7.style.width = '32px'; 
            star7.style.height = '32px'; 
            star7.style.margin = 'auto'; 
            star7.style.position = 'absolute';
            star7.style.top = '330px'; 
            star7.style.left = '39.2%'; 
            star7.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star7.style.zIndex = '3';

            var star8 = document.createElement('div');
            star8.style.backgroundSize = 'cover';
            star8.style.width = '32px'; 
            star8.style.height = '32px'; 
            star8.style.margin = 'auto'; 
            star8.style.position = 'absolute';
            star8.style.top = '155px'; 
            star8.style.left = '62%'; 
            star8.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star8.style.zIndex = '3';

            document.body.appendChild(cupImage); //MOST IMP 
            document.body.appendChild(hurray);
            document.body.appendChild(wongamemessage);
            document.body.appendChild(playagain2);
            document.body.appendChild(star1);
            document.body.appendChild(star2);
            document.body.appendChild(star3);
            document.body.appendChild(star4);
            document.body.appendChild(star5);
            document.body.appendChild(star6);
            document.body.appendChild(star7);
            document.body.appendChild(star8);

            playagain2.addEventListener('click', () => {

                document.body.innerHTML = originalHTML;
                recreate();
               

            });

        }
    }

    function recreate() {

        const rules = document.querySelector('.rules');
        const pressToggleRules = document.querySelector('.rules-btn');
        const cancellingButton = document.querySelector('.cancel');
        var newcomputerScore = 0;
        var newplayerScore = 0;


        pressToggleRules.addEventListener('click', () => {
            rules.classList.toggle('after');
            pressToggleRules.style.visibility = 'hidden';
        });
    
        cancellingButton.addEventListener('click', () => {
            if (rules.classList.contains('after')) {
                rules.classList.remove('after');
            } 
            pressToggleRules.style.visibility = 'visible';
        }); 


        const myrock = document.getElementById('rock');
        const mypaper = document.getElementById('paper');
        const myscissors = document.getElementById('scissors');

        var mychoices = document.querySelector('.choices');
        var mychoicesContainer = document.querySelector('.choice-container');
        var mylines = document.querySelectorAll('.mylines');

        myrock.addEventListener('click', () => {
            console.log('Clicked rock');
            rps('rock');
        });
    
        mypaper.addEventListener('click', () => {
            console.log('Clicked paper');
            rps('paper');
        });
    
        myscissors.addEventListener('click', () => {
            console.log('Clicked scissors');
            rps('scissors');
        });

        mychoices.addEventListener('click',() =>{
            console.log('yes');
            rules.style.marginBottom = '1800px';
            if(mychoicesContainer.classList.contains('after'))
                {
                    mychoicesContainer.classList.remove('after');
                } else {
                    mychoicesContainer.style.visibility = 'hidden';
                }
        
                mychoicesContainer.querySelectorAll('button').forEach(element => {
                    element.classList.remove('after');
                });
                mylines.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });

            function randomSelector(arr) {
                const randomChoice = Math.floor(Math.random() * arr.length);
                return arr[randomChoice];
            }
            
            function rps(userChoice) 
            {
                var options = ['rock', 'paper', 'scissors'];
                var computerChoice = randomSelector(options);
                let line1, line2;
            
                if (userChoice === computerChoice) {
                    line1 = 'TIE UP';
                    line2 = '';
                } else if (
                    (userChoice === 'rock' && computerChoice === 'scissors') ||
                    (userChoice === 'paper' && computerChoice === 'rock') ||
                    (userChoice === 'scissors' && computerChoice === 'paper')
                ) {
                    line1 = 'YOU WIN';
                    line2 = 'AGAINST PC';
                    newplayerScore++;
                } else {
                    line1 = 'YOU LOST';
                    line2 = 'AGAINST PC';
                    newcomputerScore++;
                }
            
         
                document.getElementById('scoreid').innerText = newplayerScore;
                document.getElementById('compid').innerText = newcomputerScore;
            
                
                let resultContainer2 = document.getElementById('Textresult');
                resultContainer2.innerHTML = '';
                resultContainer2.style.height = '500px';
                resultContainer2.style.display = 'flex';
                resultContainer2.style.justifyContent = 'center';
                resultContainer2.style.alignItems = 'center';
                resultContainer2.style.flexDirection = 'column';
                resultContainer2.style.lineHeight = '2';
                resultContainer2.style.position = 'relative';
            
                let resultMessage3 = document.createElement('div');
                resultMessage3.innerText = line1;
                resultMessage3.style.color = 'white';
                resultMessage3.style.fontSize = '38px';
                resultMessage3.style.textAlign = 'center';
                resultMessage3.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
                resultMessage3.style.zIndex = 2;
                resultMessage3.style.fontWeight = '700';
                resultMessage3.style.marginBottom = '18px';
                resultMessage3.style.letterSpacing = '2.3px';
                resultContainer2.appendChild(resultMessage3);
            
                let resultMessage2 = document.createElement('div');
                resultMessage2.innerText = line2;
                resultMessage2.style.color = 'white';
                resultMessage2.style.fontSize = '23px';
                resultMessage2.style.textAlign = 'center';
                resultMessage2.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
                resultMessage2.style.zIndex = 2;
                resultMessage2.style.fontWeight = '700';
                resultMessage2.style.position = 'absolute';
                resultMessage2.style.marginBottom = '-64px';
                resultMessage2.style.letterSpacing = '2.5px';
                resultContainer2.appendChild(resultMessage2);
            
                var playagain = document.createElement('button');
                playagain.innerText = 'PLAY AGAIN';
                playagain.style.backgroundColor = 'white';
                playagain.style.fontSize = '15px';
                playagain.style.textAlign = 'center';
                playagain.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
                playagain.style.zIndex = 2;
                playagain.style.fontWeight = '600';
                playagain.style.width = '174px';
                playagain.style.display = 'flex';
                playagain.style.justifyContent = 'center';
                playagain.style.alignItems = 'center';
                playagain.style.height = '44px';
                playagain.style.borderRadius = '9px';
                playagain.style.position = 'absolute';
                playagain.style.marginBottom = '-180px';
                playagain.style.color = 'rgba(107, 107, 107, 1)';
                playagain.style.border = '0.1px solid white';
                playagain.style.letterSpacing = '1px';
                resultContainer2.appendChild(playagain);



                playagain.addEventListener('click',againPlayagain);

                function againPlayagain()
                {
                    while(resultContainer2.firstChild)
                    {
                        resultContainer2.removeChild(resultContainer2.firstChild);
                    }

                    if(mychoicesContainer.classList.contains('after'))
                    {
                        mychoices.classList.remove('after');
                    }
                    else 
                    {
                        mychoicesContainer.style.visibility = 'visible';
                    }

                    mychoicesContainer.querySelectorAll('button').forEach(myElement =>

                        {
                            myElement.classList.add('after');
                            myElement.style.zIndex = '4'
                        }
                    );

                    mylines.forEach(newelement=>{
                        newelement.style.visibility = 'visible';
                        newelement.style.zIndex = '3';
                    });
                }



                if(newcomputerScore ===15||newplayerScore===15)
                {
                    clearInterval(interval);
                    document.body.innerHTML = '';
                    let cupImage2 = document.createElement('div');
                    let hurray2 = document.createElement('div');
                    let wongamemessage2 = document.createElement('div');
                    cupImage2.style.backgroundSize = 'cover';
                    cupImage2.style.width = '208px'; 
                     cupImage2.style.height = '206px'; 
                     cupImage2.style.margin = 'auto'; 
                     cupImage2.style.position = 'absolute';
                     cupImage2.style.top = '250px'; 
                    cupImage2.style.left = '50%'; 
                    cupImage2.style.backgroundImage ='url(./cup.png)';
                    cupImage2.style.marginTop = '18px';
                    cupImage2.style.zIndex = '3';
                    cupImage2.style.transform = 'translate(-50%, -50%)'; //remember this for centering  
                    hurray2.innerText = 'HURRAY!!';
                    hurray2.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
                    hurray2.style.fontWeight = '600';
                    hurray2.style.fontSize = '99px';
                    hurray2.style.lineHeight = '106px';
                    hurray2.style.top = '400px';
                    hurray2.style.left = '34%';
                    hurray2.style.zIndex = '3';
                    hurray2.style.height = '78px';
                    hurray2.style.width = '464px';
                    hurray2.style.color = 'rgba(255, 255, 255, 1)';
                    hurray2.style.position = 'absolute';
                    hurray2.style.margin = 'auto';
                    hurray2.style.letterSpacing = '9px';

                    wongamemessage2.innerText = 'YOU WON THE GAME';
                    wongamemessage2.style.color = 'rgba(255, 255, 255, 1)';
                    wongamemessage2.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
                    wongamemessage2.style.fontWeight = '600'
                    wongamemessage2.style.fontSize = '40px';
                    wongamemessage2.style.lineHeight = '48px';
                    wongamemessage2.style.margin = 'auto';
                    wongamemessage2.style.top = '514px';
                    wongamemessage2.style.position = 'absolute';
                    wongamemessage2.style.height = '48px';
                    wongamemessage2.style.width = '510px';
                    wongamemessage2.style.letterSpacing = '6.6px';
                    wongamemessage2.style.left = '34.5%';

                    var playagain3 = document.createElement('button');
                    playagain3.innerText = 'PLAY AGAIN';
                    playagain3.style.backgroundColor = 'white';
                    playagain3.style.fontSize = '15px';
                    playagain3.style.textAlign = 'center';
                    playagain3.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,sans-serif';
                    playagain3.style.zIndex = 2;
                    playagain3.style.fontWeight = '600';
                    playagain3.style.width = '174px';
                    playagain3.style.height = '44px';
                    playagain3.style.borderRadius = '9px';
                    playagain3.style.position = 'absolute';
                    playagain3.style.top = '610px';
                    playagain3.style.color = 'rgba(107, 107, 107, 1)';
                    playagain.style.border = '0.1px solid white';
                    playagain3.style.letterSpacing = '1px';
                    playagain3.style.left = '44.7%';

                    var star12 = document.createElement('div');
                    star12.style.backgroundSize = 'cover';
                    star12.style.width = '130px'; 
                    star12.style.height = '125px'; 
                    star12.style.margin = 'auto'; 
                    star12.style.position = 'absolute';
                    star12.style.top = '226px'; 
                    star12.style.left = '59%'; 
                    star12.style.backgroundImage ='url(./star1.png)';
                    // star1.style.marginTop = '18px';
                    star12.style.zIndex = '3';

                    var star21= document.createElement('div');
                    star21.style.backgroundSize = 'cover';
                    star21.style.width = '115px'; 
                    star21.style.height = '115px'; 
                    star21.style.margin = 'auto'; 
                    star21.style.position = 'absolute';
                    star21.style.top = '179px'; 
                    star21.style.left = '31%'; 
                    star21.style.backgroundImage ='url(./star1.png)';
                    // star1.style.marginTop = '18px';
                    star21.style.zIndex = '3';

                    var star31 = document.createElement('div');
                    star31.style.backgroundSize = 'cover';
                    star31.style.width = '94px'; 
                    star31.style.height = '93px'; 
                    star31.style.margin = 'auto'; 
                    star31.style.position = 'absolute';
                    star31.style.top = '62px'; 
                    star31.style.left = '54%'; 
                    star31.style.backgroundImage ='url(./star1.png)';
                    // star1.style.marginTop = '18px';
                    star31.style.zIndex = '3';

                    var star41 = document.createElement('div');
                    star41.style.backgroundSize = 'cover';
                    star41.style.width = '32px'; 
                    star41.style.height = '32px'; 
                    star41.style.margin = 'auto'; 
                    star41.style.position = 'absolute';
                    star41.style.top = '94.5px'; 
                    star41.style.left = '47%'; 
                    star41.style.backgroundImage ='url(./star1.png)';
                    // star1.style.marginTop = '18px';
                    star41.style.zIndex = '3';

                    var star51 = document.createElement('div');
                    star51.style.backgroundSize = 'cover';
                    star51.style.width = '65px'; 
                    star51.style.height = '65px'; 
                    star51.style.margin = 'auto'; 
                    star51.style.position = 'absolute';
                    star51.style.top = '119.5px'; 
                    star51.style.left = '37%'; 
                    star51.style.backgroundImage ='url(./star1.png)';
                    // star1.style.marginTop = '18px';
                    star51.style.zIndex = '3';

                    var star61 = document.createElement('div');
                    star61.style.backgroundSize = 'cover';
                    star61.style.width = '32px'; 
                    star61.style.height = '32px'; 
                    star61.style.margin = 'auto'; 
                    star61.style.position = 'absolute';
                    star61.style.top = '62px'; 
                    star61.style.left = '41%'; 
                    star61.style.backgroundImage ='url(./star1.png)';
                    // star1.style.marginTop = '18px';
                    star61.style.zIndex = '3';

                 
            var star71 = document.createElement('div');
            star71.style.backgroundSize = 'cover';
            star71.style.width = '32px'; 
            star71.style.height = '32px'; 
            star71.style.margin = 'auto'; 
            star71.style.position = 'absolute';
            star71.style.top = '330px'; 
            star71.style.left = '39.2%'; 
            star71.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star71.style.zIndex = '3';

            var star81 = document.createElement('div');
            star81.style.backgroundSize = 'cover';
            star81.style.width = '32px'; 
            star81.style.height = '32px'; 
            star81.style.margin = 'auto'; 
            star81.style.position = 'absolute';
            star81.style.top = '155px'; 
            star81.style.left = '62%'; 
            star81.style.backgroundImage ='url(./star1.png)';
            // star1.style.marginTop = '18px';
            star81.style.zIndex = '3';

            document.body.appendChild(cupImage2); //MOST IMP 
            document.body.appendChild(hurray2);
            document.body.appendChild(wongamemessage2);
            document.body.appendChild(playagain3);
            document.body.appendChild(star12);
            document.body.appendChild(star21);
            document.body.appendChild(star31);
            document.body.appendChild(star41);
            document.body.appendChild(star51);
            document.body.appendChild(star61);
            document.body.appendChild(star71);
            document.body.appendChild(star81);

            playagain3.addEventListener('click' ,() =>{
                document.body.innerHTML = originalHTML;
            });














        
        


                }

                	
	        	 displayChoice(resultContainer2, userChoice, true);
                 displayChoice(resultContainer2, computerChoice, false);  
                 
                 



        

        computerScore = 0;
        playerScore = 0;
        document.getElementById('scoreid').innerText = newplayerScore;
        document.getElementById('compid').innerText = newcomputerScore;






    
      
  
    }
};

}
    

                
               
          

        
    

    
    function displayChoice(resultContainer, choice, isUser) {
        let choiceDiv = document.createElement('div');
        choiceDiv.style.position = 'absolute';
        choiceDiv.style.height = '139px';
        choiceDiv.style.width = '139px';
        choiceDiv.style.padding = '10px 20px';
        choiceDiv.style.fontSize = 'large';
        choiceDiv.style.borderRadius = '90px';
        choiceDiv.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        choiceDiv.style.backgroundRepeat = 'no-repeat';
        choiceDiv.style.justifyContent = 'center';
        choiceDiv.style.alignItems = 'center';
        choiceDiv.style.zIndex = '4';
        choiceDiv.style.marginRight = isUser ? '600px' : '0';
        choiceDiv.style.marginLeft = isUser ? '0' : '600px';
    
        if (choice === 'rock') {
            choiceDiv.style.border = '13px solid rgba(0, 116, 182, 1)';
            choiceDiv.style.backgroundImage = 'url(./fist.png)';
            choiceDiv.style.backgroundPosition = '16px 20px'; 
        } else if (choice === 'paper') {
            choiceDiv.style.border = '13px solid rgba(255, 169, 67, 1)';
            choiceDiv.style.backgroundImage = 'url(./paper.png)';
            choiceDiv.style.backgroundPosition = '14px 12px';
        } else if (choice === 'scissors') {
            choiceDiv.style.border = '13px solid rgba(189, 0, 255, 1)';
            choiceDiv.style.backgroundImage = 'url(./scisorrs.png)';
            choiceDiv.style.backgroundPosition = '37px 26px';
        }
    
        resultContainer.appendChild(choiceDiv);
    }


        

let interval = setInterval(mygame, 2000);
mygame();

