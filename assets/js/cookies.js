(function($) {

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function handleModal() {
        var cookieConsent = getCookie('cookieConsent');
        if (!cookieConsent) {
            $('#cookieConsent').removeClass('hidden');
            $('body').addClass('modal-open');
        }
    }

    function init() {
        // cookies accepted
        $('#cookieConsent #yes').on('click', function() {
            $('#cookieConsent').addClass('hidden');
            $('body').removeClass('modal-open');

            setCookie('cookieConsent', true, 400);
        });

        // cookied denied
        $('#cookieConsent #no, #cookieConsent .closer').on('click', function() {
            $('#cookieConsent').addClass('hidden');
            $('body').removeClass('modal-open');
        });
    }

    $(window).on('load', function() {
        init();
        handleModal();
    });

})(jQuery);
