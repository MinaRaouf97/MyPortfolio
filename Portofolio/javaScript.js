//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



var counter = 0;

$(document).ready(function () {









    $(document).on('click', '.togBtn', function () {
        if (counter === 0) {

            $(".naviJq").css("background-color", "black")
            counter++;
        }
        else if (counter === 1) {
            //     $('.naviJq').removeAttr("style")
            // counter--;


            setTimeout(function () {
                $('.naviJq').removeAttr("style")
            }, 300);


            counter--;
        }
      

    });





})



$(document).ready(function () {
		

    $(document).on('mouseenter','.iconLinks', function () {

        $(this).css("color",'#e65f78')
    });




    $(document).on('mouseleave','.iconLinks', function () {

        $(this).removeAttr("style")
    });




    // $(document).on('click', 'div',function () {

    //     $(this).after(`<div class="${colors[counter + 1]}"></div>`)
    //     counter++;


    // });


    $(document).on('mouseenter','.overlay',function(){
        
        $(this).css('opacity',".75")
        
    })  
    $(document).on('mouseleave','.overlay',function(){
        
        $(this).css('opacity',"0")

    })  
    // $(document).on('click' , '.projectEye' , function(){
    //     $(this).after("<button type='button' class='btn-close btn-close-white' aria-label='Close'></button>")
    // })


  

  
    


})