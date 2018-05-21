Template7.registerHelper('placeholder', function(plchldrContent) {
    var ret = 'placeholder="' + plchldrContent + '"';
    return ret;
});


// Initialize app
var myApp = new Framework7({
    swipeBackPage: false,
    swipePanelOnlyClose: true,
    template7Pages: true,
    pushState: true,

    onAjaxStart: function(xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function(xhr) {
        myApp.hideIndicator();
    }
});

var $$ = Dom7;


var langIsSelected = window.localStorage.getItem("langIsSelected");
var selectedLang;



if (langIsSelected == "1") {
    selectedLang = window.localStorage.getItem("lang");
} else {
    //selectedLang = "tr"; // Set turkish to default language
    selectedLang = "de";
}


// Add view
var mainView = myApp.addView('.view-main', {
    // domCache: true
});

getLangJson();

setTimeout(function() {

    checkLangStatus();

}, 3000);


function onOffline() {

    myApp.alert('İnternet bağlantısı yok.', function() {
        navigator.app.exitApp();
    });
}



function checkLangStatus() {
    if (langIsSelected == "1") {
        checkLoginStatus();
    } else {
        mainView.router.loadPage({ url: 'language.html', ignoreCache: true });
    }
}

function changePanelLanguage() {

    var panelData = myApp.template7Data.languages[selectedLang].panel;

    $$('#logoutItem').text(panelData.logoutItem);
    $$('#myOrdersHistory').text(panelData.myOrdersHistory);
}


function hidePanelItems() {
    $$('#btnOrdersHistory').hide();
    $$('#btnLogout').hide();
}

function showPanelItems() {
    $$('#btnOrdersHistory').show();
    $$('#btnLogout').show();
}

function setContextParameter(pageName, key, value) {
    myApp.template7Data.languages[selectedLang][pageName][key] = value;
}

function loadPageWithLangAndData(pageName, contentData) {
    var cntxName = 'languages.' + selectedLang + '.' + pageName;
    var pgUrl = pageName + '.html';

    mainView.router.load({
        url: pgUrl,
        contextName: cntxName,
        query: contentData
    });

}

function loadPageWithLang(pageName) {
    var cntxName = 'languages.' + selectedLang + '.' + pageName;
    var pgUrl = pageName + '.html';


    mainView.router.load({
        url: pgUrl,
        contextName: cntxName
    });

}


function checkLoginStatus() {

    var userLoggedIn = window.localStorage.getItem("isLogin");

    try {
        if (userLoggedIn == "1") {
            loadPageWithLang('main');


        } else {
            loadPageWithLang('login');

        }
    } catch (e) {
        myApp.alert(e);
    }

}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getLangJson() {
    $$.getJSON('./languages/lang.json', function(data) {
        myApp.template7Data.languages = data.languages;
        changePanelLanguage();
    });
}

function alertMessage(msgKey, msgTypeKey) {
    var msg = myApp.template7Data.languages[selectedLang]['alertMessages'][msgKey];
    var msgType = myApp.template7Data.languages[selectedLang]['alertMessages'][msgTypeKey];

    myApp.alert(msg, msgType);
}



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

$$(document).on('offline', function() {
    onOffline();
});


function playMP3() {
    var mp3URL = 'cdvfile://localhost/sounds/android.mp3';
    var media = new Media(mp3URL, null, mediaError);
    media.play();
}



function mediaError(e) {
    myApp.alert('Media Error');
    myApp.alert(JSON.stringify(e));
}



$$('#btnOrdersHistory').on('click', function() {

    playMP3();

    /*
    loadPageWithLang('orders_history');
      myApp.closePanel();
      */
});


$$('#btnLogout').on('*click', function() {
    var media = new Media('cdvfile://localhost/temporary/sounds/android.mp3', null, mediaError);
    media.play();

    /*
    window.localStorage.setItem("isLogin", "0");
    checkLoginStatus();
    myApp.closePanel();
    */
});







$$('#btnLogin').on('click', function() {

    loadPageWithLang('login');
    myApp.closePanel();
});

function printLabel(base64data) {

    cordova.plugins.brotherPrinter.findNetworkPrinters(function(bool, printers) {
        // myApp.alert(bool + '\n' + printers);

        if (bool == true) {
            // var data = baseimg.replace(/^data:image\/\w+;base64,/, "");
            //  myApp.alert(data);
            cordova.plugins.brotherPrinter.printViaSDK(base64data, function(statusCode) {
                myApp.alert(statusCode);
            });
        }

    });
}




// Option 2. Usin g one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {
    // Get page data from event data
    var page = e.detail.page;




    if (page.name === 'login') {



        $$('.btnLogin').on('click', function() {

            loadPageWithLang('main');

            /*
            var email = $$('#txtEmail').val();
            var pass = $$('#txtPassword').val();
            var response = mobileLogin(email, pass);

            if (response != 'NOK') {
                window.localStorage.setItem("customerId", response);
                window.localStorage.setItem("isLogin", "1");
                window.localStorage.setItem('password', pass);
                window.localStorage.setItem('useremail', email);
                checkLoginStatus();
            } else {
                window.localStorage.setItem("isLogin", "0");

            }
            */

        });

    }

    if (page.name === 'main') {

        /*
        var userLoggedIn = window.localStorage.getItem("isLogin");

        if (userLoggedIn == "1") {
            var userId = window.localStorage.getItem("customerId");
            var pswd = window.localStorage.getItem("password");
            var email = window.localStorage.getItem("useremail");
            //getOrders(); methodu olcak
        }


        

        if (productResultList == null) {
            productResultList = getSearchResultList(searchKeyWord);
        }

        initlistProduct();
        listProductResult.items = productResultList;
        listProductResult.update();

        
        if (manufacturersList == null) {
            manufacturersList = getAllManufacturersList("");
        }

        initListVirtualManufacturers();
        listVirtualManufacturers.items = manufacturersList;
        listVirtualManufacturers.update();

       */
    }

    if (page.name === 'language') {

        $$('.btnLangTr').on('click', function() {

            window.localStorage.setItem("langIsSelected", "1");
            window.localStorage.setItem("lang", "tr");
            selectedLang = "tr";
            checkLoginStatus();
            changePanelLanguage();
        });

        $$('.btnLangGer').on('click', function() {
            window.localStorage.setItem("langIsSelected", "1");
            window.localStorage.setItem("lang", "de");
            selectedLang = "de";
            checkLoginStatus();
            changePanelLanguage();
        });

    }



    if (page.name === 'order_details') {


    }

});