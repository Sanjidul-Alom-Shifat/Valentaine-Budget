function SetinnerText(id , value) {
    document.getElementById(id).innerText = value;
}

function SetValue(id) {
    const values = document.getElementById(id);
    const value = values.value;
    values.value='';
    return parseInt(value);
}

function GetInputFieldValue(id, price) {
    const Quantityies = document.getElementById(id);
    const Quantity=Quantityies.value;
    Quantityies.value='';
    if (isNaN(Quantity)) {
        alert('Please Input Accurate Quantity Number Not A String');
        return 0;
    }
    else if (Quantity === '') {
        alert('Please Enter a Quantity For Buy');
        return 0;
    }
    else {
        return parseInt(Quantity) * price;
    } 
}

function BudgetTotal(id) {
    const BudgetElement=document.getElementById(id).innerText;
    return parseInt(BudgetElement);
}

// Total price
function TotalSingleElementPrice(id) {
    const SingleElementPrice = document.getElementById(id).innerText;
    return SingleElementPrice;
}

function TotalElementsPrice() {
    const KitkatPrice = TotalSingleElementPrice('Kitkat-Chocolate');
    const RosePrice = TotalSingleElementPrice('rose');
    const DiaryPrice = TotalSingleElementPrice('diary');
    const TotalPrice = parseInt(KitkatPrice) + parseInt(RosePrice) + parseInt(DiaryPrice);
    SetinnerText('total-price', TotalPrice);
}
// 

document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const Quantity_and_KitkatCost = GetInputFieldValue('kitkat-input-quantity', 200);
    // const KitkatCost = Quantity * 200;
    // SetinnerText('Kitkat-Chocolate', KitkatCost);
    SetinnerText('Kitkat-Chocolate', Quantity_and_KitkatCost);
    // total price
    TotalElementsPrice();
})

document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const Quantity_and_RoseCost = GetInputFieldValue('rose-input-quantity' , 100);
    // const RoseCost = Quantity * 100;
    // SetinnerText('rose', RoseCost);
    SetinnerText('rose', Quantity_and_RoseCost);
    // total price
    TotalElementsPrice();

})

document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const Quantity_and_DiaryCost = GetInputFieldValue('diary-input-quantity' , 80);
    // const DiaryCost = Quantity * 80;
    // SetinnerText('diary', DiaryCost);
    SetinnerText('diary', Quantity_and_DiaryCost);
    // total price
    TotalElementsPrice();
})

document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const PromoCodeNumber = SetValue('promo-code');
    const Total = document.getElementById('total-price').innerText;
    const TotalBudget = BudgetTotal('budget-total');

    if (Total <= TotalBudget) {

        if (PromoCodeNumber === 101) {
            const Sum = Total - parseInt(Total) * 0.1;
            SetinnerText('all-total', Sum);
        }
        else if (PromoCodeNumber === 100) {
            SetinnerText('all-total', Total);
        }
        else {
            alert('Read the placeholder');
        }
    }
    else {
        alert('Your Total Amount is greater than your budget');
    }
})

