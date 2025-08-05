let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generateDomains() {
  const list = document.getElementById('domainList');
  list.innerHTML = ''; // Limpiar lista anterior

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let domain = p + a + n + '.com';
        console.log(domain);

        let li = document.createElement('li');
        li.textContent = domain;
        list.appendChild(li);
      }
    }
  }
}

document.getElementById('generate').addEventListener('click', generateDomains);
