
function Orders(pcdid, phourpurch, pdaypurch, pstoreid, ppricepaid, psalespersonid) {
    this.CdID = pcdid;
    this.HourPurch = phourpurch;
    this.DayPurch = pdaypurch;
    this.StoreID = pstoreid;
    this.PricePaid = ppricepaid;
    this.SalesPersonID = psalespersonid;
  }
  var ClientNotes = [];  // our local copy of the cloud data

var tCd;
var tHour;
var tDay;
var tStore;
var tPrice;
var tSales;
document.addEventListener("DOMContentLoaded", function (event) {
    var sID = document.getElementById("StoreID");
    var spID = document.getElementById("SalesPersonID");
    var cdID = document.getElementById("CdID");
    createOrder();
    sID.innerHTML = tStore;
    spID.innerHTML = tSales;
    cdID.innerHTML = tCd;

    document.getElementById("Submit-One").addEventListener("click", function () {
        tCd = cdID.innerHTML;
        tHour = Math.floor(Math.random() * 24);
        tDay = Math.floor(Math.random() * 257);
        tStore = sID.innerHTML;
        tPrice = Math.floor(Math.random() * 10 + 5);
        tSales = spID.innerHTML;
        var oneOrder = new Orders(tCd, tHour, tDay, tStore, tPrice, tSales);

        $.ajax({
            url: '/NewOrder' ,
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(oneOrder),
            success: function (result) {
                console.log("added new entry")
            }

        });
    });

    document.getElementById("Create").addEventListener("click", function () {
        createOrder();
        sID.innerHTML = tStore;
        spID.innerHTML = tSales;
        cdID.innerHTML = tCd;
    });
    document.getElementById("Submit-500").addEventListener("click", function () {
        for (var i = 0; i < 500; i++) {
            createOrder();
            tHour = Math.floor(Math.random() * 24);
            tDay = Math.floor(Math.random() * 257);
            tPrice = Math.floor(Math.random() * 10 + 5);
            var oneOrder = new Orders(tCd, tHour, tDay, tStore, tPrice, tSales);

            $.ajax({
                url: '/NewOrder',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(oneOrder),
                success: function (result) {
                    console.log("added new entry")
                }

            });
        }
    });


});

function createOrder() {
    var ordran = Math.floor(Math.random() * 24 + 1);
    tSales = ordran;
    switch (Math.ceil(ordran / 4)) {
        case 1:
            tStore = 98053;
            break;
        case 2:
            tStore = 98007;
            break;
        case 3:
            tStore = 98077;
            break;
        case 4:
            tStore = 98055;
            break;
        case 5:
            tStore = 98011;
            break;
        case 6:
            tStore = 98046;
            break;
    }

    var cdran = Math.floor(Math.random() * 10);
    switch (cdran) {
        case 0:
            tCd = 123456;
            break;
        case 1:
            tCd = 123654;
            break;
        case 2:
            tCd = 321456;
            break;
        case 3:
            tCd = 321654;
            break;
        case 4:
            tCd = 654123;
            break;
        case 5:
            tCd = 654321;
            break;
        case 6:
            tCd = 543216;
            break;
        case 7:
            tCd = 354126;
            break;
        case 8:
            tCd = 621453;
            break;
        case 9:
            tCd = 623451;
            break;
    }
}

