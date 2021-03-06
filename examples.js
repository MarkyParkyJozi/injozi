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

function hidePreloader(){
    $('#preloader').addClass("postloaderwrapper");
    $('#preloader').removeClass("preloaderwrapper");
    //$('#preloaderwrapper').animate({marginTop:'125'},800,'easeInOutQuad');
    $('.child').animate({opacity:'1'},800);
    $('.btn-menu').animate({opacity:'1'},800);

    setTimeout(function() {
        donePreloading();
    }, 2500);
}

function donePreloading(){
    jQuery("#circular div.pupil").jqEye({shape: "circle", radius:8});
    document.getElementById("eyeCon").style.marginTop = "-32px";
}


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

        imgArray = [];





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


jQuery(document).ready(function() {
    jQuery("#circular div.pupil").jqEye({shape: "circle", radius:8});
});

window.onresize = function(event) {
    jQuery("#circular div.pupil").jqEye({shape: "circle", radius:8});
}

// jqEye plugin's definition
(function(e){e.fn.jqEye=function(t){function r(e,t,n,r){var i={x:e,y:t};if(e>n/2)i.x=n/2;if(e<-n/2)i.x=-n/2;if(t>r/2)i.y=r/2;if(t<-r/2)i.y=-r/2;return i}function i(e,t,n){var r={x:e,y:t};if(e*e+t*t>n*n){if(e!==0){var i=t/e;r.x=Math.sqrt(n*n/(i*i+1));r.x=e>0?r.x:-r.x;r.y=Math.abs(i*r.x);r.y=t>0?r.y:-r.y}else{r.y=t>0?n:-n}}return r}function s(e,t,n,r){var i={x:e,y:t};if(e*e/(n*n)+t*t/(r*r)>1){if(e!==0){var s=t/e;i.x=Math.sqrt(1/(1/(n*n)+s*s/(r*r)));i.x=e>0?i.x:-i.x;i.y=Math.abs(s*i.x);i.y=t>0?i.y:-i.y}else{i.y=t>0?r:-r}}return i}function o(e,t,n,s,o){var u={x:e,y:t};var a=n/2-o;var f=s/2-o;if(Math.abs(e)>a&&Math.abs(t)>f){var l=i(Math.abs(e)-a,Math.abs(t)-f,o);u.x=e>0?l.x+a:-(l.x+a);u.y=t>0?l.y+f:-(l.y+f)}else{u=r(e,t,n,s)}return u}var n=e.extend({shape:"circle",radius:10,width:20,height:20},t);return this.each(function(){var t=e(this);var u=e(this).position().left+e(this).width()/2;var a=e(this).position().top+e(this).height()/2;var f=e(this).offset().left+e(this).width()/2;var l=e(this).offset().top+e(this).height()/2;e(document).mousemove(function(e){var c=e.clientX;var h=e.clientY;var p=c-f;var d=h-l;if(n.shape==="rectangle"){var v=r(p,d,n.width,n.height);p=v.x;d=v.y}if(n.shape==="circle"){var m=i(p,d,n.radius);p=m.x;d=m.y}if(n.shape==="ellipse"){var g=s(p,d,n.width/2,n.height/2);p=g.x;d=g.y}if(n.shape==="rounded rectangle"){var y=o(p,d,n.width,n.height,n.radius);p=y.x;d=y.y}p=p+u-t.width()/2;d=d+a-t.height()/2;t.css({left:p,top:d})})});}})(jQuery)
