function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getCards() {

  return new Promise((resolve, reject) => {
    resolve(cards)
  })
}

let cards = [{
  id: 1,
  texto: '-le',
  imagenUrl: null,
  idPar: 1,
  estado: 'oculta' // 'oculta', 'jugando', 'encontrada'
}, {
  id: 2,
  texto: 'Menor o igual...',
  imagenUrl: null,
  idPar: 1,
  estado: 'oculta'
}, {
  id: 3,
  texto: 'Github',
  imagenUrl: null,
  idPar: 2,
  estado: 'oculta'
}, {
  id: 4,
  texto: null,
  imagenUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  idPar: 2,
  estado: 'oculta'
}, {
  id: 5,
  texto: '-lt',
  imagenUrl: null,
  idPar: 3,
  estado: 'oculta'
}, {
  id: 6,
  texto: 'Menor que...',
  imagenUrl: null,
  idPar: 3,
  estado: 'oculta'
}, {
  id: 7,
  texto: 'Redirección',
  imagenUrl: null,
  idPar: 4,
  estado: 'oculta'
}, {
  id: 8,
  texto: 'ls -l > /tmp/hola.tx',
  imagenUrl: null,
  idPar: 4,
  estado: 'oculta'
}, {
  id: 9,
  texto: 'Git',
  imagenUrl: null,
  idPar: 5,
  estado: 'oculta'
}, {
  id: 10,
  texto: null,
  imagenUrl: 'https://s24255.pcdn.co/wp-content/uploads/2015/02/Git.png',
  idPar: 5,
  estado: 'oculta'
}, {
  id: 11,
  texto: 'Debian',
  imagenUrl: null,
  idPar: 6,
  estado: 'oculta'
}, {
  id: 12,
  texto: null,
  imagenUrl: 'https://i.imgur.com/SY3LfLR.jpg',
  idPar: 6,
  estado: 'oculta'
}, {
  id: 13,
  texto: 'Iteradores',
  imagenUrl: null,
  idPar: 7,
  estado: 'oculta'
}, {
  id: 14,
  texto: 'while',
  imagenUrl: null,
  idPar: 7,
  estado: 'oculta'
}, {
  id: 15,
  texto: 'Sha Bang',
  imagenUrl: null,
  idPar: 8,
  estado: 'oculta'
}, {
  id: 16,
  texto: '#!/bin/bash',
  imagenUrl: null,
  idPar: 8,
  estado: 'oculta'
}, {
  id: 17,
  texto: 'Servidor SSH',
  imagenUrl: null,
  idPar: 9,
  estado: 'oculta'
}, {
  id: 18,
  texto: 'openssh-server',
  imagenUrl: null,
  idPar: 9,
  estado: 'oculta'
}, {
  id: 19,
  texto: 'Secure Copy Protocol',
  imagenUrl: null,
  idPar: 10,
  estado: 'oculta'
}, {
  id: 20,
  texto: 'scp',
  imagenUrl: null,
  idPar: 10,
  estado: 'oculta'
}, {
  id: 21,
  texto: 'chmod',
  imagenUrl: null,
  idPar: 11,
  estado: 'oculta'
}, {
  id: 22,
  texto: 'Cambiar Permisos',
  imagenUrl: null,
  idPar: 11,
  estado: 'oculta'
}, {
  id: 23,
  texto: 'Ruta relativa',
  imagenUrl: null,
  idPar: 12,
  estado: 'oculta'
}, {
  id: 24,
  texto: '../../home',
  imagenUrl: null,
  idPar: 12,
  estado: 'oculta'
}, {
  id: 25,
  texto: '/etc/zabbix',
  imagenUrl: null,
  idPar: 13,
  estado: 'oculta'
}, {
  id: 26,
  texto: 'Ruta absoluta',
  imagenUrl: null,
  idPar: 13,
  estado: 'oculta'
}, {
  id: 27,
  texto: 'CRON',
  imagenUrl: null,
  idPar: 14,
  estado: 'oculta'
}, {
  id: 28,
  texto: '20 4 * * * bash ejecutar_tarea.bash',
  imagenUrl: null,
  idPar: 14,
  estado: 'oculta'
}];

export {
  getCards
}