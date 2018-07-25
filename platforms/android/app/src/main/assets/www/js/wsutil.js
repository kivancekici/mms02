var servicePath = "https://baklava7.de/papi/Psvc.php";


function restfulPostCall(sendData) {

    var response;

    $$.ajax({
        method: 'POST',
        async: false,
        url: servicePath,
        data: JSON.stringify(sendData),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, status, xmlRequest) {
            //  myApp.hidePreloader();
            response = data;
        },
        error: function(request, status, error) {
            //  myApp.hidePreloader();
            response = "Error";
        }

    });
    return response;
}

function mobileLogin(email, passwd, uname) {

    var lgndata = {
        'opr': 'login',
        'email': email,
        'pswd': passwd,
        'uname': uname
    }

    var result = restfulPostCall(lgndata);

    if (result != "Error") {

        if (result[0].status != "NOK") {
            return result[0].supplierid;
        } else {
            return "NOK";
        }

    } else {
        return "NOK";
    }

}


function getOrdersList(email, pswd, uname) {

    var ordersData = {
        "opr": "getOrdersList",
        "email": email,
        "pswd": pswd,
        "uname": uname
    }

    var result = restfulPostCall(ordersData);

    if (result != "Error") {

        if (result.status != "NOK") {
            return result;
        } else {
            return "NOK";
        }

    } else {
        return "NOK";
    }
}

function getOrderListByStatus(email, password, uname, status) {

    var data = {
        "opr": "getOrdersListPerStatus",
        "email": email,
        "pswd": password,
        "uname": uname,
        "status": status
    }

    var result = restfulPostCall(data);

    if (result != "Error") {
        return result;
    } else {
        return "NOK";
    }


}


function getOrderDetails(referenceNum, email, password, uname) {

    var orderData = {
        "opr": "getOrdersDetail",
        "reference": referenceNum,
        'email': email,
        'pswd': password,
        'uname': uname
    }

    var result = restfulPostCall(orderData);

    if (result != "Error") {
        return result;
    } else {
        return "NOK";
    }

}

function setOrderStatus(referenceNum, email, password, uname, orderId, status) {

    var orderData = {
        "opr": "updateOrderStatus",
        "reference": referenceNum,
        'email': email,
        'pswd': password,
        'uname': uname,
        'id_order': orderId,
        'status': status
    }

    var result = restfulPostCall(orderData);

    if (result != "Error") {

        if (result[0].status != "NOK") {
            return "OK";
        } else {
            return "NOK";
        }

    } else {
        return "NOK";
    }

}



function getLangCode() {
    var lang = 1;
    if (selectedLang == "de") {
        lang = 1;
    } else if (selectedLang == "tr") {
        lang = 2;
    } else {
        lang = 1;
    }

    return lang;
}