var domains = ['gmail.com', 'aol.com', 'outlook.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", "br"];

// var superStringDistance = function(string1, string2) {
//   // a string distance algorithm of your choosing
// }

var campoEmail = document.querySelector('#email');
var sugestaoEmail = document.querySelector('#sugestao-email');

campoEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        // distanceFunction: superStringDistance,  // optional
        suggested: function(suggestion) {
          sugestaoEmail.style.display = 'inline-block';
          sugestaoEmail.textContent = 'Você quis dizer ' + suggestion.full + ' ?';
          campoEmail.parentNode.classList.add('contatoCampo--erro');
          campoEmail.classList.add("contatoCampo--validouErro");
          sugestaoEmail.setAttribute('tabindex', '0');
          sugestaoEmail.setAttribute('role','alert');
        },
        // empty: function() {
        //   // callback code
        // }
      });
  });