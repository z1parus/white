//BUTTONS
let btnNews = $(".btn-news");
let btnArticles = $(".btn-articles");

//BLOCKS
let blockNews = $(".news");
let blockArticles = $(".article");


btnArticles.on('click', () => {
  console.log("Нажал")
  btnNews.removeClass("active-btn");
  btnArticles.addClass("active-btn");
  blockNews.css("display", "none");
  blockArticles.css("display", "block");
})

btnNews.on('click', () => {
  console.log("Нажал")
  btnArticles.removeClass("active-btn");
  btnNews.addClass("active-btn");
  blockArticles.css("display", "none");
  blockNews.css("display", "block");
})

//ARROW UP
//Нельзя в тупую сочетать JQUERY и JS. Если пишешь часть кода на JS то на JS. Если другую часть пишешь на JQUUERY, то всю пишешь на JQUERY.
$(".arrow-up").on("click", () => {
  console.log("Нажал")
  $("html, body").animate({scrollTop: 0}, 200)
})

// let buttonUp = document.querySelector(".arrow-up");
// let header = document.querySelector(".header-container");

// buttonUp.addEventListener("click", () => {
//   console.log("Нажал")
//   header.scrollIntoView({block:"center", behavior: "smooth"})

// });

//ARTICLES
//Принци работы на странице все статьи
//Этот кусок кода отвечат за выбор элемента на который мы нажимаем. При нажатии на элемент он становится черного цвета, и все элементы прижимаются к правой части экрана.

let arrArticles = document.querySelectorAll(".articles-categories");


//ОБЪЕКТЫ для установки большой картинки категории. Они используются чуть ниже в переборе Массива.

let imgJS = document.createElement('div');
imgJS.classList.add = "categories__img";
imgJS.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/js-logo.png'>"

let imgPython = document.createElement('div');
imgPython.classList.add = "categories__img";
imgPython.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/python-logo.png'>"

let imgJava = document.createElement('div');
imgJava.classList.add = "categories__img";
imgJava.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/java-logo.png'>"

let imgGo = document.createElement('div');
imgGo.classList.add = "categories__img";
imgGo.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/go-logo.png'>"

let imgRuby = document.createElement('div');
imgRuby.classList.add = "categories__img";
imgRuby.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/ruby-logo.png'>"

let imgPascal = document.createElement('div');
imgPascal.classList.add = "categories__img";
imgPascal.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/pascal-logo.png'>"

let imgC = document.createElement('div');
imgC.classList.add = "categories__img";
imgC.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/c-logo.png'>"

let imgCPlus = document.createElement('div');
imgCPlus.classList.add = "categories__img";
imgCPlus.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/c-plus-plus-logo.png'>"

let imgCsharp = document.createElement('div');
imgCsharp.classList.add = "categories__img";
imgCsharp.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/c-sharp-logo.png'>"

let imgDelphi = document.createElement('div');
imgDelphi.classList.add = "categories__img";
imgDelphi.innerHTML = "<img class='big-logo-categoties' src='./images/dest/categories/delphi-logo.png'>"
//При добавлении сюда новых картинок. Меня обязательно название переменной, + в пути к картинке меня название картинки которую выбираешь.
//Также добавляй новую переменную в elseif, ниже.

//БЛОКИ СО СТАТЬЯМИ(по каждой категории). Бро прости за этот HTML, в JS он выглядит просто ублюдски. !Подсказка: Смотри на блок с классом info-block, он находится в файле index.html.(Так тебе будет легче заполнять эти Иероглифы)
let infoJS = document.createElement('div');
infoJS.classList.add("articlesss");
infoJS.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://img5.goodfon.ru/wallpaper/nbig/3/9c/space-planet-landscape-wallpapers-1920-x-1080.jpg)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

//ПЕРЕБОР МАССИВА ВСЕХ КАТЕГОРИЙ, ДЛЯ ТОГО ЧТОБЫ ПРИ КЛИКЕ НА КАКУЮ-ТО ИЗ НИХ ПОЯВЛЯЛАСЬ РАЗНАЯ ИНФА.
arrArticles.forEach(function(el, i, array) {
  el.onmousedown = function(){
    $(".articles-categories").css({
      "background-color": "#fff",
      "color": "black",
    })
    el.style.backgroundColor="black"
    el.style.color="#fff";
    document.querySelector(".for-js-img").innerHTML = "";
    document.querySelector("#articles-from-JS").innerHTML = "";
    if(el.id == "js"){
      document.querySelector(".for-js-img").append(imgJS);
      $("#articles-from-JS").css("display", "flex")
      document.querySelector("#articles-from-JS").insertAdjacentElement('afterbegin', infoJS)
    }
    else if(el.id == "python"){
      document.querySelector(".for-js-img").append(imgPython);
    }
    else if(el.id == "java"){
      document.querySelector(".for-js-img").append(imgJava);
    }
    else if(el.id == "go"){
      document.querySelector(".for-js-img").append(imgGo);
    }
    else if(el.id == "ruby"){
      document.querySelector(".for-js-img").append(imgRuby);
    }
    else if(el.id == "pascal"){
      document.querySelector(".for-js-img").append(imgPascal);
    }
    else if(el.id == "c"){
      document.querySelector(".for-js-img").append(imgC);
    }
    else if(el.id == "cplus"){
      document.querySelector(".for-js-img").append(imgCPlus);
    }
    else if(el.id == "csharp"){
      document.querySelector(".for-js-img").append(imgCsharp);
    }
    else if(el.id == "delphi"){
      document.querySelector(".for-js-img").append(imgDelphi);
    }
  }
})

$(".articles-categories").on("mousedown", () => {
  $(".articles-categories").css({
    "margin": "0",
    "box-shadow": "none",
  })
  $(".right-column-articles").css({
    "width": "20%",
    "float": "right",
  })

})