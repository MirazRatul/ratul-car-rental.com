const firebaseConfig = {
    apiKey: "AIzaSyCMwW_uEMdmEkbo_nYFcNehvi2kZmmXUY0",
    authDomain: "contactform-6142f.firebaseapp.com",
    databaseURL: "https://contactform-6142f-default-rtdb.firebaseio.com",
    projectId: "contactform-6142f",
    storageBucket: "contactform-6142f.appspot.com",
    messagingSenderId: "796441154768",
    appId: "1:796441154768:web:6477445ab1e09221f3bad5"
  };

  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};