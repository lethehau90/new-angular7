var initApp = {

    init : function(){
        initApp.registerEvent();
    },

    registerEvent: function() {
        $("#m_aside_left_minimize_toggle").off('click').on('click', function(event){
            event.preventDefault();
            if($('body').hasClass('m-brand--minimize m-aside-left--minimize')){
                $('body').removeClass('m-brand--minimize m-aside-left--minimize')
            }
            else {
                $('body').addClass('m-brand--minimize m-aside-left--minimize')
            }
        })
    },
}

$(document).ready(function(){
    initApp.init();
})