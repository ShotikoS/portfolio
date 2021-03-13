var Skills = [
    {
        link:"image/html.png",
        alt: "HTML"
    },
    {
        link:"image/css.png",
        alt: "css"
    },
    {
        link:"image/sass.png",
        alt: "sass"
    },
    {
        link:"image/js.png",
        alt: "js"
    },
    {
        link:"image/Jquery.png",
        alt: "Jquery"
    },
    {
        link:"image/NodeJs.png",
        alt: "NodeJs"
    },
    {
        link:"image/dMXbE.png",
        alt: "Bootstrap"
    },
    {
        link:"image/ajax.png",
        alt: "ajax"
    }
]

function createSkillsUl(arr, ID__Name){
    for(let i = 0; i < arr.length; i++){
        let createLi = document.createElement("li");
        let createImg = document.createElement("img");
        createImg.src = arr[i].link;
        createImg.alt = arr[i].alt;
        createLi.appendChild(createImg);
        document.getElementById(ID__Name).appendChild(createLi);
    }
}

createSkillsUl(Skills, "experiance");

var projects = [
    {
        pageLink: "https://carexpress.ge",
        image: "image/Projects/Project6.png",
        alt: "Project6"
    },
    {
        pageLink: "https://shotikos.github.io/IronMass/",
        image: "image/Projects/Project1.png",
        alt: "Project1"
    },
    {
        pageLink: "https://shotikos.github.io/marketingService/",
        image: "image/Projects/Project2.png",
        alt: "Project2"
    },
    {
        pageLink: "https://shotikos.github.io/WebUni/",
        image: "image/Projects/Project3.png",
        alt: "Project3"
    },
    {
        pageLink: "https://shotikos.github.io/yourhome/",
        image: "image/Projects/Project4.png",
        alt: "Project4"
    },
    {
        pageLink: "https://shotikos.github.io/Soccer/",
        image: "image/Projects/Project5.png",
        alt: "Project5"
    }
]

function fillProject(arr, ID__Name){
    for (let i = 0; i < arr.length; i++) {
        let createLi = document.createElement("li");
        let createDiv = document.createElement("div");
        let createA = document.createElement("a");
        let createImg = document.createElement("img");
        createDiv.className = "hover";
        createA.href = arr[i].pageLink;
        createA.target = "blank";
        createA.innerText = "საიტზე გადასვლა";
        createImg.src = arr[i].image;
        createImg.alt = arr[i].alt;
        createDiv.appendChild(createA);
        createLi.appendChild(createDiv);
        createLi.appendChild(createImg);
        document.getElementById(ID__Name).appendChild(createLi);
    }
}

fillProject(projects, "projects");

$(document).ready(function(){
    $(".next").click(function(){
        let width = $(".experanceCarousel__container").width();
        let marginL = $(".experiance").css("marginLeft");
        let result = (2000 - parseInt(width)) * -1;
        if(parseInt(marginL) > result){
            $(".experiance").css({
                'margin-left': '-=265px',
                'transition': '1s'
            })
        }else{
            $(".experiance").css({
                'margin-left': '0px',
                'transition': '2s'
            })
        }
    })
})

$(document).ready(function(){
    $(".prev").click(function(){
        let marginLInPrev = $(".experiance").css("marginLeft");
        let widthL = $(".experanceCarousel__container").width();
        let difference = (2100 - parseInt(widthL));
        let res = difference.toString();
        if(parseInt(marginLInPrev) >= 0){
            $(".experiance").css({
                'margin-left': "-" + res + "px",
                'transition': '2s'
            })
        }else{
            $(".experiance").css({
                'margin-left': "+=270px",
                'transition': '1s'
            })
        }
    })
})

$(document).ready(function(){
    $(".OpenSideBar").click(function(){
        $(".SideBar__Container").animate({
            width: "toggle"
        })
    })
})


$(document).ready(function(){
    $(".Projects li").mouseover(function(){
        $(this).find(".hover").css({
            "visibility": "visible"
        })
    })
})

$(document).ready(function(){
    $(".Projects li").mouseleave(function(){
        $(this).find(".hover").css({
            "visibility": "hidden"
        })
    })
})
