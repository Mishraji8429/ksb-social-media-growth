function sendWhatsApp(){

let username=document.getElementById("username").value;

let service=document.getElementById("service").value;

let quantity=document.getElementById("quantity").value;

let message=`Hello KSB Social Media Growth 👋

Instagram Username : ${username}

Service : ${service}

Quantity : ${quantity}

Please send me details.`;

window.open(`https://wa.me/916394723648?text=${encodeURIComponent(message)}`);

}
