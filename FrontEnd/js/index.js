
const articleReadMore=()=>{
    alert('Under Construction');
}

//Login message change function
const loginMessages=['Music','Travel','Life','more+'];
const loginMessageColors=['red','orange','green','black']
var i=0;
setInterval(
    changeLoginMessage=()=>{

        var loginMessage=document.getElementById('login-message');
        loginMessage.innerText=loginMessages[i];

        if(i<loginMessages.length-1){
            i++
        }
        else{
            i=0;
        }

    }
,3000)

//Login form validation...
const loginFormValidation=()=>{
    var email=document.getElementById('login-form-email').value;
    var password=document.getElementById('login-form-password').value;

    if(email && password){
        alert('Greate job');
        return true;
    }
    else{
        alert('All need to be filled');
        return false;
    }
}

// //function for changing home-screen 


//     var i=0
//     var backgrounds=[
//         "url(../images/backgrounds/home-screen_1.jpeg)",
//         "url(../images/backgrounds/home-screen_2.jpg)",
//         "url(../images/backgrounds/home-screen_3.jpg)",
//         "url(../images/backgrounds/home-screen_4.jpeg)",
//         "url(../images/backgrounds/home-screen_5.jpeg)"
//     ];
    


// setInterval(
//      homeScreenBackgroundChange=()=>{
//         var homeScreen=document.getElementById('home-screen');
//         homeScreen.style.backgroundImage=backgrounds[i];
    
//         if (i < backgrounds.length - 1) {
//             i++;
//         } else {
//             i = 0;
//         }
//     },
// 8000)
