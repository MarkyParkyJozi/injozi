$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});

var $btn = $('.btn-menu');

$btn.click(function(){
    $('body').toggleClass('show');
    $('body').toggleClass('stop-scrolling');
})

$(window).load(function() {
    circle.animate(1.0, function() {
        hidePreloader();
    });


});

window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

//function hidePreloader(){
//
//    $('#preloaderwrapper').animate({opacity:'0'},800);
//    $('.container').animate({opacity:'1'},800);
//    $('.btn-menu').animate({opacity:'1'},800);
//}


var imgArray =[]
var circle = new ProgressBar.Circle('#progress', {
            color: '#2de9a1',
            duration: 3000,
            easing: 'easeInOut',
            strokeWidth: 10
        });

        circle.animate(1,function(){
            $('.overviewLogoPreloader').animate({opacity:'1'},800);

        });

var cirCount =0;

if(window.location.href.indexOf("index") > -1) {
    imgArray = ['http://injozi.biz/wip/obb/assets/OBB_Images_01.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images_02.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images%20Mobi-01.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images_05.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images%20Mobi-02.png',

    ];
}else if(window.location.href.indexOf("blowout") > -1) {
    if(window.mobilecheck()) {
        imgArray = ['http://injozi.biz/wip/obb/assets/brazillian_mobile.png'];
    }else{
        imgArray = ['http://injozi.biz/wip/obb/assets/brazilian_blow_main.jpg'];
    }
}else if(window.location.href.indexOf("evo") > -1) {
    imgArray = ['http://injozi.biz/wip/obb/assets/evo_main.jpg'];
}else if(window.location.href.indexOf("unwash") > -1) {
    imgArray = ['http://injozi.biz/wip/obb/assets/Unwash_copy.png'];

}else if(window.location.href.indexOf("b3") > -1) {
    imgArray = ['http://injozi.biz/wip/obb/assets/OBB_Images_05.png'];

}else if(window.location.href.indexOf("about") > -1) {
    imgArray = ['http://injozi.biz/wip/obb/assets/one_main.jpg'];

}else{
    imgArray = ['http://injozi.biz/wip/obb/assets/OBB_Images_01.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images_02.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images%20Mobi-01.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images_05.png',
        'http://injozi.biz/wip/obb/assets/OBB_Images%20Mobi-02.png',

    ];
}




preload(imgArray);

function preload(imgArray) {
    var increment = Math.floor(100 / imgArray.length);
    $(imgArray).each(function () {
        $('<img>').attr("src", this).load(function () {
            if ((cirCount + increment) > cirCount) {
                cirCount += increment;
                circle.animate(cirCount / 100);
            }
        });


    });
}

var eye = null;
var eyeColor;
var iris = {ref: null, x: 0, y: 0, w: 20, h: 20, color:'', lerp: 0};
var pupil = {ref: null, x: 0, y: 0, size: 10, sizeGoal: 10, lerp: 0};

var mouse = {x: 16.6, y: 16.6, oldX: 16.6, oldY: 16.6};

var r = iris.w/2;
var center = {
    x: $('.eye').width()/2 - r,
    y: $('.eye').height()/2 - r
};
var distanceThreshold = $('.eye').width()/2 - r;
var xp = 45;
var yp = 55;

// entry point
window.onload = init;

function init() {
    eye = $('.eye');
    eyeColor = eye.css('background-color');
    eyeColor = eyeColor.replace(/[^\d,.]/g, '').split(',');
    eyeColor[0] = parseInt(eyeColor[0]);
    eyeColor[1] = parseInt(eyeColor[1]);
    eyeColor[2] = parseInt(eyeColor[2]);

    iris.ref = $('.iris');
    iris.x = parseInt(iris.ref.css('left'));
    iris.y = parseInt(iris.ref.css('top'));
    iris.w = parseInt(iris.ref.css('width'));
    iris.h = parseInt(iris.ref.css('height'));
    iris.color = iris.ref.css('background-color');

    pupil.ref = $('.pupil');
    pupil.x = parseInt(pupil.ref.css('left'));
    pupil.y = parseInt(pupil.ref.css('top'));
    pupil.w = parseInt(pupil.ref.css('width'));
    pupil.h = parseInt(pupil.ref.css('height'));

    // start main loop
    animate();
}

// Main animation/logic loop
function animate() {
    followMouse();
    updateEmotions();
    updateEyeParts();
    mouse.oldX = mouse.x;
    mouse.oldY = mouse.y;
    setTimeout(animate, 16);
}

function updateEyeParts() {

    // update eye "white" part
    var rgbString = 'rgb(' + Math.round(eyeColor[0]) + ',' +
        Math.round(eyeColor[1]) + ',' + Math.round(eyeColor[2]) + ')';
    eye.css('background-color', rgbString);

    // pupil focus
    pupil.size = interpolate(pupil.size, pupil.sizeGoal, pupil.lerp, 0.03);
    pupil.x = iris.w/2 - pupil.size/2;
    pupil.y = iris.h/2 - pupil.size/2;


    // iris/pupil movement and color
    iris.ref.css('left', iris.x + 'px');
    iris.ref.css('top', iris.y + 'px');
    iris.ref.css('background', iris.color);

    // pupil
    pupil.ref.css('left', pupil.x + 'px');
    pupil.ref.css('top', pupil.y + 'px');
    pupil.ref.css('width', pupil.size + 'px');
    pupil.ref.css('height', pupil.size + 'px');
}

function updateEmotions() {

    eyeColor.forEach(function(element, index) {
        if (eyeColor[index] >= 255) {
            eyeColor[index] = 255;
        }
        else if (eyeColor[index] <= 0) {
            eyeColor[index] = 0;
        }
    });
}

// mouse movement event function
$(window).mousemove(function(e){
    var eyeposx = parseInt($('.eye').css('left'));
    var eyeposy = parseInt($('.eye').css('top'));

    var d = {
        x: e.pageX - r - eyeposx - center.x,
        y: e.pageY - r - eyeposy - center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < distanceThreshold) {
        mouse.x = e.pageX - eyeposx - r;
        mouse.y = e.pageY - eyeposy - r;
    }
    else {
        mouse.x = d.x / distance * distanceThreshold + center.x;
        mouse.y = d.y / distance * distanceThreshold + center.y;
    }
});

// move eye according to mouse movement
function followMouse() {
    var lerpSpeed = 0.12;
    xp = interpolate(xp, mouse.x, 0, lerpSpeed);
    yp = interpolate(yp, mouse.y, 0, lerpSpeed);

    var distance = Math.sqrt((mouse.x-mouse.oldX)*(mouse.x-mouse.oldX) +
        (mouse.y-mouse.oldY)*(mouse.y-mouse.oldY));

    // simulate saccade eye movement
    if (distance >= 25) {
        xp = interpolate(xp, mouse.x, 0, 0.4);
        yp = interpolate(yp, mouse.y, 0, 0.4);
    }

    iris.x = xp;
    iris.y = yp;
}

// linearly interpolate from part to goalPos (smooth animation effect)
function interpolate(part, goalPos, currentLerp, lerpSpeed) {
    if (part != goalPos) {
        currentLerp = 0;
    }

    if (currentLerp <= 1.0) {
        currentLerp += lerpSpeed;
    }

    part = lerp(part, currentLerp, goalPos);

    return part;
}

// actual formula for linear interpolation
function lerp(x, t, y) {
    return x * (1-t) + y*t;
}

// get random integer in range min-max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}