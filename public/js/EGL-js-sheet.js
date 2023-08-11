!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

$(document).ready(function () {
    $("#skip-menu").attr("accesskey", "b");
    $(".contenuto-logo-navbar a").attr("accesskey", "h");
    $(".header-corp-plenitude a").attr("accesskey", "h");
    $(".corp-lang-switch-tooltip a:not(.active)").attr("accesskey", "e");
    $(document).keydown(function (e) {
        var key = e.which;
        if (e.altKey == true && key === 84) {
            // the enter key code
            window.scrollTo(0, 0);
        }
    });
    $("#contenuto-pagina").append(
        "<a accesskey=" +
        "m" +
        " target=" +
        "_blank" +
        " href=" +
        "mailto: investor.relations@eniplenitude.com" +
        " class=" +
        "d-none" +
        "></a>"
    );

    /*---Qui da l'attributo tabindex0 ad h1-h5 e p ---
  $('p, h1, h2, h3, h4, h5').each(function () {
    if ($(this).text() != '') {
      $(this).attr('tabindex', '0');
    }
  });*/

    //left arrow
    $(".fa-chevron-left").attr("aria-label", "precedente");
    $(".fa-chevron-left").attr("tab-index", 0);
    //right arrow
    $(".fa-chevron-right").attr("aria-label", "successiva");
    $(".fa-chevron-right").attr("tab-index", 0);
    //   $("button").each(function () {
    //     let questoTesto = $(this).text();
    //     $(this).attr("aria-label", questoTesto);
    //     $(this).attr("role", "button");
    //   });
    //   $("a").each(function () {
    //     let questoTesto = $(this).text();
    //     $(this).attr("aria-label", questoTesto);
    //     $(this).attr("role", "link");
    //   });
    //   $("th, td").each(function () {
    //     $(this).attr("tabindex", "0");
    //   });
});

$(document).ready(function () {
    let mh = $("[mh]");

    for (let i = 0; i < mh.length; i++) {
        let h = $(mh[i]).height();
        for (let i2 = i; i2 < mh.length; i2++) {
            h = h > $(mh[i2]).height() ? h : $(mh[i2]).height();
        }
        let elements = "[mh=" + $(mh[i]).attr("mh") + "]";
        $(elements).height(h);
    }
});

// (function ($) {
//   $(function () {
//     $.widget("sf.MHcontrol", {
//       _create: function () {
//         console.log('MHcontrol');

//         var mh = $("[mh]");

//         this.init();

//       },

//       init: function () {
//         for (let i = 0; i < $("[mh]").length; i++) {
//           let h = $(mh[i]).height();
//           for (let i2 = i; i2 < $("[mh]").length; i2++) {
//             h = h > $(mh[i2]).height() ? h : $(mh[i2]).height();
//           }
//           let elements = "[mh=" + $(mh[i]).attr("mh") + "]";
//           $(elements).height(h);
//         }
//       },

//     });

//     $('[pln-component]').MHcontrol();
//   });
// })(jQuery);

$(document).ready(function () {
    if ($(".headerDesktop").length != 0 && $(".headerMobile").length != 0) {
        //dropdown menu MOBILE
        document
            .querySelector(".second-button")
            .addEventListener("click", function () {
                document.querySelector(".animated-icon2").classList.toggle("open");
                setTimeout(function () {
                    if ($(".myCardCarousel").hasClass("slick-initialized")) {
                        $(".myCardCarousel").slick("resize");
                    } else {
                        $(".myCardCarousel").slick({
                            arrows: true,
                            appendArrows: $(".news__arrows"),
                            prevArrow: '<div class="news__arrow news__arrow_dir_left"></div>',
                            nextArrow:
                                '<div class="news__arrow news__arrow_dir_right"></div>',
                            dots: false,
                            infinite: false,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false,
                            variableWidth: true,
                            variableHeight: true,
                            responsive: [
                                {
                                    breakpoint: 590,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        centerMode: false,
                                    },
                                },
                            ],
                        });
                    }
                }, 500);
            });
        //gestione carosello responsive mobile header
        $(window).on("resize", function () {
            if ($(window).width() < 1024) {
                if ($(".myCardCarousel").hasClass("slick-initialized")) {
                    $(".myCardCarousel").slick("resize");
                } else {
                    $(".myCardCarousel").slick({
                        arrows: true,
                        appendArrows: $(".news__arrows"),
                        prevArrow: '<div class="news__arrow news__arrow_dir_left"></div>',
                        nextArrow: '<div class="news__arrow news__arrow_dir_right"></div>',
                        dots: false,
                        infinite: false,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        variableWidth: true,
                        variableHeight: true,
                        responsive: [
                            {
                                breakpoint: 590,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    centerMode: false,
                                },
                            },
                        ],
                    });
                }
            } else {
                $(".myCardCarousel.slick-initialized").slick("unslick");
            }
        });

        //pagination mobile header
        var $status = $(".pagingInfo");
        var $slickElement = $(".myCardCarousel");
        $slickElement.on(
            "init reInit afterChange",
            function (event, slick, currentSlide, nextSlide) {
                let i = (currentSlide ? currentSlide : 0) + 1;
                let leftArrow = $(".news__arrow_dir_left");
                let rightArrow = $(".news__arrow_dir_right");
                $status.html(
                    '<span class="first-number-header">' +
                    i +
                    "</span>" +
                    "/" +
                    '<span class="last-number-header">' +
                    slick.slideCount +
                    "</span>"
                );
                if (i === slick.slideCount) {
                    rightArrow.addClass("d-none");
                } else {
                    if (rightArrow.hasClass("d-none")) {
                        rightArrow.removeClass("d-none");
                    }
                }
                if (i === 1) {
                    leftArrow.addClass("d-none");
                } else {
                    if (leftArrow.hasClass("d-none")) {
                        leftArrow.removeClass("d-none");
                    }
                }
            }
        );

        /* gestione dropdown menù desktop */
        jQuery(".btn-collapse-nav").click(function (e) {
            if (!jQuery(this).hasClass("btn-collapse-nav-active")) {
                jQuery(".btn-collapse-nav").each(function () {
                    jQuery(this).removeClass("btn-collapse-nav-active");
                });
                jQuery(this).addClass("btn-collapse-nav-active");
            } else {
                jQuery(this).removeClass("btn-collapse-nav-active");
            }
            jQuery(".collapse").collapse("hide");
        });

        $("#DesktopDropdownContainer").on("shown.bs.collapse", function () {
            $(".collapse.show").focus();
            $(this).on("mouseleave", function () {
                $(this).find(".collapse.show").collapse("hide");
                jQuery(".btn-collapse-nav").each(function () {
                    jQuery(this).removeClass("btn-collapse-nav-active");
                });
            });
            $(window).on("focusin click", function () {
                setTimeout(function () {
                    if (
                        $(document.activeElement).parents("#DesktopDropdownContainer")
                            .length == 0 &&
                        $(".collapse.show").length != 0
                    ) {
                        jQuery(".collapse").collapse("hide");
                    }
                }, 1);
            });
        });

        /* behavior navbar mobile e menu dropdown mobile */
        document
            .querySelector(".second-button")
            .addEventListener("click", function () {
                $("body").toggleClass("stop-vertical-scroll");
                $("#smallHeader").removeClass("fixedHeaderMobile");
                $("#NavbarMobileDropdownMenu").addClass("fixedHeaderMobile");
            });
        let lastScrollTop = 0;
        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        window.addEventListener(
            "scroll",
            function () {
                // or window.addEventListener("scroll"....
                var st = window.pageYOffset;
                if (st > lastScrollTop && $(window).width() < 1024) {
                    $("#smallHeader").addClass("fixedHeaderMobile");
                    $("#NavbarMobileDropdownMenu").removeClass("fixedHeaderMobile");
                    $(".root.responsivegrid").css("margin-top", "50px");
                } else {
                    $("#smallHeader").removeClass("fixedHeaderMobile");
                    $("#NavbarMobileDropdownMenu").addClass("fixedHeaderMobile");
                    $(".root.responsivegrid").css("margin-top", "50px");
                }
                lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
                if (st == 0) {
                    $("#NavbarMobileDropdownMenu").removeClass("fixedHeaderMobile");
                    $(".headerMobile").css("padding-top", "16px");
                    $(".root.responsivegrid").css("margin-top", "0px");
                }
            },
            false
        );
        $(document).ready(function () {
            if (window.location.href.indexOf("condominio") > -1) {
                $(".row.menuSecondario").toggleClass("justify-content-start");
            }
            if (window.location.href.indexOf("business") > -1) {
                $(".row.menuSecondario").toggleClass("justify-content-start");
                $(".row.megaDropDownDesktop:first-child")
                    .find(".col.d-flex.flex-column")
                    .removeClass("col")
                    .addClass("col-3");
            }
        });
    }
});
function slideGo(dir) {
    let slider = $(".myCardCarousel");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}
/* accordion footer */
$(document).ready(function () {
    $(".accordion.egl-footer-component.egl-footer-accordion").each(function (
        index
    ) {
        $(this)
            .find(".collapse")
            .each(function (index) {
                $(this).attr("id", "elementoFooter" + index);
            });
        $(this)
            .find(".egl-footer-accordion-button")
            .each(function (index) {
                $(this).attr("data-target", "#elementoFooter" + index);
            });
    });
    $(".egl-footer-accordion-button").on("click", function () {
        let element = $(this);
        let attr = element.attr("aria-label");
        let target = element.parents(".card-header").next();
        if (attr == "nascondi-contenuto") {
            $(".button-faq").each(function () {
                $(this).attr("aria-label", "espandi-contenuto");
            });
        } else {
            $(".button-faq").each(function () {
                $(this).attr("aria-label", "espandi-contenuto");
            });
            element.attr("aria-label", "nascondi-contenuto");
        }
        $(target).on("shown.bs.collapse", function () {
            setTimeout(function () {
                let lgHeader = window.document.getElementById("bigHeader");
                let lgHeightHeader = lgHeader.offsetHeight;
                let smHeader = window.document.getElementById("smallHeader");
                let smHeightHeader = smHeader.offsetHeight;
                let bodyRect = document.body.getBoundingClientRect().top;
                let elementRect = element[0].getBoundingClientRect().top;
                if ($(window).width() > 1023) {
                    var offsetTotaleScrollTop = lgHeightHeader + heightBanner;
                    var elementPositionAccordionScroll = elementRect - bodyRect - 20;
                } else {
                    var offsetTotaleScrollTop = smHeightHeader;
                    var elementPositionAccordionScroll = elementRect - bodyRect - 100;
                }

                let offsetPosition =
                    elementPositionAccordionScroll - offsetTotaleScrollTop;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }, 50);
        });
    });
});
/* header corporate */
$(function () {
    $(".corp-lang-switch").on("click", function () {
        $(this).toggleClass("active");
        $(".corp-lang-switch a:first-of-type").focus();
        $(".corp-lang-switch-tooltip").on("mouseleave", function () {
            if ($(".corp-lang-switch").hasClass("active")) {
                $(".corp-lang-switch").removeClass("active");
            }
        });
    });
    $(".corp-lang-switch").keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            // the enter key code
            $(".corp-lang-switch").click();
            return false;
        }
    });
    $(".header-corp-mobile .header-corp-options input[type=checkbox]").on(
        "click",
        function () {
            $(this)
                .parents(".header-corp")
                .find(".header-corp-mobile-menu")
                .toggleClass("aperto");
            $("body").toggleClass("mobile-menu-aperto");
        }
    );
    $(".header-corp-mobile .header-corp-options input[type=checkbox]").prop(
        "checked",
        false
    );
    $("div#header-corp-accordion button").on("click", function () {
        let element = $(this);
        let attr = element.attr("aria-label");
        if (attr == "nascondi-contenuto") {
            $("div#header-corp-accordion button").each(function () {
                $(this).attr("aria-label", "espandi-contenuto");
            });
        } else {
            $("div#header-corp-accordion button").each(function () {
                $(this).attr("aria-label", "espandi-contenuto");
                $(this).parent().removeClass("selezionato");
            });
            element.attr("aria-label", "nascondi-contenuto");
        }
        if (element.attr("aria-expanded") == "false") {
            element.parent().addClass("selezionato");
        } else {
            element.parent().removeClass("selezionato");
        }
    });
    $("div#header-corp-accordion button a").each(function () {
        let innerText = $(this).text().toLowerCase().split(" ")[0];
        if (window.location.href.indexOf(innerText) != -1) {
            $(this).parent().click();
        }
    });
    $(".header-corp-mobile .header-corp-options input[type=checkbox]").prop(
        "checked",
        false
    );
    $(window).on("resize", function () {
        if (
            $(this).width() > 1023 &&
            $(".header-corp-mobile-menu").hasClass("aperto")
        ) {
            $(
                ".header-corp-mobile .header-corp-options input[type=checkbox]"
            ).click();
        }
    });
});
/*-------------------------------------------------------- card informative JS -----------------------------------------*/
$(document).ready(function () {
    if ($(".spazio-carosello-carte").length != 0) {
        $(".spazio-carosello-carte").each(function (index) {
            $(this).addClass("card-informativa-" + index + "-carosello");
            /* pagin */
            $(".pagingInfo-cards").each(function (index) {
                $(this).addClass("pagin-" + index);
                let $status = $(".pagin-" + index);
                let $slickElement = $(".card-informativa-" + index + "-carosello");
                let leftArrow = $(
                    ".card-informativa-" +
                    index +
                    "-carosello + .riga-frecce .news__arrow_dir_left"
                );
                let rightArrow = $(
                    ".card-informativa-" +
                    index +
                    "-carosello + .riga-frecce .news__arrow_dir_right"
                );
                $slickElement.on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        let i = (currentSlide ? currentSlide : 0) + 1;
                        $status.text(i + " " + slick.slideCount);
                        if (i === slick.slideCount) {
                            rightArrow.addClass("d-none");
                        } else {
                            if (rightArrow.hasClass("d-none")) {
                                rightArrow.removeClass("d-none");
                            }
                        }
                        if (i === 1) {
                            leftArrow.addClass("d-none");
                        } else {
                            if (leftArrow.hasClass("d-none")) {
                                leftArrow.removeClass("d-none");
                            }
                        }
                    }
                );
            });
            /* funzione che crea i caroselli */
            if ($(window).width() < 1024) {
                $(".card-informativa-" + index + "-carosello").slick({
                    arrows: false,
                    dots: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: "linear",
                    variableWidth: true,
                    variableHeight: true,
                    centerMode: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                dots: false,
                                infinite: false,
                                speed: 300,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                cssEase: "linear",
                                variableWidth: true,
                                variableHeight: true,
                                centerMode: true,
                            },
                        },
                    ],
                });
            }
        });
        $(window).on("resize", function () {
            $(".spazio-carosello-carte").each(function (index) {
                /* funzione che crea i caroselli */
                if ($(window).width() < 1024) {
                    $(".card-informativa-" + index + "-carosello").slick({
                        arrows: false,
                        dots: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        variableWidth: true,
                        variableHeight: true,
                        centerMode: true,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: false,
                                    dots: false,
                                    infinite: false,
                                    speed: 300,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    cssEase: "linear",
                                    variableWidth: true,
                                    variableHeight: true,
                                    centerMode: true,
                                },
                            },
                        ],
                    });
                } else {
                    $(".card-informativa-" + index + "-carosello").slick("unslick");
                }
            });
        });
    }
});

function slideCards(dir, e, slick, currentSlide, nextSlide) {
    let carouselPath = e.path[5].children[0].className;
    let mySliderClass = carouselPath.split(" ");
    let slider = $("." + mySliderClass[2]);
    let arrowRight = e.path[2].children[2];
    let arrowLeft = e.path[2].children[0];
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}

/*-------------------------------------------------------- promo band JS -----------------------------------------*/
if ($(".egl-promo-band-offerta-container").length != 0) {
    function promobandSticky() {
        let promoband = window.document.getElementsByClassName(
            "egl-promo-band-offerta-container"
        );
        let promoPosition = promoband[0].getBoundingClientRect().bottom;
        let smHeader = window.document.getElementById("smallHeader");
        let smHeightHeader = smHeader.offsetHeight;
        let lgHeader = window.document.getElementById("bigHeader");
        let lgHeightHeader = lgHeader.offsetHeight;
        let stickyPromo = window.document.getElementsByClassName(
            "egl-sticky-promo-box"
        )[0];

        if (promoPosition < smHeightHeader || promoPosition < lgHeightHeader) {
            stickyPromo.classList.remove("d-none");
        } else {
            if (!stickyPromo.classList.contains("d-none")) {
                stickyPromo.classList.add("d-none");
            }
        }
    }
    window.addEventListener("scroll", promobandSticky);
}

/*-------------------------------------------------------- ancora sticky JS -----------------------------------------*/
if ($("#Sticky-Banner").length != 0) {
    function comportamentoAncoraSticky() {
        let banner = window.document.getElementById("Sticky-Banner");
        let hero = window.document.getElementById("heroSticky");
        let heightHero = hero.offsetHeight;
        let heightBanner = banner.offsetHeight;
        let smHeader = window.document.getElementById("smallHeader");
        let smHeightHeader = smHeader.offsetHeight;
        let lgHeader = window.document.getElementById("bigHeader");
        let lgHeightHeader = lgHeader.offsetHeight;
        let sumHeaderBannerHeight = smHeightHeader + heightBanner - 1;
        let positionHero = hero.getBoundingClientRect().top;
        let smHeaderConMenu = window.document.getElementById(
            "NavbarMobileDropdownMenu"
        );
        if (smHeaderConMenu != null) {
            var smHeaderConMenuAltezza = smHeaderConMenu.offsetHeight;
        }
        let fixedHeader =
            window.document.getElementsByClassName("fixedHeaderMobile");
        if (fixedHeader.length == 0 && $(".header-corp") == 0) {
            banner.style.top = "91px";
        } else {
            if (smHeightHeader == 0) {
                sumHeaderBannerHeight = lgHeightHeader + heightBanner - 1;
                if (
                    positionHero + (heightBanner + heightHero) <
                    sumHeaderBannerHeight
                ) {
                    banner.classList.add("egl-sticky-bar");
                    if ($("#Sticky-Commodity").length != 0) {
                        banner.style.top = lgHeightHeader + 70 + "px";
                    } else {
                        banner.style.top = lgHeightHeader + "px";
                    }
                    banner.style.bottom = "unset";
                } else {
                    banner.classList.remove("egl-sticky-bar");
                }
            } else if (
                positionHero + (heightBanner + heightHero) <
                sumHeaderBannerHeight
            ) {
                if (smHeaderConMenuAltezza > smHeightHeader) {
                    banner.style.top = smHeaderConMenuAltezza + "px";
                    banner.classList.add("egl-sticky-bar");
                } else {
                    banner.style.top = smHeightHeader + "px";
                    banner.classList.add("egl-sticky-bar");
                }
            } else {
                banner.classList.remove("egl-sticky-bar");
            }
        }
    }
    window.addEventListener("scroll", comportamentoAncoraSticky);

    $(document).ready(function () {
        $(".egl-anchor-link").each(function () {
            let ancora = $(this);
            let href = $(this).attr("href");
            /*       $(this).attr('title', 'vai a ' + href) */
            let target = $(href);

            $(window).scroll(function () {
                var hT = target.offset().top - 60 - 90;
                var hH = target.outerHeight();
                var wH = $(window).height();
                var wS = $(this).scrollTop();
                if ($("#Sticky-Commodity").length != 0 && $(window).width() > 1023) {
                    var hT = target.offset().top - 60 - 90 - 70;
                }
                if (wS >= hT - 5 && wS <= hT + hH - 5) {
                    ancora.addClass("active");
                } else {
                    ancora.removeClass("active");
                }
            });
        });
    });
}
$(".egl-anchor-link").on("click", function () {
    let element = $(this);
    let attr = element.attr("href");
    let target = $(attr);
    setTimeout(function () {
        let lgHeader = window.document.getElementById("bigHeader");
        let lgHeightHeader = lgHeader.offsetHeight;
        let smHeader = window.document.getElementById("smallHeader");
        let smHeightHeader = smHeader.offsetHeight;
        let bodyRect = document.body.getBoundingClientRect().top;
        let targetRect = target[0].getBoundingClientRect().top;
        let banner = window.document.getElementById("Sticky-Banner");
        let hero = window.document.getElementById("heroSticky");
        let heightHero = hero.offsetHeight;
        let heightBanner = banner.offsetHeight;

        if ($("#Sticky-Commodity").length != 0 && $(window).width() > 1023) {
            var offsetTotaleScrollTop = lgHeightHeader + heightBanner;
            var elementPositionAccordionScroll = targetRect - bodyRect - 70;
        } else if ($(window).width() > 1023) {
            var offsetTotaleScrollTop = lgHeightHeader + heightBanner;
            var elementPositionAccordionScroll = targetRect - bodyRect;
        } else {
            var offsetTotaleScrollTop = smHeightHeader;
            var elementPositionAccordionScroll = targetRect - bodyRect - 100;
        }

        let offsetPosition = elementPositionAccordionScroll - offsetTotaleScrollTop;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }, 50);
});

/*-------------------------------------------------------- carrello JS -----------------------------------------*/
$(function () {
    $('.card-fornitura-carrello [data-toggle="tooltip"]').tooltip({
        html: true,
        template:
            '<div class="tooltip tooltip-cart" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tooltip-inner-cart"></div></div>',
    });
});

function checkScontoDigitaleAttivo() {
    if ($(".egl-cart-checkbox-sconto-opt-1").length != 0) {
        $(".egl-cart-checkbox-sconto-opt-1").each(function () {
            if ($(this).hasClass("sconto-checked")) {
                $(this)
                    .parents(".egl-carrello-dual")
                    .find(".cart-card-opt-rapporto")
                    .each(function () {
                        if (!$(this).hasClass("rapporto-scontato")) {
                            $(this).addClass("d-none");
                        } else {
                            $(this).removeClass("d-none");
                        }
                    });
            } else {
                $(this)
                    .parents(".egl-carrello-dual")
                    .find(".cart-card-opt-rapporto")
                    .each(function () {
                        if ($(this).hasClass("rapporto-scontato")) {
                            $(this).addClass("d-none");
                        } else {
                            $(this).removeClass("d-none");
                        }
                    });
            }
        });
    }
}
$(document).ready(function () {
    if ($(".egl-cart-checkbox-sconto-opt-1").length != 0) {
        setTimeout(function () {
            $(".egl-cart-checkbox-sconto-opt-1").click();
        }, 1000);
    }
});
/*      else {
      $('.cart-card-opt-rapporto').each(function () {
        if ($(this).hasClass('rapporto-scontato')) {
          $(this).addClass('d-none')
        } else {
          $(this).removeClass('d-none')
        }
      })
    } */
function toggleSconto(e) {
    let targetClass = e;
    /*   if ($('.' + targetClass).hasClass('egl-cart-checkbox-sconto-opt-1')) {
      let target = $('.egl-cart-checkbox-sconto-opt-1')
      let notTarget = $('.egl-cart-checkbox-sconto-opt-2')
      if (target.hasClass('sconto-checked')) {
      } else {
        notTarget.removeClass('sconto-checked')
        target.addClass('sconto-checked')
      }
    } else {
      let notTarget = $('.egl-cart-checkbox-sconto-opt-1')
      let target = $('.egl-cart-checkbox-sconto-opt-2')
      if (target.hasClass('sconto-checked')) {
      } else {
        notTarget.removeClass('sconto-checked')
        target.addClass('sconto-checked')
      }
    }
   */
}

$(".egl-cart-checkbox-sconto-opt-1, .egl-cart-checkbox-sconto-opt-2").on(
    "click",
    function () {
        $(this)
            .parents(".egl-carrello-dual")
            .find(".egl-cart-checkbox-sconto")
            .find(".cap14-egl")
            .not(this)
            .removeClass("sconto-checked");
        $(this).addClass("sconto-checked");
        if (
            $(this).hasClass("egl-cart-checkbox-sconto-opt-1") &&
            $(this).hasClass("sconto-checked")
        ) {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".cart-card-opt-rapporto")
                .each(function () {
                    if (!$(this).hasClass("rapporto-scontato")) {
                        $(this).addClass("d-none");
                    } else {
                        $(this).removeClass("d-none");
                    }
                });
        } else if (
            $(this).hasClass("egl-cart-checkbox-sconto-opt-2") &&
            $(this).hasClass("sconto-checked")
        ) {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".cart-card-opt-rapporto")
                .each(function () {
                    if ($(this).hasClass("rapporto-scontato")) {
                        $(this).addClass("d-none");
                    } else {
                        $(this).removeClass("d-none");
                    }
                });
        }
    }
);

function toggleTariffaLuce(tipoTariffa) {
    switch (tipoTariffa) {
        case "monofascia":
            /*       $('.riga-forniture-dual-trioraria').addClass('d-none')
            $('.riga-forniture-dual-mono').removeClass('d-none')
            $('.egl-cart-checkbox-tariffa-luce-opt-2').removeClass('sconto-checked')
            $('.egl-cart-checkbox-tariffa-luce-opt-1').addClass('sconto-checked') */
            break;
        case "multifascia":
            /*       $('.riga-forniture-dual-trioraria').removeClass('d-none')
            $('.riga-forniture-dual-mono').addClass('d-none')
            $('.egl-cart-checkbox-tariffa-luce-opt-2').addClass('sconto-checked')
            $('.egl-cart-checkbox-tariffa-luce-opt-1').removeClass('sconto-checked') */
            break;
        default:
    }
}
$(".egl-cart-checkbox-tariffa-luce-opt-1").on("click", function () {
    if ($(".listing-carrello-dual-body") != 0) {
        $(this)
            .parents(".listing-carrello-dual-body")
            .find(".egl-cart-checkbox-tariffa-luce-opt-2")
            .removeClass("sconto-checked");
        $(this)
            .parents(".listing-carrello-dual-body")
            .find(".egl-cart-checkbox-tariffa-luce-opt-1")
            .addClass("sconto-checked");

        if (
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-bi-bioraria").length != 0
        ) {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-bi-bioraria")
                .addClass("d-none");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-bi-mono")
                .removeClass("d-none");
        } else if (
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-trioraria").length != 0
        ) {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-trioraria")
                .addClass("d-none");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-mono")
                .removeClass("d-none");
        } else {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)")
                .addClass("d-none");
        }
    }

    if ($(".egl-carrello-dual") != 0) {
        $(this)
            .parents(".egl-carrello-dual")
            .find(".egl-cart-checkbox-tariffa-luce-opt-2")
            .removeClass("sconto-checked");
        $(this)
            .parents(".egl-carrello-dual")
            .find(".egl-cart-checkbox-tariffa-luce-opt-1")
            .addClass("sconto-checked");

        if (
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-bi-bioraria").length != 0
        ) {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-bi-bioraria")
                .addClass("d-none");
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-bi-mono")
                .removeClass("d-none");
        } else if (
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-trioraria").length != 0
        ) {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-trioraria")
                .addClass("d-none");
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-mono")
                .removeClass("d-none");
        } else {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)")
                .addClass("d-none");
        }
    }
});

$(".egl-cart-checkbox-tariffa-luce-opt-2").on("click", function () {
    if ($(".listing-carrello-dual-body") != 0) {
        $(this)
            .parents(".listing-carrello-dual-body")
            .find(".egl-cart-checkbox-tariffa-luce-opt-2")
            .addClass("sconto-checked");
        $(this)
            .parents(".listing-carrello-dual-body")
            .find(".egl-cart-checkbox-tariffa-luce-opt-1")
            .removeClass("sconto-checked");

        if (
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-bi-bioraria").length != 0
        ) {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-bi-bioraria")
                .removeClass("d-none");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-bi-mono")
                .addClass("d-none");
        } else if (
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-trioraria").length != 0
        ) {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-trioraria")
                .removeClass("d-none");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".riga-forniture-dual-mono")
                .addClass("d-none");
        } else {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)")
                .removeClass("d-none");
        }
    }
    if ($(".egl-carrello-dual") != 0) {
        $(this)
            .parents(".egl-carrello-dual")
            .find(".egl-cart-checkbox-tariffa-luce-opt-2")
            .addClass("sconto-checked");
        $(this)
            .parents(".egl-carrello-dual")
            .find(".egl-cart-checkbox-tariffa-luce-opt-1")
            .removeClass("sconto-checked");

        if (
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-bi-bioraria").length != 0
        ) {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-bi-bioraria")
                .removeClass("d-none");
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-bi-mono")
                .addClass("d-none");
        } else if (
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-trioraria").length != 0
        ) {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-trioraria")
                .removeClass("d-none");
            $(this)
                .parents(".egl-carrello-dual")
                .find(".riga-forniture-dual-mono")
                .addClass("d-none");
        } else {
            $(this)
                .parents(".egl-carrello-dual")
                .find(".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)")
                .removeClass("d-none");
        }
    }
});

function toggleTariffaLuceBioraria(tipoTariffa) {
    switch (tipoTariffa) {
        case "monofascia":
            /*       $('.riga-forniture-dual-bi-bioraria').addClass('d-none')
            $('.riga-forniture-dual-bi-mono').removeClass('d-none')
            $('.egl-cart-checkbox-tariffa-luce-opt-2').removeClass('sconto-checked')
            $('.egl-cart-checkbox-tariffa-luce-opt-1').addClass('sconto-checked') */
            break;
        case "bifascia":
            /*       $('.riga-forniture-dual-bi-bioraria').removeClass('d-none')
            $('.riga-forniture-dual-bi-mono').addClass('d-none')
            $('.egl-cart-checkbox-tariffa-luce-opt-2').addClass('sconto-checked')
            $('.egl-cart-checkbox-tariffa-luce-opt-1').removeClass('sconto-checked') */
            break;
        default:
    }
}
function toggleFornitura(e) {
    let fornitura = $(e.srcElement.parentElement);
    if (!fornitura.hasClass("card-fornitura-carrello-body")) {
        let fornituraParents = fornitura.parents(".card-fornitura-carrello-body");
        if (fornituraParents.hasClass("card-fornitura-toggle-luce")) {
            $(".card-fornitura-toggle-luce").each(function (index) {
                $(this).toggleClass("fornitura-selezionata");
                if ($(this).hasClass("fornitura-selezionata")) {
                    $(this).find(".fa-plus").addClass("fa-check");
                    $(this).find(".fa-plus").removeClass("fa-plus");
                } else {
                    $(this).find(".fa-check").addClass("fa-plus");
                    $(this).find(".fa-check").removeClass("fa-check");
                }
            });
        } else if (fornituraParents.hasClass("card-fornitura-toggle-gas")) {
            $(".card-fornitura-toggle-gas").each(function (index) {
                $(this).toggleClass("fornitura-selezionata");
                if ($(this).hasClass("fornitura-selezionata")) {
                    $(this).find(".fa-plus").addClass("fa-check");
                    $(this).find(".fa-plus").removeClass("fa-plus");
                } else {
                    $(this).find(".fa-check").addClass("fa-plus");
                    $(this).find(".fa-check").removeClass("fa-check");
                }
            });
        }
    }
    if (fornitura.hasClass("card-fornitura-toggle-luce")) {
        $(".card-fornitura-toggle-luce").each(function (index) {
            $(this).toggleClass("fornitura-selezionata");
            if ($(this).hasClass("fornitura-selezionata")) {
                $(this).find(".fa-plus").addClass("fa-check");
                $(this).find(".fa-plus").removeClass("fa-plus");
            } else {
                $(this).find(".fa-check").addClass("fa-plus");
                $(this).find(".fa-check").removeClass("fa-check");
            }
        });
    } else if (fornitura.hasClass("card-fornitura-toggle-gas")) {
        $(".card-fornitura-toggle-gas").each(function (index) {
            $(this).toggleClass("fornitura-selezionata");
            if ($(this).hasClass("fornitura-selezionata")) {
                $(this).find(".fa-plus").addClass("fa-check");
                $(this).find(".fa-plus").removeClass("fa-plus");
            } else {
                $(this).find(".fa-check").addClass("fa-plus");
                $(this).find(".fa-check").removeClass("fa-check");
            }
        });
    }
}
/* -----------------------------------------------------modale commodity e callback ------------------- */

$("input#inputPhoneNumber").on("focusin", function () {
    let w = window.innerWidth;
    let label = $(".egl-input-form-modale-label");
    if (w >= 768) {
        if (!label.hasClass("d-md-block")) {
            label.addClass("d-md-block");
        }
    }
});
$("input#inputPhoneNumber").on("focusout", function () {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let path = event.path;
    let form = path[1];
    let label = $(".egl-input-form-modale-label");
    if (w >= 768) {
        if ($("input#inputPhoneNumber").val()) {
            label.addClass("d-md-block");
        } else {
            label.removeClass("d-md-block");
        }
    }
});
$("input#inputPhoneNumber").on("change input", function () {
    if ($("input#inputPhoneNumber").is(":invalid")) {
        $(".egl-input-form-modale-label").addClass("form-non-valido");
    } else {
        $(".egl-input-form-modale-label").removeClass("form-non-valido");
    }
});

/* modale commodity */
$(document).ready(function () {
    $("#modale-promozione").on("hidden.bs.modal", function () {
        $("html, body").animate({
            scrollTop:
                $($("#modale-promozione .container-fluid button").attr("href")).offset()
                    .top - 50,
        });
    });
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            let commodityForm = $("#ti-chiamiamo-noi .needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(
                commodityForm,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                console.log
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            if ($("input#inputPhoneNumber").is(":invalid")) {
                                $(".egl-input-form-modale-label").addClass("form-non-valido");
                            } else {
                                $(".egl-input-form-modale-label").removeClass(
                                    "form-non-valido"
                                );
                            }
                            form.classList.add("was-validated");
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();

function changeCheckbox(IDcheckbox) {
    let value = $(IDcheckbox).attr("aria-checked");
    if (value === "true") {
        $(IDcheckbox).attr("aria-checked", "false");
    } else {
        $(IDcheckbox).attr("aria-checked", "true");
    }
}

//Example verify number of character typed
$(".textarea").keyup(function () {
    var characterCount = $(this).val().length,
        current = $("#current"),
        maximum = $("#maximum"),
        theCount = $("#the-count");

    current.text(characterCount);

    /*This isn't entirely necessary, just playin around*/

    if (characterCount >= 450) {
        maximum.css("color", "#8f0001");
        current.css("color", "#8f0001");
        theCount.css("font-weight", "bold");
    } else {
        maximum.css("color", "##333333");
        theCount.css("font-weight", "normal");
    }
});

/* ---------------------------------------------------carrello a step------------------ */

function mostraTooltipCarrelloStepFasciaOraria(tooltipID) {
    $("#" + tooltipID).toggleClass("d-none");
}
function caricaContenutoStepSuccessivo(nomeStep) {
    switch (nomeStep) {
        case "interstatario_contratto":
            $("#modale-carrelloStep-content").load("interstatario_contratto.html");
            setTimeout(function () {
                selezionaOpzioneCarrelloStep();
            }, 100);
            break;
        case "seleziona_fornitura":
            $("#modale-carrelloStep-content").load("seleziona_fornitura.html");
            checkTitle();
            setTimeout(function () {
                selezionaOpzioneCarrelloStep();
                checkFornituraPrimoStep();
            }, 100);
            break;
        case "stato_fornitura":
            $("#modale-carrelloStep-content").load("stato_fornitura.html");
            setTimeout(function () {
                selezionaOpzioneCarrelloStep();
            }, 100);
            break;
        case "seleziona_fornitura_promo":
            $("#modale-carrelloStep-content").load("seleziona_fornitura_promo.html");
            setTimeout(function () {
                selezionaOpzioneCarrelloStep();
                checkFornituraPrimoStep();
            }, 100);
            checkTitle();
            break;
        case "scelta_fascia_oraria_luce_bioraria":
            $("#modale-carrelloStep-content").load(
                "scelta_fascia_oraria_luce_bioraria.html"
            );
            setTimeout(function () {
                selezionaBoxFornituraModale();
            }, 100);
            break;
        case "scelta_fascia_oraria_trend":
            $("#modale-carrelloStep-content").load("scelta_fascia_oraria_trend.html");

            setTimeout(function () {
                selezionaBoxFornituraModale();
                $('#modale-carrelloStep-content [data-toggle="tooltip"]').tooltip({
                    html: true,
                    template:
                        '<div class="tooltip tooltip-cart" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tooltip-inner-cart"></div></div>',
                });
            }, 100);
            break;
        case "configurazione_pagamento":
            $("#modale-carrelloStep-content").load("configurazione_pagamento.html");
            controllaScontoDigitaleAttivo();
            break;
        case "configurazione_pagamento_trend":
            $("#modale-carrelloStep-content").load(
                "configurazione_pagamento_trend.html"
            );
            controllaScontoDigitaleAttivo();
            break;
        case "uscita_switch_in":
            $("#modale-carrelloStep-content").load("uscita_switch_in.html");
            cambiaTitoloDesktopInRicomincia();
            $(window).on("resize", function () {
                cambiaTitoloDesktopInRicomincia();
            });
            break;
        case "uscita_switch_in_promo":
            $("#modale-carrelloStep-content").load("uscita_switch_in_promo.html");
            cambiaTitoloDesktopInRicomincia();
            $(window).on("resize", function () {
                cambiaTitoloDesktopInRicomincia();
            });
            break;
        case "uscita_switch_in_box_doppio":
            $("#modale-carrelloStep-content").load(
                "uscita_switch_in_box_doppio.html"
            );
            cambiaTitoloDesktopInRicomincia();
            break;
        case "uscita_switch_in_KO_voltura":
            $("#modale-carrelloStep-content").load(
                "uscita_switch_in_KO_voltura.html"
            );
            cambiaTitoloDesktopInRicomincia();
            break;
        default:
            $("#modale-carrelloStep-content").load("seleziona_fornitura.html");
            setTimeout(function () {
                selezionaOpzioneCarrelloStep();
            }, 100);
            checkTitle();
            break;
    }
    if ($(window).width() < 1024) {
        $("#Modale-Carrello-Step").scrollTop(0);
    }
    setTimeout(function () {
        posizionaBottoniMobileCarrelostep();
    }, 300);
}
function cambiaTitoloDesktopInRicomincia() {
    if ($(window).width() >= 1024) {
        $(".egl-modale-carrello-step .modal-header .modal-title").addClass(
            "d-none"
        );
    }
}
function checkTitle() {
    $(".egl-modale-carrello-step .modal-header .modal-title").removeClass(
        "d-none"
    );
}
function controllaScontoDigitaleAttivo() {
    if (
        $(
            ".box-bottoni-config-pmnt.opt-addebitoDiretto.box-carrellostep-selezionato"
        ).hasClass("box-carrellostep-selezionato") &&
        $(
            ".box-bottoni-config-pmnt.pmnt-digitale.box-carrellostep-selezionato"
        ).hasClass("box-carrellostep-selezionato")
    ) {
        $(".carrellostep-config-pmnt-scontoDigitale-attivo").removeClass("d-none");
        $(".carrellostep-config-pmnt-scontoDigitale-disattivo").addClass("d-none");
        $(".egl-carrellostep-corrispettivi").each(function () {
            $(this).addClass("d-none");
        });
        $(".egl-carrellostep-corrispettivi-sconto-attivo").each(function () {
            $(this).removeClass("d-none");
        });
    } else {
        if (
            !$(".carrellostep-config-pmnt-scontoDigitale-attivo").hasClass(
                "d-none"
            ) &&
            $(".carrellostep-config-pmnt-scontoDigitale-disattivo").hasClass("d-none")
        ) {
            $(".carrellostep-config-pmnt-scontoDigitale-attivo").addClass("d-none");
            $(".carrellostep-config-pmnt-scontoDigitale-disattivo").removeClass(
                "d-none"
            );
            $(".egl-carrellostep-corrispettivi").each(function () {
                $(this).removeClass("d-none");
            });
            $(".egl-carrellostep-corrispettivi-sconto-attivo").each(function () {
                $(this).addClass("d-none");
            });
        }
    }
}
function selezionaConfigPagamentiTipoPag(number) {
    if (number == 0) {
        $(".box-bottoni-config-pmnt.opt-bollettino").addClass(
            "box-carrellostep-selezionato"
        );
        $(".box-bottoni-config-pmnt.opt-addebitoDiretto").removeClass(
            "box-carrellostep-selezionato"
        );
    } else {
        $(".box-bottoni-config-pmnt.opt-bollettino").removeClass(
            "box-carrellostep-selezionato"
        );
        $(".box-bottoni-config-pmnt.opt-addebitoDiretto").addClass(
            "box-carrellostep-selezionato"
        );
    }
    controllaScontoDigitaleAttivo();
}
function selezionaConfigPagamentiTipoBolletta(number) {
    if (number == 0) {
        $(".box-bottoni-config-pmnt.pmnt-cartaceo").addClass(
            "box-carrellostep-selezionato"
        );
        $(".box-bottoni-config-pmnt.pmnt-digitale").removeClass(
            "box-carrellostep-selezionato"
        );
    } else {
        $(".box-bottoni-config-pmnt.pmnt-cartaceo").removeClass(
            "box-carrellostep-selezionato"
        );
        $(".box-bottoni-config-pmnt.pmnt-digitale").addClass(
            "box-carrellostep-selezionato"
        );
    }
    controllaScontoDigitaleAttivo();
}
function selezionaOpzioneCarrelloStep() {
    $(".egl-box-fornitura-carrellostep").click(function () {
        $(".egl-box-fornitura-carrellostep").each(function () {
            $(this).removeClass("box-carrellostep-selezionato");
        });
        $(this).addClass("box-carrellostep-selezionato");
    });
}

function selezionaBoxFornituraModale() {
    $(".box-carrellostep-fascia-bi:not(.non-selezionabile)").click(function () {
        $(".box-carrellostep-fascia-bi").each(function () {
            $(this).removeClass("box-carrellostep-selezionato");
        });
        $(this).addClass("box-carrellostep-selezionato");
        if ($(window).width() > 1023) {
            //FIX MONORARIA - BIORARIA
            if ($(".box-carrellostep-fascia-bi-bioraria").filter(".box-carrellostep-selezionato")) {
                $(".contenitore-carrellostep-fascia-bi-desktop-opt1").addClass(
                    "d-none"
                );
            }
            if ($(this).hasClass("box-carrellostep-fascia-bi-mono")) {
                $(".contenitore-carrellostep-fascia-bi-desktop-opt1").removeClass(
                    "d-none"
                );
                if (!$("div").hasClass("pz-ind-opt")) {
                    $(".contenitore-carrellostep-fascia-bi-desktop-opt1").addClass(
                        "d-none"
                    );
                    $(".contenitore-carrellostep-fascia-bi-desktop-opt2").removeClass(
                        "d-none"
                    );

                } else {
                    $(
                        ".contenitore-carrellostep-fascia-bi-desktop-opt2.pz-ind-opt"
                    ).addClass("d-none");
                    $(
                        ".contenitore-carrellostep-fascia-bi-desktop-opt1.pz-ind-opt"
                    ).removeClass("d-none");
                }
            } else {
                if (!$("div").hasClass("pz-ind-opt")) {
                    $(".contenitore-carrellostep-fascia-bi-desktop-opt1").removeClass(
                        "d-none"
                    );
                    $(".contenitore-carrellostep-fascia-bi-desktop-opt2").addClass(
                        "d-none"
                    );
                } else {
                    $(
                        ".contenitore-carrellostep-fascia-bi-desktop-opt2.pz-ind-opt"
                    ).removeClass("d-none");
                    $(
                        ".contenitore-carrellostep-fascia-bi-desktop-opt1.pz-ind-opt"
                    ).addClass("d-none");
                }
            }
            //END FIX
        }
    });
}
function checkFornituraPrimoStep() {
    if (
        $(".card-fornitura-toggle-gas.fornitura-selezionata").length >= 1 &&
        $(".card-fornitura-toggle-luce.fornitura-selezionata").length >= 1
    ) {
        $(".egl-box-fornitura-carrellostep")
            .first()
            .addClass("box-carrellostep-selezionato");
    } else if (
        $(".card-fornitura-toggle-luce.fornitura-selezionata").length >= 1
    ) {
        $(".egl-box-fornitura-carrellostep:eq(1)").addClass(
            "box-carrellostep-selezionato"
        );
    } else if (
        $(".card-fornitura-toggle-gas.fornitura-selezionata").length >= 1
    ) {
        $(".egl-box-fornitura-carrellostep")
            .last()
            .addClass("box-carrellostep-selezionato");
    } else {
        $(".egl-box-fornitura-carrellostep")
            .first()
            .addClass("box-carrellostep-selezionato");
    }
}
function posizionaBottoniMobileCarrelostep() {
    let closeButton = $(".egl-selezione-fornitura .egl-mod-comm-closeIcon");
    let backButton = $(".egl-mod-comm-prevIcon");
    let closeButtonBottom = 0 - closeButton[0].getBoundingClientRect().bottom - 8;
    let modaleTitle = $(".egl-modale-carrello-step .modal-header").height();
    let half = modaleTitle / 2;
    if ($(window).width() < 1024) {
        closeButton.css("top", half);
        backButton.css("top", closeButtonBottom);
    }
}

$(window).on("init resize", function () {
    let closeButton = $(".egl-selezione-fornitura .egl-mod-comm-closeIcon");
    let backButton = $(".egl-mod-comm-prevIcon");
    if (closeButton.length != 0 && backButton.length != 0) {
        let closeButtonBottom =
            0 - closeButton[0].getBoundingClientRect().bottom - 8;
        let modaleTitle = $(".egl-modale-carrello-step .modal-header").height();
        let half = modaleTitle / 2;
        if ($(window).width() < 1024) {
            closeButton.css("top", half);
            backButton.css("top", closeButtonBottom);
        }
    }
});
$("#Modale-Carrello-Step").on("shown.bs.modal", function (e) {
    $("body").addClass("modal-open");
});
/*-------------------------------------------------------- sticky commodity JS -----------------------------------------*/
if ($("#Sticky-Commodity").length != 0) {
    function comportamentoStickyCommodity() {
        if ($("#bigHeader").length != 0 && $("#smallHeader").length != 0) {
            let banner = window.document.getElementById("Sticky-Commodity");
            let hero = window.document.getElementById("heroSticky");
            let heightHero = hero.offsetHeight;
            let heightBanner = banner.offsetHeight;
            let smHeader = window.document.getElementById("smallHeader");
            let smHeightHeader = smHeader.offsetHeight;
            let lgHeader = window.document.getElementById("bigHeader");
            let lgHeightHeader = lgHeader.offsetHeight;
            let sumHeaderBannerHeight = smHeightHeader + heightBanner - 1;
            let positionHero = hero.getBoundingClientRect().top;

            if (smHeightHeader == 0) {
                sumHeaderBannerHeight = lgHeightHeader + heightBanner - 1;
                if (
                    positionHero + (heightBanner + heightHero) <
                    sumHeaderBannerHeight
                ) {
                    banner.classList.add("egl-sticky-commodity");
                    banner.classList.remove("d-none");
                    banner.style.top = lgHeightHeader + "px";
                    banner.style.bottom = "unset";
                } else {
                    banner.classList.remove("egl-sticky-commodity");
                    banner.classList.add("d-none");
                }
            } else if (
                positionHero + (heightBanner + heightHero) <
                sumHeaderBannerHeight
            ) {
                banner.classList.add("egl-sticky-commodity");
                banner.style.top = "unset";
                banner.style.bottom = "0px";
                banner.classList.remove("d-none");
            } else {
                banner.classList.remove("egl-sticky-commodity");
                banner.classList.add("d-none");
            }
        } else {
            let banner = window.document.getElementById("Sticky-Commodity");
            let hero = window.document.getElementById("heroSticky");
            let heightHero = hero.offsetHeight;
            let heightBanner = banner.offsetHeight;
            let positionHeroTop = hero.getBoundingClientRect().top;
            let positionHeroBottom = hero.getBoundingClientRect().bottom;
            if (positionHeroBottom <= 0) {
                if ($(window).width() > 1023) {
                    banner.classList.add("egl-sticky-commodity");
                    banner.classList.remove("d-none");
                    banner.style.top = "0px";
                    banner.style.bottom = "unset";
                } else {
                    banner.classList.add("egl-sticky-commodity");
                    banner.style.top = "unset";
                    banner.style.bottom = "0px";
                    banner.classList.remove("d-none");
                }
            } else {
                banner.classList.remove("egl-sticky-commodity");
                banner.classList.add("d-none");
            }
        }
    }
    window.addEventListener("scroll", comportamentoStickyCommodity);
}

/*-------------------------------------------------------- tab listing JS -----------------------------------------*/
if ($("#Sticky-Tab").length != 0) {
    function comportamentoTabListing() {
        let banner = window.document.getElementById("Sticky-Tab");
        let smHeader = window.document.getElementById("smallHeader");
        let smHeightHeader = smHeader.offsetHeight;
        let smHeaderConMenu = window.document.getElementById(
            "NavbarMobileDropdownMenu"
        );
        let smHeaderConMenuAltezza = smHeaderConMenu.offsetHeight;
        let lgHeader = window.document.getElementById("bigHeader");
        let lgHeightHeader = lgHeader.offsetHeight;
        let fixedHeader =
            window.document.getElementsByClassName("fixedHeaderMobile");

        if (fixedHeader.length == 0) {
            banner.style.top = "91px";
        } else {
            if (smHeightHeader == 0) {
                banner.style.top = lgHeightHeader + "px";
            } else {
                if (smHeaderConMenuAltezza > smHeightHeader) {
                    banner.style.top = smHeaderConMenuAltezza + "px";
                } else {
                    banner.style.top = smHeightHeader + "px";
                }
            }
        }
    }
    window.onload = comportamentoTabListing;
    window.addEventListener("scroll", comportamentoTabListing);
}

/* --------------------------------------------faq ------------------------------------*/

function checkAriaLabelAccordion(nome) { }

$(".egl-faq-accordion-container .button-faq").on("click", function () {
    let element = $(this);
    let attr = element.attr("aria-label");
    let target = element.parents(".card-header").next();
    if (attr == "nascondi-contenuto") {
        $(".button-faq").each(function () {
            $(this).attr("aria-label", "espandi-contenuto");
        });
    } else {
        $(".button-faq").each(function () {
            $(this).attr("aria-label", "espandi-contenuto");
        });
        element.attr("aria-label", "nascondi-contenuto");
    }
    $(target).on("shown.bs.collapse", function () {
        setTimeout(function () {
            let lgHeader = window.document.getElementById("bigHeader");
            let lgHeightHeader = lgHeader.offsetHeight;
            let smHeader = window.document.getElementById("smallHeader");
            let smHeightHeader = smHeader.offsetHeight;
            let banner = window.document.getElementById("Sticky-Commodity");
            let heightBanner = banner.offsetHeight;
            let bodyRect = document.body.getBoundingClientRect().top;
            let elementRect = element[0].getBoundingClientRect().top;
            if ($(window).width() > 1023) {
                var offsetTotaleScrollTop = lgHeightHeader + heightBanner;
                var elementPositionAccordionScroll = elementRect - bodyRect - 20;
            } else {
                var offsetTotaleScrollTop = smHeightHeader;
                var elementPositionAccordionScroll = elementRect - bodyRect - 100;
            }

            let offsetPosition =
                elementPositionAccordionScroll - offsetTotaleScrollTop;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }, 50);
    });
});

$(document).ready(function () {
    $("div .tabs-faq-item").first().addClass("tabs-item-active");
    $(".egl-faq-accordion-container .accordion").each(function (index) {
        let idAccordion = $(this).attr("id");
        $(this)
            .find(".collapse")
            .each(function (index) {
                $(this).attr("data-parent", "#" + idAccordion);
                $(this).attr("id", "elemento" + index + idAccordion);
            });

        $(this)
            .find(".button-faq")
            .each(function (index) {
                $(this).attr("data-target", "#elemento" + index + idAccordion);
            });
    });
    $("#accordionFAQ2").hide();
    $("#accordionFAQ3").hide();
    $("#accordionFAQ4").hide();
    $("#accordionFAQ5").hide();
    $("#accordionFAQ6").hide();
    $("div .tabs-faq-item").on("click", function () {
        $(this).addClass("tabs-item-active");
        let text = $(this).text();
        $("#title-tab").text(text);
        $("div .tabs-faq-item").not(this).removeClass("tabs-item-active");
        let tablinks = $(".tabs-faq-item");
        for (i = 0; i < tablinks.length; i++) {
            if (this == tablinks[0]) {
                $("#accordionFAQ").show();
                $("#accordionFAQ2").hide();
                $("#accordionFAQ3").hide();
                $("#accordionFAQ4").hide();
                $("#accordionFAQ5").hide();
                $("#accordionFAQ6").hide();
            } else if (this == tablinks[1]) {
                $("#accordionFAQ").hide();
                $("#accordionFAQ2").show();
                $("#accordionFAQ3").hide();
                $("#accordionFAQ4").hide();
                $("#accordionFAQ5").hide();
                $("#accordionFAQ6").hide();
            } else if (this == tablinks[2]) {
                $("#accordionFAQ").hide();
                $("#accordionFAQ2").hide();
                $("#accordionFAQ3").show();
                $("#accordionFAQ4").hide();
                $("#accordionFAQ5").hide();
                $("#accordionFAQ6").hide();
            } else if (this == tablinks[3]) {
                $("#accordionFAQ").hide();
                $("#accordionFAQ2").hide();
                $("#accordionFAQ3").hide();
                $("#accordionFAQ4").show();
                $("#accordionFAQ5").hide();
                $("#accordionFAQ6").hide();
            } else if (this == tablinks[4]) {
                $("#accordionFAQ").hide();
                $("#accordionFAQ2").hide();
                $("#accordionFAQ3").hide();
                $("#accordionFAQ4").hide();
                $("#accordionFAQ5").show();
                $("#accordionFAQ6").hide();
            } else if (this == tablinks[5]) {
                $("#accordionFAQ").hide();
                $("#accordionFAQ2").hide();
                $("#accordionFAQ3").hide();
                $("#accordionFAQ4").hide();
                $("#accordionFAQ5").hide();
                $("#accordionFAQ6").show();
            }
        }
    });
});

/*------------------------------------------ listing ------------------------------*/

$(document).ready(function () {
    if ($(".listing-carrello-dual-body").length != 0) {
        $(".listing-sconto-digitale-title").on("click", function () {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-arrow img")
                .toggleClass("listing-rotate");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-content-to-show")
                .toggle();
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-arrow img")
                .toggleClass("listing-rotate-reset");
        });

        if ($(".listing-carrello-dual-body .egl-cart-checkbox-sconto-opt-1") != 0) {
            checkScontoDigitaleAttivo();
        }
        $(
            ".listing-carrello-dual-body .egl-cart-checkbox-sconto-opt-1, .listing-carrello-dual-body .egl-cart-checkbox-sconto-opt-2"
        ).on("click", function () {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".egl-cart-checkbox-sconto")
                .find(".cap14-egl")
                .not(this)
                .removeClass("sconto-checked");
            $(this).addClass("sconto-checked");
            if (
                $(this).hasClass("egl-cart-checkbox-sconto-opt-1") &&
                $(this).hasClass("sconto-checked")
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".cart-card-opt-rapporto")
                    .each(function () {
                        if (!$(this).hasClass("rapporto-scontato")) {
                            $(this).addClass("d-none");
                        } else {
                            $(this).removeClass("d-none");
                        }
                    });
            } else if (
                $(this).hasClass("egl-cart-checkbox-sconto-opt-2") &&
                $(this).hasClass("sconto-checked")
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".cart-card-opt-rapporto")
                    .each(function () {
                        if ($(this).hasClass("rapporto-scontato")) {
                            $(this).addClass("d-none");
                        } else {
                            $(this).removeClass("d-none");
                        }
                    });
            }
        });

        $(".egl-cart-checkbox-tariffa-luce-opt-1").on("click", function () {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".egl-cart-checkbox-tariffa-luce-opt-2")
                .removeClass("sconto-checked");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".egl-cart-checkbox-tariffa-luce-opt-1")
                .addClass("sconto-checked");

            if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-bi-bioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-bi-bioraria")
                    .addClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-bi-mono")
                    .removeClass("d-none");
            } else if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-trioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-trioraria")
                    .addClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-mono")
                    .removeClass("d-none");
            } else {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(
                        ".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)"
                    )
                    .addClass("d-none");
            }
        });

        $(".egl-cart-checkbox-tariffa-luce-opt-2").on("click", function () {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".egl-cart-checkbox-tariffa-luce-opt-2")
                .addClass("sconto-checked");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".egl-cart-checkbox-tariffa-luce-opt-1")
                .removeClass("sconto-checked");

            if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-bi-bioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-bi-bioraria")
                    .removeClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-bi-mono")
                    .addClass("d-none");
            } else if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-trioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-trioraria")
                    .removeClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".riga-forniture-dual-mono")
                    .addClass("d-none");
            } else {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(
                        ".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)"
                    )
                    .removeClass("d-none");
            }
        });

        $(
            ".listing-carrello-dual-body .listing-cart-checkbox-sconto-opt-1, .listing-carrello-dual-body .listing-cart-checkbox-sconto-opt-2"
        ).on("click", function () {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-cart-checkbox-sconto")
                .find(".cap14-egl")
                .not(this)
                .removeClass("listing-sconto-checked-orange");
            $(this).addClass("listing-sconto-checked-orange");
            if (
                $(this).hasClass("listing-cart-checkbox-sconto-opt-1") &&
                $(this).hasClass("listing-sconto-checked-orange")
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-cart-card-opt-rapporto")
                    .each(function () {
                        if (!$(this).hasClass("listing-rapporto-scontato")) {
                            $(this).addClass("d-none");
                        } else {
                            $(this).removeClass("d-none");
                        }
                    });
            } /* if ($(this).hasClass('egl-cart-checkbox-sconto-opt-2') && $(this).hasClass('listing-sconto-checked-orange')) */ else {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-cart-card-opt-rapporto")
                    .each(function () {
                        if ($(this).hasClass("listing-rapporto-scontato")) {
                            $(this).addClass("d-none");
                        } else {
                            $(this).removeClass("d-none");
                        }
                    });
            }
        });

        $(".listing-cart-checkbox-tariffa-luce-opt-1").on("click", function () {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-cart-checkbox-tariffa-luce-opt-2")
                .removeClass("listing-sconto-checked-orange");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-cart-checkbox-tariffa-luce-opt-1")
                .addClass("listing-sconto-checked-orange");

            if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-bi-bioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-bi-bioraria")
                    .addClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-bi-mono")
                    .removeClass("d-none");
            } else if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-trioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-trioraria")
                    .addClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-mono")
                    .removeClass("d-none");
            } else {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(
                        ".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)"
                    )
                    .addClass("d-none");
            }
        });

        $(".listing-cart-checkbox-tariffa-luce-opt-2").on("click", function () {
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-cart-checkbox-tariffa-luce-opt-2")
                .addClass("listing-sconto-checked-orange");
            $(this)
                .parents(".listing-carrello-dual-body")
                .find(".listing-cart-checkbox-tariffa-luce-opt-1")
                .removeClass("listing-sconto-checked-orange");

            if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-bi-bioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-bi-bioraria")
                    .removeClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-bi-mono")
                    .addClass("d-none");
            } else if (
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-trioraria").length != 0
            ) {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-trioraria")
                    .removeClass("d-none");
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(".listing-riga-forniture-dual-mono")
                    .addClass("d-none");
            } else {
                $(this)
                    .parents(".listing-carrello-dual-body")
                    .find(
                        ".card-fornitura-carrello-dettaglio-opzioni:not(:first-of-type)"
                    )
                    .removeClass("d-none");
            }
        });
    }
});

/*------------------------------------------ breacrumb ------------------------------*/
$(document).ready(function () {
    let breadcrumbItemsTotal = $(".egl-breadcrumb-item").length;
    if (
        $(window).width() < 768 &&
        $(".breadcrumb").length != 0 &&
        breadcrumbItemsTotal > 3
    ) {
        $(".egl-breadcrumb-item").each(function (index) {
            if (index != 0) {
                if (
                    index != breadcrumbItemsTotal - 1 &&
                    index != breadcrumbItemsTotal - 2
                ) {
                    $(this).addClass("d-none");
                }
            }
        });
        $("ol.breadcrumb li:eq(0)").after(
            '<li class="breadcrumb-item egl-breadcrumb-item" aria-current="page">...</li>'
        );
    }
});
/* ---------------------------------------------fastweb-------------------------------- */
$(document).ready(function () {
    if ($(".flex-mobile").length != 0) {
        $(".flex-mobile").slick({
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            cssEase: "linear",
            variableWidth: true,
            variableHeight: true,
        });
        $(".slick-dots").addClass("sf2-slick-dots");
    }
});
/* --------------------------------grid cards--------------------------------------- */
$(document).ready(function () {
    if ($(".gridCardCarousel").length != 0) {
        //    $(
        //      ".grid-card-text, .grid-card-label, .grid-card-card-body-title, .grid-card-card-body-text"
        //    ).each(function () {
        //      if ($(this).text() != "") {
        //        $(this).attr("tabindex", "0");
        //      }
        //    });
        if ($(window).width() > 1023) {
        } else {
            $(".gridCardCarousel").slick({
                arrows: true,
                appendArrows: $(".news__arrows"),
                prevArrow: '<div class="news_arrow news_arrow_dir_left"></div>',
                nextArrow: '<div class="news_arrow news_arrow_dir_right"></div>',
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true,
                variableHeight: true,
            });
            $(".gridCardCarousel").each(function () {
                let $statusGridCards = $(this)
                    .parents(".grid-card-container")
                    .find(".pagingGridCard-cards");
                let $slickElementGridCards = $(this);
                let leftArrowGridCards = $(this)
                    .parents(".grid-card-container")
                    .find(".gridCardFrecce .news__arrow_dir_left");
                let rightArrowGridCards = $(this)
                    .parents(".grid-card-container")
                    .find(".gridCardFrecce .news__arrow_dir_right");
                $slickElementGridCards.on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        var i = (currentSlide ? currentSlide : 0) + 1;
                        $statusGridCards.text(i + " " + slick.slideCount);
                        if (i === slick.slideCount) {
                            rightArrowGridCards.addClass("d-none");
                        } else {
                            if (rightArrowGridCards.hasClass("d-none")) {
                                rightArrowGridCards.removeClass("d-none");
                            }
                        }
                        if (i === 1) {
                            leftArrowGridCards.addClass("d-none");
                        } else {
                            if (leftArrowGridCards.hasClass("d-none")) {
                                leftArrowGridCards.removeClass("d-none");
                            }
                        }
                    }
                );
                leftArrowGridCards.click();
            });
            $(
                ".gridCardCarousel .slick-slide:not(.slick-current) li, .gridCardCarousel .slick-slide:not(.slick-current) p, .gridCardCarousel .slick-slide:not(.slick-current) h1, .gridCardCarousel .slick-slide:not(.slick-current) h2, .gridCardCarousel .slick-slide:not(.slick-current) h3, .gridCardCarousel .slick-slide:not(.slick-current) h4, .gridCardCarousel .slick-slide:not(.slick-current) h5"
            ).each(function () {
                if ($(this).text() != "") {
                    $(this).attr("tabindex", "-1");
                }
            });
            $(
                ".gridCardCarousel .slick-slide:not(.slick-current) .grid-card-text, .gridCardCarousel .slick-slide:not(.slick-current) .grid-card-label, .gridCardCarousel .slick-slide:not(.slick-current) .grid-card-card-body-title, .gridCardCarousel .slick-slide:not(.slick-current) .grid-card-card-body-text"
            ).each(function () {
                if ($(this).text() != "") {
                    $(this).attr("tabindex", "-1");
                }
            });
            $(".gridCardFrecce .news__arrow").attr("tabindex", "0");
            $(".gridCardFrecce .news__arrow_dir_left").attr(
                "onkeypress",
                'slideGridCard("-", event)'
            );
            $(".gridCardFrecce .news__arrow_dir_right").attr(
                "onkeypress",
                'slideGridCard("+", event)'
            );
        }
        $(window).on("resize", function () {
            if ($(window).width() < 1023) {
                if ($(".gridCardCarousel").hasClass("slick-initialized")) {
                    $(".gridCardCarousel").slick("resize");
                } else {
                    $(".gridCardCarousel").slick({
                        arrows: true,
                        appendArrows: $(".news__arrows"),
                        prevArrow: '<div class="news_arrow news_arrow_dir_left"></div>',
                        nextArrow: '<div class="news_arrow news_arrow_dir_right"></div>',
                        dots: false,
                        infinite: false,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                        variableHeight: true,
                    });
                    $(".gridCardCarousel").each(function () {
                        let $statusGridCards = $(this)
                            .parents(".grid-card-container")
                            .find(".pagingGridCard-cards");
                        let $slickElementGridCards = $(this);
                        let leftArrowGridCards = $(this)
                            .parents(".grid-card-container")
                            .find(".gridCardFrecce .news__arrow_dir_left");
                        let rightArrowGridCards = $(this)
                            .parents(".grid-card-container")
                            .find(".gridCardFrecce .news__arrow_dir_right");
                        $slickElementGridCards.on(
                            "init reInit afterChange",
                            function (event, slick, currentSlide, nextSlide) {
                                var i = (currentSlide ? currentSlide : 0) + 1;
                                $statusGridCards.text(i + " " + slick.slideCount);
                                if (i === slick.slideCount) {
                                    rightArrowGridCards.addClass("d-none");
                                } else {
                                    if (rightArrowGridCards.hasClass("d-none")) {
                                        rightArrowGridCards.removeClass("d-none");
                                    }
                                }
                                if (i === 1) {
                                    leftArrowGridCards.addClass("d-none");
                                } else {
                                    if (leftArrowGridCards.hasClass("d-none")) {
                                        leftArrowGridCards.removeClass("d-none");
                                    }
                                }
                            }
                        );
                        leftArrowGridCards.click();
                    });
                }
            } else {
                $(".gridCardCarousel.slick-initialized").slick("unslick");
            }
        });
    }
});
function slideGridCard(dir) {
    let slider = $(".gridCardCarousel");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
    $(
        ".gridCardCarousel .slick-slide:not(.slick-current) .grid-card-text, .gridCardCarousel .slick-slide:not(.slick-current) .grid-card-label, .gridCardCarousel .slick-slide:not(.slick-current) .grid-card-card-body-title, .gridCardCarousel .slick-slide:not(.slick-current) .grid-card-card-body-text"
    ).each(function () {
        if ($(this).text() != "") {
            $(this).attr("tabindex", "-1");
        }
    });
    $(
        ".gridCardCarousel .slick-slide:not(.slick-current) li, .gridCardCarousel .slick-slide:not(.slick-current) p, .gridCardCarousel .slick-slide:not(.slick-current) h1, .gridCardCarousel .slick-slide:not(.slick-current) h2, .gridCardCarousel .slick-slide:not(.slick-current) h3, .gridCardCarousel .slick-slide:not(.slick-current) h4, .gridCardCarousel .slick-slide:not(.slick-current) h5"
    ).each(function () {
        if ($(this).text() != "") {
            $(this).attr("tabindex", "-1");
        }
    });
}
/* --------------------------------login--------------------------------------- */

$(document).ready(function () {
    setTimeout(function () {
        caricaGigyaLogin();
        $("a.gigya-composite-control.gigya-composite-control-link").on(
            "click",
            function () {
                clearGigyaInputs();
                setTimeout(function () {
                    caricaGigyaLogin();
                    caricaGigyaPasswordReset();
                }, 500);
            }
        );
    }, 2000);
});

function caricaGigyaLogin() {
    $(
        ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
    ).on("focusout", function () {
        setTimeout(function () {
            if ($("input#gigya-loginID-123823426679400480").hasClass("gigya-valid")) {
                $(
                    ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
                ).addClass("campo-compilato");
            } else {
                $(
                    ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
                ).removeClass("campo-compilato");
            }
        }, 10);
    });
    $(
        ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
    ).on("focusout", function () {
        setTimeout(function () {
            if ($("input#gigya-password-410996811502332").hasClass("gigya-valid")) {
                $(
                    ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
                ).addClass("campo-compilato");
            } else {
                $(
                    ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
                ).removeClass("campo-compilato");
            }
        });
    });

    $("input#gigya-loginID-123823426679400480").trigger("focusout");
    $("input#gigya-password-410996811502332").trigger("focusout");

    $("input#gigya-loginID-123823426679400480").change(function () {
        setTimeout(function () { });
        if ($(this).hasClass("gigya-error")) {
            $(
                ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
            ).addClass("campo-errato");
        } else {
            $(
                ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
            ).removeClass("campo-errato");
        }
    });
    $("input#gigya-password-410996811502332").change(function () {
        setTimeout(function () { });
        if ($(this).hasClass("gigya-error")) {
            $(
                ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
            ).addClass("campo-errato");
        } else {
            $(
                ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
            ).removeClass("campo-errato");
        }
    });

    $("#gigya-login-form").on("submit", function (e) {
        e.preventDefault();
        if ($("input#gigya-loginID-123823426679400480").hasClass("gigya-error")) {
            $(
                ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
            ).addClass("campo-errato");
        } else {
            $(
                ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
            ).removeClass("campo-errato");
        }
        if ($("input#gigya-password-410996811502332").hasClass("gigya-error")) {
            $(
                ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
            ).addClass("campo-errato");
        } else {
            $(
                ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
            ).removeClass("campo-errato");
        }
    });
}

function caricaGigyaPasswordReset() {
    $(".gigya-reset-password-form input#gigya-textbox-loginID").trigger(
        "focusout"
    );
    $(
        ".gigya-reset-password-form .gigya-composite-control.gigya-composite-control-textbox.email-wrapper"
    ).on("focusout", function () {
        setTimeout(function () {
            if (
                $(".gigya-reset-password-form input#gigya-textbox-loginID").hasClass(
                    "gigya-valid"
                )
            ) {
                $(".gigya-reset-password-form input#gigya-textbox-loginID")
                    .parents(
                        ".gigya-composite-control.gigya-composite-control-textbox.email-wrapper"
                    )
                    .addClass("campo-compilato");
            } else {
                $(".gigya-reset-password-form input#gigya-textbox-loginID")
                    .parents(
                        ".gigya-composite-control.gigya-composite-control-textbox.email-wrapper"
                    )
                    .removeClass("campo-compilato");
            }
        }, 50);
    });
    $(".gigya-reset-password-form input#gigya-textbox-loginID").change(
        function () {
            setTimeout(function () { });
            if ($(this).hasClass("gigya-error")) {
                $(this)
                    .parents(
                        ".gigya-composite-control.gigya-composite-control-textbox.email-wrapper"
                    )
                    .addClass("campo-errato");
            } else {
                $(this)
                    .parents(
                        ".gigya-composite-control.gigya-composite-control-textbox.email-wrapper"
                    )
                    .removeClass("campo-errato");
            }
        }
    );
    $("#gigya-reset-password-form").on("submit", function (e) {
        e.preventDefault();
        if ($("input#gigya-textbox-loginID").hasClass("gigya-error")) {
            $(
                ".gigya-screen .gigya-composite-control.gigya-composite-control-textbox"
            ).addClass("campo-errato");
        } else {
            $(
                ".gigya-screen .gigya-composite-control.gigya-composite-control-textbox"
            ).removeClass("campo-errato");
        }
    });
}

function clearGigyaInputs() {
    $(
        ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
    ).removeClass("campo-compilato");

    $(
        ".gigya-composite-control.gigya-composite-control-textbox.gigya-composite-control-loginID"
    ).removeClass("campo-errato");

    $(
        ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
    ).removeClass("campo-compilato");

    $(
        ".gigya-screen .gigya-composite-control.gigya-composite-control-password"
    ).removeClass("campo-errato");

    $(
        ".gigya-composite-control.gigya-composite-control-textbox.email-wrapper"
    ).removeClass("campo-compilato");
    $(
        ".gigya-composite-control.gigya-composite-control-textbox.email-wrapper"
    ).removeClass("campo-errato");
}

/* hero homepage carousel */
$(document).ready(function () {
    if ($(".HP-wrapper").length != 0) {
        let HPslideTotal = $(".HP-carosello-behaviour").length;
        if (HPslideTotal > 1) {
            $(".HP-carosello-behaviour").each(function (index) {
                let newIndex = index + 1;
                $(this).find(".HP-navigatore-current-slide").html(newIndex);
                $(this)
                    .find(".HP-navigatore-total-slide")
                    .html("/" + HPslideTotal);
            });
            $(".HP-slide-carosello-1").addClass("HP-slide-corrente");
            if ($(".HP-slide-corrente").hasClass("HP-slide-promo")) {
                $(".HP-wrapper").addClass("HP-wrapper-promo");
            }
        } else {
            $(".HP-slide-carosello-1").addClass("HP-slide-corrente");
            $(".HP-carosello-behaviour .HP-navigatore-carosello").addClass("d-none");
            if ($(".HP-slide-corrente").hasClass("HP-slide-promo")) {
                $(".HP-wrapper").addClass("HP-wrapper-promo");
            }
        }
        $(".HP-placeholder").addClass("contenuto-caricato");
        if ($(window).width() > 1023 && $(window).width() < 1440) {
            let asset = window.document.querySelectorAll(".HP-contenitore-asset");
            var containerRect = window.document.querySelectorAll(
                ".egl-herohomepage-basic:not(.egl-tab-vertical-container)"
            );
            let bodyRect = window.document.body.getBoundingClientRect();
            for (i = 0; i < containerRect.length; i++) {
                if (containerRect[i].getBoundingClientRect().right != 0) {
                    var containerRectRight =
                        containerRect[i].getBoundingClientRect().right;
                    break;
                }
            }
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right =
                    0 - bodyRect.right + containerRectRight + 15 + "px";
            }
            let contenitoreContenuto = window.document.querySelectorAll(
                ".HP-contenitore-contenuto"
            );
            for (i = 0; i < contenitoreContenuto.length; i++) {
                if (contenitoreContenuto[i].getBoundingClientRect().right != 0) {
                    var contenitoreContenutoRectRight =
                        contenitoreContenuto[i].getBoundingClientRect().right;
                    break;
                }
            }
            let hpCont = $(".HP-contenitore-asset");
            let hpImage = $(".HP-contenitore-asset img");
            hpImage.css(
                "max-width",
                bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
            );
            hpCont.css(
                "max-width",
                bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
            );
        } else if ($(window).width() > 1439 && $(window).width() < 1919) {
            let asset = window.document.querySelectorAll(".HP-contenitore-asset");
            var containerRect = window.document.querySelectorAll(
                ".egl-herohomepage-basic:not(.egl-tab-vertical-container)"
            );
            let bodyRect = window.document.body.getBoundingClientRect();
            for (i = 0; i < containerRect.length; i++) {
                if (containerRect[i].getBoundingClientRect().right != 0) {
                    var containerRectRight =
                        containerRect[i].getBoundingClientRect().right;
                    break;
                }
            }
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right =
                    0 - bodyRect.right + containerRectRight + 15 + "px";
            }
            let contenitoreContenuto = window.document.querySelectorAll(
                ".HP-contenitore-contenuto"
            );
            for (i = 0; i < contenitoreContenuto.length; i++) {
                if (contenitoreContenuto[i].getBoundingClientRect().right != 0) {
                    var contenitoreContenutoRectRight =
                        contenitoreContenuto[i].getBoundingClientRect().right;
                    break;
                }
            }
            let hpCont = $(".HP-contenitore-asset");
            let hpImage = $(".HP-contenitore-asset img");
            hpImage.css(
                "max-width",
                bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
            );
            hpCont.css(
                "max-width",
                bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
            );
        } else if ($(window).width() >= 1920) {
            let asset = window.document.querySelectorAll(".HP-contenitore-asset");
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right = -375 + "px";
            }
        }
    }
    $(window).on("init resize", function () {
        if ($(".HP-wrapper").length != 0) {
            setTimeout(function () {
                if ($(window).width() > 1023 && $(window).width() < 1440) {
                    let asset = window.document.querySelectorAll(".HP-contenitore-asset");
                    var containerRect = window.document.querySelectorAll(
                        ".egl-herohomepage-basic:not(.egl-tab-vertical-container)"
                    );
                    let bodyRect = window.document.body.getBoundingClientRect();
                    for (i = 0; i < containerRect.length; i++) {
                        if (containerRect[i].getBoundingClientRect().right != 0) {
                            var containerRectRight =
                                containerRect[i].getBoundingClientRect().right;
                            break;
                        }
                    }
                    for (i = 0; i < asset.length; i++) {
                        asset[i].style.right =
                            0 - bodyRect.right + containerRectRight + 15 + "px";
                    }
                    let contenitoreContenuto = window.document.querySelectorAll(
                        ".HP-contenitore-contenuto"
                    );
                    for (i = 0; i < contenitoreContenuto.length; i++) {
                        if (contenitoreContenuto[i].getBoundingClientRect().right != 0) {
                            var contenitoreContenutoRectRight =
                                contenitoreContenuto[i].getBoundingClientRect().right;
                            break;
                        }
                    }
                    let hpCont = $(".HP-contenitore-asset");
                    let hpImage = $(".HP-contenitore-asset img");
                    hpImage.css(
                        "max-width",
                        bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
                    );
                    hpCont.css(
                        "max-width",
                        bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
                    );
                } else if ($(window).width() > 1439 && $(window).width() < 1919) {
                    let asset = window.document.querySelectorAll(".HP-contenitore-asset");
                    var containerRect = window.document.querySelectorAll(
                        ".egl-herohomepage-basic:not(.egl-tab-vertical-container)"
                    );
                    let bodyRect = window.document.body.getBoundingClientRect();
                    for (i = 0; i < containerRect.length; i++) {
                        if (containerRect[i].getBoundingClientRect().right != 0) {
                            var containerRectRight =
                                containerRect[i].getBoundingClientRect().right;
                            break;
                        }
                    }
                    for (i = 0; i < asset.length; i++) {
                        asset[i].style.right =
                            0 - bodyRect.right + containerRectRight + 15 + "px";
                    }
                    let contenitoreContenuto = window.document.querySelectorAll(
                        ".HP-contenitore-contenuto"
                    );
                    for (i = 0; i < contenitoreContenuto.length; i++) {
                        if (contenitoreContenuto[i].getBoundingClientRect().right != 0) {
                            var contenitoreContenutoRectRight =
                                contenitoreContenuto[i].getBoundingClientRect().right;
                            break;
                        }
                    }
                    let hpCont = $(".HP-contenitore-asset");
                    let hpImage = $(".HP-contenitore-asset img");
                    hpImage.css(
                        "max-width",
                        bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
                    );
                    hpCont.css(
                        "max-width",
                        bodyRect.right - contenitoreContenutoRectRight - 60 + "px"
                    );
                } else if ($(window).width() >= 1920) {
                    let asset = window.document.querySelectorAll(".HP-contenitore-asset");
                    for (i = 0; i < asset.length; i++) {
                        asset[i].style.right = -375 + "px";
                    }
                }
            }, 200);
        }
    });
    $(".HP-next-arrow").on("click", function () {
        let HPslideTotal = $(".HP-carosello-behaviour").length;
        let classList = $(".HP-slide-corrente").attr("class");
        let currentSlide = parseInt(classList.charAt(19));
        let nextSlide = currentSlide + 1;
        if (nextSlide > HPslideTotal) {
            nextSlide = 1;
        }
        $(".HP-carosello-behaviour.HP-slide-corrente").removeClass(
            "HP-slide-corrente"
        );
        $(".HP-slide-carosello-" + nextSlide).addClass("HP-slide-corrente");
        if ($(".HP-slide-corrente").hasClass("HP-slide-promo")) {
            $(".HP-wrapper").addClass("HP-wrapper-promo");
        } else {
            $(".HP-wrapper").removeClass("HP-wrapper-promo");
        }
    });
    $(".HP-previous-arrow").on("click", function () {
        let HPslideTotal = $(".HP-carosello-behaviour").length;
        let classList = $(".HP-slide-corrente").attr("class");
        let currentSlide = parseInt(classList.charAt(19));
        let previousSlide = currentSlide - 1;
        if (previousSlide < 1) {
            previousSlide = HPslideTotal;
        }
        $(".HP-carosello-behaviour.HP-slide-corrente").removeClass(
            "HP-slide-corrente"
        );
        $(".HP-slide-carosello-" + previousSlide).addClass("HP-slide-corrente");
        if ($(".HP-slide-corrente").hasClass("HP-slide-promo")) {
            $(".HP-wrapper").addClass("HP-wrapper-promo");
        } else {
            $(".HP-wrapper").removeClass("HP-wrapper-promo");
        }
    });
    setInterval(function () {
        if ($(".HP-wrapper").length != 0) {
            let HPslideTotal = $(".HP-carosello-behaviour").length;
            let classList = $(".HP-slide-corrente").attr("class");
            let currentSlide = parseInt(classList.charAt(19));
            let nextSlide = currentSlide + 1;
            if (nextSlide > HPslideTotal) {
                nextSlide = 1;
            }
            $(".HP-carosello-behaviour.HP-slide-corrente").removeClass(
                "HP-slide-corrente"
            );
            $(".HP-slide-carosello-" + nextSlide).addClass("HP-slide-corrente");
            if ($(".HP-slide-corrente").hasClass("HP-slide-promo")) {
                $(".HP-wrapper").addClass("HP-wrapper-promo");
            } else {
                $(".HP-wrapper").removeClass("HP-wrapper-promo");
            }
            $(".HP-wrapper").addClass("HP-wrapper-promo");
        }
    }, 30000);
});

/* box info js */
$(document).ready(function () {
    /*$(".box-info-carousel li").attr("tabindex", "0");*/
    if ($(".egl-box-info-container").length != 0) {
        $(
            ".box-info-carousel .slick-slide:not(.slick-current) li, .box-info-carousel .slick-slide:not(.slick-current) p, .box-info-carousel .slick-slide:not(.slick-current) h1, .box-info-carousel .slick-slide:not(.slick-current) h2, .box-info-carousel .slick-slide:not(.slick-current) h3, .box-info-carousel .slick-slide:not(.slick-current) h4, .box-info-carousel .slick-slide:not(.slick-current) h5"
        ).each(function () {
            if ($(this).text() != "") {
                $(this).attr("tabindex", "-1");
            }
        });
        /*$(".box-info-navigatore-carosello i").attr("tabindex", "0");*/
        $(".box-info-navigatore-carosello .fa-chevron-left").attr(
            "onkeypress",
            'slideBoxInfoCard("-")'
        );
        $(".box-info-navigatore-carosello .fa-chevron-right").attr(
            "onkeypress",
            'slideBoxInfoCard("+")'
        );
        if ($(window).width() < 768) {
            $(".box-info-carousel").slick({
                arrows: false,
                appendArrows: $(".box-info-arrows"),
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            });
            $(".box-info-carousel").each(function () {
                let $statusBoxInfoCards = $(".box-info-status-text");
                let $slickElementBoxInfoCards = $(".box-info-carousel");
                let leftArrowBoxInfoCards = $(
                    ".box-info-arrows.box-info-previous-arrow"
                );
                let rightArrowBoxInfoCards = $(".box-info-arrows.box-info-next-arrow");
                $slickElementBoxInfoCards.on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        var i = (currentSlide ? currentSlide : 0) + 1;
                        $statusBoxInfoCards.html(
                            '<span class="first-number-boxinfo">' +
                            i +
                            "</span>" +
                            "/" +
                            "&nbsp" +
                            slick.slideCount
                        );
                        if (i === slick.slideCount) {
                            rightArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (rightArrowBoxInfoCards.hasClass("d-none")) {
                                rightArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                        if (i === 1) {
                            leftArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (leftArrowBoxInfoCards.hasClass("d-none")) {
                                leftArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                    }
                );
                leftArrowBoxInfoCards.click();
            });
        }
        $(window).on("resize", function () {
            if ($(window).width() < 768) {
                if ($(".box-info-carousel").hasClass("slick-initialized")) {
                    $(".box-info-carousel").slick("resize");
                } else {
                    $(".box-info-carousel").slick({
                        arrows: false,
                        appendArrows: $(".box-info-arrows"),
                        dots: false,
                        infinite: false,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    });
                }
            } else {
                $(".box-info-carousel.slick-initialized").slick("unslick");
            }
        });
    }
});

function slideBoxInfoCard(dir) {
    let slider = $(".box-info-carousel");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
    $(
        ".box-info-carousel .slick-slide:not(.slick-current) li, .box-info-carousel .slick-slide:not(.slick-current) p, .box-info-carousel .slick-slide:not(.slick-current) h1, .box-info-carousel .slick-slide:not(.slick-current) h2, .box-info-carousel .slick-slide:not(.slick-current) h3, .box-info-carousel .slick-slide:not(.slick-current) h4, .box-info-carousel .slick-slide:not(.slick-current) h5"
    ).each(function () {
        if ($(this).text() != "") {
            $(this).attr("tabindex", "-1");
        }
    });
}

/* tab verticale */

function openImage(evt, ImageName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("d-none");
        tabcontent[i].classList.remove("d-block");
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(
            " activeTabVertical",
            ""
        );
    }

    tabStyle = document.getElementsByClassName("tab-verticale-tab-style");
    for (i = 0; i < tabStyle.length; i++) {
        tabStyle[i].className = tabStyle[i].className.replace(
            " tab-style-active",
            ""
        );
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(ImageName).classList.add("d-block");
    document.getElementById(ImageName).classList.remove("d-none");
    evt.currentTarget.className += " activeTabVertical";

    $(".tabcontent-contenuto-testuale p, .tabcontent-contenuto-testuale a").attr(
        "tabindex",
        "-1"
    );
    $(
        "#" +
        ImageName +
        " .tabcontent-contenuto-testuale p, #" +
        ImageName +
        " .tabcontent-contenuto-testuale a"
    ).attr("tabindex", "0");
}

function changeTab(ev, tabname) {
    let contentHeight;
    let menuHeight;
    let colorContainerHeight;
    let whiteArea;
    let adapted = false;

    openImage(ev, tabname);

    $(".tab-verticale-background-div-color").css("height", "");
    $(".tab-verticale-contenitore-asset .tabcontent").css("height", "");
    $(".tab-verticale-contenitore-asset-per-promo.velina-tab-vertical").css("height", "");

    contentHeight = $("#" + tabname + " .tabcontent-contenuto-testuale").height() + 240;
    menuHeight = $(".tab-verticale-contenitore-contenuto").height();
    colorContainerHeight = $(".tab-verticale-background-div-color").height();
    whiteArea = $(".tab-verticale-contenitore-asset-per-promo.velina-tab-vertical").height();

    if ((colorContainerHeight - menuHeight) < 75) {
        $(".tab-verticale-background-div-color").addClass("overflowPatch");
    }

    if (contentHeight < 738) {
        contentHeight = 738;
    }

    $(".tab-verticale-contenitore-asset .tabcontent").height(contentHeight);

    /* adeguamento altezze */
    if ((contentHeight - colorContainerHeight) > 77) {
        colorContainerHeight = contentHeight - 77;
        $(".tab-verticale-background-div-color").height(colorContainerHeight);
    }

    colorContainerHeight = $(".tab-verticale-background-div-color").outerHeight();
    console.log("clorcontainer", colorContainerHeight);

    whiteArea = colorContainerHeight + 77;
    $(".tab-verticale-contenitore-asset-per-promo.velina-tab-vertical").height(whiteArea);
    /* adeguamento altezze */
}

$(document).ready(function () {
    if ($(".tab-vertical-wrapper").length != 0) {
        document.getElementById("defaultOpen").click();

        if ($(window).width() > 1023 && $(window).width() < 1440) {
            let asset = window.document.getElementsByClassName(
                "tab-verticale-contenitore-asset"
            );
            let containerRect = window.document.getElementsByClassName(
                "egl-tab-vertical-container"
            );

            let tablinks = window.document.getElementsByClassName(
                "tab-verticale-contenitore-contenuto"
            );
            let bodyRect = window.document.body.getBoundingClientRect();
            let distance =
                asset[0].getBoundingClientRect().left -
                tablinks[0].getBoundingClientRect().left;
            let tabImage = $(".tab-verticale-contenitore-asset-per-promo img");
            tabImage.css("width", 798 + ($(window).width() - 1023) + "px");

            for (i = 0; i < asset.length; i++) {
                asset[i].style.right =
                    0 -
                    bodyRect.right +
                    containerRect[0].getBoundingClientRect().right +
                    "px";
                tablinks[0].style.width = distance + "px";
            }
        } else if ($(window).width() > 1439 && $(window).width() < 1919) {
            let asset = window.document.getElementsByClassName(
                "tab-verticale-contenitore-asset"
            );
            let containerRect = window.document.getElementsByClassName(
                "egl-tab-vertical-container"
            );
            let tablinks = window.document.getElementsByClassName(
                "tab-verticale-contenitore-contenuto"
            );
            let bodyRect = window.document.body.getBoundingClientRect();
            let tabImage = $(".tab-verticale-contenitore-asset-per-promo img");
            tabImage.css("width", 798 + ($(window).width() - 1023) + "px");

            let distance =
                asset[0].getBoundingClientRect().left -
                tablinks[0].getBoundingClientRect().left;
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right =
                    0 -
                    bodyRect.right +
                    containerRect[0].getBoundingClientRect().right +
                    "px";
                tablinks[0].style.width = distance + "px";
            }
        } else if ($(window).width() >= 1920) {
            let asset = window.document.getElementsByClassName(
                "tab-verticale-contenitore-asset"
            );
            let tablinks = window.document.getElementsByClassName(
                "tab-verticale-contenitore-contenuto"
            );
            let distance =
                asset[0].getBoundingClientRect().left -
                tablinks[0].getBoundingClientRect().left;
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right = -390 + "px";
                tablinks[0].style.width = distance + "px";
            }
        }
        if ($(window).width() > 1023 && $(window).width() < 1440) {
            let asset = window.document.getElementsByClassName(
                "tab-verticale-contenitore-asset"
            );
            let containerRect = window.document.getElementsByClassName(
                "egl-tab-vertical-container"
            );
            let tablinks = window.document.getElementsByClassName(
                "tab-verticale-contenitore-contenuto"
            );
            let bodyRect = window.document.body.getBoundingClientRect();
            let distance =
                asset[0].getBoundingClientRect().left -
                tablinks[0].getBoundingClientRect().left;
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right =
                    0 -
                    bodyRect.right +
                    containerRect[0].getBoundingClientRect().right +
                    "px";
                tablinks[0].style.width = distance + "px";
            }
        } else if ($(window).width() > 1439 && $(window).width() < 1919) {
            let asset = window.document.getElementsByClassName(
                "tab-verticale-contenitore-asset"
            );
            let containerRect = window.document.getElementsByClassName(
                "egl-tab-vertical-container"
            );
            let tablinks = window.document.getElementsByClassName(
                "tab-verticale-contenitore-contenuto"
            );
            let bodyRect = window.document.body.getBoundingClientRect();
            let distance =
                asset[0].getBoundingClientRect().left -
                tablinks[0].getBoundingClientRect().left;
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right =
                    0 -
                    bodyRect.right +
                    containerRect[0].getBoundingClientRect().right +
                    "px";
                tablinks[0].style.width = distance + "px";
            }
        } else if ($(window).width() >= 1920) {
            let asset = window.document.getElementsByClassName(
                "tab-verticale-contenitore-asset"
            );
            let tablinks = window.document.getElementsByClassName(
                "tab-verticale-contenitore-contenuto"
            );
            let distance =
                asset[0].getBoundingClientRect().left -
                tablinks[0].getBoundingClientRect().left;
            for (i = 0; i < asset.length; i++) {
                asset[i].style.right = -390 + "px";
                tablinks[0].style.width = distance + "px";
            }
        }
        $(window).on("resize", function () {
            if ($(window).width() > 1023 && $(window).width() < 1440) {
                let asset = window.document.getElementsByClassName(
                    "tab-verticale-contenitore-asset"
                );
                let containerRect = window.document.getElementsByClassName(
                    "egl-tab-vertical-container"
                );
                let tablinks = window.document.getElementsByClassName(
                    "tab-verticale-contenitore-contenuto"
                );
                let bodyRect = window.document.body.getBoundingClientRect();
                let distance =
                    asset[0].getBoundingClientRect().left -
                    tablinks[0].getBoundingClientRect().left;
                let tabImage = $(".tab-verticale-contenitore-asset-per-promo img");
                tabImage.css("width", 798 + ($(window).width() - 1023) + "px");

                for (i = 0; i < asset.length; i++) {
                    asset[i].style.right =
                        0 -
                        bodyRect.right +
                        containerRect[0].getBoundingClientRect().right +
                        "px";
                    tablinks[0].style.width = distance + "px";
                }
            } else if ($(window).width() > 1439 && $(window).width() < 1919) {
                let asset = window.document.getElementsByClassName(
                    "tab-verticale-contenitore-asset"
                );
                let containerRect = window.document.getElementsByClassName(
                    "egl-tab-vertical-container"
                );
                let tablinks = window.document.getElementsByClassName(
                    "tab-verticale-contenitore-contenuto"
                );
                let bodyRect = window.document.body.getBoundingClientRect();
                let tabImage = $(".tab-verticale-contenitore-asset-per-promo img");
                tabImage.css("width", 798 + ($(window).width() - 1023) + "px");
                let distance =
                    asset[0].getBoundingClientRect().left -
                    tablinks[0].getBoundingClientRect().left;
                for (i = 0; i < asset.length; i++) {
                    asset[i].style.right =
                        0 -
                        bodyRect.right +
                        containerRect[0].getBoundingClientRect().right +
                        "px";
                    tablinks[0].style.width = distance + "px";
                }
            } else if ($(window).width() >= 1920) {
                let asset = window.document.getElementsByClassName(
                    "tab-verticale-contenitore-asset"
                );
                let tablinks = window.document.getElementsByClassName(
                    "tab-verticale-contenitore-contenuto"
                );
                let distance =
                    asset[0].getBoundingClientRect().left -
                    tablinks[0].getBoundingClientRect().left;
                for (i = 0; i < asset.length; i++) {
                    asset[i].style.right = -390 + "px";
                    tablinks[0].style.width = distance + "px";
                }
            }
        });
        $(".tab-verticale-mobile-tabs").on("click", function () {
            $(".tab-verticale-mobile-tabs")
                .not(this)
                .removeClass("tab-vert-selezionata");
            $(this).addClass("tab-vert-selezionata");
            let indexOf = $(".tab-verticale-mobile-tabs").index(this);

            $(".tab-verticale-mobile-content")
                .not($(".tab-verticale-mobile-content")[indexOf])
                .addClass("d-none");
            $(".tab-verticale-mobile-content")[indexOf].classList.remove("d-none");
        });
        $(".tab-verticale-mobile-tabs").first().click();
        //$(".card-offerte-title").attr("tabindex", "0");
        $(".tablinks").each(function () {
            let thisFunct = $(this).attr("onclick");
            $(this).attr("onkeypress", thisFunct);
        });
    }

    if ($(".tab-verticale-mobile-wrapper").length != 0) {
        if ($(window).width() < 1024) {
            var elementTop = $(".tab-verticale-mobile-wrapper").offset().top;
            //console.log(elementTop - $(window).scrollTop());

            $(window).scroll(function () {
                scrollingAmount = elementTop - $(window).scrollTop();
                //console.log(scrollingAmount);

                if (scrollingAmount < 0) {
                    $(".tab-verticale-mobile-tabs-container").addClass("stickyTabs");
                } else {
                    $(".tab-verticale-mobile-tabs-container").removeClass("stickyTabs");
                }
            });
        }
    }
});
/* card offerte */
$(document).ready(function () {
    if ($(".card-offerte-spacing-huge").length != 0) {
        //    $(
        //      ".card-offerte-right-card-body-title, .card-offerte-right-card-body-text, .card-offerte-bottom-text, .card-offerte-title, .card-offerte-countdown-div .cap12-egl, .card-offerte-card-body-title, .card-offerte-card-body-description, .card-offerte-card-body-text"
        //    ).each(function () {
        //      if ($(this).text() != "") {
        //        $(this).attr("tabindex", "0");
        //      }
        //    });
        if ($(window).width() < 768) {
            $(".card-offerte-wrapper-carousel").slick({
                arrows: false,
                appendArrows: $(".card-offerte-arrows"),
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                variableHeight: true,
                centerMode: true,
                centerPadding: "0",
            });
            $(".card-offerte-wrapper-carousel").each(function () {
                let $statusBoxInfoCards = $(".card-offerte-status-text");
                let $slickElementBoxInfoCards = $(".card-offerte-wrapper-carousel");
                let leftArrowBoxInfoCards = $(
                    ".card-offerte-arrows.card-offerte-previous-arrow"
                );
                let rightArrowBoxInfoCards = $(
                    ".card-offerte-arrows.card-offerte-next-arrow"
                );
                $slickElementBoxInfoCards.on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        var i = (currentSlide ? currentSlide : 0) + 1;
                        $statusBoxInfoCards.html(
                            '<span class="first-number-boxinfo">' +
                            i +
                            "</span>" +
                            "/" +
                            "&nbsp" +
                            slick.slideCount
                        );
                        if (i === slick.slideCount) {
                            rightArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (rightArrowBoxInfoCards.hasClass("d-none")) {
                                rightArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                        if (i === 1) {
                            leftArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (leftArrowBoxInfoCards.hasClass("d-none")) {
                                leftArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                    }
                );
                leftArrowBoxInfoCards.click();
            });
        }
        $(window).on("resize", function () {
            if ($(window).width() < 768) {
                if ($(".card-offerte-wrapper-carousel").hasClass("slick-initialized")) {
                    $(".card-offerte-wrapper-carousel").slick("resize");
                } else {
                    $(".card-offerte-wrapper-carousel").slick({
                        arrows: false,
                        appendArrows: $(".card-offerte-arrows"),
                        dots: false,
                        infinite: false,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    });
                }
            } else {
                $(".card-offerte-wrapper-carousel.slick-initialized").slick("unslick");
            }
        });
    }
});

function slideCardOfferteCard(dir) {
    let slider = $(".card-offerte-wrapper-carousel");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}

/* esselunga */
$(document).ready(function () {
    if ($(".esselunga-container").length != 0) {
        $(".card-container").slick({
            arrows: false,
            infinite: false,
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            variableHeight: true,
            centerMode: true,
        });
    }
});

/* feedack */
$(document).ready(function () {
    if ($(".pecetta-feedback").length != 0) {
        $(".pecetta-feedback").on("click", function () {
            $("#ModaleFeedback").modal({
                keyboard: false,
                backdrop: "static",
                focus: true,
                show: true,
            });
            $(this).addClass("d-none");
            $("#ModaleFeedback").on("hidden.bs.modal", function (event) {
                $(".pecetta-feedback").removeClass("d-none");
            });
        });
    }
});

/* thank you box */
$(document).ready(function () {
    if ($(".box-thankyou-container").length != 0) {
        $(".typ-carousel").slick({
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
        });
        $(".typ-carousel").each(function () {
            let $statusBoxtypCards = $(this)
                .parents(".box-thankyou-container")
                .find(".box-typ-status-text");
            let $slickElementBoxtypCards = $(this);
            let leftArrowBoxtypCards = $(this)
                .parents(".box-thankyou-container")
                .find(".box-typ-arrows.box-typ-previous-arrow");
            let rightArrowBoxtypCards = $(this)
                .parents(".box-thankyou-container")
                .find(".box-typ-arrows.box-typ-next-arrow");
            $slickElementBoxtypCards.on(
                "init reInit afterChange",
                function (event, slick, currentSlide, nextSlide) {
                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $statusBoxtypCards.html(
                        '<span class="first-number-boxtyp">' +
                        i +
                        "</span>" +
                        "/" +
                        "&nbsp" +
                        slick.slideCount
                    );
                    if (slick.slideCount == 3) {
                        $(this)
                            .parents(".box-thankyou-container")
                            .addClass("box-thankyou-container-TriBox");
                    }
                    if (i === slick.slideCount) {
                        rightArrowBoxtypCards.addClass("d-none");
                    } else {
                        if (rightArrowBoxtypCards.hasClass("d-none")) {
                            rightArrowBoxtypCards.removeClass("d-none");
                        }
                    }
                    if (i === 1) {
                        leftArrowBoxtypCards.addClass("d-none");
                    } else {
                        if (leftArrowBoxtypCards.hasClass("d-none")) {
                            leftArrowBoxtypCards.removeClass("d-none");
                        }
                    }
                }
            );
            leftArrowBoxtypCards.click();
        });
    }
    $(window).on("resize", function () {
        if ($(".box-thankyou-container").length != 0) {
            if ($(window).width() < 1024) {
                if ($(".typ-carousel").hasClass("slick-initialized")) {
                    $(".typ-carousel").slick("resize");
                } else {
                    $(".typ-carousel").slick({
                        arrows: false,
                        dots: false,
                        infinite: false,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    });
                }
            } else {
                $(".typ-carousel.slick-initialized").slick("unslick");
            }
        }
    });
});

function slideBoxtypCard(dir) {
    let slider = $(".typ-carousel");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}
/* card prodotto */
$(document).ready(function () {
    if ($(".card-prodotto-cards.card-prodotto-carosello").length != 0) {
        $(function () {
            $('.container-card-prodotto [data-toggle="tooltip"]').tooltip({
                html: true,
                trigger: "hover focus",
                template:
                    '<div class="tooltip tooltip-cProdotto" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tooltip-inner-cProdotto"></div></div>',
            });
        });
        if ($(window).width() < 1024) {
            $(".card-prodotto-cards.card-prodotto-carosello").slick({
                arrows: false,
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
                variableWidth: true,
                variableHeight: true,
                centerMode: true,
            });
            $(".card-prodotto-cards.card-prodotto-carosello").each(function () {
                let $statusBoxInfoCards = $(this)
                    .parents(".container-card-prodotto")
                    .find(".cards-prodotto-status-text");
                let $slickElementBoxInfoCards = $(this);
                let leftArrowBoxInfoCards = $(this)
                    .parents(".container-card-prodotto")
                    .find(".cards-prodotto-arrows.cards-prodotto-previous-arrow");
                let rightArrowBoxInfoCards = $(this)
                    .parents(".container-card-prodotto")
                    .find(".cards-prodotto-arrows.cards-prodotto-next-arrow");
                $slickElementBoxInfoCards.on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        var i = (currentSlide ? currentSlide : 0) + 1;
                        $statusBoxInfoCards.html(
                            '<span class="first-number-boxinfo">' +
                            i +
                            "</span>" +
                            "/" +
                            "&nbsp" +
                            slick.slideCount
                        );
                        if (i === slick.slideCount) {
                            rightArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (rightArrowBoxInfoCards.hasClass("d-none")) {
                                rightArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                        if (i === 1) {
                            leftArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (leftArrowBoxInfoCards.hasClass("d-none")) {
                                leftArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                    }
                );
                leftArrowBoxInfoCards.click();
            });
        }
    }
});
$(window).on("resize", function () {
    if ($(".card-prodotto-cards.card-prodotto-carosello").length != 0) {
        if ($(window).width() < 1024) {
            $(".card-prodotto-cards.card-prodotto-carosello").slick({
                arrows: false,
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
                variableWidth: true,
                variableHeight: true,
                centerMode: true,
            });
            $(".card-prodotto-cards.card-prodotto-carosello").each(function () {
                let $statusBoxInfoCards = $(this)
                    .parents(".container-card-prodotto")
                    .find(".cards-prodotto-status-text");
                let $slickElementBoxInfoCards = $(this);
                let leftArrowBoxInfoCards = $(this)
                    .parents(".container-card-prodotto")
                    .find(".cards-prodotto-arrows.cards-prodotto-previous-arrow");
                let rightArrowBoxInfoCards = $(this)
                    .parents(".container-card-prodotto")
                    .find(".cards-prodotto-arrows.cards-prodotto-next-arrow");
                $slickElementBoxInfoCards.on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        var i = (currentSlide ? currentSlide : 0) + 1;
                        $statusBoxInfoCards.html(
                            '<span class="first-number-boxinfo">' +
                            i +
                            "</span>" +
                            "/" +
                            "&nbsp" +
                            slick.slideCount
                        );
                        if (i === slick.slideCount) {
                            rightArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (rightArrowBoxInfoCards.hasClass("d-none")) {
                                rightArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                        if (i === 1) {
                            leftArrowBoxInfoCards.addClass("d-none");
                        } else {
                            if (leftArrowBoxInfoCards.hasClass("d-none")) {
                                leftArrowBoxInfoCards.removeClass("d-none");
                            }
                        }
                    }
                );
                leftArrowBoxInfoCards.click();
            });
        }
    }
});
function slideCardsProdotto(dir, e) {
    let target = e.target;
    let slider = $(target)
        .parents(".container-card-prodotto")
        .find(".card-prodotto-cards.card-prodotto-carosello");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}

/* highlight prodotto */

$(function () {
    $('.highlight-comp-container [data-toggle="tooltip"]').tooltip({
        html: true,
        trigger: "hover focus",
        template:
            '<div class="tooltip tooltip-cProdotto" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tooltip-inner-cProdotto"></div></div>',
    });
});

/* exprivia components*/

if ($(".switch-lang") != 0) {
    (function ($) {
        $(function () {
            $.widget("sf.langMenu", {
                _create: function () {
                    /*if ( window.location.href.indexOf('.page') > 0 ){
              //- .page do nothing
              return false;
          }*/

                    //- get lang, check cookie for returned user
                    this.lan = sfCookie.getCookie("lang");

                    //- lang is from cookie
                    if (this.lan) {
                        //- check if redirect is required
                        this.redirect();
                    } else {
                        this.lan = this.findLang();
                    }

                    //- active current language
                    $(this.element)
                        .find('[data-lang="' + this.lan + '"]')
                        .addClass("active");

                    //- set behaviors
                    let lanBtn = $(this.element).find("a");
                    this._on($(lanBtn), {
                        click: "setLan",
                    });
                },

                //- find pages languages
                findLang: function () {
                    let lan = "it";
                    //- if item url match the page url get item language
                    $(this.element)
                        .find("a")
                        .each(function () {
                            let url = $(this).attr("href");
                            if (
                                url == window.location.href ||
                                url == window.location.pathname
                            ) {
                                lan = $(this).attr("data-lang");
                            }
                        });

                    return lan;
                },

                //- write lanf in cookie
                setLan: function (event) {
                    let lan = $(event.currentTarget).attr("data-lang");

                    if (lan != undefined && lan != this.lan) {
                        this.lan = lan;
                        sfCookie.setCookie(lan, "lang", 30);
                        return true;
                    } else {
                        return false;
                    }
                },

                //- write lanf in cookie
                redirect: function () {
                    if (this.lan != "it") {
                        let href = $(this.element)
                            .find('[data-lang="' + this.lan + '"]')
                            .attr("href");
                        if (
                            href != undefined &&
                            href.length > 0 &&
                            window.location.href != href &&
                            window.location.pathname != href
                        ) {
                            window.location.href = href;
                        }
                    }
                },
            });

            // $('[sf-component="sf-menu-languages"][sf-version="1.0"]').langMenu();

            // served directly online in the pages
            // https://pp.enigaseluce.com/ENIGASELUCE_it_IT/assistenza-footer/management/nuove-pagine-chi-siamo/sf-chi-siamo2021eng.page
            // https://pp.enigaseluce.com/ENIGASELUCE_it_IT/assistenza-footer/management/nuove-pagine-chi-siamo/sf-chi-siamo2021.page
        });
    })(jQuery);
}
if ($(".mappa-doveSiamo") != 0) {
    (function ($) {
        $(function () {
            $.widget("sf.btnSwitch", {
                _create: function () {
                    var $btnA = $("button.btn-A");
                    var $btnB = $("button.btn-B");

                    var $Aimg = $(".btn-A-img");
                    var $Bimg = $(".btn-B-img");

                    var $Acontent = $(".btn-A-text");
                    var $Bcontent = $(".btn-B-text");

                    $Bimg.hide();
                    $Aimg.show();

                    $Acontent.show();
                    $Bcontent.hide();

                    $btnA.addClass("active");

                    this._on($btnA, {
                        click: "activeA",
                    });

                    this._on($btnB, {
                        click: "activeB",
                    });
                },

                activeA: function () {
                    $("button.btn-A").addClass("active");
                    $("button.btn-B").removeClass("active");
                    $(".btn-B-img").hide();
                    $(".btn-A-img").show();
                    $(".btn-A-text").show();
                    $(".btn-B-text").hide();
                },

                activeB: function () {
                    $("button.btn-A").removeClass("active");
                    $("button.btn-B").addClass("active");
                    $(".btn-A-img").hide();
                    $(".btn-B-img").show();
                    $(".btn-A-text").hide();
                    $(".btn-B-text").show();
                },
            });

            $(".mappa-doveSiamo").btnSwitch();
        });
    })(jQuery);
}
if ($(".fascia-cards-text") != 0) {
    var sfSlickMobile;

    (function ($) {
        $(function () {
            $.widget("sf.sfSlickMobile", {
                _create: function () {
                    this.active = false;

                    this.config = {
                        dots: true,
                        arrows: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 2,
                        centerMode: false,
                        variableWidth: true,
                        dotsClass: "sf2-slick-dots",
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ],
                    };

                    this._on($(window), {
                        resize: "check",
                    });

                    this.check();
                },

                check: function () {
                    if ($(window).width() < 1024 && !this.active) {
                        this.active = true;
                        this.slider = $(this.element).slick(this.config);
                    } else {
                        if ($(window).width() >= 1024 && this.active) {
                            this.active = false;
                            this.slider = $(this.element).slick("unslick");
                        }
                    }
                },
            });

            var i = 3;
            sfSlickMobile = function () {
                if (!i--) {
                    clearInterval(int);
                }
                $("[sf-slick-mobile], .sf-slick-mobile")
                    .not("[sf-active]")
                    .attr("sf-active", "true")
                    .sfSlickMobile();
            };

            sfSlickMobile();
            var int = setInterval(function () {
                sfSlickMobile();
            }, 1000);
        });
    })(jQuery);
}

/* modali caldaia e fotovolt */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var callmeback2Forms = $(".callmeback-2 .needs-validation");
            // Loop over them and prevent submission
            var validationcallmeback2Forms = Array.prototype.filter.call(
                callmeback2Forms,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                event.preventDefault();
                                event.stopPropagation();
                                let idModal = $(".callmeback-2.show").attr("id");
                                handleSubmit(idModal);
                            }
                            form.classList.add("was-validated");
                            $(".callmeback2-modal .was-validated .form-control:invalid").each(
                                function () {
                                    $(this).parent(".label-box").addClass("non-compilato");
                                    $(this).parent(".label-box").removeClass("compilato");
                                }
                            );
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();
$(document).ready(function () {
    $(".label-box input").each(function () {
        if ($(this).val()) {
            $(this).parent(".label-box").addClass("compilato");
            $(this)
                .parent(".label-box:not(.non-richiesto)")
                .removeClass("non-compilato");
        }
    });
    if ($("#ModaleLoginFast17").length != 0) {
        $("#ModaleLoginFast17").modal("show");
    }
});
$(".label-box input, .label-box select, .label-box textarea").on(
    "focusin",
    function () {
        $(this).parent(".label-box").addClass("focused");
        $(this).on("focusout", function () {
            $(this).parent(".label-box").removeClass("focused");
            if ($(this).val()) {
                $(this).parent(".label-box").addClass("compilato");
                $(this)
                    .parent(".label-box:not(.non-richiesto)")
                    .removeClass("non-compilato");
            } else {
                $(this)
                    .parent(".label-box:not(.non-richiesto)")
                    .addClass("non-compilato");
                $(this).parent(".label-box").removeClass("compilato");
            }
        });
    }
);
$(".input-no-numeri").on("keydown", function () {
    var key = event.keyCode;
    return (key >= 65 && key <= 90) || key == 8 || key == 32;
});
$("#smartHomeSelect").on("focusin", function () {
    $(".kit-smartHome").addClass("d-block");
});
$("#smartHomeSelect").on("focusout", function () {
    setTimeout(function () {
        $(".kit-smartHome").removeClass("d-block");
    }, 200);
});
$(".kit-smartHome li").on("click", function () {
    $("#smartHomeSelect").val($(this).html());
    $(".kit-smartHome").removeClass("d-block");
});
if ($("#smartHomeSelect").length != 0) {
    $("#smartHomeSelect").val($(".kit-smartHome li:first-of-type").html());
}
/* componenti html box sprint 30+ */
$(document).ready(function () {
    if ($(".tab-home-2").length != 0) {
        $(".tab-2-carosello").slick({
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            variableHeight: true,
        });
    }
    if ($(".TableFotovoltaico-container").length != 0) {
        $(".TableFotovoltaico-card-content-mobile").slick({
            arrows: false,
            appendArrows: $(".TableFotovoltaico-card-number-arrows"),
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: "linear",
            variableWidth: true,
            variableHeight: true,
            centerMode: true,
        });

        let $statusBoxInfoCards = $(".TableFotovoltaico-card-number-status-text");
        let $slickElementBoxInfoCards = $(".TableFotovoltaico-card-content-mobile");
        let leftArrowBoxInfoCards = $(
            ".TableFotovoltaico-card-number-arrows.TableFotovoltaico-card-number-previous-arrow"
        );
        let rightArrowBoxInfoCards = $(
            ".TableFotovoltaico-card-number-arrows.TableFotovoltaico-card-number-next-arrow"
        );
        $slickElementBoxInfoCards.on(
            "init reInit afterChange",
            function (event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                $statusBoxInfoCards.html(
                    '<span class="first-number-boxinfo">' +
                    i +
                    "</span>" +
                    "/" +
                    "&nbsp" +
                    slick.slideCount
                );
                if (i === slick.slideCount) {
                    rightArrowBoxInfoCards.addClass("d-none");
                } else {
                    if (rightArrowBoxInfoCards.hasClass("d-none")) {
                        rightArrowBoxInfoCards.removeClass("d-none");
                    }
                }
                if (i === 1) {
                    leftArrowBoxInfoCards.addClass("d-none");
                } else {
                    if (leftArrowBoxInfoCards.hasClass("d-none")) {
                        leftArrowBoxInfoCards.removeClass("d-none");
                    }
                }
            }
        );
        leftArrowBoxInfoCards.click();

        $(".icon-banner-info").click(function () {
            /* DESKTOP */
            $(".TableFotovoltaico-banner-info-container").toggle();
            $(".TableFotovoltaico-banner-info-overlay").toggle();
            /* MOBILE */
            $(".TableFotovoltaico-banner-info-container-mobile").toggle();
            $(".TableFotovoltaico-banner-info-overlay-mobile").toggle();
        });
    }

    //TAB 3

    if ($(".tab-home-3-desktop-container").length != 0) {
        /* ---------------- */
        let fotovolList1 = $(".tab-3-list-item:nth-child(1)");
        let fotovolList1offset = fotovolList1.offset().top - 400;
        let fotovolList1oe = $(".tab-3-list-item:nth-child(1)").outerHeight();
        let fotovolList2 = $(".tab-3-list-item:nth-child(2)");
        let fotovolList2offset = fotovolList2.offset().top - 400;
        let fotovolList2oe = $(".tab-3-list-item:nth-child(2)").outerHeight();
        let fotovolList3 = $(".tab-3-list-item:nth-child(3)");
        let fotovolList3offset = fotovolList3.offset().top - 400;
        let fotovolList3oe = $(".tab-3-list-item:nth-child(3)").outerHeight();
        let fotovolList4 = $(".tab-3-list-item:nth-child(4)");
        let fotovolList4offset = fotovolList4.offset().top - 400;
        let fotovolList4oe = $(".tab-3-list-item:nth-child(4)").outerHeight();
        let fotovolFinalStep = fotovolList4offset + fotovolList4oe;
        let bottomTab3Container =
            $(".tab-home-3-desktop-container").offset().top +
            $(".tab-home-3-desktop-container").outerHeight();

        var tabHome3 = $(".tab-home-3-container");
        var offsetTab3 = tabHome3.offset().top;
        var headerHeight = $(".headerDesktop").outerHeight();
        var spaceBetween = offsetTab3 - headerHeight;
        var stickyBannerHeight = $("#Sticky-Banner").outerHeight();
        var stickyHeight = 70;

        if ($("#Sticky-Commodity").length != 0) {
            spaceBetween = offsetTab3 - (headerHeight + stickyHeight);
        }
        if ($("#Sticky-Banner").length != 0) {
            var stickyBannerHeight = $("#Sticky-Banner").outerHeight();
            spaceBetween = offsetTab3 - (headerHeight + stickyBannerHeight);
        }
        if ($("#Sticky-Commodity").length != 0 && $("#Sticky-Banner").length != 0) {
            spaceBetween =
                offsetTab3 - (headerHeight + stickyHeight + stickyBannerHeight);
        }

        /* -------------------------- */
        /* onclick */
        $(".tab-3-list-item").on("click keydown", function () {
            let item = $(this).attr("data-image-swap");
            $(".tab-home-3-image-container img").each(function () {
                if ($(this).attr("data-image-step") == item) {
                    $(".tab-home-3-image-container img").addClass("d-none");
                    $(this).removeClass("d-none");
                }
            });
            if (item == 1) {
                window.scrollTo({
                    top: fotovolList1offset + 25,
                    behavior: "smooth",
                });
            }
            if (item == 2) {
                window.scrollTo({
                    top: fotovolList2offset + 25,
                    behavior: "smooth",
                });
            }
            if (item == 3) {
                window.scrollTo({
                    top: fotovolList3offset + 25,
                    behavior: "smooth",
                });
            }
            if (item == 4) {
                window.scrollTo({
                    top: fotovolList4offset + 25,
                    behavior: "smooth",
                });
            }
        });
        /* onscroll */
        $(window).scroll(function () {
            if ($(window).width() > 1024) {
                var tabHome3 = $(".tab-home-3-container");
                var windowScroll = $(this).scrollTop();
                var outerheightTab3 = tabHome3.outerHeight();

                if (windowScroll >= spaceBetween) {
                    $(".tab-home-3-container").addClass("tab3-fixed");

                    if ($("#Sticky-Commodity").length != 0) {
                        $(".tab-home-3-container").addClass("tab3-fixed-sticky");
                    }
                    if ($("#Sticky-Banner").length != 0) {
                        $(".tab-home-3-container").addClass("tab3-fixed-ancore");
                    }
                    if (
                        $("#Sticky-Commodity").length != 0 &&
                        $("#Sticky-Banner").length != 0
                    ) {
                        $(".tab-home-3-container").addClass("tab3-fixed-total");
                    }
                } else if (windowScroll < spaceBetween - 50) {
                    $(".tab-home-3-container").removeClass("tab3-fixed");

                    if ($("#Sticky-Commodity").length != 0) {
                        $(".tab-home-3-container").removeClass("tab3-fixed-sticky");
                    }
                    if ($("#Sticky-Banner").length != 0) {
                        $(".tab-home-3-container").removeClass("tab3-fixed-ancore");
                    }
                    if (
                        $("#Sticky-Commodity").length != 0 &&
                        $("#Sticky-Banner").length != 0
                    ) {
                        $(".tab-home-3-container").removeClass("tab3-fixed-total");
                    }
                }

                /* ------------- */
                if (windowScroll > fotovolFinalStep) {
                    $(".tab-home-3-container").removeClass("tab3-fixed");
                    $(".tab-home-3-container").removeClass("tab3-fixed-sticky");
                    $(".tab-home-3-container").removeClass("tab3-fixed-ancore");
                    $(".tab-home-3-container").removeClass("tab3-fixed-total");
                }
                if ($(".tab-home-3-container").hasClass("tab3-fixed")) {
                    if (
                        windowScroll >= fotovolList1offset &&
                        windowScroll <= fotovolList1offset + fotovolList1oe
                    ) {
                        setTimeout(function () {
                            if (!fotovolList1.hasClass("selezionato")) {
                                $(".tab-3-list-item")
                                    .not(fotovolList1)
                                    .removeClass("selezionato");
                                $(fotovolList1).addClass("selezionato");
                                let item = $(fotovolList1).attr("data-image-swap");
                                $(".tab-home-3-image-container img").each(function () {
                                    if ($(this).attr("data-image-step") == item) {
                                        $(".tab-home-3-image-container img").addClass("d-none");
                                        $(this).removeClass("d-none");
                                    }
                                });
                            }
                        }, 150);
                    }
                    if (
                        windowScroll >= fotovolList2offset &&
                        windowScroll <= fotovolList2offset + fotovolList2oe
                    ) {
                        setTimeout(function () {
                            if (!fotovolList2.hasClass("selezionato")) {
                                $(".tab-3-list-item")
                                    .not(fotovolList2)
                                    .removeClass("selezionato");
                                $(fotovolList2).addClass("selezionato");
                                let item = $(fotovolList2).attr("data-image-swap");
                                $(".tab-home-3-image-container img").each(function () {
                                    if ($(this).attr("data-image-step") == item) {
                                        $(".tab-home-3-image-container img").addClass("d-none");
                                        $(this).removeClass("d-none");
                                    }
                                });
                            }
                        }, 150);
                    }
                    if (
                        windowScroll >= fotovolList3offset &&
                        windowScroll <= fotovolList3offset + fotovolList3oe
                    ) {
                        setTimeout(function () {
                            if (!fotovolList3.hasClass("selezionato")) {
                                $(".tab-3-list-item")
                                    .not(fotovolList3)
                                    .removeClass("selezionato");
                                $(fotovolList3).addClass("selezionato");
                                let item = $(fotovolList3).attr("data-image-swap");
                                $(".tab-home-3-image-container img").each(function () {
                                    if ($(this).attr("data-image-step") == item) {
                                        $(".tab-home-3-image-container img").addClass("d-none");
                                        $(this).removeClass("d-none");
                                    }
                                });
                            }
                        }, 150);
                    }
                    if (
                        windowScroll >= fotovolList4offset &&
                        windowScroll <= fotovolList4offset + fotovolList4oe
                    ) {
                        setTimeout(function () {
                            if (!fotovolList4.hasClass("selezionato")) {
                                $(".tab-3-list-item")
                                    .not(fotovolList4)
                                    .removeClass("selezionato");
                                $(fotovolList4).addClass("selezionato");
                                let item = $(fotovolList4).attr("data-image-swap");
                                $(".tab-home-3-image-container img").each(function () {
                                    if ($(this).attr("data-image-step") == item) {
                                        $(".tab-home-3-image-container img").addClass("d-none");
                                        $(this).removeClass("d-none");
                                    }
                                });
                            }
                        }, 150);
                    }
                }
            }
        });
    }
    if ($(".tab1-container").length != 0) {
        $(".tab1-box-fascia").on("click", function () {
            let attr = $(this).attr("data-tab-swap");
            $('.tab1-box-fascia[data-tab-swap="' + attr + '"]').addClass("active");
            $(".tab1-box-fascia")
                .not('[data-tab-swap="' + attr + '"]')
                .removeClass("active");
            $(".tab1-change-body").each(function () {
                if ($(this).attr("data-tab-swap") == attr) {
                    $(this).removeClass("scomparsa");
                    $(this).removeClass("d-none");
                } else {
                    $(this).addClass("scomparsa");
                }
            });
            setTimeout(function () {
                $(".tab1-change-body").each(function () {
                    if ($(this).hasClass("scomparsa")) {
                        $(this).addClass("d-none");
                    } else {
                        $(this).removeClass("d-none");
                    }
                });
            }, 500);
            $(".tab1-hidden + .position-relative").css(
                "height",
                $(".tab1-change-body:not(.scomparsa)").outerHeight()
            );
        });
        $(".tab1-box-fascia").first().click();
    }
    if ($("#supportIPO").length != 0) {
        $("#supportIPO a.buttonlink-pleni-cta").on("click", function () {
            $("#supportIPO").modal("hide");
        });
    }
    if ($(".modalPDF").length != 0) {
        $(".modalPDF a.buttonlink-pleni-cta").on("click", function () {
            $(".modalPDF").modal("hide");
        });
    }

    if ($("#pop-up-docs").length != 0) {
        $('[data-popup="modale-disclaimer"]').on("click", function (e) {
            let thisHref = $(this).attr("href");
            e.preventDefault();
            $("#pop-up-docs").modal("show");
            $("#pop-up-docs a.buttonlink-pleni-cta").attr("href", thisHref);
            console.log(thisHref);
        });
        $("#pop-up-docs a.buttonlink-pleni-cta").on("click", function () {
            $("#pop-up-docs").modal("hide");
        });
    }
});

$(document).ready(function () {
    if ($(".cards-number").length != 0) {
        $(".cards-number").parent().css("padding", "0px");
    }
    if ($("#modale-copriPagina").length != 0) {
        $("#modale-copriPagina").modal("show");
    }
});

// FILTER CARD
if ($(".FilterCard-article-card") != 0) {
    //DESKTOP SELECTION
    filterSelection("filter1");
    function filterSelection(props) {
        let selection = $(".FilterCard-article-card");
        if (props == "filter1") props = "";
        for (i = 0; i < selection.length; i++) {
            removeClass(selection[i], "showDesktop");
            if (selection[i].className.indexOf(props) > -1)
                addClass(selection[i], "showDesktop");
        }
        //count element
        let elementNumber = $(".showDesktop").length;
        //set number in html code
        $(".FilterCard-articleNumber").text(elementNumber);
    }

    //MOBILE SELECTION
    filterSelectionMobile("filter1");
    function filterSelectionMobile(props) {
        let selection = $(".FilterCard-article-card-mobile");
        if (props == "filter1") props = "";
        for (i = 0; i < selection.length; i++) {
            removeClass(selection[i], "showMobile");
            if (selection[i].className.indexOf(props) > -1)
                addClass(selection[i], "showMobile");
        }
        //count element
        let elementNumber = $(".showMobile").length;
        //set number in html code
        $(".FilterCard-articleNumber-mobile").text(elementNumber);
    }

    function addClass(element, name) {
        let i;
        let arr1 = element.className.split(" ");
        let arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function removeClass(element, name) {
        let i;
        let arr1 = element.className.split(" ");
        let arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    // Active class
    $(".FilterCard-category-card").click(function () {
        //Check active class
        $(".FilterCard-category-card").each(function () {
            $(this).removeClass("active");
        });
        //Add selection active class
        $(this).addClass("active");
    });

    // MOBILE

    $(window).ready(function () {
        let textfilter1 = $(
            ".FilterCard-dropdown-content-menu-mobile a:first-child"
        ).text();
        let textfilter2 = $(
            ".FilterCard-dropdown-content-menu-mobile a:nth-child(2)"
        ).text();
        let textfilter3 = $(
            ".FilterCard-dropdown-content-menu-mobile a:nth-child(3)"
        ).text();
        let textfilter4 = $(
            ".FilterCard-dropdown-content-menu-mobile a:nth-child(4)"
        ).text();
        let textfilter5 = $(
            ".FilterCard-dropdown-content-menu-mobile a:nth-child(5)"
        ).text();
        let textfilter6 = $(
            ".FilterCard-dropdown-content-menu-mobile a:nth-child(6)"
        ).text();

        //Mobile
        $(".FilterCard-dropdown-content-mobile").text(textfilter1);
        $(".FilterCard-dropdown-content-menu-mobile a:first-child").text(
            textfilter1
        );
        $(".FilterCard-dropdown-content-menu-mobile a:nth-child(2)").text(
            textfilter2
        );
        $(".FilterCard-dropdown-content-menu-mobile a:nth-child(3)").text(
            textfilter3
        );
        $(".FilterCard-dropdown-content-menu-mobile a:nth-child(4)").text(
            textfilter4
        );
        $(".FilterCard-dropdown-content-menu-mobile a:nth-child(5)").text(
            textfilter5
        );
        $(".FilterCard-dropdown-content-menu-mobile a:nth-child(6)").text(
            textfilter6
        );

        //Desktop
        $(
            ".FilterCard-container-category-card .FilterCard-category-card:first-child .FilterCard-category-card-text"
        ).text(textfilter1);
        $(
            ".FilterCard-container-category-card .FilterCard-category-card:nth-child(2) .FilterCard-category-card-text"
        ).text(textfilter2);
        $(
            ".FilterCard-container-category-card .FilterCard-category-card:nth-child(3) .FilterCard-category-card-text"
        ).text(textfilter3);
        $(
            ".FilterCard-container-category-card .FilterCard-category-card:nth-child(4) .FilterCard-category-card-text"
        ).text(textfilter4);
        $(
            ".FilterCard-container-category-card .FilterCard-category-card:nth-child(5) .FilterCard-category-card-text"
        ).text(textfilter5);

        $(".dropdown-item").click(function () {
            let select = $(this).data();

            if (select.value == "filter2") {
                $(".FilterCard-dropdown-content-mobile").text(textfilter2);
            } else if (select.value == "filter3") {
                $(".FilterCard-dropdown-content-mobile").text(textfilter3);
            } else if (select.value == "filter4") {
                $(".FilterCard-dropdown-content-mobile").text(textfilter4);
            } else if (select.value == "filter5") {
                $(".FilterCard-dropdown-content-mobile").text(textfilter5);
            } else if (select.value == "filter6") {
                $(".FilterCard-dropdown-content-mobile").text(textfilter6);
            } else if (select.value == "filter1") {
                $(".FilterCard-dropdown-content-mobile").text(textfilter1);
            }
        });
    });
}

/* nuove attivazioni */
// function caricaContenutoNuoveAttivazioniGas(nomeStep) {
//   $("#NA_container").load("NA-Gas/" + nomeStep + ".html");
// }

// function caricaContenutoNuoveAttivazioniLuce(nomeStep) {
//   $("#NA_container").load("NA-Luce/" + nomeStep + ".html");
// }
// function NAswitchContent(nomeStep) {
//   switch (nomeStep) {
//     case "NA-modale-luce-step1":
//       $("#modale-NA #modale-NA-body").load("NA-modale-luce-step1.html");
//       break;
//     case "NA-modale-luce-step2":
//       setTimeout(function () {
//         controllaScontoDigitaleAttivo();
//       }, 15);
//       $("#modale-NA #modale-NA-body").load("NA-modale-luce-step2.html");

//       break;
//     default:
//       $("#modale-NA #modale-NA-body").load("NA-modale-luce-step1.html");
//       break;
//   }
// }
// $(document).ready(function () {
//   if ($("#NA_container").length != 0) {
//     caricaContenutoNuoveAttivazioniLuce("luce_step0");
//     /* caricaContenutoNuoveAttivazioniGas('gas_step0') */
//   }
// });

function posizionaBottoniNAmodale(hhhhhh) {
    let closeButton = $(hhhhhh).find(".egl-mod-comm-closeIcon");
    let backButton = $(".egl-mod-comm-prevIcon");
    let closeButtonBottom = 0 - closeButton[0].getBoundingClientRect().bottom - 8;
    let modaleTitle = $(hhhhhh)
        .find(".egl-modale-carrello-step .modal-header")
        .outerHeight();
    let half = modaleTitle / 2;
    if ($(window).width() < 1024) {
        closeButton.css("top", half - 12);
        backButton.css("top", 0 - 12 - half);
    } else if ($(window).width() > 1024) {
        closeButton.css("top", 30);
    }
}
$("#modale-NA, #modale-NA-config-luce, #modale-NA-config-gas").on(
    "shown.bs.modal",
    function () {
        $(
            ".box-carrellostep-fascia-bi.position-relative.box-carrellostep-fascia-bi-mono"
        ).click();
        $(
            ".box-carrellostep-fascia-bi.position-relative.box-carrellostep-fascia-bi-mono"
        ).click();
        let hhdaohdas = $(this);
        posizionaBottoniNAmodale(hhdaohdas);

        $(window).on("resize", function () {
            posizionaBottoniNAmodale(hhdaohdas);
        });
    }
);

$("#modale-NA, #modale-NA-config-luce, #modale-NA-config-gas").on(
    "show.bs.modal",
    function () {
        controllaScontoDigitaleAttivo();
    }
);

/* card-basic */
$(document).ready(function () {
    if ($(".card-basic-container").length != 0) {
        $(".card-basic-carosello").slick({
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: "linear",
            variableWidth: true,
            variableHeight: true,
            centerMode: true,
        });
        $(".card-basic-carosello").each(function () {
            let $statusBoxInfoCards = $(this)
                .parents(".card-basic-container")
                .find(".cards-basic-status-text");
            let $slickElementBoxInfoCards = $(this);
            let leftArrowBoxInfoCards = $(this)
                .parents(".card-basic-container")
                .find(".cards-basic-arrows.cards-basic-previous-arrow");
            let rightArrowBoxInfoCards = $(this)
                .parents(".card-basic-container")
                .find(".cards-basic-arrows.cards-basic-next-arrow");
            $slickElementBoxInfoCards.on(
                "init reInit afterChange",
                function (event, slick, currentSlide, nextSlide) {
                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $statusBoxInfoCards.html(
                        '<span class="first-number-boxinfo">' +
                        i +
                        "</span>" +
                        "/" +
                        "&nbsp" +
                        slick.slideCount
                    );
                    if (i === slick.slideCount) {
                        rightArrowBoxInfoCards.addClass("d-none");
                    } else {
                        if (rightArrowBoxInfoCards.hasClass("d-none")) {
                            rightArrowBoxInfoCards.removeClass("d-none");
                        }
                    }
                    if (i === 1) {
                        leftArrowBoxInfoCards.addClass("d-none");
                    } else {
                        if (leftArrowBoxInfoCards.hasClass("d-none")) {
                            leftArrowBoxInfoCards.removeClass("d-none");
                        }
                    }
                }
            );
            leftArrowBoxInfoCards.click();
        });
        $(window).on("resize", function () {
            if ($(window).width() < 1024) {
                if ($(".card-basic-carosello").hasClass("slick-initialized")) {
                    $(".card-basic-carosello").slick("resize");
                } else {
                    $(".card-basic-carosello").slick({
                        arrows: false,
                        dots: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        variableWidth: true,
                        variableHeight: true,
                        centerMode: true,
                    });
                }
            } else {
                $(".card-basic-carosello.slick-initialized").slick("unslick");
            }
        });
    }
});
function slideCardsbasic(dir, e) {
    let target = e.target;
    let slider = $(target)
        .parents(".card-basic-container")
        .find(".card-basic-carosello");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}
/* tab 4 */
function slideTab4Card(dir) {
    let slider = $(".TabHome4-carousel-content");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}
function slideTab4CardMobile(dir) {
    let slider = $(".TabHome4-carousel-content-mobile");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}
function changeDirectSlideTab4(number) {
    $(".TabHome4-carousel-content").slick("slickGoTo", number);
}
$(document).ready(function () {
    if ($(".TabHome4-container").length != 0) {
        if ($(window).width() < 1024) {
            $(".TabHome4-carousel-content-mobile").slick({
                arrows: false,
                appendArrows: $(".TabHome4-card-number-arrows"),
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
                variableWidth: true,
                variableHeight: true,
                centerMode: true,
            });

            let $statusTab4CardsMobile = $(".TabHome4-card-number-status-text");
            let $slickElementTab4CardsMobile = $(".TabHome4-carousel-content-mobile");
            let leftArrowTab4CardsMobile = $(
                ".TabHome4-card-number-arrows.TabHome4-card-number-previous-arrow"
            );
            let rightArrowTab4CardsMobile = $(
                ".TabHome4-card-number-arrows.TabHome4-card-number-next-arrow"
            );
            $slickElementTab4CardsMobile.on(
                "init reInit afterChange",
                function (event, slick, currentSlide, nextSlide) {
                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $statusTab4CardsMobile.html(
                        '<span class="first-number-boxinfo">' +
                        i +
                        "</span>" +
                        "/" +
                        "&nbsp" +
                        slick.slideCount
                    );
                    if (i === slick.slideCount) {
                        rightArrowTab4CardsMobile.addClass("d-none");
                    } else {
                        if (rightArrowTab4CardsMobile.hasClass("d-none")) {
                            rightArrowTab4CardsMobile.removeClass("d-none");
                        }
                    }
                    if (i === 1) {
                        leftArrowTab4CardsMobile.addClass("d-none");
                    } else {
                        if (leftArrowTab4CardsMobile.hasClass("d-none")) {
                            leftArrowTab4CardsMobile.removeClass("d-none");
                        }
                    }
                }
            );
            slideTab4CardMobile("-");
        } /* Closed viewport -1024 */
        $(window).on("resize", function () {
            if ($(window).width() < 1024) {
                if (
                    $(".TabHome4-carousel-content-mobile").hasClass("slick-initialized")
                ) {
                    $(".TabHome4-carousel-content-mobile").slick("resize");
                } else {
                    $(".TabHome4-carousel-content-mobile").slick({
                        arrows: false,
                        appendArrows: $(".TabHome4-card-number-arrows"),
                        dots: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        variableWidth: true,
                        variableHeight: true,
                        centerMode: true,
                    });
                    let $statusTab4CardsMobile = $(".TabHome4-card-number-status-text");
                    let $slickElementTab4CardsMobile = $(
                        ".TabHome4-carousel-content-mobile"
                    );
                    let leftArrowTab4CardsMobile = $(
                        ".TabHome4-card-number-arrows.TabHome4-card-number-previous-arrow"
                    );
                    let rightArrowTab4CardsMobile = $(
                        ".TabHome4-card-number-arrows.TabHome4-card-number-next-arrow"
                    );
                    $slickElementTab4CardsMobile.on(
                        "init reInit afterChange",
                        function (event, slick, currentSlide, nextSlide) {
                            var i = (currentSlide ? currentSlide : 0) + 1;
                            $statusTab4CardsMobile.html(
                                '<span class="first-number-boxinfo">' +
                                i +
                                "</span>" +
                                "/" +
                                "&nbsp" +
                                slick.slideCount
                            );
                            if (i === slick.slideCount) {
                                rightArrowTab4CardsMobile.addClass("d-none");
                            } else {
                                if (rightArrowTab4CardsMobile.hasClass("d-none")) {
                                    rightArrowTab4CardsMobile.removeClass("d-none");
                                }
                            }
                            if (i === 1) {
                                leftArrowTab4CardsMobile.addClass("d-none");
                            } else {
                                if (leftArrowTab4CardsMobile.hasClass("d-none")) {
                                    leftArrowTab4CardsMobile.removeClass("d-none");
                                }
                            }
                        }
                    );
                }
            } else {
                $(".TabHome4-carousel-content-mobile.slick-initialized").slick(
                    "unslick"
                );
            }
        });
        if ($(window).width() >= 1024) {
            $(".TabHome4-carousel-content").slick({
                arrows: false,
                appendArrows: $(".TabHome4-card-number-arrows"),
                dots: false,
                infinite: false,
                speed: 1,
                slidesToShow: 1,
                fade: true,
                slidesToScroll: 1,
                cssEase: "linear",
            });
            let $statusTab4Cards = $(".TabHome4-card-number-status-text");
            let $slickElementTab4Cards = $(".TabHome4-carousel-content");
            let leftArrowTab4Cards = $(
                ".TabHome4-card-number-arrows.TabHome4-card-number-previous-arrow"
            );
            let rightArrowTab4Cards = $(
                ".TabHome4-card-number-arrows.TabHome4-card-number-next-arrow"
            );
            $slickElementTab4Cards.on(
                "init reInit afterChange",
                function (event, slick, currentSlide, nextSlide) {
                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $statusTab4Cards.html(
                        '<span class="first-number-boxinfo">' +
                        i +
                        "</span>" +
                        "/" +
                        "&nbsp" +
                        slick.slideCount
                    );
                    if (i === slick.slideCount) {
                        rightArrowTab4Cards.addClass("d-none");
                    } else {
                        if (rightArrowTab4Cards.hasClass("d-none")) {
                            rightArrowTab4Cards.removeClass("d-none");
                        }
                    }
                    if (i === 1) {
                        leftArrowTab4Cards.addClass("d-none");
                    } else {
                        if (leftArrowTab4Cards.hasClass("d-none")) {
                            leftArrowTab4Cards.removeClass("d-none");
                        }
                    }
                }
            );
            slideTab4Card("+");
        } /* Closed viewport +1024 */
        $(window).on("resize", function () {
            if ($(window).width() >= 1024) {
                if ($(".TabHome4-carousel-content").hasClass("slick-initialized")) {
                    $(".TabHome4-carousel-content").slick("resize");
                } else {
                    $(".TabHome4-carousel-content").slick({
                        arrows: false,
                        appendArrows: $(".TabHome4-card-number-arrows"),
                        dots: false,
                        infinite: false,
                        speed: 1,
                        slidesToShow: 1,
                        fade: true,
                        slidesToScroll: 1,
                        cssEase: "linear",
                    });
                    let $statusTab4Cards = $(".TabHome4-card-number-status-text");
                    let $slickElementTab4Cards = $(".TabHome4-carousel-content");
                    let leftArrowTab4Cards = $(
                        ".TabHome4-card-number-arrows.TabHome4-card-number-previous-arrow"
                    );
                    let rightArrowTab4Cards = $(
                        ".TabHome4-card-number-arrows.TabHome4-card-number-next-arrow"
                    );
                    $slickElementTab4Cards.on(
                        "init reInit afterChange",
                        function (event, slick, currentSlide, nextSlide) {
                            var i = (currentSlide ? currentSlide : 0) + 1;
                            $statusTab4Cards.html(
                                '<span class="first-number-boxinfo">' +
                                i +
                                "</span>" +
                                "/" +
                                "&nbsp" +
                                slick.slideCount
                            );
                            if (i === slick.slideCount) {
                                rightArrowTab4Cards.addClass("d-none");
                            } else {
                                if (rightArrowTab4Cards.hasClass("d-none")) {
                                    rightArrowTab4Cards.removeClass("d-none");
                                }
                            }
                            if (i === 1) {
                                leftArrowTab4Cards.addClass("d-none");
                            } else {
                                if (leftArrowTab4Cards.hasClass("d-none")) {
                                    leftArrowTab4Cards.removeClass("d-none");
                                }
                            }
                        }
                    );
                }
            }
        });
    }
});
$(function () {
    $('.TabHome4-carousel-text [data-toggle="tooltip"]').tooltip({
        html: true,
        trigger: "click",
        template:
            '<div class="tooltip tooltip-TabHome4" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tooltip-inner-TabHome4"></div></div>',
    });
    $('.TabHome4-carousel-subtitle-mobile [data-toggle="tooltip"]').tooltip({
        html: true,
        trigger: "click",
        template:
            '<div class="tooltip tooltip-TabHome4" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tooltip-inner-TabHome4"></div></div>',
    });
});

/* tab interactive */
$(document).ready(function () {
    if ($(".TabInteractive").length != 0) {
        selectCard(1);
        let widthViewport = window.innerWidth;
        if (widthViewport <= 1024) {
            $(".TabInteractive-card-element-content-mobile").slick({
                arrows: false,
                appendArrows: $(".TabInteractive-card-number-arrows"),
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
                variableWidth: true,
                variableHeight: true,
                centerMode: true,
            });

            let $statusTabInteractiveCards = $(
                ".TabInteractive-card-number-status-text"
            );
            let $slickElementTabInteractiveCards = $(
                ".TabInteractive-card-element-content-mobile"
            );
            let leftArrowTabInteractiveCards = $(
                ".TabInteractive-card-number-arrows.TabInteractive-card-number-previous-arrow"
            );
            let rightArrowTabInteractiveCards = $(
                ".TabInteractive-card-number-arrows.TabInteractive-card-number-next-arrow"
            );
            $slickElementTabInteractiveCards.on(
                "init reInit afterChange",
                function (event, slick, currentSlide, nextSlide) {
                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $statusTabInteractiveCards.html(
                        '<span class="first-number-boxinfo">' +
                        i +
                        "</span>" +
                        "/" +
                        "&nbsp" +
                        slick.slideCount
                    );
                    if (i === slick.slideCount) {
                        rightArrowTabInteractiveCards.addClass("d-none");
                    } else {
                        if (rightArrowTabInteractiveCards.hasClass("d-none")) {
                            rightArrowTabInteractiveCards.removeClass("d-none");
                        }
                    }
                    if (i === 1) {
                        leftArrowTabInteractiveCards.addClass("d-none");
                    } else {
                        if (leftArrowTabInteractiveCards.hasClass("d-none")) {
                            leftArrowTabInteractiveCards.removeClass("d-none");
                        }
                    }
                    //Change text slider
                    $(".TabInteractive-card-timelines-button-mobile").removeClass(
                        "TI-active-btn-mobile"
                    );
                    $(".TabInteractive-card-text-content-mobile").addClass("d-none");
                    $(".TabInteractive-card-mobile").css({ opacity: ".4" });
                    if (i === 1) {
                        $(
                            ".TabInteractive-card-timelines-button-mobile:first-child"
                        ).addClass("TI-active-btn-mobile");
                        $(
                            ".TabInteractive-card-text-content-mobile:first-child"
                        ).removeClass("d-none");
                        $(
                            ".TabInteractive-card-mobile-container:first-child .TabInteractive-card-mobile"
                        ).css({ opacity: "1" });
                    } else if (i === 2) {
                        $(
                            ".TabInteractive-card-timelines-button-mobile:nth-child(2)"
                        ).addClass("TI-active-btn-mobile");
                        $(
                            ".TabInteractive-card-text-content-mobile:nth-child(2)"
                        ).removeClass("d-none");
                        $(
                            ".TabInteractive-card-mobile-container:nth-child(2) .TabInteractive-card-mobile"
                        ).css({ opacity: "1" });
                    } else if (i === 3) {
                        $(
                            ".TabInteractive-card-timelines-button-mobile:last-child"
                        ).addClass("TI-active-btn-mobile");
                        $(
                            ".TabInteractive-card-text-content-mobile:last-child"
                        ).removeClass("d-none");
                        $(
                            ".TabInteractive-card-mobile-container:last-child .TabInteractive-card-mobile"
                        ).css({ opacity: "1" });
                    }
                }
            );
            leftArrowTabInteractiveCards.click();
        } /* Closed viewport -1024 */
    }
});

function slideTabInteractiveCard(dir) {
    let slider = $(".TabInteractive-carousel-content");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}

function slideTabInteractiveCardMobile(dir) {
    let slider = $(".TabInteractive-card-element-content-mobile");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}

function changeDirectSlide(number) {
    $(".TabInteractive-card-element-content-mobile").slick("slickGoTo", number);
}

function selectCard(props) {
    //Remove class active
    $(".TabInteractive-card-container").removeClass("active");
    $(".TabInteractive-card-timelines-button p").css({
        "font-weight": "normal",
        "background-color": "#eaeaea",
        color: "#767676",
    });
    $(".TabInteractive-card-text-title-container").addClass("d-none");
    if (props === 1) {
        //Add select specific element
        $(".TabInteractive-card-container:first-child").addClass("active");
        $(".TabInteractive-card-timelines-button:first-child p").css({
            "font-weight": "bold",
            "background-color": "#ffcd00p",
            color: "#333",
        });
        $(".TabInteractive-card-text-title-container:nth-child(2)").removeClass(
            "d-none"
        );
    } else if (props === 2) {
        //Add select specific element
        $(".TabInteractive-card-container:nth-child(2)").addClass("active");
        $(".TabInteractive-card-timelines-button:nth-child(2) p").css({
            "font-weight": "bold",
            "background-color": "#ffcd00p",
            color: "#333",
        });
        $(".TabInteractive-card-text-title-container:nth-child(3)").removeClass(
            "d-none"
        );
    } else if (props === 3) {
        //Add select specific element
        $(".TabInteractive-card-container:last-child").addClass("active");
        $(".TabInteractive-card-timelines-button:last-child p").css({
            "font-weight": "bold",
            "background-color": "#ffcd00p",
            color: "#333",
        });
        $(".TabInteractive-card-text-title-container:last-child").removeClass(
            "d-none"
        );
    }
}

/* form in pagina */
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formInPagina = $('form[data-form="form-promo"]');
            console.log(formInPagina);
            // Loop over them and prevent submission
            var validationFormPaginaNoPromo = Array.prototype.filter.call(
                formInPagina,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                let id = $(this).parents(".form-pagina-container").attr("id");
                                handleFormSubmit(id);
                            }
                            form.classList.add("was-validated");
                            $(
                                'form[data-form="form-promo"].was-validated .form-control:invalid'
                            ).each(function () {
                                $(this).parent(".label-box").addClass("non-compilato");
                                $(this).parent(".label-box").removeClass("compilato");
                            });
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();
/* form energia IB */
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formInPaginanoSport1 = $('form[data-form="no-sport"][data-step="1"]');
            console.log(formInPaginanoSport1);
            // Loop over them and prevent submission
            var validationFormPaginaNoSport1 = Array.prototype.filter.call(
                formInPaginanoSport1,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                $('form[data-form="no-sport"][data-step="1"]').addClass(
                                    "d-none"
                                );
                                $('form[data-form="no-sport"][data-step="2"]').removeClass(
                                    "d-none"
                                );
                                $(".form-progressBar .avanzamento div").css(
                                    "transform",
                                    "translateX(0%)"
                                );
                                $(".paginazione-form").html(" <b>2</b> di 2");
                            }
                            form.classList.add("was-validated");
                            $(
                                ".form-pagina-container .was-validated .form-control:invalid"
                            ).each(function () {
                                $(this).parent(".label-box").addClass("non-compilato");
                                $(this).parent(".label-box").removeClass("compilato");
                            });
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();

(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formInPaginaNoSport2 = $('form[data-form="no-sport"][data-step="2"]');
            console.log(formInPaginaNoSport2);
            // Loop over them and prevent submission
            var validationFormPaginaNoSport2 = Array.prototype.filter.call(
                formInPaginaNoSport2,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                let id = $(this).parents(".form-pagina-container").attr("id");
                                handleFormSubmit(id);
                            }
                            form.classList.add("was-validated");
                            $(
                                ".form-pagina-container .was-validated .form-control:invalid"
                            ).each(function () {
                                $(this).parent(".label-box").addClass("non-compilato");
                                $(this).parent(".label-box").removeClass("compilato");
                            });
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();
/* form energia SPORT */
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formInPaginaSport1 = $('form[data-form="sport"][data-step="1"]');
            console.log(formInPaginaSport1);
            // Loop over them and prevent submission
            var validationFormPaginaSport1 = Array.prototype.filter.call(
                formInPaginaSport1,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                $('form[data-form="sport"][data-step="1"]').addClass("d-none");
                                $('form[data-form="sport"][data-step="2"]').removeClass(
                                    "d-none"
                                );
                                $(".form-progressBar .avanzamento div").css(
                                    "transform",
                                    "translateX(-33%)"
                                );
                                $(".paginazione-form").html(" <b>2</b> di 3");
                            }
                            form.classList.add("was-validated");
                            $(
                                ".form-pagina-container .was-validated .form-control:invalid"
                            ).each(function () {
                                $(this).parent(".label-box").addClass("non-compilato");
                                $(this).parent(".label-box").removeClass("compilato");
                            });
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formInPaginaSport2 = $('form[data-form="sport"][data-step="2"]');
            console.log(formInPaginaSport2);
            // Loop over them and prevent submission
            var validationFormPaginaSport2 = Array.prototype.filter.call(
                formInPaginaSport2,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                $('form[data-form="sport"][data-step="2"]').addClass("d-none");
                                $('form[data-form="sport"][data-step="3"]').removeClass(
                                    "d-none"
                                );
                                $(".form-progressBar .avanzamento div").css(
                                    "transform",
                                    "translateX(0%)"
                                );
                                $(".paginazione-form").html(" <b>3</b> di 3");
                            }
                            form.classList.add("was-validated");
                            $(
                                ".form-pagina-container .was-validated .form-control:invalid"
                            ).each(function () {
                                $(this).parent(".label-box").addClass("non-compilato");
                                $(this).parent(".label-box").removeClass("compilato");
                            });
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formInPaginaSport3 = $('form[data-form="sport"][data-step="3"]');
            console.log(formInPaginaSport3);
            // Loop over them and prevent submission
            var validationFormPaginaSport3 = Array.prototype.filter.call(
                formInPaginaSport3,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else {
                                let id = $(this).parents(".form-pagina-container").attr("id");
                                handleFormSubmit(id);
                            }
                            form.classList.add("was-validated");
                            $(
                                ".form-pagina-container .was-validated .form-control:invalid"
                            ).each(function () {
                                $(this).parent(".label-box").addClass("non-compilato");
                                $(this).parent(".label-box").removeClass("compilato");
                            });
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();
/* form energia */
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formEnergia2 = $(
                ".form-pagina-container.form-energia-2 .needs-validation"
            );
            console.log(formEnergia2);
            // Loop over them and prevent submission
            var FornEnergiaArray2 = Array.prototype.filter.call(
                formEnergia2,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            var checkboxFailed = false;
                            if ($(".pleni-checkbox [type='checkbox']:checked").length == 0) {
                                $(".pleni-checkbox [type='checkbox']").attr("required", true);
                                checkboxFailed = true;
                                $(".pleni-checkbox").addClass("non-compilato");
                            } else {
                                $(".pleni-checkbox [type='checkbox']").attr("required", false);
                                $(".pleni-checkbox").removeClass("non-compilato");
                                checkboxFailed = false;
                            }
                            var numeroCorretto = true;
                            if (
                                Array.from($("input#inputPhoneNumber").val())[0] != 3 &&
                                Array.from($("input#inputPhoneNumber").val())[0] != 0
                            ) {
                                numeroCorretto = false;
                                $("input#inputPhoneNumber")[0].setCustomValidity(
                                    "telefono non corretto"
                                );
                            } else {
                                $("input#inputPhoneNumber")[0].setCustomValidity("");
                            }
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else if (
                                numeroCorretto == true &&
                                checkboxFailed == false &&
                                form.checkValidity() === true
                            ) {
                                let id = $(this)
                                    .parents(".form-pagina-container.form-energia-2")
                                    .attr("id");
                                handleFormSubmit(id);
                            }
                            form.classList.add("was-validated");
                            $(
                                ".form-pagina-container.form-energia-2 .was-validated .form-control:invalid"
                            ).each(function () {
                                $(this).parent(".label-box").addClass("non-compilato");
                                $(this).parent(".label-box").removeClass("compilato");
                            });
                        },
                        false
                    );
                }
            );
        },
        false
    );
})();
$('[data-radio="scelta-settore"] .form-radio').on("click", function () {
    $('[data-radio="scelta-settore"] .form-radio').each(function () {
        $(this).removeClass("selezionato");
        $(this).attr("label-attivazione", "Attiva opzione");
    });
    $(this).addClass("selezionato");
    $(this).attr("label-attivazione", "Disattiva opzione");
    if ($('[data-radio-form="sport"]').hasClass("selezionato")) {
        $('form[data-form="no-sport"][data-step="1"]').addClass("d-none");
        $('form[data-form="sport"][data-step="1"]').removeClass("d-none");
        $(".form-progressBar .avanzamento div").css(
            "transform",
            "translateX(-66%)"
        );
        $(".paginazione-form").html(" <b>1</b> di 3");
    } else {
        $('form[data-form="no-sport"][data-step="1"]').removeClass("d-none");
        $('form[data-form="sport"][data-step="1"]').addClass("d-none");
        $(".form-progressBar .avanzamento div").css(
            "transform",
            "translateX(-50%)"
        );
        $(".paginazione-form").html(" <b>1</b> di 2");
    }
});
$(".buttonlink-pleni-cta.buttonlink-pleni-cta-white").on("click", function () {
    if ($(this).attr("data-indietro") === "no-sport-step-1") {
        $('form[data-form="no-sport"][data-step="1"]').removeClass("d-none");
        $('form[data-form="no-sport"][data-step="2"]').addClass("d-none");
    } else if ($(this).attr("data-indietro") === "sport-step-1") {
        $('form[data-form="sport"][data-step="1"]').removeClass("d-none");
        $('form[data-form="sport"][data-step="2"]').addClass("d-none");
    }
});
$(".form-cappotto-container form .form-radio").on("click", function () {
    $(".form-cappotto-container form .form-radio").each(function () {
        $(this).removeClass("selezionato");
        $(this).attr("label-attivazione", "Attiva opzione");
    });
    $(this).addClass("selezionato");
    $(this).attr("label-attivazione", "Disattiva opzione");
});
$('[data-radio="scelta-ruolo"] .form-radio').on("click", function () {
    $('[data-radio="scelta-ruolo"] .form-radio').each(function () {
        $(this).removeClass("selezionato");
        $(this).attr("label-attivazione", "Attiva opzione");
    });
    $(this).addClass("selezionato");
    $(this).attr("label-attivazione", "Disattiva opzione");
    if ($('[data-radio-form="condominio"]').hasClass("selezionato")) {
        $(".cappotto-brochure").removeClass("d-none");
        $(".form-cappotto-container form").addClass("d-none");
    } else {
        $(".form-cappotto-container form").removeClass("d-none");
        $(".cappotto-brochure").addClass("d-none");
    }
});
$(".form-cappotto-container form .form-radio").on("click", function () {
    $(".form-cappotto-container form .form-radio").each(function () {
        $(this).removeClass("selezionato");
        $(this).attr("label-attivazione", "Attiva opzione");
    });
    $(this).addClass("selezionato");
    $(this).attr("label-attivazione", "Disattiva opzione");
});

// START MEDUSA
$(function () {
    if ($(".ProjectMedusa-container").length != 0) {
        $(".container-html-box").removeClass("container-lg");
        /* console.clear(); */
        var queryString = window.location.search;
        //////////////////MOBILE CAROUSEL//////////////////////////////

        $(document).ready(function () {
            if ($(window).innerWidth() < 1024) {
                let checkAnalyticsZeroMobile = true;
                let checkAnalyticsFirstMobile = true;
                let checkAnalyticsSecondMobile = true;
                let checkAnalyticsThirdMobile = true;
                let queryStringMobile = window.location.search;
                $("#goToFirstSlideMobile").on("click", function () {
                    $(".ProjectMedusa-content-slide-slick").slick("slickGoTo", 1);
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Medusa",
                        eventAction: "click",
                        eventLabel: "step0_leggidipiu",
                    });
                });
                $(".ProjectMedusa-content-slide-slick").on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        if (currentSlide == 3) {
                            $(".slick-dots").removeClass("d-none");
                        } else {
                            $(".slick-dots").addClass("d-none");
                        }
                        //Analytics
                        if (currentSlide == 1) {
                            if (checkAnalyticsFirstMobile == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "dubbi-sul-caro-bolletta",
                                    from: "guida-al-caro-bolletta",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/dubbi-sul-caro-bolletta" +
                                        queryStringMobile,
                                });
                                checkAnalyticsFirstMobile = false;
                                checkAnalyticsSecondMobile = true;
                                checkAnalyticsThirdMobile = true;
                                checkAnalyticsZeroMobile = true;
                            }
                        } else if (currentSlide == 2) {
                            if (checkAnalyticsSecondMobile == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "11-mila-famiglie",
                                    from: "dubbi-sul-caro-bolletta",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/11-mila-famiglie" +
                                        queryStringMobile,
                                });
                                checkAnalyticsSecondMobile = false;
                                checkAnalyticsFirstMobile = true;
                                checkAnalyticsThirdMobile = true;
                                checkAnalyticsZeroMobile = true;
                            }
                        } else if (currentSlide == 3) {
                            if (checkAnalyticsThirdMobile == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "parlaci_della_tua_casa",
                                    from: "11-mila-famiglie",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/parlaci_della_tua_casa" +
                                        queryStringMobile,
                                });
                                checkAnalyticsThirdMobile = false;
                                checkAnalyticsFirstMobile = true;
                                checkAnalyticsSecondMobile = true;
                                checkAnalyticsZeroMobile = true;
                            }
                        }
                        getUser();
                        //start analytics
                    }
                );
                $(".ProjectMedusa-content-slide-slick").slick({
                    arrows: false,
                    /* appendArrows: $('.card-offerte-arrows'), */
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: "0",
                });
                $(".slick-dots").addClass("d-none");
                $(".ProjectMedusa-slide:not(.PM-first-slide)").on(
                    "touchend click",
                    function () {
                        if ($(".slick-dots").hasClass("d-none")) {
                            $(".slick-dots").removeClass("d-none");
                            setTimeout(function () {
                                $(".slick-dots").addClass("d-none");
                            }, 2000);
                        }
                    }
                );
            }
        });

        ///////////// DESKTOP CAROUSEL ////////////////

        if ($(window).innerWidth() > 1023) {
            const colorArray = [
                "#",
                "#426F42",
                "#683A5E",
                "#683A5E",
                "#262626",
                "#426F42",
            ];
            const slides = document.querySelectorAll("section");
            const container = document.querySelector("#PM-content-slide");
            let dur = 0.3;
            let offsets = [];
            let oldSlide = 0;
            let activeSlide = 0;
            let dots = document.querySelector(".dots");
            let navDots = [];
            let iw = window.innerWidth;
            let scrollCount = 0;
            /* const mouseAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const handAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const cursorAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const arrowAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    */

            document.querySelector("#leftArrow").addEventListener("click", slideAnim);
            document
                .querySelector("#rightArrow")
                .addEventListener("click", slideAnim);
            document
                .querySelector("#medusaArrow")
                .addEventListener("click", slideAnim);
            document
                .querySelector("#goToFirstSlide")
                .addEventListener("click", slideAnim);
            var checkAnalyticsZero = true;
            var checkAnalyticsFirst = true;
            var checkAnalyticsSecond = true;
            var checkAnalyticsThird = true;
            // set slides background colors and create the nav dots
            for (let i = 0; i < slides.length; i++) {
                gsap.set(slides[i], { backgroundColor: colorArray[i] });
                let newDot = document.createElement("div");
                newDot.className = "dot";
                newDot.index = i;
                navDots.push(newDot);
                newDot.addEventListener("click", slideAnim);
                dots.appendChild(newDot);
            }

            // icon animations for slide 1
            /* mouseAnim.fromTo(
      "#mouseRings circle",
      { attr: { r: 10 } },
      { attr: { r: 40 }, duration: 0.8, stagger: 0.25 }
    );
    mouseAnim.fromTo(
      "#mouseRings circle",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, stagger:0.25 },
      0
    );
    mouseAnim.fromTo(
      "#mouseRings circle",
      { opacity: 1 },
      { opacity: 0, duration: 0.4, stagger:0.25 },
      0.4
    ); */

            /* handAnim.to("#hand", { duration: 0.75, rotation: -10, transformOrigin: "center bottom" });
    handAnim.to("#hand", { duration: 0.5, rotation: 14, ease: "power3.inOut" });
    handAnim.to("#hand", { duration: 1, rotation: 0, transformOrigin: "center bottom" }); */

            /* cursorAnim.to("#cursor", { duration: 0.25, x: -22 });
    cursorAnim.to(
      "#iconCircles circle",
      0.5,
      { duration: 0.5, attr: { r: 6 }, stagger:0.15 },
      "expand"
    );
    cursorAnim.to("#cursor", { duration: 1.1, x: 40 }, "expand");
    cursorAnim.to("#cursor", { duration: 0.75, x: 0 }, "contract");
    cursorAnim.to("#iconCircles circle", { duration: 0.5, attr: { r: 4 } }, "contract"); */

            /* arrowAnim.to("#caret", {
      duration: 0.5,
      attr: { points: "60 30, 35 50, 60 70" },
      repeat: 3,
      yoyo: true,
      ease: "power2.inOut",
      repeatDelay: 0.25
    }); */

            // get elements positioned
            gsap.set(".dots", { xPercent: -50 }); //".dots, .titleWrap"
            /* gsap.set(".arrow", { yPercent: -50 }); */
            /* gsap.set(".title", { y: 30 }); */

            // lower screen animation with nav dots and rotating titles
            const dotAnim = gsap.timeline({ paused: true });
            dotAnim.to(
                ".dot",
                {
                    stagger: { each: 1, yoyo: true, repeat: 1 }, //Ogni quanti scroll cambiare, effetto piccolo grande, quanti ne conta a ogni scroll
                    scale: 2.1, // Manage width DOTS
                    rotation: 0.1,
                    ease: "in",
                },
                0.5 //Gestisce ingrandimento e stabilizzazione una volta selezionato
            );
            /* dotAnim.to(
      ".title",
      slides.length + 1,
      { y: -(slides.length * 30), rotation: 0.01, ease: "none" },
      0
    ); */
            dotAnim.time(1);

            // make the whole thing draggable
            /* let dragMe = Draggable.create(container, {
        type: "x",
        edgeResistance: 1,
        snap: offsets,
        inertia: true,
        bounds: "#PM-container-slide",
        onDrag: tweenDot,
        onThrowUpdate: tweenDot,
        onDragEnd: slideAnim,
        allowNativeTouchScrolling: false,
        zIndexBoost: false,
      });

      dragMe[0].id = "dragger"; */
            sizeIt();

            //append first number slide
            //$(".countSlide").text(oldSlide + 1 + "/03");

            /* var queryString = window.location.search; */

            // main action check which of the 4 types of interaction called the function
            function slideAnim(e) {
                oldSlide = activeSlide;
                //append other number slide after scroll
                //$(".countSlide").text("0" + oldSlide + "/03");
                // dragging the panels
                if (this.id === "dragger") {
                    activeSlide = offsets.indexOf(this.endX);
                    //check display footer in slide != 0
                    if (this.x + 500 >= "-" + window.innerWidth) {
                        //Managed display footer
                        /* $(".PM-slide-footer-container").addClass("d-none"); */
                        $(".PM-arrow-prev").addClass("invisible");
                        $(".dots").addClass("invisible");

                        if (checkAnalyticsZero == true) {
                            dataLayer.push({
                                event: "myEni",
                                userLoginState: isLogged,
                                siteSection1: "guida-al-caro-bolletta",
                                siteSection2: "guida-al-caro-bolletta",
                                from: "guida-al-caro-bolletta",
                                page_location: window.location.href,
                            });
                            checkAnalyticsZero = false;
                            checkAnalyticsFirst = true;
                            checkAnalyticsSecond = true;
                            checkAnalyticsThird = true;
                        }
                    } else {
                        //Managed display footer
                        /* $(".PM-slide-footer-container").addClass("d-none"); */
                        $(".PM-arrow-prev").removeClass("invisible");
                        $(".dots").removeClass("invisible");
                    }
                    //condition count slide drag
                    if (
                        this.x <= "-" + window.innerWidth / 2 &&
                        this.x >= "-" + window.innerWidth * 1.5
                    ) {
                        //$(".countSlide").text("01" + "/03");
                        activeSlide = 1;
                        //Analytics
                        if (checkAnalyticsFirst == true) {
                            dataLayer.push({
                                event: "myEni",
                                userLoginState: isLogged,
                                siteSection1: "guida-al-caro-bolletta",
                                siteSection2: "dubbi-sul-caro-bolletta",
                                from: "guida-al-caro-bolletta",
                                page_location:
                                    window.location.origin +
                                    window.location.pathname +
                                    "/dubbi-sul-caro-bolletta" +
                                    queryString,
                            });
                            checkAnalyticsFirst = false;
                            checkAnalyticsZero = true;
                            checkAnalyticsSecond = true;
                            checkAnalyticsThird = true;
                        }
                    } else if (
                        this.x <= "-" + window.innerWidth * 1.5 &&
                        this.x >= "-" + window.innerWidth * 2.5
                    ) {
                        //$(".countSlide").text("02" + "/03");
                        $(".PM-arrow-next").removeClass("invisible");
                        activeSlide = 2;
                        //Analytics
                        if (checkAnalyticsSecond == true) {
                            dataLayer.push({
                                event: "myEni",
                                userLoginState: isLogged,
                                siteSection1: "guida-al-caro-bolletta",
                                siteSection2: "11-mila-famiglie",
                                from: "dubbi-sul-caro-bolletta",
                                page_location:
                                    window.location.origin +
                                    window.location.pathname +
                                    "/11-mila-famiglie" +
                                    queryString,
                            });
                            checkAnalyticsSecond = false;
                            checkAnalyticsZero = true;
                            checkAnalyticsFirst = true;
                            checkAnalyticsThird = true;
                        }
                    } else if (
                        this.x <= "-" + window.innerWidth * 2.5 &&
                        this.x >= "-" + window.innerWidth * 4
                    ) {
                        //$(".countSlide").text("03" + "/03");
                        $(".PM-arrow-next").addClass("invisible");
                        //Analytics
                        if (checkAnalyticsThird == true) {
                            dataLayer.push({
                                event: "myEni",
                                userLoginState: isLogged,
                                siteSection1: "guida-al-caro-bolletta",
                                siteSection2: "parlaci_della_tua_casa",
                                from: "11-mila-famiglie",
                                page_location:
                                    window.location.origin +
                                    window.location.pathname +
                                    "/parlaci_della_tua_casa" +
                                    queryString,
                            });
                            checkAnalyticsThird = false;
                            checkAnalyticsZero = true;
                            checkAnalyticsFirst = true;
                            checkAnalyticsSecond = true;
                        }
                    }
                } else {
                    if (gsap.isTweening(container)) {
                        return;
                    }
                    // arrow clicks
                    if (
                        this.id === "leftArrow" ||
                        this.id === "rightArrow" ||
                        this.id === "medusaArrow" ||
                        this.id === "goToFirstSlide"
                    ) {
                        if (this.id === "leftArrow") {
                            activeSlide -= 1;
                            /* console.log('click indietro', dataLayer) */
                            if (activeSlide == 0) {
                                if (checkAnalyticsZero == true) {
                                    dataLayer.push({
                                        event: "myEni",
                                        userLoginState: isLogged,
                                        siteSection1: "guida-al-caro-bolletta",
                                        siteSection2: "guida-al-caro-bolletta",
                                        from: "dubbi-sul-caro-bolletta",
                                        page_location: window.location.href,
                                    });
                                    dataLayer.push({
                                        event: "customEvent",
                                        eventCategory: "Medusa",
                                        eventAction: "indietro",
                                        eventLabel: "dubbi sul caro bolletta",
                                    });
                                    checkAnalyticsZero = false;
                                    checkAnalyticsFirst = true;
                                    checkAnalyticsSecond = true;
                                    checkAnalyticsThird = true;
                                }
                            } else if (activeSlide == 1) {
                                if (checkAnalyticsFirst == true) {
                                    dataLayer.push({
                                        event: "myEni",
                                        userLoginState: isLogged,
                                        siteSection1: "guida-al-caro-bolletta",
                                        siteSection2: "dubbi-sul-caro-bolletta",
                                        from: "11-mila-famiglie",
                                        page_location:
                                            window.location.origin +
                                            window.location.pathname +
                                            "/dubbi-sul-caro-bolletta" +
                                            queryString,
                                    });
                                    dataLayer.push({
                                        event: "customEvent",
                                        eventCategory: "Medusa",
                                        eventAction: "indietro",
                                        eventLabel: "dubbi sul caro bolletta",
                                    });
                                    checkAnalyticsZero = true;
                                    checkAnalyticsFirst = false;
                                    checkAnalyticsSecond = true;
                                    checkAnalyticsThird = true;
                                }
                            } else if (activeSlide == 2) {
                                if (checkAnalyticsSecond == true) {
                                    dataLayer.push({
                                        event: "myEni",
                                        userLoginState: isLogged,
                                        siteSection1: "guida-al-caro-bolletta",
                                        siteSection2: "11-mila-famiglie",
                                        from: "parlaci_della_tua_casa",
                                        page_location:
                                            window.location.origin +
                                            window.location.pathname +
                                            "/11-mila-famiglie" +
                                            queryString,
                                    });
                                    dataLayer.push({
                                        event: "customEvent",
                                        eventCategory: "Medusa",
                                        eventAction: "indietro",
                                        eventLabel: "dubbi sul caro bolletta",
                                    });
                                    checkAnalyticsZero = true;
                                    checkAnalyticsFirst = true;
                                    checkAnalyticsSecond = false;
                                    checkAnalyticsThird = true;
                                }
                            }
                            $(".PM-arrow-next").removeClass("invisible");
                        } else if (this.id === "rightArrow") {
                            if (activeSlide == 0) {
                                //Managed display footer
                                $(".PM-arrow-prev").removeClass("invisible");
                                $(".dots").removeClass("invisible");
                                dataLayer.push({
                                    event: "customEvent",
                                    eventCategory: "Medusa",
                                    eventAction: "avanti",
                                    eventLabel: "guida al caro bolletta",
                                });
                            }
                            activeSlide += 1;
                        } else if (this.id === "goToFirstSlide") {
                            //Managed display footer
                            $(".PM-arrow-prev").removeClass("invisible");
                            $(".PM-arrow-next").removeClass("invisible");
                            $(".dots").removeClass("invisible");
                            dataLayer.push({
                                event: "customEvent",
                                eventCategory: "Medusa",
                                eventAction: "click",
                                eventLabel: "step0_leggidipiu",
                            });
                            activeSlide += 1;
                        }

                        if (activeSlide == 0) {
                            //Managed display footer
                            /* $(".PM-slide-footer-container").addClass("d-none"); */
                            $(".PM-arrow-prev").addClass("invisible");
                            $(".PM-arrow-next").addClass("invisible");
                            $(".dots").addClass("invisible");
                        }

                        if (this.dataset.medusa === "torna-indietro") {
                            activeSlide = 3;
                            //$(".countSlide").text("03" + "/03");
                            dataLayer.push({
                                event: "myEni",
                                userLoginState: isLogged,
                                siteSection1: "guida_al_caro_bolletta",
                                siteSection2: "parlaci_della_tua_casa",
                                from: "sei_cliente_Plenitude",
                                page_location:
                                    window.location.origin +
                                    window.location.pathname +
                                    "/parlaci_della_tua_casa" +
                                    queryString,
                            });
                            dataLayer.push({
                                event: "customEvent",
                                eventCategory: "Medusa",
                                eventAction: "indietro",
                                eventLabel: "parlaci della tua casa",
                            });
                        } else if (activeSlide == 1) {
                            if (checkAnalyticsFirst == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "dubbi-sul-caro-bolletta",
                                    from: "guida-al-caro-bolletta",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/dubbi-sul-caro-bolletta" +
                                        queryString,
                                });
                                checkAnalyticsZero = true;
                                checkAnalyticsFirst = false;
                                checkAnalyticsSecond = true;
                                checkAnalyticsThird = true;
                            }
                        } else if (activeSlide == 2) {
                            if (checkAnalyticsSecond == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "11-mila-famiglie",
                                    from: "dubbi-sul-caro-bolletta",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/11-mila-famiglie" +
                                        queryString,
                                });
                                dataLayer.push({
                                    event: "customEvent",
                                    eventCategory: "Medusa",
                                    eventAction: "avanti",
                                    eventLabel: "dubbi sul caro bolletta",
                                });
                                checkAnalyticsZero = true;
                                checkAnalyticsFirst = true;
                                checkAnalyticsSecond = false;
                                checkAnalyticsThird = true;
                            }
                        } else if (activeSlide == 3) {
                            if (checkAnalyticsThird == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "parlaci_della_tua_casa",
                                    from: "11-mila-famiglie",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/parlaci_della_tua_casa" +
                                        queryString,
                                });
                                dataLayer.push({
                                    event: "customEvent",
                                    eventCategory: "Medusa",
                                    eventAction: "avanti",
                                    eventLabel: "11 mila famiglie",
                                });
                                checkAnalyticsZero = true;
                                checkAnalyticsFirst = true;
                                checkAnalyticsSecond = true;
                                checkAnalyticsThird = false;
                            }
                            $(".PM-arrow-next").addClass("invisible");
                        }
                        // click on a dot
                    } else if (this.className === "dot") {
                        activeSlide = this.index;
                        //$(".countSlide").text("0" + activeSlide + "/03");
                        //Analytics click dots
                        if (activeSlide == 1) {
                            if (checkAnalyticsFirst == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "dubbi-sul-caro-bolletta",
                                    from: "guida-al-caro-bolletta",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/dubbi-sul-caro-bolletta" +
                                        queryString,
                                });
                                checkAnalyticsZero = true;
                                checkAnalyticsFirst = false;
                                checkAnalyticsSecond = true;
                                checkAnalyticsThird = true;
                            }
                        } else if (activeSlide == 2) {
                            if (checkAnalyticsSecond == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "11-mila-famiglie",
                                    from: "dubbi-sul-caro-bolletta",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/11-mila-famiglie" +
                                        queryString,
                                });
                                checkAnalyticsZero = true;
                                checkAnalyticsFirst = true;
                                checkAnalyticsSecond = false;
                                checkAnalyticsThird = true;
                            }
                        } else if (activeSlide == 3) {
                            if (checkAnalyticsThird == true) {
                                dataLayer.push({
                                    event: "myEni",
                                    userLoginState: isLogged,
                                    siteSection1: "guida-al-caro-bolletta",
                                    siteSection2: "parlaci_della_tua_casa",
                                    from: "11-mila-famiglie",
                                    page_location:
                                        window.location.origin +
                                        window.location.pathname +
                                        "/parlaci_della_tua_casa" +
                                        queryString,
                                });
                                checkAnalyticsZero = true;
                                checkAnalyticsFirst = true;
                                checkAnalyticsSecond = true;
                                checkAnalyticsThird = false;
                            }
                        }
                        //check number slide for dots
                        if (activeSlide != 0) {
                            $(".PM-slide-footer-container").removeClass("d-none");
                            //Managed display footer
                            /* $(".PM-slide-footer-container").addClass("d-none"); */
                            $(".PM-arrow-prev").removeClass("invisible");
                            $(".dots").removeClass("invisible");
                        } else if (activeSlide == 0) {
                            //Managed display footer
                            /* $(".PM-slide-footer-container").addClass("d-none"); */
                            $(".PM-arrow-prev").addClass("invisible");
                            $(".dots").addClass("invisible");
                            checkAnalyticsZero = false;
                            checkAnalyticsFirst = true;
                            checkAnalyticsSecond = true;
                            checkAnalyticsThird = true;
                        }
                        //check last slide d-none arrow next
                        if (activeSlide >= 3) {
                            $(".PM-arrow-next").addClass("invisible");
                        } else {
                            $(".PM-arrow-next").removeClass("invisible");
                        }
                        // scrollwheel
                    } else {
                        if (
                            $("#exampleModalLong").hasClass("show") ||
                            $("#exampleModalLong-2").hasClass("show")
                        ) {
                        } else {
                            scrollCount =
                                scrollCount < 0 ? (scrollCount = 0) : (scrollCount += e.deltaY);
                            scrollCount =
                                scrollCount > 1500 ? (scrollCount = 1500) : scrollCount;
                            scrollRapporto = Math.floor(scrollCount / 500);
                            if (
                                scrollRapporto == 0 ||
                                scrollRapporto == 1 ||
                                scrollRapporto == 2 ||
                                scrollRapporto == 3
                            ) {
                                activeSlide = scrollRapporto;
                            }
                            //check negative number slide
                            if (activeSlide < 0) {
                                activeSlide = 0;
                            }
                            //check number slide for dots
                            if (activeSlide == 0) {
                                //Managed display footer
                                /* $(".PM-slide-footer-container").addClass("d-none"); */
                                $(".PM-arrow-prev").addClass("invisible");
                                $(".PM-arrow-next").addClass("invisible");
                                $(".dots").addClass("invisible");
                            } else if (activeSlide > 0) {
                                //Managed display footer
                                /* $(".PM-slide-footer-container").addClass("d-none"); */
                                $(".PM-arrow-prev").removeClass("invisible");
                                $(".dots").removeClass("invisible");
                                $(".PM-arrow-next").removeClass("invisible");
                            }
                            //check last slide d-none arrow next
                            if (activeSlide >= 3) {
                                $(".PM-arrow-next").addClass("invisible");
                            }
                            //Analytics
                            if (activeSlide <= 0) {
                                if (checkAnalyticsZero == true) {
                                    dataLayer.push({
                                        event: "myEni",
                                        userLoginState: isLogged,
                                        siteSection1: "guida-al-caro-bolletta",
                                        siteSection2: "guida-al-caro-bolletta",
                                        from: "guida-al-caro-bolletta",
                                        page_location: window.location.href,
                                    });
                                    checkAnalyticsZero = false;
                                    checkAnalyticsFirst = true;
                                    checkAnalyticsSecond = true;
                                    checkAnalyticsThird = true;
                                }
                            } else if (activeSlide == 1) {
                                if (checkAnalyticsFirst == true) {
                                    dataLayer.push({
                                        event: "myEni",
                                        userLoginState: isLogged,
                                        siteSection1: "guida-al-caro-bolletta",
                                        siteSection2: "dubbi-sul-caro-bolletta",
                                        from: "guida-al-caro-bolletta",
                                        page_location:
                                            window.location.origin +
                                            window.location.pathname +
                                            "/dubbi-sul-caro-bolletta" +
                                            queryString,
                                    });
                                    checkAnalyticsFirst = false;
                                    checkAnalyticsZero = true;
                                    checkAnalyticsSecond = true;
                                    checkAnalyticsThird = true;
                                }
                            } else if (activeSlide == 2) {
                                if (checkAnalyticsSecond == true) {
                                    dataLayer.push({
                                        event: "myEni",
                                        userLoginState: isLogged,
                                        siteSection1: "guida-al-caro-bolletta",
                                        siteSection2: "11-mila-famiglie",
                                        from: "dubbi-sul-caro-bolletta",
                                        page_location:
                                            window.location.origin +
                                            window.location.pathname +
                                            "/11-mila-famiglie" +
                                            queryString,
                                    });
                                    checkAnalyticsSecond = false;
                                    checkAnalyticsZero = true;
                                    checkAnalyticsFirst = true;
                                    checkAnalyticsThird = true;
                                }
                            } else if (activeSlide >= 3) {
                                if (checkAnalyticsThird == true) {
                                    dataLayer.push({
                                        event: "myEni",
                                        userLoginState: isLogged,
                                        siteSection1: "guida-al-caro-bolletta",
                                        siteSection2: "parlaci_della_tua_casa",
                                        from: "11-mila-famiglie",
                                        page_location:
                                            window.location.origin +
                                            window.location.pathname +
                                            "/parlaci_della_tua_casa" +
                                            queryString,
                                    });
                                    checkAnalyticsThird = false;
                                    checkAnalyticsZero = true;
                                    checkAnalyticsFirst = true;
                                    checkAnalyticsSecond = true;
                                }
                            }
                        }
                    }
                }
                // make sure we're not past the end or beginning slide
                activeSlide = activeSlide < 0 ? 0 : activeSlide;
                activeSlide =
                    activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
                if (oldSlide === activeSlide) {
                    return;
                }
                // if we're dragging we don't animate the container
                if (this.id != "dragger") {
                    gsap.to(container, dur, {
                        x: offsets[activeSlide],
                        onUpdate: tweenDot,
                    });
                }
            }

            // update the draggable element snap points
            function sizeIt() {
                offsets = [];
                iw = window.innerWidth;
                gsap.set("#PM-content-slide", { width: slides.length * iw });
                gsap.set(slides, { width: iw });
                for (let i = 0; i < slides.length; i++) {
                    offsets.push(-slides[i].offsetLeft);
                }
                gsap.set(container, { x: offsets[activeSlide] });
                //dragMe[0].vars.snap = offsets;
            }

            gsap.set(".ProjectMedusa-container", { opacity: 1 });
            window.addEventListener("wheel", slideAnim);
            window.addEventListener("resize", sizeIt);

            // update dot animation when dragger moves
            function tweenDot() {
                gsap.set(dotAnim, {
                    time: Math.abs(gsap.getProperty(container, "x") / iw) + 1,
                });
            }
        }
        // Timer first animation blur
        $(document).ready(function () {
            const timerAnimationBlur = setTimeout(animationBlur, 1500);
            $(".Medusa-placeholder").addClass("opacity0");
        });

        function animationBlur() {
            $(".PM-first-slide-text-container").addClass(
                "PM-first-slide-text-container-active"
            );
            $(".PM-slide-image-container").addClass(
                "PM-slide-image-container-active"
            );
            $(".PM-arrow-next").addClass("PM-arrow-next-active");
            $(".PM-element-scroll-container").addClass(
                "PM-element-scroll-container-active"
            );
            $(".PM-first-slide-logo").addClass("PM-first-slide-logo-active");
        }
        var medusaTsStateButton = false;
        $(
            ".PM-fourth-slide button, .PM-fourth-slide .medusa-button, .goToTShoot"
        ).on("click", function () {
            if (medusaTsStateButton == true) {
                $(".ProjectMedusa-container").addClass("troubleshoot-sfondo");
                $(".ProjectMedusa-content").removeClass(
                    "medusa-troubleshooting-revert"
                );
                $(
                    ".ProjectMedusa-container #PM-container-slide, .ProjectMedusa-container-mobile .ProjectMedusa-content-mobile"
                ).removeClass("medusa-troubleshooting-revert");
                $(".ProjectMedusa-container .PM-slide-footer-content").removeClass(
                    "medusa-troubleshooting-revert"
                );
                $(
                    ".ProjectMedusa-container #PM-container-slide, .ProjectMedusa-container-mobile #PM-container-slide"
                ).removeClass("medusa-troubleshooting-revert");
                $(".ProjectMedusa-container .PM-slide-footer-content").removeClass(
                    "medusa-troubleshooting-revert"
                );
                $(".ProjectMedusa-content").removeClass("d-none");
                $(".medusa-troubleshooting-container").removeClass("medusa-indietro");
            } else {
                $(
                    ".ProjectMedusa-container #PM-container-slide, .ProjectMedusa-container-mobile #PM-container-slide"
                ).addClass("medusa-troubleshooting");
                $(".ProjectMedusa-container .PM-slide-footer-content").addClass(
                    "medusa-troubleshooting"
                );
                $(".ProjectMedusa-container").addClass("troubleshoot-sfondo");
                setTimeout(function () {
                    $(
                        ".ProjectMedusa-container #PM-container-slide, .ProjectMedusa-container-mobile .ProjectMedusa-content-mobile"
                    ).addClass("medusa-troubleshooting-translateX");
                    $(".ProjectMedusa-container .PM-slide-footer-content").addClass(
                        "medusa-troubleshooting-translateX"
                    );
                }, 500);
                setTimeout(function () {
                    $(".ProjectMedusa-content").addClass("d-none");
                }, 1000);
                medusaTsStateButton = true;
            }
        });

        $('[data-medusa="torna-indietro"]').on("click", function () {
            $(".medusa-troubleshooting-container").addClass("medusa-indietro");
            $(".ProjectMedusa-content").addClass("medusa-troubleshooting-revert");
            setTimeout(function () {
                $(
                    ".ProjectMedusa-container #PM-container-slide, .ProjectMedusa-container-mobile .ProjectMedusa-content-mobile"
                ).addClass("medusa-troubleshooting-revert");
                $(".ProjectMedusa-container .PM-slide-footer-content").addClass(
                    "medusa-troubleshooting-revert"
                );
            }, 100);
            setTimeout(function () {
                $(
                    ".ProjectMedusa-container #PM-container-slide, .ProjectMedusa-container-mobile #PM-container-slide"
                ).addClass("medusa-troubleshooting-revert");
                $(".ProjectMedusa-container .PM-slide-footer-content").addClass(
                    "medusa-troubleshooting-revert"
                );
            }, 100);
            setTimeout(function () {
                $(".ProjectMedusa-container").removeClass("troubleshoot-sfondo");
            }, 700);
            setTimeout(function () {
                $(".PM-arrow-prev").removeClass("invisible");
                $(".dots").removeClass("invisible");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-si"]:not(button)'
                ).removeClass("d-flex");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-no"]:not(button)'
                ).removeClass("d-flex");
                $(
                    '.medusa-troubleshooting-container [data-ts-type="step"] button[data-ts-step]'
                ).removeClass("active");
                $(".ts-prima-domanda-primo-div").removeClass("ts-prima-domanda");
                $(".ts-prima-domanda-primo-div").parent().removeClass("active");
                $(
                    '.medusa-troubleshooting-container [data-ts-type="step-dettaglio"] button'
                ).removeClass("active");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-si-dettaglio"]:not(button)'
                ).removeClass("d-flex");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-no-dettaglio"]:not(button)'
                ).removeClass("d-flex");
                $('[data-bubble="edificio"').removeClass("active");
                $('[data-bubble="edificio"').removeClass("non-selezionata");
                $('[data-scelta="casa"].ts-bubbles-subrow').addClass("d-none");
                $('[data-scelta="condominio"].ts-bubbles-subrow').addClass("d-none");
                $(".ts-bubbles-container").removeClass("scelta-condominio");
                $('[data-scelta="condominio"]').parent().addClass("no-overflow");
                $(".ts-bubbles-subrow .ts-bubbles-casa").removeClass("active");
                $(".ts-bubbles-subrow .ts-bubbles-casa").removeClass("non-selezionata");
                $('[data-scelta="Centralizzato"].ts-bubbles-subrow').addClass("d-none");
                $('[data-scelta="Autonomo"].ts-bubbles-subrow').addClass("d-none");
                $("#scopri-di-piu").addClass("d-none");
                $(".ts-prima-domanda-primo-div").removeClass("d-none");
                $(
                    ".d-none.flex-column.align-items-center.ts-step-container.d-flex"
                ).removeClass("cambio-layout");
                $(".d-none.flex-column.align-items-center.ts-step-container.d-flex")
                    .children()
                    .removeClass("d-none");
            }, 600);
            checkAnalyticsZero = true;
            checkAnalyticsFirst = true;
            checkAnalyticsSecond = true;
            checkAnalyticsThird = true;
        });

        $(
            '.medusa-troubleshooting-container [data-ts-type="step"] button[data-ts-step]'
        ).on("click", function () {
            $(this).parent().find("button").not(this).removeClass("active");
            $(this).addClass("active");
            let thisAttr = $(this).attr("data-ts-step");
            if (thisAttr == "sei-cliente-si") {
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-si"]:not(button)'
                ).addClass("d-flex");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-no"]:not(button)'
                ).removeClass("d-flex");
            } else {
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-no"]:not(button)'
                ).addClass("d-flex");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-si"]:not(button)'
                ).removeClass("d-flex");
            }
            $(".ts-prima-domanda-primo-div").addClass("ts-prima-domanda");
            $(".ts-prima-domanda-primo-div").parent().addClass("active");
            /* reset */
            /*   $('.ProjectMedusa-container').css('height', '100%') */
        });
        $(
            '.medusa-troubleshooting-container [data-ts-type="step-dettaglio"] button'
        ).on("click", function () {
            $(this).parent().find("button").not(this).removeClass("active");
            $(this).addClass("active");
            let thisAttr = $(this).attr("data-ts-step");
            if (thisAttr == "sei-cliente-si-dettaglio") {
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-si-dettaglio"]:not(button)'
                ).addClass("d-flex");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-no-dettaglio"]:not(button)'
                ).removeClass("d-flex");
            } else {
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-no-dettaglio"]:not(button)'
                ).addClass("d-flex");
                $(
                    '.medusa-troubleshooting-container [data-ts-step="sei-cliente-si-dettaglio"]:not(button)'
                ).removeClass("d-flex");
            }
        });

        $('[data-bubble="edificio"').on("click", function () {
            $(this).parent().find(".ts-bubbles-casa").not(this).removeClass("active");
            $(this)
                .parent()
                .find(".ts-bubbles-casa")
                .not(this)
                .addClass("non-selezionata");
            $(this).addClass("active");
            $(this).removeClass("non-selezionata");
            setTimeout(function () {
                let scrollBottom =
                    $(".medusa-troubleshooting-container").scrollTop() +
                    $(".medusa-troubleshooting-container").height();
                let scrollBottomMobile =
                    $(
                        ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                    ).scrollTop() +
                    $(
                        ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                    ).height();
                $(window).animate(
                    {
                        scrollTop: scrollBottom,
                    },
                    "smooth"
                );
                $(
                    ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                ).animate(
                    {
                        scrollTop: scrollBottomMobile,
                    },
                    "smooth"
                );
            }, 350);
            if ($(this).attr("data-scelta") == "casa") {
                $('[data-scelta="casa"].ts-bubbles-subrow').removeClass("d-none");
                $('[data-scelta="condominio"].ts-bubbles-subrow').addClass("d-none");
                $(".ts-bubbles-container").removeClass("scelta-condominio");
                $('[data-scelta="condominio"]').parent().removeClass("no-overflow");
            } else if ($(this).attr("data-scelta") == "condominio") {
                $('[data-scelta="casa"].ts-bubbles-subrow').addClass("d-none");
                $('[data-scelta="condominio"].ts-bubbles-subrow').removeClass("d-none");
                $(".ts-bubbles-container").addClass("scelta-condominio");
                $('[data-scelta="condominio"]').parent().addClass("no-overflow");
            }
            $(".ts-bubbles-subrow .ts-bubbles-casa").removeClass("active");
            $(".ts-bubbles-subrow .ts-bubbles-casa").removeClass("non-selezionata");
            $('[data-scelta="Centralizzato"].ts-bubbles-subrow').addClass("d-none");
            $('[data-scelta="Autonomo"].ts-bubbles-subrow').addClass("d-none");
            $("#scopri-di-piu").addClass("d-none");
        });

        $(".ts-bubbles-subrow .ts-bubbles-casa:not(.seconda-row)").on(
            "click",
            function () {
                setTimeout(function () {
                    let scrollBottom =
                        $(".medusa-troubleshooting-container").scrollTop() +
                        $(".medusa-troubleshooting-container").height();
                    let scrollBottomMobile =
                        $(
                            ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                        ).scrollTop() +
                        $(
                            ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                        ).height();
                    $(window).animate(
                        {
                            scrollTop: scrollBottom,
                        },
                        "smooth"
                    );
                    $(
                        ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                    ).animate(
                        {
                            scrollTop: scrollBottomMobile,
                        },
                        "smooth"
                    );
                }, 350);
                $(this)
                    .parent()
                    .find(".ts-bubbles-casa")
                    .not(".ts-bubbles-casa.active")
                    .addClass("non-selezionata");
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active");
                    $(this).removeClass("non-selezionata");
                } else {
                    $(this).removeClass("active");
                    $(this).addClass("non-selezionata");
                }
                if (
                    $('[data-scelta="casa"].ts-bubbles-subrow .ts-bubbles-casa').hasClass(
                        "active"
                    )
                ) {
                    $("#scopri-di-piu").removeClass("d-none");
                    $("#scopri-di-piu").addClass("opacity1");
                } else {
                    $("#scopri-di-piu").addClass("d-none");
                }
                if (
                    $(
                        '.ProjectMedusa-container-mobile [data-scelta="casa"].ts-bubbles-subrow .ts-bubbles-casa'
                    ).hasClass("active")
                ) {
                    $(".ProjectMedusa-container-mobile #scopri-di-piu").removeClass(
                        "d-none"
                    );
                    $(".ProjectMedusa-container-mobile #scopri-di-piu").addClass(
                        "opacity1"
                    );
                } else {
                    $(".ProjectMedusa-container-mobile #scopri-di-piu").addClass(
                        "d-none"
                    );
                }
            }
        );

        $(".ts-bubbles-subrow.prima-row-condominio .ts-bubbles-casa.prima-row").on(
            "click",
            function () {
                //console.log('bubble dopo condominio')
                setTimeout(function () {
                    let scrollBottom =
                        $(".medusa-troubleshooting-container").scrollTop() +
                        $(".medusa-troubleshooting-container").height();
                    let scrollBottomMobile =
                        $(
                            ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                        ).scrollTop() +
                        $(
                            ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                        ).height();
                    $(window).animate(
                        {
                            scrollTop: scrollBottom,
                        },
                        "smooth"
                    );
                    $(
                        ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                    ).animate(
                        {
                            scrollTop: scrollBottomMobile,
                        },
                        "smooth"
                    );
                }, 350);
                $(this)
                    .parent()
                    .find(".ts-bubbles-casa")
                    .not(this)
                    .removeClass("active");
                $(this)
                    .parent()
                    .find(".ts-bubbles-casa")
                    .not(this)
                    .addClass("non-selezionata");
                $(this).addClass("active");
                $(this).removeClass("non-selezionata");
                if ($(this).attr("data-scelta") == "Autonomo") {
                    $('[data-scelta="Autonomo"].ts-bubbles-subrow').removeClass("d-none");
                    $('[data-scelta="Centralizzato"].ts-bubbles-subrow').addClass(
                        "d-none"
                    );
                } else if ($(this).attr("data-scelta") == "Centralizzato") {
                    $('[data-scelta="Autonomo"].ts-bubbles-subrow').addClass("d-none");
                    $('[data-scelta="Centralizzato"].ts-bubbles-subrow').removeClass(
                        "d-none"
                    );
                }
                $(
                    ".ts-bubbles-casa-row.ts-bubbles-subrow.prima-row-condominio .ts-bubbles-casa-row.ts-bubbles-subrow .ts-bubbles-casa.seconda-row"
                ).removeClass("active");
            }
        );

        $(
            ".ts-bubbles-casa-row.ts-bubbles-subrow.prima-row-condominio .ts-bubbles-casa-row.ts-bubbles-subrow .ts-bubbles-casa.seconda-row"
        ).on("click", function () {
            $(this)
                .parent()
                .find(".ts-bubbles-casa")
                .not(".ts-bubbles-casa.active")
                .addClass("non-selezionata");
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
                $(this).removeClass("non-selezionata");
            } else {
                $(this).removeClass("active");
                $(this).addClass("non-selezionata");
            }
            if (
                $(
                    ".ts-bubbles-casa-row.ts-bubbles-subrow.prima-row-condominio .ts-bubbles-casa-row.ts-bubbles-subrow .ts-bubbles-casa.seconda-row"
                ).hasClass("active")
            ) {
                $("#scopri-di-piu").removeClass("d-none");
                $("#scopri-di-piu").addClass("opacity1");
                setTimeout(function () {
                    let scrollBottom =
                        $(".medusa-troubleshooting-container").scrollTop() +
                        $(".medusa-troubleshooting-container").height();
                    let scrollBottomMobile =
                        $(
                            ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                        ).scrollTop() +
                        $(
                            ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                        ).height();
                    $(window).animate(
                        {
                            scrollTop: scrollBottom,
                        },
                        "smooth"
                    );
                    $(
                        ".ProjectMedusa-container-mobile .d-flex.flex-column.align-items-center.primo-div-ts-domande.active"
                    ).animate(
                        {
                            scrollTop: scrollBottomMobile,
                        },
                        "smooth"
                    );
                }, 350);
            } else {
                $("#scopri-di-piu").addClass("d-none");
            }
            if (
                $(
                    ".ProjectMedusa-container-mobile .ts-bubbles-casa-row.ts-bubbles-subrow.prima-row-condominio .ts-bubbles-casa-row.ts-bubbles-subrow .ts-bubbles-casa.seconda-row"
                ).hasClass("active")
            ) {
                $(".ProjectMedusa-container-mobile #scopri-di-piu").removeClass(
                    "d-none"
                );
                $(".ProjectMedusa-container-mobile #scopri-di-piu").addClass(
                    "opacity1"
                );
            } else {
                $(".ProjectMedusa-container-mobile #scopri-di-piu").addClass("d-none");
            }
        });

        //Open modal
        $(".PM-bubble-container").click(function () {
            $(".PM-modal-body-content").addClass("modal-animation");
        });

        $(".PM-close").click(function () {
            $(".PM-modal-body-content").removeClass("modal-animation");
            setTimeout(function () {
                $("#PM-first-modal").addClass("d-none");
                $("#PM-second-modal").addClass("d-none");
                $("#PM-third-modal").addClass("d-none");
            }, 500);
        });

        const riepilogoSections = $(".PM-modal-body-content [data-riepilogo]");

        $("#scopri-di-piu button").click(function () {
            var arrayRiepilogoBubbles = [];
            $(".ts-bubbles-subrow .ts-bubbles-casa.active").each(function () {
                let thisRiepilogo = $(this).attr("data-riepilogo");
                arrayRiepilogoBubbles.push(thisRiepilogo);
            });
            $("#riepilogoTS .PM-modal-body-content [data-riepilogo]").remove();
            arrayRiepilogoBubbles.forEach((element) => {
                riepilogoSections.each(function () {
                    let thisSection = $(this);
                    let sezioneRiepilogoAttr = $(this).attr("data-riepilogo");
                    if (sezioneRiepilogoAttr == element) {
                        $("#riepilogoTS .PM-modal-body-content").append(thisSection);
                    }
                });
            });
            $(".PM-modal-body-content").addClass("modal-animation");
        });

        $(".PM-close").click(function () {
            $(".PM-modal-body-content").removeClass("modal-animation");
            $(".PM-modal-body-content [data-riepilogo]").remove();
            riepilogoSections.each(function () {
                $("#riepilogoTS .PM-modal-body-content").append($(this));
            });
        });

        $('[data-ts-step="sei-cliente-no-dettaglio"] .medusa-button').click(
            function () {
                $(
                    '.medusa-troubleshooting-container [data-ts-type="step"] button[data-ts-step="sei-cliente-si"]'
                ).click();
                $(".ts-prima-domanda-primo-div.ts-prima-domanda").addClass("d-none");
                $(".d-none.flex-column.align-items-center.ts-step-container.d-flex")
                    .children()
                    .addClass("d-none");
                $(
                    ".d-none.flex-column.align-items-center.ts-step-container.d-flex"
                ).addClass("cambio-layout");
            }
        );
        $(".PM-content-chips .chips").on("click", function () {
            $(".PM-content-chips .chips").each(function () {
                $(this).removeClass("active");
            });
            $(this).addClass("active");
            let data = $(this).attr("data-chip");
            $(".chips-link-container").each(function () {
                $(this).addClass("d-none");
                if ($(this).attr("data-chip") == data) {
                    $(this).removeClass("d-none");
                }
            });
        });
        /// ANALYTICS

        window.dataLayer = window.dataLayer || [];

        var isLogged = "";

        let getUser = function () {
            var t = this;
            return (
                jQuery
                    .ajax({
                        url:
                            window.SERVICE_BASE_URL +
                            "/domm-ajaxredir/backend-controller-switchin/webOrder/getInfoUtente",
                        type: "POST",
                        data: JSON.stringify({
                            operationId: "qwertyuiop1234",
                        }),
                        xhrFields: {
                            withCredentials: true,
                        },
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                    })
                    .done(function () {
                        isLogged = "no";
                    })
                    .fail(function () {
                        isLogged = "yes";
                    }),
                    !0
            );
        };

        getUser();

        //Analytics slide opening
        if (checkAnalyticsZero == true) {
            const timeoutFirstPush = setTimeout(firstPush, 500);
            function firstPush() {
                dataLayer.push({
                    event: "myEni",
                    userLoginState: isLogged,
                    siteSection1: "guida-al-caro-bolletta",
                    siteSection2: "guida-al-caro-bolletta",
                    from: "guida-al-caro-bolletta",
                    page_location: window.location.href,
                });
            }
            checkAnalyticsZero = false;
        }

        //////// P17 ////////

        /*     $(".PM-bubble-container:first-child").on("click", function () {
          dataLayer.push({
            event: "customEvent",
            eventCategory: "Medusa",
            eventAction: "click",
            eventLabel: "dubbi sul caro bolletta - mercato energetico",
          });
          //Virtual PageView
          dataLayer.push({
            event: "myEni",
            userLoginState: isLogged,
            siteSection1: "guida-al-caro-bolletta",
            siteSection2: "mercato_dell_energia",
            from: "dubbi-sul-caro-bolletta",
            page_location: window.location.origin + window.location.pathname + "/mercato_dell_energia" + queryString,
          });
        });

        $(".PM-bubble-container:nth-child(2)").on("click", function () {
          dataLayer.push({
            event: "customEvent",
            eventCategory: "Medusa",
            eventAction: "click",
            eventLabel: "dubbi sul caro bolletta - governo",
          });
          //Virtual PageView
          dataLayer.push({
            event: "myEni",
            userLoginState: isLogged,
            siteSection1: "guida-al-caro-bolletta",
            siteSection2: "mercato_dell_energia",
            from: "dubbi-sul-caro-bolletta",
            page_location: window.location.origin + window.location.pathname + "/mercato_dell_energia" + queryString,
          });
        });

        $(".PM-bubble-container:nth-child(3)").on("click", function () {
          dataLayer.push({
            event: "customEvent",
            eventCategory: "Medusa",
            eventAction: "click",
            eventLabel: "dubbi sul caro bolletta - servizi utili",
          });
          //Virtual PageView
          dataLayer.push({
            event: "myEni",
            userLoginState: isLogged,
            siteSection1: "guida-al-caro-bolletta",
            siteSection2: "mercato_dell_energia",
            from: "dubbi-sul-caro-bolletta",
            page_location: window.location.origin + window.location.pathname + "/mercato_dell_energia" + queryString,
          });
        }); */

        $(".PM-fourth-slide .medusa-button").on("click", function () {
            dataLayer.push({
                event: "customEvent",
                eventCategory: "Medusa",
                eventAction: "inizia la simulazione",
                eventLabel: "parlaci della tua casa",
            });
            //Virtual PageView
            dataLayer.push({
                event: "myEni",
                userLoginState: isLogged,
                siteSection1: "guida-al-caro-bolletta",
                siteSection2: "sei_cliente_Plenitude",
                from: "parlaci_della_tua_casa",
                page_location:
                    window.location.origin +
                    window.location.pathname +
                    "/sei_cliente_Plenitude" +
                    queryString,
            });
            checkAnalyticsZero = false;
            checkAnalyticsFirst = false;
            checkAnalyticsSecond = false;
            checkAnalyticsThird = false;
        });

        /* analytics rework medusa ottobre 2022 */
        $(".goToTShoot").on("click", function () {
            dataLayer.push({
                event: "customEvent",
                eventCategory: "Medusa",
                eventAction: "click",
                eventLabel: "step0_vaiatuttelesoluzioni",
            });
            dataLayer.push({
                event: "myEni",
                userLoginState: isLogged,
                siteSection1: "guida-al-caro-bolletta",
                siteSection2: "sei_cliente_Plenitude",
                from: "guida-al-caro-bolletta",
                page_location:
                    window.location.origin +
                    window.location.pathname +
                    "/sei_cliente_Plenitude" +
                    queryString,
            });
            checkAnalyticsZero = false;
            checkAnalyticsFirst = false;
            checkAnalyticsSecond = false;
            checkAnalyticsThird = false;
        });
        $(".chips-link-container a").on("click", function () {
            dataLayer.push({
                event: "customEvent",
                eventCategory: "Medusa",
                eventAction: "click",
                eventLabel: $(this).attr("href"),
            });
        });
        //////// P19 ////////

        let checkClientePlenitudeSi = true;
        let checkClientePlenitudeNo = true;

        $(
            '.medusa-troubleshooting-container .primo-div-ts-domande .ts-prima-domanda-primo-div [data-ts-step="sei-cliente-si"]'
        ).on("click", function () {
            const prova = setTimeout(prooova, 500);
            function prooova() {
                if (checkClientePlenitudeSi == true) {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Medusa",
                        eventAction: "Sei cliente Plenitude",
                        eventLabel: "si",
                    });
                }
            }
        });

        $(
            '.medusa-troubleshooting-container .primo-div-ts-domande .ts-prima-domanda-primo-div [data-ts-step="sei-cliente-no"]'
        ).on("click", function () {
            dataLayer.push({
                event: "customEvent",
                eventCategory: "Medusa",
                eventAction: "Sei cliente Plenitude",
                eventLabel: "no",
            });
        });

        //////// P 21 ////////

        $(
            '.primo-div-ts-domande .ts-step-container [data-ts-step="sei-cliente-si-dettaglio"]'
        ).on("click", function () {
            dataLayer.push({
                event: "customEvent",
                eventCategory: "Medusa",
                eventAction: "sottoscrizione altro fornitore 2022",
                eventLabel: "sì",
            });
            checkAltroFornitoreNo = true;
        });

        let checkAltroFornitoreNo = true;

        $(
            '.primo-div-ts-domande .ts-step-container [data-ts-step="sei-cliente-no-dettaglio"]'
        ).on("click", function () {
            if (checkAltroFornitoreNo == true) {
                dataLayer.push({
                    event: "customEvent",
                    eventCategory: "Medusa",
                    eventAction: "sottoscrizione altro fornitore 2022",
                    eventLabel: "no",
                });
                checkAltroFornitoreNo = false;
            }
        });

        $(
            '.primo-div-ts-domande .ts-step-container [data-ts-step="sei-cliente-no-dettaglio"] .button-troubleshooting-no'
        ).on("click", function () {
            dataLayer.push({
                event: "customEvent",
                eventCategory: "Medusa",
                eventAction: "sottoscrizione altro fornitore 2022",
                eventLabel: "no – scopri le soluzioni",
            });
            checkClientePlenitudeSi = false;
            checkAltroFornitoreNo = false;
        });

        //////// P24 ////////

        var checkCasa = "";
        var checkCondominio = "";

        $(
            ".ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa.casa-indipendente"
        ).on("click", function () {
            if ($(this).hasClass("active")) {
                checkCasa = "Casa indipendente";
            }
            if (
                $(
                    ".ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa.condominio"
                ).hasClass("non-selezionata")
            ) {
                checkCondominio = "";
            }
        });

        $(
            ".ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa.condominio"
        ).on("click", function () {
            if ($(this).hasClass("active")) {
                checkCondominio = "Condominio";
            }
            if (
                $(
                    ".ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa.casa-indipendente"
                ).hasClass("non-selezionata")
            ) {
                checkCasa = "";
            }
        });

        $(
            '.ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa[data-scelta="casa"]'
        ).on("click", function () {
            if ($(this).hasClass("active")) {
                checkCasa = "Casa indipendente";
            }
            if (
                $(
                    '.ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa[data-scelta="condominio"]'
                ).hasClass("non-selezionata")
            ) {
                checkCondominio = "";
            }
        });

        $(
            '.ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa[data-scelta="condominio"]'
        ).on("click", function () {
            if ($(this).hasClass("active")) {
                checkCondominio = "Condominio";
            }
            if (
                $(
                    '.ts-bubble-row-scroll-container .ts-bubbles-casa-row .ts-bubbles-casa[data-scelta="casa"]'
                ).hasClass("non-selezionata")
            ) {
                checkCasa = "";
            }
        });

        $('#scopri-di-piu [data-target="#riepilogoTS"]').on("click", function () {
            if (checkCasa == "Casa indipendente") {
                //Casa indipendente
                let arrayTroubleshootingCasa = Array.from(
                    $(".ts-bubbles-casa.active")
                ).map((v) => v.innerText);
                var arrayLastWordCasa = [];
                for (let i = 1; i < arrayTroubleshootingCasa.length; i++) {
                    let lastWordCasa = arrayTroubleshootingCasa[i].split(" ").pop();
                    arrayLastWordCasa.push(lastWordCasa);
                }
                let dataEventLabelCasa = arrayLastWordCasa.join("_");

                dataLayer.push({
                    event: "customEvent",
                    eventCategory: "Medusa",
                    eventAction: "scopri – casa indipendente",
                    eventLabel: dataEventLabelCasa,
                });
                //Virtual PageView
                dataLayer.push({
                    event: "myEni",
                    userLoginState: isLogged,
                    siteSection1: "guida-al-caro-bolletta",
                    siteSection2: "fine_simulazione",
                    from: "sei_cliente_Plenitude",
                    page_location:
                        window.location.origin +
                        window.location.pathname +
                        "/fine_simulazione" +
                        queryString,
                });
                checkAnalyticsSecond = false;
                checkAnalyticsZero = false;
                checkAnalyticsFirst = false;
                checkAnalyticsThird = false;
            }
            //Condominio
            if (checkCondominio == "Condominio") {
                //Condominio
                let arrayTroubleshooting = Array.from($(".ts-bubbles-casa.active")).map(
                    (v) => v.innerText
                );
                var arrayLastWord = [];
                for (let i = 2; i < arrayTroubleshooting.length; i++) {
                    let lastWord = arrayTroubleshooting[i].split(" ").pop();
                    arrayLastWord.push(lastWord);
                }
                let dataEventLabel = arrayLastWord.join("_");
                /* console.table(dataEventLabel); */
                dataLayer.push({
                    event: "customEvent",
                    eventCategory: "Medusa",
                    eventAction: "scopri – condominio -" + " " + arrayTroubleshooting[1],
                    eventLabel: dataEventLabel,
                });
                //Virtual PageView
                dataLayer.push({
                    event: "myEni",
                    userLoginState: isLogged,
                    siteSection1: "guida-al-caro-bolletta",
                    siteSection2: "fine_simulazione",
                    from: "sei_cliente_Plenitude",
                    page_location:
                        window.location.origin +
                        window.location.pathname +
                        "/fine_simulazione" +
                        queryString,
                });
                checkAnalyticsSecond = false;
                checkAnalyticsZero = false;
                checkAnalyticsFirst = false;
                checkAnalyticsThird = false;
            }
        });
    }
});

///////// P18 ////////

function startAnalyticsModal() {
    let basicUrl = window.location.origin;
    let hrefLinkModal = $(".modal-link").attr("href");
    dataLayer.push({
        event: "customEvent",
        eventCategory: "Medusa",
        eventAction: "overlay – mercato dell energia",
        eventLabel: basicUrl + hrefLinkModal,
    });
}
//////// P31 ///////

function startAnalyticsEndSimulation() {
    let basicUrl = window.location.origin;
    let hrefLinkSimulation = $(".medusa-link").attr("href");
    dataLayer.push({
        event: "customEvent",
        eventCategory: "Medusa",
        eventAction: "overlay – fine simulazione",
        eventLabel: basicUrl + hrefLinkSimulation,
    });
    console.log("Scopri di più: ", dataLayer);
}
//Move modal to correct ancor after animation
function delay(URL) {
    if (URL === "#PM-first-modal") {
        $("#PM-first-modal").removeClass("d-none");
    } else if (URL === "#PM-second-modal") {
        $("#PM-second-modal").removeClass("d-none");
    } else if (URL === "#PM-third-modal") {
        $("#PM-third-modal").removeClass("d-none");
    }
    setTimeout(function () {
        window.location = URL;
    }, 1000);
}
//END MEDUSA

/* quinta stagione */
if ($('[sf-component="scroll-five-season"]').length != 0) {
    (function ($) {
        $(function () {
            $.widget("sf.scrollFiveSeason", {
                _create: function () {
                    console.log("sf.scrollFiveSeason");

                    let target = $(this.element).find(".content-desktop");
                    let canTraslate = false;
                    let config = {
                        dots: false,
                        arrows: false,
                        infinite: false,
                        slidesToShow: 1,
                        centerMode: false,
                        variableWidth: false,
                    };

                    console.log("sf.sfFiveSeasonSlick config", config);
                    this.slider = $(target).slick(config);

                    const _this = this;

                    this.limits = {
                        top: null,
                        bottom: null,
                    };

                    // $( '[sf-component="scroll-five-season"][sf-version="1.0"]' ).find('[scroll-five-season__item]')
                    this.active = 0;
                    this.imageRule = $(this.element).hasClass("force-width")
                        ? "width"
                        : "height";
                    //this.pictures =  $(this.element).find('[scroll-five-season__picture]');
                    this.images = $(this.pictures).find("img");
                    this.stage = $(this.element);
                    this.content = $(this.element).find("[scroll-five-season__content]");
                    this.items = $(this.element).find("[scroll-five-season__item]");
                    this.details = $(this.element).find(".details");
                    this.breadCrumbBar = $(this.element).find(".breadCrumbBar");
                    this.BGbreadCrumbBar = $(this.element).find(".breadCrumbBar .bar");
                    this.breadCrumbBarTitles = $(this.element).find(
                        ".breadCrumbBar .titles span"
                    );
                    this.breadCrumbBarTitlesTick = $(this.element).find(
                        ".breadCrumbBar .bar div"
                    );

                    this.pagination = $(this.element).find(
                        "[scroll-five-season__pagination]"
                    );
                    this.background = $(this.element).find(".background");

                    this.buttonScroll = $(this.element).find(".button-scroll");
                    this.imgScroll = $(this.element).find(".img-scroll");
                    this.gifScroll = $(this.element).find(".bg-gif");

                    this.breadCrumbBar.hide();

                    console.log("sf.scrollFiveSeason", this.items);
                    console.log("sf.scrollFiveSeason", this.images);

                    this.init();
                    var obj = this;
                    setTimeout(function () {
                        obj.init();
                    }, 2000);

                    this._on($(window), {
                        resize: "init",
                        scroll: "scroll",
                    });

                    $(document).ready(function () {
                        const timerAnimation = setTimeout(animationFirst, 1500);
                        const timeoutNoScroll = setTimeout(() => {
                            console.error("TIMEOUT ENDED");
                            canTraslate = true;
                        }, 6000);
                    });
                    function animationFirst() {
                        console.log("timer on");
                        /* console.log("controllo animazione") */
                        $(".breadCrumbBar").removeClass("d-none");
                        console.log(_this.content.height());
                    }

                    //document.getElementsByTagName("body")[0].addEventListener( "wheel", this.scroll() );

                    this._on(this.items, {
                        click: "scrollTo",
                    });

                    this._on($(window), {
                        mousemove: "mousemove",
                    });

                    this._on(this.buttonScroll, {
                        click: "btnScrollClick",
                    });

                    this._on(this.breadCrumbBarTitlesTick, {
                        click: "gotoStep",
                    });

                    $("[sf-component='scroll-five-season'] .breadCrumbBar .bar div").on(
                        "click",
                        (event) => {
                            console.log("scroll-five-season", $(event.currentTarget).index());

                            _this.slider.slick("slickGoTo", $(event.currentTarget).index());
                            _this.activate($(event.currentTarget).index());
                        }
                    );

                    console.log(canTraslate);
                    this.slider.on("afterChange", function (event, slick, direction) {
                        if (event) {
                            canTraslate = true;
                            console.log("AfterChange", canTraslate);
                        } else {
                            canTraslate = false;
                        }
                    });
                    this.slider.on("wheel", function (event, slick, direction) {
                        let slideCorrente = $(this.slick.currentSlide);
                        console.log(
                            "slid",
                            slideCorrente[0],
                            "canTranslate: ",
                            canTraslate
                        );
                        // let firstScroll = 0;
                        // if (typeof (slideCorrente[0]) == "undefined") {
                        //     canTraslate = true;
                        // }
                        if (canTraslate == true) {
                            /* _this.canTraslate == false */
                            var y = $(event.originalEvent.deltaY);

                            var delta = 0;
                            if (!event) {
                                event = window.event;
                            }
                            if (event.originalEvent.deltaY) {
                                delta = event.originalEvent.deltaY;
                                _this.handle(delta, slideCorrente, _this, event);
                                console.log("delta: ", delta);
                                canTraslate = false;
                            }
                            if (event.preventDefault) {
                                event.preventDefault();
                            }

                            event.returnValue = false;
                        }
                    });
                },
                handle: function (delta, slideCorrente, _this, event) {
                    let slider = $(".content-desktop");
                    console.log("delta: ", delta);

                    if (delta < 0) {
                        let prev = slideCorrente[0] - 1;

                        _this.slider.slick("slickGoTo", prev);
                        console.log("slide Corrente", prev);
                        _this.activate(prev);
                        console.log("<");
                    } else if (delta == 100 || delta == 125) {
                        if (slideCorrente[0] > 0) {
                            let next = slideCorrente[0] + 1;

                            _this.slider.slick("slickGoTo", next);
                            _this.activate(next);
                            console.log("slide Corrente", next);

                            console.log(">");
                        } else {
                            slider.slick("slickNext");
                            _this.activate(1);
                        }
                    }
                },

                init: function () {
                    console.log("sf.scrollFiveSeason", "init");

                    this.h = $(window).height();
                    this.w = $(window).width();
                    this.w2 = $(window).width() / 2;

                    //this.activate( 0 );

                    console.log("sf.scrollFiveSeason", "init", this.content.height());

                    // this.images.height( this.content.height() );
                    // this.images.height( '100%' );

                    // this.pictures.height( this.h / 2 + 'px' );
                    // this.pictures.first().height( this.h + 'px' );
                    // this.pictures.last().height( this.h + 'px' );

                    console.log("sf.scrollFiveSeason", "init", this.imageRule);
                    // switch (this.imageRule) {
                    //     case 'width':
                    //         console.log( 'sf.scrollFiveSeason', 'init', 'width' );
                    //         this.images.css( {'width':'50%'} );
                    //         break;
                    //     default:
                    //         console.log( 'sf.scrollFiveSeason', 'init', 'height' );
                    //         this.images.height( this.h + 'px' );
                    //         break;
                    // }
                },

                activate: function (i) {
                    if (this.active === i) {
                        return false;
                    }

                    this.active = i;

                    console.log("sf.scrollFiveSeason activate", i);

                    this.items.removeClass("active");
                    this.items.eq(i).addClass("active");

                    this.images.removeClass("active");
                    this.images.eq(i).addClass("active");

                    this.pagination.removeClass("active");
                    this.pagination.eq(i).addClass("active");

                    // gestione bg & active breadCrumbBar

                    switch (i) {
                        case 0:
                            this.breadCrumbBar.show();
                            this.buttonScroll.hide();
                            this.BGbreadCrumbBar.css({ "background-color": "#6a7939" });
                            this.breadCrumbBarTitles.removeClass("active");
                            this.breadCrumbBarTitles.eq(0).addClass("active");
                            this.breadCrumbBarTitlesTick.removeClass("active");
                            this.breadCrumbBarTitlesTick.eq(0).addClass("active");

                            this.background.removeClass("blur");
                            this.imgScroll.hide();
                            this.gifScroll.hide();
                            break;
                        case 1:
                            this.breadCrumbBar.show();
                            this.buttonScroll.hide();
                            this.BGbreadCrumbBar.css({
                                "background-color": "rgba(120, 121, 68, 0.4)",
                            });
                            this.breadCrumbBarTitles.removeClass("active");
                            this.breadCrumbBarTitles.eq(1).addClass("active");
                            this.breadCrumbBarTitlesTick.removeClass("active");
                            this.breadCrumbBarTitlesTick.eq(1).addClass("active");

                            this.background.addClass("blur");
                            break;
                        case 2:
                            this.breadCrumbBar.show();
                            this.buttonScroll.hide();
                            this.BGbreadCrumbBar.css({
                                "background-color": "rgb(76, 108, 107, 0.4)",
                            });
                            this.breadCrumbBarTitles.removeClass("active");
                            this.breadCrumbBarTitles.eq(2).addClass("active");
                            this.breadCrumbBarTitlesTick.removeClass("active");
                            this.breadCrumbBarTitlesTick.eq(2).addClass("active");

                            this.background.addClass("blur");
                            break;
                        case 3:
                            this.breadCrumbBar.show();
                            this.buttonScroll.hide();
                            this.BGbreadCrumbBar.css({
                                "background-color": "rgb(121, 96, 66, 0.4)",
                            });
                            this.breadCrumbBarTitles.removeClass("active");
                            this.breadCrumbBarTitles.eq(3).addClass("active");
                            this.breadCrumbBarTitlesTick.removeClass("active");
                            this.breadCrumbBarTitlesTick.eq(3).addClass("active");

                            this.background.addClass("blur");
                            break;
                        case 4:
                            this.breadCrumbBar.show();
                            this.buttonScroll.hide();
                            this.BGbreadCrumbBar.css({
                                "background-color": "rgb(74, 101, 108, 0.4)",
                            });
                            this.breadCrumbBarTitles.removeClass("active");
                            this.breadCrumbBarTitles.eq(4).addClass("active");
                            this.breadCrumbBarTitlesTick.removeClass("active");
                            this.breadCrumbBarTitlesTick.eq(4).addClass("active");

                            this.background.addClass("blur");
                            break;
                        default:
                            /* this.BGbreadCrumbBar.css({ 'background-color': ' transparent' }); */
                            break;
                    }

                    dataLayer.push({
                        event: "myEni",
                        userLoginState: false,
                        siteSection1: "nuova-energia",
                        siteSection2: "landing",
                        from: document.referrer,
                        page_location:
                            "https://eniplenitude.com/landing/it/nuova-energia" + "/rebr" + i,
                    });
                },
                scrollInit: function (i) {
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-0");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-1");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-2");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-3");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-4");
                    $("[sf-component='scroll-five-season-mobile'] .background").addClass(
                        "step-" + i
                    );
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("blur");

                    $(
                        "[sf-component='scroll-five-season-mobile'] .breadCrumbBar .bar div"
                    ).removeClass("active");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .breadCrumbBar .bar div"
                    )
                        .eq(i)
                        .addClass("active");

                    // $("[sf-component='scroll-five-season-mobile'] .step").removeClass('active');
                    if (i == 0) {
                        $("[sf-component='scroll-five-season-mobile'] .step2").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step0").addClass(
                            "active"
                        );
                        /* $("[sf-component='scroll-five-season-mobile'] .background").addClass('blur'); */
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgba(120, 121, 68, 0.4)",
                        });
                        console.log(1);
                    }
                    if (i == 1) {
                        $("[sf-component='scroll-five-season-mobile'] .step0").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step2").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step1").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgba(120, 121, 68, 0.4)",
                        });
                        console.log(1);
                    }
                    if (i == 2) {
                        $("[sf-component='scroll-five-season-mobile'] .step0").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step1").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step2").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgb(76, 108, 107, 0.4)",
                        });
                        console.log(2);
                    }
                    if (i == 3) {
                        $("[sf-component='scroll-five-season-mobile'] .step0").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step1").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step2").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgb(121, 96, 66, 0.4)",
                        });
                        console.log(3);
                    }
                    if (i == 4) {
                        $("[sf-component='scroll-five-season-mobile'] .step0").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step1").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step2").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgb(74, 101, 108, 0.4)",
                        });
                        console.log(4);
                    }

                    $("[sf-component='scroll-five-season-mobile'] .button-scroll").hide();
                    $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").show();

                    dataLayer.push({
                        event: "myEni",
                        userLoginState: false,
                        siteSection1: "nuova-energia",
                        siteSection2: "landing",
                        from: document.referrer,
                        page_location:
                            "https://eniplenitude.com/landing/it/nuova-energia" + "/rebr" + i,
                    });
                },

                stageSet: function (type) {
                    console.log("sf.scrollFiveSeason", type);

                    switch (type) {
                        case "bottom":
                            this.stage.removeClass("fixed");
                            this.stage.addClass("bottom");
                            break;
                        case "fixed":
                            this.stage.removeClass("bottom");
                            this.stage.addClass("fixed");
                            break;
                        default:
                            this.stage.removeClass("fixed");
                            this.stage.removeClass("bottom");
                            break;
                    }
                },

                scrollTo: function (e) {
                    let i = $(e.currentTarget).index();

                    let target = this.pictures.eq(i).offset();

                    $("body, html").animate(
                        {
                            scrollTop: target.top,
                        },
                        800
                    );

                    console.log("sf.scrollFiveSeason", "scrollTo", i);
                },

                /* wheel: function (e, f) {
            console.log('sf.scrollFiveSeason', 'wheel');
            let delta = $(e.originalEvent.deltaY);
            console.log('sf.scrollFiveSeason', 'wheel', delta);
        }, */

                mousemove: function (e, f) {
                    let p = (15 / 100) * ((100 / this.w2) * (e.pageX - this.w2));
                    $(this.details).css({ transform: "translateX(" + p + "px)" });
                },

                btnScrollClick: function () {
                    this.buttonScroll.addClass("btnAnimation");
                    this.buttonScroll.css({ display: "none" });

                    this.items.removeClass("active");
                    this.items.eq(1).addClass("active");

                    this.pagination.removeClass("active");
                    this.pagination.eq(1).addClass("active");

                    this.breadCrumbBar.show();
                    this.BGbreadCrumbBar.css({
                        "background-color": "rgba(120, 121, 68, 0.4)",
                    });
                    this.breadCrumbBarTitles.removeClass("active");
                    this.breadCrumbBarTitles.eq(1).addClass("active");
                    this.breadCrumbBarTitlesTick.removeClass("active");
                    this.breadCrumbBarTitlesTick.eq(1).addClass("active");
                },

                gotoStep: function (event) {
                    let n = $(event.currentTarget).index();
                    // console.log(n);
                    /*this.items.removeClass('active');
          this.items.eq(n).addClass('active');
          this.breadCrumbBarTitlesTick.removeClass('active');
          this.breadCrumbBarTitlesTick.eq(n).addClass('active');

          this.pagination.removeClass('active');
          this.pagination.eq(n).addClass('active');*/

                    /*switch (n) {
              case 0:
                  this.BGbreadCrumbBar.css({'background-color':'#6a7939'});
                  break;
              case 1:
                  this.BGbreadCrumbBar.css({'background-color':'rgba(120, 121, 68, 0.4)'});
                  break;
              case 2:
                  this.BGbreadCrumbBar.css({'background-color':'rgb(76, 108, 107, 0.4)'});
                  break;
              case 3:
                  this.BGbreadCrumbBar.css({'background-color':'rgb(121, 96, 66, 0.4)'});
                  break;
              case 4:
                  this.BGbreadCrumbBar.css({'background-color':'rgb(74, 101, 108, 0.4)'});
                  break;
              default:
                  this.BGbreadCrumbBar.css({'background-color':' transparent'});
                  break;
          }*/

                    let top = $(".step").eq(n).offset().top;
                    $(window).scrollTop(top);
                },

                // tracciamenti - desk
                /* traceIntro: function () {
            dataLayer.push({
                'event': 'customEvent',
                'eventCategory': 'Rebranding Landing',
                'eventAction': '#',
                'eventLabel': 'SCORRI'
            })
        }, */

                traceRinnovabili: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo/rinnovabili",
                        eventLabel: "SCOPRI LA NOSTRA NUOVA ENERGIA",
                    });
                },

                traceMobility: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo/e-mobility",
                        eventLabel: "SCOPRI L'ENERGIA PER MUOVERCI",
                    });
                },

                traceRetail: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo/retail",
                        eventLabel: "SCOPRI L'ENERGIA CHE ABBIAMO INSIEME",
                    });
                },

                tracePlenitude: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo",
                        eventLabel: "SCOPRI DI PIÙ SU PLENITUDE",
                    });
                },
            });

            $(
                '[sf-component="scroll-five-season"][sf-version="1.0"]'
            ).scrollFiveSeason();
        });
    })(jQuery);

    var sfSlick;
    var dataLayer = [];
    (function ($) {
        $(function () {
            $.widget("sf.sfFiveSeasonSlick", {
                _create: function () {
                    console.log("sf.sfFiveSeasonSlick", $(this.element));

                    let target = $(this.element).find(".content-mobile");

                    let scrollCount = 0;
                    let activeSlide = 0;

                    let config = {
                        dots: false,
                        arrows: false,
                        infinite: false,
                        slidesToShow: 1,
                        centerMode: false,
                        variableWidth: false,
                    };

                    console.log("sf.sfFiveSeasonSlick config", config);
                    this.slider = $(target).slick(config);
                    this.buttonScroll = $(this.element).find(".button-scroll");
                    this.items = $(this.element).find("[scroll-five-season__item]");
                    this.pagination = $(this.element).find(
                        "[scroll-five-season__pagination]"
                    );
                    this.breadCrumbBarTitles = $(this.element).find(
                        ".breadCrumbBar .titles span"
                    );
                    this.breadCrumbBarTitlesTick = $(this.element).find(
                        ".breadCrumbBar .bar div"
                    );
                    this.BGbreadCrumbBar = $(this.element).find(".breadCrumbBar .bar");
                    this.breadCrumbBar = $(this.element).find(".breadCrumbBar");

                    let _this = this;
                    this.slider.on("swipe", function (event, slick, direction) {
                        console.log("scroll-five-season-mobile SLIDE", slick.currentSlide);

                        _this.swipeInit(slick.currentSlide);
                    });

                    $(
                        "[sf-component='scroll-five-season-mobile'] .breadCrumbBar .bar div"
                    ).on("click", (event) => {
                        console.log(
                            "scroll-five-season-mobile",
                            $(event.currentTarget).index()
                        );

                        _this.slider.slick("slickGoTo", $(event.currentTarget).index());
                        _this.swipeInit($(event.currentTarget).index());
                    });

                    this._on(this.buttonScroll, {
                        click: "traceIntro",
                    });
                    this.buttonScroll.on("click", function (slick) {
                        console.log("btnScrollClick", slick.currentSlide);

                        _this.slider.slick("slickGoTo", 1);
                        _this.swipeInit(1);
                    });
                },

                swipeInit: function (i) {
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-0");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-1");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-2");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-3");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("step-4");
                    $("[sf-component='scroll-five-season-mobile'] .background").addClass(
                        "step-" + i
                    );
                    $(
                        "[sf-component='scroll-five-season-mobile'] .background"
                    ).removeClass("blur");

                    $(
                        "[sf-component='scroll-five-season-mobile'] .breadCrumbBar .bar div"
                    ).removeClass("active");
                    $(
                        "[sf-component='scroll-five-season-mobile'] .breadCrumbBar .bar div"
                    )
                        .eq(i)
                        .addClass("active");

                    // $("[sf-component='scroll-five-season-mobile'] .step").removeClass('active');
                    if (i == 1) {
                        $("[sf-component='scroll-five-season-mobile'] .step2").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step1").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgba(120, 121, 68, 0.4)",
                        });
                        console.log(1);
                    }
                    if (i == 2) {
                        $("[sf-component='scroll-five-season-mobile'] .step1").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step2").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgb(76, 108, 107, 0.4)",
                        });
                        console.log(2);
                    }
                    if (i == 3) {
                        $("[sf-component='scroll-five-season-mobile'] .step1").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step2").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgb(121, 96, 66, 0.4)",
                        });
                        console.log(3);
                    }
                    if (i == 4) {
                        $("[sf-component='scroll-five-season-mobile'] .step1").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step2").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step3").removeClass(
                            "active"
                        );
                        $("[sf-component='scroll-five-season-mobile'] .step4").addClass(
                            "active"
                        );
                        $(
                            "[sf-component='scroll-five-season-mobile'] .background"
                        ).addClass("blur");
                        $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").css({
                            "background-color": "rgb(74, 101, 108, 0.4)",
                        });
                        console.log(4);
                    }

                    $("[sf-component='scroll-five-season-mobile'] .button-scroll").hide();
                    $("[sf-component='scroll-five-season-mobile'] .breadCrumbBar").show();

                    dataLayer.push({
                        event: "myEni",
                        userLoginState: false,
                        siteSection1: "nuova-energia",
                        siteSection2: "landing",
                        from: document.referrer,
                        page_location:
                            "https://eniplenitude.com/landing/it/nuova-energia" + "/rebr" + i,
                    });
                },

                // tracciamenti - mobile
                traceIntro: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "#",
                        eventLabel: "SCORRI",
                    });
                },

                traceRinnovabili: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo/rinnovabili",
                        eventLabel: "SCOPRI LA NOSTRA NUOVA ENERGIA",
                    });
                },

                traceMobility: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo/e-mobility",
                        eventLabel: "SCOPRI L'ENERGIA PER MUOVERCI",
                    });
                },

                traceRetail: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo/retail",
                        eventLabel: "SCOPRI L'ENERGIA CHE ABBIAMO INSIEME",
                    });
                },

                tracePlenitude: function () {
                    dataLayer.push({
                        event: "customEvent",
                        eventCategory: "Rebranding Landing",
                        eventAction: "https://eniplenitude.com/chi-siamo",
                        eventLabel: "SCOPRI DI PIÙ SU PLENITUDE",
                    });
                },
            });

            $("[sf-component='scroll-five-season-mobile']").sfFiveSeasonSlick();
        });
    })(jQuery);
}

/* plenicorp accordion */
$(document).ready(function () {
    $("#PleniCorp-Accordion button").each(function () {
        $(this).parent().attr("tabindex", "-1");
    });
    $("#PleniCorp-Accordion button").on("click", function () {
        $("#PleniCorp-Accordion .card").removeClass("selezionata");
        $(this).parents(".card").addClass("selezionata");
        let attr = $(this).attr("data-target");
        $(
            '.position-absolute.plenicorp-acc-container-img.d-none.d-xxl-block [data-pleni-acc="' +
            attr +
            '"]'
        ).addClass("d-xxl-block");
        $(
            '.position-absolute.plenicorp-acc-container-img.d-none.d-xxl-block img:not([data-pleni-acc="' +
            attr +
            '"])'
        ).removeClass("d-xxl-block");
        $(
            '.position-absolute.plenicorp-acc-container-img.d-none.d-lg-block.d-xxl-none [data-pleni-acc="' +
            attr +
            '"]'
        ).addClass("d-lg-block");
        $(
            '.position-absolute.plenicorp-acc-container-img.d-none.d-lg-block.d-xxl-none img:not([data-pleni-acc="' +
            attr +
            '"])'
        ).removeClass("d-lg-block");
    });
});

/* progetti js */
$(document).ready(function () {
    if ($(".Progetti-container").length != 0) {
        if ($(window).innerWidth() < 1024) {
            //SLICK
            $(".Progetti-all-card-content-mobile").slick({
                arrows: false,
                appendArrows: $(".Progetti-card-number-arrows"),
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
                variableWidth: true,
                variableHeight: true,
                centerMode: true,
            });
            $(".Progetti-all-card-content-mobile").each(function () {
                let $statusProgettiCards = $(this)
                    .parent()
                    .next()
                    .not(".Progetti-category-container-mobile")
                    .find(".Progetti-card-number-status-text");
                let $slickElementProgettiCards = $(this);
                let leftArrowProgettiCards = $(this)
                    .parent()
                    .next()
                    .not(".Progetti-category-container-mobile")
                    .find(
                        ".Progetti-card-number-arrows.Progetti-card-number-previous-arrow"
                    );
                let rightArrowProgettiCards = $(this)
                    .parent()
                    .next()
                    .not(".Progetti-category-container-mobile")
                    .find(".Progetti-card-number-arrows.Progetti-card-number-next-arrow");
                $slickElementProgettiCards.on(
                    "init reInit afterChange",
                    function (event, slick, currentSlide, nextSlide) {
                        var i = (currentSlide ? currentSlide : 0) + 1;
                        $statusProgettiCards.html(
                            '<span class="first-number-boxinfo">' +
                            i +
                            "</span>" +
                            "/" +
                            "&nbsp" +
                            slick.slideCount
                        );
                        if (i === slick.slideCount) {
                            rightArrowProgettiCards.addClass("d-none");
                        } else {
                            if (rightArrowProgettiCards.hasClass("d-none")) {
                                rightArrowProgettiCards.removeClass("d-none");
                            }
                        }
                        if (i === 1) {
                            leftArrowProgettiCards.addClass("d-none");
                        } else {
                            if (leftArrowProgettiCards.hasClass("d-none")) {
                                leftArrowProgettiCards.removeClass("d-none");
                            }
                        }
                    }
                );
                leftArrowProgettiCards.click();
            });
        }
    }
});

function slideProgettiCardMobile(dir, e) {
    let target = e.target;

    let sliderCorretto = $(target)
        .parents(".Progetti-card-number-container")
        .prev()
        .find(".Progetti-all-card-content-mobile");
    if (dir === "+") {
        sliderCorretto.slick("slickNext");
    } else if (dir === "-") {
        sliderCorretto.slick("slickPrev");
    }
}

function displayArticlesMobile(props) {
    //Remove cards
    $("").addClass("d-none");
    switch (props) {
        case "produzione imballaggi":
            //Remove d-none back other articles
            $(".Progetti-back-card-container-mobile").removeClass("d-none");
            //Display article
            $(".Progetti-article-container-mobile.produzione-imballaggi").removeClass(
                "d-none"
            );
            //Hide elements
            $(".Progetti-subtitle-content-mobile").addClass("d-none");
            $(".Progetti-category-container-mobile").addClass("d-none");
            $(".Progetti-all-card-container-mobile").addClass("d-none");
            $(".Progetti-card-number-container").addClass("d-none");
            //Change margins
            $(".Progetti-content-mobile").css("padding", "30px 15px 0");
            break;
        case "lavanderie industriali":
            //Remove d-none back other articles
            $(".Progetti-back-card-container-mobile").removeClass("d-none");
            //Display article
            $(
                ".Progetti-article-container-mobile.lavanderie-industriali"
            ).removeClass("d-none");
            //Hide elements
            $(".Progetti-subtitle-content-mobile").addClass("d-none");
            $(".Progetti-category-container-mobile").addClass("d-none");
            $(".Progetti-all-card-container-mobile").addClass("d-none");
            $(".Progetti-card-number-container").addClass("d-none");
            //Change margins
            $(".Progetti-content-mobile").css("padding", "30px 15px 0");
            break;
        case "ceramiche industriali":
            //Remove d-none back other articles
            $(".Progetti-back-card-container-mobile").removeClass("d-none");
            //Display article
            $(".Progetti-article-container-mobile.ceramiche-industriali").removeClass(
                "d-none"
            );
            //Hide elements
            $(".Progetti-subtitle-content-mobile").addClass("d-none");
            $(".Progetti-category-container-mobile").addClass("d-none");
            $(".Progetti-all-card-container-mobile").addClass("d-none");
            $(".Progetti-card-number-container").addClass("d-none");
            //Change margins
            $(".Progetti-content-mobile").css("padding", "30px 15px 0");
            break;
        case "gdo":
            //Remove d-none back other articles
            $(".Progetti-back-card-container-mobile").removeClass("d-none");
            //Display article
            $(".Progetti-article-container-mobile.gdo").removeClass("d-none");
            //Hide elements
            $(".Progetti-subtitle-content-mobile").addClass("d-none");
            $(".Progetti-category-container-mobile").addClass("d-none");
            $(".Progetti-all-card-container-mobile").addClass("d-none");
            $(".Progetti-card-number-container").addClass("d-none");
            //Change margins
            $(".Progetti-content-mobile").css("padding", "30px 15px 0");
            break;
        case "sci":
            //Remove d-none back other articles
            $(".Progetti-back-card-container-mobile").removeClass("d-none");
            //Display article
            $(".Progetti-article-container-mobile.sci").removeClass("d-none");
            //Hide elements
            $(".Progetti-subtitle-content-mobile").addClass("d-none");
            $(".Progetti-category-container-mobile").addClass("d-none");
            $(".Progetti-all-card-container-mobile").addClass("d-none");
            $(".Progetti-card-number-container").addClass("d-none");
            //Change margins
            $(".Progetti-content-mobile").css("padding", "30px 15px 0");
            break;
        case "rugby":
            //Remove d-none back other articles
            $(".Progetti-back-card-container-mobile").removeClass("d-none");
            //Display article
            $(".Progetti-article-container-mobile.rugby").removeClass("d-none");
            //Hide elements
            $(".Progetti-subtitle-content-mobile").addClass("d-none");
            $(".Progetti-category-container-mobile").addClass("d-none");
            $(".Progetti-all-card-container-mobile").addClass("d-none");
            $(".Progetti-card-number-container").addClass("d-none");
            //Change margins
            $(".Progetti-content-mobile").css("padding", "30px 15px 0");
            break;
        case "calcio":
            //Remove d-none back other articles
            $(".Progetti-back-card-container-mobile").removeClass("d-none");
            //Display article
            $(".Progetti-article-container-mobile.calcio").removeClass("d-none");
            //Hide elements
            $(".Progetti-subtitle-content-mobile").addClass("d-none");
            $(".Progetti-category-container-mobile").addClass("d-none");
            $(".Progetti-all-card-container-mobile").addClass("d-none");
            $(".Progetti-card-number-container").addClass("d-none");
            //Change margins
            $(".Progetti-content-mobile").css("padding", "30px 15px 0");
            break;
    }
}

function displayCardsMobile() {
    //Add d-none back other articles
    $(".Progetti-back-card-container-mobile").addClass("d-none");
    //Hide article
    $(".Progetti-article-container-mobile.produzione-imballaggi").addClass(
        "d-none"
    );
    $(".Progetti-article-container-mobile.lavanderie-industriali").addClass(
        "d-none"
    );
    $(".Progetti-article-container-mobile.ceramiche-industriali").addClass(
        "d-none"
    );
    $(".Progetti-article-container-mobile.gdo").addClass("d-none");
    $(".Progetti-article-container-mobile.sci").addClass("d-none");
    $(".Progetti-article-container-mobile.rugby").addClass("d-none");
    $(".Progetti-article-container-mobile.calcio").addClass("d-none");
    //Display elements
    $(".Progetti-subtitle-content-mobile").removeClass("d-none");
    $(".Progetti-category-container-mobile").removeClass("d-none");
    $(".Progetti-all-card-container-mobile").removeClass("d-none");
    $(".Progetti-card-number-container").removeClass("d-none");
    //Change margins
    $(".Progetti-content-mobile").css("padding", "30px 30px 0");
}

//DESKTOP SELECTION
filterSelectionProgetti("all");
function filterSelectionProgetti(props) {
    //Check element for display subcategory
    if (props == "all") {
        $(".Progetti-left-subcategory").addClass("hideDesktop");
    } else if (props != "all") {
        $(".Progetti-left-subcategory").removeClass("hideDesktop");
    }
    //Selection article
    let selection = $(".Progetti-right-card-container");
    if (props == "all") props = "";
    for (i = 0; i < selection.length; i++) {
        removeClassProgetti(selection[i], "showDesktop");
        if (selection[i].className.indexOf(props) > -1)
            addClassProgetti(selection[i], "showDesktop");
    }
    //Selection subcategory
    let selectionSubcategory = $(".Progetti-left-subcategory");
    for (i = 0; i < selectionSubcategory.length; i++) {
        removeClassProgetti(selectionSubcategory[i], "showDesktop");
        if (selectionSubcategory[i].className.indexOf(props) > -1)
            addClassProgetti(selectionSubcategory[i], "showDesktop");
    }
}

function addClassProgetti(element, name) {
    let i;
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
function removeClassProgetti(element, name) {
    let i;
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Active class cards
$(".Progetti-left-category-button span").click(function () {
    //Check active class
    $(".Progetti-left-category-button span").each(function () {
        $(this).removeClass("active");
    });
    //Add selection active class
    $(this).addClass("active");
    //Add class for display cards
    $(".Progetti-right-container").removeClass("d-none");
    //Add class for hide articles
    $(".Progetti-right-article-container").addClass("d-none");
    //Remove class active subcategory
    $(".Progetti-left-subcategory-list span").removeClass("active");
});

//Active class Subcategory
$(".Progetti-left-subcategory-list span").click(function () {
    //Check active class
    $(".Progetti-left-subcategory-list span").each(function () {
        $(this).removeClass("active");
    });
    //Add selection active class
    $(this).addClass("active");
});

function displayArticles(props) {
    //Remove cards
    $(".Progetti-right-container").addClass("d-none");
    switch (props) {
        case "produzione imballaggi":
            $(".Progetti-right-article-container").addClass("d-none");
            //Display right articles
            $(".produzione-imballaggi").removeClass("d-none");
            break;
        case "lavanderie industriali":
            $(".Progetti-right-article-container").addClass("d-none");
            //Display right articles
            $(".lavanderie-industriali").removeClass("d-none");
            break;
        case "ceramiche industriali":
            $(".Progetti-right-article-container").addClass("d-none");
            //Display right articles
            $(".ceramiche-industriali").removeClass("d-none");
            break;
        case "sci":
            $(".Progetti-right-article-container").addClass("d-none");
            //Display right articles
            $(".sci").removeClass("d-none");
            break;
        case "rugby":
            $(".Progetti-right-article-container").addClass("d-none");
            //Display right articles
            $(".rugby").removeClass("d-none");
            break;
        case "calcio":
            $(".Progetti-right-article-container").addClass("d-none");
            //Display right articles
            $(".calcio").removeClass("d-none");
            break;
        case "gdo":
            $(".Progetti-right-article-container").addClass("d-none");
            //Display right articles
            $(".gdo").removeClass("d-none");
            break;
    }
}

function clickArticles(props) {
    //Remove cards
    $(".Progetti-right-container").addClass("d-none");
    switch (props) {
        case "produzione imballaggi":
            $(".Progetti-right-article-container").addClass("d-none");
            //Click button category
            $(".Progetti-left-category-button span:nth-child(2)").click();
            //Hide Cards
            $(".Progetti-right-container").addClass("d-none");
            //Click subcategory article
            $(
                ".Progetti-left-subcategory.industry .Progetti-left-subcategory-list:nth-child(2) span"
            ).click();
            //Display right articles
            $(".produzione-imballaggi").removeClass("d-none");
            break;
        case "lavanderie industriali":
            $(".Progetti-right-article-container").addClass("d-none");
            //Click button category
            $(".Progetti-left-category-button span:nth-child(2)").click();
            //Hide Cards
            $(".Progetti-right-container").addClass("d-none");
            //Click subcategory article
            $(
                ".Progetti-left-subcategory.industry .Progetti-left-subcategory-list:nth-child(3) span"
            ).click();
            //Display right articles
            $(".lavanderie-industriali").removeClass("d-none");
            break;
        case "ceramiche industriali":
            $(".Progetti-right-article-container").addClass("d-none");
            //Click button category
            $(".Progetti-left-category-button span:nth-child(2)").click();
            //Hide Cards
            $(".Progetti-right-container").addClass("d-none");
            //Click subcategory article
            $(
                ".Progetti-left-subcategory.industry .Progetti-left-subcategory-list:nth-child(4) span"
            ).click();
            //Display right articles
            $(".ceramiche-industriali").removeClass("d-none");
            break;
        case "sci":
            $(".Progetti-right-article-container").addClass("d-none");
            //Click button category
            $(".Progetti-left-category-button span:nth-child(4)").click();
            //Hide Cards
            $(".Progetti-right-container").addClass("d-none");
            //Click subcategory article
            $(
                ".Progetti-left-subcategory.sport .Progetti-left-subcategory-list:nth-child(2) span"
            ).click();
            //Display right articles
            $(".sci").removeClass("d-none");
            break;
        case "rugby":
            $(".Progetti-right-article-container").addClass("d-none");
            //Click button category
            $(".Progetti-left-category-button span:nth-child(4)").click();
            //Hide Cards
            $(".Progetti-right-container").addClass("d-none");
            //Click subcategory article
            $(
                ".Progetti-left-subcategory.sport .Progetti-left-subcategory-list:nth-child(3) span"
            ).click();
            //Display right articles
            $(".rugby").removeClass("d-none");
            break;
        case "calcio":
            $(".Progetti-right-article-container").addClass("d-none");
            //Click button category
            $(".Progetti-left-category-button span:nth-child(4)").click();
            //Hide Cards
            $(".Progetti-right-container").addClass("d-none");
            //Click subcategory article
            $(
                ".Progetti-left-subcategory.sport .Progetti-left-subcategory-list:last-child span"
            ).click();
            //Display right articles
            $(".calcio").removeClass("d-none");
            break;
        case "gdo":
            $(".Progetti-right-article-container").addClass("d-none");
            //Click button category
            $(".Progetti-left-category-button span:nth-child(3)").click();
            //Hide Cards
            $(".Progetti-right-container").addClass("d-none");
            //Click subcategory article
            $(
                ".Progetti-left-subcategory.building .Progetti-left-subcategory-list:nth-child(2) span"
            ).click();
            //Display right articles
            $(".gdo").removeClass("d-none");
            break;
    }
}

/* corp exprivia */
$(document).ready(function () {
    /* aree business */
    if (
        document.querySelector(
            '[sf-component="site-corporate-aree-business"][sf-version="1.0"]'
        )
    ) {
        const schede_site_corporate_aree_business = document.querySelector(
            "#site-corporate-aree-business .step10"
        ).children;
        for (let scheda of schede_site_corporate_aree_business) {
            scheda.addEventListener("mouseover", (event) => {
                let schede_site_corporate_div = event.currentTarget.closest("div");
                for (let scheda_2 of schede_site_corporate_aree_business) {
                    scheda_2.classList.remove("activeWidth");
                    if (scheda_2 !== schede_site_corporate_div) {
                        scheda_2.classList.add("compactWidth");
                    }
                }
                schede_site_corporate_div.classList.remove("compactWidth");
                schede_site_corporate_div.classList.add("activeWidth");
            });
        }
    }

    /* slider COMUNICATI begin */
    function sliderSetupScript(attribute, css_slider_variable) {
        let viewportWidth = $(window).width();
        console.log("site-corporate-slider");

        if (viewportWidth >= 1024) {
        } else {
            let slider_site_corporate_1c = document.querySelector(
                `${attribute} #${css_slider_variable}`
            ); //ottengo l'elemento slider
            let step_2 = document.querySelector(
                `${attribute}  .steps .scrollX .scrollX-content`
            );
            let step_2_length = document.querySelectorAll(
                `${attribute} .cards-box .item`
            ).length; //ottengo collection di elementi dello slider
            slider_site_corporate_1c.style.setProperty(
                `--${css_slider_variable}`,
                `${slider_site_corporate_1c.offsetWidth / step_2_length - 1}px`
            ); //setto la lunghezza del cursore dello slider

            slider_site_corporate_1c.oninput = function () {
                slider_site_corporate_1c.value = this.value;
            };

            window.addEventListener("resize", () => {
                slider_site_corporate_1c.style.setProperty(
                    `--${css_slider_variable}`,
                    `${slider_site_corporate_1c.offsetWidth / step_2_length}px`
                ); //lunghezza del cursore dello slider
            });

            let openModal = (event) => {
                console.log(event.currentTarget);
                document.querySelector("body").style.overflow = "hidden";
                let paragraphs_collection =
                    event.currentTarget.parentElement.querySelectorAll(".column p");
                let title =
                    event.currentTarget.parentElement.querySelector(".title").innerHTML;
                let paragraph_sum = "";
                paragraphs_collection.forEach((p) => {
                    paragraph_sum += `${p.innerHTML}\n\n`;
                });
                let modal = document.querySelector(`${attribute} .details--modal`);
                modal.querySelector(`${attribute} .details--modal--title`).innerHTML =
                    title;
                modal.querySelector(`${attribute} .details--modal--text`).innerHTML =
                    paragraph_sum;
                modal.classList.add("open");
            };
            let closeModal = () => {
                document
                    .querySelector(`${attribute} .details--modal`)
                    .classList.remove("open");
                document.querySelector("body").style.overflow = "scroll";
            };

            document.querySelectorAll(`${attribute} h5`).forEach((elem) => {
                elem.addEventListener("click", openModal);
            });
            document
                .querySelector(`${attribute} .details--modal .close-x`)
                .addEventListener("click", closeModal);
        }
    }

    if (
        document.querySelector(
            '[sf-component="site-corporate-comunicati"][sf-version="2.0"]'
        )
    ) {
        sliderSetupScript(
            '[sf-component="site-corporate-comunicati"][sf-version="2.0"]',
            "site_corporate_comunicati_slider"
        );
    }

    (function ($) {
        $(function () {
            $.widget("sf.corporateCarouselSlider", {
                _create: function () {
                    let viewportWidth = $(window).width();

                    console.log("corporateCarouselSlider _create", viewportWidth);

                    if (viewportWidth > 1024) {
                        this.init();
                    } else {
                        this.initMobile();
                    }
                },

                init: function () {
                    console.log("corporateCarouselSlider init");

                    this.scrollingArea = $(this.element).find("#scrollingArea");
                    this.slideHandler = $(this.element).find(".slide-handler");

                    this.scrollingContent = $(this.element).find("#scrollingContent");

                    $(this.slideHandler)[0].disabled = false;
                    $(this.slideHandler)[0].addEventListener("input", () => {
                        this.move();
                    });
                },

                move: function (event) {
                    console.log("corporateCarouselSlider move");

                    let scrollingAreaPaddingLeft = parseInt(
                        getComputedStyle($(this.scrollingArea)[0], null).getPropertyValue(
                            "padding-left"
                        )
                    );
                    let scrollingAreaWidth = $(this.scrollingArea)[0].offsetWidth;
                    let scrollingContentWidth =
                        $(this.scrollingContent)[0].offsetWidth + scrollingAreaPaddingLeft;
                    let scrollDistance =
                        ($(this.slideHandler)[0].value *
                            (scrollingContentWidth - scrollingAreaWidth)) /
                        100;

                    $(this.scrollingArea)[0].scrollLeft = scrollDistance;
                },

                //- ---

                initMobile: function () {
                    console.log("corporateCarouselSlider initMobile");

                    this.slider_site_corporate_1c = $(this.element).find(
                        `#site_corporate_comunicati_slider`
                    ); //ottengo l'elemento slider
                    this.step_2 = $(this.element).find(
                        `.steps .scrollX .scrollX-content`
                    );
                    this.step_2_length = $(this.element).find(`.cards-box .item`).length; //ottengo collection di elementi dello slider
                    $(this.slider_site_corporate_1c).css({
                        width: `${this.slider_site_corporate_1c.offsetWidth / this.step_2_length - 1
                        }px`,
                    }); //setto la lunghezza del cursore dello slider

                    this._on(this.step_2, {
                        scroll: "moveSlide",
                    });
                },

                moveSlide: function (event) {
                    console.log("corporateCarouselSlider moveSlide");

                    let scrollPos = $(this.step_2)[0].scrollLeft;
                    let scrollingViewPort = $(this.step_2)[0].offsetWidth;
                    let scrollWidth = $(this.step_2)[0].scrollWidth;
                    let maxIndicatorValue = this.slider_site_corporate_1c.attr("max");

                    let position = scrollPos / (scrollWidth - scrollingViewPort);
                    let p = parseInt(position * maxIndicatorValue);
                    $(this.slider_site_corporate_1c).val(p);

                    if (this.slider_site_corporate_1c.value > p * 0.98) {
                        $(this.slider_site_corporate_1c).val(maxIndicatorValue);
                    }
                },
            });

            $(
                '[sf-component="site-corporate-comunicati"][sf-version="2.0"]'
            ).corporateCarouselSlider();
        });
    })(jQuery);
    /* slider comunicati end */

    /* slider STORIA begin */
    function sliderSetupScript(attribute, css_slider_variable) {
        let viewportWidth = $(window).width();
        console.log("site-corporate-slider");

        if (viewportWidth >= 1024) {
        } else {
            let slider_site_corporate_1c = document.querySelector(
                `${attribute} #${css_slider_variable}`
            ); //ottengo l'elemento slider
            let step_2 = document.querySelector(
                `${attribute}  .steps .scrollX .scrollX-content`
            );
            let step_2_length = document.querySelectorAll(
                `${attribute} .cards-box .item`
            ).length; //ottengo collection di elementi dello slider
            slider_site_corporate_1c.style.setProperty(
                `--${css_slider_variable}`,
                `${slider_site_corporate_1c.offsetWidth / step_2_length - 1}px`
            ); //setto la lunghezza del cursore dello slider

            slider_site_corporate_1c.oninput = function () {
                slider_site_corporate_1c.value = this.value;
            };

            window.addEventListener("resize", () => {
                slider_site_corporate_1c.style.setProperty(
                    `--${css_slider_variable}`,
                    `${slider_site_corporate_1c.offsetWidth / step_2_length}px`
                ); //lunghezza del cursore dello slider
            });

            let openModal = (event) => {
                console.log(event.currentTarget);
                document.querySelector("body").style.overflow = "hidden";
                let paragraphs_collection =
                    event.currentTarget.parentElement.querySelectorAll(".column p");
                let title =
                    event.currentTarget.parentElement.querySelector(".title").innerHTML;
                let paragraph_sum = "";
                paragraphs_collection.forEach((p) => {
                    paragraph_sum += `${p.innerHTML}\n\n`;
                });
                let modal = document.querySelector(`${attribute} .details--modal`);
                modal.querySelector(`${attribute} .details--modal--title`).innerHTML =
                    title;
                modal.querySelector(`${attribute} .details--modal--text`).innerHTML =
                    paragraph_sum;
                modal.classList.add("open");
            };
            let closeModal = () => {
                document
                    .querySelector(`${attribute} .details--modal`)
                    .classList.remove("open");
                document.querySelector("body").style.overflow = "scroll";
            };

            document.querySelectorAll(`${attribute} h5`).forEach((elem) => {
                elem.addEventListener("click", openModal);
            });
            document
                .querySelector(`${attribute} .details--modal .close-x`)
                .addEventListener("click", closeModal);
        }
    }

    if (
        document.querySelector(
            '[sf-component="site-corporate-carousel-slider"][sf-version="1.0"]'
        )
    ) {
        sliderSetupScript(
            '[sf-component="site-corporate-carousel-slider"][sf-version="1.0"]',
            "site_corporate_1"
        );
    }

    (function ($) {
        $(function () {
            $.widget("sf.corporateCarouselSlider", {
                _create: function () {
                    let viewportWidth = $(window).width();

                    console.log("corporateCarouselSlider _create", viewportWidth);

                    if (viewportWidth > 1024) {
                        this.init();
                    } else {
                        this.initMobile();
                    }
                },

                init: function () {
                    console.log("corporateCarouselSlider init");

                    this.scrollingArea = $(this.element).find("#scrollingArea");
                    this.slideHandler = $(this.element).find(".slide-handler");

                    this.scrollingContent = $(this.element).find("#scrollingContent");

                    $(this.slideHandler)[0].disabled = false;
                    $(this.slideHandler)[0].addEventListener("input", () => {
                        this.move();
                    });
                },

                move: function (event) {
                    console.log("corporateCarouselSlider move");

                    let scrollingAreaPaddingLeft = parseInt(
                        getComputedStyle($(this.scrollingArea)[0], null).getPropertyValue(
                            "padding-left"
                        )
                    );
                    let scrollingAreaWidth = $(this.scrollingArea)[0].offsetWidth;
                    let scrollingContentWidth =
                        $(this.scrollingContent)[0].offsetWidth + scrollingAreaPaddingLeft;
                    let scrollDistance =
                        ($(this.slideHandler)[0].value *
                            (scrollingContentWidth - scrollingAreaWidth)) /
                        100;

                    $(this.scrollingArea)[0].scrollLeft = scrollDistance;
                },

                //- ---

                initMobile: function () {
                    console.log("corporateCarouselSlider initMobile");

                    this.slider_site_corporate_1c = $(this.element).find(
                        `#site_corporate_1`
                    ); //ottengo l'elemento slider
                    this.step_2 = $(this.element).find(
                        `.steps .scrollX .scrollX-content`
                    );
                    this.step_2_length = $(this.element).find(`.cards-box .item`).length; //ottengo collection di elementi dello slider
                    $(this.slider_site_corporate_1c).css({
                        width: `${this.slider_site_corporate_1c.offsetWidth / this.step_2_length - 1
                        }px`,
                    }); //setto la lunghezza del cursore dello slider

                    this._on(this.step_2, {
                        scroll: "moveSlide",
                    });
                },

                moveSlide: function (event) {
                    console.log("corporateCarouselSlider moveSlide");

                    let scrollPos = $(this.step_2)[0].scrollLeft;
                    let scrollingViewPort = $(this.step_2)[0].offsetWidth;
                    let scrollWidth = $(this.step_2)[0].scrollWidth;
                    let maxIndicatorValue = this.slider_site_corporate_1c.attr("max");

                    let position = scrollPos / (scrollWidth - scrollingViewPort);
                    let p = parseInt(position * maxIndicatorValue);
                    $(this.slider_site_corporate_1c).val(p);

                    if (this.slider_site_corporate_1c.value > p * 0.98) {
                        $(this.slider_site_corporate_1c).val(maxIndicatorValue);
                    }
                },
            });

            $(
                '[sf-component="site-corporate-carousel-slider"][sf-version="1.0"]'
            ).corporateCarouselSlider();
        });
    })(jQuery);
    /* slider storia end */

    /* slider IMPEGNI begin */
    function sliderSetupScript(attribute, css_slider_variable) {
        let viewportWidth = $(window).width();
        console.log("site-corporate-slider");

        if (viewportWidth >= 1024) {
        } else {
            let slider_site_corporate_1c = document.querySelector(
                `${attribute} #${css_slider_variable}`
            ); //ottengo l'elemento slider
            let step_2 = document.querySelector(
                `${attribute}  .steps .scrollX .scrollX-content`
            );
            let step_2_length = document.querySelectorAll(
                `${attribute} .cards-box .item`
            ).length; //ottengo collection di elementi dello slider
            slider_site_corporate_1c.style.setProperty(
                `--${css_slider_variable}`,
                `${slider_site_corporate_1c.offsetWidth / step_2_length - 1}px`
            ); //setto la lunghezza del cursore dello slider

            slider_site_corporate_1c.oninput = function () {
                slider_site_corporate_1c.value = this.value;
            };

            window.addEventListener("resize", () => {
                slider_site_corporate_1c.style.setProperty(
                    `--${css_slider_variable}`,
                    `${slider_site_corporate_1c.offsetWidth / step_2_length}px`
                ); //lunghezza del cursore dello slider
            });

            let openModal = (event) => {
                console.log(event.currentTarget);
                document.querySelector("body").style.overflow = "hidden";
                let paragraphs_collection =
                    event.currentTarget.parentElement.querySelectorAll(".column p");
                let title =
                    event.currentTarget.parentElement.querySelector(".title").innerHTML;
                let paragraph_sum = "";
                paragraphs_collection.forEach((p) => {
                    paragraph_sum += `${p.innerHTML}\n\n`;
                });
                let modal = document.querySelector(`${attribute} .details--modal`);
                modal.querySelector(`${attribute} .details--modal--title`).innerHTML =
                    title;
                modal.querySelector(`${attribute} .details--modal--text`).innerHTML =
                    paragraph_sum;
                modal.classList.add("open");
            };
            let closeModal = () => {
                document
                    .querySelector(`${attribute} .details--modal`)
                    .classList.remove("open");
                document.querySelector("body").style.overflow = "scroll";
            };

            document.querySelectorAll(`${attribute} h5`).forEach((elem) => {
                elem.addEventListener("click", openModal);
            });
            document
                .querySelector(`${attribute} .details--modal .close-x`)
                .addEventListener("click", closeModal);
        }
    }

    if (
        document.querySelector(
            '[sf-component="site-corporate-carousel-slider"][sf-version="1.0c"]'
        )
    ) {
        sliderSetupScript(
            '[sf-component="site-corporate-carousel-slider"][sf-version="1.0c"]',
            "site_corporate_1c_impegni"
        );
    }

    (function ($) {
        $(function () {
            $.widget("sf.corporateCarouselSlider", {
                _create: function () {
                    let viewportWidth = $(window).width();

                    console.log("corporateCarouselSlider _create", viewportWidth);

                    if (viewportWidth > 1024) {
                        this.init();
                    } else {
                        this.initMobile();
                    }
                },

                init: function () {
                    console.log("corporateCarouselSlider init");

                    this.scrollingArea = $(this.element).find("#scrollingArea");
                    this.slideHandler = $(this.element).find(".slide-handler");

                    this.scrollingContent = $(this.element).find("#scrollingContent");

                    $(this.slideHandler)[0].disabled = false;
                    $(this.slideHandler)[0].addEventListener("input", () => {
                        this.move();
                    });
                },

                move: function (event) {
                    console.log("corporateCarouselSlider move");

                    let scrollingAreaPaddingLeft = parseInt(
                        getComputedStyle($(this.scrollingArea)[0], null).getPropertyValue(
                            "padding-left"
                        )
                    );
                    let scrollingAreaWidth = $(this.scrollingArea)[0].offsetWidth;
                    let scrollingContentWidth =
                        $(this.scrollingContent)[0].offsetWidth + scrollingAreaPaddingLeft;
                    let scrollDistance =
                        ($(this.slideHandler)[0].value *
                            (scrollingContentWidth - scrollingAreaWidth)) /
                        100;

                    $(this.scrollingArea)[0].scrollLeft = scrollDistance;
                },

                //- ---

                initMobile: function () {
                    console.log("corporateCarouselSlider initMobile");

                    this.slider_site_corporate_1c = $(this.element).find(
                        `#site_corporate_1c_impegni`
                    ); //ottengo l'elemento slider
                    this.step_2 = $(this.element).find(
                        `.steps .scrollX .scrollX-content`
                    );
                    this.step_2_length = $(this.element).find(`.cards-box .item`).length; //ottengo collection di elementi dello slider
                    $(this.slider_site_corporate_1c).css({
                        width: `${this.slider_site_corporate_1c.offsetWidth / this.step_2_length - 1
                        }px`,
                    }); //setto la lunghezza del cursore dello slider

                    this._on(this.step_2, {
                        scroll: "moveSlide",
                    });
                },

                moveSlide: function (event) {
                    console.log("corporateCarouselSlider moveSlide");

                    let scrollPos = $(this.step_2)[0].scrollLeft;
                    let scrollingViewPort = $(this.step_2)[0].offsetWidth;
                    let scrollWidth = $(this.step_2)[0].scrollWidth;
                    let maxIndicatorValue = this.slider_site_corporate_1c.attr("max");

                    let position = scrollPos / (scrollWidth - scrollingViewPort);
                    let p = parseInt(position * maxIndicatorValue);
                    $(this.slider_site_corporate_1c).val(p);

                    if (this.slider_site_corporate_1c.value > p * 0.98) {
                        $(this.slider_site_corporate_1c).val(maxIndicatorValue);
                    }
                },
            });

            $(
                '[sf-component="site-corporate-carousel-slider"][sf-version="1.0c"]'
            ).corporateCarouselSlider();
        });
    })(jQuery);
    /* slider IMPEGNI end */

    /* slider HIGHLIGHT begin */
    function sliderSetupScript(attribute, css_slider_variable) {
        let viewportWidth = $(window).width();
        console.log("site-corporate-slider");

        if (viewportWidth >= 1024) {
        } else {
            let slider_site_corporate_1c = document.querySelector(
                `${attribute} #${css_slider_variable}`
            ); //ottengo l'elemento slider
            let step_2 = document.querySelector(
                `${attribute}  .steps .scrollX .scrollX-content`
            );
            let step_2_length = document.querySelectorAll(
                `${attribute} .cards-box .item`
            ).length; //ottengo collection di elementi dello slider
            slider_site_corporate_1c.style.setProperty(
                `--${css_slider_variable}`,
                `${slider_site_corporate_1c.offsetWidth / step_2_length - 1}px`
            ); //setto la lunghezza del cursore dello slider

            slider_site_corporate_1c.oninput = function () {
                slider_site_corporate_1c.value = this.value;
            };

            window.addEventListener("resize", () => {
                slider_site_corporate_1c.style.setProperty(
                    `--${css_slider_variable}`,
                    `${slider_site_corporate_1c.offsetWidth / step_2_length}px`
                ); //lunghezza del cursore dello slider
            });

            let openModal = (event) => {
                console.log(event.currentTarget);
                document.querySelector("body").style.overflow = "hidden";
                let paragraphs_collection =
                    event.currentTarget.parentElement.querySelectorAll(".column p");
                let title =
                    event.currentTarget.parentElement.querySelector(".title").innerHTML;
                let paragraph_sum = "";
                paragraphs_collection.forEach((p) => {
                    paragraph_sum += `${p.innerHTML}\n\n`;
                });
                let modal = document.querySelector(`${attribute} .details--modal`);
                modal.querySelector(`${attribute} .details--modal--title`).innerHTML =
                    title;
                modal.querySelector(`${attribute} .details--modal--text`).innerHTML =
                    paragraph_sum;
                modal.classList.add("open");
            };
            let closeModal = () => {
                document
                    .querySelector(`${attribute} .details--modal`)
                    .classList.remove("open");
                document.querySelector("body").style.overflow = "scroll";
            };

            document.querySelectorAll(`${attribute} h5`).forEach((elem) => {
                elem.addEventListener("click", openModal);
            });
            document
                .querySelector(`${attribute} .details--modal .close-x`)
                .addEventListener("click", closeModal);
        }
    }

    if (
        document.querySelector(
            '[sf-component="site-corporate-carousel-slider"][sf-version="1.0d"]'
        )
    ) {
        sliderSetupScript(
            '[sf-component="site-corporate-carousel-slider"][sf-version="1.0d"]',
            "site_corporate_1d_slider"
        );
    }

    (function ($) {
        $(function () {
            $.widget("sf.corporateCarouselSlider", {
                _create: function () {
                    let viewportWidth = $(window).width();

                    console.log("corporateCarouselSlider _create", viewportWidth);

                    if (viewportWidth > 1024) {
                        this.init();
                    } else {
                        this.initMobile();
                    }
                },

                init: function () {
                    console.log("corporateCarouselSlider init");

                    this.scrollingArea = $(this.element).find("#scrollingArea");
                    this.slideHandler = $(this.element).find(".slide-handler");

                    this.scrollingContent = $(this.element).find("#scrollingContent");

                    $(this.slideHandler)[0].disabled = false;
                    $(this.slideHandler)[0].addEventListener("input", () => {
                        this.move();
                    });
                },

                move: function (event) {
                    console.log("corporateCarouselSlider move");

                    let scrollingAreaPaddingLeft = parseInt(
                        getComputedStyle($(this.scrollingArea)[0], null).getPropertyValue(
                            "padding-left"
                        )
                    );
                    let scrollingAreaWidth = $(this.scrollingArea)[0].offsetWidth;
                    let scrollingContentWidth =
                        $(this.scrollingContent)[0].offsetWidth + scrollingAreaPaddingLeft;
                    let scrollDistance =
                        ($(this.slideHandler)[0].value *
                            (scrollingContentWidth - scrollingAreaWidth)) /
                        100;

                    $(this.scrollingArea)[0].scrollLeft = scrollDistance;
                },

                //- ---

                initMobile: function () {
                    console.log("corporateCarouselSlider initMobile");

                    this.slider_site_corporate_1c = $(this.element).find(
                        `#site_corporate_1d_slider`
                    ); //ottengo l'elemento slider
                    this.step_2 = $(this.element).find(
                        `.steps .scrollX .scrollX-content`
                    );
                    this.step_2_length = $(this.element).find(`.cards-box .item`).length; //ottengo collection di elementi dello slider
                    $(this.slider_site_corporate_1c).css({
                        width: `${this.slider_site_corporate_1c.offsetWidth / this.step_2_length - 1
                        }px`,
                    }); //setto la lunghezza del cursore dello slider

                    this._on(this.step_2, {
                        scroll: "moveSlide",
                    });
                },

                moveSlide: function (event) {
                    console.log("corporateCarouselSlider moveSlide");

                    let scrollPos = $(this.step_2)[0].scrollLeft;
                    let scrollingViewPort = $(this.step_2)[0].offsetWidth;
                    let scrollWidth = $(this.step_2)[0].scrollWidth;
                    let maxIndicatorValue = this.slider_site_corporate_1c.attr("max");

                    let position = scrollPos / (scrollWidth - scrollingViewPort);
                    let p = parseInt(position * maxIndicatorValue);
                    $(this.slider_site_corporate_1c).val(p);

                    if (this.slider_site_corporate_1c.value > p * 0.98) {
                        $(this.slider_site_corporate_1c).val(maxIndicatorValue);
                    }
                },
            });

            $(
                '[sf-component="site-corporate-carousel-slider"][sf-version="1.0d"]'
            ).corporateCarouselSlider();
        });
    })(jQuery);
    /* slider HIGHLIGHT end */

    /* map */
    if (
        document.querySelector(
            '[sf-component="site-corporate-map"][sf-version="1.0"]'
        )
    ) {
        var viewport = $(window).width();

        if (viewport > 1023) {
            const site_corporate_map_dragger = document.querySelector(
                "#site-corporate-map .picture-desktop"
            );
            const hint = document.querySelector("#site-corporate-map .drag_hint");
            let mouseDown = false;
            let startX, startY, scrollLeft, scrollTop;
            site_corporate_map_dragger.scrollLeft = 963;
            site_corporate_map_dragger.scrollTop = 129;
            let startDragging = function (e) {
                mouseDown = true;
                startX = e.pageX - site_corporate_map_dragger.offsetLeft;
                startY = e.pageY - site_corporate_map_dragger.offsetTop;
                scrollLeft = site_corporate_map_dragger.scrollLeft;
                scrollTop = site_corporate_map_dragger.scrollTop;
            };
            let stopDragging = function (event) {
                mouseDown = false;
            };

            site_corporate_map_dragger.addEventListener("mousemove", (e) => {
                e.preventDefault();
                if (!mouseDown) {
                    return;
                }
                const x = e.pageX - site_corporate_map_dragger.offsetLeft;
                const y = e.pageY - site_corporate_map_dragger.offsetTop;
                const scroll_x = x - startX;
                const scroll_y = y - startY;
                site_corporate_map_dragger.scrollLeft = scrollLeft - scroll_x;
                site_corporate_map_dragger.scrollTop = scrollTop - scroll_y;
            });

            // document.querySelector('#site-corporate-map img').ondragstart = function() { return false; };
            site_corporate_map_dragger.addEventListener("mousedown", startDragging);
            site_corporate_map_dragger.addEventListener(
                "mouseup",
                stopDragging,
                false
            );
            site_corporate_map_dragger.addEventListener(
                "mouseleave",
                () => {
                    hint.classList.remove("hide_hint_drag");
                    stopDragging();
                },
                false
            );

            document
                .querySelector("#site-corporate-map .drag_hint")
                .addEventListener("mouseover", () => {
                    hint.classList.add("hide_hint_drag");
                });
        }
        if (viewport < 1024) {
            const zoomIN = document.querySelector("#zoomIn");
            const zoomOUT = document.querySelector("#zoomOut");
            var currentWidth = $(
                "#site-corporate-map .picture-desktop #desktop-map"
            ).width();
            var currentHeight = $(
                "#site-corporate-map .picture-desktop #desktop-map"
            ).height();
            var finalHeight;
            var finalWidth;

            console.log("currentWidth", currentWidth, "currentHeight", currentHeight);

            let zoomIn = function () {
                finalWidth = currentWidth + Math.round((20 * currentWidth) / 100);
                currentWidth = finalWidth;
                var currWidthString = currentWidth.toString() + "px";
                document.querySelector(
                    "#site-corporate-map .picture-desktop #desktop-map"
                ).style.width = currWidthString;

                if (currentWidth > 2690) {
                    document.querySelector(
                        "#site-corporate-map .picture-desktop #desktop-map"
                    ).style.width = "2690px";
                    currentWidth = 2690;
                }
                console.log("zoomIn currentW", currentWidth);
            };

            let zoomOut = function () {
                finalWidth = currentWidth - Math.round((20 * currentWidth) / 100);
                currentWidth = finalWidth;
                var currWidthString = currentWidth.toString() + "px";
                document.querySelector(
                    "#site-corporate-map .picture-desktop #desktop-map"
                ).style.width = currWidthString;

                if (currentWidth < 320) {
                    document.querySelector(
                        "#site-corporate-map .picture-desktop #desktop-map"
                    ).style.width = "320px";
                    currentWidth = 320;
                }
                console.log("zoomOut currentW", currentWidth);
            };

            zoomIN.addEventListener("click", zoomIn);
            zoomOUT.addEventListener("click", zoomOut);
        }
    }

    /* imageFill */
    if (
        document.querySelector(
            '[sf-component="site-corporate-imageFill"][sf-version="1.0"]'
        )
    ) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".comparisonSection").forEach((section) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () => `+=${section.offsetWidth}`,
                    scrub: true,
                    pin: true,
                },
                defaults: { ease: "none" },
            });
            // animate the container one way...
            tl.fromTo(
                section.querySelector(" .afterImage"),
                { yPercent: -100, x: 0 },
                { yPercent: 0 }
            )
                //.to('.beforeImage img',{ opacity:0,yPercent: 0 })
                // ...and the image the opposite way (at the same time)
                .fromTo(
                    section.querySelector(".afterImage img"),
                    { yPercent: 100, x: 0 },
                    { yPercent: 0 }
                )
                .fromTo(
                    section.querySelector(" .beforeImage img"),
                    { opacity: 1 },
                    { opacity: 0 }
                )
                .from(section.querySelector(".gradient-desktop"), { opacity: 0 })
                .from(section.querySelector(" .gradient-mobile"), { opacity: 0 })
                .from(section.querySelector(".main-title-desktop"), {
                    xPercent: -10,
                    opacity: 0,
                })
                .from(section.querySelector(".main-title-mobile"), { opacity: 0 });
        });
    }

    /* baloons */
    if (
        document.querySelector(
            '[sf-component="site-corporate-baloons"][sf-version="1.0"]'
        )
    ) {
        let viewportWidth = $(window).width();

        if (viewportWidth < 1024) {
            var scrollingArea = document.getElementById("pageContent");
            var scrollIndicator = document.getElementById("slider-step3");
            var maxIndicatorValue = scrollIndicator.getAttribute("max");

            function rangePosition() {
                let scrollPos = scrollingArea.scrollLeft;
                let scrollingViewPort = scrollingArea.offsetWidth;
                let scrollWidth = scrollingArea.scrollWidth;

                let position = scrollPos / (scrollWidth - scrollingViewPort);

                scrollIndicator.value = parseInt(position * maxIndicatorValue);

                if (scrollIndicator.value > maxIndicatorValue * 0.98) {
                    scrollIndicator.value = maxIndicatorValue;
                }
            }

            scrollingArea.addEventListener("scroll", rangePosition);
        }
    }

    /* imagefill new */
    if (
        document.querySelector(
            '[sf-component="site-corporate-imageFill"][sf-version="2.0"]'
        )
    ) {
        var viewport = $(window).width();
        gsap.registerPlugin(ScrollTrigger);
        if (viewport > 1023) {
            gsap.utils.toArray(".comparisonSection").forEach((section) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 90",
                        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                        end: () => `+=${section.offsetWidth}`,
                        onUpdate: (self) => console.log("progress:", self.progress),
                        scrub: true,
                        pin: true,
                    },
                    defaults: { ease: "none" },
                });
                var imgH;
                if (viewport < 768) {
                    imgH = 550;
                } else if (viewport < 1920) {
                    imgH = 740;
                } else {
                    imgH = (550 * viewport) / 768;
                }
                // animate the container one way...
                tl.fromTo(
                    section.querySelector(" .afterImage"),
                    { yPercent: 0, x: 0 },
                    { yPercent: 0 }
                );
                tl.fromTo(
                    section.querySelector(" .gradient-desktop"),
                    { yPercent: 0, x: 0 },
                    { yPercent: 0 }
                )
                    //.to('.beforeImage img',{ opacity:0,yPercent: 0 })
                    // ...and the image the opposite way (at the same time)
                    .fromTo(
                        section.querySelector(" .afterImage"),
                        { height: 0 },
                        { height: imgH }
                    )
                    // .fromTo(section.querySelector(".afterImage img"), { yPercent: 100, x: 0 }, { yPercent: 0 })
                    .fromTo(section.querySelector(".afterImage img"), { y: 0 }, { y: 0 })
                    .fromTo(
                        section.querySelector(".gradient-desktop"),
                        { y: 0 },
                        { y: 0 }
                    )
                    .fromTo(
                        section.querySelector(" .beforeImage img"),
                        { opacity: 1 },
                        { opacity: 0 }
                    )
                    // .from(section.querySelector(".gradient-desktop"), { opacity: 0 })
                    .from(section.querySelector(" .gradient-mobile"), { opacity: 0 })
                    // .from(section.querySelector('.main-title-desktop'), { yPercent: 10, opacity: 0 })
                    .from(section.querySelector(".main-title-mobile"), { opacity: 0 });
            });
        } else if (viewport < 1023) {
            gsap.utils.toArray(".comparisonSection").forEach((section) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 60",
                        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                        end: () => `+=${section.offsetWidth}`,
                        onUpdate: (self) => console.log("progress:", self.progress),
                        scrub: true,
                        pin: true,
                    },
                    defaults: { ease: "none" },
                });
                var imgH;
                imgH = 550;
                // animate the container one way...
                tl.fromTo(
                    section.querySelector(" .afterImage"),
                    { yPercent: 0, x: 0 },
                    { yPercent: 0 }
                );
                tl.fromTo(
                    section.querySelector(" .gradient-desktop"),
                    { yPercent: 0, x: 0 },
                    { yPercent: 0 }
                )
                    //.to('.beforeImage img',{ opacity:0,yPercent: 0 })
                    // ...and the image the opposite way (at the same time)
                    .fromTo(
                        section.querySelector(" .afterImage"),
                        { height: 0 },
                        { height: imgH }
                    )
                    // .fromTo(section.querySelector(".afterImage img"), { yPercent: 100, x: 0 }, { yPercent: 0 })
                    .fromTo(section.querySelector(".afterImage img"), { y: 0 }, { y: 0 })
                    .fromTo(
                        section.querySelector(".gradient-desktop"),
                        { y: 0 },
                        { y: 0 }
                    )
                    .fromTo(
                        section.querySelector(" .beforeImage img"),
                        { opacity: 1 },
                        { opacity: 0 }
                    )
                    // .from(section.querySelector(".gradient-desktop"), { opacity: 0 })
                    .from(section.querySelector(" .gradient-mobile"), { opacity: 0 })
                    // .from(section.querySelector('.main-title-desktop'), { yPercent: 10, opacity: 0 })
                    .from(section.querySelector(".main-title-mobile"), { opacity: 0 });
            });
        }
    }
});

var sfSlick;

(function ($) {
    $(function () {
        $.widget("sf.sfSlick", {
            _create: function () {
                console.log("sf.sfSlick", $(this.element));

                let dotsWrapper = $(this.element).attr("sf-slick-dots");
                let template = $(this.element).attr("sf-slick");

                let device = $(this.element).attr("sf-slick-device");

                let target = $(this.element).attr("sf-slick-target")
                    ? $(this.element).find($(this.element).attr("sf-slick-target"))
                    : $(this.element);

                let refresh = $($(this.element).attr("sf-slick-refresh"));
                this.next = $(this.element).find(".sf-slick-custom-next");
                this.prev = $(this.element).find(".sf-slick-custom-prev");
                this.cmds = $(this.element)
                    .closest("[sf-component]")
                    .find($(this.element).attr("sf-slick-custom-cmd"))
                    .find(" > * ");
                this.cmdsParent = $(this.element)
                    .closest("[sf-component]")
                    .find($(this.element).attr("sf-slick-custom-cmd"));

                $(this.cmds).eq(0).addClass("selected");

                console.log("sf.sfSlick prev", this.prev);
                console.log("sf.sfSlick next", this.next);
                console.log(
                    "sf.sfSlick cmds",
                    $(this.element).attr("sf-slick-custom-cmd"),
                    this.cmds
                );

                console.log("sf.sfSlick custom prev", this.prev, $(this.prev));
                console.log("sf.sfSlick custom next", this.next, $(this.prev));

                //let count = $(this.element).find('.sf-carousel-item').length;
                //$(this.element).find('.sf-carousel-article-items').addClass('sf-carousel-article-items-' + count);

                let initSlide = $(window).width() < 1024 ? 1 : 0;

                // Activare carousel only on mobile device
                if (device === "mobile" && !initSlide) {
                    return false;
                }

                let config = {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 3,
                    initialSlide: initSlide,
                    centerMode: false,
                    variableWidth: false,
                    dotsClass: "sf2-slick-dots",
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                dots: true,
                                infinite: false,
                                speed: 300,
                                slidesToShow: 1,
                                centerMode: true,
                                variableWidth: true,
                            },
                        },
                    ],
                };

                switch (template) {
                    case "stripe":
                        config.initialSlide = 0;
                        break;
                    case "card-768":
                        config.responsive[0].breakpoint = 768;
                        break;
                    case "card-2":
                        config.slidesToShow = 2;
                        config.dotsClass = "sf2-slick-dots";
                        break;
                    case "card-4":
                        config.slidesToShow = 4;
                        config.initialSlide = 0;
                        config.dotsClass = "sf2-slick-dots";
                        break;
                    case "card-6":
                        config.slidesToShow = 6;
                        config.initialSlide = 0;
                        config.dotsClass = "sf2-slick-dots";
                        break;
                    case "card-fixed-2":
                        config.slidesToShow = 2;
                    case "card-fixed":
                        config.responsive[0].settings.variableWidth = false;
                        config.responsive[0].settings.infinite = true;
                        config.responsive[0].settings.centerMode = false;
                        config.dotsClass = "sf2-slick-dots";
                        config.initialSlide = 0;
                        break;
                    case "card-fixed-768":
                        config.responsive[0].breakpoint = 768;
                        config.responsive[0].settings.variableWidth = false;
                        config.responsive[0].settings.infinite = true;
                        config.responsive[0].settings.centerMode = false;
                        config.dotsClass = "sf2-slick-dots";
                        config.initialSlide = 0;
                        break;
                    case "banner":
                        config = {
                            dots: true,
                            arrows: true,
                            infinite: false,
                            speed: 300,
                            slidesToShow: 1,
                            centerMode: false,
                            variableWidth: true,
                            dotsClass: "sf2-slick-dots",
                            prevArrow: $(this.prev),
                            nextArrow: $(this.next),
                        };
                        break;
                    case "slider":
                        config = {
                            dots: true,
                            arrows: true,
                            infinite:
                                $(this.element).attr("infinite") === "true" ? true : false,
                            speed: 300,
                            slidesToShow: 1,
                            centerMode: false,
                            variableWidth: false,
                            dotsClass: "sf2-slick-dots",
                            prevArrow: $(this.prev),
                            nextArrow: $(this.next),
                        };
                        break;
                    case "sliderTimed": //slider con scorrimento automatico impostato a 5 secondi.
                        config = {
                            dots: true,
                            arrows: true,
                            // infinite: ($(this.element).attr('infinite') === 'true') ? true : false,
                            speed: 300,
                            slidesToShow: 1,
                            centerMode: false,
                            variableWidth: false,
                            dotsClass: "sf2-slick-dots",
                            prevArrow: $(this.prev),
                            nextArrow: $(this.next),
                            autoplay:
                                $(this.element).attr("autoplay") === "true" ||
                                $(this.element).attr("autoplay") === "autoplay"
                                    ? true
                                    : false,
                            autoplaySpeed: 5000,
                        };
                        break;
                    case "visore":
                        config = {
                            dots: true,
                            arrows: false,
                            swipe: true,
                            infinite: true,
                            speed: 300,
                            slidesToShow: 1,
                            centerMode: false,
                            variableWidth: false,
                            fade: true,
                            cssEase: "linear",
                            autoplay:
                                $(this.element).attr("autoplay") === "true" ||
                                $(this.element).attr("autoplay") === "autoplay"
                                    ? true
                                    : false,
                            autoplaySpeed: 7000,
                            dotsClass: "sf2-slick-dots white",
                        };
                        break;
                    case "visore-tab":
                        config = {
                            dots: false,
                            arrows: false,
                            swipe: true,
                            infinite: true,
                            speed: 300,
                            slidesToShow: 1,
                            centerMode: false,
                            variableWidth: false,
                            fade: true,
                            cssEase: "linear",
                            autoplay:
                                $(this.element).attr("autoplay") === "true" ||
                                $(this.element).attr("autoplay") === "autoplay"
                                    ? true
                                    : false,
                            autoplaySpeed: 7000,
                            dotsClass: "sf2-slick-dots",
                        };
                        break;
                    case "table":
                        config = {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            speed: 300,
                            centerMode: false,
                            variableWidth: true,
                            dotsClass: "sf2-slick-dots",
                        };
                        break;
                    default:
                        break;
                }

                console.log("sf.sfSlick config", config);
                this.slider = $(target).slick(config);

                this._on(refresh, {
                    click: "refresh",
                });

                if (this.cmds.length > 0) {
                    $(this.cmds).eq(0).addClass("selected");
                    console.log(
                        "sf.sfSlick custom cmds",
                        $(this.element).attr("sf-slick-custom-cmd"),
                        this.cmds
                    );

                    this._on(this.cmds, {
                        click: "goTo",
                    });

                    let _this = this;
                    this.slider.on("swipe", function (event, slick, direction) {
                        console.log("sf.sfSlick SLIDE", _this.cmds);
                        console.log(
                            "sf.sfSlick SLIDE",
                            slick.currentSlide,
                            _this.cmds.eq(slick.currentSlide)
                        );

                        _this.cmds.removeClass("selected");
                        for (let i = 0; i < _this.cmds.length; i++) {
                            _this.cmdsParent
                                .eq(i - 1)
                                .find(" > * ")
                                .eq(slick.currentSlide)
                                .addClass("selected");
                        }

                        let y =
                            _this.cmds.eq(slick.currentSlide).position().left +
                            _this.cmds.parent().scrollLeft();
                        console.log("sf.sfSlick SLIDE y", y, _this.cmds);
                        _this.cmds.parent().animate({ scrollLeft: y }, 300);
                    });
                }
            },

            refresh: function () {
                console.log("sf.sfSlick refresh", this.slider);
                this.slider.slick("slickUnfilter", 0);
                setTimeout(function () {
                    $(window).trigger("resize");
                }, 500);
            },

            goTo: function (event, slick) {
                console.log("sf.sfSlick goTo", event);
                console.log("sf.sfSlick goTo", this.slider);
                console.log("sf.sfSlick goTo", $(event.currentTarget).index());

                $(this.cmds).removeClass("selected");
                $(event.currentTarget).addClass("selected");

                // this.slider.slickGoTo( $(event.currentTarget).index() );
                this.slider.slick("slickGoTo", $(event.currentTarget).index());

                //- ---

                let y =
                    this.cmds.eq($(event.currentTarget).index()).position().left +
                    this.cmds.parent().scrollLeft();
                console.log("slick SLIDE y", y, this.cmds);
                this.cmds.parent().animate({ scrollLeft: y }, 300);

                return false;
            },
        });

        var i = 3;
        sfSlick = function () {
            if (!i--) {
                clearInterval(int);
            }
            $("[sf-slick], .sf-slick")
                .not("[sf-active]")
                .attr("sf-active", "true")
                .sfSlick();
        };

        sfSlick();
        var int = setInterval(function () {
            sfSlick();
        }, 1000);
    });
})(jQuery);

/*corporate new hero image*/
$(document).ready(function () {
    if ($(".sc-new-heroImage-content").length != 0) {
        var obj = $(".sc-new-heroImage-content:first-child");
        $.each(obj, function (key, value) {
            if (value.firstElementChild.className.indexOf("text-container") > 0) {
                $(this).addClass("reverse");
            } else {
                $(this).addClass("normal");
            }
        });
    }
});

/* card category */
$(document).ready(function () {
    if ($(".card-category-container").length != 0) {
        $(".modale-category-button-right").on("click", function () {
            let questoRef = $(this).attr("href");
            setTimeout(function () {
                $("html,body").animate(
                    { scrollTop: $(questoRef).offset().top },
                    "smooth"
                );
            }, 100);
        });
        $(".filtro-pill").on("click", function () {
            let questoFiltro = $(this).data("filtro");
            let questo = $(this);
            let questaImg = $(this).find("img").attr("src");
            $(".card-category-carousel").slick("slickUnfilter");
            $(".card-category-carousel").slick("slickFilter", questoFiltro);
            setTimeout(function () {
                $(".card-category-filter-select").removeClass("show");
                $(".card-category-filter-select .align-items-center p").text(
                    questo.text()
                );
                $(
                    ".card-category-filter-select .align-items-center img:not(.chevron-down-select)"
                ).attr("src", questaImg);
            }, 50);
        });
        $(".card-category-filter-select").on("click", function () {
            $(this).addClass("show");
        });
        $(".card-category-container .filtro-pill").on("click", function () {
            $(".card-category-container .filtro-pill")
                .not(this)
                .removeClass("active");
            $(this).addClass("active");
        });
        if ($(window).width() > 1023) {
            let windowRect = window.document.body.getBoundingClientRect().x;
            let carouselRect = $(".card-category-carousel")[0].getBoundingClientRect()
                .x;
            let newMargin = windowRect - carouselRect;
            $(".card-category-carousel").each(function () {
                if (newMargin < -164) {
                    newMargin = -165;
                    $(this).css("margin-right", newMargin + "px");
                } else {
                    $(this).css("margin-right", newMargin - 30 + "px");
                }
                $(this).css("margin-left", "-30px");
            });
        } else {
            $(".card-category-carousel").each(function () {
                $(this).css("margin", "0px -15px");
            });
        }
        $(".card-category-carousel").slick({
            arrows: true,
            appendArrows: $(".news__arrows"),
            prevArrow: '<div class="news_arrow news_arrow_dir_left"></div>',
            nextArrow: '<div class="news_arrow news_arrow_dir_right"></div>',
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,
            variableHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        centerPadding: "0px",
                    },
                },
            ],
        });
        $(".card-category-carousel").each(function () {
            let $statusCardCategory = $(this)
                .parents(".card-category-container")
                .find(".card-category-status-text");
            let $slickElementCardCategory = $(this);
            let leftArrowCardCategory = $(this)
                .parents(".card-category-container")
                .find(".card-category-arrows.card-category-previous-arrow");
            let rightArrowCardCategory = $(this)
                .parents(".card-category-container")
                .find(".card-category-arrows.card-category-next-arrow");
            $slickElementCardCategory.on(
                "init reInit afterChange",
                function (event, slick, currentSlide, nextSlide) {
                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $statusCardCategory.html(
                        '<span class="first-number-boxinfo">' +
                        i +
                        "</span>" +
                        "/" +
                        "&nbsp" +
                        slick.slideCount
                    );
                    if (i === slick.slideCount) {
                        rightArrowCardCategory.addClass("d-none");
                    } else {
                        if (rightArrowCardCategory.hasClass("d-none")) {
                            rightArrowCardCategory.removeClass("d-none");
                        }
                    }
                    if (i === 1) {
                        leftArrowCardCategory.addClass("d-none");
                    } else {
                        if (leftArrowCardCategory.hasClass("d-none")) {
                            leftArrowCardCategory.removeClass("d-none");
                        }
                    }
                }
            );
            leftArrowCardCategory.click();
        });
        $(window).on("resize", function () {
            if ($(window).width() > 1023) {
                let windowRect = window.document.body.getBoundingClientRect().x;
                let carouselRect = $(
                    ".card-category-carousel"
                )[0].getBoundingClientRect().x;
                let newMargin = windowRect - carouselRect;
                $(".card-category-carousel").each(function () {
                    if (newMargin < -164) {
                        newMargin = -165;
                        $(this).css("margin-right", newMargin + "px");
                    } else {
                        $(this).css("margin-right", newMargin - 30 + "px");
                    }
                    $(this).css("margin-left", "-30px");
                });
            } else {
                $(".card-category-carousel").each(function () {
                    $(this).css("margin", "0px -15px");
                });
            }
            if ($(".card-category-carousel").hasClass("slick-initialized")) {
                $(".card-category-carousel").slick("resize");
            } else {
                $(".card-category-carousel").slick({
                    arrows: false,
                    appendArrows: $(".card-category-arrows"),
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                });
            }
        });
    }
});

function slideCardsCategory(dir) {
    let slider = $(".card-category-carousel");
    if (dir === "+") {
        slider.slick("slickNext");
    } else if (dir === "-") {
        slider.slick("slickPrev");
    }
}
/* checkbox cards */
$(document).ready(function () {
    $(".checkbox-card-checkbox").on("click", function () {
        if ($(this).prop("checked") == true) {
            $(this).parent().addClass("selezionato");
        } else {
            $(this).parent().removeClass("selezionato");
        }
    });
});
/* modale explorer */
$(window).ready(function () {
    if (document.documentMode != undefined) {
        $(".ModaleExplorer-container").removeClass("d-none");
    }

    $(".ModaleExplorer-button-banner-info").click(function () {
        $(".ModaleExplorer-container").addClass("d-none");
    });
});
/* eataly */
$(window).ready(function () {
    if ($('[sf-component="eataly"]').length != 0) {
        (function ($) {
            $(function () {
                $.widget("sf.switchMode", {
                    _create: function () {
                        void 0;

                        this.arrowLeft = $(this.element).find(".arrows-box .arrow-left");
                        this.arrowRight = $(this.element).find(".arrows-box .arrow-right");

                        this._on(this.arrowLeft, {
                            click: "prev",
                        });

                        this._on(this.arrowRight, {
                            click: "next",
                        });

                        this.init();
                    },

                    showHide: function () {
                        this.arrowItem.hide();
                        // this.arrowItem.eq(this.current).fadeIn(300);
                        this.arrowItem.eq(this.current).show();

                        this.item.hide();
                        // this.item.eq(this.current).fadeIn(300);
                        this.item.eq(this.current).show();
                    },

                    init: function () {
                        void 0;

                        this.arrowItem = $(this.element).find(".arrows-box .arrow-item");
                        this.item = $(this.element).find(".items-box");
                        this.max = $(this.item).length - 1;

                        void 0;
                        this.current = 0;

                        this.showHide();

                        this.enable(this.current);
                    },

                    enable: function (i) {
                        // console.log('ok switcMode enable');
                        if (i == 0) {
                            this.arrowLeft.addClass("start_end_arrow");
                        } else {
                            this.arrowLeft.removeClass("start_end_arrow");
                        }

                        if (i == this.max) {
                            this.arrowRight.addClass("start_end_arrow");
                        } else {
                            this.arrowRight.removeClass("start_end_arrow");
                        }

                        i--;
                    },

                    next: function () {
                        if (this.current < this.max) {
                            this.current++;
                            // console.log('switchMode -> next '+this.current);

                            this.showHide();

                            this.enable(this.current);
                        }
                        return false;
                    },

                    prev: function () {
                        if (this.current > 0) {
                            this.current--;
                            // console.log('switchMode -> prev '+this.current);

                            this.showHide();

                            this.enable(this.current);
                        }
                        return false;
                    },
                });

                $('[sf-component="carousel-stripe"][sf-version="1.0"]').switchMode();
            });
        })(jQuery);
        (function ($) {
            $(function () {
                $.widget("sf.scrollLock", {
                    _create: function () {
                        void 0;

                        this.prefix =
                            $(this.element).attr("scroll-lock-prefix") || "scrollLocked";

                        //-main element pointer ---
                        this.stage = $(this.element);
                        this.stageHeight = $(this.element).innerHeight();
                        //- get first element as content ---
                        this.content = $(this.element).find("> *").eq(0);

                        this.content.addClass("scrollLock__content");

                        this._on($(window), {
                            resize: "init",
                            scroll: "scroll",
                        });
                    },

                    scroll: function () {
                        void 0;

                        if ($(window).width() < 1024) {
                            return false;
                        }

                        let st = $(window).scrollTop();
                        this.startLock = this.stage.offset().top;
                        this.endScroll =
                            this.stage.offset().top + (this.stageHeight - $(window).height());
                        this.outScroll = this.stage.offset().top + this.stageHeight;

                        void 0;
                        if (st >= this.startLock) {
                            if (st > this.outScroll) {
                                this.stage.removeClass(this.prefix + "--active");
                            } else {
                                this.stage.addClass(this.prefix + "--active");

                                if (st >= this.endScroll) {
                                    this.stage
                                        .removeClass(this.prefix + "--start")
                                        .addClass(this.prefix + "--end");
                                } else {
                                    this.stage
                                        .removeClass(this.prefix + "--end")
                                        .addClass(this.prefix + "--start");
                                }
                            }
                        } else {
                            this.stage
                                .removeClass(this.prefix + "--start")
                                .removeClass(this.prefix + "--end")
                                .removeClass(this.prefix + "--active");
                        }
                    },
                });

                $("[scroll-lock]").scrollLock();

                //- ---

                $.widget("sf.splitSlideshow", {
                    _create: function () {
                        void 0;

                        this.activeClass = "splitSlideshow--active";

                        //-main element pointer ---
                        this.stage = $(this.element);
                        this.stageHeight = $(this.element).innerHeight();
                        //- get first element as content ---
                        this.content = $(this.element).find("> *").eq(0);

                        //- duplicate slider and switch picture position  --
                        this.sliderLeft = $(this.element).find(".slider");
                        this.sliderRight = $(this.sliderLeft)
                            .clone()
                            .addClass("plitSlideshow--right")
                            .insertAfter(this.sliderLeft);
                        $(this.sliderLeft).addClass("plitSlideshow--left");
                        $(this.sliderRight)
                            .find("picture:first-child")
                            .insertAfter($(this.sliderRight).find("picture:last-child"));

                        this._on($(window), {
                            // resize: "init",
                            scroll: "scroll",
                        });
                    },

                    scroll: function () {
                        // console.log( 'sf.splitSlideshow scroll' );

                        if ($(window).width() < 1024) {
                            return false;
                        }

                        let st = $(window).scrollTop();
                        this.start = this.stage.offset().top - $(window).height() + 10;
                        this.end = this.stage.offset().top + this.stageHeight;

                        // console.log( 'sf.splitSlideshow check initLock: ', st+" >= "+this.startLock );
                        if (st > this.start) {
                            if (st >= this.end) {
                                //- belowe ---
                                this.stage.removeClass(this.activeClass);
                            } else {
                                //- active ---
                                this.stage.addClass(this.activeClass);
                            }
                        } else {
                            //- abowe ---
                            this.stage.removeClass(this.activeClass);
                        }
                    },
                });

                $("[split-slideshow]").splitSlideshow();

                //- ---

                //- Flag prevent multiple action at the same time ---
                var lockTopFlag = false;

                $.widget("sf.lockTop", {
                    _create: function () {
                        void 0;

                        /*if ( !sfUrl.isProd() ){
                $('body').css( {'border': '5px solid #f00'} );
            }*/

                        this.active = true;
                        this.fromTop = true; // get information abaut where you come from
                        this.activeClass = "lockTop--active";

                        //-main element pointer ---
                        this.stage = $(this.element);
                        this.stageHeight = $(this.element).innerHeight();

                        this._on($(window), {
                            scroll: "scroll",
                        });

                        this.scroll();
                    },

                    scroll: function () {
                        void 0;

                        if ($(window).width() < 1024) {
                            return false;
                        }

                        let st = $(window).scrollTop();

                        //- activity Y coordinates ---
                        this.start = this.stage.offset().top - $(window).height();
                        this.end = this.stage.offset().top + this.stageHeight;

                        //- anchor Y coordinates based on origin ---
                        this.anchorTop = this.stage.offset().top;
                        this.anchorBottom =
                            this.stage.offset().top + this.stageHeight - $(window).height();

                        void 0;
                        if (st >= this.start + 10) {
                            void 0;
                            if (st >= this.end - 10) {
                                //- belowe ---
                                this.active = false;
                                this.fromTop = false;
                                this.stage.removeClass(this.activeClass);
                            } else {
                                //- active ---
                                if (!this.active && !lockTopFlag) {
                                    lockTopFlag = true;

                                    //- disable mouse while for scrolling time ---
                                    $(window).on("wheel", function (event) {
                                        event.preventDefault();
                                    });
                                    setTimeout(function () {
                                        lockTopFlag = false;
                                        void 0;
                                        $(window).off("wheel");
                                    }, 1000);

                                    this.active = true;

                                    let anchor = this.fromTop
                                        ? this.anchorTop
                                        : this.anchorBottom;

                                    this.stage.addClass(this.activeClass);
                                    $("html, body").animate(
                                        {
                                            scrollTop: anchor,
                                        },
                                        300
                                    );
                                }
                            }
                        } else {
                            //- above ---
                            this.fromTop = true;
                            this.active = false;
                            void 0;
                            this.stage.removeClass(this.activeClass);
                        }
                    },
                });

                $("[lock-top]").lockTop();
            });
        })(jQuery);
        /*     (function ($) {
          $(function () {
            $.widget("sf.youtube", {
              _create: function () {
                void 0;

                this.videoId = $(this.element).attr("yt-video");
                this.play = $(this.element).attr("yt-play");
                this.stop = $(this.element).attr("yt-stop");
                this.onComplete = $(this.element).attr("yt-complete");
                this.playing = false;

                //- true, false, hidden ---
                //- inizialize video status flag ---
                this.initialized = false;
                //- inizialize video now ---
                this.initialize =
                  $(this.element).attr("yt-autoplay") === "hidden" ? false : true;
                //- start video now ---
                this.autoplay =
                  $(this.element).attr("yt-autoplay") === "false" ? false : true;

                this.autohide =
                  $(this.element).attr("yt-autohide") === "false" ? false : true;

                //- create an ID for this element ---
                const timestamp = new Date().getTime();
                this.containerId = String("yt-" + timestamp);
                $(this.element).attr("id", this.containerId);

                if (this.play) {
                  const playBtn = $(this.play);
                  void 0;
                  this._on(playBtn, {
                    click: "playClick",
                  });
                }

                const closeBtn = $(this.stop);
                void 0;
                this._on(closeBtn, {
                  click: "stopVideo",
                });

                this._on($(window), {
                  resize: "cleanVideo",
                  scroll: "cleanVideo",
                });

                void 0;
                if (this.initialize) {
                  this.appInit();
                }
              },

              playClick: function (event) {
                void 0;

                if ($(event.currentTarget).attr("data-target")) {
                  $($(event.currentTarget).attr("data-target")).modal("show");
                }
                event.stopPropagation();
                event.preventDefault();
                event.stopImmediatePropagation();

                //- check if is already initied ---
                if (!this.initialized) {
                  this.appInit();
                } else {
                  this.startVideo();
                }
              },

              appInit: function () {
                void 0;

                this.initialized = true;

                let _this = this;
                this.player = new YT.Player(this.containerId, {
                  videoId: this.videoId,
                  playerVars: {
                    autoplay: this.autoplay,
                    playlist: this.video_id,
                    //'loop': 1,
                    controls: 0,
                    mute: 0,
                    rel: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    fs: 0,
                    showinfo: 0,
                    cc_load_policy: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                  },
                  events: {
                    onReady: function (event) {
                      _this.onPlayerReady(event, _this);
                    },
                    onStateChange: function (event) {
                      _this.onPlayerStateChange(event, _this);
                    },
                  },
                });

                void 0;
              },

              onPlayerReady: function (event, _this) {
                void 0;

                if (_this.autoplay) {
                  event.target.playVideo();
                }
              },

              onPlayerStateChange: function (event, _this) {
                void 0;

                if (event.data == YT.PlayerState.PLAYING) {
                  _this.playing = true;
                }

                if (event.data == YT.PlayerState.ENDED) {
                  void 0;
                  if (!_this.initialize) {
                    void 0;
                    //- video is not inizialized on page ready, hide if completed ---
                    _this.cleanVideo();
                  }

                  if (this.onComplete) {
                    $(this.onComplete).trigger("click");
                  }
                }
              },

              startVideo: function (e) {
                void 0;
                void 0;
                void 0;
                //- display element for hidden player ---
                $("#" + this.containerId).show();

                this.player.playVideo();
              },

              stopVideo: function () {
                void 0;
                this.playing = false;
                this.player.stopVideo();
                return true;
              },

              cleanVideo: function () {
                void 0;

                if (this.autohide && this.playing) {
                  void 0;

                  this.playing = false;
                  this.player.pauseVideo();
                  this.player.seekTo(0, true);
                  $("#" + this.containerId).hide();
                }
              },
            });

            //- ---

            var apiSrc = "https://www.youtube.com/iframe_api";
            if (
              $("[yt-video]").length > 0 ||
              $('[sf-version="5.0"][sf-component="hero"]').length > 0
            ) {
              // check if yt script exists
              let ytScript = $(document).find('script[src="' + apiSrc + '"]');
              if (ytScript.length === 0) {
                // add it
                ytScript = document.createElement("script");
                ytScript.src = apiSrc;
                const firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(ytScript, firstScriptTag);
              }
            }

            //- ---

            var i = 3;
            var int = null;

            sfYoutube = function (force) {
              void 0;
              if (!i-- || force === true) {
                clearInterval(int);
              }
              $("[yt-video]")
                .not("[sf-active]")
                .attr("sf-active", "true")
                .youtube();
            };

            window.onYouTubeIframeAPIReady = function () {
              void 0;

              if ($('[sf-version="5.0"][sf-component="hero"]').length > 0) {
                void 0;

                if (
                  $('[sf-version="5.0"][sf-component="hero"]').attr(
                    "sf-autoplay"
                  ) != "false"
                ) {
                  hero5Video();
                } else {
                  $(window).on("scroll", function () {
                    SfPlayerClear();
                  });
                }
              }

              $('[sf-version="5.0"][sf-component="hero"] .btnPlay').on(
                "click",
                function () {
                  void 0;
                  hero5Video();
                }
              );

              sfYoutube();
              int = setInterval(function () {
                sfYoutube();
              }, 1000);
            };

            //- ---

            void 0;

            void 0;

            // 3. This function creates an <iframe> (and YouTube player)
            //    after the API code downloads.
            var sfPlayer;
            function hero5Video() {
              void 0;

              $('[sf-version="5.0"][sf-component="hero"] .btnPlay').hide();

              var w = $(window).width();

              switch (
                $('[sf-version="5.0"][sf-component="hero"]').attr("campaign")
              ) {
                case "smart-conversation":
                  var video_id = "vXLoBLR0EtQ"; // mobile
                  if (w > 1023) {
                    video_id = "xy-uxKEhsYs"; // desktop
                  } else {
                    if (w > 540) {
                      video_id = "P9jgEwOMBrI"; // tablet
                    }
                  }
                  break;
                case "cappottoImprese":
                  var video_id = "7djle1UZVeo";
                  if (w > 1023) {
                    video_id = "gcimt6_jo_8";
                  } else {
                    if (w > 540) {
                      video_id = "OKDEf3qgvdU";
                    }
                  }
                  break;
                case "cappotto":
                default:
                  var video_id = "7E47-YdnkCQ";
                  if (w > 1023) {
                    video_id = "iZXGx2sJuDc";
                  } else {
                    if (w > 540) {
                      video_id = "HkIeOk0fvLY";
                    }
                  }
                  break;
              }

              sfPlayer = new YT.Player("player", {
                videoId: video_id,
                playerVars: {
                  autoplay: 1,
                  playlist: video_id,
                  //'loop': 1,
                  controls: 0,
                  mute: 1,
                  rel: 0,
                  showinfo: 0,
                  modestbranding: 1,
                  fs: 0,
                  showinfo: 0,
                  cc_load_policy: 0,
                  iv_load_policy: 3,
                  modestbranding: 1,
                },
                events: {
                  onReady: SfonPlayerReady,
                  onStateChange: SfonPlayerStateChange,
                },
              });
            }

            // 4. The API will call this function when the video player is ready.
            function SfonPlayerReady(event) {
              void 0;

              event.target.playVideo();

              // total_video_time = (player.getDuration()*1000) - restart_before;
              // setTimeout(checkvideopos, total_video_time);


            }

            function SfPlayerClear() {
              $("#player").remove();
              $('[sf-version="5.0"][sf-component="hero"] .btnPlay')
                .show()
                .before($('<div id="player"></div>'));
            }

            // 5. The API calls this function when the player's state changes.
            //    The function indicates that when playing a video (state=1),
            //    the player should play for six seconds and then stop.
            var done = false;
            function SfonPlayerStateChange(event) {
              void 0;

              if (event.data == YT.PlayerState.ENDED) {
                //sfPlayer.seekTo(0);
                //sfPlayer.playVideo();

                SfPlayerClear();
              }
            }
          });
        })(jQuery); */
    }
});

//info-service.js
(function ($) {
    $(function () {
        $.widget("sf.infoService", {
            _create: function () {
                console.log("sf.infoService");

                //- carousel ---
                this.step = $(this.element).find(".sf-info-service-desk .step");

                this.items = $(this.element).find(
                    ".sf-info-service-mobile .info-service-card-container .item"
                );
                this.areas = $(this.element).find(".sf-info-service-desk map area");

                this.infoDesk = $(this.element).find(".text-pagination > .count");
                this.prevDesk = $(this.element).find(".text-pagination > .icon-prev");
                this.nextDesk = $(this.element).find(".text-pagination > .icon-next");
                this.prevMobile = $(this.element).find(
                    ".text-pagination > .sf-slick-custom-prev"
                );
                this.nextMobile = $(this.element).find(
                    ".text-pagination > .sf-slick-custom-next"
                );

                this._on(this.prevDesk, {
                    click: "prev",
                });

                this._on(this.nextDesk, {
                    click: "next",
                });

                this._on(this.prevMobile, {
                    click: "pagination",
                });
                this._on(this.nextMobile, {
                    click: "pagination",
                });

                this._on(this.areas, {
                    click: "goTo",
                });

                // step 1 desk
                $(".sf-info-service-desk .step .linkPicture1-1").on(
                    "click",
                    this.change1_1
                );
                $(".sf-info-service-desk .step .linkPicture1-2").on(
                    "click",
                    this.change1_2
                );
                $(".sf-info-service-desk .step .linkPicture1-3").on(
                    "click",
                    this.change1_3
                );

                // step 2 desk
                $(".sf-info-service-desk .step .linkPicture2-1").on(
                    "click",
                    this.change2_1
                );
                $(".sf-info-service-desk .step .linkPicture2-2").on(
                    "click",
                    this.change2_2
                );

                // pagination mobile
                $(".sf-info-service-mobile .info-service-card-container").on(
                    "swipe",
                    this.pagination
                );

                this.init();
            },

            init: function () {
                console.log("sf.infoService init");

                this.max = $(this.step).length;

                this.current = 1;

                if ($(window).width() < 1024) {
                    this.pagination();
                } else {
                    this.enable(this.current);
                }

                $(".sf-info-service-desk .pictures .picture1-2").hide();
                $(".sf-info-service-desk .pictures .picture1-3").hide();
                $(".sf-info-service-desk .pictures .picture2-2").hide();
                $(
                    ".sf-info-service-desk .step .service-box-content .text-plus1-2"
                ).hide();
                $(
                    ".sf-info-service-desk .step .service-box-content .text-plus1-3"
                ).hide();
                $(
                    ".sf-info-service-desk .step .service-box-content .text-plus2-2"
                ).hide();
            },

            enable: function (i) {
                if (i == 1) {
                    this.prevDesk.css({ opacity: 0 });
                } else {
                    this.prevDesk.css({ opacity: 1 });
                }

                if (i == this.max) {
                    this.nextDesk.css({ opacity: 0 });
                } else {
                    this.nextDesk.css({ opacity: 1 });
                }

                i--;
                console.log("sf.infoService enable", i);
                console.log("sf.infoService enable", $(this.picture));
                console.log(
                    "sf.infoService enable",
                    $(this.items).eq(i).find("picture")
                );
                console.log(
                    "sf.infoService enable",
                    $(this.items).eq(i).find("picture").html()
                );
                console.log("step", $(this.step).eq(i));

                $(this.step).hide();
                $(this.step).eq(i).show();

                $(this.infoDesk).html("<b>" + this.current + "</b> / " + this.max);
            },

            goTo: function (event) {
                console.log("sf.infoService goTo", event);

                console.log("sf.infoService goTo", $(event.currentTarget).index());

                this.current = $(event.currentTarget).index() + 1;
                this.enable(this.current);

                return false;
            },

            next: function () {
                console.log("sf.infoService next");

                if (this.current < this.max) {
                    this.current++;
                    this.enable(this.current);
                }

                return false;
            },

            prev: function () {
                console.log("sf.infoService prev");

                if (this.current > 1) {
                    this.current--;
                    this.enable(this.current);
                }

                return false;
            },

            pagination: function (event, slick, direction) {
                console.log(direction);
                var slide = $(
                    ".sf-info-service-mobile .info-service-card-container .items"
                ).slick("slickCurrentSlide");
                var currentSlide = slide + 1;
                var maxMobile = $(
                    ".sf-info-service-mobile .info-service-card-container .item"
                ).length;
                console.log(currentSlide);
                console.log("maxMobile", this.maxMobile);
                if (direction == "left") {
                    $(".text-pagination .count").html(
                        "<b>" + currentSlide + "</b> / " + maxMobile
                    );
                    if (currentSlide == 1) {
                        $(".text-pagination > .icon-prev").css({ opacity: 0 });
                    } else {
                        $(".text-pagination > .icon-prev").css({ opacity: 1 });
                    }

                    if (currentSlide == maxMobile) {
                        $(".text-pagination > .icon-next").css({ opacity: 0 });
                    } else {
                        $(".text-pagination > .icon-next").css({ opacity: 1 });
                    }
                } else {
                    $(".text-pagination .count").html(
                        "<b>" + currentSlide + "</b> / " + maxMobile
                    );
                    if (currentSlide == 1) {
                        $(".text-pagination > .icon-prev").css({ opacity: 0 });
                    } else {
                        $(".text-pagination > .icon-prev").css({ opacity: 1 });
                    }

                    if (currentSlide == maxMobile) {
                        $(".text-pagination > .icon-next").css({ opacity: 0 });
                    } else {
                        $(".text-pagination > .icon-next").css({ opacity: 1 });
                    }
                }
            },
        });

        $('[sf-component="info-service"][sf-version="1.0"]').infoService();
    });
})(jQuery);

/* landing caldaia */

$(document).ready(function () {
    if ($(".landingCaldaia-hero-bg").length != 0) {
        $(".stickyLandingCaldaia a").on("click", function () {
            dataLayer.push({
                event: "customEvent",
                eventCategory: "button",
                eventAction: "landing_caldaia_click",
                eventLabel: "https://eniplenitude.com/offerta/casa/caldaie-a-gas",
            });
        });

        function landingSticky() {
            let banner = $(".stickyLandingCaldaia");
            let hero = window.document.getElementById("heroSticky");
            let heightHero = hero.offsetHeight;
            let heightBanner = banner.offsetHeight;
            let positionHeroTop = hero.getBoundingClientRect().top;
            let positionHeroBottom = hero.getBoundingClientRect().bottom;
            let positionHero = hero.getBoundingClientRect().top;
            let widnowscroll = window.pageYOffset;
            if (
                $(window).width() < 1024 &&
                !(widnowscroll >= positionHeroBottom + 500)
            ) {
                banner.removeClass("d-block");
            } else {
                banner.addClass("d-block");
            }
        }
        window.addEventListener("scroll", landingSticky);

        let pathLanding = $(".storylineIcon path").get(0);
        let lengthPathLanding = pathLanding.getTotalLength();
        pathLanding.style.strokeDasharray = lengthPathLanding;
        window.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop + document.body.scrollTop > 300) {
                var scrollPercentage =
                    (document.documentElement.scrollTop + document.body.scrollTop - 600) /
                    (document.documentElement.scrollHeight -
                        document.documentElement.clientHeight);
                var drawLenght = lengthPathLanding * scrollPercentage * 1.3;
                pathLanding.style.strokeDashoffset = lengthPathLanding - drawLenght;
                pathLanding.style.display = "block";
            }
            if (pathLanding.style.strokeDashoffset < 0) {
                $("img.coppa-lampadina").removeClass("d-none");
                $(".background-panna-landing").addClass("animazione-sfondo-landing");
            } else {
                $("img.coppa-lampadina").addClass("d-none");
                $(".background-panna-landing").removeClass("animazione-sfondo-landing");
            }
        });

        if ($(window).width() < 1024) {
            window.addEventListener("scroll", () => {
                $(".story-mobile").each(function () {
                    let storyMobileTop = $(this).offset().top;
                    // checking for partial visibility
                    if (
                        storyMobileTop - window.innerHeight / 2 <=
                        document.documentElement.scrollTop
                    ) {
                        $(this)
                            .find(".line-box-mobile-svg")
                            .addClass("animazione-story-mobile");
                    }
                });
            });
        }
    }
});

//Content Index

$(document).ready(function () {
    if ($(".ContentIndex-container").length != 0) {
        let contentIndexLink = $(".ContentIndex-list-content ul li a");

        contentIndexLink.click(function () {
            let contentIndexHref = $(this).attr("href");

            $(contentIndexHref).addClass("ContentIndex-sticky-margin");
        });
    }
});
/* new corporate */
$(document).ready(function () {
    /* card six new corp */
    if ($(".new-card-six-container").length != 0) {
        if ($(window).width() < 1024) {
            $(".new-card-six-container").slick({
                arrows: true,
                /* appendArrows: $('.card-six-caroArrow'), */
                prevArrow: $(".card-six-arrow-left"),
                nextArrow: $(".card-six-arrow-right"),
                dots: false,
                infinite: false,
                speed: 200,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
                variableHeight: true,
            });
        }

        $(window).on("resize", function () {
            if ($(window).width() < 1024) {
                if ($(".new-card-six-container").hasClass("slick-initialized")) {
                    $(".new-card-six-container").slick("resize");
                } else {
                    $(".new-card-six-container").slick({
                        arrows: true,
                        /* appendArrows: $('.card-six-caroArrow'), */
                        prevArrow: $(".card-six-arrow-left"),
                        nextArrow: $(".card-six-arrow-right"),
                        dots: false,
                        infinite: false,
                        speed: 200,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        variableWidth: true,
                        variableHeight: true,
                    });
                }
            } else {
                $(".new-card-six-container.slick-initialized").slick("unslick");
            }
        });
    }

    /* new carousel */
    if ($(".sc-new-carousel-slider-content").length != 0) {
        //Set value input 0
        $("#sc-new-carousel-input").val(0);

        let newCarousel_Band = true;
        let newCarousel_Input = false;

        $("#sc-new-carousel-input").on("click", function () {
            newCarousel_Input = true;
            newCarousel_Band = false;
        });

        $(".sc-new-carousel-slider-content").on("click", function () {
            newCarousel_Band = true;
            newCarousel_Input = false;
        });

        //Calculate dimensions
        let widthElementNewCarousel = $(
            ".sc-new-carousel-slider-content ul li"
        ).width();
        let numberElementsNewCarousel = $(
            ".sc-new-carousel-slider-content ul li"
        ).length;
        let totalWidthElementsNewCarousel =
            widthElementNewCarousel * numberElementsNewCarousel;
        let containerElementNewCarousel = $(
            ".sc-new-carousel-slider-container"
        ).width();

        //Set attribute max input range
        $("#sc-new-carousel-input").attr(
            "max",
            totalWidthElementsNewCarousel -
            containerElementNewCarousel +
            60 * (numberElementsNewCarousel - 1)
        );

        //Scroll touch
        $(".sc-new-carousel-slider-content").scroll(function (e) {
            if (newCarousel_Band) {
                $(".sc-new-carousel-slider-content").scrollLeft(e.target.scrollLeft);
                $("#sc-new-carousel-input").val(e.target.scrollLeft);
            }
        });

        //Scroll input
        $("#sc-new-carousel-input").on("input change", function () {
            $(".sc-new-carousel-slider-content").scrollLeft(
                $("#sc-new-carousel-input").val()
            );
        });

        if (
            $(window).width() > totalWidthElementsNewCarousel &&
            numberElementsNewCarousel <= 3
        ) {
            $("#sc-new-carousel-input").addClass("d-none");
        } else {
            $("#sc-new-carousel-input").removeClass("d-none");
        }

        $(window).on("resize", function () {
            if (
                $(window).width() > totalWidthElementsNewCarousel &&
                numberElementsNewCarousel <= 3
            ) {
                $("#sc-new-carousel-input").addClass("d-none");
            } else {
                $("#sc-new-carousel-input").removeClass("d-none");
            }
        });
    }
});

/* Caritas */
if ($('[sf-component="caritas-slick"]').length != 0) {
    (function ($) {
        $(function () {
            $.widget("sf.caritasSlick", {
                _create: function () {
                    this.images = $(this.pictures).find("img");
                    this.content = $(this.element).find("[caritas-slick__content]");
                    this.items = $(this.element).find("[caritas-slick__item]");
                    let target = $(this.element).find(".content-slide");
                    let arrowR = $(this.element).find(".slick-arrow");

                    let config = {
                        mobileFirst: false,
                        arrows: true,
                        dots: true,
                        infinite: true,
                        speed: 350,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        variableWidth: true,
                        variableHeight: true,
                        centerMode: true,
                        swipe: false,
                        touchMove: false,
                        accesibility: false,
                        draggable: false,
                        responsive: [
                            {
                                breakpoint: 360,
                                settings: {
                                    infinite: true,
                                    arrows: true,
                                    centerMode: true,
                                    slidesToShow: 1,
                                    swipe: false,
                                    touchMove: false,
                                    accesibility: false,
                                    draggable: false,
                                },
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    infinite: false,
                                    speed: 300,
                                    arrows: true,
                                    centerMode: true,
                                    slidesToShow: 1,
                                    swipe: true,
                                    touchMove: true,
                                    accesibility: true,
                                    draggable: true,
                                },
                            },
                        ],
                    };

                    let _this = this;

                    console.log("sf.caritasSlick config", config);
                    this.slider = $(target).slick(config);
                    let slideCorrente = 1;
                },
            });

            $('[sf-component="caritas-slick"][sf-version="1.0"]').caritasSlick();
        });
    })(jQuery);
}
/*band new*/

//Set value input 0
$(document).ready(function () {
    $("#sc-new-band-input").val(0);

    let newBand_Band = true;
    let newBand_Input = false;

    $("#sc-new-band-input").on("click", function () {
        newBand_Input = true;
        newBand_Band = false;
    });

    $(".sc-new-band-timeline-years-content").on("click", function () {
        newBand_Band = true;
        newBand_Input = false;
    });

    //Calculate dimensions
    let widthElementNewBand = $(
        ".sc-new-band-timeline-years-content ul li"
    ).width();
    let numberElementsNewBand =
        $(".sc-new-band-timeline-years-content ul li").length / 2;
    let totalWidthElementsNewBand = widthElementNewBand * numberElementsNewBand;
    let containerElementNewBand = $(
        ".sc-new-band-timeline-years-container"
    ).width();

    //Set attribute max input range
    $("#sc-new-band-input").attr(
        "max",
        totalWidthElementsNewBand - containerElementNewBand
    );

    $(".sc-new-band-timeline-years-content").scroll(function (e) {
        if (newBand_Band) {
            $(".sc-new-band-timeline-years-content").scrollLeft(e.target.scrollLeft);
            $("#sc-new-band-input").val(e.target.scrollLeft);
        }
    });

    $("#sc-new-band-input").on("input change", function () {
        $(".sc-new-band-timeline-years-content").scrollLeft(
            $("#sc-new-band-input").val()
        );
    });
});

//carousel chart
$(document).ready(function () {
    if ($(".sc-new-carousel-chart-slider-card-content").length != 0) {
        setTimeout(function () {
            //Set value input 0
            /*       $('#sc-new-carousel-chart-input').val(0)
       */
            let newChart_Band = true;
            let newChart_Input = false;

            $("#sc-new-carousel-chart-input").on("click", function () {
                newChart_Input = true;
                newChart_Band = false;
            });

            $(".sc-new-carousel-chart-slider-card-content").on("click", function () {
                newChart_Band = true;
                newChart_Input = false;
            });

            //Calculate dimensions
            let widthElementNewChart = $(
                ".sc-new-carousel-chart-slider-card-content .sc-new-carousel-chart-card-container"
            ).width();
            let numberElementsNewChart = $(
                ".sc-new-carousel-chart-slider-card-content .sc-new-carousel-chart-card-container"
            ).length;
            let totalWidthElementsNewChart =
                widthElementNewChart * numberElementsNewChart;
            let containerElementNewChart = $(
                ".sc-new-carousel-chart-slider-card-container"
            ).width();

            //console.log(widthElementNewChart, numberElementsNewChart, containerElementNewChart, (50 * (numberElementsNewChart -1)))

            //Set attribute max input range + gap
            $("#sc-new-carousel-chart-input").attr(
                "max",
                totalWidthElementsNewChart -
                containerElementNewChart +
                50 * (numberElementsNewChart - 1)
            );

            //Scroll touch
            $(".sc-new-carousel-chart-slider-card-container").scroll(function (e) {
                //console.log(e.target.scrollLeft)
                if (newChart_Band) {
                    $(".sc-new-carousel-chart-slider-card-container").scrollLeft(
                        e.target.scrollLeft
                    );
                    $("#sc-new-carousel-chart-input").val(e.target.scrollLeft);
                }
            });

            //Scroll input
            $("#sc-new-carousel-chart-input").on("input change", function () {
                $(".sc-new-carousel-chart-slider-card-container").scrollLeft(
                    $("#sc-new-carousel-chart-input").val()
                );
            });
        }, 500);
    }
});

/*  countdown
if (
  document.querySelector(
    '[aem-component="countdown"][aem-version="1.0"].fascia-promoReminder'
  )
) {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  var EDay = document.getElementById("inputCountdown").value;

  console.log("data-scadenza " + EDay);

  let endDay = new Date(EDay);
  console.log(endDay);

  const countDown = new Date(endDay).getTime();
  console.log(countDown);
  const x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDown - now;
    var dayDistance = new Date(distance);

    var dd = String(dayDistance.getDate());
    var hh = String(dayDistance.getHours());
    var mm = String(dayDistance.getMinutes());
    // var ss = String(dayDistance.getSeconds()).padStart(2, "0");

    if (dd < 10) {
      var dd = "0" + dd;
      // console.log('day' + dd);
    }

    if (hh < 10) {
      var hh = "0" + hh;
      // console.log('hour' + hh);
    }

    if (mm < 10) {
      var mm = "0" + mm;
      // console.log('minute' + mm);
    }

    // console.log ('giornoCountdown' + dd);
    // console.log ('oraCountdown' + hh);
    // console.log ('minuitiCountdown' + mm);
    // console.log ('secondiCountdown' + ss);

    (document.getElementById("days").innerText = dd),
      (document.getElementById("hours").innerText = hh),
      (document.getElementById("minutes").innerText = mm);
    // document.getElementById("seconds").innerText = Math.floor(ss);

    if (dd && hh && mm == "00") {
      console.log("togli");
      document
        .querySelector('[aem-component="countdown"][aem-version="1.0"]')
        .remove();
      clearInterval(x);
    }
  }, 0);
}
 fine countdown */

/* Sanremo */
if ($(".sanremo-container").length != 0) {
    (function ($) {
        $(function () {
            $.widget("sf.box4Slick", {
                _create: function () {
                    /* var $slider = $('.slider'); */
                    var $progressBar = $(".progress");
                    var $progressBarLabel = $(".slider__label");

                    this.content = $(this.element).find("[sanremo-slick__content]");
                    this.items = $(this.element).find("[sanremo-slick__item]");
                    let target = $(this.element).find(".content-slide");

                    let config = {
                        mobileFirst: false,
                        arrows: true,
                        dots: false,
                        infinite: true,
                        focusOnSelect: false,
                        speed: 350,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        variableWidth: true,
                        variableHeight: true,
                        centerMode: true,
                        swipe: false,
                        touchMove: false,
                        accesibility: false,
                        draggable: false,
                        responsive: [
                            {
                                breakpoint: 360,
                                settings: {
                                    infinite: true,
                                    arrows: true,
                                    centerMode: true,
                                    slidesToShow: 1,
                                    swipe: false,
                                    touchMove: false,
                                    accesibility: false,
                                    draggable: false,
                                },
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    infinite: true,
                                    speed: 300,
                                    arrows: true,
                                    centerMode: true,
                                    slidesToShow: 1,
                                    swipe: true,
                                    touchMove: true,
                                    accesibility: true,
                                    draggable: true,
                                },
                            },
                        ],
                    };
                    let _this = this;

                    console.log("sf.box4Slick config", config);
                    this.slider = $(target).slick(config);
                    let $slider = this.slider;

                    $slider.on(
                        "beforeChange",
                        function (event, slick, currentSlide, nextSlide) {
                            var calc = (nextSlide / (slick.slideCount - 1)) * 100;
                            console.log("slideCount", slick.slideCount);
                            $progressBar
                                .css("background-size", calc + "% 100%")
                                .attr("aria-valuenow", calc);

                            $progressBarLabel.text(calc + "% completed");
                        }
                    );
                    $(".sr-contentx_steps-dx .sr-step1_tx").addClass("active");
                    $(".sr-contentx_steps-dx .sr-step2_tx").removeClass("active");

                    $slider.on(
                        "afterChange",
                        function (event, slick, currentSlide, nextSlide) {
                            _this.activate(currentSlide);

                            console.log(currentSlide);
                        }
                    );
                },

                activate: function (i) {
                    this.active = i;

                    switch (i) {
                        case 0:
                            $(".sr-contentx_steps-dx .sr-step1_tx").addClass("active");
                            $(".sr-contentx_steps-dx .sr-step2_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step3_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step4_tx").removeClass("active");
                            break;
                        case 1:
                            console.log($(".sr-contentx_steps-dx .sr-step2_tx"));
                            $(".sr-contentx_steps-dx .sr-step1_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step2_tx").addClass("active");
                            $(".sr-contentx_steps-dx .sr-step3_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step4_tx").removeClass("active");

                            break;
                        case 2:
                            $(".sr-contentx_steps-dx .sr-step1_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step2_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step3_tx").addClass("active");
                            $(".sr-contentx_steps-dx .sr-step4_tx").removeClass("active");
                            break;
                        case 3:
                            $(".sr-contentx_steps-dx .sr-step1_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step2_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step3_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step4_tx").addClass("active");
                            break;
                        case 4:
                            $(".sr-contentx_steps-dx .sr-step1_tx").addClass("active");
                            $(".sr-contentx_steps-dx .sr-step2_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step3_tx").removeClass("active");
                            $(".sr-contentx_steps-dx .sr-step4_tx").removeClass("active");
                            break;
                        default:
                            break;
                    }
                },
            });

            $('[sf-component="box4-Slick"][sf-version="1.0"]').box4Slick();

            $(".sr-box7 .content_video .btnPlay").on("click", function () {
                console.log("click");
                $(".btnPlay").hide();
                /* $(".sanremo-container .sr-box7 .plyr").addClass('active'); */
                $(".sanremo-container .sr-box7 .plyr").show();

                $(".embed-responsive-item")[0].src += "?autoplay=1";
                setTimeout(function () {
                    $(".embed-responsive-item").show();
                }, 200);
            });

            const parallaxElements = document.querySelectorAll(".thumbnail");
            const parallaxElements2 = document.querySelectorAll(
                ".grouped-images-parallax"
            );

            // The parallax function
            const parallax = (elements) => {
                if (elements.length > 0) {
                    elements.forEach((element) => {
                        let y = window.innerHeight - element.getBoundingClientRect().top;
                        if (y > 0) {
                            element.style.transform =
                                "translate3d( +0, -" + 0.17 * y + "px , +0) ";
                        }
                    });
                }
            };

            //If element is in viewport, set its position
            parallax(parallaxElements);
            parallax(parallaxElements2);

            //Call the function on scroll
            window.onscroll = () => {
                parallax(parallaxElements);
                parallax(parallaxElements2);
            };
        });
    })(jQuery);
}

$(document).ready(function () {
    /* card six new corp */
    if ($(".card-6-container").length != 0) {
        if ($(window).width() < 1024) {
            $(".card-6-container").slick({
                arrows: true,
                /* appendArrows: $('.card-six-caroArrow'), */
                prevArrow: $(".card-six-arrow-left"),
                nextArrow: $(".card-six-arrow-right"),
                dots: false,
                infinite: false,
                speed: 200,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
                variableHeight: true,
            });
        }

        $(window).on("resize", function () {
            if ($(window).width() < 1024) {
                if ($(".card-6-container").hasClass("slick-initialized")) {
                    $(".card-6-container").slick("resize");
                } else {
                    $(".card-6-container").slick({
                        arrows: true,
                        /* appendArrows: $('.card-six-caroArrow'), */
                        prevArrow: $(".card-six-arrow-left"),
                        nextArrow: $(".card-six-arrow-right"),
                        dots: false,
                        infinite: false,
                        speed: 200,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        variableWidth: true,
                        variableHeight: true,
                    });
                }
            } else {
                $(".card-6-container.slick-initialized").slick("unslick");
            }
        });
    }
});

/* Hero-Extracommodity-Box - INIZIO */
$(document).ready(function () {
    if (
        $(".boxHero-xc").length > 0 &&
        $(".exComm-bg-container .exComm-container").length == 1
    ) {
        if (window.innerWidth > 1023) {
            $(".boxHero-xc")
                .detach()
                .appendTo(".exComm-bg-container .exComm-container");
        } else {
            if ($(".exComm-bg-container .exComm-mobileImage").length == 1) {
                let boxHero_mobile_container_class = "boxHero-xc-mobileCont";
                let boxHero_mobile_container =
                    '<div class="' + boxHero_mobile_container_class + '"></div>';
                $(boxHero_mobile_container).appendTo(
                    ".exComm-bg-container .exComm-mobileImage"
                );
                $(".boxHero-xc")
                    .detach()
                    .appendTo("." + boxHero_mobile_container_class);
            }
        }
        $(".boxHero-xc").removeClass("d-none");
    }
});
/* Hero-Extracommodity-Box - FINE */

/* Sticky-Extracommodity - INIZIO */

function StickyExtraCommodity() {
    if (
        $("#Sticky-Extracommodity").length != 0 &&
        $("#Sticky-Banner").length != 0
    ) {
        $("#Sticky-Banner").css("display", "none");
    }

    if ($("#Sticky-Extracommodity").length != 0) {
        if (window.innerWidth > 1023) {
            let banner = window.document.getElementById("Sticky-Extracommodity");
            let hero = window.document.getElementById("heroSticky");

            let heightHero = hero.offsetHeight;
            let heightBanner = banner.offsetHeight;

            //let smHeader = window.document.getElementById("smallHeader");
            //let smHeightHeader = smHeader.offsetHeight;
            let smHeightHeader = $(".header-wrapper .main").outerHeight();
            //console.log("smHeightHeader", smHeightHeader);

            //let lgHeader = window.document.getElementById("bigHeader");
            //let lgHeightHeader = lgHeader.offsetHeight;
            let lgHeightHeader = $(".header-wrapper").outerHeight();
            //console.log("lgHeightHeader", lgHeightHeader);

            let sumHeaderBannerHeight = smHeightHeader + heightBanner - 1;
            let positionHero = hero.getBoundingClientRect().top;

            if (smHeightHeader == 0) {
                sumHeaderBannerHeight = lgHeightHeader + heightBanner - 1;
                if (
                    positionHero + (heightBanner + heightHero) <
                    sumHeaderBannerHeight
                ) {
                    banner.classList.add("sticky-extracommodity-active");
                    banner.style.top = lgHeightHeader + "px";
                } else {
                    banner.classList.remove("sticky-extracommodity-active");
                }
            } else if (
                positionHero + (heightBanner + heightHero) <
                sumHeaderBannerHeight
            ) {
                banner.classList.add("sticky-extracommodity-active");
                banner.style.top = smHeightHeader + "px";
            } else {
                banner.classList.remove("sticky-extracommodity-active");
            }
        }
    }
}
window.addEventListener("scroll", StickyExtraCommodity);

$(document).ready(function () {
    $(".egl-xc-anchor-link").off("click");

    var nowscrolling = false;

    $(".egl-xc-anchor-link").on("click", function () {
        nowscrolling = true;

        //$('.egl-xc-anchor-link').not(this).removeClass('active');
        let href = $(this).attr("href");

        $([document.documentElement, document.body]).animate(
            {
                scrollTop: $(href).offset().top - 120,
            },
            200,
            "swing"
        );

        nowscrolling = false;
        //$(this).addClass('active');
    });

    $(".egl-xc-anchor-link").each(function () {
        if (nowscrolling != true) {
            let ancora = $(this);
            let href = $(this).attr("href");
            /*       $(this).attr('title', 'vai a ' + href) */
            let target = $(href);

            let stickyHeight;

            $(window).scroll(function () {
                var hT = target.offset().top - 60 - 90;
                var hH = target.outerHeight();
                var wH = $(window).height();
                var wS = $(this).scrollTop();

                if (
                    $("#Sticky-Extracommodity").length != 0 &&
                    $(window).width() > 1023
                ) {
                    var hT = target.offset().top - 60 - 90 - 70;
                }

                if (wS >= hT - 5 && wS <= hT + hH - 5) {
                    ancora.addClass("active");
                } else {
                    ancora.removeClass("active");
                }

                if (
                    $("#Sticky-Extracommodity").length != 0 &&
                    $(window).width() < 1023
                ) {
                    stickyHeight = $("#Sticky-Extracommodity").outerHeight();

                    if (
                        $(window).scrollTop() + $(window).height() >
                        $(document).height() - stickyHeight
                    ) {
                        console.log("near bottom!");
                        $(".egl-footer-component")
                            .last()
                            .css("margin-bottom", stickyHeight + "px");
                    }
                }
            });
        }
    });
});

/* Sticky-Extracommodity - FINE */



// Modale Form Fixata Per Coupon (Callmeback2) 31/03/23
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                        /*Validazine Real time
              $('.callmeback2-modal .was-validated .form-control:invalid').each(function () {
                  $(this).parent('.label-box').addClass('non-compilato');
                  $(this).parent('.label-box').removeClass('compilato');
              });*/
                    },
                    false
                );
            });
        },
        false
    );
})();

/*New Form Validate 31/03/2023 */
$(".label-box input, select, textarea").on("focusin", function () {
    $(this).parent(".label-box").addClass("focused");
    $(this).on("focusout", function () {
        $(this).parent(".label-box").removeClass("focused");
        let tet = $(this).attr("class");

        if ($(this).hasClass("textareanote")) {
            $(this).parent(".label-box").addClass("compilato");
        } else if ($(this).hasClass("novalidate")) {
            $(this).parent(".label-box").addClass("compilato");
        } else if ($(this).val()) {
            $(this).parent(".label-box").addClass("compilato");
            $(this).parent(".label-box").removeClass("non-compilato");
        } else {
            $(this).parent(".label-box").addClass("non-compilato");
            $(this).parent(".label-box").removeClass("compilato");
        }
    });
});

//Example verify number of character typed
$(".textareanote").keyup(function () {
    var characterCount = $(this).val().length,
        current = $("#current"),
        maximum = $("#maximum"),
        theCount = $("#the-count");

    current.text(characterCount);

    if (characterCount >= 450) {
        maximum.css("color", "#8f0001");
        current.css("color", "#8f0001");
        theCount.css("font-weight", "bold");
    } else {
        maximum.css("color", "##333333");
        theCount.css("font-weight", "normal");
    }
});

/*Js Apertura Dropdown */
$("#productsSelect").on("focusin", function () {
    $(".kit-smartHome").addClass("d-block");
});
$("#productsSelect").on("focusout", function () {
    setTimeout(function () {
        $(".kit-smartHome").removeClass("d-block");
    }, 200);
});
$(".kit-smartHome li").on("click", function () {
    $("#productsSelect").val($(this).html());
    $(".kit-smartHome").removeClass("d-block");
});
if ($("#productsSelect").length != 0) {
    $("#productsSelect").val($(".kit-smartHome li:first-of-type").html());
}

/*Only number on input*/
$(".onlynumbers").keypress(function (e) {
    if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
});

/*Only character on input */
$(".onlycharacter").keypress(function (e) {
    if (String.fromCharCode(e.keyCode).match(/[^a-z]/g, "")) return false;
});

/*drop down accessibility */
// On dropdown open
$(document).on("shown.bs.dropdown", function (event) {
    var dropdown = $(event.target);

    // Set aria-expanded to true
    dropdown.find(".dropdown-menu").attr("aria-expanded", true);

    // Set focus on the first link in the dropdown
    setTimeout(function () {
        dropdown.find(".dropdown-menu li:first-child a").focus();
    }, 10);
});

// On dropdown close
$(document).on("hidden.bs.dropdown", function (event) {
    var dropdown = $(event.target);

    // Set aria-expanded to false
    dropdown.find(".dropdown-menu").attr("aria-expanded", false);

    // Set focus back to dropdown toggle
    dropdown.find(".dropdown-toggle").focus();
});



function CardsPrev() {

    $('.card-snodo-grid__container').slick('slickPrev');
    var currentSlide = $('.card-snodo-grid__container').slick('slickCurrentSlide') + 1;
    var currentCard = $('.content-arrows').find('.currentCard');
    currentCard.html(currentSlide);

};

function CardsNext() {

    $('.card-snodo-grid__container').slick('slickNext');
    var currentSlide = $('.card-snodo-grid__container').slick('slickCurrentSlide') + 1;
    var currentCard = $('.content-arrows').find('.currentCard');
    currentCard.html(currentSlide);
}










$(document).ready(function () {

    if ($('[pln-component="graphic-chart"][pln-version="1.0"]').length != 0) {
        var months = $(".months");
        var dataMonths = [];
        var graph1Values = $(".graph1Values");
        var dataGraph1 = [];
        var graph2Values = $(".graph2Values");
        var dataGraph2 = [];
        var label1 = $('.label1');
        var label2 = $('.label2');

        var monthsMob = $(".monthsMob");
        var dataMonthsMob = [];
        var graph1ValuesMob = $(".graph1ValuesMob");
        var dataGraph1Mob = [];
        var label1Mob = $('.label1Mob');
        var graph2ValuesMob = $(".graph2ValuesMob");
        var dataGraph2Mob = [];
        var label2Mob = $('.label2Mob');
        console.log('graph2ValuesMob', graph2ValuesMob);


        for (let i = 0; i < 12; i++) {
            dataGraph1[i] = graph1Values[i].value;
            dataGraph2[i] = graph2Values[i].value;
            dataMonths[i] = months[i].value;
            label1[i].innerHTML = graph1Values[i].value;
            label2[i].innerHTML = graph2Values[i].value;
        }

        for (let j = 0; j < 6; j++) {
            dataGraph1Mob[j] = graph1ValuesMob[j].value;
            dataGraph2Mob[j] = graph2ValuesMob[j].value;
            dataMonthsMob[j] = monthsMob[j].value;
            label1Mob[j].innerHTML = graph1ValuesMob[j].value;
            label2Mob[j].innerHTML = graph2ValuesMob[j].value;
        }


        console.log('valori mesi MOB', dataMonthsMob);
        console.log('valori grafico 1 MOB', dataGraph1Mob);
        // console.log('valori grafico 2', dataGraph2);

        const ctx1 = document.getElementById('GraphicChart1');
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: dataMonths,
                datasets: [{
                    label: '',
                    data: dataGraph1,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#009e62'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/kWh'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#009e62',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

        const ctx1Mob = document.getElementById('GraphicChart1Mob');
        new Chart(ctx1Mob, {
            type: 'line',
            data: {
                labels: dataMonthsMob,
                datasets: [{
                    label: '',
                    data: dataGraph1Mob,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#009e62'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/kWh'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#009e62',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

        const ctx2 = document.getElementById('GraphicChart2');
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: dataMonths,
                datasets: [{
                    label: '',
                    data: dataGraph2,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#ffcd00'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/Scm'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#ffcd00',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

        const ctx2Mob = document.getElementById('GraphicChart2Mob');
        new Chart(ctx2Mob, {
            type: 'line',
            data: {
                labels: dataMonthsMob,
                datasets: [{
                    label: '',
                    data: dataGraph2Mob,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#ffcd00'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/kWh'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#ffcd00',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

    }
});

(function ($) {
    $(function () {

        $.widget("sf.whatsappCallmeback", {

            _create: function () {


                this.id = $(this.element).find('.modal').attr('id');
                let openBtn = $('[whatsapp="' + this.id + '"]');
                this._on($(openBtn), {
                    click: "open"
                });

                let closeBtn = $(this.element).find('.close');
                this._on($(closeBtn), {
                    click: "close"
                });

                let submitBtn = $(this.element).find('.pln-btn-primary');
                this._on($(submitBtn), {
                    click: "submit"
                });

                //this.check();
                console.log('create');
            },

            open: function (evt) {
                evt.preventDefault();
                $('#' + this.id).modal('show');
            },

            close: function (evt) {
                evt.preventDefault();
                $('#' + this.id).modal('hide');
            },

            submit: function (evt) {
                evt.preventDefault();


            },


        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="modale-whatsapp"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').whatsappCallmeback();
        }, 1000);



    });
})(jQuery);

(function ($) {
    $(function () {

        let canTraslate = false;
        $(document).ready(function () {
            if ($("[data-pln-component='landing-olimpia'][pln-version='1.0']").length != 0) {
                const timerAnimation = setTimeout(() => { console.error("TIMEOUT ENDED", canTraslate), canTraslate = true, activate(canTraslate) }, 3000,);
            }
        });
        function activate(canTraslate) {
            console.error(canTraslate)
            if (canTraslate == true) {
                $("[data-pln-component='landing-olimpia'][pln-version='1.0']").css({ 'overflow': 'auto' });
                $("[data-pln-component='landing-olimpia'][pln-version='1.0'] header").hide();
            } else {
                $("[data-pln-component='landing-olimpia'][pln-version='1.0']").css({ 'overflow': 'hidden' });
            }
        }

        function scrollTrigger(selector, options = {}) {
            let els = document.querySelectorAll(selector)
            els = Array.from(els)
            els.forEach(el => {
                addObserver(el, options)
            })
        }


        function addObserver(el, options) {
            // Check if `IntersectionObserver` is supported
            if (!('IntersectionObserver' in window)) {
                // Simple fallback
                // The animation/callback will be called immediately so
                // the scroll animation doesn't happen on unsupported browsers
                if (options.cb) {
                    options.cb(el)
                } else {
                    entry.target.classList.add('active')
                }
                // We don't need to execute the rest of the code
                return
            }
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (options.cb) {
                            options.cb(el)
                        } else {
                            entry.target.classList.add('active')
                        }
                        observer.unobserve(entry.target)
                    }
                })
            }, options)
            observer.observe(el)
        }
        // Example usages:
        /* scrollTrigger('.intro-text') */
        scrollTrigger('.scroll-reveal', {
            rootMargin: '-200px',
        })
        scrollTrigger('.loader', {
            rootMargin: '-200px',
            cb: function (el) {
                el.innerText = 'Loading...'
                setTimeout(() => {
                    el.innerText = 'Task Complete!'
                }, 1000)
            }
        })
    });
})(jQuery);
$(document).ready(function () {

    if ($('[pln-component="tag-articolo-condividi"][pln-version="1.0"]').length != 0) {

        let description = document.querySelector("meta[property='og:description']").getAttribute("content");
        let title = document.querySelector("meta[property='og:title']").getAttribute("content");
        let url = document.querySelector("meta[property='og:url']").getAttribute("content");

        //facebook
        var data = document.querySelector('[data-share="facebook"]');
        data.addEventListener("click", shareFacebook);

        function shareFacebook() {
            let facebook = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
            window.open(facebook, "_blank", "left=500,width=800,height=550");
        }

        //linkedin
        function shareLinkedin() {
            let linkedin = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
            window.open(linkedin, "_blank", "left=500,width=800,height=550");
        }

        var data = document.querySelector('[data-share="linkedin"]');
        data.addEventListener("click", shareLinkedin);

        //mail
        function shareMail() {
            let mail = 'mailto:?subject=' + title + '&body=' + description + '%20' + url;
            window.open(mail);
        }

        var data = document.querySelector('[data-share="mail"]');
        data.addEventListener("click", shareMail);

        //generic
        function shareGeneric() {
            let generic = navigator.share(data);
            window.open(generic);
        }

        var data = document.querySelector('[data-share="generic"]');
        data.addEventListener("click", shareGeneric);

        //print
        function sharePrint() {
            let print = navigator.share(data);
            window.print(print);
        }

        var data = document.querySelector('[data-share="print"]');
        data.addEventListener("click", sharePrint);

        //copy-text
        function copyText() {
            navigator.clipboard.writeText(url);
            console.log(url);
        }

        var data = document.querySelector('[data-share="copy"]');
        data.addEventListener("click", copyText);

    }

});

$(document).ready(function () {
    if ($('[aem-component="countdown"][aem-version="1.0"]').length != 0) {
        if ($('.fascia-promoReminder').hasClass('noCta')) {
            $('.text-box-promo').removeClass('col-lg-9');
            $('.text-box-promo').removeClass('col-md-9');
            $('.text-box-promo').addClass('col-lg-12');

            $('.cta-box-promo').hide();

        };
    }
});

document.addEventListener("DOMContentLoaded", function () {
    (function ($) {

        // let province = [
        // 	{ 'name': 'Agrigento', 'tag': 'AG' },
        // 	{ 'name': 'Alessandria', 'tag': 'AL' },
        // 	{ 'name': 'Ancona', 'tag': 'AN' },
        // 	{ 'name': 'Arezzo', 'tag': 'AR' },
        // 	{ 'name': 'Ascoli Piceno', 'tag': 'AP' },
        // 	{ 'name': 'Asti', 'tag': 'AT' },
        // 	{ 'name': 'Avellino', 'tag': 'AV' },
        // 	{ 'name': 'Bari', 'tag': 'BA' },
        // 	{ 'name': 'Barletta-Andria-Trani', 'tag': 'BT' },
        // 	{ 'name': 'Belluno', 'tag': 'BL' },
        // 	{ 'name': 'Benevento', 'tag': 'BN' },
        // 	{ 'name': 'Bergamo', 'tag': 'BG' },
        // 	{ 'name': 'Biella', 'tag': 'BI' },
        // 	{ 'name': 'Bologna', 'tag': 'BO' },
        // 	{ 'name': 'Bolzano/Bozen', 'tag': 'BZ' },
        // 	{ 'name': 'Brescia', 'tag': 'BS' },
        // 	{ 'name': 'Brindisi', 'tag': 'BR' },
        // 	{ 'name': 'Cagliari', 'tag': 'CA' },
        // 	{ 'name': 'Caltanissetta', 'tag': 'CL' },
        // 	{ 'name': 'Campobasso', 'tag': 'CB' },
        // 	{ 'name': 'Caserta', 'tag': 'CE' },
        // 	{ 'name': 'Catania', 'tag': 'CT' },
        // 	{ 'name': 'Catanzaro', 'tag': 'CZ' },
        // 	{ 'name': 'Chieti', 'tag': 'CH' },
        // 	{ 'name': 'Como', 'tag': 'CO' },
        // 	{ 'name': 'Cosenza', 'tag': 'CS' },
        // 	{ 'name': 'Cremona', 'tag': 'CR' },
        // 	{ 'name': 'Crotone', 'tag': 'KR' },
        // 	{ 'name': 'Cuneo', 'tag': 'CN' },
        // 	{ 'name': 'Enna', 'tag': 'EN' },
        // 	{ 'name': 'Fermo', 'tag': 'FM' },
        // 	{ 'name': 'Ferrara', 'tag': 'FE' },
        // 	{ 'name': 'Firenze', 'tag': 'FI' },
        // 	{ 'name': 'Foggia', 'tag': 'FG' },
        // 	{ 'name': 'Forlì-Cesena', 'tag': 'FC' },
        // 	{ 'name': 'Frosinone', 'tag': 'FR' },
        // 	{ 'name': 'Genova', 'tag': 'GE' },
        // 	{ 'name': 'Gorizia', 'tag': 'GO' },
        // 	{ 'name': 'Grosseto', 'tag': 'GR' },
        // 	{ 'name': 'Imperia', 'tag': 'IM' },
        // 	{ 'name': 'Isernia', 'tag': 'IS' },
        // 	{ 'name': 'L\'Aquila', 'tag': 'AQ' },
        // 	{ 'name': 'La Spezia', 'tag': 'SP' },
        // 	{ 'name': 'Latina', 'tag': 'LT' },
        // 	{ 'name': 'Lecce', 'tag': 'LE' },
        // 	{ 'name': 'Lecco', 'tag': 'LC' },
        // 	{ 'name': 'Livorno', 'tag': 'LI' },
        // 	{ 'name': 'Lodi', 'tag': 'LO' },
        // 	{ 'name': 'Lucca', 'tag': 'LU' },
        // 	{ 'name': 'Macerata', 'tag': 'MC' },
        // 	{ 'name': 'Mantova', 'tag': 'MN' },
        // 	{ 'name': 'Massa-Carrara', 'tag': 'MS' },
        // 	{ 'name': 'Matera', 'tag': 'MT' },
        // 	{ 'name': 'Messina', 'tag': 'ME' },
        // 	{ 'name': 'Milano', 'tag': 'MI' },
        // 	{ 'name': 'Modena', 'tag': 'MO' },
        // 	{ 'name': 'Monza e della Brianza', 'tag': 'MB' },
        // 	{ 'name': 'Napoli', 'tag': 'NA' },
        // 	{ 'name': 'Novara', 'tag': 'NO' },
        // 	{ 'name': 'Nuoro', 'tag': 'NU' },
        // 	{ 'name': 'Oristano', 'tag': 'OR' },
        // 	{ 'name': 'Padova', 'tag': 'PD' },
        // 	{ 'name': 'Palermo', 'tag': 'PA' },
        // 	{ 'name': 'Parma', 'tag': 'PR' },
        // 	{ 'name': 'Pavia', 'tag': 'PV' },
        // 	{ 'name': 'Perugia', 'tag': 'PG' },
        // 	{ 'name': 'Pesaro e Urbino', 'tag': 'PU' },
        // 	{ 'name': 'Pescara', 'tag': 'PE' },
        // 	{ 'name': 'Piacenza', 'tag': 'PC' },
        // 	{ 'name': 'Pisa', 'tag': 'PI' },
        // 	{ 'name': 'Pistoia', 'tag': 'PT' },
        // 	{ 'name': 'Pordenone', 'tag': 'PN' },
        // 	{ 'name': 'Potenza', 'tag': 'PZ' },
        // 	{ 'name': 'Prato', 'tag': 'PO' },
        // 	{ 'name': 'Ragusa', 'tag': 'RG' },
        // 	{ 'name': 'Ravenna', 'tag': 'RA' },
        // 	{ 'name': 'Reggio Calabria', 'tag': 'RC' },
        // 	{ 'name': 'Reggio Emilia', 'tag': 'RE' },
        // 	{ 'name': 'Rieti', 'tag': 'RI' },
        // 	{ 'name': 'Rimini', 'tag': 'RN' },
        // 	{ 'name': 'Roma', 'tag': 'RM' },
        // 	{ 'name': 'Rovigo', 'tag': 'RO' },
        // 	{ 'name': 'Salerno', 'tag': 'SA' },
        // 	{ 'name': 'Sassari', 'tag': 'SS' },
        // 	{ 'name': 'Savona', 'tag': 'SV' },
        // 	{ 'name': 'Siena', 'tag': 'SI' },
        // 	{ 'name': 'Siracusa', 'tag': 'SR' },
        // 	{ 'name': 'Sondrio', 'tag': 'SO' },
        // 	{ 'name': 'Sud Sardegna', 'tag': 'SU' },
        // 	{ 'name': 'Taranto', 'tag': 'TA' },
        // 	{ 'name': 'Teramo', 'tag': 'TE' },
        // 	{ 'name': 'Terni', 'tag': 'TR' },
        // 	{ 'name': 'Torino', 'tag': 'TO' },
        // 	{ 'name': 'Trapani', 'tag': 'TP' },
        // 	{ 'name': 'Trento', 'tag': 'TN' },
        // 	{ 'name': 'Treviso', 'tag': 'TV' },
        // 	{ 'name': 'Trieste', 'tag': 'TS' },
        // 	{ 'name': 'Udine', 'tag': 'UD' },
        // 	{ 'name': 'Valle d\'Aosta', 'tag': 'AO' },
        // 	{ 'name': 'Varese', 'tag': 'VA' },
        // 	{ 'name': 'Venezia', 'tag': 'VE' },
        // 	{ 'name': 'Verbano-Cusio-Ossola', 'tag': 'VB' },
        // 	{ 'name': 'Vercelli', 'tag': 'VC' },
        // 	{ 'name': 'Verona', 'tag': 'VR' },
        // 	{ 'name': 'Vibo Valentia', 'tag': 'VV' },
        // 	{ 'name': 'Vicenza', 'tag': 'VI' },
        // 	{ 'name': 'Viterbo', 'tag': 'VT' }
        // ]

        // let regioni = [
        // 	{ 'name': 'Abruzzo' },
        // 	{ 'name': 'Basilicata' },
        // 	{ 'name': 'Calabria' },
        // 	{ 'name': 'Campania' },
        // 	{ 'name': 'Emilia' },
        // 	{ 'name': 'Friuli' },
        // 	{ 'name': 'Lazio' },
        // 	{ 'name': 'Liguria' },
        // 	{ 'name': 'Lombardia' },
        // 	{ 'name': 'Marche' },
        // 	{ 'name': 'Molise' },
        // 	{ 'name': 'Piemonte' },
        // 	{ 'name': 'Puglia' },
        // 	{ 'name': 'Sardegna' },
        // 	{ 'name': 'Sicilia' },
        // 	{ 'name': 'Toscana' },
        // 	{ 'name': 'Trentino' },
        // 	{ 'name': 'Umbria' },
        // 	{ 'name': 'Valle' },
        // 	{ 'name': 'Veneto' }
        // ]

        // let capGenerici = [
        // 	'00100',
        // 	'06100',
        // 	'09100',
        // 	'10100',
        // 	'15100',
        // 	'16100',
        // 	'19100',
        // 	'20100',
        // 	'24100',
        // 	'25100',
        // 	'28900',
        // 	'30100',
        // 	'34100',
        // 	'35100',
        // 	'37100',
        // 	'38100',
        // 	'40100',
        // 	'41100',
        // 	'42100',
        // 	'43100',
        // 	'44100',
        // 	'44700',
        // 	'44900',
        // 	'48100',
        // 	'50100',
        // 	'56100',
        // 	'57100',
        // 	'60100',
        // 	'61100',
        // 	'65100',
        // 	'70100',
        // 	'71100',
        // 	'74100',
        // 	'80100',
        // 	'84100',
        // 	'89100',
        // 	'90100',
        // 	'95100',
        // 	'98100'
        // ]

        // SfEgon = {
        // 	// http://18.202.88.229/api/suggest/street?app_key=WPT1ENI01@QJ4UQF6E&query=via+pacinotti+verona&restrict_level=country&restrict_id=38000000001

        // 	apiUrl: 'https://wpt11.egoncloud.com/api/suggest/',
        // 	appKey: 'WPT1ENI01@QJ4UQF6E',
        // 	countryId: '38000000001',
        // 	filter: '',

        // 	arrayProvince: $('[arrayProvince]'),
        // 	province: $('[egonProvince]'),
        // 	region: $('[egonRegion]'),
        // 	city: $('[egonCity]'),
        // 	cap: $('[egonCap]'),
        // 	ul: $('<ul class="egonSuggest">').appendTo( $('[egonCity]').parent() ),
        // 	ulRegion: $('<ul class="egonSuggest">').appendTo( $('[egonRegion]').parent() ),
        // 	ulProvince: $('.egonProvince').length ? $('<ul class="egonSuggest">').appendTo( $('.egonProvince').parent() ) : $('<ul class="egonSuggest">').appendTo( $('.arrayProvince').parent() ),
        // 	$request: null,

        // 	init : function() {
        // 		console.log('SfEgon init');

        // 		this.filter = "?app_key="+this.appKey+"&restrict_level=country&restrict_id="+this.countryId;

        // 		$(this.city).attr("autocomplete", "off");
        // 		$(this.cap).attr("autocomplete", "off");
        // 		$(this.region).attr("autocomplete", "off");

        // 		let _this = this;
        // 		$(this.arrayRegioni).on( 'keyup', function( event ){
        // 			_this.getRegioniArray( event )
        // 		} );

        // 		$(this.arrayProvince).on( 'keyup', function( event ){
        // 			_this.getProvinceArray( event )
        // 		} );

        // 		$(this.province).on( 'keyup', function( event ){
        // 			_this.getProvince( event )
        // 		} );

        // 		$(this.region).on( 'keyup', function( event ){
        // 			_this.getRegion( event )
        // 		} );

        // 		$(this.city).on( 'keyup', function( event ){
        // 			_this.getCity( event )
        // 		} );

        // 		$(this.cap).on( 'keyup', function( event ){
        // 			_this.getCap( event )
        // 		} );

        // 		$(this.city).on( 'blur', function( event ){
        // 			_this.check( event )
        // 		} );

        // 		$(this.cap).on( 'blur', function( event ){
        // 			_this.check( event )
        // 		} );

        // 		$(this.region).on( 'blur', function( event ){
        // 			_this.checkRegion( event )
        // 		} );

        // 		$(this.province).on( 'blur', function( event ){
        // 			_this.checkProvince( event )
        // 		} );

        // 		$(this.arrayRegioni).on( 'blur', function( event ){
        // 			_this.checkRegioniArray( event )
        // 		} );

        // 		$(this.arrayProvince).on( 'blur', function( event ){
        // 			_this.checkProvinceArray( event )
        // 		} );
        // 	},

        // 	getCap: function( event ) {
        // 		let val = $(this.cap).val();
        // 		console.log('SfEgon getCap', val, $(this.cap));
        // 		let apiUrl = this.apiUrl + "city" + this.filter + "&query="+encodeURI(val);

        // 		if (this.$request != null){
        // 			this.$request.abort();
        // 			this.$request = null;
        // 		}

        // 		let _this = this;
        // 		this.$request = $.ajax({
        // 			type : "GET",
        // 			url : apiUrl
        // 		}).done(function(data) {

        // 			console.log('SfEgon getCap done', data);

        // 			if ( data.length == 1 ){
        // 				console.log('SfEgon getCap done', $(_this.city),$(_this.cap));
        // 				console.log('SfEgon getCap done', data[0].city, data[0].zipcode);
        // 				$(_this.city).val( data[0].city ).trigger('blur');
        // 			}
        // 		});
        // 	},

        // 	getCity: function( event ) {
        // 		let val = $(this.city).val();
        // 		console.log('SfEgon getCity', val, $(this.city));
        // 		let apiUrl = this.apiUrl + "city" + this.filter + "&query="+encodeURI(val);

        // 		if (this.$request != null){
        // 			this.$request.abort();
        // 			this.$request = null;
        // 		}

        // 		let _this = this;
        // 		this.$request = $.ajax({
        // 			type : "GET",
        // 			url : apiUrl
        // 		}).done(function(data) {

        // 			console.log('SfEgon getCity done', data);
        // 			console.log('SfEgon getCity done ul', $(_this.ul));

        //             if (data.length){
        //                 $(_this.ul).html('').show();

        //                 for (let i = 0; i < data.length; i++) {
        //                     const e = data[i];

        //                     let li = $('<li data-city="'+e.city+'" data-zipcode="'+e.zipcode+'">'+e.city+'</li>');

        //                     $(li).on('click', function( e ){
        //                         console.log('SfEgon getCity click ul', $(this).attr('data-city'), $(this).attr('data-zipcode') );
        //                         if (_this.$request != null){
        //                             _this.$request.abort();
        //                             _this.$request = null;
        //                         }
        //                         e.stopPropagation();
        //                         e.preventDefault();
        //                         $(_this.city).val( $(this).attr('data-city') );
        //                         //if ( !$(_this.cap).val() ){
        //                             if ( capGenerici.includes( $(this).attr('data-zipcode') )  ){
        //                                 $(_this.cap).val( '' );
        //                             } else {
        //                                 $(_this.cap).val( $(this).attr('data-zipcode') ).trigger('blur');
        //                             }
        //                         //}
        //                         $(_this.ul).hide();

        //                         isRequired( $(_this.city) );
        //                     });

        //                     $(li).appendTo( $(_this.ul) );
        //                 }
        //             } else {
        //                 $(_this.ul).hide();
        //             }

        // 		});
        // 	},

        // 	getRegion: function( event ) {
        // 		let val = $(this.region).val();
        // 		console.log('SfEgon getRegion', val, $(this.region), event);
        // 		let apiUrl = this.apiUrl + "region" + this.filter + "&query="+encodeURI(val);

        // 		if (this.$request != null){
        // 			this.$request.abort();
        // 			this.$request = null;
        // 		}

        // 		if ( event.keyCode == 8 ){
        // 			return false;
        // 		}

        // 		let _this = this;
        // 		this.$request = $.ajax({
        // 			type : "GET",
        // 			url : apiUrl
        // 		}).done(function(data) {

        // 			console.log('SfEgon getRegion done', data);
        // 			console.log('SfEgon getRegion done ul', $(_this.ulRegion));

        // 			$(_this.ulRegion).html('').show();

        // 			for (let i = 0; i < data.length; i++) {
        // 				const e = data[i];

        // 				let li = $('<li data-region="'+e.region+'">'+e.region+'</li>');

        // 				$(li).on('click', function( e ){
        // 					console.log('SfEgon getRegion click ul', $(this).attr('data-region') );
        // 					if (_this.$request != null){
        // 						_this.$request.abort();
        // 						_this.$request = null;
        // 					}
        // 					e.stopPropagation();
        // 					e.preventDefault();
        // 					$(_this.region).val( $(this).attr('data-region') );
        // 					$(_this.ulRegion).hide();

        // 					isRequired( $(_this.region) );
        // 				});

        // 				$(li).appendTo( $(_this.ulRegion) );
        // 			}

        // 		});
        // 	},

        // 	getRegioniArray: function( event ) {
        // 		let val = $(this.arrayRegioni ).val().toLowerCase();
        // 		console.log('SfEgon getRegioniArray', val, $(this.arrayRegioni ), event.keyCode, regioni);

        // 		if ( event.keyCode == 8 ){
        // 			return false;
        // 		}

        // 		if ( !regioni ){
        // 			return false;
        // 		}

        // 		const filtered = regioni.filter( function( regioni ){
        // 			console.log('SfEgon getRegioniArray filter', regioni.name.includes( val ), regioni);
        // 			return regioni.name.toLowerCase().includes( val );
        // 		});

        // 		console.log('SfEgon getRegioniArray filtered', filtered);

        // 		let _this = this;
        // 		$(_this.ulRegioni).html('').show();
        // 		for (let i = 0; i < filtered.length; i++) {
        // 			const e = filtered[i];

        // 			let li = $('<li data-region="'+e.name+'">'+e.name+'</li>');

        // 			$(li).on('click', function( e ){
        // 				console.log('SfEgon getRegioni click ul', $(this).attr('data-region') );
        // 				e.stopPropagation();
        // 				e.preventDefault();
        // 				$(_this.arrayRegioni ).val( $(this).attr('data-region') );
        // 				$(_this.ulRegioni).hide();

        // 				isRequired( $(_this.arrayRegioni ) );
        // 			});

        // 			$(li).appendTo( $(_this.ulRegioni) );
        // 		}
        // 	},

        // 	getProvinceArray: function( event ) {
        // 		let val = $(this.arrayProvince).val().toLowerCase();
        // 		console.log('SfEgon getProvinceArray', val, $(this.arrayProvince), event.keyCode, province);

        // 		if ( event.keyCode == 8 ){
        // 			return false;
        // 		}

        // 		if ( !province ){
        // 			return false;
        // 		}

        // 		const filtered = province.filter( function( province ){
        // 			console.log('SfEgon getProvinceArray filter', province.name.includes( val ), province);
        // 			return province.name.toLowerCase().includes( val );
        // 		});

        // 		console.log('SfEgon getProvinceArray filtered', filtered);

        // 		let _this = this;
        // 		$(_this.ulProvince).html('').show();
        // 		for (let i = 0; i < filtered.length; i++) {
        // 			const e = filtered[i];

        // 			let li = $('<li data-region="'+e.name+'">'+e.name+'</li>');

        // 			$(li).on('click', function( e ){
        // 				console.log('SfEgon getProvince click ul', $(this).attr('data-region') );
        // 				e.stopPropagation();
        // 				e.preventDefault();
        // 				$(_this.arrayProvince).val( $(this).attr('data-region') );
        // 				$(_this.ulProvince).hide();

        // 				isRequired( $(_this.arrayProvince) );
        // 			});

        // 			$(li).appendTo( $(_this.ulProvince) );
        // 		}
        // 	},

        // 	getProvince: function( event ) {
        // 		let val = $(this.province).val();
        // 		console.log('SfEgon getProvince', val, $(this.province), event.keyCode);
        // 		let apiUrl = this.apiUrl + "province" + this.filter + "&query="+encodeURI(val);

        // 		if (this.$request != null){
        // 			this.$request.abort();
        // 			this.$request = null;
        // 		}

        // 		if ( event.keyCode == 8 ){
        // 			return false;
        // 		}

        // 		let _this = this;
        // 		this.$request = $.ajax({
        // 			type : "GET",
        // 			url : apiUrl
        // 		}).done(function(data) {

        // 			console.log('SfEgon getProvince done', data);
        // 			console.log('SfEgon getProvince done ul', $(_this.ulProvince));

        // 			$(_this.ulProvince).html('').show();

        // 			for (let i = 0; i < data.length; i++) {
        // 				const e = data[i];

        // 				let li = $('<li data-region="'+e.province+'">'+e.province+'</li>');

        // 				$(li).on('click', function( e ){
        // 					console.log('SfEgon getProvince click ul', $(this).attr('data-region') );
        // 					if (_this.$request != null){
        // 						_this.$request.abort();
        // 						_this.$request = null;
        // 					}
        // 					e.stopPropagation();
        // 					e.preventDefault();
        // 					$(_this.province).val( $(this).attr('data-region') );
        // 					$(_this.ulProvince).hide();

        // 					isRequired( $(_this.province) );
        // 				});

        // 				$(li).appendTo( $(_this.ulProvince) );
        // 			}

        // 		});
        // 	},

        // 	check: function( ) {
        // 		let val = $(this.cap).val();

        // 		if ( capGenerici.includes( val ) ){
        // 			$(_this.cap).val( '' );
        // 			isRequired( $(_this.cap) );
        // 		} else {

        // 			console.log('SfEgon check', val, $(this.cap));
        // 			let apiUrl = this.apiUrl + "city" + this.filter + "&query="+encodeURI(val);

        // 			if (this.$request != null){
        // 				this.$request.abort();
        // 				this.$request = null;
        // 			}

        // 			let _this = this;
        // 			this.$request = $.ajax({
        // 				type : "GET",
        // 				url : apiUrl
        // 			}).done(function(data) {

        // 				$(this.ul).html('').hide();
        // 				console.log('SfEgon check done', data);

        // 				result = false;
        // 				for (let i = 0; i < data.length; i++) {
        // 					const e = data[i];

        // 					console.log('SfEgon check check', $(_this.city).val(), e.city);
        // 					if ( e.city == $(_this.city).val() ){
        // 						result = true;
        // 						break;
        // 					}
        // 				}

        // 				console.log('SfEgon check result', result);
        // 				if ( !result ) {
        // 					$(_this.cap).val( '' );
        // 					$(_this.city).val( '' );
        // 				}
        //                 isRequired( $(_this.cap) );
        // 				isRequired( $(_this.city) );
        // 			});

        // 		}

        // 	},

        // 	checkRegion: function( ) {
        // 		let val = $(this.region).val();
        // 		console.log('SfEgon check', val, $(this.region));
        // 		let apiUrl = this.apiUrl + "city" + this.filter + "&query="+encodeURI(val);

        // 		if (this.$request != null){
        // 			this.$request.abort();
        // 			this.$request = null;
        // 		}

        // 		let _this = this;
        // 		this.$request = $.ajax({
        // 			type : "GET",
        // 			url : apiUrl
        // 		}).done(function(data) {

        // 			$(this.ul).html('').hide();
        // 			console.log('SfEgon check done', data);

        // 			result = false;
        // 			for (let i = 0; i < data.length; i++) {
        // 				const e = data[i];

        // 				console.log('SfEgon check check', $(_this.region).val(), e.region);
        // 				if ( e.region == $(_this.region).val() ){
        // 					result = true;
        // 					break;
        // 				}
        // 			}

        // 			console.log('SfEgon check result', result);
        // 			if ( !result ) {
        // 				$(_this.region).val( '' );
        // 				isRequired( $(_this.region) );
        // 			}
        // 		});
        // 	},

        // 	checkProvince: function( ) {
        // 		let val = $(this.province).val();
        // 		console.log('SfEgon check', val, $(this.province));
        // 		let apiUrl = this.apiUrl + "province" + this.filter + "&query="+encodeURI(val);

        // 		if (this.$request != null){
        // 			this.$request.abort();
        // 			this.$request = null;
        // 		}

        // 		let _this = this;
        // 		this.$request = $.ajax({
        // 			type : "GET",
        // 			url : apiUrl
        // 		}).done(function(data) {

        // 			$(this.ul).html('').hide();
        // 			console.log('SfEgon check done', data);

        // 			result = false;
        // 			for (let i = 0; i < data.length; i++) {
        // 				const e = data[i];

        // 				console.log('SfEgon check check', $(_this.province).val(), e.province);
        // 				if ( e.province == $(_this.province).val() ){
        // 					result = true;
        // 					break;
        // 				}
        // 			}

        // 			console.log('SfEgon check result', result);
        // 			if ( !result ) {
        // 				$(_this.province).val( '' );
        // 				isRequired( $(_this.province) );
        // 			}
        // 		});
        // 	},

        // 	checkRegioniArray: function( ) {
        // 		let val = $(this.arrayRegioni).val().toLowerCase();

        // 		const filtered = regioni.filter( function( regioni ){
        // 			console.log('SfEgon getRegioniArray filter', regioni.name.includes( val ), regioni);
        // 			return regioni.name.toLowerCase() == val;
        // 		});

        // 		console.log('SfEgon getRegioniArray filter', filtered, filtered.length);
        // 		if ( filtered.length < 1 ) {
        // 			$(this.arrayRegioni).val( '' );
        // 			isRequired( $(this.arrayRegioni) );
        // 		}
        // 	},

        // 	checkProvinceArray: function( ) {
        // 		let val = $(this.arrayProvince).val().toLowerCase();

        // 		const filtered = province.filter( function( province ){
        // 			console.log('SfEgon getProvinceArray in filter', province.name.includes( val ), province);
        // 			return province.name.toLowerCase() == val;
        // 		});

        // 		console.log('SfEgon getProvinceArray filter', filtered, filtered.length);
        // 		if ( filtered.length < 1 ) {
        // 			$(this.arrayProvince).val( '' );
        // 			isRequired( $(this.arrayProvince) );
        // 		}
        // 	}
        // }
        // SfEgon.init();

        // let isRequired = function(elem) {
        // 	console.log('sf-form required', elem, elem.val().trim().length);
        // 	if (elem.val().trim().length < 1) {
        // 		let errorSpan = elem.parent().parent().find('.form-field-error span');

        // 		if (errorSpan.attr('alt')) {
        // 			errorSpan.html(errorSpan.attr('alt'));
        // 		}
        // 		elem.parent().addClass('error');

        // 		//setErrorPosition(elem);

        // 		console.log('sf-form isRequired ERROR EMPTY', elem.val().trim().length);
        // 		return false;
        // 	} else {
        // 		console.log('sf-form isRequired checkPhone', elem.attr('isphone') );
        // 		if ( elem.attr('isphone') ) {
        // 			console.log('sf-form ifRequired isPhone', elem.val());
        // 			if ( /^([3]\d{5,10}|[0][0][3][9]\d{6,11}|[0][^0]\d{4,9})$$/.test( elem.val() ) !== true ){
        // 			// if ( /^([3]\d{5,10}|[0][0][^0]\d{7,12}|[0][^0]\d{4,9})$$/.test( elem.val() ) !== true ){
        // 				elem.parent().addClass('error');
        // 				console.log('sf-form isRequired ERROR PHONE', elem, elem.val().trim().length);
        // 				return false;
        // 			}
        // 		}

        // 		elem.parent().removeClass('error');
        // 	}

        // 	return true;
        // }

    })(jQuery);

});
$(document).ready(() => {
    const targets = $("[data-category-filters]")
    console.log("TROVATI QUESTI ELEMENTI QUI =>", targets)

    targets.each((index, element) => {
        const id = targets.attr("data-category-filters")
        const category = $(`[data-category-id='${id}']`)
        const category_elements = $(category).find("[data-category-box]")
        $(`[data-category-counter='${id}'] b`).html(category_elements.length)
        const filters = $(element).find("[data-category-filter]")

        for (let i = 0; i < filters.length; i++) {
            $(filters[i]).on("click", (evt, target) => {
                evt.preventDefault()
                let action = $(filters[i]).attr("data-category-filter")
                console.log("AZIONE =>", action)
                $(element).find(".selected").toggleClass("selected")
                filters[i].classList.add("selected")


                filterSelection(action)
            })
        }

        function filterSelection(props) {
            console.log("SELECTING FROM =>", category_elements)
            let risultati = 0

            for (i = 0; i < category_elements.length; i++) {
                if ($(category_elements[i]).attr("data-category-box") && !$(category_elements[i]).attr("data-category-box").includes(props)) {
                    category_elements[i].classList.remove("active");
                    console.log(category_elements[i].classList)
                }
                else {
                    //console.log(this.cards[i].classList)
                    if (!category_elements[i].classList.contains("active")) {
                        category_elements[i].classList.add("active")
                        //console.log("ENTRA")
                    }
                    risultati += 1;
                }
            }

            $(`[data-category-counter='${id}'] b`).html(risultati)
            //return risultati
        }
    });
});
/*this.target = $(`[data-category-id='${target_id}']`)
this.cards = $(this.target).find("[data-category-box]")
$("[data-category-counter]").html("Ci sono <b>" + this.cards.length + "</b> soluzioni per te")

let filters = $(this.element).find("[data-category-filter]")

for (let i = 0; i < filters.length; i++) {
    $(filters[i]).on("click", (evt, target) => {
        evt.preventDefault()
        let action = $(filters[i]).attr("data-category-filter")
        console.log("AZIONE =>", action)
        $(this.element).find(".selected").toggleClass("selected")
        filters[i].classList.add("selected")


        this.filterSelection(action)
    })
}*/
(function ($) {
    $(function () {

        // data-pln-click-child=".class"
        // data-pln-click-child="h1 a"

        $.widget("sf.clickChild", {

            _create: function () {

                this.child = $(this.element).attr('data-pln-click-child');
                this._on($(this.element), {
                    click: "clickIt"
                });
            },

            //- CLOSE ---
            clickIt: function () {
                var istanza = this.element;
                console.log('click', $(this.child));
                let currentChild = istanza.find($(this.child));
                /* $(this.child).trigger('click'); */
                /* $(this.element).find(this.child)[0].trigger('click'); */
                window.open(currentChild[0].href,currentChild[0].target);
                /* location.assign */
            }

        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[data-pln-click-child]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').clickChild();
        }, 1000);

    });
})(jQuery);
var pln = {
    'activate': {},
    'ulr': {},
    'tracking': {}
};
(function($) {
    $(function() {

        group = [];

        $.widget("sf.matchHeight", {

            _create: function() {
                this.group = $(this.element).attr('data-pln-mh');

                // if (group.indexOf(this.group)) {
                //     console.log('group 2', this.group);
                //     return false;
                // }

                group.push(this.group);
                this.init();


            },

            //- CLOSE ---
            init: function() {
                let mh = $('[data-pln-mh="' + this.group + '"]');

                let h = $(mh[0]).height();
                for (let i = 1; i < mh.length; i++) {
                    h = h > $(mh[i]).height() ? h : $(mh[i]).height();
                }
                let elements = '[data-pln-mh="' + this.group + '"]';
                $(elements).height(h);
            }

        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[data-pln-mh]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').matchHeight();
        }, 1000);

    });
})(jQuery);
var sfGetProducts = {
    paserUrl: function(t, e) {
        e || (e = window.location.href),
            t = t.replace(/[\[\]]/g, "\\$&");
        var i = new RegExp(t + "(=([^&#]*)|&|#|$)").exec(e);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    },
    getByGET: function(t) {
        let e = this.paserUrl(t);
        return e || (e = !1),
            this.productByCode(e)
    },
    getOptionByCode: function(t) {
        return ""
    },
    getListinoByCode: function(t) {
        var e = t.match(/([^\d]+)/);
        return !!e && e[0]
    },
    commodityByCode: function(code) {
        if (code.indexOf("-G") > -1) {
            return 'DUAL';
        }

        if (code.indexOf("_G") > -1) {
            return 'GAS';
        }

        return 'LUCE'
    },
    segmentoByCode: function(code) {
        if (code.indexOf("SMARTWORK") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("TND") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("LLINK") > -1) { //WEB194_LINKL194
            return 'RESIDENZIALE';
        }

        if (code.indexOf("GLINK") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("LINKB") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("LINKP") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("LFAST") > -1 || code.indexOf("GFAST") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("SICB") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("SIC") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("CERT") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("MOV") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("PERT") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("LKB") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("LKP") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("LINKL") > -1) { //WEB194_LINKL194
            return 'BUSINESS';
        }

        if (code.indexOf("LNKG") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("LNKVG") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("LINKG") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("SSM") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("MYENG") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("FASTL") > -1 || code.indexOf("FASTG") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("RAD") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("QFMICV") > -1 || code.indexOf("FXG") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("PLVARRES") > -1 || code.indexOf("PLFIXRES") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("PLVARAU") > -1 || code.indexOf("PLFIXAU") > -1) {
            return 'BUSINESS';
        }

        if (code.indexOf("TSIM") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("_TR") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("SCPIU") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("TRENDV") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("TCASA") > -1) {
            return 'RESIDENZIALE';
        }

        if (code.indexOf("TNDV") > -1) {
            return 'BUSINESS';
        }

        //- KEEP LAST --
        if (code.indexOf("FIX") > -1) {
            return 'RESIDENZIALE';
        }

        return 'NOPRODUCT'
    },
    compareProducts: function(t, e) {
        return !!(productCode = this.productByCode(t)) && productCode == this.productByCode(e)
    },
    productByCode: function(code) {
        if (!code) {
            return false;
        }

        if (code.indexOf("SMARTWORK") > -1) {
            return 'SMARTWORK';
        }

        if (code.indexOf("TND") > -1) {
            return 'TREND-BUSINESS';
        }

        if (code.indexOf("LLINK") > -1) { //WEB194_LINKL194
            return 'LINK';
        }

        if (code.indexOf("GLINK") > -1) {
            return 'LINK';
        }

        if (code.indexOf("LINKB") > -1) {
            return 'LINK-BASIC';
        }

        if (code.indexOf("LINKP") > -1) {
            return 'LINK-PLUS';
        }

        if (code.indexOf("LFAST") > -1 || code.indexOf("GFAST") > -1) {
            return 'FAST-ENERGY';
        }

        if (code.indexOf("SIC") > -1) {
            return 'SCELTA-SICURA';
        }

        if (code.indexOf("CERT") > -1) {
            return 'SCONTO-CERTO';
        }

        if (code.indexOf("MOV") > -1) {
            return 'CAMBIO-CASA';
        }

        if (code.indexOf("PERT") > -1) {
            return 'FIXA-PERTINENZE';
        }

        if (code.indexOf("LKB") > -1) {
            return 'LINK-BASIC-BUSINESS';
        }

        if (code.indexOf("LINKL") > -1) { //WEB194-LINKL194
            return 'LINK-BUSINESS';
        }

        if (code.indexOf("LNKG") > -1) {
            return 'LINK-BUSINESS';
        }

        if (code.indexOf("LNKVG") > -1) {
            return 'LINK-BUSINESS';
        }

        if (code.indexOf("LINKG") > -1) {
            return 'LINK-BUSINESS';
        }

        if (code.indexOf("LKP") > -1) {
            return 'LINK-PLUS-BUSINESS';
        }

        if (code.indexOf("SSM") > -1) {
            return 'SCONTOSUMISURA';
        }

        if (code.indexOf("MYENG") > -1) {
            return 'MYENERGY-BUSINESS';
        }

        if (code.indexOf("FASTL") > -1 || code.indexOf("FASTG") > -1) {
            return 'FASTENERGY-BUSINESS';
        }

        if (code.indexOf("RAD") > -1) {
            return 'RADDOPPIO-SICURO-BUSINESS';
        }

        if (code.indexOf("QFMICV") > -1 || code.indexOf("FXG") > -1) {
            return 'FIXA-BUSINESS';
        }

        if (code.indexOf("PLVARRES") > -1 || code.indexOf("PLFIXRES") > -1) {
            return 'PLACET';
        }

        if (code.indexOf("PLVARAU") > -1 || code.indexOf("PLFIXAU") > -1) {
            return 'PLACET-BUSINESS';
        }

        if (code.indexOf("TSIM") > -1) {
            return 'TUTELA-SIMILE';
        }

        if (code.indexOf("_TR") > -1) {
            return 'REGOLE-DI-TUTELA';
        }

        if (code.indexOf("XNOI") > -1) {
            return 'PER-NOI';
        }

        if (code.indexOf("SCPIU") > -1) {
            return 'SCONTO PIU';
        }

        if (code.indexOf("TRENDV") > -1) {
            return 'TREND CASA';
        }

        if (code.indexOf("TCASA") > -1) {
            return 'TREND';
        }

        if (code.indexOf("TNDV") > -1) {
            return 'TREND-BIZ';
        }

        //- KEEP LAST --
        if (code.indexOf("FIX") > -1) {
            return 'FIXA';
        }

        return false
    }
};
(function ($) {
    $(function () {

        $.widget("sf.tracking", {

            _create: function() {
                this.test = !sfUrl.isProd();

                // set remote domanin onli for localhost call
                this.domain = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'https://eniplenitude.com' : '';

                this.type = $( this.element ).attr("data-pln-tracking-event");
                console.log("TRACKING QUA")
                this._on($( this.element ), {
                    click: "track"
                });
            },

            //- CLOSE ---
            track: function(e) {
                switch (this.type) {
                    case 'cta_click':
                        this.cta_click(e);
                        break;

                    case 'informative':
                        this.informative(e);
                        break;
                    default:
                        break;
                }

            },

            cta_click: function(e) {

                const pre = $( this.element ).attr("data-pln-tracking-prefix") ? $( this.element ).attr("data-pln-tracking-prefix") : '';
                let href = $(e.target).attr('href') || $(e.target).attr('data-pln-tracking-href')

                let params = {
                    'event': 'cta_click',
                    'cta_cliccata': pre + $(e.target).html().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, ' ').trim(),
                    'dettaglio_cta_cliccata': href == null ? window.location.href : href
                }

                this.push( params );

            },

            informative: function(e){
                let params = {
                    'event': 'informative',
                    'dettaglio_informativa': $(e.target).text().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, ' ').trim()
                }

                this.push( params );
            },

            push: function( params ) {

                try {
                    dataLayer.push(params);
                } catch (error) {
                    console.log('error tracking', params);
                }

            },

        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[data-pln-tracking-event][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').tracking();
        }, 1000);

        //- FUNCTIONS ---

        pln.tracking.getVirtualPage = function (pageId) {
            return {
                'event': 'myEni',
                'userId': datalayerPageInfo.userId,
                'userLoginState': datalayerPageInfo.userLoginState,
                'userUtenzeAttive': datalayerPageInfo.userUtenzeAttive,
                'siteSection1': datalayerPageInfo.siteSection1,
                'siteSection2': datalayerPageInfo.siteSection2,
                'from': datalayerPageInfo.from,
                'area': "pubblica",
                'fornitura': datalayerPageInfo.fornitura,
                'pageName': datalayerPageInfo.pageName,
                'page_location': sfUrl.getPageLocation() + pageId
            }
        }

    });
})(jQuery);
var sfUrl = {
    getPage: function() {
        return window.location.pathname
    },
    getQuerystring: function() {
        return querystring = location.search,
            null === querystring ? null : querystring.slice(1)
    },
    getParameter: function(t, e) {
        e || (e = window.location.href),
            t = t.replace(/[\[\]]/g, "\\$&");
        var i = new RegExp(t + "(=([^&#]*)|&|#|$)").exec(e);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    },
    getPageLocation: function() {
        return window.location.origin + window.location.pathname + '/'
    },
    isProd: function() {
        return window.location.href.indexOf("//eniplenitude") > 0
    },
    isPage: function(t) {
        return window.location.href.indexOf(t) >= 0
    },
    isLocal: function(t) {
        return (location.hostname === "localhost" || location.hostname === "127.0.0.1");
    }
};
document.addEventListener("DOMContentLoaded", function () {
    (function ($) {

        let province = [
            { 'name': 'Agrigento', 'tag': 'AG' },
            { 'name': 'Alessandria', 'tag': 'AL' },
            { 'name': 'Ancona', 'tag': 'AN' },
            { 'name': 'Arezzo', 'tag': 'AR' },
            { 'name': 'Ascoli Piceno', 'tag': 'AP' },
            { 'name': 'Asti', 'tag': 'AT' },
            { 'name': 'Avellino', 'tag': 'AV' },
            { 'name': 'Bari', 'tag': 'BA' },
            { 'name': 'Barletta-Andria-Trani', 'tag': 'BT' },
            { 'name': 'Belluno', 'tag': 'BL' },
            { 'name': 'Benevento', 'tag': 'BN' },
            { 'name': 'Bergamo', 'tag': 'BG' },
            { 'name': 'Biella', 'tag': 'BI' },
            { 'name': 'Bologna', 'tag': 'BO' },
            { 'name': 'Bolzano/Bozen', 'tag': 'BZ' },
            { 'name': 'Brescia', 'tag': 'BS' },
            { 'name': 'Brindisi', 'tag': 'BR' },
            { 'name': 'Cagliari', 'tag': 'CA' },
            { 'name': 'Caltanissetta', 'tag': 'CL' },
            { 'name': 'Campobasso', 'tag': 'CB' },
            { 'name': 'Caserta', 'tag': 'CE' },
            { 'name': 'Catania', 'tag': 'CT' },
            { 'name': 'Catanzaro', 'tag': 'CZ' },
            { 'name': 'Chieti', 'tag': 'CH' },
            { 'name': 'Como', 'tag': 'CO' },
            { 'name': 'Cosenza', 'tag': 'CS' },
            { 'name': 'Cremona', 'tag': 'CR' },
            { 'name': 'Crotone', 'tag': 'KR' },
            { 'name': 'Cuneo', 'tag': 'CN' },
            { 'name': 'Enna', 'tag': 'EN' },
            { 'name': 'Fermo', 'tag': 'FM' },
            { 'name': 'Ferrara', 'tag': 'FE' },
            { 'name': 'Firenze', 'tag': 'FI' },
            { 'name': 'Foggia', 'tag': 'FG' },
            { 'name': 'Forlì-Cesena', 'tag': 'FC' },
            { 'name': 'Frosinone', 'tag': 'FR' },
            { 'name': 'Genova', 'tag': 'GE' },
            { 'name': 'Gorizia', 'tag': 'GO' },
            { 'name': 'Grosseto', 'tag': 'GR' },
            { 'name': 'Imperia', 'tag': 'IM' },
            { 'name': 'Isernia', 'tag': 'IS' },
            { 'name': 'L\'Aquila', 'tag': 'AQ' },
            { 'name': 'La Spezia', 'tag': 'SP' },
            { 'name': 'Latina', 'tag': 'LT' },
            { 'name': 'Lecce', 'tag': 'LE' },
            { 'name': 'Lecco', 'tag': 'LC' },
            { 'name': 'Livorno', 'tag': 'LI' },
            { 'name': 'Lodi', 'tag': 'LO' },
            { 'name': 'Lucca', 'tag': 'LU' },
            { 'name': 'Macerata', 'tag': 'MC' },
            { 'name': 'Mantova', 'tag': 'MN' },
            { 'name': 'Massa-Carrara', 'tag': 'MS' },
            { 'name': 'Matera', 'tag': 'MT' },
            { 'name': 'Messina', 'tag': 'ME' },
            { 'name': 'Milano', 'tag': 'MI' },
            { 'name': 'Modena', 'tag': 'MO' },
            { 'name': 'Monza e della Brianza', 'tag': 'MB' },
            { 'name': 'Napoli', 'tag': 'NA' },
            { 'name': 'Novara', 'tag': 'NO' },
            { 'name': 'Nuoro', 'tag': 'NU' },
            { 'name': 'Oristano', 'tag': 'OR' },
            { 'name': 'Padova', 'tag': 'PD' },
            { 'name': 'Palermo', 'tag': 'PA' },
            { 'name': 'Parma', 'tag': 'PR' },
            { 'name': 'Pavia', 'tag': 'PV' },
            { 'name': 'Perugia', 'tag': 'PG' },
            { 'name': 'Pesaro e Urbino', 'tag': 'PU' },
            { 'name': 'Pescara', 'tag': 'PE' },
            { 'name': 'Piacenza', 'tag': 'PC' },
            { 'name': 'Pisa', 'tag': 'PI' },
            { 'name': 'Pistoia', 'tag': 'PT' },
            { 'name': 'Pordenone', 'tag': 'PN' },
            { 'name': 'Potenza', 'tag': 'PZ' },
            { 'name': 'Prato', 'tag': 'PO' },
            { 'name': 'Ragusa', 'tag': 'RG' },
            { 'name': 'Ravenna', 'tag': 'RA' },
            { 'name': 'Reggio Calabria', 'tag': 'RC' },
            { 'name': 'Reggio Emilia', 'tag': 'RE' },
            { 'name': 'Rieti', 'tag': 'RI' },
            { 'name': 'Rimini', 'tag': 'RN' },
            { 'name': 'Roma', 'tag': 'RM' },
            { 'name': 'Rovigo', 'tag': 'RO' },
            { 'name': 'Salerno', 'tag': 'SA' },
            { 'name': 'Sassari', 'tag': 'SS' },
            { 'name': 'Savona', 'tag': 'SV' },
            { 'name': 'Siena', 'tag': 'SI' },
            { 'name': 'Siracusa', 'tag': 'SR' },
            { 'name': 'Sondrio', 'tag': 'SO' },
            { 'name': 'Sud Sardegna', 'tag': 'SU' },
            { 'name': 'Taranto', 'tag': 'TA' },
            { 'name': 'Teramo', 'tag': 'TE' },
            { 'name': 'Terni', 'tag': 'TR' },
            { 'name': 'Torino', 'tag': 'TO' },
            { 'name': 'Trapani', 'tag': 'TP' },
            { 'name': 'Trento', 'tag': 'TN' },
            { 'name': 'Treviso', 'tag': 'TV' },
            { 'name': 'Trieste', 'tag': 'TS' },
            { 'name': 'Udine', 'tag': 'UD' },
            { 'name': 'Valle d\'Aosta', 'tag': 'AO' },
            { 'name': 'Varese', 'tag': 'VA' },
            { 'name': 'Venezia', 'tag': 'VE' },
            { 'name': 'Verbano-Cusio-Ossola', 'tag': 'VB' },
            { 'name': 'Vercelli', 'tag': 'VC' },
            { 'name': 'Verona', 'tag': 'VR' },
            { 'name': 'Vibo Valentia', 'tag': 'VV' },
            { 'name': 'Vicenza', 'tag': 'VI' },
            { 'name': 'Viterbo', 'tag': 'VT' }
        ]

        let regioni = [
            { 'name': 'Abruzzo' },
            { 'name': 'Basilicata' },
            { 'name': 'Calabria' },
            { 'name': 'Campania' },
            { 'name': 'Emilia' },
            { 'name': 'Friuli' },
            { 'name': 'Lazio' },
            { 'name': 'Liguria' },
            { 'name': 'Lombardia' },
            { 'name': 'Marche' },
            { 'name': 'Molise' },
            { 'name': 'Piemonte' },
            { 'name': 'Puglia' },
            { 'name': 'Sardegna' },
            { 'name': 'Sicilia' },
            { 'name': 'Toscana' },
            { 'name': 'Trentino' },
            { 'name': 'Umbria' },
            { 'name': 'Valle' },
            { 'name': 'Veneto' }
        ]

        let capGenerici = [
            '00100',
            '06100',
            '09100',
            '10100',
            '15100',
            '16100',
            '19100',
            '20100',
            '24100',
            '25100',
            '28900',
            '30100',
            '34100',
            '35100',
            '37100',
            '38100',
            '40100',
            '41100',
            '42100',
            '43100',
            '44100',
            '44700',
            '44900',
            '48100',
            '50100',
            '56100',
            '57100',
            '60100',
            '61100',
            '65100',
            '70100',
            '71100',
            '74100',
            '80100',
            '84100',
            '89100',
            '90100',
            '95100',
            '98100'
        ]

        SfEgon = {
            // http://18.202.88.229/api/suggest/street?app_key=WPT1ENI01@QJ4UQF6E&query=via+pacinotti+verona&restrict_level=country&restrict_id=38000000001

            apiUrl: 'https://wpt11.egoncloud.com/api/suggest/',
            appKey: 'WPT1ENI01@QJ4UQF6E',
            countryId: '38000000001',
            filter: '',

            arrayProvince: $('[arrayProvince]'),
            province: $('[egonProvince]'),
            provinceTag: $('[egonProvinceTag]'),
            region: $('[egonRegion]'),
            city: $('[egonCity]'),
            cap: $('[egonCap]'),
            ul: $('<ul class="egonSuggest">').appendTo($('[egonCity]').parent()),
            ulRegion: $('<ul class="egonSuggest">').appendTo($('[egonRegion]').parent()),
            ulProvince: $('.egonProvince').length ? $('<ul class="egonSuggest">').appendTo($('.egonProvince').parent()) : $('<ul class="egonSuggest">').appendTo($('.arrayProvince').parent()),
            $request: null,

            init: function () {
                console.log('SfEgon init');

                this.filter = "?app_key=" + this.appKey + "&restrict_level=country&restrict_id=" + this.countryId;

                $(this.city).attr("autocomplete", "off");
                $(this.cap).attr("autocomplete", "off");
                $(this.region).attr("autocomplete", "off");

                let _this = this;
                $(this.arrayRegioni).on('keyup', function (event) {
                    _this.getRegioniArray(event)
                });

                $(this.arrayProvince).on('keyup', function (event) {
                    _this.getProvinceArray(event)
                });

                $(this.province).on('keyup', function (event) {
                    _this.getProvince(event)
                });

                $(this.region).on('keyup', function (event) {
                    _this.getRegion(event)
                });

                $(this.city).on('keyup', function (event) {
                    _this.getCity(event)
                });

                $(this.cap).on('keyup', function (event) {
                    _this.getCap(event)
                });
            },

            getCap: async function (event) {
                let val = $(this.cap).val();
                console.log('SfEgon getCap', val, $(this.cap));
                let apiUrl = this.apiUrl + "city" + this.filter + "&query=" + encodeURI(val);

                if (this.$request != null) {
                    this.$request.abort();
                    this.$request = null;
                }

                let _this = this;
                this.$request = $.ajax({
                    type: "GET",
                    url: apiUrl
                }).done(function (data) {

                    console.log('SfEgon getCap done', data);

                    if (data.length == 1) {
                        console.log('SfEgon getCap done', $(_this.city), $(_this.cap));
                        console.log('SfEgon getCap done', data[0].city, data[0].zipcode);
                        $(_this.city).val(data[0].city).trigger("blur")
                        $(_this.provinceTag).val(data[0].province_code).trigger("blur")
                    }
                    else{
                        $(_this.city).val("")
                        $(_this.provinceTag).val("")
                    }
                });
            },

            getCity: function (event) {
                let val = $(this.city).val();
                console.log('SfEgon getCity', val, $(this.city));
                let apiUrl = this.apiUrl + "city" + this.filter + "&query=" + encodeURI(val);

                if (this.$request != null) {
                    this.$request.abort();
                    this.$request = null;
                }

                let _this = this;
                this.$request = $.ajax({
                    type: "GET",
                    url: apiUrl
                }).done(function (data) {

                    console.log('SfEgon getCity done', data);
                    console.log('SfEgon getCity done ul', $(_this.ul));

                    if (data.length) {
                        $(_this.ul).html('').show();

                        for (let i = 0; i < data.length; i++) {
                            const e = data[i];

                            let li = $('<li data-city="' + e.city + '" data-zipcode="' + e.zipcode + '">' + e.city + '</li>');

                            $(li).on('click', function (e) {
                                console.log('SfEgon getCity click ul', $(this).attr('data-city'), $(this).attr('data-zipcode'));
                                if (_this.$request != null) {
                                    _this.$request.abort();
                                    _this.$request = null;
                                }
                                e.stopPropagation();
                                e.preventDefault();
                                $(_this.city).val($(this).attr('data-city'));
                                //if ( !$(_this.cap).val() ){
                                if (capGenerici.includes($(this).attr('data-zipcode'))) {
                                    $(_this.cap).val('');
                                    $(_this.provinceTag).val("")
                                } else {
                                    $(_this.cap).val($(this).attr('data-zipcode')).trigger('blur');
                                    $(_this.provinceTag).val(data[0].province_code).trigger('blur');
                                }
                                //}
                                $(_this.ul).hide();

                                isRequired($(_this.city));
                            });

                            $(li).appendTo($(_this.ul));
                        }
                    } else {
                        $(_this.ul).hide();
                    }

                });
            },

            getRegion: function (event) {
                let val = $(this.region).val();
                console.log('SfEgon getRegion', val, $(this.region), event);
                let apiUrl = this.apiUrl + "region" + this.filter + "&query=" + encodeURI(val);

                if (this.$request != null) {
                    this.$request.abort();
                    this.$request = null;
                }

                if (event.keyCode == 8) {
                    return false;
                }

                let _this = this;
                this.$request = $.ajax({
                    type: "GET",
                    url: apiUrl
                }).done(function (data) {

                    console.log('SfEgon getRegion done', data);
                    console.log('SfEgon getRegion done ul', $(_this.ulRegion));

                    $(_this.ulRegion).html('').show();

                    for (let i = 0; i < data.length; i++) {
                        const e = data[i];

                        let li = $('<li data-region="' + e.region + '">' + e.region + '</li>');

                        $(li).on('click', function (e) {
                            console.log('SfEgon getRegion click ul', $(this).attr('data-region'));
                            if (_this.$request != null) {
                                _this.$request.abort();
                                _this.$request = null;
                            }
                            e.stopPropagation();
                            e.preventDefault();
                            $(_this.region).val($(this).attr('data-region'));
                            $(_this.ulRegion).hide();

                            isRequired($(_this.region));
                        });

                        $(li).appendTo($(_this.ulRegion));
                    }

                });
            },

            getRegioniArray: function (event) {
                let val = $(this.arrayRegioni).val().toLowerCase();
                console.log('SfEgon getRegioniArray', val, $(this.arrayRegioni), event.keyCode, regioni);

                if (event.keyCode == 8) {
                    return false;
                }

                if (!regioni) {
                    return false;
                }

                const filtered = regioni.filter(function (regioni) {
                    console.log('SfEgon getRegioniArray filter', regioni.name.includes(val), regioni);
                    return regioni.name.toLowerCase().includes(val);
                });

                console.log('SfEgon getRegioniArray filtered', filtered);

                let _this = this;
                $(_this.ulRegioni).html('').show();
                for (let i = 0; i < filtered.length; i++) {
                    const e = filtered[i];

                    let li = $('<li data-region="' + e.name + '">' + e.name + '</li>');

                    $(li).on('click', function (e) {
                        console.log('SfEgon getRegioni click ul', $(this).attr('data-region'));
                        e.stopPropagation();
                        e.preventDefault();
                        $(_this.arrayRegioni).val($(this).attr('data-region'));
                        $(_this.ulRegioni).hide();

                        isRequired($(_this.arrayRegioni));
                    });

                    $(li).appendTo($(_this.ulRegioni));
                }
            },

            getProvinceArray: function (event) {
                let val = $(this.arrayProvince).val().toLowerCase();
                console.log('SfEgon getProvinceArray', val, $(this.arrayProvince), event.keyCode, province);

                if (event.keyCode == 8) {
                    return false;
                }

                if (!province) {
                    return false;
                }

                const filtered = province.filter(function (province) {
                    console.log('SfEgon getProvinceArray filter', province.name.includes(val), province);
                    return province.name.toLowerCase().includes(val);
                });

                console.log('SfEgon getProvinceArray filtered', filtered);

                let _this = this;
                $(_this.ulProvince).html('').show();
                for (let i = 0; i < filtered.length; i++) {
                    const e = filtered[i];

                    let li = $('<li data-region="' + e.name + '">' + e.name + '</li>');

                    $(li).on('click', function (e) {
                        console.log('SfEgon getProvince click ul', $(this).attr('data-region'));
                        e.stopPropagation();
                        e.preventDefault();
                        $(_this.arrayProvince).val($(this).attr('data-region'));
                        $(_this.ulProvince).hide();

                        isRequired($(_this.arrayProvince));
                    });

                    $(li).appendTo($(_this.ulProvince));
                }
            },

            getProvince: function (event) {
                let val = $(this.province).val();
                console.log('SfEgon getProvince', val, $(this.province), event.keyCode);
                let apiUrl = this.apiUrl + "province" + this.filter + "&query=" + encodeURI(val);

                if (this.$request != null) {
                    this.$request.abort();
                    this.$request = null;
                }

                if (event.keyCode == 8) {
                    return false;
                }

                let _this = this;
                this.$request = $.ajax({
                    type: "GET",
                    url: apiUrl
                }).done(function (data) {

                    console.log('SfEgon getProvince done', data);
                    console.log('SfEgon getProvince done ul', $(_this.ulProvince));

                    $(_this.ulProvince).html('').show();

                    for (let i = 0; i < data.length; i++) {
                        const e = data[i];

                        let li = $('<li data-region="' + e.province + '">' + e.province + '</li>');

                        $(li).on('click', function (e) {
                            console.log('SfEgon getProvince click ul', $(this).attr('data-region'));
                            if (_this.$request != null) {
                                _this.$request.abort();
                                _this.$request = null;
                            }
                            e.stopPropagation();
                            e.preventDefault();
                            $(_this.province).val($(this).attr('data-region'));
                            $(_this.ulProvince).hide();

                            isRequired($(_this.province));
                        });

                        $(li).appendTo($(_this.ulProvince));
                    }

                });
            },

            check: function () {
                let val = $(this.cap).val();

                if (capGenerici.includes(val)) {
                    $(_this.cap).val('');
                    isRequired($(_this.cap));
                } else {

                    console.log('SfEgon check CAP', val, $(this.cap));
                    let apiUrl = this.apiUrl + "city" + this.filter + "&query=" + encodeURI(val);

                    if (this.$request != null) {
                        this.$request.abort();
                        this.$request = null;
                    }

                    let _this = this;
                    this.$request = $.ajax({
                        type: "GET",
                        url: apiUrl
                    }).done(function (data) {

                        $(this.ul).html('').hide();
                        console.log('SfEgon check done', data);

                        result = false;
                        for (let i = 0; i < data.length; i++) {
                            const e = data[i];

                            console.log('SfEgon check check', $(_this.city).val(), e.city);
                            console.log($(_this.city).val(),"=>", $(_this.city).val().length)
                            if (e.city == $(_this.city).val()) {
                                result = true;
                                break;
                            }
                        }

                        console.log('SfEgon check result', result);
                        if (!result) {
                            $(_this.cap).val('');
                            $(_this.city).val('');
                        }
                        isRequired($(_this.cap));
                        isRequired($(_this.city));
                    });

                }

            },

            checkRegion: function () {
                let val = $(this.region).val();
                console.log('SfEgon check REGIONE', val, $(this.region));
                let apiUrl = this.apiUrl + "city" + this.filter + "&query=" + encodeURI(val);

                if (this.$request != null) {
                    this.$request.abort();
                    this.$request = null;
                }

                let _this = this;
                this.$request = $.ajax({
                    type: "GET",
                    url: apiUrl
                }).done(function (data) {

                    $(this.ul).html('').hide();
                    console.log('SfEgon check done', data);

                    result = false;
                    for (let i = 0; i < data.length; i++) {
                        const e = data[i];

                        console.log('SfEgon check check', $(_this.region).val(), e.region);
                        if (e.region == $(_this.region).val()) {
                            result = true;
                            break;
                        }
                    }

                    console.log('SfEgon check result', result);
                    if (!result) {
                        $(_this.region).val('');
                        isRequired($(_this.region));
                    }
                });
            },

            checkProvince: function () {
                let val = $(this.province).val();
                console.log('SfEgon check PROVINCIA', val, $(this.province));
                let apiUrl = this.apiUrl + "province" + this.filter + "&query=" + encodeURI(val);

                if (this.$request != null) {
                    this.$request.abort();
                    this.$request = null;
                }

                let _this = this;
                this.$request = $.ajax({
                    type: "GET",
                    url: apiUrl
                }).done(function (data) {

                    $(this.ul).html('').hide();
                    console.log('SfEgon check done', data);

                    result = false;
                    for (let i = 0; i < data.length; i++) {
                        const e = data[i];

                        console.log('SfEgon check check', $(_this.province).val(), e.province);
                        if (e.province == $(_this.province).val()) {
                            result = true;
                            break;
                        }
                    }

                    console.log('SfEgon check result', result);
                    if (!result) {
                        $(_this.province).val('');
                        isRequired($(_this.province));
                    }
                });
            },

            checkRegioniArray: function () {
                let val = $(this.arrayRegioni).val().toLowerCase();

                const filtered = regioni.filter(function (regioni) {
                    console.log('SfEgon getRegioniArray filter', regioni.name.includes(val), regioni);
                    return regioni.name.toLowerCase() == val;
                });

                console.log('SfEgon getRegioniArray filter', filtered, filtered.length);
                if (filtered.length < 1) {
                    $(this.arrayRegioni).val('');
                    isRequired($(this.arrayRegioni));
                }
            },

            checkProvinceArray: function () {
                let val = $(this.arrayProvince).val().toLowerCase();

                const filtered = province.filter(function (province) {
                    console.log('SfEgon getProvinceArray in filter', province.name.includes(val), province);
                    return province.name.toLowerCase() == val;
                });

                console.log('SfEgon getProvinceArray filter', filtered, filtered.length);
                if (filtered.length < 1) {
                    $(this.arrayProvince).val('');
                    isRequired($(this.arrayProvince));
                }
            }
        }
        SfEgon.init();

        let isRequired = function (elem) {
            console.log('sf-form required', elem, elem.val().trim().length);
            if (elem.val().trim().length < 1) {
                let errorSpan = elem.parent().parent().find('.form-field-error span');

                if (errorSpan.attr('alt')) {
                    errorSpan.html(errorSpan.attr('alt'));
                }
                elem.parent().addClass('error');

                //setErrorPosition(elem);

                console.log('sf-form isRequired ERROR EMPTY', elem.val().trim().length);
                return false;
            } else {
                console.log('sf-form isRequired checkPhone', elem.attr('isphone'));
                if (elem.attr('isphone')) {
                    console.log('sf-form ifRequired isPhone', elem.val());
                    if (/^([3]\d{5,10}|[0][0][3][9]\d{6,11}|[0][^0]\d{4,9})$$/.test(elem.val()) !== true) {
                        // if ( /^([3]\d{5,10}|[0][0][^0]\d{7,12}|[0][^0]\d{4,9})$$/.test( elem.val() ) !== true ){
                        elem.parent().addClass('error');
                        console.log('sf-form isRequired ERROR PHONE', elem, elem.val().trim().length);
                        return false;
                    }
                }

                elem.parent().removeClass('error');
            }

            return true;
        }

    })(jQuery);

});

// async function checkCover(cc) {

// 	var fileDAM = '/content/dam/enigaseluce/matrice-copertura/Copertura Cap Comuni.xlsx';

// 	const res = await fetch(fileDAM)
// 	if (res.status != 200) {
// 		throw new Error(res.status);
// 	}
// 	const arraybuffer = await res.arrayBuffer();
// 	if (arraybuffer.byteLength > 0) {
// 		var workbook = XLSX.read(new Uint8Array(arraybuffer), {
// 			type: 'array'
// 		});
// 		var rowObj = XLSX.utils.sheet_to_json(workbook.Sheets['Copertura']);
// 		var index = rowObj.findIndex(obj => obj['Comune Cap'].toLowerCase() == cc.toLowerCase());
// 		return index != -1 ? rowObj[index]['Copertura (SI/NO)'] == 'SI' : false;
// 	} else {
// 		throw new Error('Empty file.');
// 	}
// }

async function checkPartner(cc) {

    if ( sfUrl.isLocal() ) {
        var fileDAM = '/assets/Copertura Cap Comuni.xlsx?20230612';
    } else {
        var fileDAM = '/content/dam/enigaseluce/matrice-copertura/Copertura Cap Comuni.xlsx?20230612';
    }

    const res = await fetch(fileDAM)
    if (res.status != 200) {
        throw new Error(res.status);
    }
    const arraybuffer = await res.arrayBuffer();
    if (arraybuffer.byteLength > 0) {
        var workbook = XLSX.read(new Uint8Array(arraybuffer), {
            type: 'array'
        });
        var rowObj = XLSX.utils.sheet_to_json(workbook.Sheets['Partners']);
        var index = rowObj.findIndex(obj => obj['CAP'] == cc);
        return index != -1 ? rowObj[index]['PILOTA'] : 'NONE';
    } else {
        throw new Error('Empty file.');
    }
}
// formTag

var sfFormCheck;
var sfFillForm;
var sfRadioRequired;
var sfEmailCheck;

var sfGroupRequired;

// fill the form with fake values ---
function sfFillForm() {

    $('[needs-validation="true"] [type="text"]').each(function () {
        $(this).val('TEST_' + $(this).attr('name').replace(/\s/g, ''));
    });

    $('[needs-validation="true"] [type="email"]').each(function () {
        $(this).val($(this).attr('name').replace(/\s/g, '') + "@test.it");
    });

    $('[needs-validation="true"] [name="telefono"]').each(function () {
        $(this).val('+39 3334444444');
    });

    $('[needs-validation="true"] [type="checkbox"]').each(function () {
        $(this).prop('checked', true);
    });

}

// encryption function ---
function sfEncryptInit() {
    var jsencrypt = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.0.0-rc.1/jsencrypt.min.js"></script>';
    $('head').append(jsencrypt);
}

function sfEncrypt(dataAsString) {
    var publicKey = "-----BEGIN PUBLIC KEY-----MIIEfDANBgkqhkiG9w0BAQEFAAOCBGkAMIIEZAKCBFsAqV1OaeVra0OZm7KEOGJltBeEYTJPVRK74IdOGlN2zxgPeSQQh37klArkXgwDUbSznlSDJ6/p1ym4VRft/4SX6vfLHXE/eRVzzEvcW9gYppOiSHHVdRglwQleJoWF+eJ0l8tRf0cgISjwX4wid0Wan1ogCNJwuNh+7BYp4NtsQ/qU5uiebRRgixofPaH2Bsdm4s4Yq8xtAfpC+KjcfsSR4O9Gw9f4PQAnG2vIQi+RKMUoSEVgCVYqqA7s2/H8gpbw9gvnP+c4/rUYfv8sYPgitpTMPGO7froLqo1ltqZAOKEfYaFdFToKo+iM67NP0TuBx5UQp6+5nB4f8X8rM5967nZODeAhVSr8QAGNu/YB9a3MOzCKvUPlG7GZVBxruQW6mJQD0yUHC19iXsgqIi8zk9gi9uLd16rcMyIakHY4bONrnEx0nuwrqdOex+vkFTvFIzO8mr78pMeU8VVQziAaYnFyWvEfnCV2EkEXW+jhJRevEQBsNXtxOqpwZbeaYwXUXuP56aQ98K3TwEh0DHBB/YNwQXeobUMo9UuMi6KHsSUrIQorX2of9PBzod0mi/xX7mitBNPQuR7/rD9buTE6A5JlMEvyucobQ6a17odEku0J2kgzohzElvJNhVMUezmD+GlLEIbRqSgKqbOJXI5G17xSjhRx67I+rFXJlZ/O3gqH+Pmr2Hf6O6YQFU9jDfHjG0oi/BTPzrhGclrU1LbT6W8Idavomb+k+gh73KurgpSiOVc0nVbDtHmOBsd5OsoGtH7yPC0mrqcjIEZVaoAyZClB/y19aOgSORt/caDQcbM3ArnOYbQsmNRgD1IJbxVsj2yIZ+fMHE5nhPEfq1878oSBrLpJIo4P2qTWl1grS02eyDyvRJh0uUmygtLqWGyNHAgv9C8qXlEQwm9LfFFO+tOhpfpXn4Hsh8blb7erOPNoEYZk6i6BPiziaaDteJr5lD3Wl23ZlN/hjXOcPaDQPyjLvMFvK/1SKnSIK3a2GaS0jS3XehMy89buTpFljUnvSX3vGBv0joSGTWr5oM1IHxGZo1nA1S1Pmk6RYT8n/112b7nJIzBVd5FtmRuqRCYj3pJLBgAm1xV/aSmRY5aWp1AFTp31fFxucKEFjnUcXFVze2nmgeu+E64FU9Cstii3yc6dPXL9sqfsM3e7GqD+Bk+JBsi7ke8tAFoRq/vCg/MnrkgEgkHv9jhO7Eu3UT18Onx2NEa2M2MWq+lAwPuTDmpyos+QMbdyKpbqEep4WaVqXMeF23fvd/XlDZrAxMtKTkDynGdcKx1Mdlhn71c4f/wiLR2ZH2Uzit9qKOuQWzzoSTTitqyrLKIciEpEUW0QaXDCE/giDhOokAqDvHkW7TTrxiHH5cubyfQLIZ0wSHWHNfOFoB93EKU3cK4wWpi/uS8gygK/LeqnQrEguEpY+FAwzxvYRqzZ3oQTmpUOPJlQ0BVe7KWDc/Xui1Hg0Klms87DBb3aXuOmHQIDAQAB-----END PUBLIC KEY-----";

    var rsaEncrypt = new JSEncrypt();
    rsaEncrypt.setPublicKey(publicKey);
    var encryptedKey = rsaEncrypt.encrypt(dataAsString);
    return encryptedKey;
}

//- Manual Test ---

document.addEventListener("DOMContentLoaded", function () {
    (function ($) {

        //- manage injection content ---
        $.widget("sf.selectJoin", {

            _create: function () {
                let joinTo = $($(this.element).attr('select-join'));
                this.options = $(this.element).find('option').detach();
                $(this.element).append($(this.options).find('.default').clone());

                this.filter('default');

                this._on(joinTo, {
                    change: "reset"
                });
            },

            filter: function (value) {
                $(this.element).find('option').remove();
                for (let i = 0; i < this.options.length; i++) {
                    if ($(this.options).eq(i).hasClass('default') || $(this.options).eq(i).hasClass(value)) {
                        $(this.element).append($(this.options).eq(i).clone());
                    }
                }
                $(this.element).find('option').eq(0).attr("selected", true);
            },

            reset: function (event) {
                let val = $(event.currentTarget).val();
                this.filter(val);
            }

        });

        $("[select-join]").selectJoin();

        //- ---

        var error_position = 0;
        var use_catpcha = false;

        if ($('[name="Touchpoint"]').val() === 'Extra-Commodity_Portale' || $('[name="Touchpoint"]').val() === 'Extra-Commodity_Landing') {
            console.log('renderGoogleInvisibleRecaptcha', 'use IT');

            var recaptchaScript = $('<input type="hidden" name="reCaptchaResponse" id="reCaptchaResponse" value="">');
            recaptchaScript.insertBefore($('[name="Touchpoint"]'));

            use_catpcha = true;

            //- Add reCAPTCHA library V3 --
            var recaptchaScript = '<script src="https://www.google.com/recaptcha/api.js?render=6LcQagEVAAAAAGwjKn0NbylIsLOa6CAdUi6siPDY"></script>';
            $('head').append(recaptchaScript);
        }

        var renderGoogleInvisibleRecaptcha = function () {
            console.log('renderGoogleInvisibleRecaptcha');

            // varsion 3
            grecaptcha.ready(function () {
                grecaptcha.execute('6LcQagEVAAAAAGwjKn0NbylIsLOa6CAdUi6siPDY', {
                    action: 'homepage'
                }).then(function (token) {
                    console.log('renderGoogleInvisibleRecaptcha', token);
                    $('[name="reCaptchaResponse"]').val(token);
                    inviaFormGeneric();
                });
            });

        };

        var moveToError = function () {
            console.log('sf-form', 'moveToError');
            if (error_position > 0) {
                $('body, html').animate({
                    scrollTop: error_position - $(window).height() / 2
                }, 400);
            }
        }

        var setErrorPosition = function (elem) {
            if (error_position == 0) {
                console.log('sf-form', 'setError', elem);
                let offset = elem.offset();
                error_position = offset.top;
            }
        }

        //- RADIO ---

        var radioCheck = function (elem) {
            let r = true;

            let name = $(elem).attr('name');
            let v = $('input[name="' + name + '"]:checked');
            //if (v && (typeof $(v).attr('isRequired') === typeof undefined && $(v).attr('isRequired') !== false)) {
            if (v.length < 1) {
                // console.log('sf-form radioRequired set error', name, $('input[name="' + name + '"]'));
                // let errorSpan = $(elem).parent().parent().find('.form-field-error span');
                // if (errorSpan.attr('alt')) {
                //     errorSpan.html(errorSpan.attr('alt'));
                // }
                $(elem).closest('.form-checkbox, .form-field').addClass('error');
                r = false;
            } else {
                $(elem).closest('.form-checkbox, .form-field').removeClass('error');
            }

            console.log('sf-form radioRequired result', r);
            return r;
        }
        sfRadioCheck = radioCheck;

        var radioRequired = function (elemInit) {
            let r = true;
            let elem = $('[type="radio"][required]');
            if (elemInit) {
                elem = $(elemInit).find('[type="radio"][required]');
            }
            console.log('sf-form radioRequired', elem);
            for (let i = 0; i < elem.length; i++) {
                if (!radioCheck($(elem).eq(i))) {
                    r = false;
                }
            }
            console.log('sf-form radioRequired result', r);
            return r;
        }
        sfRadioRequired = radioRequired;

        //- CHECKBOX ---

        var checkRequired = function (id) {
            let r = true;
            console.log('sf-form', 'checkRequired');
            let elem = $(id).find('[type="checkbox"][required]');
            for (let i = 0; i < elem.length; i++) {
                //let name = $(elem).eq(i).attr('name');
                //let v = $('input[name="'+name+'"]:checked').val();
                let v = $(elem).eq(i).is(":checked");
                console.log('sf-form', 'checkRequired', $(elem).eq(i), v);
                if (!v) {
                    // let errorSpan = ($(elem).eq(i).parent().find('.form-field-error span')) ? $(elem).eq(i).parent().find('.form-field-error span') : $(elem).eq(i).parent().next().find('span');
                    // if (errorSpan.attr('alt')) {
                    //     errorSpan.html(errorSpan.attr('alt'));
                    // }
                    $(elem).eq(i).closest('.form-checkbox, .form-field').addClass('error');

                    setErrorPosition($(elem).eq(i));

                    r = false;
                } else {
                    $(elem).eq(i).closest('.form-checkbox, .form-field').removeClass('error');
                }
            }
            return r;
        }

        //- TEXT ---

        var ifRequired = function (elem) {
            console.log('sf-form', 'ifRequired ', elem);
            console.log('sf-form', 'ifRequired ', elem, elem.val().trim().length);
            if (elem.val().trim().length < 1) {
                let dependOn = elem.attr('ifRequired')

                if (dependOn && $(dependOn).val().trim().length > 0) {
                    // let errorSpan = elem.parent().parent().find('.form-field-error span');

                    // if (errorSpan.attr('alt')) {
                    //     errorSpan.html(errorSpan.attr('alt'));
                    // }
                    elem.closest('.form-checkbox, .form-field').addClass('error');

                    return false;
                }
            }

            elem.closest('.form-checkbox, .form-field').removeClass('error');
            return true;
        }

        var areIfRequired = function (id) {
            console.log('sf-form', 'areIfRequired');
            let r = true;
            let elem = $(id).find('[type=email][ifRequired], [type=text][ifRequired], [type=password][ifRequired], [type=number][ifRequired], [type=tel][ifRequired]');
            for (let i = 0; i < elem.length; i++) {
                r = ifRequired($(elem).eq(i)) && r;
            }
            return r;
        }

        //- ---

        var isRequired = function (elem) {
            console.log('sf-form required', elem, elem.val().trim().length);
            if (elem.val().trim().length < 1) {
                // let errorSpan = elem.parent().parent().find('.form-field-error span');

                // if (errorSpan.attr('alt')) {
                //     errorSpan.html(errorSpan.attr('alt'));
                // }
                elem.closest('.form-checkbox, .form-field').addClass('error');

                setErrorPosition(elem);

                console.log('sf-form isRequired ERROR EMPTY', elem.val().trim().length);
                return false;
            } else {
                console.log('sf-form isRequired checkPhone', elem.attr('isphone'));
                if (elem.attr('isphone')) {
                    console.log('sf-form ifRequired isPhone', elem.val());
                    if (/^([3]\d{5,10}|[0][0][3][9]\d{6,11}|[0][^0]\d{4,9})$$/.test(elem.val()) !== true) {
                        // if ( /^([3]\d{5,10}|[0][0][^0]\d{7,12}|[0][^0]\d{4,9})$$/.test( elem.val() ) !== true ){
                        elem.closest('.form-checkbox, .form-field').addClass('error');
                        console.log('sf-form isRequired ERROR PHONE', elem, elem.val().trim().length);
                        return false;
                    }
                }

                elem.closest('.form-checkbox, .form-field').removeClass('error');
            }

            return true;
        }

        var areRequired = function (id) {
            let r = true;
            let elem = $(id).find('[type=text][required], [type=email][required], [type=password][required], [type=number][required], [type=tel][required], select[required], textarea[required]');
            for (let i = 0; i < elem.length; i++) {
                console.log('sf-form', 'areRequired', $(elem).eq(i));
                r = isRequired($(elem).eq(i)) && r;
            }
            return r;
        }

        var groupRequired = function (elemInit) {
            let r = true;
            let elem = $(elemInit).find('[type=text][required], [type=password][required], [type=number][required], [type=tel][required], select[required]');
            for (let i = 0; i < elem.length; i++) {
                console.log('sf-form', 'areRequired', $(elem).eq(i));
                r = isRequired($(elem).eq(i)) && r;
            }
            return r;
        }
        sfGroupRequired = groupRequired;

        //- EMAIL ---

        var validateEmail = function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        var emailCheck = function (elem) {
            console.log('sf-form emailCheck', elem, elem.val());

            elem.closest('.form-checkbox, .form-field').removeClass('error');

            if (elem.val().trim().length < 1) {
                console.log('email', elem, 'empty');
                // EMPTY, check if is required
                var attr = elem.attr('required');
                if (typeof attr !== typeof undefined && attr !== false) {
                    console.log('email', elem, 'empty', 'idRequired');
                    return isRequired(elem);
                }
            } else {
                console.log('email', elem, 'filled');
                // check if email field value is valid
                if (!validateEmail(elem.val())) {
                    // let errorSpan = elem.parent().parent().find('.form-field-error span');
                    // if (errorSpan.attr('alt')) {
                    //     errorSpan.html(errorSpan.attr('alt'));
                    // }
                    elem.closest('.form-checkbox, .form-field').addClass('error');
                    return false;
                }

                console.log('sf-form emailCheck', 'dipendenti', elem.val());
            }

            console.log('sf-form emailCheck', 'dipendenti', 'NOT BLOCK');
            return true;
        }
        sfEmailCheck = emailCheck;

        var emailsCheck = function (id) {
            $r = true;

            console.log('sf-form', 'emailsCheck');
            let elem = $(id).find('[needs-validation="true"] [type=email]');
            for (let i = 0; i < elem.length; i++) {

                $r = (emailCheck($(elem).eq(i))) ? $r : false;

            }
            return $r;
        }

        // validate only filled email fields, empty fields are allowed at inizialitation
        var emailsInit = function () {
            console.log('sf-form', 'emailInit');
            let elem = $('[needs-validation="true"] .email, [needs-validation="true"] [type=email]');
            for (let i = 0; i < elem.length; i++) {
                if (elem.val().trim().length > 0) {
                    return emailCheck($(elem).eq(i));
                }
            }
            return true;
        }


        // set filled status on filled fields
        var areFilled = function () {
            let elem = $('[type=email], [type=text], [type=password], [type=number], [type=tel]');
            for (let i = 0; i < elem.length; i++) {
                isFilled($(elem).eq(i));
            }
        }

        var isFilled = function (elem) {
            console.log('sf-form isFilled', elem, elem.val().length);
            //debugger;
            if (elem.val().length > 0) {
                elem.closest('.form-checkbox, .form-field').addClass('filled');
            } else {
                elem.closest('.form-checkbox, .form-field').removeClass('filled');
            }
        }

        //- ---

        $('[needs-validation="true"]').on('submit', function (evt) {
            console.log('sf-form submit');

            /*if ($(this).attr('id') && $(this).attr('id') == 'truffe') {
                return true;
            }*/

            if (check()) {
                /*let submitBox;
                submitBox = $(this).find('.submit');
                submitBox.find('.sf-btn').detach();
                submitBox.append($('<div class="loading"><span></span><span></span><span></span></div>'));*/
                return true;
            } else {
                return false;
            }
        });

        $('[needs-validation="true"]').find("input").each(function(index, elm){
            elm.addEventListener("invalid", function (evt) {
                evt.preventDefault()

                checkRequiredInput($(this))

                //console.log("ELEMENTO INPUT INVALIDO CATCHATO")
            })
        })

        const checkRequiredInput = (elm) =>{
            let type = elm.attr("type")

            if(type == "checkbox" || type == "radio"){
                if(!elm.is(":checked")) elm.closest(".form-checkbox, .form-field").addClass("error")
                else elm.closest(".form-checkbox, .form-field").removeClass("error")
            }
            else{
                console.log(elm.val())
                if(elm.val() == "") elm.closest(".form-checkbox, .form-field").addClass("error")
                else elm.closest(".form-checkbox, .form-field").removeClass("error")
            }
        }

        var stampaInvalid = function (e) {
            console.log("CHECK INVALIDITY")
        }

        var check = function (id) {
            console.log('sf-form check -----------------------------------------------');

            error_position = 0;
            areFilled();

            let r = areIfRequired(id);
            console.log('sf-form result areIfRequired', r);
            r = areRequired(id) && r;
            console.log('sf-form result areRequired', r);
            r = radioRequired(id) && r;
            console.log('sf-form result radioRequired', r);
            r = checkRequired(id) && r;
            console.log('sf-form result checkRequired', r);
            r = emailsCheck(id) && r;
            console.log('sf-form result emailsCheck', r);

            if (!r) {
                console.log('sf-form', 'check FALSE');
                moveToError();
                return false;
            }

            if ($("si2Hidden").lenght > 0) {
                if ($("si2").lenght > 0 && $("si2").checked) {
                    $('si2Hidden').disabled = false;
                } else {
                    $('si2Hidden').disabled = false;
                }
            }

            console.log('sf-form', 'check TRUE');

            return true;
        }
        sfFormCheck = check;

        //- inizialize form field status ---

        setTimeout(function () {
            areFilled();
            emailsInit();
        }, 200);

        function clear() {
            $('[type=text]').val('');
            $('[type=password]').val('');
            $('[type=number]').val('');
            $('[type=tel]').val('');
        }

        //- Real time validation for form field ---

        function validateRealTime(parent) {

            $('[needs-validation="true"]').find('.onlyNumber, [onlyNumber]').on('keyup keydown keypress blur', function () {
                var value = $(this).val();
                var desired = value.replace(/[^0-9]/g, '');
                $(this).val(desired);
                console.log('onlyNumber', desired);
            });

            $('[needs-validation="true"]').find('[isPhone]').on('keyup', function () {
                var value = $(this).val();
                var desired = value.replace(/[^0-9]/g, '');
                $(this).val(desired);
                console.log('isPhone', desired);
            });

            $('[needs-validation="true"]').find('[type=checkbox][required]').on('click', function () {
                if (!$(this).is(":checked")) {
                    // let errorSpan = $(this).parent().parent().find('.form-field-error span');
                    // if (errorSpan.attr('alt')) {
                    //     errorSpan.html(errorSpan.attr('alt'));
                    // }
                    $(this).closest('.form-checkbox, .form-field').addClass('error');
                } else {
                    $(this).closest('.form-checkbox, .form-field').removeClass('error');
                }
            });

            $('[needs-validation="true"]').find('[type=text][required], [type=password][required], [type=number][required], [type=tel][required], textarea[required]').on('blur', function (e) {
                e.preventDefault()
                console.log('isRequired blur text', $(this).val().trim().length);
                if ($(this).val().trim().length < 1) {
                    // let errorSpan = $(this).parent().parent().find('.form-field-error span');

                    // if (errorSpan.attr('alt')) {
                    //     errorSpan.html(errorSpan.attr('alt'));
                    // }
                    $(this).closest('.form-checkbox, .form-field').addClass('error');
                } else {
                    $(this).closest('.form-checkbox, .form-field').removeClass('error');
                }
            });

            $('[needs-validation="true"]').find('.email, [type=email]').on('blur', function () {
                sfEmailCheck($(this));
                console.log("TEST EMAIL BLUR CHECK")
            });

            //- Graphic effects ---

            // $('[needs-validation="true"]').find("input, textarea, select").on('keyup', function () {
            //     console.log('mouseup ' + $(this).val().length);
            //     //isFilled($(this));
            // });

            $('[needs-validation="true"]').find("input, textarea, select").on('focus', function () {
                console.log('focus');
                $(this).closest('.form-checkbox, .form-field').removeClass('filled');
                $(this).closest('.form-checkbox, .form-field').addClass('focused');
            });

            $('[needs-validation="true"]').find("input, textarea, select").on('blur', function () {
                console.log('blur');
                isFilled($(this));
                $(this).closest('.form-checkbox, .form-field').removeClass('focused');
            });

            $('[needs-validation="true"]').find("[add-block]").on('click', function () {
                let single = $($(this).attr("[add-block]")).first();
                let clone = single.clone();
                validateRealTime(clone);

                $($(this).attr("[add-block]")).last().after(clone);
            });

        }

        validateRealTime($('[needs-validation="true"]'));

        //- character count for smart textarea ---

        $.widget("sf.textareaSmart", {

            _create: function () {
                this.textarea = $(this.element).find('textarea');
                this.current = $(this.element).find('.current');

                this._on(this.textarea, {
                    'keyup': "count"
                });
            },

            count: function () {
                let characterCount = $(this.textarea).val().length;
                $(this.current).text(characterCount);

                if (characterCount >= 450) {
                    $(this.element).addClass('warning');
                } else {
                    $(this.element).removeClass('warning');
                }
            }

        });

        $("[textareaSmart]").textareaSmart();

    })(jQuery);

});
(function ($) {
    $(function () {

        $.widget("sf.form_submit", {

            _create: function () {
                console.log("ELEMENTO =>", this.element)

                this.domain = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'https://eniplenitude.com' : '';

                $(this.element).on("submit", (evt) =>{
                    evt.preventDefault()
                    evt.stopImmediatePropagation()

                    let form_id = $(this.element).find("#nomeForm").val()
                    //console.log(fomr)
                    this.identifyForm(form_id)
                })
            },

            identifyForm: function(id) {
                switch(id){
                    case "form-agenti":
                        this.requestAgenti()
                        break;
                    case "form_condominio":
                        this.requestCondominio()
                }
            },

            requestAgenti: function () {
                let url = "/domm-ajaxredir/backend-controller-services/recruitment/salvaModuloRecruitment"

                console.log("VALORE NOME ======>", $("#first_name").val())

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: url,
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify({
                        nome: $("#first_name").val(),
                        cognome: $("#last_name").val(),
                        email: $("#email").val(),
                        cellulare: $("#phone").val(),
                        ragione_sociale: $("#company_name").val(),
                        piva: $("#piva").val(),
                        settore_attività: $("#settoreAttività").val(),
                        aria_interesse: $("#areaInteresse").val(),
                        comune: $("#locality").val(),
                        cap: $("#postal_code").val(),
                        provincia: $("#provincia").val(),
                        indirizzo: $("#indirizzo_sede_legale").val(),
                        sito_internet_aziendale: $("#site_internet").val(),
                        iniziative_eni: "0",
                        ricerche_eni: "1",
                        ricerche_imprese: "0",
                        trattamento_dati_personali: "1",
                    }),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        if (typeof data !== undefined && data.esito == 'OK') {
                            $('#WaitingModal').modal('hide');
                            $('#SuccessModal').modal('show');


                        } else {
                            $('#WaitingModal').modal('hide');
                            $('#FailureModal').modal('show');
                        }
                    },
                    error: (data) => {
                        //params.codice_coupon = 'NONE';
                        //this.submitCoupon(params, paramsEGL);
                        console.log("MESSAGGIO ERRORE =>", data)
                    }
                }).done((data) => {
                    console.log("MESSAGGIO COMPLETAMENTO =>", data)
                });

                $(this.element).find("form").trigger("reset")

                return false
            },

            requestCondominio: function() {

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: this.domain + '/domm-ajaxredir/backend-controller-services/leadManagement/invioDatiCentralizzatoreSecure',
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify({
                        nome: $("#first_name").val(),
                        cognome: $("#last_name").val(),
                        email: $("#email").val(),
                        cellulare: $("#phone").val(),
                        comune: $("#locality").val(),
                        cap: $("#postal_code").val(),
                        note: $("#note").val()
                    }),
                    success: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#SuccessModal').modal('show');
                        console.log("SUCCESS CONDOMINIO =>", data)
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        console.log("ERROR CONDOMINIO =>", data)
                    }
                }).done((data) => {
                    console.log('CONDOMINIO DONE =>', data);
                });
            }
        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="callmeback-form"][pln-version="2.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').form_submit();
        }, 1000);

    });
})(jQuery);


(function ($) {
    $(function () {

        $.widget("sf.boxThankyou2", {

            _create: function() {
                this.domain = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'https://eniplenitude.com' : '';
                this.codProdotto = sfUrl.getParameter('codiceProdotto');
                this.codProposta = sfUrl.getParameter('codiceProposta');
                this.commodity = sfUrl.getParameter('commodity');
                // sessionStorage.setItem("nds_cf", "STVTTG80A01F205T");
                let cf = sessionStorage.getItem("nds_cf");

                let sku = $(this.element).find("[name='nds_sku']").val()
                //let sku_buttons = $(this.element).find("[data-nds-sku]");

                /*sku_buttons.each((sku_button) =>{
                    let sku = $(sku_button).attr("data-nds-sku")
                    this.callService(cf, sku, this.codProposta, this.commodity, sku_button)
                })*/

                this.callService(cf, sku, this.codProposta, this.commodity)
            },

            callService: function(cf, sku, codProposta, commodity/*, sku_button*/){
                let url = this.domain + `/serviceDA${window.location.href.includes("pp.") ? "q" : "p"}/api/ndsImpiantiServices/vendibilita/check`;
                //let url = 'https://ndsimpianti-services-ayf3evdy2a-ew.a.run.app/api/ndsImpiantiServices/vendibilita/check/';

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: url,
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify({
                        "FiscalCode_Piva": cf,
                        "StockKeepingUnit": sku
                    }),
                    success: (data) => {
                        console.log(data)
                        if(data.status != "Failed"){
                            /*$(sku_button).css("display", "flex")
                            $(".hide-box").removeClass("hide-box")
                            $(sku_button).attr('href', $(this).attr('href') + "?codiceProposta=" + codProposta + '&sku=' + sku + '&commodity=' + commodity);*/

                            $(".cta-typ-yellow").show()
                            $('.hide-box').removeClass("hide-box")

                            $(".cta-typ-yellow").each(function(){
                                $(this).attr('href', $(this).attr('href') + "?codiceProposta=" + codProposta + '&sku=' + sku + '&commodity=' + commodity);
                            })
                        }
                    },
                    error: (data) => {
                        console.log("ERRORE")
                        console.log(data)
                    }
                })
            }
        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="box-thankyou"][pln-version="2.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').boxThankyou2();
        }, 1000);
    });
})(jQuery);
/*(function($) {
    $(function() {

        $.widget("sf.agenti", {

            _create: function() {
                console.log("ELEMENTO =>", this.element)
                this.id = $(this.element).find('.modal').attr('id');
                let formAgenti = $(this.element).find("form");
                this._on($(formAgenti), {
                    submit: "request"
                });

                let submitBtn = $(this.element).find('[type="submit"]');
                this._on($(submitBtn), {
                    click: "submit"
                });
            },

            request: function(evt) {
                let url = "/domm-ajaxredir/backend-controller-services/recruitment/salvaModuloRecruitment"
                evt.preventDefault();
                evt.stopPropagation()

                console.log("VALORE NOME ======>", $("#first_name").val())

                let _this = this;

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: url,
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify({
                        nome: $("#first_name").val(),
                        cognome: $("#last_name").val(),
                        email: $("#email").val(),
                        cellulare: $("#phone").val(),
                        ragione_sociale: $("#company_name").val(),
                        piva: $("#piva").val(),
                        settore_attività: $("#settoreAttività").val(),
                        aria_interesse: $("#areaInteresse").val(),
                        comune: $("#locality").val(),
                        cap: $("#postal_code").val(),
                        provincia: $("#provincia").val(),
                        indirizzo: $("#indirizzo_sede_legale").val(),
                        sito_internet_aziendale: $("#site_internet").val(),
                        iniziative_eni: "0",
                        ricerche_eni: "1",
                        ricerche_imprese: "0",
                        trattamento_dati_personali: "1",
                    }),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        if (typeof data !== undefined && data.esito == 'OK') {
                            $('#WaitingModal').modal('hide');
                            $('#SuccessModal').modal('show');

                            _this.pushLead('OK', data.id, '2_completato');
                        } else {
                            $('#WaitingModal').modal('hide');
                            $('#FailureModal').modal('show');

                            _this.pushLead('KO', '', '2_completato');
                        }
                    },
                    error: (data) => {
                        //params.codice_coupon = 'NONE';
                        //this.submitCoupon(params, paramsEGL);
                        console.log("MESSAGGIO ERRORE =>", data)
                    }
                }).done((data) => {
                    console.log("MESSAGGIO COMPLETAMENTO =>", data)
                });

                $(this.element).find("form").trigger("reset")

                return false
            },

            pushLead: function(esito, id, step) {
                var params = pln.tracking.getVirtualPage( $(this.element).find('[name="nomeForm"]').val() );
                callDataLayerPush(params);
            },
        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="callmeback-inpagina"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').agenti();
        }, 1000);

    });
})(jQuery);*/
/*(function ($) {
    $(function () {

        $.widget("sf.callmeback2", {

            _create: function() {
                this.test = !sfUrl.isProd();

                // set remote domanin onli for localhost call
                this.domain = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'https://eniplenitude.com' : '';

                this.form = $(this.element).find('form');

                this.touchpoint = this.getValue($(this.element).find('[name="touchpoint"]').val(), 'DEFAULT');
                this.prodotto = this.getValue($(this.element).find('[name="product_Type__c"]').val());

                // attiva la gestione pertner in base al cap
                this.check_partner = this.getValue($(this.element).find('[name="check_partner"]').val(), null);

                // il partner identifica la tipologia di invio
                // DEFAULT invio a d365 plenitude
                this.partner = this.getValue($(this.element).find('[name="partner"]').val(), 'DEFAULT');

                if (this.check_partner) {
                    this.egoncap = $(this.element).find('[egoncap]');
                    $(this.element).find('.privacy-disclaimer p').hide();

                    this._on($( this.egoncap ), {
                        change: "partnerCAP"
                    });
                }

                //- FLAG ---
                this.invio_mail = $(this.element).find("[name='invio_mail']").length ? $(this.element).find("[name='invio_mail']").val().toLowerCase() : 'false';
                this.check_cover = $(this.element).find("[name='check_cover']").length ? $(this.element).find("[name='check_cover']").val().toLowerCase() : 'false';

                let submitBtn = $(this.element).find('[type="submit"]');
                this._on($(submitBtn), {
                    click: "submit"
                });
            },

            partnerCAP: function() {
                let val = this.egoncap.val();

                checkPartner(val).then(res => {
                    this.partner = res;
                    $(this.element).find('.privacy-disclaimer p').hide();
                    switch (this.partner) {
                        case "SEA":
                            $(this.element).find('.privacy-disclaimer p').eq(1).show();
                            break;
                        case "EVOLVERE":
                            $(this.element).find('.privacy-disclaimer p').eq(0).show();
                            break;
                        default:
                            break;
                    }
                });
            },

            //- Form submit
            submit: function(evt) {
                evt.preventDefault();

                if (sfFormCheck(this.form)) {

                    this.close(evt);
                    $('#WaitingModal').modal('show');

                    // i campi del form sono formalmente corretti

                    if (typeof checkCover !== undefined && (this.check_cover == 'y' || this.check_cover == 'yes')) {

                        // è necessario verificare la copertura
                        let cc = this.getValue($(this.element).find('[name="citta"]').val()) + ' - ' + this.getValue($(this.element).find('[name="cap"]').val());
                        checkCover(cc).then(res => {
                            if (res) {
                                // copertura OK
                                this.send();
                            } else {
                                // copertura OK
                                $('#WaitingModal').modal('hide');
                                $('#FailureCapModal').modal('show');
                            }
                        })
                            .catch(err => {
                                $('#WaitingModal').modal('hide');
                                $('#FailureModal').modal('show');
                            });
                    } else {
                        this.send();
                    }

                }
            },

            send: function () {
                if (this.invio_mail == 'y' || this.invio_mail == 'yes') {
                    this.getCoupon(this.getFdCoupon(this.touchpoint, this.prodotto), this.getFd(this.touchpoint, this.prodotto));
                } else {
                    this.submitLead(this.getFd(this.touchpoint, this.prodotto));
                }
            },

            getValue: function (value, alternative = '', lower = false) {
                return value ? (lower) ? value.toLowerCase() : value : alternative;
            },

            getFdCoupon: function (touchpoint, prodotto) {
                let fd = new FormData();

                var object = {
                    'nomeForm': this.getValue($(this.element).find('[name="nomeForm"]').val()),
                    'touchpoint': touchpoint,
                    'codice_coupon': this.getValue($(this.element).find('[name="codice_coupon"]').val()),
                    'iniziativa': this.getValue($(this.element).find('[name="iniziativa"]').val()),
                    'numCampi': 0,
                    'nomeCampi': "",
                    'invio_mail': this.getValue($(this.element).find('[name="invio_mail"]').val()),
                    'campagna': this.getValue($(this.element).find('[name="campagna"]').val()),
                    'email': this.getValue($(this.element).find('[name="email"]').val()),
                    'phone': this.getValue($(this.element).find('[name="telefono"]').val()),
                    'first_name': this.getValue($(this.element).find('[name="nome"]').val()),
                    'last_name': this.getValue($(this.element).find('[name="cognome"]').val()),
                    'city': this.getValue($(this.element).find('[name="citta"]').val()),
                    'cap': this.getValue($(this.element).find('[name="cap"]').val()),
                    'invia_al_centralizzatore': this.getValue($(this.element).find('[name="invia_al_centralizzatore"]').val()),
                    'product_Type__c': prodotto,
                    'consensoDatiPers__c': true,
                    'note__c': this.getValue($(this.element).find('[name="note__c"]').val()),
                    // 'url_chiamante': this.getValue($(this.element).find('[name="url_chiamante"]').val()),
                    // 'recaptchaResponse': this.getValue($(this.element).find('[name="recaptchaResponse"]').val()),
                    // 'commodity': this.getValue($(this.element).find('[name="commodity"]').val()),
                    // 'codiceProposta': this.getValue($(this.element).find('[name="codiceProposta"]').val()),
                    // 'tracking__product': this.getValue($(this.element).find('[name="tracking__product"]').val()),
                    // 'tracking__listino': this.getValue($(this.element).find('[name="tracking__listino"]').val()),
                    // 'categoria__c': this.getValue($(this.element).find('[name="categoria__c"]').val()),
                    // 'consentMarketAnalisis__c': $(this.element).find('[name="consentMarketAnalisis__c"]').is(':checked'),
                    // 'consentpromotion__c': $(this.element).find('[name="consentMarketAnalisis__c"]').is(':checked'),
                    // 'consentmarketing__c': false,
                    // 'product_Type__o': this.getValue($(this.element).find('[name="product_Type__o"]').val()),
                    // 'product_Type__pc': this.getValue($(this.element).find('[name="product_Type__pc"]').val()),
                    // 'product_Type__mom': this.getValue($(this.element).find('[name="product_Type__mom"]').val()),
                };

                let nomeCampi = []
                for (const property in object) {
                    nomeCampi.push(property);
                }

                object.numCampi = nomeCampi.length;
                object.nomeCampi = nomeCampi.join('|')

                console.log('sf.typWo Fd', fd);

                return object;
            },

            getFdName: function (value) {
                let r = value;

                switch (value) {
                    case 'first_name':
                        r = 'nome';
                        break;
                    case 'last_name':
                        r = 'cognome';
                        break;
                    case 'city':
                        r = 'citta';
                        break;
                    default:
                        break;
                }

                return r;
            },

            getFd: function (touchpoint, prodotto) {
                let fd = new FormData();

                var object = {
                    'flagPrivacy0': true,
                    'flagPrivacy1': $(this.element).find('[name="flagPrivacy1"]').is(':checked'),
                    'flagPrivacy2': $(this.element).find('[name="flagPrivacy1"]').is(':checked'),
                    'flagPrivacy3': false,
                    'reCaptchaResponse': '',
                    'touchpoint': touchpoint,
                    'canale': 'Web',
                    'prodotto': prodotto,
                    'dettaglioProdotto': prodotto,
                    'segmentoCliente': this.segmentoCliente,
                    'note': this.getValue($(this.element).find('[name="note__c"]').val()),
                    'codiceAgente': this.getValue($(this.element).find('[name="agente"]').val()),
                    'esito': ''
                };

                // add all input fields to json
                let text = $(this.element).find('[type="text"], [type="email"], [type="number"], [type="tel"], textarea, select')
                for (let i = 0; i < text.length; i++) {
                    object[$(text[i]).attr('name')] = this.getValue($(text[i]).val());
                }

                // add all checkbox fields to json
                let checkbox = $(this.element).find('[type="checkbox"]')
                for (let i = 0; i < checkbox.length; i++) {
                    object[$(checkbox[i]).attr('name')] = $(checkbox[i]).is(':checked');
                }

                // console.log('sf.typWo Fd', fd);

                return object;
            },

            //https://eniplenitude.com/domm-ajaxredir/backend-controller-services/codiceCoupon/staccaCoupon?chiave=caldaiaSconto100&pagina_chiamante=test&iniziativa=default&flagBrucia=Y
            getCoupon: function (params, paramsEGL) {

                let url = this.domain + `/domm-ajaxredir/backend-controller-services/codiceCoupon/staccaCoupon?chiave=${params.campagna}&pagina_chiamante=${params.url_chiamante}&iniziativa=${params.iniziativa}&flagBrucia=Y`

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'


                    },
                    url: url,
                    type: 'post',
                    dataType: "json",
                    //data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        if (typeof data !== undefined) {
                            if (data.codice_coupon && data.codice_coupon == 'ERRORE') {
                                $('#WaitingModal').modal('hide');
                                $('#FailureModal').modal('show');
                            } else {

                                params.codice_coupon = data.codice_coupon;
                                this.codice_coupon = data.codice_coupon

                                this.submitCoupon(params, paramsEGL);
                            }
                        } else {
                            $('#WaitingModal').modal('hide');
                            $('#FailureModal').modal('show');
                        }
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        //params.codice_coupon = 'NONE';
                        //this.submitCoupon(params, paramsEGL);
                    }
                }).done((data) => {
                    console.log('sf.typWo plenitudeSubmit done', data);
                });
                return false;
            },

            submitCoupon: function (params, paramsEGL) {

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: this.domain + '/domm-ajaxredir/backend-controller-services/leadManagement/salvaGenericFormLead',
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        this.submitLead(paramsEGL);
                    },
                    error: function (data) {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        console.log('sf.typWo plenitudeSubmit fail', data.responseJSON);
                        console.log('sf.typWo plenitudeSubmit fail', data.status);
                    }
                }).done(function (data) {
                    console.log('sf.typWo plenitudeSubmit done', data);
                });
                return false;
            },

            submitLead: function(params) {
                switch (this.partner) {
                    case 'SEA':
                        this.seaAuth(params);
                        break;
                    case 'EVOLVERE':
                        this.evolvereAuth(params);
                        break;
                    default:
                        this.plenitudeSubmit(params);
                        break;
                }
            },

            //- SUBMIT DEFAULT ----
            plenitudeSubmit: function(params) {
                console.log('sf.typWo plenitudeSubmit params', params);

                if ( leadchannel = sfUrl.getParameter( 'leadchannel' ) ){
                    params.note = params.note + ';' + leadchannel;
                    params.dettaglioProdotto = params.dettaglioProdotto + ';' + leadchannel + ";" + this.codice_coupon;
                }

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: this.domain + '/domm-ajaxredir/backend-controller-services/leadManagement/invioDatiCentralizzatore',
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#SuccessModal').modal('show');
                        console.log('sf.typWo plenitudeSubmit success', data);

                        _this.pushLead('ok', data.leadId, '2_completato');
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        console.log('sf.typWo plenitudeSubmit fail', data.responseJSON);
                        console.log('sf.typWo plenitudeSubmit fail', data.status);

                        _this.pushLead('ko', null, '2_completato');
                    }
                }).done((data) => {
                    console.log('sf.typWo plenitudeSubmit done', data);
                });
                return false;
            },

            //- SUBMIT EVOLVERE ----
            evolvereParamsLogin: function() {

                var fd = new FormData();
                fd.append("username", this.user);
                fd.append("password", this.password);

                return fd;
            },

            evolvereParamsLead: function(copertura) {

                let note = sfUrl.getParameter('from');

                let formInfo = {
                    'tmpl_data-e-ora-arrivo': null,
                    'tmpl_nome-cognome': this.getValue( $(this.element).find('[name="nome"]').val(), '', true),
                    'tmpl_cognome': this.getValue( $(this.element).find('[name="cognome"]').val(), '', true),
                    'tmpl_telefono': this.getValue( $(this.element).find('[name="telefono"]').val(), '', true),
                    'tmpl_superbonus': this.getValue( $(this.element).find('[name="nomeForm"]').val(), '', true) == 110,
                    'tmpl_regione': '',
                    'tmpl_provincia': this.getValue( $(this.element).find('[name="provincia"]').val(), 'MI', true),
                    'tmpl_citta': this.getValue( $(this.element).find('[name="citta"]').val(), '', true),
                    'tmpl_cap': this.getValue( $(this.element).find('[name="cap"]').val(), '', true),
                    'tmpl_ese': copertura,
                    'tmpl_email': this.getValue( $(this.element).find('[name="email"]').val(), '', true),
                    'tmpl_microesito': null,
                    'tmpl_dipendente-cliente': ( this.getValue( $(this.element).find('[name="user_type"]').val(), '', true) == 'dipendente' ) ? 'dipendente' : 'cliente',
                    'tmpl_cluster': sfUrl.getParameter('from'),
                    'tmpl_note-precedenti': null,
                    'tmpl_offerta': null,
                    'tmpl_agente': null,
                    'tmpl_tipologia': null,
                    'tmpl_mese-chiusura': null,
                    'tmpl_marketing': $(this.element).find('[name="flagPrivacy1"]')[0]?.checked
                }

                console.log('formFotovoltaico getParamsLead', formInfo);

                let fd = {
                    "status": 'backoffice',
                    "form_data": JSON.stringify( formInfo ),
                    "template": this.templateId
                }

                return  JSON.stringify( fd );
            },

            evolvereAuth: function() {
                console.log('formFotovoltaico submit API');

                if ( !this.test ){
                    this.user = 'leadapiegl'
                    this.password = '3v0lv3r3L34d4p13gl'
                    this.templateId = 172 //API EGL
                } else {
                    this.user = 'leadapiegltest'
                    this.password = '3v0lv3r3L34d4p13gl'
                    this.templateId = 233 //Test API EGL
                }

                var _this = this;
                let paramsLogin = this.evolvereParamsLogin();

                let auth_url = 'https://hubaqo.it/api/v2/jwt/token/';

                _this = this;
                $.ajax({
                    url: auth_url,
                    type: 'post',
                    data: paramsLogin,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: (data) => {
                        console.log('formFotovoltaico submit API', data);
                        // _this.evolvereSubmit( data.token, true );

                        let cc = this.getValue($(this.element).find('[name="citta"]').val()) + ' - ' + this.getValue($(this.element).find('[name="cap"]').val());
                        checkCover(cc).then(res => {
                            if (res) {
                                _this.evolvereSubmit( data.token, true );
                            } else {
                                _this.evolvereSubmit( data.token, false );
                            }
                        })
                        .catch(err => {
                            $('#WaitingModal').modal('hide');
                            $('#FailureModal').modal('show');
                        });
                    },
                    error: (data) => {
                        _this.pushLead('KO', '', '2_completato');

                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                    }
                }).done((data) => {
                    console.log('formFotovoltaico open done', data);
                });
            },

            evolvereSubmit: function( jwt, trovato ) {
                console.log('formFotovoltaico submit submitAPIForm');

                var _this = this;
                let paramsLead = this.evolvereParamsLead(trovato);

                let api_url = (this.test) ? 'https://hubaqo.it/api/v2/pda/' : 'https://hubaqo.it/api/v2/pda/';

                $.ajax({
                    url: api_url,
                    type: 'post',
                    cache: false,
                    data: paramsLead,
                    crossDomain: true,
                    dataType: 'json',
                    contentType: "application/json",
                    beforeSend: (xhr) => {   //Include the bearer token in header
                        xhr.setRequestHeader("Authorization", 'JWT '+ jwt);
                    },
                    success: (data) => {
                        let html = $('#SuccessModal').find('p').html().replace("Plenitude", "Evolvere");
                        $('#SuccessModal').find('p').html(html);

                        $('#WaitingModal').modal('hide');
                        $('#SuccessModal').modal('show');

                        _this.pushLead('OK', data.id, '2_completato');
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');

                        _this.pushLead('KO', '', '2_completato');
                    }

                }).done((data) => {
                    console.log('formFotovoltaico open done', data);
                });
            },

            //- SUBMIT SEA ----
            seaParamsLogin: function() {

                let params = {
                    "utente": this.user,
                    "pswd": this.password
                };

                var fd = new FormData();
                fd.append("dati", JSON.stringify(params));

                return fd;
            },

            seaParamsLead: function(jwt, copertura) {

                let params = {
                    'nome': this.getValue( $(this.element).find('[name="nome"]').val(), '', true),
                    'cognome': this.getValue( $(this.element).find('[name="cognome"]').val(), '', true),
                    'email': this.getValue( $(this.element).find('[name="email"]').val(), '', true),
                    'telefono': this.getValue( $(this.element).find('[name="telefono"]').val(), '', true),
                    'cap': this.getValue( $(this.element).find('[name="cap"]').val(), '', true),
                    'comune': this.getValue( $(this.element).find('[name="citta"]').val(), '', true),
                    'provincia': this.getValue( $(this.element).find('[name="provincia"]').val(), ' - ', true),
                    'idGestione': this.templateId,
                    'tkn': jwt
                };

                var fd = new FormData();
                fd.append("dati", JSON.stringify(params));

                //return { "dati": JSON.stringify(params) };
                return fd;
            },

            seaAuth: function() {
                console.log('formFotovoltaico submit API');

                this.user = 'plenitudesea'
                this.password = 'LA7gCLh5tkP5QQ?@NnQB'
                this.templateId = 4436 //API EGL

                var _this = this;
                let paramsLogin = this.seaParamsLogin();

                let auth_url = 'https://api.energiaitaliaspa.com/getTkn';

                _this = this;
                $.ajax({
                    url: auth_url,
                    type: 'post',
                    data: paramsLogin,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: function(data) {
                        console.log('sea submit API', data);
                        _this.seaSubmit( data.dati.tkn, true );

                        // let cc = this.getValue($(this.element).find('[name="citta"]').val()) + ' - ' + this.getValue($(this.element).find('[name="cap"]').val());
                        // checkCover(cc).then(res => {
                        //     if (res) {
                        //         this.seaSubmit( data.dati.tkn, true );
                        //     } else {
                        //         this.seaSubmit( data.dati.tkn, false );
                        //     }
                        // })
                        // .catch(err => {
                        //     $('#WaitingModal').modal('hide');
                        //     $('#FailureModal').modal('show');
                        // });
                    },
                    error: function(data) {
                        _this.pushLead('KO', '', '2_completato');

                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                    }
                }).done( function(data) {
                    console.log('sea open done', data);
                });
            },

            seaSubmit: function( jwt, trovato ) {
                console.log('sea submit submitAPIForm');

                var _this = this;
                //let paramsLead = this.seaParamsLogin();
                let paramsLead = this.seaParamsLead(jwt, trovato);

                let api_url = 'https://api.energiaitaliaspa.com/setLead';

                $.ajax({
                    url: api_url,
                    type: 'post',
                    data: paramsLead,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    // beforeSend: function (xhr) {   //Include the bearer token in header
                    //     xhr.setRequestHeader("Authorization", 'JWT '+ jwt);
                    // },
                    success: function(data){
                        let html = $('#SuccessModal').find('p').html().replace("Plenitude", "SEA");
                        $('#SuccessModal').find('p').html(html);

                        $('#WaitingModal').modal('hide');
                        $('#SuccessModal').modal('show');

                        _this.pushLead('OK', data.id, '2_completato');
                    },
                    error: function(data){
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');

                        _this.pushLead('KO', '', '2_completato');
                    }

                }).done( function(data){
                    console.log('sea open done', data);
                });
            },

            pushLead: function(esito, id, step) {
                var params = {
                    commodity: $(this.element).find('[name="nomeForm"]').val(),
                    esito: esito,
                    event: "customSubscription",
                    id_lead: id,
                    listino: false,
                    macro_step: step,
                    operazione: "call back",
                    opzione: null,
                    prodotto: this.prodotto,
                    settore: this.segmentoCliente,
                }
                callDataLayerPush ( params );
            },

            //- CLOSE ---
            close: function(evt) {
                evt.preventDefault();
                $('.close').trigger('click');
            },

        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="callmeback-modale"][pln-version="2.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').callmeback2();
        }, 1000);

    });
})(jQuery);*/
(function($) {
    $(function() {

        $.widget("sf.callmeback", {

            _create: function() {

                // set remote domanin onli for localhost call
                this.domain = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'https://eniplenitude.com' : '';

                this.listino = this.getValue($(this.element).find('[name="listino"]').val(), null);
                this.touchpoint = this.getValue($(this.element).find('[name="touchpoint"]').val());
                this.prodotto = this.getValue($(this.element).find('[name="product_Type__c"]').val());
                this.segmento = window.IS_BUSINESS ? 'Business' : 'Residenziale';

                this.id = $(this.element).find('.modal').attr('id');
                let openBtn = $('[callmeback="' + this.id + '"]');
                this._on($(openBtn), {
                    click: "open"
                });

                let closeBtn = $(this.element).find('.close');
                this._on($(closeBtn), {
                    click: "close"
                });

                //- FLAG ---
                this.invio_mail = $(this.element).find("[name='invio_mail']").length ? $(this.element).find("[name='invio_mail']").val().toLowerCase() : 'false';
                this.check_cover = $(this.element).find("[name='check_cover']").length ? $(this.element).find("[name='check_cover']").val().toLowerCase() : 'false';

                let submitBtn = $(this.element).find('[type="submit"]');
                this._on($(submitBtn), {
                    click: "submit"
                });

                //this.check();
                console.log('create');
            },

            open: function(evt) {
                evt.preventDefault();
                $('#' + this.id).modal('show');

                try {
                    callDataLayer({
                        "event": "customSubscription",
                        "macro_step": "1_i tuoi dati",
                        "operazione": "call back",
                        "prodotto": this.prodotto,
                        "commodity": null,
                        "settore": this.segmento,
                        "opzione": null,
                        "listino": null,
                        "esito": null,
                        "id_lead": null
                    });
                } catch (error) {

                }
            },

            close: function(evt) {
                evt.preventDefault();
                $('#' + this.id).modal('hide');

                // try {
                //     callDataLayer({
                //         'event': 'cta_click',
                //         'cta_cliccata’': 'tellis_scopri',
                //         'dettaglio_cta_cliccata': $(".fasciaimg").eq(1).find('.egl-fascia-img-cta a').attr('href')
                //     });
                // } catch (error) {

                // }
            },

            //- Form submit
            submit: function(evt) {
                evt.preventDefault();

                if (sfFormCheck('#' + this.id)) {
                    this.close(evt);
                    $('#WaitingModal').modal('show');

                    // i campi del form sono formalmente corretti

                    if (typeof checkCover !== undefined && (this.check_cover == 'y' || this.check_cover == 'yes')) {

                        // è necessario verificare la copertura
                        let cc = this.getValue($(this.element).find('[name="citta"]').val()) + ' - ' + this.getValue($(this.element).find('[name="cap"]').val());
                        checkCover(cc).then(res => {
                            if (res) {
                                // copertura OK
                                this.send();
                            } else {
                                // copertura OK
                                $('#WaitingModal').modal('hide');
                                $('#FailureCapModal').modal('show');
                            }
                        })
                            .catch(err => {
                                $('#WaitingModal').modal('hide');
                                $('#FailureModal').modal('show');
                            });
                    } else {
                        this.send();
                    }

                }
            },

            send: function() {
                if (this.invio_mail == 'y' || this.invio_mail == 'yes') {
                    this.getCoupon(this.getFdCoupon(this.touchpoint, this.prodotto), this.getFd(this.touchpoint, this.prodotto));
                } else {
                    this.submitEGL(this.getFd(this.touchpoint, this.prodotto));
                }
            },

            getValue: function(value, alternative = '') {
                return value ? value : alternative;
            },

            getFdCoupon: function(touchpoint, prodotto) {
                let fd = new FormData();

                var object = {
                    'nomeForm': this.getValue($(this.element).find('[name="nomeForm"]').val()),
                    'touchpoint': touchpoint,
                    'codice_coupon': this.getValue($(this.element).find('[name="codice_coupon"]').val()),
                    'iniziativa': this.getValue($(this.element).find('[name="iniziativa"]').val()),
                    'numCampi': 0,
                    'nomeCampi': "",
                    'invio_mail': this.getValue($(this.element).find('[name="invio_mail"]').val()),
                    'campagna': this.getValue($(this.element).find('[name="campagna"]').val()),
                    'email': this.getValue($(this.element).find('[name="email"]').val()),
                    'phone': this.getValue($(this.element).find('[name="telefono"]').val()),
                    'first_name': this.getValue($(this.element).find('[name="nome"]').val()),
                    'last_name': this.getValue($(this.element).find('[name="cognome"]').val()),
                    'city': this.getValue($(this.element).find('[name="citta"]').val()),
                    'cap': this.getValue($(this.element).find('[name="cap"]').val()),
                    'invia_al_centralizzatore': this.getValue($(this.element).find('[name="invia_al_centralizzatore"]').val()),
                    'product_Type__c': prodotto,
                    'consensoDatiPers__c': true,
                    'note__c': this.getValue($(this.element).find('[name="note__c"]').val()),
                    // 'url_chiamante': this.getValue($(this.element).find('[name="url_chiamante"]').val()),
                    // 'recaptchaResponse': this.getValue($(this.element).find('[name="recaptchaResponse"]').val()),
                    // 'commodity': this.getValue($(this.element).find('[name="commodity"]').val()),
                    // 'codiceProposta': this.getValue($(this.element).find('[name="codiceProposta"]').val()),
                    // 'tracking__product': this.getValue($(this.element).find('[name="tracking__product"]').val()),
                    // 'tracking__listino': this.getValue($(this.element).find('[name="tracking__listino"]').val()),
                    // 'categoria__c': this.getValue($(this.element).find('[name="categoria__c"]').val()),
                    // 'consentMarketAnalisis__c': $(this.element).find('[name="consentMarketAnalisis__c"]').is(':checked'),
                    // 'consentpromotion__c': $(this.element).find('[name="consentMarketAnalisis__c"]').is(':checked'),
                    // 'consentmarketing__c': false,
                    // 'product_Type__o': this.getValue($(this.element).find('[name="product_Type__o"]').val()),
                    // 'product_Type__pc': this.getValue($(this.element).find('[name="product_Type__pc"]').val()),
                    // 'product_Type__mom': this.getValue($(this.element).find('[name="product_Type__mom"]').val()),
                };

                let nomeCampi = []
                for (const property in object) {
                    nomeCampi.push(property);
                }

                object.numCampi = nomeCampi.length;
                object.nomeCampi = nomeCampi.join('|')

                console.log('sf.typWo Fd', fd);

                return object;
            },

            getFdName: function(value) {
                let r = value;

                switch (value) {
                    case 'first_name':
                        r = 'nome';
                        break;
                    case 'last_name':
                        r = 'cognome';
                        break;
                    case 'city':
                        r = 'citta';
                        break;
                    default:
                        break;
                }

                return r;
            },

            getFd: function(touchpoint, prodotto) {
                let fd = new FormData();

                var object = {
                    'flagPrivacy0': true,
                    'flagPrivacy1': $(this.element).find('[name="flagPrivacy1"]').is(':checked'),
                    'flagPrivacy2': $(this.element).find('[name="flagPrivacy1"]').is(':checked'),
                    'flagPrivacy3': false,
                    'reCaptchaResponse': '',
                    'touchpoint': touchpoint,
                    'canale': 'Web',
                    'prodotto': prodotto,
                    'dettaglioProdotto': prodotto,
                    'segmentoCliente': window.IS_BUSINESS ? 'Business' : 'Residenziale',
                    'note': this.getValue($(this.element).find('[name="note__c"]').val()),
                    'codiceAgente': this.getValue($(this.element).find('[name="agente"]').val()),
                    'esito': true
                };

                // add all input fields to json
                let text = $(this.element).find('[type="text"], [type="email"], [type="number"], [type="tel"], textarea, select')
                for (let i = 0; i < text.length; i++) {
                    object[$(text[i]).attr('name')] = this.getValue($(text[i]).val());
                }

                // add all checkbox fields to json
                let checkbox = $(this.element).find('[type="checkbox"]')
                for (let i = 0; i < checkbox.length; i++) {
                    object[$(checkbox[i]).attr('name')] = $(checkbox[i]).is(':checked');
                }

                // console.log('sf.typWo Fd', fd);

                return object;
            },

            //https://eniplenitude.com/domm-ajaxredir/backend-controller-services/codiceCoupon/staccaCoupon?chiave=caldaiaSconto100&pagina_chiamante=test&iniziativa=default&flagBrucia=Y
            getCoupon: function(params, paramsEGL) {

                let url = this.domain + `/domm-ajaxredir/backend-controller-services/codiceCoupon/staccaCoupon?chiave=${params.campagna}&pagina_chiamante=${params.url_chiamante}&iniziativa=${params.iniziativa}&flagBrucia=Y`

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Origin": "https://eniplenitude.com",
                        "Referer": "https://eniplenitude.com/convenzioni/bnl22/caldaia-loyalty?leadchannel=dem-N300203.1919548HICMOBILENETWORK"
                    },
                    url: url,
                    type: 'post',
                    dataType: "json",
                    //data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        if (typeof data !== undefined) {
                            if (data.codice_coupon && data.codice_coupon == 'ERRORE') {
                                $('#WaitingModal').modal('hide');
                                $('#FailureModal').modal('show');
                            } else {
                                console.log("ENTRA PERCHE TROVA IL CODICE COUPON")
                                params.codice_coupon = data.codice_coupon;
                                this.codice_coupon = data.codice_coupon
                                //setTimeout(() => this.submitCoupon(params, paramsEGL), 100);
                            }
                        } else {
                            $('#WaitingModal').modal('hide');
                            $('#FailureModal').modal('show');
                        }
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        //params.codice_coupon = 'NONE';
                        //this.submitCoupon(params, paramsEGL);
                    }
                }).done((data) => {
                    console.log('sf.typWo submitEGL done', data);
                });
                return false;
            },

            submitCoupon: function(params, paramsEGL) {

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: this.domain + '/domm-ajaxredir/backend-controller-services/leadManagement/salvaGenericFormLead',
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        this.submitEGL(paramsEGL);
                    },
                    error: function(data) {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        console.log('sf.typWo submitEGL fail', data.responseJSON);
                        console.log('sf.typWo submitEGL fail', data.status);
                    }
                }).done(function(data) {
                    console.log('sf.typWo submitEGL done', data);
                });
                return false;
            },

            submitEGL: function(params) {
                console.log('sf.typWo submitEGL params', params);

                if ( leadchannel = sfUrl.getParameter( 'leadchannel' ) ){
                    params.note = params.note + ';' + leadchannel;
                    params.dettaglioProdotto = params.dettaglioProdotto + ';' + leadchannel + ";" + this.codice_coupon;
                }

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: this.domain + '/domm-ajaxredir/backend-controller-services/leadManagement/invioDatiCentralizzatore',
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {

                        if (data.esito == 'OK_NEW_LEAD'){

                            $('#WaitingModal').modal('hide');
                            $('#SuccessModal').modal('show');
                            console.log('sf.typWo submitEGL success', data);

                            try {
                                callDataLayer({
                                    "event": "customSubscription",
                                    "macro_step": "2_completato",
                                    "operazione": "call back",
                                    "prodotto": this.prodotto,
                                    "commodity": null,
                                    "settore": params.segmentoCliente,
                                    "opzione": null,
                                    "listino": false,
                                    "esito": "ok",
                                    "id_lead": data.leadId
                                });
                            } catch (error) {

                            }

                        } else {
                            $('#WaitingModal').modal('hide');
                            $('#FailureModal').modal('show');
                            console.log('sf.typWo submitEGL fail', data.responseJSON);
                            console.log('sf.typWo submitEGL fail', data.status);

                            try {
                                callDataLayer({
                                    "event": "customSubscription",
                                    "macro_step": "2_completato",
                                    "operazione": "call back",
                                    "prodotto": this.prodotto,
                                    "commodity": null,
                                    "settore": params.segmentoCliente,
                                    "opzione": null,
                                    "listino": false,
                                    "esito": "ko",
                                    "id_lead": data.leadId
                                });
                            } catch (error) {

                            }
                        }
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        console.log('sf.typWo submitEGL fail', data.responseJSON);
                        console.log('sf.typWo submitEGL fail', data.status);

                        try {
                            callDataLayer({
                                "event": "customSubscription",
                                "macro_step": "2_completato",
                                "operazione": "call back",
                                "prodotto": this.prodotto,
                                "commodity": null,
                                "settore": params.segmentoCliente,
                                "opzione": null,
                                "listino": false,
                                "esito": "ko",
                                "id_lead": data.leadId
                            });
                        } catch (error) {

                        }
                    }
                }).done((data) => {
                    console.log('sf.typWo submitEGL done', data);
                });
                return false;
            }

        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="callmeback"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').callmeback();
        }, 1000);

    });
})(jQuery);
(function ($) {
    $(function () {

        $.widget("sf.callmeback2", {

            _create: function () {
                this.test = !sfUrl.isProd();

                // set remote domanin onli for localhost call
                this.domain = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'https://eniplenitude.com' : '';

                let modalId = $(this.element).find('.modal').attr('id');
                this.trackOpen(modalId);

                this.form = $(this.element).find('form');

                this.listino = this.getValue($(this.element).find('[name="listino"]').val(), null);
                this.touchpoint = this.getValue($(this.element).find('[name="touchpoint"]').val(), 'DEFAULT');
                this.prodotto = this.getValue($(this.element).find('[name="product_Type__c"]').val());
                this.segmentoCliente = window.IS_BUSINESS ? 'Business' : 'Residenziale';

                // attiva la gestione pertner in base al cap
                this.check_partner = this.getValue($(this.element).find('[name="check_partner"]').val(), null);

                // il partner identifica la tipologia di invio
                // DEFAULT invio a d365 plenitude
                this.partner = this.getValue($(this.element).find('[name="partner"]').val(), 'DEFAULT');

                //- FLAG ---
                this.invio_mail = $(this.element).find("[name='invio_mail']").length ? $(this.element).find("[name='invio_mail']").val().toLowerCase() : 'false';
                this.check_cover = $(this.element).find("[name='check_cover']").length ? $(this.element).find("[name='check_cover']").val().toLowerCase() : 'false';

                let submitBtn = $(this.element).find('[type="submit"]');
                this._on($(submitBtn), {
                    click: "submit"
                });

                //this.check();
                console.log('create');

                if (this.check_partner) {
                    this.egoncap = $(this.element).find('[egoncap]');
                    $(this.element).find('.privacy-disclaimer p').hide();

                    this._on($(this.egoncap), {
                        change: "partnerCAP"
                    });
                }
            },

            partnerCAP: function () {
                let val = this.egoncap.val();

                checkPartner(val).then(res => {
                    this.partner = res;
                    $(this.element).find('.privacy-disclaimer p').hide();
                    switch (this.partner) {
                        case "SEA":
                            $(this.element).find('.privacy-disclaimer p').eq(1).show();
                            break;
                        case "EVOLVERE":
                            $(this.element).find('.privacy-disclaimer p').eq(0).show();
                            break;
                        default:
                            break;
                    }
                });
            },

            //- Form submit
            submit: function (evt) {
                evt.preventDefault();

                if (sfFormCheck(this.form)) {

                    this.close(evt);
                    $('#WaitingModal').modal('show');

                    // i campi del form sono formalmente corretti

                    if (typeof checkCover !== undefined && (this.check_cover == 'y' || this.check_cover == 'yes')) {

                        // è necessario verificare la copertura
                        let cc = this.getValue($(this.element).find('[name="citta"]').val()) + ' - ' + this.getValue($(this.element).find('[name="cap"]').val());
                        checkCover(cc).then(res => {
                            if (res) {
                                // copertura OK
                                this.send();
                            } else {
                                // copertura OK
                                $('#WaitingModal').modal('hide');
                                $('#FailureCapModal').modal('show');
                            }
                        })
                            .catch(err => {
                                $('#WaitingModal').modal('hide');
                                $('#FailureModal').modal('show');
                            });
                    } else {
                        this.send();
                    }

                }
            },

            send: function () {
                if (this.invio_mail == 'y' || this.invio_mail == 'yes') {
                    this.getCoupon(this.getFdCoupon(this.touchpoint, this.prodotto), this.getFd(this.touchpoint, this.prodotto));
                } else {
                    this.submitLead(this.getFd(this.touchpoint, this.prodotto));
                }
            },

            getValue: function (value, alternative = '', lower = false) {
                return value ? (lower) ? value.toLowerCase() : value : alternative;
            },

            getFdCoupon: function (touchpoint, prodotto) {
                let fd = new FormData();

                var object = {
                    'nomeForm': this.getValue($(this.element).find('[name="nomeForm"]').val()),
                    'touchpoint': touchpoint,
                    'codice_coupon': this.getValue($(this.element).find('[name="codice_coupon"]').val()),
                    'iniziativa': this.getValue($(this.element).find('[name="iniziativa"]').val()),
                    'numCampi': 0,
                    'nomeCampi': "",
                    'invio_mail': this.getValue($(this.element).find('[name="invio_mail"]').val()),
                    'campagna': this.getValue($(this.element).find('[name="campagna"]').val()),
                    'email': this.getValue($(this.element).find('[name="email"]').val()),
                    'phone': this.getValue($(this.element).find('[name="telefono"]').val()),
                    'first_name': this.getValue($(this.element).find('[name="nome"]').val()),
                    'last_name': this.getValue($(this.element).find('[name="cognome"]').val()),
                    'city': this.getValue($(this.element).find('[name="citta"]').val()),
                    'cap': this.getValue($(this.element).find('[name="cap"]').val()),
                    'invia_al_centralizzatore': this.getValue($(this.element).find('[name="invia_al_centralizzatore"]').val()),
                    'product_Type__c': prodotto,
                    'consensoDatiPers__c': true,
                    'note__c': this.getValue($(this.element).find('[name="note__c"]').val()),
                    // 'url_chiamante': this.getValue($(this.element).find('[name="url_chiamante"]').val()),
                    // 'recaptchaResponse': this.getValue($(this.element).find('[name="recaptchaResponse"]').val()),
                    // 'commodity': this.getValue($(this.element).find('[name="commodity"]').val()),
                    // 'codiceProposta': this.getValue($(this.element).find('[name="codiceProposta"]').val()),
                    // 'tracking__product': this.getValue($(this.element).find('[name="tracking__product"]').val()),
                    // 'tracking__listino': this.getValue($(this.element).find('[name="tracking__listino"]').val()),
                    // 'categoria__c': this.getValue($(this.element).find('[name="categoria__c"]').val()),
                    // 'consentMarketAnalisis__c': $(this.element).find('[name="consentMarketAnalisis__c"]').is(':checked'),
                    // 'consentpromotion__c': $(this.element).find('[name="consentMarketAnalisis__c"]').is(':checked'),
                    // 'consentmarketing__c': false,
                    // 'product_Type__o': this.getValue($(this.element).find('[name="product_Type__o"]').val()),
                    // 'product_Type__pc': this.getValue($(this.element).find('[name="product_Type__pc"]').val()),
                    // 'product_Type__mom': this.getValue($(this.element).find('[name="product_Type__mom"]').val()),
                };

                let nomeCampi = []
                for (const property in object) {
                    nomeCampi.push(property);
                }

                object.numCampi = nomeCampi.length;
                object.nomeCampi = nomeCampi.join('|')

                console.log('sf.typWo Fd', fd);

                return object;
            },

            getFdName: function (value) {
                let r = value;

                switch (value) {
                    case 'first_name':
                        r = 'nome';
                        break;
                    case 'last_name':
                        r = 'cognome';
                        break;
                    case 'city':
                        r = 'citta';
                        break;
                    default:
                        break;
                }

                return r;
            },

            getFd: function (touchpoint, prodotto) {
                let fd = new FormData();

                var object = {
                    'flagPrivacy0': true,
                    'flagPrivacy1': $(this.element).find('[name="flagPrivacy1"]').is(':checked'),
                    'flagPrivacy2': $(this.element).find('[name="flagPrivacy1"]').is(':checked'),
                    'flagPrivacy3': false,
                    'reCaptchaResponse': '',
                    'touchpoint': touchpoint,
                    'canale': 'Web',
                    'prodotto': prodotto,
                    'dettaglioProdotto': prodotto,
                    'segmentoCliente': this.segmentoCliente,
                    'note': this.getValue($(this.element).find('[name="note__c"]').val()),
                    'codiceAgente': this.getValue($(this.element).find('[name="agente"]').val()),
                    'esito': ''
                };

                // add all input fields to json
                let text = $(this.element).find('[type="text"], [type="email"], [type="number"], [type="tel"], textarea, select')
                for (let i = 0; i < text.length; i++) {
                    object[$(text[i]).attr('name')] = this.getValue($(text[i]).val());
                }

                // add all checkbox fields to json
                let checkbox = $(this.element).find('[type="checkbox"]')
                for (let i = 0; i < checkbox.length; i++) {
                    object[$(checkbox[i]).attr('name')] = $(checkbox[i]).is(':checked');
                }

                // console.log('sf.typWo Fd', fd);

                return object;
            },

            //https://eniplenitude.com/domm-ajaxredir/backend-controller-services/codiceCoupon/staccaCoupon?chiave=caldaiaSconto100&pagina_chiamante=test&iniziativa=default&flagBrucia=Y
            getCoupon: function (params, paramsEGL) {

                let url = this.domain + `/domm-ajaxredir/backend-controller-services/codiceCoupon/staccaCoupon?chiave=${params.campagna}&pagina_chiamante=${params.url_chiamante}&iniziativa=${params.iniziativa}&flagBrucia=Y`

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'


                    },
                    url: url,
                    type: 'post',
                    dataType: "json",
                    //data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        if (typeof data !== undefined) {
                            if (data.codice_coupon && data.codice_coupon == 'ERRORE') {
                                $('#WaitingModal').modal('hide');
                                $('#FailureModal').modal('show');
                            } else {

                                params.codice_coupon = data.codice_coupon;
                                this.codice_coupon = data.codice_coupon

                                this.submitCoupon(params, paramsEGL);
                            }
                        } else {
                            $('#WaitingModal').modal('hide');
                            $('#FailureModal').modal('show');
                        }
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        //params.codice_coupon = 'NONE';
                        //this.submitCoupon(params, paramsEGL);
                    }
                }).done((data) => {
                    console.log('sf.typWo plenitudeSubmit done', data);
                });
                return false;
            },

            submitCoupon: function (params, paramsEGL) {

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: this.domain + '/domm-ajaxredir/backend-controller-services/leadManagement/salvaGenericFormLead',
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        this.submitLead(paramsEGL);
                    },
                    error: function (data) {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        console.log('sf.typWo plenitudeSubmit fail', data.responseJSON);
                        console.log('sf.typWo plenitudeSubmit fail', data.status);
                    }
                }).done(function (data) {
                    console.log('sf.typWo plenitudeSubmit done', data);
                });
                return false;
            },

            submitLead: function (params) {
                switch (this.partner) {
                    case 'SEA':
                        this.seaAuth(params);
                        break;
                    case 'EVOLVERE':
                        this.evolvereAuth(params);
                        break;
                    case 'AGENTI':
                        this.evolvereAuth(params);
                        break;
                    default:
                        this.plenitudeSubmit(params);
                        break;
                }
            },

            //- SUBMIT DEFAULT ----
            plenitudeSubmit: function (params) {
                console.log('sf.typWo plenitudeSubmit params', params);

                let _this = this;

                if (leadchannel = sfUrl.getParameter('leadchannel')) {
                    params.note = params.note + ';' + leadchannel;
                    params.dettaglioProdotto = params.dettaglioProdotto + ';' + leadchannel + ";" + this.codice_coupon;
                }

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: this.domain + '/domm-ajaxredir/backend-controller-services/leadManagement/invioDatiCentralizzatore',
                    type: 'post',
                    dataType: "json",
                    data: JSON.stringify(params),
                    //contentType: false,
                    //processData: false,
                    success: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#SuccessModal').modal('show');
                        console.log('sf.typWo plenitudeSubmit success', data);

                        _this.pushLead('ok', data.leadId, '2_completato');
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                        console.log('sf.typWo plenitudeSubmit fail', data.responseJSON);
                        console.log('sf.typWo plenitudeSubmit fail', data.status);

                        _this.pushLead('ko', null, '2_completato');
                    }
                }).done((data) => {
                    console.log('sf.typWo plenitudeSubmit done', data);
                });
                return false;
            },

            //- SUBMIT EVOLVERE ----
            evolvereParamsLogin: function () {

                var fd = new FormData();
                fd.append("username", this.user);
                fd.append("password", this.password);

                return fd;
            },

            evolvereParamsLead: function (copertura) {

                let note = sfUrl.getParameter('from');

                let formInfo = {
                    'tmpl_data-e-ora-arrivo': null,
                    'tmpl_nome-cognome': this.getValue($(this.element).find('[name="nome"]').val(), '', true),
                    'tmpl_cognome': this.getValue($(this.element).find('[name="cognome"]').val(), '', true),
                    'tmpl_telefono': this.getValue($(this.element).find('[name="telefono"]').val(), '', true),
                    'tmpl_superbonus': this.getValue($(this.element).find('[name="nomeForm"]').val(), '', true) == 110,
                    'tmpl_regione': '',
                    'tmpl_provincia': this.getValue($(this.element).find('[name="provincia"]').val(), 'MI', true),
                    'tmpl_citta': this.getValue($(this.element).find('[name="citta"]').val(), '', true),
                    'tmpl_cap': this.getValue($(this.element).find('[name="cap"]').val(), '', true),
                    'tmpl_ese': copertura,
                    'tmpl_email': this.getValue($(this.element).find('[name="email"]').val(), '', true),
                    'tmpl_microesito': null,
                    'tmpl_dipendente-cliente': (this.getValue($(this.element).find('[name="user_type"]').val(), '', true) == 'dipendente') ? 'dipendente' : 'cliente',
                    'tmpl_cluster': sfUrl.getParameter('from'),
                    'tmpl_note-precedenti': null,
                    'tmpl_offerta': null,
                    'tmpl_agente': null,
                    'tmpl_tipologia': null,
                    'tmpl_mese-chiusura': null,
                    'tmpl_marketing': $(this.element).find('[name="flagPrivacy1"]')[0]?.checked
                }

                console.log('formFotovoltaico getParamsLead', formInfo);

                let fd = {
                    "status": 'backoffice',
                    "form_data": JSON.stringify(formInfo),
                    "template": this.templateId
                }

                return JSON.stringify(fd);
            },

            evolvereAuth: function () {
                console.log('formFotovoltaico submit API');

                if (!this.test) {
                    this.user = 'leadapiegl'
                    this.password = '3v0lv3r3L34d4p13gl'
                    this.templateId = 172 //API EGL
                } else {
                    this.user = 'leadapiegltest'
                    this.password = '3v0lv3r3L34d4p13gl'
                    this.templateId = 233 //Test API EGL
                }

                let _this = this;
                let paramsLogin = this.evolvereParamsLogin();

                let auth_url = 'https://hubaqo.it/api/v2/jwt/token/';

                $.ajax({
                    url: auth_url,
                    type: 'post',
                    data: paramsLogin,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: (data) => {
                        console.log('formFotovoltaico submit API', data);
                        // _this.evolvereSubmit( data.token, true );

                        let cc = this.getValue($(this.element).find('[name="citta"]').val()) + ' - ' + this.getValue($(this.element).find('[name="cap"]').val());
                        checkCover(cc).then(res => {
                            if (res) {
                                _this.evolvereSubmit(data.token, true);
                            } else {
                                _this.evolvereSubmit(data.token, false);
                            }
                        })
                            .catch(err => {
                                $('#WaitingModal').modal('hide');
                                $('#FailureModal').modal('show');
                            });
                    },
                    error: (data) => {
                        _this.pushLead('KO', '', '2_completato');

                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                    }
                }).done((data) => {
                    console.log('formFotovoltaico open done', data);
                });
            },

            evolvereSubmit: function (jwt, trovato) {
                console.log('formFotovoltaico submit submitAPIForm');

                let _this = this;
                let paramsLead = this.evolvereParamsLead(trovato);

                let api_url = (this.test) ? 'https://hubaqo.it/api/v2/pda/' : 'https://hubaqo.it/api/v2/pda/';

                $.ajax({
                    url: api_url,
                    type: 'post',
                    cache: false,
                    data: paramsLead,
                    crossDomain: true,
                    dataType: 'json',
                    contentType: "application/json",
                    beforeSend: (xhr) => { //Include the bearer token in header
                        xhr.setRequestHeader("Authorization", 'JWT ' + jwt);
                    },
                    success: (data) => {
                        let html = $('#SuccessModal').find('p').html().replace("Plenitude", "Evolvere");
                        $('#SuccessModal').find('p').html(html);

                        $('#WaitingModal').modal('hide');
                        $('#SuccessModal').modal('show');

                        _this.pushLead('OK', data.id, '2_completato');
                    },
                    error: (data) => {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');

                        _this.pushLead('KO', '', '2_completato');
                    }

                }).done((data) => {
                    console.log('formFotovoltaico open done', data);
                });
            },

            //- SUBMIT SEA ----
            seaParamsLogin: function () {

                let params = {
                    "utente": this.user,
                    "pswd": this.password
                };

                var fd = new FormData();
                fd.append("dati", JSON.stringify(params));

                return fd;
            },

            seaParamsLead: function (jwt, copertura) {

                let params = {
                    'nome': this.getValue($(this.element).find('[name="nome"]').val(), '', true),
                    'cognome': this.getValue($(this.element).find('[name="cognome"]').val(), '', true),
                    'email': this.getValue($(this.element).find('[name="email"]').val(), '', true),
                    'telefono': this.getValue($(this.element).find('[name="telefono"]').val(), '', true),
                    'cap': this.getValue($(this.element).find('[name="cap"]').val(), '', true),
                    'comune': this.getValue($(this.element).find('[name="citta"]').val(), '', true),
                    'provincia': this.getValue($(this.element).find('[name="provincia"]').val(), ' - ', true),
                    'idGestione': this.templateId,
                    'tkn': jwt
                };

                var fd = new FormData();
                fd.append("dati", JSON.stringify(params));

                //return { "dati": JSON.stringify(params) };
                return fd;
            },

            seaAuth: function () {
                console.log('formFotovoltaico submit API');

                this.user = 'plenitudesea'
                this.password = 'LA7gCLh5tkP5QQ?@NnQB'
                this.templateId = 4436 //API EGL

                let _this = this;
                let paramsLogin = this.seaParamsLogin();

                let auth_url = 'https://api.energiaitaliaspa.com/getTkn';

                $.ajax({
                    url: auth_url,
                    type: 'post',
                    data: paramsLogin,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: function (data) {
                        console.log('sea submit API', data);
                        _this.seaSubmit(data.dati.tkn, true);

                        // let cc = this.getValue($(this.element).find('[name="citta"]').val()) + ' - ' + this.getValue($(this.element).find('[name="cap"]').val());
                        // checkCover(cc).then(res => {
                        //     if (res) {
                        //         this.seaSubmit( data.dati.tkn, true );
                        //     } else {
                        //         this.seaSubmit( data.dati.tkn, false );
                        //     }
                        // })
                        // .catch(err => {
                        //     $('#WaitingModal').modal('hide');
                        //     $('#FailureModal').modal('show');
                        // });
                    },
                    error: function (data) {
                        _this.pushLead('KO', '', '2_completato');

                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');
                    }
                }).done(function (data) {
                    console.log('sea open done', data);
                });
            },

            seaSubmit: function (jwt, trovato) {
                console.log('sea submit submitAPIForm');

                let _this = this;
                //let paramsLead = this.seaParamsLogin();
                let paramsLead = this.seaParamsLead(jwt, trovato);

                let api_url = 'https://api.energiaitaliaspa.com/setLead';

                $.ajax({
                    url: api_url,
                    type: 'post',
                    data: paramsLead,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    // beforeSend: function (xhr) {   //Include the bearer token in header
                    //     xhr.setRequestHeader("Authorization", 'JWT '+ jwt);
                    // },
                    success: function (data) {
                        let html = $('#SuccessModal').find('p').html().replace("Plenitude", "SEA");
                        $('#SuccessModal').find('p').html(html);

                        $('#WaitingModal').modal('hide');
                        $('#SuccessModal').modal('show');

                        _this.pushLead('OK', data.id, '2_completato');
                    },
                    error: function (data) {
                        $('#WaitingModal').modal('hide');
                        $('#FailureModal').modal('show');

                        _this.pushLead('KO', '', '2_completato');
                    }

                }).done(function (data) {
                    console.log('sea open done', data);
                });
            },

            //- TRACKING ---
            trackOpen: function (id) {
                $(`[data-target="#${id}"]`).on('click', () => {
                    this.pushLead(null, null, "1_i tuoi dati");
                });
            },

            pushLead: function (esito, id, step) {
                var params = {
                    commodity: $(this.element).find('[name="nomeForm"]').val(),
                    esito: esito,
                    event: "customSubscription",
                    id_lead: id,
                    listino: false,
                    macro_step: step,
                    operazione: "call back",
                    opzione: null,
                    prodotto: this.prodotto,
                    settore: this.segmentoCliente,
                }
                callDataLayerPush(params);
            },

            //- CLOSE ---
            close: function (evt) {
                evt.preventDefault();
                $(this.element).find('.close').trigger('click');
            },

        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="callmeback-modale"][pln-version="2.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').callmeback2();
        }, 1000);

    });
})(jQuery);
$(document).ready(function () {
    if ( $('[pln-components="card-snodo-grid"][pln-version="1.0"]').length != 0 ) {
        // console.log('card-snodo-grid');

        var item = $('[pln-components="card-snodo-grid"][pln-version="1.0"] .item');
        var numItems = item.length;
        // console.log('numItems' , numItems);
        $('.content-arrows').hide();

        var colorCard = $('#inputColorCard');
        var colorCardValue = colorCard[0].value;

        var colorFlag = $('#inputColorFlag');
        var colorFlagValue = colorFlag[0].value;


        // var colorFlagElement = $('.flag .bg-flag');
        // console.log('colorCard',colorCard[0].value);
        // console.log('colorFlag',colorFlag);
        // console.log('colorCardElement',colorCardElement);
        // console.log('colorFlagElement',colorFlagElement);

        if (colorCardValue) {
            // document.getElementById('colorCard').style.backgroundImage = "none";
            // document.getElementById('colorCard').style.backgroundColor = colorCardValue;
            $('.colorCard').css("backgroundImage", "none");
            $('.colorCard').css("backgroundColor", colorCardValue);
        }

        if (colorFlagValue) {
            // document.getElementById('colorCard').style.backgroundImage = "none";
            // document.getElementById('bg-flag').style.backgroundColor = colorFlagValue;
            $('.flag .bg-flag').css("backgroundColor", colorFlagValue);

        }


        if (numItems >= 3 ) {
            // console.log('numItems if' , numItems);
            $('.content-arrows').show();
            $('.content-switch').addClass('carousel');
            if ($(window).width() > 768) {
                item.addClass('desk-item');
                // console.log('desk-item');

            } else {
                item.addClass('mobile-item');
                // console.log('mobile-item');
            }

            $('.card-snodo-grid__container').slick({
                arrows: false,
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                variableWidth: true,
                variableHeight: true,
                // centerMode: true,
                swipe: true,
            })

            var totalCards = $('.content-arrows').find('.totalCards');
            totalCards.html(numItems);

            $('.content-arrows').find('.arrowLeft').hide();

            $('.card-snodo-grid__container').each(function () {
                $('.card-snodo-grid__container').on('init reInit afterChange', function (
                    event,
                    slick,
                    currentSlide,
                    nextSlide,
                ) {
                    var currentSlide = $('.card-snodo-grid__container').slick('slickCurrentSlide')+1;
                    // console.log('currentSlide Prev Slider', currentSlide);
                    var currentCard = $('.content-arrows').find('.currentCard');
                    currentCard.html(currentSlide);

                    $('.content-arrows').find('.arrowLeft').show();
                    $('.content-arrows').find('.arrowRight').show();

                    if (currentSlide == 1) {
                        $('.content-arrows').find('.arrowLeft').hide();
                        $('.content-arrows').find('.arrowRight').show();
                    }
                    if (currentSlide == numItems) {
                        $('.content-arrows').find('.arrowRight').hide();
                        $('.content-arrows').find('.arrowLeft').show();
                    }

                })
            })
        }

        // card sky-bnl-hype-giftCard Plenitude
        $('.card-snodo-grid__container .item .item--content .btn1sky').on('click', function () {
            callDataLayer({
                'event': 'hub_partnership',
                'azione_utente': 'info_sky',
                'selezione': 'https://eniplenitude.com/sky'
            });
        });
        $('.card-snodo-grid__container .item .item--content .btn2bnl').on('click', function () {
            callDataLayer({
                'event': 'hub_partnership',
                'azione_utente': 'info_bnl',
                'selezione': 'https://bnl.it/it/Individui-e-Famiglie/offerte-dei-nostri-partner/bnl-con-plenitude?utm_source=partner&amp;utm_medium=banner&amp;utm_campaign=plenitude'
            });
        });
        $('.card-snodo-grid__container .item .item--content .btn3hype').on('click', function () {
            callDataLayer({
                'event': 'hub_partnership',
                'azione_utente': 'info_hype',
                'selezione': 'https://www.hype.it/wolf/'
            });
        });
        $('.card-snodo-grid__container .item .item--content .btn4plenitude').on('click', function () {
            callDataLayer({
                'event': 'hub_partnership',
                'azione_utente': 'info_Carta_Prepagata_Plenitude',
                'selezione': 'https://eniplenitude.com/gift-card'
            });
        });

        // card nescafe-esselunga-bnl
        $('.card-articoli-grid__container .item .item--content .btn1nescafe').on('click', function () {
            callDataLayer({
                'event': 'hub_partnership_loyalty',
                'azione_utente': 'info_nescafe',
                'selezione': 'SCOPRI DI PIÙ'
            });
            // all'apertura delle modali
            let tempTrack = setTimeout(trackNescafe, 500);

            function trackNescafe() {
                if ( $('#nescafeModal').hasClass("show") ){
                    callDataLayer({
                        'event': 'myEni',
                        'userId': '',
                        'userLoginState': '',
                        'userUtenzeAttive': '',
                        'siteSection1': '/offerta/casa/',
                        'siteSection2': '/offerta/casa/offerte-in-partnership',
                        'from': '/offerta/casa/offerte-in-partnership',
                        'area': 'pubblica',
                        'fornitura': 'none',
                        'pageName': 'offerte-in-partnership-nescafe',
                        'page_location':
                            'https://eniplenitude.com/offerta/casa/offerte-in-partnership/nescafe',
                    });
                }
            }
        });
        $('.card-articoli-grid__container .item .item--content .btn2esselunga').on('click', function () {
            callDataLayer({
                'event': 'hub_partnership_loyalty',
                'azione_utente': 'info_esselunga',
                'selezione': 'SCOPRI DI PIÙ'
            });
            // all'apertura delle modali
            let tempTrack = setTimeout(trackEsselunga, 500);

            function trackEsselunga() {
                if ( $('#esseModal').hasClass("show") ){
                    callDataLayer({
                        'event': 'myEni',
                        'userId': '',
                        'userLoginState': '',
                        'userUtenzeAttive': '',
                        'siteSection1': '/offerta/casa/',
                        'siteSection2': '/offerta/casa/offerte-in-partnership',
                        'from': '/offerta/casa/offerte-in-partnership',
                        'area': 'pubblica',
                        'fornitura': 'none',
                        'pageName': 'offerte-in-partnership-esselunga',
                        'page_location':
                            'https://eniplenitude.com/offerta/casa/offerte-in-partnership/esselunga',
                    });
                }
            }
        });
        $('.card-articoli-grid__container .item .item--content .btn3bnl').on('click', function () {
            callDataLayer({
                'event': 'hub_partnership_loyalty',
                'azione_utente': 'info_bnl',
                'selezione': 'SCOPRI DI PIÙ'
            });
            // all'apertura delle modali
            let tempTrack = setTimeout(trackBnl, 500);

            function trackBnl() {
                if ( $('#bnlModal').hasClass("show") ){
                    callDataLayer({
                        'event': 'myEni',
                        'userId': '',
                        'userLoginState': '',
                        'userUtenzeAttive': '',
                        'siteSection1': '/offerta/casa/',
                        'siteSection2': '/offerta/casa/offerte-in-partnership',
                        'from': '/offerta/casa/offerte-in-partnership',
                        'area': 'pubblica',
                        'fornitura': 'none',
                        'pageName': 'offerte-in-partnership-bnl',
                        'page_location':
                            'https://eniplenitude.com/offerta/casa/offerte-in-partnership/bnl',
                    });
                }
            }

        });
        // al click delle CTA delle modali nescafe-esselunga-bnl
        if ( $('#esseModal').length != 0 ){
            $('#esseModal .modal-dialog .modal-content a').on('click', function () {
                callDataLayer({
                    'event': 'hub_partnership_loyalty',
                    'azione_utente': 'info_esselunga',
                    'selezione': 'https://www.esselunga.it/cms/premi/903443.html',
                });
            });
        };
        if ( $('#nescafeModal').length != 0 ){
            $('#nescafeModal .modal-dialog .modal-content a').on('click', function () {
                callDataLayer({
                    'event': 'hub_partnership_loyalty',
                    'azione_utente': 'info_nescafe',
                    'selezione': 'https://premio.dolce-gusto.it/rexproductdetails?pageNumber=1&isAjaxRequest=true&sortOrder=DATE_ADDED&categoryCodes=SHPCAT144&productCode=PRD70222&sequenceNumber=12&pageTag=rexcategory&scroll=1078',
                });
            });
        };
        if ( $('#bnlModal').length != 0 ){
            $('#bnlModal .modal-dialog .modal-content a').on('click', function () {
                callDataLayer({
                    'event': 'hub_partnership_loyalty',
                    'azione_utente': 'info_bnl',
                    'selezione': 'https://www.xyou.store/prodotto/voucher-plenitude/',
                });
            });
        }
    }

});







$(document).ready(function() {

    if ($('[pln-component="card-snodo-grid"][pln-version="2.0"]').length != 0) {

        var item = $('[pln-component="card-snodo-grid"][pln-version="2.0"] .item');
        var numItems = item.length;

        function sliderActive() {
            $('[pln-component="card-snodo-grid"][pln-version="2.0"] .card-snodo-grid__container').slick({
                arrows: false,
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                variableWidth: true,
                variableHeight: true,
                swipe: true,
            })

            var totalCards = $('.content-arrows').find('.totalCards');
            totalCards.html(numItems);

            $('.content-arrows').find('.arrowLeft').css('visibility', 'hidden');

            $('.card-snodo-grid__container').each(function() {
                $('.card-snodo-grid__container').on('init reInit afterChange', function(
                    event,
                    slick,
                    currentSlide,
                    nextSlide,
                ) {
                    var currentSlide = $('.card-snodo-grid__container').slick('slickCurrentSlide') + 1;
                    var currentCard = $('.content-arrows').find('.currentCard');
                    currentCard.html(currentSlide);

                    $('.content-arrows').find('.arrowLeft').css('visibility', 'visible');
                    $('.content-arrows').find('.arrowRight').css('visibility', 'visible');

                    if (currentSlide == 1) {
                        $('.content-arrows').find('.arrowLeft').css('visibility', 'hidden');
                        $('.content-arrows').find('.arrowRight').css('visibility', 'visible');
                    }
                    if (currentSlide == numItems) {
                        $('.content-arrows').find('.arrowRight').css('visibility', 'hidden');
                        $('.content-arrows').find('.arrowLeft').css('visibility', 'visible');
                    }

                })
            })
        };

        if (numItems == 2 && $('.item').length == 2) {
            if ($(window).width() < 768) {
                $('.content-switch').addClass('carousel');
                sliderActive();
                $('.content-arrows').show();

            }
        }

        if (numItems == 3 && $('.item').length == 3) {
            if ($(window).width() < 768) {
                $('.content-switch').addClass('carousel');
                sliderActive();
                $('.content-arrows').show();

            }
        }

        if (numItems >= 4 && $('.item').length > 3) {
            $('.content-switch').addClass('carousel');
            sliderActive();
            $('.content-arrows').show();
            if ($(window).width() > 1024) {
                item.addClass('desk-item');

            } else {
                item.addClass('mobile-item');
            }
        }
    }

});


$(".click").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
});


$(document).ready(function() {

    if ($('[pln-component="card-snodo-grid"][pln-version="3.0"]').length != 0) {

        var item = $('[pln-component="card-snodo-grid"][pln-version="3.0"] .item');
        var numItems = item.length;

        function sliderActive() {
            $('[pln-component="card-snodo-grid"][pln-version="3.0"] .card-snodo-grid__container').slick({
                arrows: false,
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                variableWidth: true,
                variableHeight: true,

                swipe: true,
            })

            var totalCards = $('.content-arrows').find('.totalCards');
            totalCards.html(numItems);

            $('.content-arrows').find('.arrowLeft').hide();

            $('.card-snodo-grid__container').each(function() {
                $('.card-snodo-grid__container').on('init reInit afterChange', function(
                    event,
                    slick,
                    currentSlide,
                    nextSlide,
                ) {
                    var currentSlide = $('.card-snodo-grid__container').slick('slickCurrentSlide') + 1;
                    var currentCard = $('.content-arrows').find('.currentCard');
                    currentCard.html(currentSlide);

                    $('.content-arrows').find('.arrowLeft').show();
                    $('.content-arrows').find('.arrowRight').show();

                    if (currentSlide == 1) {
                        $('.content-arrows').find('.arrowLeft').hide();
                        $('.content-arrows').find('.arrowRight').show();
                    }
                    if (currentSlide == numItems) {
                        $('.content-arrows').find('.arrowRight').hide();
                        $('.content-arrows').find('.arrowLeft').show();
                    }

                })
            })
        };


        if ($(window).width() < 768) {
            $('.content-switch').addClass('carousel');
            sliderActive();
            $('.content-arrows').show();
            let button = $('.card-snodo-btn');
            button.removeClass('pln-btn-primary');
            button.addClass('pln-btn-underlined');
        }

        if ($(window).width() > 768) {
            item.addClass('desk-item');

        } else {
            item.addClass('mobile-item');
        }

    }

});



$(".click").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
});


$(document).ready(function() {

    (function ($) {
        $(function () {
            $.widget("sf.card_snodo", {
                _create: function () {
                    var item = $(this.element).find(".item-4");
                    console.log("ITEM =>", item)
                    this.numItems = item.length;


                    if (this.numItems == 2 && $(".item-4").length == 2) {
                        if ($(window).width() < 768) {
                            $(this.element).find(".content-switch").addClass("carousel");
                            console.log("ITEM =>", this.element);
                            this.sliderActive();
                            $(this.element).find(".content-arrows").show();
                        }
                    }

                    if (this.numItems == 3 && $(".item-4").length == 3) {
                        if ($(window).width() < 768) {
                            $(this.element).find(".content-switch").addClass("carousel");
                            this.sliderActive();
                            $(this.element).find(".content-arrows").show();
                        }
                    }

                    if (this.numItems >= 4 ) {
                        $(this.element).find(".content-switch").addClass("carousel");
                        this.sliderActive();
                        $(this.element).find(".content-arrows").show();
                        if ($(window).width() > 1024) {
                            item.addClass("desk-item");
                        } else {
                            item.addClass("mobile-item");
                        }
                    }
                    $(this.element).find(".arrowLeft").click(this.CardsPrev4.bind(this));
                    $(this.element).find(".arrowRight").click(this.CardsNext4.bind(this));
                },

                sliderActive: function () {
                    console.log("SLIDER ACTIVE =>", $(this.element).find(".card-snodo-grid__container-4"))
                    $(this.element).find(".card-snodo-grid__container-4").slick({
                        arrows: false,
                        dots: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        variableWidth: true,
                        variableHeight: true,
                        swipe: true,
                    });

                    var totalCards = $(this.element).find('.content-arrows').find('.totalCards-4');
                    totalCards.html(this.numItems);



                    $(".content-arrows").find(".arrowLeft").css('visibility', 'hidden');

                    $(this.element).find(".card-snodo-grid__container-4").each(function () {
                        $(".card-snodo-grid__container-4").on(
                            "afterChange",
                            function (event, slick, currentSlide, nextSlide) {
                                // var currentSlide =
                                //$(this.element).find(".card-snodo-grid__container-4").slick("slickCurrentSlide");
                                console.log(slick.slideCount);
                                this.currentCard = $(this.element).find(".content-arrows").find(".currentCard");
                                this.currentCard.html(currentSlide);




                                if (currentSlide === slick.slideCount - 1) {
                                    $(".content-arrows").find(".arrowRight").css('visibility', 'hidden');
                                }
                                else{
                                    $(".content-arrows").find(".arrowRight").css('visibility', 'visible');
                                }


                                if (currentSlide == 0) {
                                    $(".content-arrows").find(".arrowLeft").css('visibility', 'hidden');
                                } else{
                                    $(".content-arrows").find(".arrowLeft").css('visibility', 'visible');
                                }


                            }
                        );
                    });
                },

                CardsNext4: function (evt) {
                    evt.preventDefault();
                    $(this.element).find(".card-snodo-grid__container-4").slick("slickNext");
                    const currentSlide =
                        $(this.element).find(".card-snodo-grid__container-4").slick("slickCurrentSlide") + 1;
                    var currentCard = $(this.element).find(".content-arrows").find(".currentCard");
                    currentCard.html(currentSlide);


                },

                CardsPrev4: function (evt) {
                    evt.preventDefault();
                    $(this.element).find(".card-snodo-grid__container-4").slick("slickPrev");
                    const currentSlide =
                        $(this.element).find(".card-snodo-grid__container-4").slick("slickCurrentSlide") + 1;
                    var currentCard = $(this.element).find(".content-arrows").find(".currentCard");
                    currentCard.html(currentSlide);


                },
            });

            $('[pln-component="card-snodo-grid"][pln-version="4.0"]').not('[data-pln-active="true"]').attr("data-pln-active", "true").card_snodo();
        });
    })(jQuery);

});


(function ($) {
    $(function () {
        $.widget("sf.basicCarousel", {


            _create: function () {


                let target = $(this.element).find('.contentSlide');

                let config = {
                    mobileFirst:false,
                    arrows: true,
                    accessibility: true,
                    dots: true,
                    infinite: true,
                    speed: 350,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'linear',
                    variableWidth: true,
                    variableHeight: true,
                    centerMode: true,
                    swipe: true,
                    touchMove: true,
                    draggable: true,
                    responsive: [
                        {
                            breakpoint: 360,
                            settings: {
                                infinite: true,
                                arrows: true,
                                centerMode: true,
                                slidesToShow: 1,
                                touchMove: true,
                                draggable: true

                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                infinite: false,
                                speed: 300,
                                arrows: true,
                                centerMode: true,
                                slidesToShow: 1,
                                touchMove: true,
                                draggable: true,
                            }
                        },
                    ]

                }

                let _this = this;

                console.log('sf basicCarousel', config);
                this.slider = $(target).slick(config);

            },

        });

        $('[data-pln-component="basic-crop-carousel"][pln-version="1.0"]').basicCarousel();

    });
})(jQuery);
(function ($) {
    $(function () {
        $.widget("sf.basicCarousel", {


            _create: function () {


                let target = $(this.element).find('.contentSlide');

                let config = {
                    mobileFirst:false,
                    arrows: true,
                    accessibility: true,
                    dots: true,
                    infinite: true,
                    speed: 350,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'linear',
                    variableWidth: true,
                    variableHeight: true,
                    centerMode: true,
                    swipe: true,
                    touchMove: true,
                    draggable: true,
                    responsive: [
                        {
                            breakpoint: 360,
                            settings: {
                                infinite: true,
                                arrows: true,
                                centerMode: true,
                                slidesToShow: 1,
                                touchMove: true,
                                draggable: true

                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                infinite: false,
                                speed: 300,
                                arrows: true,
                                centerMode: true,
                                slidesToShow: 1,
                                touchMove: true,
                                draggable: true,
                            }
                        },
                    ]

                }

                let _this = this;

                console.log('sf basicCarousel', config);
                this.slider = $(target).slick(config);

            },

        });

        $('[data-pln-component="basic-crop-carousel"][pln-version="2.0"]').basicCarousel();

    });
})(jQuery);
$(document).ready(function () {
    if (
        $('[pln-component="ce-questionario"][pln-version="1.0"]').length != 0
    ) {

        function openModalCE (){
            var modal = document.getElementById("modalQuestionario");
            console.log("🚀 ~ file: script.js:32 ~ openModal ~ modal:", modal)
            modal.style.display = "block";
        };
        function closeModalCE (){
            var modal = document.getElementById("modalQuestionario");
            console.log("🚀 ~ file: script.js:32 ~ openModal ~ modal:", modal)
            modal.style.display = "none";
        };
    }
});

(function ($) {
    $(function () {
        $.widget("sf.chiSiamo", {
            _create: function () {
                let target = $(this.element).find(".mappa-chi-siamo-slider");
                console.log("ciao sono io", target);

                if ($(window).width() < 768) {
                    target.addClass("carousel");
                    this.sliderActive();
                }




            },

            sliderActive: function () {

                $(this.element).find(".mappa-chi-siamo-slider").slick({
                    mobileFirst: false,
                    arrows: false,
                    accessibility: true,
                    dots: true,
                    infinite: false,
                    speed: 350,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: "linear",
                    variableWidth: true,
                    variableHeight: true,
                    centerMode: true,
                    swipe: true,
                    touchMove: true,
                    draggable: true,
                });
            },
        });

        $('[pln-component="chi-siamo"][pln-version="1.0"]').chiSiamo();
    });
})(jQuery);

(function ($) {
    $(function () {

        $.widget("sf.scrollLock", {

            _create: function () {
                void 0;

                this.prefix = $(this.element).attr('scroll-lock-prefix') || 'scrollLocked';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();
                //- get first element as content ---
                this.content = $(this.element).find('> *').eq(0);

                this.content.addClass("scrollLock__content");

                this._on( $(window), {
                    resize: "init",
                    scroll: "scroll"
                });
            },

            scroll: function() {
                void 0;

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();
                this.startLock = this.stage.offset().top;
                this.endScroll = this.stage.offset().top + ( this.stageHeight - $(window).height() );
                this.outScroll = this.stage.offset().top + this.stageHeight;

                void 0;
                if ( st >= this.startLock ){

                    if ( st > this.outScroll ){
                        this.stage.removeClass(this.prefix+'--active');
                    } else {
                        this.stage.addClass(this.prefix+'--active');

                        if ( st >= this.endScroll ){
                            this.stage.removeClass(this.prefix+'--start').addClass(this.prefix+'--end');
                        } else {
                            this.stage.removeClass(this.prefix+'--end').addClass(this.prefix+'--start');
                        }
                    }

                } else {

                    this.stage.removeClass(this.prefix+'--start').removeClass(this.prefix+'--end').removeClass(this.prefix+'--active');

                }
            }

        });

        $('[scroll-lock]').scrollLock();


        //- ---


        $.widget("sf.splitSlideshow", {

            _create: function () {
                void 0;

                this.activeClass = 'splitSlideshow--active';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();
                //- get first element as content ---
                this.content = $(this.element).find('> *').eq(0);

                //- duplicate slider and switch picture position  --
                this.sliderLeft = $(this.element).find('.slider');
                this.sliderRight = $(this.sliderLeft).clone().addClass('plitSlideshow--right').insertAfter(this.sliderLeft);
                $(this.sliderLeft).addClass('plitSlideshow--left');
                $(this.sliderRight).find('picture:first-child').insertAfter( $(this.sliderRight).find('picture:last-child') )

                this._on( $(window), {
                    // resize: "init",
                    scroll: "scroll"
                });
            },

            scroll: function() {
                // console.log( 'sf.splitSlideshow scroll' );

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();
                this.start = this.stage.offset().top - $(window).height() + 10;
                this.end = this.stage.offset().top + this.stageHeight;

                // console.log( 'sf.splitSlideshow check initLock: ', st+" >= "+this.startLock );
                if ( st > this.start ){
                    if ( st >= this.end ){
                        //- belowe ---
                        this.stage.removeClass(this.activeClass);
                    } else {
                        //- active ---
                        this.stage.addClass(this.activeClass);
                    }

                } else {
                    //- abowe ---
                    this.stage.removeClass(this.activeClass);
                }
            }

        });

        $('[split-slideshow]').splitSlideshow();

        //- ---

        //- Flag prevent multiple action at the same time ---
        var lockTopFlag = false;

        $.widget("sf.lockTop", {

            _create: function () {
                void 0;

                /*if ( !sfUrl.isProd() ){
                    $('body').css( {'border': '5px solid #f00'} );
                }*/

                this.active = true;
                this.fromTop = true;     // get information abaut where you come from
                this.activeClass = 'lockTop--active';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();

                this._on( $(window), {
                    scroll: "scroll"
                });

                this.scroll();
            },

            scroll: function() {
                void 0;

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();

                //- activity Y coordinates ---
                this.start = this.stage.offset().top - $(window).height();
                this.end = this.stage.offset().top + this.stageHeight;

                //- anchor Y coordinates based on origin ---
                this.anchorTop = this.stage.offset().top;
                this.anchorBottom = this.stage.offset().top + this.stageHeight - $(window).height();

                void 0;
                if ( st >= this.start + 10 ){

                    void 0;
                    if ( st >= this.end - 10 ){
                        //- belowe ---
                        this.active = false;
                        this.fromTop = false;
                        this.stage.removeClass(this.activeClass);
                    } else {
                        //- active ---
                        if ( !this.active && !lockTopFlag ){
                            lockTopFlag = true;

                            //- disable mouse while for scrolling time ---
                            $(window).on('wheel', function(event){
                                event.preventDefault();
                            });
                            setTimeout( function(){
                                lockTopFlag = false;
                                void 0;
                                $(window).off('wheel');
                            }, 1000);

                            this.active = true;

                            let anchor = (this.fromTop) ? this.anchorTop : this.anchorBottom ;

                            this.stage.addClass(this.activeClass);
                            $('html, body').animate({
                                scrollTop: anchor
                            }, 300);
                        }
                    }

                } else {
                    //- above ---
                    this.fromTop = true;
                    this.active = false;
                    void 0;
                    this.stage.removeClass(this.activeClass);
                }
            }
        });

        $('[lock-top]').lockTop();

    });
})(jQuery);

(function ($) {
    $(function () {

        $.widget("sf.scrollLock", {

            _create: function () {
                void 0;

                this.prefix = $(this.element).attr('scroll-lock-prefix') || 'scrollLocked';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();
                //- get first element as content ---
                this.content = $(this.element).find('> *').eq(0);

                this.content.addClass("scrollLock__content");

                this._on( $(window), {
                    resize: "init",
                    scroll: "scroll"
                });
            },

            scroll: function() {
                void 0;

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();
                this.startLock = this.stage.offset().top;
                this.endScroll = this.stage.offset().top + ( this.stageHeight - $(window).height() );
                this.outScroll = this.stage.offset().top + this.stageHeight;

                void 0;
                if ( st >= this.startLock ){

                    if ( st > this.outScroll ){
                        this.stage.removeClass(this.prefix+'--active');
                    } else {
                        this.stage.addClass(this.prefix+'--active');

                        if ( st >= this.endScroll ){
                            this.stage.removeClass(this.prefix+'--start').addClass(this.prefix+'--end');
                        } else {
                            this.stage.removeClass(this.prefix+'--end').addClass(this.prefix+'--start');
                        }
                    }

                } else {

                    this.stage.removeClass(this.prefix+'--start').removeClass(this.prefix+'--end').removeClass(this.prefix+'--active');

                }
            }

        });

        $('[scroll-lock]').scrollLock();


        //- ---


        $.widget("sf.splitSlideshow", {

            _create: function () {
                void 0;

                this.activeClass = 'splitSlideshow--active';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();
                //- get first element as content ---
                this.content = $(this.element).find('> *').eq(0);

                //- duplicate slider and switch picture position  --
                this.sliderLeft = $(this.element).find('.slider');
                this.sliderRight = $(this.sliderLeft).clone().addClass('plitSlideshow--right').insertAfter(this.sliderLeft);
                $(this.sliderLeft).addClass('plitSlideshow--left');
                $(this.sliderRight).find('picture:first-child').insertAfter( $(this.sliderRight).find('picture:last-child') )

                this._on( $(window), {
                    // resize: "init",
                    scroll: "scroll"
                });
            },

            scroll: function() {
                // console.log( 'sf.splitSlideshow scroll' );

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();
                this.start = this.stage.offset().top - $(window).height() + 10;
                this.end = this.stage.offset().top + this.stageHeight;

                // console.log( 'sf.splitSlideshow check initLock: ', st+" >= "+this.startLock );
                if ( st > this.start ){
                    if ( st >= this.end ){
                        //- belowe ---
                        this.stage.removeClass(this.activeClass);
                    } else {
                        //- active ---
                        this.stage.addClass(this.activeClass);
                    }

                } else {
                    //- abowe ---
                    this.stage.removeClass(this.activeClass);
                }
            }

        });

        $('[split-slideshow]').splitSlideshow();

        //- ---

        //- Flag prevent multiple action at the same time ---
        var lockTopFlag = false;

        $.widget("sf.lockTop", {

            _create: function () {
                void 0;

                /*if ( !sfUrl.isProd() ){
                    $('body').css( {'border': '5px solid #f00'} );
                }*/

                this.active = true;
                this.fromTop = true;     // get information abaut where you come from
                this.activeClass = 'lockTop--active';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();

                this._on( $(window), {
                    scroll: "scroll"
                });

                this.scroll();
            },

            scroll: function() {
                void 0;

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();

                //- activity Y coordinates ---
                this.start = this.stage.offset().top - $(window).height();
                this.end = this.stage.offset().top + this.stageHeight;

                //- anchor Y coordinates based on origin ---
                this.anchorTop = this.stage.offset().top;
                this.anchorBottom = this.stage.offset().top + this.stageHeight - $(window).height();

                void 0;
                if ( st >= this.start + 10 ){

                    void 0;
                    if ( st >= this.end - 10 ){
                        //- belowe ---
                        this.active = false;
                        this.fromTop = false;
                        this.stage.removeClass(this.activeClass);
                    } else {
                        //- active ---
                        if ( !this.active && !lockTopFlag ){
                            lockTopFlag = true;

                            //- disable mouse while for scrolling time ---
                            $(window).on('wheel', function(event){
                                event.preventDefault();
                            });
                            setTimeout( function(){
                                lockTopFlag = false;
                                void 0;
                                $(window).off('wheel');
                            }, 1000);

                            this.active = true;

                            let anchor = (this.fromTop) ? this.anchorTop : this.anchorBottom ;

                            this.stage.addClass(this.activeClass);
                            $('html, body').animate({
                                scrollTop: anchor
                            }, 300);
                        }
                    }

                } else {
                    //- above ---
                    this.fromTop = true;
                    this.active = false;
                    void 0;
                    this.stage.removeClass(this.activeClass);
                }
            }
        });

        $('[lock-top]').lockTop();

    });
})(jQuery);

/* (function($) {
    $(function () {

        $.widget("sf.switchMode", {

            _create: function() {
                void 0;

                    this.arrowLeft = $(this.element).find('.arrows-box .arrow-left');
                    this.arrowRight = $(this.element).find('.arrows-box .arrow-right');

                    this._on( this.arrowLeft, {
                        click: "prev"
                    });

                    this._on( this.arrowRight, {
                        click: "next"
                    });

                this.init();
            },

            showHide: function(){
                this.arrowItem.hide();
                // this.arrowItem.eq(this.current).fadeIn(300);
                this.arrowItem.eq(this.current).show();

                this.item.hide();
                // this.item.eq(this.current).fadeIn(300);
                this.item.eq(this.current).show();
            },

            init: function(){
                void 0;

                this.arrowItem = $(this.element).find('.arrows-box .arrow-item');
                this.item = $(this.element).find('.items-box');
                this.max = ($(this.item).length)-1;

                void 0;
                this.current = 0;

                this.showHide();

                this.enable( this.current );
            },

            enable: function( i ){
                // console.log('ok switcMode enable');
                if ( i == 0 ){
                    this.arrowLeft.addClass('start_end_arrow');
                }else{
                    this.arrowLeft.removeClass('start_end_arrow');
                }

                if ( i == this.max ){
                    this.arrowRight.addClass('start_end_arrow');
                }else{
                    this.arrowRight.removeClass('start_end_arrow');
                }

                i--;
            },

            next: function(){
                if ( this.current < this.max ){
                    this.current++;
                    // console.log('switchMode -> next '+this.current);

                    this.showHide();

                    this.enable( this.current );
                }
                return false;
            },

            prev: function(){
                if ( this.current > 0 ){
                    this.current--;
                    // console.log('switchMode -> prev '+this.current);

                    this.showHide();

                    this.enable( this.current );
                }
                return false;
            }

        });

        $( '[sf-component="carousel-stripe"][sf-version="1.0"]' ).switchMode();

    });
})(jQuery);
 */

(function ($) {
    $(function () {

        $.widget("sf.scrollLock", {

            _create: function () {
                void 0;

                this.prefix = $(this.element).attr('scroll-lock-prefix') || 'scrollLocked';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();
                //- get first element as content ---
                this.content = $(this.element).find('> *').eq(0);

                this.content.addClass("scrollLock__content");

                this._on( $(window), {
                    resize: "init",
                    scroll: "scroll"
                });
            },

            scroll: function() {
                void 0;

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();
                this.startLock = this.stage.offset().top;
                this.endScroll = this.stage.offset().top + ( this.stageHeight - $(window).height() );
                this.outScroll = this.stage.offset().top + this.stageHeight;

                void 0;
                if ( st >= this.startLock ){

                    if ( st > this.outScroll ){
                        this.stage.removeClass(this.prefix+'--active');
                    } else {
                        this.stage.addClass(this.prefix+'--active');

                        if ( st >= this.endScroll ){
                            this.stage.removeClass(this.prefix+'--start').addClass(this.prefix+'--end');
                        } else {
                            this.stage.removeClass(this.prefix+'--end').addClass(this.prefix+'--start');
                        }
                    }

                } else {

                    this.stage.removeClass(this.prefix+'--start').removeClass(this.prefix+'--end').removeClass(this.prefix+'--active');

                }
            }

        });

        $('[scroll-lock]').scrollLock();


        //- ---


        $.widget("sf.splitSlideshow", {

            _create: function () {
                void 0;

                this.activeClass = 'splitSlideshow--active';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();
                //- get first element as content ---
                this.content = $(this.element).find('> *').eq(0);

                //- duplicate slider and switch picture position  --
                this.sliderLeft = $(this.element).find('.slider');
                this.sliderRight = $(this.sliderLeft).clone().addClass('plitSlideshow--right').insertAfter(this.sliderLeft);
                $(this.sliderLeft).addClass('plitSlideshow--left');
                $(this.sliderRight).find('picture:first-child').insertAfter( $(this.sliderRight).find('picture:last-child') )

                this._on( $(window), {
                    // resize: "init",
                    scroll: "scroll"
                });
            },

            scroll: function() {
                // console.log( 'sf.splitSlideshow scroll' );

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();
                this.start = this.stage.offset().top - $(window).height() + 10;
                this.end = this.stage.offset().top + this.stageHeight;

                // console.log( 'sf.splitSlideshow check initLock: ', st+" >= "+this.startLock );
                if ( st > this.start ){
                    if ( st >= this.end ){
                        //- belowe ---
                        this.stage.removeClass(this.activeClass);
                    } else {
                        //- active ---
                        this.stage.addClass(this.activeClass);
                    }

                } else {
                    //- abowe ---
                    this.stage.removeClass(this.activeClass);
                }
            }

        });

        $('[split-slideshow]').splitSlideshow();

        //- ---

        //- Flag prevent multiple action at the same time ---
        var lockTopFlag = false;

        $.widget("sf.lockTop", {

            _create: function () {
                void 0;

                /*if ( !sfUrl.isProd() ){
                    $('body').css( {'border': '5px solid #f00'} );
                }*/

                this.active = true;
                this.fromTop = true;     // get information abaut where you come from
                this.activeClass = 'lockTop--active';

                //-main element pointer ---
                this.stage = $(this.element);
                this.stageHeight = $(this.element).innerHeight();

                this._on( $(window), {
                    scroll: "scroll"
                });

                this.scroll();
            },

            scroll: function() {
                void 0;

                if ($(window).width() < 1024){
                    return false;
                }

                let st = $(window).scrollTop();

                //- activity Y coordinates ---
                this.start = this.stage.offset().top - $(window).height();
                this.end = this.stage.offset().top + this.stageHeight;

                //- anchor Y coordinates based on origin ---
                this.anchorTop = this.stage.offset().top;
                this.anchorBottom = this.stage.offset().top + this.stageHeight - $(window).height();

                void 0;
                if ( st >= this.start + 10 ){

                    void 0;
                    if ( st >= this.end - 10 ){
                        //- belowe ---
                        this.active = false;
                        this.fromTop = false;
                        this.stage.removeClass(this.activeClass);
                    } else {
                        //- active ---
                        if ( !this.active && !lockTopFlag ){
                            lockTopFlag = true;

                            //- disable mouse while for scrolling time ---
                            $(window).on('wheel', function(event){
                                event.preventDefault();
                            });
                            setTimeout( function(){
                                lockTopFlag = false;
                                void 0;
                                $(window).off('wheel');
                            }, 1000);

                            this.active = true;

                            let anchor = (this.fromTop) ? this.anchorTop : this.anchorBottom ;

                            this.stage.addClass(this.activeClass);
                            $('html, body').animate({
                                scrollTop: anchor
                            }, 300);
                        }
                    }

                } else {
                    //- above ---
                    this.fromTop = true;
                    this.active = false;
                    void 0;
                    this.stage.removeClass(this.activeClass);
                }
            }
        });

        $('[lock-top]').lockTop();

    });
})(jQuery);


/* (function($) {
    $(function() {

        $.widget("sf.youtube", {
            _create: function() {
                void 0;

                this.videoId = $(this.element).attr("yt-video");
                this.play = $(this.element).attr("yt-play");
                this.stop = $(this.element).attr("yt-stop");
                this.onComplete = $(this.element).attr("yt-complete");
                this.playing = false;

                //- true, false, hidden ---
                //- inizialize video status flag ---
                this.initialized = false;
                //- inizialize video now ---
                this.initialize = $(this.element).attr("yt-autoplay") === 'hidden' ? false : true;
                //- start video now ---
                this.autoplay = $(this.element).attr("yt-autoplay") === 'false' ? false : true;

                this.autohide = $(this.element).attr("yt-autohide") === 'false' ? false : true;


                //- create an ID for this element ---
                const timestamp = new Date().getTime();
                this.containerId = String('yt-' + timestamp)
                $(this.element).attr('id', this.containerId);

                if (this.play) {
                    const playBtn = $(this.play);
                    void 0;
                    this._on(playBtn, {
                        click: "playClick"
                    });
                }

                    const closeBtn = $(this.stop);
                    void 0;
                    this._on(closeBtn, {
                        click: "stopVideo"
                    });


                this._on($(window), {
                    resize: "cleanVideo",
                    scroll: "cleanVideo"
                });

                void 0;
                if (this.initialize) {
                    this.appInit();
                }
            },

            playClick: function(event) {
                void 0;

                if ($(event.currentTarget).attr('data-target')) {
                    $( $(event.currentTarget).attr('data-target') ).modal("show");
                }
                event.stopPropagation();
                event.preventDefault();
                event.stopImmediatePropagation();

                //- check if is already initied ---
                if (!this.initialized) {
                    this.appInit();
                } else {
                    this.startVideo();
                }
            },

            appInit: function() {
                void 0;

                this.initialized = true;

                let _this = this;
                this.player = new YT.Player(this.containerId, {
                    videoId: this.videoId,
                    playerVars: {
                        'autoplay': this.autoplay,
                        'playlist': this.video_id,
                        //'loop': 1,
                        'controls' : 0,
                        'mute': 0,
                        'rel' : 0,
                        'showinfo': 0,
                        'modestbranding': 1,
                        'fs' : 0,
                        'showinfo' : 0,
                        'cc_load_policy' : 0,
                        'iv_load_policy' : 3,
                        'modestbranding' : 1
                    },
                    events: {
                        'onReady': function(event) { _this.onPlayerReady(event, _this) },
                        'onStateChange':  function(event) { _this.onPlayerStateChange(event, _this) }
                    }
                });

                void 0;
            },

            onPlayerReady: function(event, _this) {
                void 0;

                if (_this.autoplay) {
                    event.target.playVideo();
                }
            },

            onPlayerStateChange: function(event, _this) {
                void 0;

                if (event.data == YT.PlayerState.PLAYING) {
                    _this.playing = true;
                }

                if (event.data == YT.PlayerState.ENDED) {
                    void 0;
                    if (!_this.initialize) {
                        void 0;
                        //- video is not inizialized on page ready, hide if completed ---
                        _this.cleanVideo()
                    }

                    if ( this.onComplete ){
                        $(this.onComplete).trigger('click');
                    }
                }
            },

            startVideo: function(e) {
                void 0;
                void 0;
                void 0;
                //- display element for hidden player ---
                $('#' + this.containerId).show();

                this.player.playVideo();
            },

            stopVideo: function() {
                void 0;
                this.playing = false;
                this.player.stopVideo();
                return true;
            },

            cleanVideo: function() {
                void 0;

                if (this.autohide && this.playing) {
                    void 0;

                    this.playing = false;
                    this.player.pauseVideo();
                    this.player.seekTo(0, true);
                    $('#' + this.containerId).hide();
                }
            }

        });

        //- ---

        var apiSrc = 'https://www.youtube.com/iframe_api';
        if ($("[yt-video]").length > 0 || $( '[sf-version="5.0"][sf-component="hero"]' ).length > 0) {
            // check if yt script exists
            let ytScript = $(document).find('script[src="' + apiSrc + '"]');
            if (ytScript.length === 0) {
                // add it
                ytScript = document.createElement("script");
                ytScript.src = apiSrc;
                const firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(ytScript, firstScriptTag);
            }
        }

        //- ---

        var i = 3;
        var int = null;

        sfYoutube = function(force) {
            void 0;
            if (!i-- || force === true) {
                clearInterval(int);
            }
            $("[yt-video]").not("[sf-active]").attr('sf-active', 'true').youtube();
        }

        window.onYouTubeIframeAPIReady = function(){
            void 0;

            if ( $( '[sf-version="5.0"][sf-component="hero"]' ).length > 0 ){
                void 0;

                if ( $( '[sf-version="5.0"][sf-component="hero"]' ).attr('sf-autoplay') != 'false' ){
                    hero5Video();
                } else {
                    $(window).on('scroll', function(){
                        SfPlayerClear();
                    });
                }
            }

            $( '[sf-version="5.0"][sf-component="hero"] .btnPlay' ).on('click', function(){
                void 0;
                hero5Video();
            });

            sfYoutube();
            int = setInterval(function() {
                sfYoutube();
            }, 1000);
        };

        //- ---

        void 0;



        void 0;

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var sfPlayer;
        function hero5Video() {
            void 0;

            $( '[sf-version="5.0"][sf-component="hero"] .btnPlay' ).hide();

            var w = $(window).width();

            switch ( $( '[sf-version="5.0"][sf-component="hero"]' ).attr('campaign') ) {
                case 'smart-conversation':
                    var video_id = 'vXLoBLR0EtQ'        // mobile
                    if ( w > 1023 ) {
                        video_id = 'xy-uxKEhsYs';       // desktop
                    } else {
                        if( w > 540 ){
                            video_id = 'P9jgEwOMBrI';   // tablet
                        }
                    }
                    break;
                case 'cappottoImprese':
                    var video_id = '7djle1UZVeo'
                    if ( w > 1023 ) {
                        video_id = 'gcimt6_jo_8';
                    } else {
                        if( w > 540 ){
                            video_id = 'OKDEf3qgvdU';
                        }
                    }
                    break;
                case 'cappotto':
                default:
                    var video_id = '7E47-YdnkCQ'
                    if ( w > 1023 ) {
                        video_id = 'iZXGx2sJuDc';
                    } else {
                        if( w > 540 ){
                            video_id = 'HkIeOk0fvLY';
                        }
                    }
                    break;
            }

            sfPlayer = new YT.Player('player', {
                videoId: video_id,
                playerVars: {
                    'autoplay': 1,
                    'playlist': video_id,
                    //'loop': 1,
                    'controls' : 0,
                    'mute': 1,
                    'rel' : 0,
                    'showinfo': 0,
                    'modestbranding': 1,
                    'fs' : 0,
                    'showinfo' : 0,
                    'cc_load_policy' : 0,
                    'iv_load_policy' : 3,
                    'modestbranding' : 1
                },
                events: {
                    'onReady': SfonPlayerReady,
                    'onStateChange': SfonPlayerStateChange
                }
            });
        }

        // 4. The API will call this function when the video player is ready.
        function SfonPlayerReady(event) {
            void 0;

            event.target.playVideo();

            // total_video_time = (player.getDuration()*1000) - restart_before;
            // setTimeout(checkvideopos, total_video_time);


        }

        function SfPlayerClear(){
            $('#player').remove();
            $( '[sf-version="5.0"][sf-component="hero"] .btnPlay' ).show().before( $('<div id="player"></div>') );
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function SfonPlayerStateChange(event) {
            void 0;

            if (event.data == YT.PlayerState.ENDED) {
                //sfPlayer.seekTo(0);
                //sfPlayer.playVideo();

                SfPlayerClear();
            }
        }

     });
})(jQuery); */
document.addEventListener("DOMContentLoaded", function () {
    var fascia = document.getElementById("fascia");
    var areaStop = document.getElementById("fascia-container");
    var linkStop = document.querySelectorAll(".link-stop");

    console.log(linkStop);

    if (areaStop) {
        areaStop.addEventListener("mouseover", function ()  {
            console.log("paused");
            fascia.style.animationPlayState = "paused";
        },{ passive: true });

        areaStop.addEventListener("mouseout", function () {
            fascia.style.animationPlayState = "running";
        },{ passive: true });

        for (let i = 0; i < linkStop.length; i++) {
            linkStop[i].addEventListener("mouseover", function () {
                linkStop[i].classList.add("link-hover");
            },{ passive: true });

            linkStop[i].addEventListener("mouseout", function () {
                linkStop[i].classList.remove("link-hover");
            },{ passive: true });
        }

        const fasciaContainer = document.getElementById("fascia-container");
        const fascia = document.getElementById("fascia");

        // Calcola la larghezza totale dei link
        const totalWidth = fascia.scrollWidth;

        // Calcola il numero di volte che i link devono essere duplicati
        const duplicates = Math.ceil(fasciaContainer.offsetWidth / totalWidth) + 1;

        // Duplica i link all'interno della fascia
        for (let i = 0; i < duplicates; i++) {
            Array.from(fascia.children).forEach((link) => {
                const clonedLink = link.cloneNode(true);
                fascia.appendChild(clonedLink);

                clonedLink.addEventListener("mouseover", function () {
                    clonedLink.classList.add("link-hover");
                });

                clonedLink.addEventListener("mouseout", function () {
                    clonedLink.classList.remove("link-hover");
                });
            });
        }
    }
});

$(document).ready(function () {
    if ( $('[pln-component="fascia-img"][pln-version="2.0"]').length != 0 ) {

        var colorBand = $('#inputColorFasciaImg');
        var colorBandValue = colorBand[0].value;
        if (colorBandValue) {
            $('[pln-component="fascia-img"][pln-version="2.0"]').css("backgroundColor", colorBandValue);
        }

        var title = document.getElementsByClassName('title');
        if(title[0].innerHTML == "") {
            title[0].remove();
        }

        var paragraph = document.getElementsByClassName('paragraph');
        if(paragraph[0].innerHTML == "") {
            paragraph[0].remove();
        }


    }
});





$(document).ready(function () {
    var data = undefined;



    var item = $('[pln-component="filtri-categoria"][pln-version="1.0"] .filtro');
    var numItems = item.length;




    function sliderActive() {

        let arrowLeft = $(".filtri-categoria-sx-arrow-left");
        let arrowRight = $(".filtri-categoria-dx-arrow-right");

        $(".filtri-container").slick({
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: "linear",
            variableWidth: true,
            variableHeight: true,
            prevArrow: arrowLeft,
            nextArrow: arrowRight,
            swipe: true,
        });



    }

    if (numItems > 4 && $(window).width() < 768) {
        $(".filtri-container").addClass("carousel");
        sliderActive();
    }





    $(".filtri-categoria-sx-arrow-left").on("click", function () {
        $(".filtri-container").slick("slickPrev");
        if (currentSlide === 1) {
            $(".filtri-categoria-sx-arrow-left").hide();
        }
    });

    $(".filtri-categoria-dx-arrow-right").on("click", function () {
        $(".filtri-container").slick("slickNext");
        var currentSlide = $(".filtri-container").slick("slickCurrentSlide") + 1;

    });



    $(function () {
        // activate first six cards
        let carte = $(".card-articolo").slice(0, 6).removeClass("hide");
        carte.each(function (index) {
            if (index % 2 === 0) {
                $(this).addClass("articolo-bg");
            } else {
                $(this).addClass("articolo-no-bg");
            }
        });
        if ($(".card-articolo").length < 6) {
            $(".load-more-btn").css("visibility", "hidden");
        } else {
            $(".load-more-btn").css("visibility", "visible");
        }
        $(".load-more-btn").on("click", function (e) {
            e.preventDefault();
            let cards =
                data == undefined
                    ? $(".card-articolo:hidden")
                    : $(".card-articolo[data-categoria='" + data + "']:hidden");
            cards.slice(0, 6).removeClass("hide");
            if (cards.length === 0) {
                $(".load-more-btn").css("visibility", "hidden");
            }
        });
    });

    $(function () {
        $(".filtro[data-categoria = 'tutti']").addClass("highlight");
        var elementsToFilter = $(".card-articolo");
        $(".counter").text(elementsToFilter.length);
        $(".filtro").click(function () {
            data = $(this).attr("data-categoria");

            $(".card-articolo").removeClass("articolo-no-bg");
            $(".card-articolo").removeClass("articolo-bg");
            $(".filtro[data-categoria = 'tutti']").removeClass("highlight");

            $(this).addClass("highlight");
            $(".filtro").not($(this)).removeClass("highlight");

            if (data == "tutti") {
                resetFiltri();
            } else {
                // filtrer cards
                elementsToFilter.addClass("hide");
                var elementsToShow = elementsToFilter.filter(
                    '.card-articolo[data-categoria="' + data + '"]'
                );
                if(elementsToShow.length === 0) {
                    $(".none-show-cards").removeClass("none-show-cards-not-show").addClass("none-show-cards-show");
                }else{
                    $(".none-show-cards").removeClass("none-show-cards-show").addClass("none-show-cards-not-show");
                }
                elementsToShow.slice(0, 6).removeClass("hide");
                alternaBG();
                $(".counter").text(elementsToShow.length);
                if (elementsToShow.length <= 6) {
                    $(".load-more-btn").css("visibility", "hidden");
                } else {
                    $(".load-more-btn").css("visibility", "visible");
                }
            }
        });
    });

    function alternaBG() {
        $(".card-articolo[data-categoria='" + data + "']").each(function (index) {
            if (index % 2 === 0) {
                $(this).addClass("articolo-bg").removeClass("articolo-no-bg");
            } else {
                $(this).addClass("articolo-no-bg").removeClass("articolo-bg");
            }
        });
    }

    function resetFiltri() {
        let elements = $(".card-articolo");
        elements.addClass("hide");
        elements.slice(0, 6).removeClass("hide");
        elements.length != 0
            ? $(".none-show-cards").removeClass("none-show-cards-show")
            : null;
        $(".counter").text(elements.length);
        elements.each(function (index) {
            if (index % 2 === 0) {
                $(this).addClass("articolo-bg");
            } else {
                $(this).addClass("articolo-no-bg");
            }
        });
        if ($(".card-articolo:hidden").length == 0) {
            $(".load-more-btn").css("visibility", "hidden");
        } else {
            $(".load-more-btn").css("visibility", "visible");
        }
    }

    // Funzione di filtro
    function filterByFormato() {
        const cardArticoli = document.querySelectorAll(".card-articolo");


        const checkboxSelezionate = document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );


        const formatiSelezionati = [];
        let cards = [];

        checkboxSelezionate.forEach((checkbox) => {
            formatiSelezionati.push(checkbox.dataset.formato);
        });


        if (formatiSelezionati.length === 0) {
            cardArticoli.forEach((cards) => {
                cards.classList.add("hide");
                cards.classList.remove("hide");
            });
        } else {

            cardArticoli.forEach((card) => {
                const formato = card.dataset.formato;

                if (formatiSelezionati.includes(formato)) {
                    card.classList.remove("hide");
                    cards.push(card);
                } else {
                    card.classList.add("hide");
                }
            });
        }
        $(".counter").text(cards.length);
    }

    $(function () {
        $(".applica-filtri").click(function () {
            filterByFormato();
            $(".container-dropdown").addClass("drop-not-show");
        })
    });



    function resetDrop() {
        document.getElementById("podcast").checked = false;
        document.getElementById("video").checked = false;
        document.getElementById("articolo").checked = false;
        document.getElementById("foto-gallery").checked = false;
        document.getElementById("24-ore").checked = false;
        document.getElementById("mese-corrente").checked = false;
        document.getElementById("6-mesi").checked = false;
        document.getElementById("12-mesi").checked = false;

        const cardArticoli = document.querySelectorAll(".card-articolo");

        cardArticoli.forEach((card) => {
            card.classList.add("hide");
        });
        $(".card-articolo").slice(0, 6).removeClass("hide");


        if ($(".card-articolo").length === 0) {
            $(".load-more-btn").css("visibility", "hidden");
        }

        $(".counter").text(cardArticoli.length);
    }

    $(function () {
        $(".reset").click(function () {
            resetDrop();
            $(".container-dropdown").addClass("drop-not-show");
        })
    });


// filtro per data
    function filterByDate() {

        var filtroSelezionato = document.querySelector('input[type="radio"]:checked');
        var cardArticolo = document.querySelectorAll('.card-articolo');

        cardArticolo.forEach(function(card) {
            var dataFiltroSelezionato = filtroSelezionato.value;
            var oggi = new Date();

            if (filtroSelezionato) {
                var dataArticolo = new Date(cardArticolo.dataset.ordine);
                var diffGiorniMS = Math.abs(oggi - dataArticolo);
                var differenzaInGiorni = Math.ceil(diffGiorniMS / (1000 * 60 * 60 * 24));



                card.classList.add("hide")

                if (dataFiltroSelezionato === "ultime-24-ore" && differenzaInGiorni <= 1) {
                    card.classList.remove("hide");
                } else if (dataFiltroSelezionato === "mese-corrente" && differenzaInGiorni <= 30) {
                    card.classList.remove("hide");
                } else if (dataFiltroSelezionato === "ultimi-6-mesi" &&  differenzaInGiorni <= 180) {
                    card.classList.remove("hide");
                } else if (dataFiltroSelezionato === "ultimi-12-mesi" && differenzaInGiorni <= 365) {
                    card.classList.remove("hide");
                } else{
                    card.classList.add("hide");
                }
            }
        });
    };

    $(function () {
        $(".applica-filtri").click(function () {
            filterByDate();
            $(".container-dropdown").addClass("drop-not-show");
        })
    });



    $(function () {
        $(".my-btn").click(function () {
            $(".container-dropdown").removeClass("drop-not-show");
        })
    });

    $(function () {
        $(".row-title").click(function () {
            $(".container-dropdown").addClass("drop-not-show");
        })
    });


//funzione ordinamento per data
    $(function () {
        var ordineCrescente = true;
        $(".btn-ordinamento").click(function () {
            var items = $('.card-articolo').remove();
            $('.articoli-container').html("");
            items.sort(function(a, b) {
                var dateA = new Date($(a).data('ordine'));
                var dateB = new Date($(b).data('ordine'));
                if (ordineCrescente) {
                    return dateA.getTime() - dateB.getTime();
                } else {
                    return dateB.getTime() - dateA.getTime();
                }
            });
            $('.articoli-container').append(items);
            items.removeClass("articolo-bg");
            items.removeClass("articolo-no-bg");
            items.each(function (index) {
                if (index % 2 === 0) {
                    $(this).addClass("articolo-bg");
                } else {
                    $(this).addClass("articolo-no-bg");
                }
            });
            ordineCrescente = !ordineCrescente;
        })
    });

    $(function () {
        $(".btn-ordinamento").click(function () {
            $(".ordina-arrow").toggleClass("rotate-ordina");
        })
    });

    $(".card-articolo").click(function(){
        window.location=$(this).find("a").attr("href");
        return false;
    });

});

$(document).ready(function () {

    if ( $('[pln-component="graphic-chart"][pln-version="1.0"]').length != 0 ) {
        var months = $(".months");
        var dataMonths = [];
        var graph1Values = $(".graph1Values");
        var dataGraph1 = [];
        var graph2Values = $(".graph2Values");
        var dataGraph2 = [];
        var label1 = $('.label1');
        var label2 = $('.label2');

        var monthsMob = $(".monthsMob");
        var dataMonthsMob = [];
        var graph1ValuesMob = $(".graph1ValuesMob");
        var dataGraph1Mob = [];
        var label1Mob = $('.label1Mob');
        var graph2ValuesMob = $(".graph2ValuesMob");
        var dataGraph2Mob = [];
        var label2Mob = $('.label2Mob');
        console.log('graph2ValuesMob',graph2ValuesMob);


        for (let i = 0; i < 12; i++) {
            dataGraph1[i] = graph1Values[i].value;
            dataGraph2[i] = graph2Values[i].value;
            dataMonths[i] = months[i].value;
            label1[i].innerHTML = graph1Values[i].value;
            label2[i].innerHTML = graph2Values[i].value;
        }

        for (let j = 0; j < 6; j++) {
            dataGraph1Mob[j] = graph1ValuesMob[j].value;
            dataGraph2Mob[j] = graph2ValuesMob[j].value;
            dataMonthsMob[j] = monthsMob[j].value;
            label1Mob[j].innerHTML = graph1ValuesMob[j].value;
            label2Mob[j].innerHTML = graph2ValuesMob[j].value;
        }


        console.log('valori mesi MOB', dataMonthsMob);
        console.log('valori grafico 1 MOB', dataGraph1Mob);
        // console.log('valori grafico 2', dataGraph2);

        const ctx1 = document.getElementById('GraphicChart1');
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: dataMonths,
                datasets: [{
                    label: '',
                    data: dataGraph1,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#009e62'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/kWh'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#009e62',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

        const ctx1Mob = document.getElementById('GraphicChart1Mob');
        new Chart(ctx1Mob, {
            type: 'line',
            data: {
                labels: dataMonthsMob,
                datasets: [{
                    label: '',
                    data: dataGraph1Mob,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#009e62'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/kWh'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#009e62',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

        const ctx2 = document.getElementById('GraphicChart2');
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: dataMonths,
                datasets: [{
                    label: '',
                    data: dataGraph2,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#ffcd00'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/Scm'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#ffcd00',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

        const ctx2Mob = document.getElementById('GraphicChart2Mob');
        new Chart(ctx2Mob, {
            type: 'line',
            data: {
                labels: dataMonthsMob,
                datasets: [{
                    label: '',
                    data: dataGraph2Mob,
                    borderWidth: 5,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: '#ffcd00'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '€/kWh'
                        }
                    }
                },
                elements: {
                    line: {
                        borderColor: '#ffcd00',
                        borderWidth: 7,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });

    }
});
$(document).ready(function () {
    let impianti = Array.from(document.getElementsByClassName("item-impianti"));

    var item = $('[pln-component="grid-impianti"][pln-version="1.0"] .filtro-grid-impianti');
    var numItems = item.length;

    function sliderActive() {
        let arrowLeft = $(".grid-impianti-sx-arrow-left");
        let arrowRight = $(".grid-impianti-dx-arrow-right");

        $(".filtri-container-grid-impianti").slick({
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: "linear",
            variableWidth: true,
            variableHeight: true,
            prevArrow: arrowLeft,
            nextArrow: arrowRight,
            swipe: true,
        });
    }

    if (numItems >= 4 && $(window).width() < 768) {
        $(".filtri-container-grid-impianti").addClass("carousel");
        sliderActive();
    }

    $(".grid-impianti-sx-arrow-left").on("click", function () {
        $(".filtri-container-grid-impianti").slick("slickPrev");
        if (currentSlide === 0) {
            $(".grid-impianti-sx-arrow-left").hide();
        }
    });

    $(".grid-impianti-dx-arrow-right").on("click", function () {
        $(".filtri-container-grid-impianti").slick("slickNext");
        if (currentSlide === numItems) {
            $(".grid-impianti-dx-arrow-right").hide();
        }
    })

    if (impianti.length) {
        $(function () {
            $(".filtro-grid-impianti[data-categoria = 'tutti']").addClass("highlight");
            var elementsToFilter = $(".item-impianti");
            $(".filtro-grid-impianti").click(function () {
                data = $(this).attr("data-categoria");

                $(".filtro-grid-impianti[data-categoria = 'tutti']").removeClass("highlight");

                $(this).addClass("highlight");
                $(".filtro-grid-impianti").not($(this)).removeClass("highlight");

                if (data == "tutti") {
                    $(".pagination").html("");
                    paginazione(impianti);
                } else {
                    $(".pagination").html("");

                    // filtrer cards
                    elementsToFilter.hide();
                    var elementsToShow = elementsToFilter.filter(
                        '.item-impianti[data-categoria="' + data + '"]'
                    );
                    elementsToShow.show();
                    paginazione(Array.from(elementsToShow));
                }
            });
        });

        paginazione(impianti);
    }
});
/*
$(function () {
  $("#switch-id").change(function () {
      if ($(this).is(":checked")) {
          $(".listing").show();
          $(".mappa").hide();
      } else {
          $(".listing").hide();
          $(".mappa").show();
      }
  });
});*/

function myFunction() {
    var radioL = document.getElementById("switch_left");
    var radioR = document.getElementById("switch_right");
    var mappa = document.getElementById("mappa");
    var listing = document.getElementById("listing");
    if (radioL.checked == true) {
        mappa.style.display = "block";
    } else {
        mappa.style.display = "none";
    }
    if (radioR.checked == true) {
        listing.style.display = "block";
    } else {
        listing.style.display = "none";
    }
}

// click su vedi tutto

function paginazione(impianti) {
    const itemsPerPage = 12;
    // paginazione
    impianti.forEach(function (item) {
        item.style.display = "none";
    });

    for (let i = 0; i < itemsPerPage; i++) {
        if (impianti[i].style !== undefined) {
            impianti[i].style.display = "block";
        }
    }

    // Dividi l'array in pagine
    const pages = [];
    for (let i = 0; i < impianti.length; i += itemsPerPage) {
        pages.push(impianti.slice(i, i + itemsPerPage));
    }
    // Seleziona il div in cui verranno inseriti i pulsanti della paginazione
    const pagination = document.querySelector("#pagination");

    // Crea un pulsante per andare alla pagina precedente
    const prevButton = document.createElement("button");
    prevButton.innerHTML =
        '<img src="/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/svg-icons/chevron-left-solid.svg" class="impianti-arrow"/>';
    pagination.appendChild(prevButton);

    // Aggiungi un gestore di eventi per andare alla pagina precedente quando il pulsante viene cliccato
    prevButton.addEventListener("click", function () {
        showPage(currentPage - 1);
    });

    // Crea un pulsante per andare alla pagina successiva
    const nextButton = document.createElement("button");
    nextButton.innerHTML =
        '<img src="/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/svg-icons/chevron-right-solid.svg" class="impianti-arrow" />';

    // Aggiungi un gestore di eventi per andare alla pagina successiva quando il pulsante viene cliccato
    nextButton.addEventListener("click", function () {
        showPage(currentPage + 1);
    });

    // Crea un pulsante per ogni pagina
    let buttons = [];
    const numButtons = Math.min(3, pages.length);

    console.log(numButtons);

    for (let i = 0; i < numButtons; i++) {
        const button = document.createElement("button");
        buttons.push(button);
        button.textContent = i + 1;
        pagination.appendChild(button);

        // Aggiungi un gestore di eventi per mostrare la pagina corrispondente quando il pulsante viene cliccato
        button.addEventListener("click", function () {
            showPage(i);
        });
    }

    if (pages.length <= 3) {
        // Aggiungi i pulsanti delle pagine rimanenti
        for (let i = numButtons; i < pages.length; i++) {
            const button = document.createElement("button");
            buttons.push(button);
            button.textContent = i + 1;
            pagination.appendChild(button);

            // Aggiungi un gestore di eventi per mostrare la pagina corrispondente quando il pulsante viene cliccato
            button.addEventListener("click", function () {
                showPage(i);
            });
        }
    }

    if (pages.length > 4) {
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        pagination.appendChild(ellipsis);
    }

    // Aggiungi il pulsante per l'ultima pagina se ci sono più di quattro pagine
    if (pages.length > 4) {
        const lastButton = document.createElement("button");
        lastButton.textContent = pages.length;
        pagination.appendChild(lastButton);

        // Aggiungi un gestore di eventi per mostrare l'ultima pagina quando il pulsante viene cliccato
        lastButton.addEventListener("click", function () {
            showPage(pages.length - 1);
        });
    }

    // Funzione per mostrare la pagina corrispondente
    let currentPage = 0;

    function showPage(pageIndex) {
        // Imposta la pagina corrente
        currentPage = Math.max(0, Math.min(pageIndex, pages.length - 1));

        // Seleziona gli elementi che devono essere mostrati
        const itemsToShow = pages[currentPage];

        // Nascondi tutti gli elementi
        impianti.forEach(function (item) {
            item.style.display = "none";
        });

        // Mostra gli elementi corrispondenti alla pagina
        itemsToShow.forEach(function (item) {
            item.style.display = "block";
        });

        // Disabilita il pulsante per andare alla pagina precedente se si è sulla prima pagina

        if (currentPage === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }

        // Disabilita il pulsante per andare alla pagina successiva se si è sull'ultima pagina

        if (currentPage === pages.length - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }

        buttons.forEach((button) => {
            button.classList.remove("bordered");
        });
        buttons[pageIndex].classList.add("bordered");
    }

    pagination.appendChild(nextButton);

    // Mostra la prima pagina
    showPage(0);
}

/* (function($) {
    $(function () {

        $.widget("sf.switchMode", {

            _create: function() {
                console.log('sf.switchMode');

                    this.arrowLeft = $(this.element).find('.arrows-box .arrow-left');
                    this.arrowRight = $(this.element).find('.arrows-box .arrow-right');

                    this._on( this.arrowLeft, {
                        click: "prev"
                    });

                    this._on( this.arrowRight, {
                        click: "next"
                    });

                this.init();
            },

            showHide: function(){
                this.arrowItem.hide();
                this.arrowItem.eq(this.current).fadeIn(300);

                this.item.hide();
                this.item.eq(this.current).fadeIn(300);
            },

            init: function(){
                console.log('sf.switchMode init');

                this.arrowItem = $(this.element).find('.arrows-box .arrow-item');
                this.item = $(this.element).find('.items-box');
                this.max = ($(this.item).length)-1;

                console.log(this.max);
                this.current = 0;

                this.showHide();

                this.enable( this.current );
            },

            enable: function( i ){
                // console.log('ok switcMode enable');
                if ( i == 0 ){
                    this.arrowLeft.addClass('start_end_arrow');
                }else{
                    this.arrowLeft.removeClass('start_end_arrow');
                }

                if ( i == this.max ){
                    this.arrowRight.addClass('start_end_arrow');
                }else{
                    this.arrowRight.removeClass('start_end_arrow');
                }

                i--;
            },

            next: function(){
                if ( this.current < this.max ){
                    this.current++;
                    // console.log('switchMode -> next '+this.current);

                    this.showHide();

                    this.enable( this.current );
                }
                return false;
            },

            prev: function(){
                if ( this.current > 0 ){
                    this.current--;
                    // console.log('switchMode -> prev '+this.current);

                    this.showHide();

                    this.enable( this.current );
                }
                return false;
            }

        });

        $( '[sf-component="carousel-stripe"][sf-version="1.0"]' ).switchMode();

    });
})(jQuery);
 */
function clearMegaDropDown() {
    $('.headerTabsContent ul li a').removeClass('active');
    $('.headerTabsContent ul li a').removeClass('landed');
    $('.megadropdown .content').removeClass('collapse');
    $(".sticky-promo").show();
    $("#Sticky-Commodity").removeClass("hide-box");
}


function megaDropDown() {

    var opened = null;

    $('.headerTabsContent ul li a').on("click", function () {
        let t = $(this).attr('data-id');
        clearMegaDropDown();

        if (opened != t) {
            $('[data-id="' + t + '"]').addClass('active');
            $('[data-id="' + t + '_content"]').addClass('collapse');
            opened = t;
            $(".sticky-promo").hide();
            $("#Sticky-Commodity").addClass("hide-box");
        } else {
            opened = null;
            $(".sticky-promo").show();
            $("#Sticky-Commodity").removeClass("hide-box");
        }

        strike();
    });

    $(".header-wrapper").on("mouseleave", function () {
        clearMegaDropDown();
        opened = null;
        $(".sticky-promo").show();
        $("#Sticky-Commodity").removeClass("hide-box");
    });
}

function showHeaderStickyFull(stickyfull) {
    if (stickyfull) {
        $(".header-wrapper").addClass("stickyfull");
    } else {
        $(".header-wrapper").removeClass("stickyfull");
    }
}

function setHeaderSticky(scrollPos) {

    let divToStick;

    if (window.innerWidth < 1024) {
        divToStick = "header-wrapper-mobile";
    } else {
        divToStick = "header-wrapper";

        /* il menu completo riappare con l'hover del mouse
        /*
        $('.' + divToStick).on({
            mouseenter: function() {
                showHeaderStickyFull(true);
            },
            mouseleave: function() {
                showHeaderStickyFull(false);
            }
        })
        */
    }


    if (window.scrollY > 0) {
        $("." + divToStick).addClass("sticky");
    } else {
        $("." + divToStick).removeClass("sticky");
    }

    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        showHeaderStickyFull(true);
    } else {
        showHeaderStickyFull(false);
    }

    return scrollPos = (document.body.getBoundingClientRect()).top;
}


function headerSticky() {
    var scrollPos = 0;

    window.addEventListener('scroll', function () {
        scrollPos = setHeaderSticky(scrollPos);
    });
}


function headerMobile() {

    var sublevelOpened = null;

    $('.header-wrapper-mobile ul li a.togglemenu').click(function () {

        $(".header-wrapper-mobile").removeClass("sticky");

        if ($(".header-wrapper-mobile").hasClass("open")) {

            if (sublevelOpened != null) {

                $('[data-id="' + sublevelOpened + '"] .sublevel_title a').trigger("click");
            }

            $(".header-wrapper-mobile").removeClass("open");
            $("body").removeClass("block-body");
            setHeaderSticky();

        } else {
            $(".header-wrapper-mobile").addClass("open");
            $("body").addClass("block-body");
        }
    });

    $('.header-wrapper-mobile .items ul.macroarea li a.slidein').click(function () {

        event.preventDefault();

        let t = $(this).attr('data-id');

        $('[data-id="' + t + '_content"]').show(
            "slide",
            {
                direction: "right"
            },

            function () {
                $(".macroarea").hide();
                $(".servicearea").hide();

                $('[data-id="' + t + '_content"]').css({ "position": "static" });
            },
            400);

        sublevelOpened = t + '_content';
    });

    $('.header-wrapper-mobile .sublevel_title a.slideout').click(function () {

        event.preventDefault();

        let t = $(this).parent().parent().parent().attr('data-id');

        $(".macroarea").show();
        $(".servicearea").show();
        $('[data-id="' + t + '"]').css({ "position": "" });

        $('[data-id="' + t + '"]').hide(
            "slide",
            {
                direction: "right"
            },
            function () {
                // after animation
            },
            400);

        sublevelOpened = null;
    });
}


function focusableMapping(submenu) {

    jQuery.extend(jQuery.expr[':'], {
        focusable: function (el) {
            return $(el).is('[tabindex]');
        }
    });

    let focusable_list = [];
    focusable_list = $('[data-id="' + submenu).find(':focusable');

    return focusable_list;
}


function strike() {

    /*
    var level = 0;
    var submenu = "";
    var focusable = [];
    var i = 0;
    */

    /* FUNZIONA SOLO CON NVDA SCREENREADER ATTIVATO */
    let focused = $(':focus');

    level = focused.attr('data-level');

    //console.log("focused: ", focused);
    //console.log("level: ", level);

    if (level == 1) {
        i = 0;
        submenu = focused.attr('data-id');

        //console.log("entra in " + submenu + "_content");
        $('[data-first-element="' + submenu + '_first"]').trigger("focus");

        focusable = focusableMapping(submenu + "_content");

        //console.log(focusable);
    }

    if (level == 2) {
        if (focused.hasClass("card") || focused.hasClass("imgbox")) {
            focused.find(a).trigger("click");
        }
    }

}


$(document).ready(function () {

    /* INIT */
    var level = 0;
    var submenu = "";
    var focusable = [];
    var i = 0;
    let tabindex;

    if ($(".header-wrapper")) {
        megaDropDown();

        if ($(".headerTabsContent").hasClass("no-cta")) {
            $(".logowrapper").addClass("no-cta");
        } else { }
    }

    if ($(".header-wrapper-mobile")) {
        headerMobile();
    }

    setHeaderSticky();
    headerSticky();

    if (window.innerWidth > 1023) {
        // posizionamento del componente sticky-promo, sotto l'header/menu solo per risoluzione desktop
        if ($(".sticky-promo"))  {
            $( ".header-wrapper" ).append($(".sticky-promo.componentbase"));
        }

        // posizionamento del componente #Sticky-Commodity, sotto l'header/menu solo per risoluzione desktop
        if ($("#Sticky-Commodity"))  {
            $( ".header-wrapper" ).append($("#Sticky-Commodity"));
            $("#Sticky-Commodity").css("position", "relative");
        }
    }

});



(function ($) {
    $(function () {

        $.widget("sf.accessibility", {

            _create: function () {

                //console.log("create | accessibility con widget");
                level = 0;

                $('[pln-component="header"][pln-version="1.0"]').on("keydown", function (e) {

                    let key = e.key;
                    let focused = $(':focus');
                    //console.log(key);


                    switch (key) {

                        /* FUNZIONA SOLO CON NVDA SCREENREADER DISATTIVATO */
                        case "Enter":
                        case " ":
                            event.preventDefault();
                            level = focused.attr('data-level');
                            focused.trigger("click");

                            //console.log("dopo il click");

                            if (level == 1) {
                                i = 0;
                                submenu = focused.attr('data-id');

                                //console.log("entra in " + submenu + "_content");
                                $('[data-first-element="' + submenu + '_first"]').trigger("focus");

                                focusable = focusableMapping(submenu + "_content");

                                //console.log("focusable: ", focusable);
                            }

                            if (level == 2) {
                                if (focused.hasClass("card") || focused.hasClass("imgbox")) {
                                    focused.find(a).trigger("click");
                                }
                            }
                            break;


                        case "Tab":
                            if (level == 1) {

                                event.preventDefault();

                                if (event.shiftKey && event.code === 'Tab') {
                                    //console.log("tab + shift");

                                    if (i > 0) {
                                        i--;
                                    } else {
                                        i = focusable.length - 1;
                                    }

                                } else {

                                    if (i < focusable.length - 1) {
                                        i++;
                                    } else {
                                        i = 0;
                                    }
                                }

                                tabindex = focusable[i].attributes.tabindex.value;
                                //console.log(i, tabindex, focusable.length);

                                $('[tabindex=' + tabindex + ']').trigger("focus");

                            }
                            break;


                        case "Escape":
                            //console.log("hai premuto ESC");
                            if (level == 1) {
                                //console.log("sei dentro al livello: " + level);
                                //console.log("sei nel sottomenu: " + submenu);

                                clearMegaDropDown();
                                $('[data-id="' + submenu).trigger("focus");
                                level = 0;
                                submenu = "";
                            } else {
                                //console.log("sei al livello: " + level);
                            }

                            break;
                        default:
                            // do nothing
                            break;
                    }


                });

            },


        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="header"][pln-version="1.0"]').accessibility();
        }, 1000);

    });
})(jQuery);

var previousButton, nextButton;
var rotationButton, pauseContainer, resumeContainer;
var slidesContainer, slides;
var dots;

window.addEventListener('DOMContentLoaded', function(e) {
    previousButton = document.querySelector('.carousel .previous-button');
    nextButton = document.querySelector('.carousel .next-button');

    rotationButton = document.querySelector('.carousel .rotation-button');
    pauseContainer = document.querySelector('.carousel .rotation-button .pause-container');
    resumeContainer = document.querySelector('.carousel .rotation-button .resume-container');

    slidesContainer = document.querySelector('.carousel .slides');
    slides = document.querySelectorAll('.carousel .slides .slide');

    /**
     When Slick Slider loads, set up the slide dots correctly.
     */
    $('.carousel .slides').on('init', function(e, slick) {
        // Ensure all the non-visible slides and their content are impossible to reach by keyboard
        hideNonVisibleSlides();

        // Retreive references to all the slide dot DOM elements
        dots = document.querySelectorAll('.carousel li button');

        // Give the first slide dot `aria-current="true"` on load
        dots[0].setAttribute('aria-current', true);

        dots.forEach(function(dot, index) {
            // Indicate the action the button will invoke to make it clear that these are controls, not slides themselves
            dot.innerText = 'Vai alla slide ' + (index + 1);

            // Disable autoplay as soon as a user activates a slide dot
            dot.addEventListener('click', function(e) {
                disableAutoplay();
            });
        });
    });

    /**
     Before each slide transition, make each slide visible and update the current slide dot
     */
    $('.carousel .slides').on('beforeChange', function(e, slick, currentSlide, nextSlide) {

        // Make each slide visible during the transition animation
        slides.forEach(function(slide) {
            slide.classList.remove('is-hidden');
        });

        // Move the active dot indicator before animation for a "snappier" feel
        dots.forEach(function(dot) {
            dot.removeAttribute('aria-current');
        });

        // Indicate which slide is active through the slide dots
        dots[nextSlide].setAttribute('aria-current', true);
    });

    /**
     After each slide transition, hide all newly-non-visible slides and make focusable content in the new "current" slide reachable
     */
    $('.carousel .slides').on('afterChange', function(e, slick, currentSlide) {
        // Ensure newly non-visible slides are fully hidden from all users
        hideNonVisibleSlides();

        // Allow interactive elements on the new current slide to receive keyboard focus
        slides[currentSlide].querySelectorAll('a, button').forEach(function(element) {
            element.removeAttribute('tabindex');
        });
    });

    /**
     Initialize Slick Slider with recommended configuration options
     */
    $('.carousel .slides').slick({
        // The default dots markup is pretty good, though we will need to tweak them in the `init` and `afterChange` event handlers.
        dots: true,
        appendDots: $('.hero-home-slider-dots'),

        // This removes the inappropriate tabpanel and tab roles and disables arrow key navigation.
        // NOTE: if you want to use arrow key navigation, you should implement that separately without enabling this option. The usability benefits of key navigation don't outweigh the accessibility impact of the tab implementation.
        accessibility: false,

        // Many hero banners auto-rotate, so this demo will too.
        autoplay: true,
        autoplaySpeed: 7000,

        // Use highly-accessible custom elements from the DOM for prev/next buttons.
        // NOTE: You can also define the elements here as strings, if you prefer
        prevArrow: document.querySelector('.carousel .previous-button'),
        nextArrow: document.querySelector('.carousel .next-button')
    });

    // Disable autoplay as soon as the user activates either the Previous or Next button
    if (previousButton) {
        previousButton.addEventListener('click', function(e) {
            disableAutoplay();
        });
    }

    if ( nextButton ){
        nextButton.addEventListener('click', function(e) {
            TransitionRunning = true;
            disableAutoplay();
        });
    }

    if ( rotationButton ){
        // Toggle autoplay when the pause/resume button is activated
        rotationButton.addEventListener('click', function(e) {
            toggleAutoplay();
        });
    }
});


/**
 Fully hide non-visible slides for all users when they exit the view.
 */
function hideNonVisibleSlides() {
    var hiddenSlides = document.querySelectorAll('.carousel .slides .slide[aria-hidden="true"]');

    hiddenSlides.forEach(function(slide) {
        // Hide each slide using `visibility: hidden` to be extra-sure
        slide.classList.add('is-hidden');

        // Prevent any interactive element on non-visible slides from receiving keyboard focus
        slide.querySelectorAll('a, button').forEach(function(element) {
            element.setAttribute('tabindex', -1);
        });
    });
}


/**
 Disable or enable built-in Slick Slider autoplay
 */
function toggleAutoplay() {
    var autoplayEnabled = $('.carousel .slides').slick('slickGetOption', 'autoplay');

    if (autoplayEnabled) {
        disableAutoplay();
    } else {
        enableAutoplay();
    }
}

function disableAutoplay() {
    // Disable autoplay and stop Slick from rotating
    $('.carousel .slides').slick('slickSetOption', 'autoplay', false);
    $('.carousel .slides').slick('slickPause');

    // Switch the rotation button icon to "resume"
    pauseContainer.classList.remove('is-visible');
    resumeContainer.classList.add('is-visible');
}

function enableAutoplay() {
    // Enable autoplay and get rotation started again
    $('.carousel .slides').slick('slickSetOption', 'autoplay', true);
    $('.carousel .slides').slick('slickPlay');

    // Switch the rotation button icon to "pause"
    pauseContainer.classList.add('is-visible');
    resumeContainer.classList.remove('is-visible');
}
(function ($) {
    $(function () {

        $.widget("sf.heroHomepage2", {

            _create: function() {
                /*---- Splice Per Istanziare lo slider ----*/

                var splide = new Splide('.splide',
                    {
                        /*arrows :'true' ,
                        type    : 'loop',
                        perPage : 1,
                        autoplay: true,
                        cover: false,
                */
                        //make the splide continous
                        releaseWheel: true,
                        type: 'fade',
                        rewind: true,

                        //add custom classes to pagination and buttons
                        classes: {
                            pagination: 'splide__pagination  HP-slider__pagination__container', // container
                            page: 'splide__pagination__page HP-slider__pagination__button', // each button
                        },

                        //remove pagination from mobile and tablet
                        /*breakpoints: {
                            1023: {
                                pagination: boolean = false,
                            }
                        },*/

                        i18n: {
                            prev: 'Slide Precedente',
                            next: 'Slide Successiva',
                            first: 'Vai alla prima slide',
                            last: 'Vai al ultima Slide',

                        },

                        /*            //add custom class for next arrow to align it when bp > 1920px
                                    mediaQuery: 'min',
                                    breakpoints: {
                                        1920: {
                                            classes: {
                                                prev  : 'splide__arrow--prev HP-splide-prev-arrow',
                                                next: 'splide__arrow--next HP-splide-next-arrow',
                                            }
                                        }
                                    }*/

                    });

                splide.on('mounted', function () {
                    //makes the next slide img and text go on the next slide on click
                    var nextSlideImages = document.querySelectorAll('.HP-next-slide-image, .HP-text-on-next-slide-image');
                    nextSlideImages.forEach(nextSlideImages => {
                        nextSlideImages.addEventListener('click', function () {
                            splide.go('>');
                        });
                    });

                    //removes arrows and pagination if there's only one slide
                    if (splide.length === 1) {
                        splide.options = {
                            pagination: false,
                            arrows: false,
                        };
                    }

                    // align next arrow with image, first arrow with content
                    /*  $('.HP-splide-next-arrow')[0].style.right = window.getComputedStyle($('.egl-herohomepage-basic')[0]).marginRight;
                      $('.HP-splide-prev-arrow')[0].style.left = window.getComputedStyle($('.egl-herohomepage-basic')[0]).marginLeft;*/

                });

                splide.mount();

            }

        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="herohome"][pln-version="2.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').heroHomepage2();
        }, 1000);
    });
})(jQuery);

(function ($) {
    $(function () {
        $.widget("sf.youtube", {
            _create: function () {
                void 0;

                this.videoId = $(this.element).attr("yt-video");
                this.play = $(this.element).attr("yt-play");
                this.stop = $(this.element).attr("yt-stop");
                this.onComplete = $(this.element).attr("yt-complete");
                this.setVideo = $(this.element).attr("set-video");
                this.playing = false;

                //- true, false, hidden ---
                //- inizialize video status flag ---
                this.initialized = false;
                //- inizialize video now ---
                this.initialize =
                    $(this.element).attr("yt-autoplay") === "hidden" ? false : true;
                //- start video now ---
                this.autoplay =
                    $(this.element).attr("yt-autoplay") === "false" ? false : true;

                this.autohide =
                    $(this.element).attr("yt-autohide") === "false" ? false : true;

                //- create an ID for this element ---
                const timestamp = new Date().getTime();
                this.containerId = String("yt-" + timestamp);
                $(this.element).attr("id", this.containerId);

                if (this.play) {
                    const playBtn = $(this.play);
                    void 0;
                    this._on(playBtn, {
                        click: "playClick",
                    });
                }

                const closeBtn = $(this.stop);
                void 0;
                this._on(closeBtn, {
                    click: "stopVideo",
                });

                this._on($(window), {
                    resize: "cleanVideo",
                    scroll: "cleanVideo",
                });

                void 0;
                if (this.initialize) {
                    this.appInit();
                }
            },

            playClick: function (event) {
                void 0;

                if ($(event.currentTarget).attr("data-target")) {
                    $($(event.currentTarget).attr("data-target")).modal("show");
                }
                event.stopPropagation();
                event.preventDefault();
                event.stopImmediatePropagation();

                //- check if is already initied ---
                if (!this.initialized) {
                    this.appInit();
                } else {
                    this.startVideo();
                }
            },

            appInit: function () {
                void 0;

                this.initialized = true;

                let _this = this;
                this.player = new YT.Player(this.containerId, {
                    videoId: this.videoId,
                    playerVars: {
                        autoplay: this.autoplay,
                        playlist: this.video_id,
                        loop: 1,
                        controls: 0,
                        mute: 0,
                        rel: 0,
                        showinfo: 0,
                        modestbranding: 1,
                        fs: 0,
                        showinfo: 0,
                        cc_load_policy: 0,
                        iv_load_policy: 3,
                        modestbranding: 1,
                    },
                    events: {
                        onReady: function (event) {
                            _this.onPlayerReady(event, _this);

                        },
                        onStateChange: function (event) {
                            _this.onPlayerStateChange(event, _this);
                        },
                    },
                });

                void 0;
            },

            onPlayerReady: function (event, _this) {
                void 0;

                if (_this.autoplay) {
                    event.target.playVideo();
                }
            },

            onPlayerStateChange: function (event, _this) {
                void 0;

                if (event.data == YT.PlayerState.PLAYING) {
                    _this.playing = true;
                }

                if (event.data == YT.PlayerState.ENDED) {
                    void 0;
                    if (!_this.initialize) {
                        void 0;
                        //- video is not inizialized on page ready, hide if completed ---
                        _this.cleanVideo();
                    }

                    if (this.onComplete) {
                        $(this.onComplete).trigger("click");
                    }
                }
            },

            startVideo: function (e) {
                void 0;
                void 0;
                void 0;
                //- display element for hidden player ---
                $("#" + this.containerId).show();

                this.player.playVideo();
            },

            stopVideo: function () {
                void 0;
                this.playing = false;
                this.player.stopVideo();
                return true;
            },

            cleanVideo: function () {
                void 0;

                if (this.autohide && this.playing) {
                    void 0;

                    this.playing = false;
                    this.player.pauseVideo();
                    this.player.seekTo(0, true);
                    $("#" + this.containerId).hide();
                }
            },
        });

        //- ---

        var apiSrc = "https://www.youtube.com/iframe_api";
        if (
            $("[yt-video]").length > 0 ||
            $('[sf-version="5.0"][sf-component="hero"]').length > 0
        ) {
            // check if yt script exists
            let ytScript = $(document).find('script[src="' + apiSrc + '"]');
            if (ytScript.length === 0) {
                // add it
                ytScript = document.createElement("script");
                ytScript.src = apiSrc;
                const firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(ytScript, firstScriptTag);
            }
        }

        //- ---

        var i = 3;
        var int = null;

        sfYoutube = function (force) {
            void 0;
            if (!i-- || force === true) {
                clearInterval(int);
            }
            $("[yt-video]")
                .not("[sf-active]")
                .attr("sf-active", "true")
                .youtube();
        };

        window.onYouTubeIframeAPIReady = function () {
            void 0;

            if ($('[sf-version="5.0"][sf-component="hero"]').length > 0) {
                void 0;

                if (
                    $('[sf-version="5.0"][sf-component="hero"]').attr(
                        "sf-autoplay"
                    ) != "false"
                ) {
                    hero5Video(event);
                } else {
                    $(window).on("scroll", function () {
                        SfPlayerClear();
                    });
                }
            }

            $('[sf-version="5.0"][sf-component="hero"] .btnPlay').on(
                "click",
                function () {
                    void 0;
                    hero5Video();
                }
            );

            sfYoutube();
            int = setInterval(function () {
                sfYoutube();
            }, 1000);
        }; /**/

        //- ---

        void 0;

        void 0;

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var sfPlayer;

        function hero5Video() {

            void 0;
            let ybe = $(this.element).find("[sf-version='5.0'][sf-component='hero']");

            $('[sf-version="5.0"][sf-component="hero"] .btnPlay').hide();
            console.log('ATTRIBITO', ybe.attr("set-video"), $('[sf-version="5.0"][sf-component="hero"]').prop("set-video"));

            var w = $(window).width();

            switch (
                $('[sf-version="5.0"][sf-component="hero"]').attr("campaign")
                ) {
                default:
                    var video_id = "dylKfvHaHb0";
                    if (w > 1023) {//desk
                        video_id = "dylKfvHaHb0";
                    } else if (w < 560) {//mobile
                        video_id = "566aU4POZ5I";
                    } else {
                        if (w > 560 && w < 750)  {//tablet
                            video_id = "CXHk90xxs0A";
                        }
                    }
                    break;
            }

            sfPlayer = new YT.Player("player", {
                videoId: video_id,
                playerVars: {
                    autoplay: 1,
                    playlist: video_id,
                    loop: 1,
                    controls: 0,
                    mute: 1,
                    rel: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    fs: 0,
                    showinfo: 0,
                    cc_load_policy: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                },
                events: {
                    onReady: SfonPlayerReady,
                    onStateChange: SfonPlayerStateChange,
                },
            });
        }

        // 4. The API will call this function when the video player is ready.
        function SfonPlayerReady(event) {
            void 0;

            event.target.playVideo();

            // total_video_time = (player.getDuration()*1000) - restart_before;
            // setTimeout(checkvideopos, total_video_time);

            /*$( "body" ).mousemove(function() {
                startVideo();
            });*/

        }

        function SfPlayerClear() {
            $("#player").remove();
            $('[sf-version="5.0"][sf-component="hero"] .btnPlay')
                .show()
                .before($('<div id="player"></div>'));
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function SfonPlayerStateChange(event) {
            void 0;

            /*if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
            }*/

            /*if (event.data == -1) {
                startVideo();
            }*/

            //if (event.data == YT.PlayerState.ENDED) {
            //sfPlayer.seekTo(0);
            //sfPlayer.playVideo();

            //SfPlayerClear();
            //}
        }
    });
})(jQuery);
(function ($) {
    $(function () {


        $.widget("sf.basicImage", {

            _create: function () {
                var _this = this;
                /* this.element.find(".content-image button").on("click", function () {
                    _this.init();
                }); */
                let submitBtn = $(this.element).find(".content-image button");

                this._on($(submitBtn), {

                    click: "init"

                });
            },
            init: function () {
                var istanza = this.element;
                console.log('click if');
                istanza.find('.content-image button').hide();
                istanza.find('.content-image iframe').show();
                var iframe = istanza.find('.content-image iframe');
                iframe.attr('src', iframe.attr('src') + "?autoplay=1"+"&modestbranding=1");
                setTimeout(function () {
                    istanza.find('.content-image iframe').show();
                }, 200);
            }
        });
        let n = 3;

        let interval = setInterval(() => {

            if (--n < 1) {

                clearInterval(interval);

            }

            $('[data-pln-component="basic-image"][pln-version="2.0"]').basicImage();

        }, 1000);

        /* $("[data-pln-component='basic-image'][pln-version='2.0'] .cover button").on("click", function () {
                       console.log('click')
                       $("[data-pln-component='basic-image'][pln-version='2.0'] .cover button").hide();
                       $("[data-pln-component='basic-image'][pln-version='2.0'] .cover iframe").show();

                       $("[data-pln-component='basic-image'][pln-version='2.0'] .content-image .embed-responsive-item")[0].src += "?autoplay=1";
                       setTimeout(function () { $("[data-pln-component='basic-image'][pln-version='2.0'] .content-image .embed-responsive-item").show(); }, 200);
                   }); */
    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.check_required", {

            _create: function() {
                this.input_el = $(this.element).find("input[required]")

                if(this.input_el.length) this.unlockRequiredAccessories(this.input_el[0])
            },

            unlockRequiredAccessories: function(input_element){
                let output = input_element.parentNode.getElementsByTagName("output")[0]
                $(output).show()
            }
        })

        $('[pln-component="input-checkbox"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').check_required();
    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.check_required", {

            _create: function() {
                this.input_el = $(this.element).find("select[required]")

                //if(this.input_el.length) this.unlockRequiredAccessories(this.input_el[0])
                if(this.input_el.length > 0){
                    this.input_el.on("change", (evt) =>{
                        if($(evt.target).val() == null){
                            $(evt.target).closest(".form-field").addClass("error")
                        }
                        else{
                            $(evt.target).closest(".form-field").removeClass("error")
                        }
                        /*
                    this.input_el.on("submit", (evt) =>{
                      if($(evt.target).val() == null){
                        alert('mokaccino')
                        $(evt.target).closest(".form-field").addClass("error")
                      }
                      else{
                        $(evt.target).closest(".form-field").removeClass("error")
                      }
                      evt.preventDefault();
                    }) ;
                    */
                    })
                }
            },
        })

        $(window).on("load", function() {
            $('.customA11ySelect').customA11ySelect();
        })

        $.fn.customA11ySelect = function(params) {

            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Silk|Opera Mini/i.test(navigator.userAgent);
            var keyTimeout;
            var keyMap = '';
            var down = 40;
            var up = 38;
            var spacebar = 32;
            var enter = 13;
            var escape = 27;
            var pageUp = 33;
            var pageDown = 34;
            var endKey = 35;
            var homeKey = 36;
            var tabKey = 9;

            return this.each(function() {

                var $menu = $(this); // the original <select> element
                var menuID = $menu.attr('id'); // ID of the original <select> input

                // creates the dropdown menu
                function menuConstructor() {

                    var $label = $('label[for="'+menuID+'"]');
                    $label.attr('id',menuID+'-label');

                    // create the new custom-a11yselect HTML
                    var selectMenu = $('<div class="custom-a11yselect-container">');
                    buildMenu(selectMenu);
                }

                function setParams(list) {
                    // if overlay parameter is defined, set overlay scroll on dropdown menu
                    if (params.overlay) {
                        var overlaySize = params.overlay+'px';
                        list.addClass('custom-a11yselect-overflow').css('max-height',overlaySize);
                    }
                }

                function buildMenu(selectMenu) {

                    // put all <option>'s in an array
                    var options = new Array;
                    $menu.find('option').each(function() {
                        options.push($(this));
                    });

                    //select
                    var button = $('<button type="button" id="'+menuID+'-button" class="custom-a11yselect-btn" aria-expanded="false" aria-haspopup="true"><span class="custom-a11yselect-text" id="'+menuID+'-selected"></span><i class="custom-a11yselect-icon icon-carrat-down"></i></button>');
                    //option
                    var list = $('<ul class="custom-a11yselect-menu" id="'+menuID+'-menu" role="menu">');

                    // create each option <li> for the custom-a11yselect
                    for (i=0;i<options.length;i++) {

                        // add an image to the option text if the data-iconurl attribute is present
                        var optionText = (options[i].attr('data-iconurl')) ? '<i class="custom-a11yselect-img" style="background-image:url('+options[i].attr('data-iconurl')+')"> </i>'+options[i].text() : options[i].text();

                        // if the current option is selected
                        if (options[i].is(':selected')) {
                            list.append('<li id="'+menuID+'-option-'+i+'" class="custom-a11yselect-option custom-a11yselect-focused custom-a11yselect-selected" data-val="'+options[i].val()+'"><button type="button" role="menuitem">'+optionText+'</button></li>');
                            button.attr('aria-labelledby',menuID+'-selected '+menuID+'-label').attr('aria-activedescendant','custom-a11yselect-'+i);
                            button.find('.custom-a11yselect-text').text(options[i].text());
                            // if the current option is disabled
                        } else if (options[i].is(':disabled')) {
                            list.append('<li id="'+menuID+'-option-'+i+'" class="custom-a11yselect-option custom-a11yselect-disabled" data-val="'+options[i].val()+'" aria-disabled="true"><button type="button" role="menuitem">'+optionText+'</button></li>');
                            // normal options
                        } else {
                            list.append('<li id="'+menuID+'-option-'+i+'" class="custom-a11yselect-option" data-val="'+options[i].val()+'"><button type="button" role="menuitem">'+optionText+'</button></li>');
                        }
                    }
                    // if there are more than 5 options, set an overflow class
                    if (options.length > 5) {
                        list.addClass('custom-a11yselect-overflow');
                    }

                    selectMenu.append(button,list); // append the button and option list to the custom-a11yselect-container

                    if (!$menu.is('[data-custom-a11yselect]')) {
                        $menu.after(selectMenu); // insert the custom-a11yselect after the original <select> element
                        $menu.attr('data-custom-a11yselect',menuID+'-menu'); // apply data attribute to original select element
                    }

                    // if on mobile or tablet, use native mobile OS select controls by inserting original <select> inside button
                    if (isMobile) {
                        $menu.appendTo(selectMenu).addClass('custom-a11yselect-mobile');
                        list.addClass('custom-a11yselect-hidden');
                        mobileEventHandlers(button,$menu);
                        // if on desktop, hide original <select>
                    } else {
                        $menu.hide();
                        eventHandlers(selectMenu); // set eventHandlers for this custom-a11yselect
                        // if special parameters are defined
                        if (typeof params != 'undefined') {
                            setParams(list);
                        }
                    }
                }

                // refresh options within an existing custom select menu
                function refreshOptions() {
                    var selectMenu = $('#'+$menu.attr('data-custom-a11yselect')).parent('.custom-a11yselect-container');
                    selectMenu.find('.custom-a11yselect-btn, .custom-a11yselect-menu').remove(); // remove the existing button and dropdown list
                    buildMenu(selectMenu);
                }

                // if the select does not already have a custom select menu applied
                if (!$menu.is('[data-custom-a11yselect]')) {
                    menuConstructor();
                }

                // if the select already has a custom select menu AND the 'refresh' parameter is passed AND it's not a mobile device
                // if the select already has a custom select menu AND the 'refresh' parameter is passed
                if ($menu.is('[data-custom-a11yselect]') && params == 'refresh') {
                    // if mobile, then only update the button text
                    if (isMobile) {
                        var $btn = $('button#'+menuID+'-button');
                        var valText = $menu.find('option:selected').text();
                        $btn.find('.custom-a11yselect-text').text(valText);
                        // if not mobile, then rebuild the select dropdown
                    } else {
                        refreshOptions();
                    }
                }
            });

            function eventHandlers(selectMenu) {
                var $button = selectMenu.find('.custom-a11yselect-btn');
                var $option = selectMenu.find('.custom-a11yselect-option > button');
                var $original = selectMenu.prev('select');

                // clicking the menu button opens/closes the dropdown
                $button.on('click',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    // if the keyMap variable from the keySearch function is empty, toggle the dropdown
                    if (keyMap == '') {
                        toggleDropdown($(this));
                        $(this).siblings('.custom-a11yselect-menu').find('.custom-a11yselect-focused > button').trigger('focus');
                    }
                });

                // key event handlers for the main dropdown button
                $button.on('keydown',function(e) {
                    var $dropdown = $(this).siblings('.custom-a11yselect-menu');
                    switch(e.keyCode) {
                        // escape key closes the dropdown
                        case escape:
                            e.preventDefault();
                            closeDropdown($dropdown);
                            break;
                        // up and down arrow keys open/close the dropdown
                        case up:
                        case down:
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown($(this));
                            $(this).siblings('.custom-a11yselect-menu').find('.custom-a11yselect-focused > button').trigger('focus');
                            break;
                    }
                });

                // Keypress event handlers to support searching for select options by typing in option text
                $button.on('keypress',function(e) {
                    var keyp = e.keyCode;
                    var dropdown = $(this).siblings('.custom-a11yselect-menu');
                    keySearch(keyp,dropdown);
                });
                $option.on('keypress',function(e) {
                    var keyp = e.keyCode;
                    var dropdown = $(this).parents('.custom-a11yselect-menu');
                    keySearch(keyp,dropdown);
                });

                // key event handlers for option buttons within the dropdown
                $option.on('keydown',function(e) {
                    var $li = $(this).parent('.custom-a11yselect-option');
                    switch(e.keyCode) {
                        // up arrow key focuses to previous option
                        case up:
                            e.preventDefault();
                            e.stopPropagation();
                            $li.prev('.custom-a11yselect-option').children('button').trigger('focus');
                            break;
                        // down arrow key focuses on next option
                        case down:
                            e.preventDefault();
                            e.stopPropagation();
                            $li.next('.custom-a11yselect-option').children('button').trigger('focus');
                            break;
                        // page up and home keys focus on first option
                        case pageUp:
                        case homeKey:
                            e.preventDefault();
                            e.stopPropagation();
                            $li.siblings('.custom-a11yselect-option:first').children('button').trigger('focus');
                            break;
                        // page down and end keys focus on last option
                        case pageDown:
                        case endKey:
                            e.preventDefault();
                            e.stopPropagation();
                            $li.siblings('.custom-a11yselect-option:last').children('button').trigger('focus');
                            break;
                        case escape:
                            e.preventDefault();
                            closeDropdown($(this).parents('.custom-a11yselect-menu'));
                            break;
                        // tab key is disabled when focused on any option
                        case tabKey:
                            e.preventDefault();
                            break;
                    }
                });

                // hover & focus on menu options toggles active/hover state
                $option.on('mouseover focus',function(e) {
                    var $dropdown = $(this).parents('.custom-a11yselect-menu');
                    $dropdown.find('.custom-a11yselect-option.custom-a11yselect-focused').removeClass('custom-a11yselect-focused');
                    $(this).parent('.custom-a11yselect-option').addClass('custom-a11yselect-focused');
                    $dropdown.siblings('.custom-a11yselect-btn').attr('aria-activedescendant',$(this).attr('id'));
                });

                // clicking on menu option sets option as selected
                $option.on('click',function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var $li = $(this).parent('.custom-a11yselect-option');
                    if (!$li.hasClass('custom-a11yselect-disabled')) {
                        selectOption($li, true);
                        // if the keyMap variable from the keySearch function is empty, close the dropdown
                        if (keyMap == '') {
                            closeDropdown($(this).parents('.custom-a11yselect-menu'));
                        }
                    }
                });

                // clicking outside the dropdown closes it
                $('body').on('click',function() {
                    closeDropdown();
                });
                // if the original/hidden <select> value is changed, update the selected option in the custom select
                $original.change(function() {
                    var selectedOptionIndex = $(this).find('option:selected').index();
                    var customSelectedOption = selectMenu.find('.custom-a11yselect-option').eq(selectedOptionIndex);
                    selectOption(customSelectedOption, false);
                });
            }

            // Search for select options matching a string of characters typed while focused on the element
            function keySearch(keyp,dropdown) {
                var $options = dropdown.find('.custom-a11yselect-option');
                var $currOption = dropdown.find('.custom-a11yselect-selected');

                if (keyp !== down &&
                    keyp !== up &&
                    keyp !== enter &&
                    keyp !== escape &&
                    keyp !== pageUp &&
                    keyp !== pageDown &&
                    keyp !== homeKey &&
                    keyp !== endKey &&
                    keyp !== tabKey) {

                    var character = String.fromCharCode(keyp).toLowerCase();

                    // if the first key is spacebar and keyMap is empty, don't do anything (to prevent conflict with click event)
                    if (keyp == spacebar && keyMap == '') {
                        return;
                    }

                    if (keyMap === '') {
                        keyMap = character;
                    } else {
                        keyMap += character;
                    }

                    // timeout to wait until user has finished typing to check for option matching keyMap string
                    clearTimeout(keyTimeout);
                    keyTimeout = setTimeout(function() {

                        keyMap = keyMap.trim();

                        var $nextOpt = $currOption.nextAll('.custom-a11yselect-option').filter(function() {
                            return $(this).text().toLowerCase().indexOf(keyMap) == 0;
                        });

                        // if one of the options after the currently-selected option is a match, select it
                        if ($nextOpt.length) {
                            selectOption($nextOpt.first(), true);
                            // close the dropdown if a match is found
                            if ($nextOpt.first().length) {
                                closeDropdown(dropdown);
                            }
                            // otherwise, check all of the options for a match
                        } else {
                            var $theOption = $options.filter(function() {
                                return $(this).text().toLowerCase().indexOf(keyMap) == 0;
                            });
                            selectOption($theOption.first(), true);
                            // close the dropdown if a match is found
                            if ($theOption.first().length) {
                                closeDropdown(dropdown);
                            }
                        }

                        // reset keyMap to empty string
                        keyMap = '';
                    }, 300);

                }
            }

            // mobile-specific event handlers
            function mobileEventHandlers($button,$menu) {
                // changing the selected option in the native mobile OS controls updates the custom button text
                $menu.on('change',function() {
                    var selectedText = $(this).find(':selected').text();
                    $button.find('.custom-a11yselect-text').text(selectedText);
                    $button.trigger('focus');
                });
                $button.on('click',function(e) {
                    e.preventDefault();
                    $menu.trigger('focus');
                })
            }
            // sets a menu option to be selected
            function selectOption($option, updateOriginal) {
                var selectedOption = $option.attr('data-val');
                var optionID = $option.attr('id');
                var optionText = $option.text();
                var $dropdown = $option.parents('.custom-a11yselect-menu');
                var $button = $dropdown.siblings('.custom-a11yselect-btn');
                var $original = $option.parents('.custom-a11yselect-container').prev('select');
                $dropdown.find('.custom-a11yselect-option.custom-a11yselect-selected').removeClass('custom-a11yselect-selected custom-a11yselect-focused');
                $option.addClass('custom-a11yselect-focused custom-a11yselect-selected');
                $button.attr('aria-activedescendant',optionID);
                $button.find('.custom-a11yselect-text').text(optionText);
                if (updateOriginal) {
                    $original.val(selectedOption).change();
                }
            }
            // opens/closes the dropdown
            function toggleDropdown($button) {
                var $dropdown = $button.siblings('.custom-a11yselect-menu');
                var $icon = $button.children('.custom-a11yselect-icon');
                $('.custom-a11yselect-menu').not($dropdown).removeClass('opened');
                if ($dropdown.hasClass('opened')) {
                    $button.attr('aria-expanded','false');
                } else {
                    $button.attr('aria-expanded','true');
                    // if select button is scrolled more than halfway down page, open on top of button, not below
                    if (!isMobile) {
                        var scrollTop = $(window).scrollTop();
                        var topOffset = $button.offset().top;
                        var relativeOffset = topOffset-scrollTop;
                        var winHeight = $(window).height();
                        if (relativeOffset > winHeight/2) {
                            $dropdown.addClass('custom-a11yselect-reversed');
                        } else {
                            $dropdown.removeClass('custom-a11yselect-reversed');
                        }
                    }
                }
                $icon.toggleClass('icon-carrat-down').toggleClass('icon-carrat-up');
                $dropdown.toggleClass('opened');
                // if dropdown has overflow, scroll to the selected option
                if ($dropdown.hasClass('custom-a11yselect-overflow') && !isMobile) {
                    var $selectedOption = $dropdown.find('.custom-a11yselect-selected').index();
                    if ($selectedOption > 0) {
                        var selectedScrollPos = ($selectedOption * 40) + 16; // each option is ~40px tall, with 16px top padding on dropdown
                        $dropdown.scrollTop(selectedScrollPos);
                    }
                }
            }
            // closes the dropdown
            function closeDropdown($menu) {
                var $openMenu = ($menu) ? $menu : $('.custom-a11yselect-menu.opened');
                var $button = $openMenu.siblings('.custom-a11yselect-btn');
                var $icon = $button.children('.custom-a11yselect-icon');
                var $currentlySelected = $openMenu.find('.custom-a11yselect-selected');
                $openMenu.find('.custom-a11yselect-option.custom-a11yselect-focused').removeClass('custom-a11yselect-focused');
                $openMenu.find('.custom-a11yselect-selected').addClass('custom-a11yselect-focused');
                $button.attr('aria-activedescendant',$currentlySelected.attr('id'));
                $button.find('.custom-a11yselect-text').text($currentlySelected.text());
                $icon.removeClass('icon-carrat-up').addClass('icon-carrat-down');
                $button.trigger('focus').attr('aria-expanded','false');
                $openMenu.removeClass('opened');
            }

        };
        $.fn.customA11ySelect.closeAllDropdowns = function() {
            if ($('.custom-a11yselect-menu.opened').length) {
                var $openMenu = $('.custom-a11yselect-menu.opened');
                var $button = $openMenu.siblings('.custom-a11yselect-btn');
                var $icon = $button.children('.custom-a11yselect-icon');
                var $currentlySelected = $openMenu.find('.custom-a11yselect-selected');

                $openMenu.find('.custom-a11yselect-option.custom-a11yselect-focused').removeClass('custom-a11yselect-focused');
                $openMenu.find('.custom-a11yselect-selected').addClass('custom-a11yselect-focused');
                $button.attr('aria-activedescendant',$currentlySelected.attr('id'));
                $button.find('.custom-a11yselect-text').text($currentlySelected.text());
                $icon.removeClass('icon-carrat-up').addClass('icon-carrat-down');
                $button.attr('aria-expanded','false');
                $openMenu.removeClass('opened');
            }
        };


        $('[pln-component="input-dropdown"][pln-version="2.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').check_required();
    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.check_required", {

            _create: function() {
                this.input_el = $(this.element).find("input[required]")

                if(this.input_el.length) this.unlockRequiredAccessories(this.input_el[0])
            },

            unlockRequiredAccessories: function(input_element){
                let output = input_element.parentNode.getElementsByTagName("output")[0]
                $(output).show()
            }
        })

        $('[pln-component="input-dropdown"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').check_required();
    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.radio", {

            _create: function() {
                $(this.element).find(".content-wrapper").on("click", (evt) =>{
                    $(evt.target).find("input[type='radio']").trigger("click")
                })
            },
        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="input-radio"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').radio();
        }, 1000);

    });
})(jQuery);
(function ($) {
    $(function () {

        $(function () {

            $.fn.inputFilter = function (callback, errMsg) {
                return this.on("input keydown keyup mousedown mouseup select contextmenu drop focusout", function (e) {
                    if (callback(this.value)) {
                        // Accepted value
                        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                            $(this).removeClass("input-error");
                            this.setCustomValidity("");
                        }
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        // Rejected value - restore the previous one
                        $(this).addClass("input-error");
                        this.setCustomValidity(errMsg);
                        this.reportValidity();
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    } else {
                        // Rejected value - nothing to restore
                        this.value = "";
                    }
                });
            };

            $('[type="tel"]').inputFilter(function (value) {
                if (value == "") return true
                return /^[0-9*#+# ]+$/.test(value); // Allow digits only, using a RegExp
            }, "Permessi solamente numeri");
        });
    });
})(jQuery);

(function($) {
    $(function() {

        $.widget("sf.check_required", {

            _create: function() {
                this.input_el = $(this.element).find("input[required]")

                if(this.input_el.length) this.unlockRequiredAccessories(this.input_el[0])
            },

            unlockRequiredAccessories: function(input_element){
                let output = input_element.parentNode.getElementsByTagName("output")[0]
                $(output).show()
            }
        })

        $('[pln-component="input-textarea"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').check_required();


    });
})(jQuery);
(function ($) {
    $(function () {

        $(function () {
            $('.form-field [data-toggle="tooltip"]').tooltip({
                html: true,
                trigger: 'hover focus',
                template:
                    '<div class="tooltip tooltip-cProdotto" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tooltip-inner-cProdotto"></div></div>',
            })
        })

    });
})(jQuery);
/* mappa e pin */

$(window).on("load", function() {
    initMap();
});

function initMap() {
    if (!document.getElementById("map")) {
        return false;
    }



    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 41.87194,
            lng: 12.56738,
        },
        minZoom: 2,
        zoom: 6,
        mapTypeControl: false,
        streetViewControl: false,

    });



    var currentInfoWindow = null; // Variabile per tenere traccia dell'infowindow corrente
    var markers = [];

    $.getJSON(
        "/content/dam/enigaseluce-static-data/corporate-json/mappa-impianti-corporate.json",
        function(data) {
            $.each(data.impianti, function(index, item) {
                var latLng = new google.maps.LatLng(item.lat, item.lng);
                //   const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
                var pin = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    icon: item.marker,
                });

                const contentString =
                    '<div id="content" class="popup-container">' +
                    '<div class="container-info">' +
                    '<div class="img-info">' +
                    (item.immagineTipo ? '<img src="' + item.immagineTipo + '">' : "") +
                    "</div>" +
                    '<div class="info-title">' +
                    "<label>" +
                    (item.tipo ? item.tipo : "") +
                    "</label>" +
                    "</div>" +
                    "</div>" +
                    '<h4 class="titolo-popup">' +
                    item.nomeImpianto +
                    "</h4>" +
                    '<div class="body-popup">' +
                    '<div class="container-info">' +
                    '<div class="img-info">' +
                    (item.indirizzoImg ? '<img src="' + item.indirizzoImg + '">' : "") +
                    "</div>" +
                    '<div class="info-title">' +
                    "<label>" +
                    (item.indirizzo ? item.indirizzo : "") +
                    "</label>" +
                    "</div>" +
                    "</div>" +
                    '<div class="container-info">' +
                    '<div class="img-info">' +
                    (item.potenzaImg ? '<img src="' + item.potenzaImg + '">' : "") +
                    "</div>" +
                    '<div class="info-title">' +
                    "<label>" +
                    (item.potenza ? item.potenza : "") +
                    "</label>" +
                    "</div>" +
                    "</div>" +
                    '<div class="container-info">' +
                    '<div class="img-info">' +
                    (item.dataImg ? '<img src="' + item.dataImg + '">' : "") +
                    "</div>" +
                    '<div class="info-title">' +
                    "<label>" +
                    (item.data ? item.data : "") +
                    "</label>" +
                    "</div>" +
                    "</div>" +
                    (item.link && item.cta ?
                        '<a class="pln-btn-underlined" href="' +
                        item.link +
                        '">' +
                        item.cta +
                        "</a>" :
                        "") + // Verifica se sia il campo link che cta sono definiti, altrimenti utilizza una stringa vuota
                    "</div>";

                const infowindow = new google.maps.InfoWindow();

                pin.addListener("click", function() {
                    // Chiude l'infowindow corrente, se presente
                    if (currentInfoWindow) {
                        currentInfoWindow.close();
                    }

                    infowindow.setContent(contentString);
                    infowindow.open(map, pin);
                    currentInfoWindow = infowindow; // Imposta l'infowindow corrente come quello appena aperto
                });

                markers.push(pin);
            });

            // Crea il cluster dei marker
            var markerCluster = new MarkerClusterer(map, markers, {
                styles: [{
                    url: "/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/svg-icons/pin_empty.svg",
                    width: 52,
                    height: 74,
                }, ],
            });
        }
    ).fail(function(error) {
        console.log("Si è verificato un errore:", error);
    });
}

/* ----------------------------------*/
(function($) {
    $(function() {

        $.widget("sf.modale", {

            _create: function() {
                console.log("ELEMENTO BOTTONE =>", this.element)
                this.id = $(this.element).find('.modal').attr('id');
                console.log("ID DA USARE =>", this.id)
                let openBtn = $('[modal_component="' + this.id + '"]');
                this._on($(openBtn), {
                    click: "open"
                });
                console.log("BUTTON =>", openBtn)

                let closeBtn = $(this.element).find('.close');
                this._on($(closeBtn), {
                    click: "close"
                });
            },

            open: function(evt) {
                evt.preventDefault();
                //console.log("COMPONENTE =>", $('#' + this.id))
                $('#' + this.id).modal('show');
                $(this.element).find(".back").addClass("hide")
                //$(".back").css("display", "none")

                try {
                    /*callDataLayer({
                        "event": "customSubscription",
                        "macro_step": "1_i tuoi dati",
                        "operazione": "call back",
                        "prodotto": this.prodotto,
                        "commodity": null,
                        "settore": this.segmento,
                        "opzione": null,
                        "listino": null,
                        "esito": null,
                        "id_lead": null
                    });*/
                } catch (error) {
                    console.log(error)
                }
            },

            close: function(evt) {
                evt.preventDefault();
                $('#' + this.id).modal('hide');

                // try {
                //     callDataLayer({
                //         'event': 'cta_click',
                //         'cta_cliccata’': 'tellis_scopri',
                //         'dettaglio_cta_cliccata': $(".fasciaimg").eq(1).find('.egl-fascia-img-cta a').attr('href')
                //     });
                // } catch (error) {

                // }
            },


        })

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="modale"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').modale();
        }, 1000);

    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.whatsappCallmeback", {

            _create: function() {


                this.id = $(this.element).find('.modal').attr('id');
                let openBtn = $('[whatsapp="' + this.id + '"]');
                this._on($(openBtn), {
                    click: "open"
                });

                let closeBtn = $(this.element).find('.close');
                this._on($(closeBtn), {
                    click: "close"
                });

                let submitBtn = $(this.element).find('.pln-btn-primary');
                this._on($(submitBtn), {
                    click: "submit"
                });

                //this.check();
                console.log('create');
            },

            open: function(evt) {
                evt.preventDefault();
                $('#' + this.id).modal('show');
            },

            close: function(evt) {
                evt.preventDefault();
                $('#' + this.id).modal('hide');
            },

            submit: function(evt) {
                evt.preventDefault();
            },

        })

        // pln.activate.whatsappModal = function(){
        //     $('[pln-component="modale-whatsapp"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').whatsappCallmeback();
        // }

        let n = 3;
        let interval = setInterval(() => {
            if (--n < 1) {
                clearInterval(interval);
            }
            $('[pln-component="modale-whatsapp"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').whatsappCallmeback();
        }, 1000);


        pln.activate.whatsappModal = function() {
            $('[whatsapp]').on('click', (e) => {
                let id = $(e.target).attr('whatsapp');
                $('#' + id).modal('show');
            });
        }
    });
})(jQuery);
(function ($) {
    $(function () {
        $.widget("sf.slickCarousel", {
            _create: function () {
                this.$resultsContainer = $(this.element).find(".FilterCard-content-category-card");
                this.istanza = this.element;
                let activeFilters = this.element.find("[data-category-filter]").length;

                console.log('resultContainer ', this.$resultsContainer,activeFilters);
                if(activeFilters >= 5){
                    this.initSlick();
                }

            },

            initSlick: function () {
                console.log('INIT SLICK')
                let config = {
                    mobileFirst: true,
                    arrows: false,
                    accessibility: true,
                    dots: false,
                    infinite: false,
                    speed: 350,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'linear',
                    variableWidth: true,
                    variableHeight: true,
                    centerMode: true,
                    swipe: true,
                    touchMove: true,
                    draggable: true,
                    responsive: [
                        {
                            breakpoint: 360,
                            settings: {
                                infinite: false,
                                arrows: false,
                                centerMode: true,
                                slidesToShow: 1,
                                touchMove: true,
                                draggable: true

                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: 'unslick'
                        },
                    ]

                };
                this.slider = $(this.$resultsContainer).slick(config);

            },

            destroySlick: function () {

                if (this.$resultsContainer.hasClass("slick-initialized")) {
                    console.log('Destroy');
                    this.istanza.find(this.$resultsContainer).slick("unslick");
                }

            }
        });
        $('[data-sf-slickCarousel="filterSlick"]').slickCarousel();

        $.widget("sf.category_filter", {

            _create: function () {
                console.log("ELEMENTO =>", this.element);

                const target_id = $(this.element).find("[data-category-filters]").attr("data-category-filters")
                this.target = $(this.element).find(`[data-category-id=${target_id}]`)
                this.cards = $(this.target).find("[data-category-box]")

                console.log("TARGET_ID =>", target_id)
                console.log("TARGET =>", this.target)
                console.log("CARDS =>", this.cards)

                if($(this.element).attr("pln-template") == "card-lg") this.setCount(this.cards.length)

                let filters = $(this.element).find("[data-category-filters]").find("[data-category-filter]")

                let nascondi = $(this.element).find(".hide-category")
                if(nascondi.length > 0){
                    $(filters[0]).remove()
                    filters = $(this.element).find("[data-category-filters]").find("[data-category-filter]")
                }
                else{
                    $(this.element).find("[data-category-filter='all-box']").addClass("selected")
                }

                if(filters.length > 4){
                    $(this.element).find(".FilterCard-content-category-card").addClass("scroll-filter")
                }

                for (let i = 0; i < filters.length; i++) {
                    $(filters[i]).on("click", (evt, target) => {
                        evt.preventDefault()
                        let action = $(filters[i]).attr("data-category-filter")
                        console.log("AZIONE =>", action)
                        $(this.element).find(".selected").toggleClass("selected")
                        filters[i].classList.add("selected")

                        this.filterSelection(action)
                    })
                }


                // Inizializza il widget "slickCarousel" quando ci sono più di 5 filtri attivi
                this.$slickCarousel = $(this.element).find('[data-sf-slickCarousel]');

                if (this.$slickCarousel.length >= 0) {
                    this.$resultsContainer = this.$slickCarousel;

                    console.log('slick carousel R:', this.$resultsContainer);
                    // Continua con il resto del codice
                } else {
                    console.error('Element with [data-sf-slickCarousel] not found.');
                }
                this.checkAndInitSlick(filters.length);/* filters.length */
            },

            filterSelection: function (props) {
                let risultati = 0

                for (i = 0; i < this.cards.length; i++) {
                    console.log("CATEGORY BOX =>", $(this.cards[i]).attr("data-category-box"))
                    console.log("PROPS =>", props)
                    console.log("IF RISULTATO =>", !$(this.cards[i]).attr("data-category-box").includes(props))

                    if (!$(this.cards[i]).attr("data-category-box").includes(props)) {
                        this.cards[i].classList.remove("active");
                        console.log(this.cards[i].classList)
                    }
                    else {
                        //console.log(this.cards[i].classList)
                        if (!this.cards[i].classList.contains("active")) {
                            this.cards[i].classList.add("active")
                            //console.log("ENTRA")
                        }
                        risultati += 1;
                    }
                }
                // Ottieni il numero di filtri
                let activeFilters = $(this.element).find("[data-category-filter]").length;

                this.checkAndInitSlick(activeFilters);

                console.log("RISULTATI =>", risultati)
                if($(this.element).attr("pln-template") == "card-lg") this.setCount(risultati)
                return risultati
            },

            setCount: function (i) {
                $(this.element).find("[data-category-counter] b").html(i)
            },

            checkAndInitSlick: function (activeFilters) {
                console.log('active filters: ', activeFilters);
                if (activeFilters >= 5) {
                    if (!this.$resultsContainer.hasClass("slick-initialized")) {
                        console.log('> 5 ');
                        this.$slickCarousel.slickCarousel("initSlick");
                    }
                } else {
                    if (this.$resultsContainer.hasClass("slick-initialized")) {
                        console.log('< 5 ');
                        /* this.$resultsContainer.slickCarousel("destroySlick"); */
                        $('[data-sf-slickCarousel="filterSlick"]').slickCarousel("destroySlick");;
                    }
                }
            }

        });

        $('[pln-component="cards-polizza"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').category_filter();


        /* countdown */
        /* if (
            document.querySelector(
                '[aem-component="countdown"][aem-version="1.0"].fascia-promoReminder'
            )
        ) {
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            var EDay = document.getElementById("inputCountdown").value;

            console.log("data-scadenza " + EDay);

            let endDay = new Date(EDay);
            console.log(endDay);

            const countDown = new Date(endDay).getTime();
            console.log(countDown);
            const x = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDown - now;
                var dayDistance = new Date(distance);

                var dd = String(dayDistance.getDate());
                var hh = String(dayDistance.getHours());
                var mm = String(dayDistance.getMinutes());
                // var ss = String(dayDistance.getSeconds()).padStart(2, "0");

                if (dd < 10) {
                    var dd = "0" + dd;
                    // console.log('day' + dd);
                }

                if (hh < 10) {
                    var hh = "0" + hh;
                    // console.log('hour' + hh);
                }

                if (mm < 10) {
                    var mm = "0" + mm;
                    // console.log('minute' + mm);
                }

                // console.log ('giornoCountdown' + dd);
                // console.log ('oraCountdown' + hh);
                // console.log ('minuitiCountdown' + mm);
                // console.log ('secondiCountdown' + ss);

                (document.getElementById("days").innerText = dd),
                    (document.getElementById("hours").innerText = hh),
                    (document.getElementById("minutes").innerText = mm);
                // document.getElementById("seconds").innerText = Math.floor(ss);

                if (dd && hh && mm == "00") {
                    console.log("togli");
                    document
                        .querySelector('[aem-component="countdown"][aem-version="1.0"]')
                        .remove();
                    clearInterval(x);
                }
            }, 0);
        } */
        /* fine countdown */

    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.modale_nds", {

            _create: function() {
                console.log("ELEMENTO =>", this.element)

                let codiceProposta = sfUrl.getParameter('codiceProposta');

                this.privacy_check = $(this.element).find(".privacy_check")

                if(this.privacy_check){

                    this.privacy_check.change((el) =>{
                        if(!$(el.target).is(":checked")) {
                            $(this.element).find(".continua").prop('disabled', true);
                        } else {
                            $(this.element).find(".continua").prop('disabled', false);
                        }
                        //console.log(el)
                    })
                }

                console.log("CODICE PROPOSTA =>", codiceProposta == null)
                if(codiceProposta != null){
                    $(this.element).find(".continua").attr("modal_component", "modale_post")
                    $(this.element).find(".continua").on("click", (el) =>{
                        $(this.element).find(".close").click()
                    });
                }
                else{
                    $(this.element).find(".continua").on("click", (el) =>{
                        let e = $(el.target).attr('data-sku-type');
                        let sku = $(el.target).attr('data-sku');
                        let commodity = $(el.target).attr('data-sku-commodity');

                        let url = (commodity) ? "/nds/index.html?f=" + ( e ? e : 'ci' ) + "&sku=" + sku + "&commodity=" + commodity : "/nds/index.html?f=" + ( e ? e : 'ci' ) + "&sku=" + sku ;
                        window.location.href = url;
                    })
                }

                $(this.element).find(".pdf_links").on("click", (el) =>{
                    $(el.target).find(".pdf_icon").attr("src", "/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/03-icons-navigation-check.svg");
                    console.log("ENTRA NEL CLICK", $(el.target).find(".pdf_icon"));
                    $(this.privacy_check).prop("disabled", false);
                    console.log(this.privacy_check);
                    $(this.privacy_check).prop("checked", true);
                    $(this.element).find(".continua").prop('disabled', false);
                })

                $(".back").on("click", (evt) =>{
                    evt.preventDefault()
                    evt.stopPropagation()

                    $(".close").click()
                })

                let modalId = $(this.element).find(".modal").attr("id")
                console.log("MODAL ID =>", modalId)
                $("[data-target='#" + modalId + "']").on("click", (evt) =>{
                    callDataLayer({
                        'event': 'myEni',
                        'userId': datalayerPageInfo.userId,
                        'userLoginState': datalayerPageInfo.userLoginState,
                        'userUtenzeAttive': datalayerPageInfo.userUtenzeAttive,
                        'siteSection1': datalayerPageInfo.siteSection1,
                        'siteSection2': datalayerPageInfo.siteSection2,
                        'from': datalayerPageInfo.from,
                        'area': "pubblica",
                        'fornitura': datalayerPageInfo.fornitura,
                        'pageName': datalayerPageInfo.pageName,
                        'page_location': location.protocol + '//' + location.host + location.pathname + "/" + modalId,
                        'partner_polizze': "zurich"
                    });
                })

                $("[data-target='#" + modalId + "']").attr("data-pln-tracking-href", location.protocol + '//' + location.host + location.pathname + "/" + modalId)

                $(this.element).find(".privacy_check").on("click", (evt) =>{
                    callDataLayer({
                        'event': 'informative',
                        'dettaglio_informativa': "flag"
                    })
                })
            }

        })

        $('[pln-component="modale-nds"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').modale_nds();
    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.nds_modale_post", {

            _create: function() {
                console.log("ELEMENTO =>", this.element)

                let codiceProposta = sfUrl.getParameter('codiceProposta');

                if(codiceProposta){
                    $(this.element).find(".continua").on("click", (el) =>{
                        let sku = $(el.target).attr('data-sku');
                        let commodity = sfUrl.getParameter('commodity');
                        let e = $(el.target).attr('data-sku-type');
                        window.location.href = "/nds/index.html?f=" + ( e ? e : 'ci' ) + "&sku=" + sku + "&codiceProposta=" + codiceProposta + "&commodity=" + commodity;
                    })
                }
            }

        })

        $('[pln-component="nds-modale-post"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').nds_modale_post();
    });
})(jQuery);
(function($) {
    $(function() {

        $.widget("sf.nds_snodo", {

            _create: function() {
                this.consequenziale = null
                let _this = this

                $(this.element).find("input[type='radio']").on("change", function(evt) {
                    let button = $(".continua")

                    if($(button).attr("disabled")) $(button).removeAttr("disabled")
                    _this.consequenziale = $(evt.target).val()
                    $(_this.element).find(".continua").attr("modal_component", _this.consequenziale)
                })

                $(".continua").on("click", (evt) =>{
                    evt.preventDefault()
                    evt.stopPropagation()

                    if(_this.consequenziale != null){
                        $('#' + _this.consequenziale).modal('show');
                        $(`[data-nds=${_this.consequenziale}]`).removeClass("hide")
                        $(_this.element).find(".close").click()
                    }
                })
            }

        })

        $('[pln-component="nds-snodo"][pln-version="1.0"]').not('[data-pln-active="true"]').attr('data-pln-active', 'true').nds_snodo();
    });
})(jQuery);
$(document).ready(function() {
    if ($('[pln-component="new-faq"][pln-version="1.0"]').length != 0) {

        let select = $('#faqNewAct').attr("name", "detailsNewAct");
        let numOptions = select[0].options.length;
        let option = $('#faqNewAct option');
        var boxItem = $('.new-faq-box .new-faq-box--item');
        //select init
        boxItem.eq(0).show();
        option.val('0')[0];

        // show the N-box linked at the N-option
        document.querySelector("select").addEventListener("change", function(event) {
            $('.new-faq-box .new-faq-box--item').hide();
            let indice = event.target.options.selectedIndex;
            $('.new-faq-box .new-faq-box--item').eq(indice).show();
        });

        let parag = $('.new-faq-box .box-item-content .box-item-content-item p');
        let numParag = parag.length;

        let attr = parag.find("data-overtext");

        for (let i = 0; i < numParag; i++) {
            if (attr.prevObject[i].dataset.overtext == 'overText') {

                // show the hidden paragraph
                $(".new-faq-box .box-item-content .button-more").on("click", function(event) {
                    event.currentTarget.previousElementSibling.className = "more";
                    event.currentTarget.nextSibling.nextElementSibling.className = "button-less show";
                    event.currentTarget.nextSibling.previousElementSibling.className = "button-more hide";
                });

                // hide the shown paragraph
                $(".new-faq-box .box-item-content .button-less").on("click", function(event) {
                    event.currentTarget.nextSibling.parentElement.children[1].className = "less";
                    event.currentTarget.className = "button-less hide";
                    event.currentTarget.previousElementSibling.className = "button-more show";
                });
            } else {
                parag[i].nextElementSibling.className = "button-more hide";
                parag[i].className = "more";
            }
        }
    }
});
$(document).ready(function() {

    if ($('[pln-component="partnership"][pln-version="1.0"]').length != 0) {
        const videoContainers = document.querySelectorAll(".video-container-partnership");

        videoContainers.forEach(function(videoContainer) {
            const videoId = videoContainer.dataset.videoId;
            const coverImage = videoContainer.querySelector(".play-white");
            const videoOverlay = document.querySelector(`#video-overlay-${videoId}`);
            const videoPlayer = videoOverlay.querySelector(".video-player");

            coverImage.addEventListener("click", function () {
                videoOverlay.style.display = "block";
                videoPlayer.src += "?autoplay=1";
            });

            const closeButton = videoOverlay.querySelector(".close-overlay-btn");

            closeButton.addEventListener("click", function () {
                videoOverlay.style.display = "none";
                videoPlayer.src = videoPlayer.src.replace("?autoplay=1", "");

                const message = JSON.stringify({ event: "command", func: "pauseVideo", args: "" });
                videoPlayer.contentWindow.postMessage(message, "*");
            });
        });



        let carouselSlider = document.querySelector(".partnership-slider-container")

        if (carouselSlider.length != 0) {
            $('.partnership-slider-container').addClass("carousel");
            sliderActive();
        }

        function sliderActive() {
            $('[pln-component="partnership"][pln-version="1.0"]').find(".partnership-slider-container").slick({
                mobileFirst: false,
                arrows: true,
                accessibility: true,
                dots: true,
                infinite: false,
                speed: 350,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
                variableWidth: true,
                variableHeight: true,
                centerMode: true,
                swipe: true,
                touchMove: true,
                initialSlide: 1,
                swipeToSlide: true,
                touchThreshold: 200,

            });
        }
    }



});

(function ($) {
    $(function () {

        let canTraslate = false;
        $(document).ready(function () {
            if ($("[data-pln-component='landing-olimpia'][pln-version='1.0']").length != 0) {
                const timerAnimation = setTimeout(() => { console.error("TIMEOUT ENDED", canTraslate), canTraslate = true, activate(canTraslate) }, 3000,);
            }
        });
        function activate(canTraslate) {
            console.error(canTraslate)
            if (canTraslate == true) {
                $("[data-pln-component='landing-olimpia'][pln-version='1.0']").css({ 'overflow': 'auto' });
                $("[data-pln-component='landing-olimpia'][pln-version='1.0'] header").hide();
            } else {
                $("[data-pln-component='landing-olimpia'][pln-version='1.0']").css({ 'overflow': 'hidden' });
            }
        }

        function scrollTrigger(selector, options = {}) {
            let els = document.querySelectorAll(selector)
            els = Array.from(els)
            els.forEach(el => {
                addObserver(el, options)
            })
        }


        function addObserver(el, options) {
            // Check if `IntersectionObserver` is supported
            if (!('IntersectionObserver' in window)) {
                // Simple fallback
                // The animation/callback will be called immediately so
                // the scroll animation doesn't happen on unsupported browsers
                if (options.cb) {
                    options.cb(el)
                } else {
                    entry.target.classList.add('active')
                }
                // We don't need to execute the rest of the code
                return
            }
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (options.cb) {
                            options.cb(el)
                        } else {
                            entry.target.classList.add('active')
                        }
                        observer.unobserve(entry.target)
                    }
                })
            }, options)
            observer.observe(el)
        }
        // Example usages:
        /* scrollTrigger('.intro-text') */
        scrollTrigger('.scroll-reveal', {
            rootMargin: '-200px',
        })
        scrollTrigger('.loader', {
            rootMargin: '-200px',
            cb: function (el) {
                el.innerText = 'Loading...'
                setTimeout(() => {
                    el.innerText = 'Task Complete!'
                }, 1000)
            }
        })
    });
})(jQuery);
function cellwidth() {
    //let mobile ;
    let scrollingTableWidth;
    let scrollingAreaWidth;
    let singleCellWidth;
    let primaryRowWidth;
    let ww = $(window).width();
    let mobile;



    $(".scrolling-area").removeAttr("style");
    $(".secondary-row .cell").removeAttr("style");

    if (ww < 1024) {
        mobile = true;
        primaryRowWidth = 135;
        columnGap = 15;
    } else {
        mobile = false;
        primaryRowWidth = 263;
        columnGap = 30;
    }

    $(".fixed-col").outerWidth(primaryRowWidth);

    if (!mobile) {
        scrollingTableWidth = $(".scrolling-table").outerWidth();
        //console.log("scrollingTableWidth: ", scrollingTableWidth);

        scrollingAreaWidth = scrollingTableWidth - columnGap - primaryRowWidth;
        //console.log("scrollingAreaWidth: ", scrollingAreaWidth);

        $(".scrolling-area").outerWidth(scrollingAreaWidth);
        singleCellWidth = (scrollingAreaWidth - columnGap * 2) / 3;
        $(".secondary-row .cell").outerWidth(singleCellWidth);
        //console.log("cell: ", singleCellWidth);
    } else {
        scrollingTableWidth = $(".scrolling-table").outerWidth();
        //console.log("scrollingTableWidth: ", scrollingTableWidth);

        scrollingAreaWidth = scrollingTableWidth - columnGap - primaryRowWidth;
        //console.log("scrollingAreaWidth: ", scrollingAreaWidth);

        $(".scrolling-area").outerWidth(scrollingAreaWidth);
        $(".secondary-row").outerWidth(900);
    }
}

function setRangeSlider() {
    /* RANGE SLIDER BEGIN */
    // A class for range sliders

    // Requires: jQuery

    // $el should be a JQuery element

    // Properties include:
    // * size       : Size of the bar in em
    // * ratio      : The ratio of bar/circle
    // * multiple   : The multiple of the size the circle reaches when clicked
    // * borderSize : The size of the border that surrounds the circle
    // * percentage : Starting position
    // * fgColour   : Circle and bar colour
    // * bgColour   : Background colour

    // Events:
    // * onDown
    // * onMove
    // * onUp

    // Library functions:
    // * setPercentage(percentage)
    // * disable()
    // * enable()

    (function () {
        // Helper functions
        String.prototype.toFloat = function () {
            var str = this.split(" ")[0];
            var px = Number(str.replace("px", ""));
            var em = Number(str.replace("em", ""));

            if (!isNaN(px)) return px;
            if (!isNaN(em)) return em;
            return false;
        };

        function RangeSlider($el, properties) {
            this.$el = $el;
            this.id = this.$el.attr("id");

            // Default properties
            this.size = 1;
            this.ratio = 0.3;
            this.multiple = 1.2;
            this.borderSize = 0.4;
            this.lastCoordinates = { x: 0, y: 0 };
            this.percentage = 30;
            this.disabled = false;
            this.fgColour = "#04B404";
            this.bgColour = "#ddd";
            this.borderColour = "rgba(0, 0, 0, 0.2)";

            // How many times onMove is called per second
            this.pollLimit = false;
            this.lastPoll = 0;

            // Merge the properties
            for (prop in properties) {
                if (properties.hasOwnProperty(prop)) {
                    this[prop] = properties[prop];
                }
            }
            this.percentage /= 100;

            // Call the main function
            this.main();
        }

        RangeSlider.prototype = {
            main: function () {
                this.construct();
                this.events();

                // Update the bar percentage
                this.setBar(this.percentage);
            },
            construct: function () {
                this.$el.addClass("rangeslider");
                if (this.disabled) {
                    this.$el.addClass("disabled");
                }

                // Check for ratio
                var defStyle = "background-color:" + this.fgColour + ";";
                var styles = {
                    rangeouter: "background-color:" + this.bgColour + ";",
                    rangeinner: defStyle,
                    rangeselector: defStyle,
                };

                var totalSize = 2 * this.borderSize + this.size * this.multiple;
                this.$el.css("height", totalSize + "em");

                var height = this.size * this.ratio;
                var margin = (totalSize - height) / 2;

                styles.rangeouter +=
                    "height:" + height + "em;margin:" + margin + "em 0;";
                styles.rangeinner +=
                    "height:" + height + "em;margin:" + margin + "em 0;";
                styles.rangeselector +=
                    "border-radius:" + this.size * this.multiple + "em;";

                // Append to the given element
                this.$el
                    .append(
                        $("<div>", {
                            class: "rangeouter",
                            style: styles.rangeouter,
                        })
                    )
                    .append(
                        $("<div>", {
                            class: "rangeinner",
                            style: styles.rangeinner,
                        })
                    )
                    .append(
                        $("<div>", {
                            class: "rangeselector",
                            style: styles.rangeselector,
                        })
                    );

                // Set the new jquery references
                this.$rangeinner = this.$el.find("div.rangeinner");
                this.$rangeouter = this.$el.find("div.rangeouter");
                this.$rangeselector = this.$el.find("div.rangeselector");

                // Set the circle to inactive
                this.setState("inactive");
            },
            events: function () {
                var _this = this;

                var onMouseDown = function (e) {
                    e.preventDefault();
                    if (_this.disabled || (e.button != 0 && e.type != "touchstart"))
                        return;

                    // Set it as active
                    _this.setState("active");
                    var coordinates = _this.getCoordinates(e);
                    var newLeft = _this.fixBar(coordinates);
                    _this.lastCoordinates = coordinates;

                    var percentage = _this.getPercentage(_this.lastCoordinates);
                    _this.percentage = percentage;

                    if (typeof _this.onDown === "function") {
                        _this.onDown(e, percentage * 100);
                    }
                };

                var onMove = function (e) {
                    if (e.type !== "touchmove") e.preventDefault();
                    // Check if active (needed for mouse events)
                    if (_this.active === true) {
                        var coordinates = _this.getCoordinates(e);
                        var newLeft = _this.fixBar(coordinates);
                        _this.lastCoordinates = coordinates;

                        if (typeof _this.onMove === "function") {
                            var time = window.performance.now();
                            var dTime = time - _this.lastPoll;

                            // Enforce a polling limit if it exists, otherwise
                            // let it pass all the time
                            var reqTime = _this.pollLimit ? 1000 / _this.pollLimit : -1;

                            if (dTime > reqTime) {
                                // Call the function with appropriate datea
                                var percentage = _this.getPercentage(_this.lastCoordinates);
                                _this.percentage = percentage;
                                _this.onMove(e, percentage * 100);

                                // Update the last call time
                                _this.lastPoll = time;
                            }
                        }
                    }
                };
                var onLeave = function (e) {
                    if (_this.active === true) {
                        _this.setState("inactive");
                        _this.startingX = false;

                        var percentage = _this.getPercentage(_this.lastCoordinates);
                        _this.percentage = percentage;

                        if (typeof _this.onUp === "function") {
                            if (typeof _this.onMove === "function") {
                                _this.onMove(e, percentage * 100);
                            }
                            _this.onUp(e, percentage * 100);
                        }
                    }
                };

                // Touch events
                this.$el.on("touchstart", onMouseDown);
                $(document).on("touchmove", onMove);
                $(document).on("touchend", onLeave);

                // Mouse events
                this.$el.on("mousedown", onMouseDown);
                $(document).on("mousemove", onMove);
                $(document).on("mouseup mouseleave", onLeave);
            },
            getCoordinates: function (e) {
                ret = {
                    x: false,
                    y: false,
                };
                touches = e.originalEvent.touches || false;
                if (touches) {
                    var touch = touches[0];
                    ret.x = touch.pageX;
                    ret.y = touch.pageY;
                } else if (e.clientX) {
                    ret.x = e.clientX;
                    ret.y = e.clientY;
                }

                return ret;
            },
            // Fix the selection bar depending on the coordinates
            fixBar: function (coordinates) {
                var percentage = this.getPercentage(coordinates);

                // Set the bar
                this.setBar(percentage);
            },
            getPercentage: function (coordinates) {
                // Find how far across the cursor is relative to the element
                var width = coordinates.x - this.$el[0].getBoundingClientRect().x;

                // Check the inner and outer bounds, and reduce if necessary
                if (width < 0) width = 0;
                if (width > this.$el.width()) width = this.$el.width();

                // Percentage
                var percentage = width / this.$el.width();

                // Return the percentage
                return percentage;
            },
            setBar: function (percentage) {
                if (percentage < 0 || percentage > 1) {
                    throw new Error(
                        "RangeSlider: setBar expects a percentage between 0-1, ",
                        percentage,
                        "given"
                    );
                }

                // Determine how far left
                var width = this.$el.width() * percentage;
                var left = width;

                // Apply calculated values
                this.$rangeinner.css("width", percentage * 100 + "%");
                this.$rangeselector.css("left", percentage * 100 + "%");
            },
            setState: function (state) {
                var styles = {};
                var currentLeft = this.$rangeselector.css("left").toFloat();
                if (state === "active") {
                    this.active = true;

                    // Set border
                    styles.border = this.borderSize + "em solid " + this.borderColour;

                    // Fix size
                    styles.size = this.size * this.multiple + "em";

                    // Fix top
                    styles.top = 0;
                } else {
                    this.active = false;

                    // Set border
                    styles.border = this.borderSize + "em solid rgba(0, 0, 0, 0)";

                    // Fix size
                    styles.size = this.size + "em";

                    // Fix top alignment
                    styles.top = (this.size * (this.multiple - 1)) / 2 + "em";
                }

                // Fix margin
                styles.marginLeft =
                    -(this.borderSize + styles.size.toFloat() / 2) + "em";

                // Apply css
                this.$rangeselector.css({
                    border: styles.border,
                    width: styles.size,
                    height: styles.size,
                    top: styles.top,
                    marginLeft: styles.marginLeft,
                });
            },

            // Library functions
            disable: function () {
                this.$el.addClass("disabled");
                this.disabled = true;
            },
            enable: function () {
                this.$el.removeClass("disabled");
                this.disabled = false;
            },
            setPercentage: function (percentage) {
                if (percentage < 0 || percentage > 100) {
                    throw new Error(
                        "RangeSlider: setPercentage expects a percentage between 0-100, ",
                        percentage,
                        "given"
                    );
                }
                this.setBar(percentage / 100);
            },
        };
        window.RangeSlider = RangeSlider;
    })();
    /* RANGE SLIDER END */

    var onMove = function (e, percentage) {
        let newpos;
        let scrollingAreaWidth = $(".scrolling-area").outerWidth();
        let secondaryRowWidth = $(".secondary-row").outerWidth();

        newpos = -(
            ((scrollingAreaWidth - secondaryRowWidth) / 100) * percentage -
            15
        );

        if (newpos <= 15) {
            newpos = 0;
        }

        newpos = Math.round(newpos) + "px";
        console.log(scrollingAreaWidth);
        console.log(newpos);

        $(".secondary-row").css("right", newpos);
    };

    var range = new RangeSlider($(".st-slider"), {
        percentage: 0,
        onMove: onMove,
        onDown: onMove,
        pollLimit: 60,
    });
}

$(document).ready(function () {
    if ($(".scrolling-table").length > 0) {
        cellwidth();
        setRangeSlider();

        $(window).on("resize", function () {
            cellwidth();
        });



    }


});

/* SLIDER BAND WITH LOOP SLIDER"
$('.carousel .slides').slick({
    // The default dots markup is pretty good, though we will need to tweak them in the `init` and `afterChange` event handlers.
    dots: true,
    appendDots: $('.slider-band-dots'),

    // This removes the inappropriate tabpanel and tab roles and disables arrow key navigation.
    // NOTE: if you want to use arrow key navigation, you should implement that separately without enabling this option. The usability benefits of key navigation don't outweigh the accessibility impact of the tab implementation.
    accessibility: true,

    // Many hero banners auto-rotate, so this demo will too.
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    focusOnSelect: false,
    centerMode: true,
    draggable: false,
    slidesToShow: 1,
    responsive: [
      {
          breakpoint: 767,
          settings: {
              focusOnSelect: true,
              touchMove: true,
              draggable: true

          }
      },
  ],


  // Use highly-accessible custom elements from the DOM for prev/next buttons.
  // NOTE: You can also define the elements here as strings, if you prefer
  prevArrow: document.querySelector('.carousel .previous-button'),
  nextArrow: document.querySelector('.carousel .next-button')
});
*/

/* SLIDER BAND DEFAULT
            $('.carousel .slides').slick({
          // The default dots markup is pretty good, though we will need to tweak them in the `init` and `afterChange` event handlers.
          dots: true,
          appendDots: $('.slider-band-dots'),

          // This removes the inappropriate tabpanel and tab roles and disables arrow key navigation.
          // NOTE: if you want to use arrow key navigation, you should implement that separately without enabling this option. The usability benefits of key navigation don't outweigh the accessibility impact of the tab implementation.
          accessibility: true,

          // Many hero banners auto-rotate, so this demo will too.
          autoplay: true,
          autoplaySpeed: 7000,
          infinite: false,
          focusOnSelect: false,
          draggable: false,
          slidesToShow: 1,
          responsive: [
            {
                breakpoint: 767,
                settings: {
                    focusOnSelect: true,
                    centerMode: true,
                    touchMove: true,
                    draggable: true

                }
            },
        ],


        // Use highly-accessible custom elements from the DOM for prev/next buttons.
        // NOTE: You can also define the elements here as strings, if you prefer
        prevArrow: document.querySelector('.carousel .previous-button'),
        nextArrow: document.querySelector('.carousel .next-button')
    });
*/
// ********  gestione sticky *********

function StickyCTA() {

    if (($('[pln-component="sticky-cta"][pln-version="1.0"]').length != 0) && ($("#Sticky-Banner").length != 0)) {
        $("#Sticky-Banner").css("display", "none");
    }

    if ($('[pln-component="sticky-cta"][pln-version="1.0"]').length != 0) {

        let banner = window.document.getElementById("Sticky-CTA");
        let hero = window.document.getElementById("heroSticky");
        // console.log('hero', hero);
        // console.log('sticky-cta', banner);

        let heightHero = hero.offsetHeight;
        let heightBanner = banner.offsetHeight;
        // questi valori sotto vanno attivati se manca hero nei test su questo repo
        // let heightHero = 490;
        // let heightBanner = 70;

        let smHeader = window.document.getElementById("smallHeader");
        // queste due righe sotto vanno commentate al contrario per la prod
        // let smHeightHeader = smHeader.offsetHeight;
        let smHeightHeader = 60;

        let lgHeader = window.document.getElementById("bigHeader");
        // queste due righe sotto vanno commentate al contrario per la prod
        // let lgHeightHeader = lgHeader.offsetHeight;
        let lgHeightHeader = 90;

        let sumHeaderBannerHeight = smHeightHeader + heightBanner - 1;
        let positionHero = hero.getBoundingClientRect().top;

        if (smHeightHeader == 0) {
            sumHeaderBannerHeight = lgHeightHeader + heightBanner - 1;
            if (positionHero + (heightBanner + heightHero) < sumHeaderBannerHeight) {
                banner.classList.add("sticky-cta-active");
                banner.style.top = lgHeightHeader + "px";
            } else {
                banner.classList.remove("sticky-cta-active");
            }
        }
        else
        if (positionHero + (heightBanner + heightHero) < sumHeaderBannerHeight) {
            banner.classList.add("sticky-cta-active");
            banner.style.top = smHeightHeader + "px";
        }
        else {
            banner.classList.remove("sticky-cta-active");
        }

    }
}
window.addEventListener("scroll", StickyCTA);




//  ****** gestione anchor links  ******

$(document).ready(function () {

    if ($('[pln-component="sticky-cta"][pln-version="1.0"]').length != 0) {

        var nowscrolling = false;

        $('.anchor-link').each(function () {

            if (nowscrolling != true) {

                let ancora = $(this);
                // console.log('ancora',ancora);
                let href = $(this).attr('href');
                // console.log('href',href);
                let target = $(href);
                // console.log('target',target);

                $(window).scroll(function () {
                    // var hT = target.offset().top - 60 - 90
                    var hT = target.offset().top
                    var hH = target.outerHeight()
                    var wH = $(window).height();
                    var wS = $(this).scrollTop();

                    console.log('ht', hT);
                    // console.log('hh', hH );
                    // console.log('wh', wH );
                    // console.log('wS', wS);

                    if ((wS >= (hT - 5)) && wS <= (hT + hH - 5)) {
                        ancora[0].className = ('anchor-link active');
                    } else {
                        ancora[0].className = ('anchor-link')
                    }

                });
            }
        })
    }
});
(function ($) {
    $(function () {
        $.widget("sf.sostenibilita", {
            _create: function () {
                let target = $(this.element).find(".card-sostenibilita-container");
                console.log("ciao sono io", target);

                if ($(window).width() < 1024) {
                    target.addClass("carousel");
                    this.sliderActive();
                }




            },

            sliderActive: function () {

                $(this.element).find(".card-sostenibilita-container").slick({
                    mobileFirst: false,
                    arrows: false,
                    accessibility: true,
                    dots: true,
                    infinite: false,
                    speed: 350,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: "linear",
                    variableWidth: true,
                    variableHeight: true,
                    centerMode: true,
                    swipe: true,
                    touchMove: true,
                    draggable: true,
                });
            },
        });

        $('[pln-component="sostenibilita"][pln-version="1.0"]').sostenibilita();
    });
})(jQuery);

function heightParify(div) {
    let max = 0;
    let last;

    $(div).each(function() {
        last = $(this).outerHeight();
        console.log(last);

        if (last > max) {
            max = last;
        }
    });

    $(div).css("height", max + "px");
}

function infotextPlacement() {
    let first_top;
    let second_top;
    let paddingTop = 30;
    let firstText_height;

    first_top = $(".table-card").first().find(".first").offset().top;
    second_top = $(".table-card").first().find(".second").offset().top;

    firstText_height = $(".infotext-out .first").outerHeight();

    $(".infotext-out .first").css("top", first_top - paddingTop + "px");
    $(".infotext-out .second").css("top", second_top - paddingTop - firstText_height + "px");
}

$(document).ready(function () {

    if (window.innerWidth > 767) {
        heightParify(".table-card .header .title");
        heightParify(".table-card .header .subtititle");
        heightParify(".table-card .info");
        heightParify(".table-card .explanation .content.first");
        heightParify(".table-card .explanation .content.second");
        heightParify(".table-card .summary-cta .mainmsg");
        heightParify(".table-card .summary-cta .furtherinfo");
    }

    if (window.innerWidth > 1023) {
        infotextPlacement();
    }
});


$(document).ready(function() {

    if ($('[pln-component="tag-articolo-condividi"][pln-version="1.0"]').length != 0) {

        let description = document.querySelector("meta[property='og:description']").getAttribute("content");
        let title = document.querySelector("meta[property='og:title']").getAttribute("content");
        let url = document.querySelector("meta[property='og:url']").getAttribute("content");

        //facebook
        var data= document.querySelector('[data-share="facebook"]');
        data.addEventListener("click", shareFacebook);

        function shareFacebook(){
            let facebook = 'https://www.facebook.com/sharer/sharer.php?u='+ url;
            window.open(facebook, "_blank", "left=500,width=800,height=550");
        }

        //linkedin
        function shareLinkedin(){
            let linkedin= 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
            window.open(linkedin, "_blank", "left=500,width=800,height=550");
        }

        var data= document.querySelector('[data-share="linkedin"]');
        data.addEventListener("click", shareLinkedin);

        //mail
        function shareMail(){
            let mail = 'mailto:?subject=' + title + '&body=' + description + '%20'+ url;
            window.open(mail);
        }

        var data= document.querySelector('[data-share="mail"]');
        data.addEventListener("click", shareMail);

        //generic
        function shareGeneric(){
            let generic = navigator.share(data);
            window.open(generic);
        }

        var data= document.querySelector('[data-share="generic"]');
        data.addEventListener("click", shareGeneric);

        //print
        function sharePrint(){
            let print = navigator.share(data);
            window.print(print);
        }

        var data= document.querySelector('[data-share="print"]');
        data.addEventListener("click", sharePrint);

        //copy-text
        function copyText(){
            navigator.clipboard.writeText(url);
            console.log(url);
        }

        var data= document.querySelector('[data-share="copy"]');
        data.addEventListener("click", copyText);

    }

});

// SCRIPT-LOADER FOOTER
//# sourceURL=script:///C:/Exprivia/PortaleEGL-p45317-uk14241/enigaseluce/ui.frontend/src/main/webpack/Componenti/EGL-js-sheet.js