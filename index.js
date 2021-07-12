let sumAmount = 0;
const ingredients = [];

let lala = document.getElementById("container-2").childNodes.forEach(c => {
    if (c.nodeName === "DIV" && c.id.indexOf("Brade") === -1) { 
        const obj = { 'name': c.id, 'count': 0 };
        ingredients.push(obj);
    }
});

function addAmount() {
    let sum = sumAmount + 20;
    document.getElementById('insertAmount').innerHTML = sum;
}

function removeAmount() {
    let sum = sumAmount + 20;
    document.getElementById('insertAmount').innerHTML = sum;
}


function replaceAddMethods(vegetable) {
    removeAmount();
    vegetable = vegetable.split("add")[1].toLowerCase();
    ingredients.forEach(ingredient => {
        if (ingredient.name === vegetable) {
            if (ingredient.name === "meat") {
                if (ingredient.count === 1) {
                    alert("Max hamburgers are 2");
                    return;
                }
                else {
                    createDiv(vegetable);
                    ingredient.count++;
                    sumAmount = sumAmount + 5;
                    
                }
            }
            else if (ingredient.count < 3) {
                createDiv(vegetable);
                ingredient.count++;
                sumAmount = sumAmount + 5;
                
            }
            else
                alert("You cannot add another ingredient (Max is 3)");
        }
        
    })
}
function createDiv(vegetable) {
    let div = document.createElement("div");
    div.setAttribute('id', vegetable + '2');
    div.innerHTML = '.';
    document.getElementById(vegetable).appendChild(div);

}


function replaceRemoveMethods(vegetable) {
    removeAmount();
    vegetable = vegetable.split("delete")[1].toLowerCase();
    if (document.getElementById(vegetable + '2') != null) {
        ingredients.forEach(i => {
            if (i.name === vegetable) {
                document.getElementById(vegetable + '2').remove();
                i.count--;
                sumAmount = sumAmount - 5;
            }
        });
        removeAmount();
    }
}



let countCola = 0;

function addCola() {
    let btnCola = document.getElementById("addCola");
    btnCola.onclick = function () {
        if (countCola < 1) {
            countCola++;
            console.log('count + cola: ' + countCola);
            sumAmount = sumAmount + 8;
            const img = document.createElement("IMG");
            img.setAttribute('id', 'imageCola');
            img.src = "cola.jpeg";
            document.getElementById('Cola').appendChild(img);
            addAmount();
        } else {
            alert('cannot add more the 1 Cola');
        }
    }
}

function removeCola() {
    if (document.getElementById('imageCola') != null) {
        let btnCola = document.getElementById("deleteCola");
        btnCola.onclick = function () {
            if (countCola > 0) {
                countCola--;
                console.log('count - Cola: ' + countCola);
                const img = document.querySelector("img");
                img.remove();
                sumAmount = sumAmount - 8;
                removeAmount();
            } else {
                alert(' no cola added ');
            }
        }

    } else {
        alert('no Cola added.. :)');
    }
}




let counterCheckBox = 0;
function countAmountOrder() {
    let btnCheck = document.getElementById('amountButton');
    btnCheck.onclick = function () {
        if (counterCheckBox <= 0) {
            counterCheckBox++;
            console.log('count + CheckBox: ' + counterCheckBox);

            let sum = sumAmount + 20;
            document.getElementById('insertAmount').innerHTML = sum;
            console.log(sum)
            let div = document.getElementById('detailsEmpty');
            div.setAttribute('id', 'detailsPayment');
            let h2 = document.createElement('h2');
            h2.setAttribute('id', 'paymentSafe');
            let h2Text = document.createTextNode('Your Payment is Secure:');
            h2.appendChild(h2Text);
            div.appendChild(h2);
            let inputCard = document.createElement('input');
            inputCard.setAttribute('type', 'text');
            inputCard.setAttribute('id', 'cardDetails');
            inputCard.setAttribute('required', 'required');
            inputCard.setAttribute('placeholder', 'card number');
            div.appendChild(inputCard);
            let inputExpireDate = document.createElement('input');
            inputExpireDate.setAttribute('type', 'date');
            inputExpireDate.setAttribute('id', 'cardDetails');
            inputExpireDate.setAttribute('required', 'required');
            inputExpireDate.setAttribute('placeholder', 'card expire date');
            div.appendChild(inputExpireDate);
            let inputCvv = document.createElement('input');
            inputCvv.setAttribute('type', 'password');
            inputCvv.setAttribute('id', 'cardDetails');
            inputCvv.setAttribute('required', 'required');
            inputCvv.setAttribute('placeholder', 'cvv number in the back');
            div.appendChild(inputCvv);
            let form = document.createElement('form');
            let btnForm = document.createElement('button');
            form.setAttribute('action', 'index.html');
            btnForm.setAttribute('id', 'reset');
            let textSubmit = document.createTextNode('Submit');
            btnForm.appendChild(textSubmit);
            div.appendChild(form);
            form.appendChild(btnForm);
        } else if (counterCheckBox > 0) {
            counterCheckBox--;
            console.log('count - CheckBox: ' + counterCheckBox);
            let div = document.getElementById('detailsPayment');
            div.setAttribute('id', 'detailsEmpty');
            div.innerHTML = '';
            document.getElementById('insertAmount').innerHTML = '';
        }

    }
}


function resetPayment() {
    if (document.getElementById('detailsPayment') != null) {
        document.getElementById('insertAmount').innerHTML = 20;
        let div = document.getElementById('detailsPayment');
        div.setAttribute('id', 'detailsEmpty');
        div.innerHTML = '';
    }
}

