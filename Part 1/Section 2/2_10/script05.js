let message1;

if (login1 == 'Employee') {
  message1 = 'Hello';
} else if (login1 == 'Director') {
  message1 = 'Greetings';
} else if (login1 == '') {
  message1 = 'No login';
} else {
  message1 = '';
}

let message2 = (login2 == 'Employee') ? 'Hello' :
    (login2 == 'Director') ? 'Greetings' :
    (login2 == '') ? 'No login' :
    '';