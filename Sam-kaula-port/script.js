const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener('click', () => {
  // Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  // Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// Add event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Check if navigation is open on small screens
    if (window.innerWidth < 768 && navLinks.classList.contains("open")) {
      // Hide the navigation bar
      navLinks.classList.remove("open");
      links.forEach(link => {
        link.classList.remove("fade");
      });
      hamburger.classList.remove("toggle");
    }
  });
});


/**************************************************typing text *******************************************/
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


  // ================ Send Email========================

  function subform() {
                      let name = document.getElementById("name").value;
                      let email = document.getElementById("email").value;
                      let number = document.getElementById("number").value;
                      let message = document.getElementById("message").value;
                  
                      // Form validation
                      let isError = false;
                  
                      if (name === "" || email === "" || number === "" || message === "") {
                        alert("Please fill in all fields");
                        isError = true;
                      }
                  
                      // Name validation
                      if (!/^[a-zA-Z\s]+$/.test(name)) {
                        alert("Please enter letters only for the name");
                        isError = true;
                      }
                  
                      // Number validation
                      if (!/^\d{10}$/.test(number)) {
                        alert("Please enter a 10-digit number for the contact number");
                        isError = true;
                      }
                  
                      if (isError) {
                        return;
                      }
                  
                      let body =
                        "Name: " +
                        name +
                        "<br/>Email: " +
                        email +
                        "<br/>Contact Number: " +
                        number +
                        "<br/>Message: " +
                        message;
                  
                      Email.send({
                        SecureToken: "6b65b3ca-959d-4361-ad4e-eadc9fa44248",
                        To: "samkelisiwe547@gmail.com",
                        From: "samkelisiwe547@gmail.com",
                        Subject: "Message From Contact Form",
                        Body: body,
                      }).then(function (message) {
                        alert("Thank you for contacting us. We will get back to you as soon as possible.");
                      });
                    }








