var num_to_guess = 681;

function Guess() {
    let guess_no = parseInt(guessnum.value);

    if (guess_no === num_to_guess) {
        msg.innerHTML = 'Вярно!';
        msg.classList.remove('wrong');
        msg.classList.add('right');
    } else if (guess_no < num_to_guess) {
        msg.innerHTML = 'Грешка!';
        msg.classList.remove('right');
        msg.classList.add('wrong');
    } else if (guess_no > num_to_guess) {
        msg.innerHTML = 'Грешка!';
        msg.classList.remove('right');
        msg.classList.add('wrong');
    }
}

    var num_to_guess1 = 864;

    function Guess1() {
        let guess_no = parseInt(guessnum1.value);

        if (guess_no === num_to_guess1) {
            msg1.innerHTML = 'Вярно!';
            msg1.classList.remove('wrong');
            msg1.classList.add('right');
        } else if (guess_no < num_to_guess1) {
            msg1.innerHTML = 'Грешка!';
            msg1.classList.remove('right');
            msg1.classList.add('wrong');
        } else if (guess_no > num_to_guess1) {
            msg1.innerHTML = 'Грешка!';
            msg1.classList.remove('right');
            msg1.classList.add('wrong');
        }
    }

    var num_to_guess2 = 1837;

    function Guess2() {
        let guess_no = parseInt(guessnum2.value);

        if (guess_no === num_to_guess2) {
            msg2.innerHTML = 'Вярно!';
            msg2.classList.remove('wrong');
            msg2.classList.add('right');
        } else if (guess_no < num_to_guess2) {
            msg2.innerHTML = 'Грешка!';
            msg2.classList.remove('right');
            msg2.classList.add('wrong');
        } else if (guess_no > num_to_guess2) {
            msg2.innerHTML = 'Грешка!';
            msg2.classList.remove('right');
            msg2.classList.add('wrong');
        }
    }

    var num_to_guess3 = 1876 ;

    function Guess3() {
        let guess_no = parseInt(guessnum3.value);

        if (guess_no === num_to_guess3) {
            msg3.innerHTML = 'Вярно!';
            msg3.classList.remove('wrong');
            msg3.classList.add('right');
        } else if (guess_no < num_to_guess3) {
            msg3.innerHTML = 'Грешка!';
            msg3.classList.remove('right');
            msg3.classList.add('wrong');
        } else if (guess_no > num_to_guess3) {
            msg3.innerHTML = 'Грешка!';
            msg3.classList.remove('right');
            msg3.classList.add('wrong');
        }
    }


    var num_to_guess4 = 1944 ;

    function Guess4() {
        let guess_no = parseInt(guessnum4.value);

        if (guess_no === num_to_guess4) {
            msg4.innerHTML = 'Вярно!';
            msg4.classList.remove('wrong');
            msg4.classList.add('right');
        } else if (guess_no < num_to_guess4) {
            msg4.innerHTML = 'Грешка!';
            msg4.classList.remove('right');
            msg4.classList.add('wrong');
        } else if (guess_no > num_to_guess4) {
            msg4.innerHTML = 'Грешка!';
            msg4.classList.remove('right');
            msg4.classList.add('wrong');
        }
    }

    function Button() {
        var x = document.getElementById("table");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button1() {
        var x = document.getElementById("table1");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button2() {
        var x = document.getElementById("table2");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button3() {
        var x = document.getElementById("table3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button4() {
        var x = document.getElementById("table4");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button5() {
        var x = document.getElementById("table5");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button6() {
        var x = document.getElementById("table6");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button7() {
        var x = document.getElementById("table7");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function Button8() {
        var x = document.getElementById("table8");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }