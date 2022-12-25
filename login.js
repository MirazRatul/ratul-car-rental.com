const firebaseConfig = {
     apiKey: "AIzaSyCMwW_uEMdmEkbo_nYFcNehvi2kZmmXUY0",
     authDomain: "contactform-6142f.firebaseapp.com",
     databaseURL: "https://contactform-6142f-default-rtdb.firebaseio.com",
     projectId: "contactform-6142f",
     storageBucket: "contactform-6142f.appspot.com",
     messagingSenderId: "796441154768",
     appId: "1:796441154768:web:6477445ab1e09221f3bad5"
   };
   
  //  // initialize firebase
  //  firebase.initializeApp(firebaseConfig);
   
  //  // reference your database
  //  var contactFormDB = firebase.database().ref("contactForm");
   
  //  document.getElementById("contactForm").addEventListener("submit", submitForm);
   
  //  function submitForm(e) {
  //    e.preventDefault();
   
  //    var name = getElementVal("name");
  //    var emailid = getElementVal("emailid");
  //    var msgContent = getElementVal("msgContent");
   
  //    saveMessages(name, emailid, msgContent);
   
  //    //   enable alert
  //    document.querySelector(".alert").style.display = "block";
   
  //    //   remove the alert
  //    setTimeout(() => {
  //      document.querySelector(".alert").style.display = "none";
  //    }, 3000);
   
  //    //   reset the form
  //    document.getElementById("contactForm").reset();
  //  }

   
  //  const saveMessages = (name, emailid, msgContent) => {
  //    var newContactForm = contactFormDB.push();
   
  //    newContactForm.set({
  //      name: name,
  //      emailid: emailid,
  //      msgContent: msgContent,
  //    });
  //  };
   
  //  const getElementVal = (id) => {
  //    return document.getElementById(id).value;
  //  };
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.then((result) => {
      window.location.href = "http://127.0.0.1:5500/index.html"
    })
    promise.catch((error) => {
      alert(error.message)
    })
    
    //promise.catch(e=> window.location.href = "http://127.0.0.1:5500/index.html");
  }
  
  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })

  //signOut

  