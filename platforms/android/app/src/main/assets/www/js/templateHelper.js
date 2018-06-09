var listOrders;

function initListOrders() {
    listOrders = myApp.virtualList('.lstpendingorders', {
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

function showOrderDetail(referenceNum) {

    dat = {
        'reference': referenceNum
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