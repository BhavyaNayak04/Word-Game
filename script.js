document.addEventListener("DOMContentLoaded", function()
{
    GEN_WORD = "bark";
    letters = GEN_WORD.split("");
    msg = document.getElementById("msg");
    form = document.getElementById('frm');
    input = document.getElementById('input');
    btn = document.getElementById('newgame');
    help = document.getElementById('help');
    playarea = document.getElementById('playarea');
    back = document.getElementById('back');
    helpinfo = document.getElementById('helpinfo');
    inputarea = document.getElementById('inputarea');
    function newgame()
    {
        inputarea.style.display='flex';
        helpinfo.style.display = 'none';
        playarea.style.display='inline-block';
        msg.innerText="Enter your first guess!";
        msg.style.display="flex";
        msg.style.backgroundColor='#af4261';
    }
    btn.addEventListener('click', newgame);

   back.addEventListener('click', function()
   {
        helpinfo.style.display = 'none';
        newgame();
   });

   help.addEventListener('click',function()
   {
        playarea.style.display = 'none';
        helpinfo.style.display='block';    
   });

    form.addEventListener("submit", function(e)
    {
        e.preventDefault();
        let word = input.value;
        let inputLetters = word.split("");
        let white = 0;
        let black = 0;
        if(word!=='')
        {
            if(word === GEN_WORD)
            {
                msg.style.display="block";
                msg.innerText="You win!🎊";
                msg.style.backgroundColor='lightgreen';
                input.value='';
                inputarea.style.display='none';
            }
            else
            {
                let i=0;
                letters.forEach(letter => {
                    if(letter === inputLetters[i])
                    {
                        white++;
                    }
                    else if(inputLetters.includes(letter))
                    {
                        black++;
                    }
                    i++;
                });
                msg.style.display="block";
                msg.innerText = `There are ${white} white and ${black} black letters in '${word}'`;
                input.value='';
            }
        }
        else
        {
            alert("Enter your guess!");
        }

    });
});
