/**
 * Created by julia on 13.07.2016.
 */
modules.require(['owl-carousel2'], function($) {

    $(document).ready(function(){
        $(".news__carousel").owlCarousel({
            items : 1,
            nav : false,
            mouseDrag : false
        });
    });
});