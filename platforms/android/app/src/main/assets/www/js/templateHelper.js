var listOrders;

function initListOrders() {
    listOrders = myApp.virtualList('.lstpendingorders', {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 105,
        template: '<li>' +
            '<a href="#" onclick="showOrderDetail(' + "'{{reference}}'" + "," + "'{{id_order}}'" + ');" class="item-link item-content">' +
            '<div class="item-inner">' +
            '<div class="item-title-row">' +
            '<div class="item-title"><b>{{reference}}    {{pcfirstname}} {{pclastname}}</b></div>' +
            '<div class="item-after"><b>{{total_paid_tax_incl}}<b></div>' +
            '</div>' +
            '<div class="item-subtitle">{{date_add}}</div>' +
            '<div class="item-text">{{address1}} {{address2}} {{postcode}} {{city}} {{phone}} {{phone_mobile}} {{vat_number}}</div>' +
            '</div>' +
            '</a>' +
            '</li>'
    });
}

function showOrderDetail(referenceNum, orderId) {

    dat = {
        'reference': referenceNum,
        'orderId': orderId
    }

    loadPageWithLangAndData('order_details', dat);
}

var orderDetailList;

function initOrderDetailList() {
    orderDetailList = myApp.virtualList('.lstorderdetail', {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 150,
        template: '<li class="card">' +
            '<div class="card-header color-orange"><b>{{product_name}}</b></div>' +
            '<div class="card-content">' +
            '<div class="card-content-inner">' +
            '<b>Menge:</b> {{product_quantity}} <br>' +
            '<b>Preis:</b> {{product_price}} <br>' +
            '<b>Gewicht:</b> {{product_weight}} <br>' +
            '</div>' +
            '</div>' +
            '<div class="card-footer">{{date_add}}</div>' +
            '</li>'
    });
}


var listAcceptOrders;

function initAcceptedOrdersList() {
    listAcceptOrders = myApp.virtualList('.lstacceptedorders', {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 105,
        template: '<li class="accordion-item item_{{reference}}"><a href="#" onclick="showAccordionOrderDetail(' + "'{{reference}}'" + ');" class="item-content">' +
            '<div class="item-inner">' +
            '<div class="item-title-row">' +
            '<div class="item-title"><b>{{reference}} | {{pcfirstname}} {{pclastname}}</b></div>' +
            '<div class="item-after"><b>TOTAL:{{total_paid_tax_incl}}<br> VERSAND:{{total_shipping_tax_incl}}</b></div>' +
            '</div>' +
            '<div class="item-subtitle">{{order_date_add}}</div>' +
            '<div class="item-text">{{address1}} {{address2}} {{postcode}} {{city}} {{phone}} {{phone_mobile}} {{vat_number}}</div>' +
            '</div>' +
            '</a>' +
            '<div class="accordion-item-content">' +
            '<div class="lstorderdetail_{{reference}} cards-list list-block virtual-list">' +

            '</div>' +
            '</div>' +
            '</li>'
    });
}

var listRejectedOrders;

function initRejectedOrdersList() {
    listRejectedOrders = myApp.virtualList('.lstrejectedorders', {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 105,
        template: '<li class="accordion-item item_{{reference}}"><a href="#" onclick="showAccordionOrderDetail(' + "'{{reference}}'" + ');" class="item-content">' +
            '<div class="item-inner">' +
            '<div class="item-title-row">' +
            '<div class="item-title"><b>{{reference}} | {{pcfirstname}} {{pclastname}}</b></div>' +
            '<div class="item-after"><b>TOTAL:{{total_paid_tax_incl}}<br> VERSAND:{{total_shipping_tax_incl}}</b></div>' +
            '</div>' +
            '<div class="item-subtitle">{{order_date_add}}</div>' +
            '<div class="item-text">{{address1}} {{address2}} {{postcode}} {{city}} {{phone}} {{phone_mobile}} {{vat_number}}</div>' +
            '</div>' +
            '</a>' +
            '<div class="accordion-item-content">' +
            '<div class="lstorderdetail_{{reference}} cards-list list-block virtual-list">' +

            '</div>' +
            '</div>' +
            '</li>'
    });
}


var AccordionOrderDetailList;

function initAccordionOrderDetailList(reference) {
    AccordionOrderDetailList = myApp.virtualList('.lstorderdetail_' + reference, {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 160,
        template: '<li class="card">' +
            '<div class="card-header color-orange"><b>{{product_name}}</b></div>' +
            '<div class="card-content">' +
            '<div class="card-content-inner">' +
            '<b>Menge:</b> {{product_quantity}} <br>' +
            '<b>Preis:</b> {{product_price}} <br>' +
            '<b>Gewicht:</b> {{product_weight}} <br>' +
            '</div>' +
            '</div>' +
            '<div class="card-footer">{{date_add}}</div>' +
            '</li>'
    });
}


var accordionOrderDetailListResult = null;

function showAccordionOrderDetail(reference) {

    var pswd = window.localStorage.getItem("password");
    var email = window.localStorage.getItem("useremail");
    var uname = window.localStorage.getItem("username");

    accordionOrderDetailListResult = getOrderDetails(reference, email, pswd, uname);
    initAccordionOrderDetailList(reference);
    AccordionOrderDetailList.items = accordionOrderDetailListResult;
    AccordionOrderDetailList.update();

    myApp.accordionToggle('.item_' + reference);
}