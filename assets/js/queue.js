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
            return (a.queued < b.queued ? -1 : 1);
        });

        var queueHtml = '';
        if (queueList.length) {
            for (var i=0; i<queueList.length; i++) {
                queueHtml += '<li data-id="' + queueList[i].id + '">' + queueList[i].name + '(' + queueList[i].id + ')</li>';
            }
        } else {
            queueHtml = 'Nothing here yet';
        }

        $('#queueList').html(queueHtml);
        $('#myQueue').removeClass('hidden');
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
