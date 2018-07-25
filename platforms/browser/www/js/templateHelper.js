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
            '<div class="item-title">{{reference}}</div>' +
            '<div class="item-after">{{date_add}}</div>' +
            '</div>' +
            '<div class="item-subtitle">New messages from John Doe</div>' +
            '<div class="item-text color-white">Lorem ipsum dolor sit amet...</div>' +
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
            '<div class="card-header">{{product_name}}</div>' +
            '<div class="card-content">' +
            '<div class="card-content-inner">Card content</div>' +
            '</div>' +
            '<div class="card-footer">Card footer</div>' +
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
        template: '<li>' +
            '<a href="#" onclick="showOrderDetail(' + "'{{reference}}'" + ');" class="item-link item-content">' +
            '<div class="item-inner">' +
            '<div class="item-title-row">' +
            '<div class="item-title">{{reference}}</div>' +
            '<div class="item-after">{{date_add}}</div>' +
            '</div>' +
            '<div class="item-subtitle">New messages from John Doe</div>' +
            '<div class="item-text color-white">Lorem ipsum dolor sit amet...</div>' +
            '</div>' +
            '</a>' +
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
        template: '<li class="accordion-item"><a href="#"  class="item-content item-link">' +
            '<div class="item-inner">' +
            '<div class="item-title-row">' +
            '<div class="item-title">{{reference}}</div>' +
            '<div class="item-after">{{date_add}}</div>' +
            '</div>' +
            '<div class="item-subtitle">New messages from John Doe</div>' +
            '<div class="item-text color-white">Lorem ipsum dolor sit amet...</div>' +
            '</div>' +
            '</a>' +
            '<div class="accordion-item-content">' +
            '<div class="list-block card-list">' +
            '<ul>' +
            '<li class="card bg-green">' +
            '<div class="card-header">sadsad</div>' +
            '<div class="card-content">' +
            '<div class="card-content-inner">Card content</div>' +
            '</div>' +
            '<div class="card-footer">Card footer</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</li>'
    });
}