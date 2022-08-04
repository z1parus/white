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

//ФУНКЦИЯ ДОБАВЛЯЮЩАЯ СТАТЬИ, при ее вызове мы передаем внутрь стать которые будем выводить. Кол-во статей можно увеличить.
function addArticleJS(article1, article2){
  document.querySelector("#articles-from-JS").insertAdjacentElement('afterbegin', article1);
  document.querySelector("#articles-from-JS").insertAdjacentElement('afterbegin', article2);
}

// СТАТЬИ ПО JS
let infoJS = document.createElement('div');
infoJS.classList.add("articlesss");
infoJS.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://img5.goodfon.ru/wallpaper/nbig/3/9c/space-planet-landscape-wallpapers-1920-x-1080.jpg)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='./readarticles.html'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

let infoJS2 = document.createElement('div');
infoJS2.classList.add("articlesss");
infoJS2.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://img5.goodfon.ru/wallpaper/nbig/3/9c/space-planet-landscape-wallpapers-1920-x-1080.jpg)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='./readarticles.html'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

//----

// СТАТЬИ ПО PHYTON
let python = document.createElement('div');
python.classList.add("articlesss");
python.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://xakep.ru/wp-content/uploads/2018/01/150493/Green-Python-h.jpg)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='./readarticles.html'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

let python2 = document.createElement('div');
python2.classList.add("articlesss");
python2.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://xakep.ru/wp-content/uploads/2018/01/150493/Green-Python-h.jpg)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='./readarticles.html'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

// СТАТЬИ ПО JAVA
let java = document.createElement('div');
java.classList.add("articlesss");
java.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://d-russia.ru/wp-content/uploads/2021/04/java.jpg)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='#'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

let java2 = document.createElement('div');
java2.classList.add("articlesss");
java2.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://d-russia.ru/wp-content/uploads/2021/04/java.jpg)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='#'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

//// СТАТЬИ ПО GO
let go = document.createElement('div');
go.classList.add("articlesss");
go.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://lh3.googleusercontent.com/dPVmWPtrmsCikRMvuywcz6eSMlVUpucwoCmGoyQAa3GzkpGvORuXMSx9nbWU8CEmRF5_e_9_DBKMB71SwZFa3qzY4hV53jp0XUV1t5BiHPDwa12FvPHK-DiACg-WWyitdMPfLjN0)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='#'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")

let go2 = document.createElement('div');
go2.classList.add("articlesss");
go2.insertAdjacentHTML("afterbegin", "<span class='text-time' id='time'>Сегодня в 8:00</span> <a href='#'><h1 class='info-block__title'>Тут столько кода, что в нем можно утонуть</h1></a><a href=#><div class='author'><div class='author__img' style='background-image: url(http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1)'></div><div class='author__name'>reeenooo761</div></div></a><span class='topic-small'><a href='#'>IT-компании</a>,<a href='#'>Финансы</a>,<a href='#'>Развитие IT индустрии</a></span><div class='info-block__img' style='background-image: url(https://lh3.googleusercontent.com/dPVmWPtrmsCikRMvuywcz6eSMlVUpucwoCmGoyQAa3GzkpGvORuXMSx9nbWU8CEmRF5_e_9_DBKMB71SwZFa3qzY4hV53jp0XUV1t5BiHPDwa12FvPHK-DiACg-WWyitdMPfLjN0)'></div><div class='info-block__bottom'><div class='button-and-symbols'><a class='button' href='#'>Читать далее</a><div class='symbols'><span class='symbols__el' id='dots'>30<i class='fa-solid fa-circle'></i></span><span class='symbols__el' id='views'>1000<i class='fa-solid fa-eye'></i></span><span class='symbols__el' id='comments'>1<i class='fa-solid fa-message'></i></span></div></div><img class='bookmark' src='./images/dest/points/bookmark-img-black.png' alt='Закладка :)'></div>")



//Перебор массива всех категорий, для того чтобы при клике на категорию появлялась нужная информация.
arrArticles.forEach(function(el, i, array) {
  el.onmousedown = function(){
    $(".articles-categories").css({
      "background-color": "#fff",
      "color": "black",
    })

    //Действия которые происходят сразу после нажатия.
    el.style.backgroundColor="black"
    el.style.color="#fff";
    document.querySelector(".for-js-img").innerHTML = "";
    document.querySelector("#articles-from-JS").innerHTML = "";
    $("#articles-from-JS").css("display", "none");
    $("#no-articles").css("display", "none");

    if(el.id == "js"){
      document.querySelector(".for-js-img").append(imgJS);
      $("#articles-from-JS").css("display", "flex");
      addArticleJS(infoJS, infoJS2);
    }
    else if(el.id == "python"){
      document.querySelector(".for-js-img").append(imgPython);
      $("#articles-from-JS").css("display", "flex");
      addArticleJS(python, python2);
    }
    else if(el.id == "java"){
      document.querySelector(".for-js-img").append(imgJava);
      $("#articles-from-JS").css("display", "flex");
      addArticleJS(java, java2);
    }
    else if(el.id == "go"){
      document.querySelector(".for-js-img").append(imgGo);
      $("#articles-from-JS").css("display", "flex");
      addArticleJS(go, go2);
      if(document.querySelector("#articles-from-JS").innerHTML == ""){
        $("#no-articles").css("display", "flex");
      }
    }
    else if(el.id == "ruby"){
      document.querySelector(".for-js-img").append(imgRuby);
      //Прям в эту строчку вставляешь функцию для вставки статей(Пример выше, как в GO). При добавлении статей вставлять нудно кусок кода начинающийся с $(#articles-from-JS). Сначала лучше спроси у меня, потом вставляй.
      if(document.querySelector("#articles-from-JS").innerHTML == ""){
        $("#no-articles").css("display", "flex");
      }
    }
    else if(el.id == "pascal"){
      document.querySelector(".for-js-img").append(imgPascal);
      if(document.querySelector("#articles-from-JS").innerHTML == ""){
        $("#no-articles").css("display", "flex");
      }
    }
    else if(el.id == "c"){
      document.querySelector(".for-js-img").append(imgC);
      if(document.querySelector("#articles-from-JS").innerHTML == ""){
        $("#no-articles").css("display", "flex");
      }
    }
    else if(el.id == "cplus"){
      document.querySelector(".for-js-img").append(imgCPlus);
      if(document.querySelector("#articles-from-JS").innerHTML == ""){
        $("#no-articles").css("display", "flex");
      }
    }
    else if(el.id == "csharp"){
      document.querySelector(".for-js-img").append(imgCsharp);
      if(document.querySelector("#articles-from-JS").innerHTML == ""){
        $("#no-articles").css("display", "flex");
      }
    }
    else if(el.id == "delphi"){
      document.querySelector(".for-js-img").append(imgDelphi);
      if(document.querySelector("#articles-from-JS").innerHTML == ""){
        $("#no-articles").css("display", "flex");
      }
    }
  }
})

//Это для изменения стилей при клике на категорию.
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

// JS ДЛЯ СТРАНИЧКИ NEWS
// if($(window).scrollTop() + $(window).height() >= $(document).height()){
//   console.log('пффф');
// }

document.addEventListener("scroll", ()=>{
  if($(window).scrollTop() + $(window).height() >= $(document).height()){
    document.getElementById("no-news").style.display = "flex";
  }
})



//РАБОТА СТРАНИЦЫ НАСТРОЙКИ ПРОФИЛЯ
//Существует разница между поиском элементов через $JQUERY и через просто JS
let ArrSettingsBtn = document.querySelectorAll(".settings-list__el");
let settingsTitle = document.querySelector(".settings-title-text");

//Блоки настроек:
let Allsettings = $('.settingClass');
let mainSettings = document.querySelector(".settings-block__general");
let passwordSettings = document.querySelector(".settings-block__password");
let groupdSettings = document.querySelector(".settings-block__group");
let comunitydSettings = document.querySelector(".settings-block__comunity");

console.log(ArrSettingsBtn);

ArrSettingsBtn.forEach(function(el, i, arr){
  el.onmousedown = () => {
    $('.settings-list__el').removeClass("active-setting");
    // document.getElementsByClassName(".settings-list__el").classList.remove("active-setting") - Не рабочий код :(
    el.classList.add("active-setting");
    Allsettings.css("display", "none");
    if(el.id == "main") {
      mainSettings.style.display = "flex"
      settingsTitle.innerHTML = "Общие";
    }
    else if (el.id == "password") {
      passwordSettings.style.display = "flex";
      settingsTitle.innerHTML = "Сброс пароля";
    }
    else if (el.id == "create-group") {
      groupdSettings.style.display = "flex";
      settingsTitle.innerHTML = "Новая группа";
    }
    else if (el.id == "create-comunity") {
      comunitydSettings.style.display = "flex";
      settingsTitle.innerHTML = "Новое сообщество";
    }
  }
})

//JS ДЛЯ СТРАНИЧКИ Q&A
let Qcategories = document.querySelectorAll(".categories-list__el");

Qcategories.forEach(function(el, i, arr){
  el.addEventListener("mousedown", ()=>{
    $(".categories-list__el").removeClass("active-categories");
    $(".Questions").css('display', 'none')
    el.classList.add("active-categories");

    if(el.id == "qs-all"){
      $(".all-question").css('display', "flex")
    }
    else if(el.id == "qs-js"){
      $(".JS-question").css('display', "flex")
    }
    else if(el.id == "qs-python"){
      $(".python-question").css('display', "flex")
    }
  })
})


//COMUNITYCATEGORIES
let subscribe = document.querySelectorAll(".subscribe-at-comunity");

subscribe.forEach(function(el) {
  el.addEventListener("click", () => {

    if(el.classList.contains("subscribe-at-comunity__black")){
    el.classList.remove("subscribe-at-comunity__black");
    el.classList.add("subscribe-at-comunity__white");
    }
    else {
    el.classList.add("subscribe-at-comunity__black");
    el.classList.remove("subscribe-at-comunity__white");
    }
  })
})

//SCRIPT FOR LIKES

let ArrLikes = document.querySelectorAll(".like-img");

ArrLikes.forEach(function(el){
  el.addEventListener("click", () => {
  if (el.getAttribute("src") == "./images/dest/like/heart-icon-white.png") {
      el.setAttribute("src", "./images/dest/like/heart-icon-black.png")
  } else {
    el.setAttribute("src", "./images/dest/like/heart-icon-white.png")
  }
  // el.setAttribute("src", "./images/dest/like/heart-icon-black.png");
  // let likes = document.querySelector(".number-of-likes").innerHTML;
  // document.querySelector(".number-of-likes").innerHTML = Number(likes) + 1;
  })
})

//ОТКРЫТИЕ ПОЛЯ КОММЕНТАРИИ ПРИ НАЖАТИИ НА +
//OWNER НАСТРОЙКА COMUNITY
$("#plus-addAnswer").on("click", () => {
  if($("#add-user-answer").css("display") == "none"){
    $("#add-user-answer").css("display", "flex");
  } else {
    $("#add-user-answer").css("display", "none");
  }
})

$(".plus-addPost__group").on("click", () => {
  if($(".add-post-block").css("display") == "none"){
    $(".add-post-block").css("display", "flex");
    $(".comunitypage-title").css("marginBottom", "0");
  } else {
    $(".add-post-block").css("display", "none");
    $(".comunitypage-title").css("marginBottom", "20px");
  }
})

//ЗАГРУЗКА ИЗОБРАЖЕНИЯ ДЛЯ ПОСТА
let inputIMG = document.querySelector("#files");
let img = document.querySelector("#preview");
//Вот нахуй три варианта, все делают одно и тоже я в шоке.

//Ахуенная часть кода, нужно бы запомнить ее
inputIMG.addEventListener("change", () => {
  
  const [file] = inputIMG.files
  if(file) {
    img.setAttribute("src", URL.createObjectURL(file))
  }
  $(".add-post__img").css("display", "block")
})

// $("#files").on("change", () => {
//   console.log("Изменение")
// })

// inputIMG.onchange = () => {
//   console.log("Изменение")
// }
