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
            '<div class="item-title"><b>{{reference}} | {{pcfirstname}} {{pclastname}}</b></div>' +
            '<div class="item-after"><b><span class="large badge color-blue">TOTAL : {{total_paid_tax_incl}} €</span><br><span class="medium badge"> VERSAND : {{total_shipping_tax_incl}} €</span></b></div>' +
            '</div>' +
            '<div class="item-subtitle">{{order_date_add}}</div>' +
            '<div class="item-text">{{address1}} {{address2}} {{postcode}} {{city}} {{phone}} {{phone_mobile}} {{vat_number}}</div>' +
            '</div>' +
            '</a>' +
            '</li>',
        onItemBeforeInsert: function(list, item) {

            var orderDate = Date.parse(item.childNodes["0"].childNodes["0"].childNodes["1"].innerText);

            var now = moment(new Date()); //todays date
            var orderTime = moment(new Date(orderDate)); // another date
            var duration = moment.duration(now.diff(orderTime));
            var mins = duration.asMinutes();

            if (mins <= 20) {
                $$(item).addClass("bg-green");
            } else if (20 < mins && mins <= 40) {
                $$(item).addClass("bg-yellow");
            } else {
                $$(item).addClass("bg-red");
            }
            /*
            var timer = '<br><span class="large badge color-blue">Verbleibende Zeit :' + mins + '</span>';
            var txt = document.createElement("div");
            txt.innerHTML = timer;
            item.childNodes["0"].childNodes["0"].childNodes["0"].childNodes["1"].append(txt);
             */

        }
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
        height: 200,
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
            '<div class="item-title color-green" ><b>{{reference}} | {{pcfirstname}} {{pclastname}}</b></div>' +
            '<div class="item-after"><b><span class="large badge color-blue">TOTAL : {{total_paid_tax_incl}} €</span><br><span class="medium badge"> VERSAND : {{total_shipping_tax_incl}} €</span></b></div>' +
            '</div>' +
            '<div class="item-subtitle color-green">{{order_date_add}}</div>' +
            '<div class="item-text">{{address1}} {{address2}} {{postcode}} {{city}} {{phone}} {{phone_mobile}} {{vat_number}}</div>' +
            '</div>' +
            '</a>' +
            '<div class="accordion-item-content">' +
            '<div style="margin-top:2% !important;" class="lstorderdetail_{{reference}} cards-list list-block virtual-list">' +

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
            '<div class="item-title color-red"><b>{{reference}} | {{pcfirstname}} {{pclastname}}</b></div>' +
            '<div class="item-after"><b><span class="large badge color-blue">TOTAL : {{total_paid_tax_incl}} €</span><br><span class="medium badge"> VERSAND : {{total_shipping_tax_incl}} €</span></b></div>' +
            '</div>' +
            '<div class="item-subtitle color-red">{{order_date_add}}</div>' +
            '<div class="item-text">{{address1}} {{address2}} {{postcode}} {{city}} {{phone}} {{phone_mobile}} {{vat_number}}</div>' +
            '</div>' +
            '</a>' +
            '<div class="accordion-item-content">' +
            '<div style="margin-top:2% !important;" class="lstorderdetail_{{reference}} cards-list list-block virtual-list">' +

            '</div>' +
            '</div>' +
            '</li>'
    });
}

var listCiro;

function initListCiro() {
    listCiro = myApp.virtualList('.lstciro', {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 105,
        template: '<li class="accordion-item item_ciro_{{reference}}"><a href="#" onclick="showCiroOrderDetail(' + "'{{reference}}'" + ');" class="item-content">' +
            '<div class="item-inner">' +
            '<div class="item-title-row">' +
            '<div class="item-title"><b>{{reference}} | {{pcfirstname}} {{pclastname}}</b></div>' +
            '<div class="item-after"><b><span class="large badge color-blue">TOTAL : {{total_paid_tax_incl}} €</span><br><span class="medium badge"> VERSAND : {{total_shipping_tax_incl}} €</span></b></div>' +
            '</div>' +
            '<div class="item-subtitle">{{order_date_add}}</div>' +
            '<div class="item-text">{{address1}} {{address2}} {{postcode}} {{city}} {{phone}} {{phone_mobile}} {{vat_number}}</div>' +
            '</div>' +
            '</a>' +
            '<div class="accordion-item-content">' +
            '<div style="margin-top:2% !important;" class="lstcirodetail_{{reference}} cards-list list-block virtual-list">' +

            '</div>' +
            '</div>' +
            '</li>'
    });
}

var CiroDetailList;

function initCiroDetailList(reference) {
    CiroDetailList = myApp.virtualList('.lstcirodetail_' + reference, {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 200,
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


var AccordionOrderDetailList;

function initAccordionOrderDetailList(reference) {
    AccordionOrderDetailList = myApp.virtualList('.lstorderdetail_' + reference, {
        items: [],
        rowsBefore: 100,
        rowsAfter: 100,
        height: 200,
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

var ciroDetailListResult = null;

function showCiroOrderDetail(reference) {

    var pswd = window.localStorage.getItem("password");
    var email = window.localStorage.getItem("useremail");
    var uname = window.localStorage.getItem("username");

    ciroDetailListResult = getOrderDetails(reference, email, pswd, uname);
    initCiroDetailList(reference);
    CiroDetailList.items = ciroDetailListResult;
    CiroDetailList.update();

    myApp.accordionToggle('.item_ciro_' + reference);
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