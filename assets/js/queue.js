(function($) {

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getQueue() {
        var queueList = Object.values(mapsObject).filter(function(map) {
            return !!map.queued;
        });
        queueList = queueList.sort(function(a, b) {
            return (a.queued < b.queued ? 1 : -1);
        });

        var queueHtml = '';
        if (queueList.length) {
            for (var i=0; i<queueList.length; i++) {
                queueHtml += '<div class="row">';
                queueHtml += '<img src="images/q3maps/' + queueList[i].id + '-0.jpg" />';
                queueHtml += '<div style="flex: 1;">';
                queueHtml += '<div>' + queueList[i].name + '</div>';
                queueHtml += '<div>' + queueList[i].id + '</div>';
                queueHtml += '</div>';
                queueHtml += '<div><a class="queued" data-id="' + queueList[i].id + '" title="Remove from Queue"><img src="images/icons/remove-from-queue-black.svg" /></a></div>';
                queueHtml += '</div>';
            }
        } else {
            queueHtml = 'Nothing here yet';
        }

        $('#queueList').html(queueHtml);
        $('#myQueue').removeClass('hidden');

        initRemoveQueueListener();
    }

    function removeQueued(e) {
        var cookieConsent = getCookie('cookieConsent');
        if(!cookieConsent) return;

        var queueList = Object.values(mapsObject).filter(function(map) {
            return !!map.queued;
        });

        var id = e.target.closest('.queued').getAttribute('data-id');
        setCookie(id + '_queued', false, 0);
        if (!!nativeOrder[id]) nativeOrder[id].queued = false;
        if (!!mapsObject[id]) mapsObject[id].queued = false;
        if (!!ctfMaps[id]) ctfMaps[id].queued = false;
        if (!!mapsObjectCTF[id]) mapsObjectCTF[id].queued = false;
        if (!!oldMaps[id]) oldMaps[id].queued = false;
        if (!!mapsObjectOld[id]) mapsObjectOld[id].queued = false;

        $(e.target).closest('.row').fadeOut('fast', function() {
            $(e.target).closest('.row').remove();
            if (!$('#queueList .row').length) $('#queueList').html('Nothing here yet');
        });
    }

    function initRemoveQueueListener() {
        $('#myQueue .queued').on('click', removeQueued);
    }

    function init() {
        // queue modal opened
        $('#queue, #queueMobile').on('click', function() {
            getQueue();
        });

        // queue modal closed
        $('#myQueue .closer').on('click', function() {
            $('#myQueue').addClass('hidden');
        });
    }

    $(window).on('load', function() {
        init();
    });

})(jQuery);
