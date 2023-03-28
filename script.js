$(".typeThis").html("<h1>&nbsp;</h1>");

jkH1 = "Jesper Kronholm";
jkH2 = "Graphic Designer / Web designer / Programmer";
jkH1 = jkH1.split("");
jkH2 = jkH2.split("");
jkH1joined = jkH1.join("");
// jk = ["J", "e", "s", "p", "e", "r", " ", "K", "r", "o", "n", "h", "o", "l", "m"];
jkH1Length = jkH1.length;
jkH2Length = jkH2.length;
jkLength = jkH1Length+jkH2Length;
i = 1;
i2 = 1;
i3 = 1;
dashTimeout = 400;
function typeIt(i,i2) {
  if (i2 <= 2) {
    $(".typeThis").html("<h1>|</h1>");
    i2++;
    setTimeout(function() {
      $(".typeThis").html("<h1>&nbsp;</h1>");
    }, dashTimeout);
    setTimeout(function() {
      typeIt(i,i2);
    }, dashTimeout*2);
  }
  else if (i <= jkH1Length) {
    counter = 0;
    whatToType = [];
    while (counter < i) {
      whatToType.push(jkH1[counter]);
      counter++;
    }
    typeThis = whatToType.join("");
    if (i < jkH1Length) {
      $(".typeThis").html("<h1>"+typeThis+"|</h1>");
    }
    else {
      $(".typeThis").html("<h1>"+typeThis+"</h1>");
    }
    i++;
    random = Math.floor((Math.random() * 15) + 5);
    wait = random*10;
    setTimeout(function() {
      typeIt(i,i2);
    }, wait); 
  }
  else if (i <= jkLength) {
    counter = 0;
    whatToType = [];
    while (counter < i3) {
      whatToType.push(jkH2[counter]);
      counter++;
    }
    typeThis = whatToType.join("");
    if (i3 < jkH2Length) {
      $(".typeThis").html("<h1>"+jkH1joined+"</h1><h2>"+typeThis+"|</h2>");
    }
    else {
      $(".typeThis").html("<h1>"+jkH1joined+"</h1><h2>"+typeThis+"</h2>");
    }
    i3++;
    i++;
    random = Math.floor((Math.random() * 8) + 1);
    wait = random*10;
    setTimeout(function() {
      typeIt(i,i2);
    }, wait); 
  }
  else {
    setTimeout(function() {
      $(".jesperkronholm.li").toggleClass("slideIn");
    }, 100); 
    setTimeout(function() {
      $(".dot").toggleClass("animate");
    }, 200); 
    setTimeout(function() {
      $(".mainContent").toggleClass("boxed");
      $(".copyright").toggleClass("display");
      $(".reload").toggleClass("display");
    }, 750); 
  }

}
setTimeout(function() {
  $(".jesperkronholm.img").toggleClass("min");
}, 500);
setTimeout(function() {
  typeIt(i,i2);
}, 1200);