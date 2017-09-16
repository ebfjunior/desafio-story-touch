import Sonda from '../src/business/sonda.js';

it('Parâmetros atuais devem ser iguais aos iniciais ao instanciar sonda', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  expect(sonda.currentX).toBe(sonda.x);
  expect(sonda.currentY).toBe(sonda.y);
  expect(sonda.currentDirecao).toBe(sonda.direcao);
});

it('Ao girar para a direita, a direção da sonda deve ser atualizada corretamente', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  sonda.right();
  expect(sonda.currentDirecao).toBe('E');
  sonda.right();
  expect(sonda.currentDirecao).toBe('S');
  sonda.right();
  expect(sonda.currentDirecao).toBe('W');
  sonda.right();
  expect(sonda.currentDirecao).toBe('N');
});

it('Ao girar para a direita, a posição atual da sonda não deve ser alterada', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  sonda.right();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
  sonda.right();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
  sonda.right();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
  sonda.right();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
});

it('Ao girar para a esquerda, a direção da sonda deve ser atualizada corretamente', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  sonda.left();
  expect(sonda.currentDirecao).toBe('W');
  sonda.left();
  expect(sonda.currentDirecao).toBe('S');
  sonda.left();
  expect(sonda.currentDirecao).toBe('E');
  sonda.left();
  expect(sonda.currentDirecao).toBe('N');
});

it('Ao girar para a esquerda, a posição atual da sonda não deve ser alterada', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  sonda.left();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
  sonda.left();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
  sonda.left();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
  sonda.left();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);
});

it('Ao mover para a frente, a posição deve ser atualizada corretamente', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  sonda.move();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(6);
  sonda.move();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(7);
});

it('A sonda deve se mover corretamente quando a direção for N', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  sonda.move();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(6);
});

it('A sonda deve se mover corretamente quando a direção for E', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'E', comandos: 'MMMM'});
  sonda.move();
  expect(sonda.currentX).toBe(6);
  expect(sonda.currentY).toBe(5);
});

it('A sonda deve se mover corretamente quando a direção for S', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'S', comandos: 'MMMM'});
  sonda.move();
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(4);
});

it('A sonda deve se mover corretamente quando a direção for W', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'W', comandos: 'MMMM'});
  sonda.move();
  expect(sonda.currentX).toBe(4);
  expect(sonda.currentY).toBe(5);
});

it('A sonda não deve ultrapassar os limites do platô ao norte', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'N', comandos: 'MMMM'});
  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [], y: []};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);

});

it('A sonda não deve ultrapassar os limites do platô ao leste', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'E', comandos: 'MMMM'});
  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [], y: []};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(5);

});

it('A sonda não deve ultrapassar os limites do platô ao sul', () => {
  const sonda = new Sonda({x: 5, y: 0, direcao: 'S', comandos: 'MMMM'});
  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [], y: []};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(5);
  expect(sonda.currentY).toBe(0);

});

it('A sonda não deve ultrapassar os limites do platô ao oeste', () => {
  const sonda = new Sonda({x: 0, y: 0, direcao: 'W', comandos: 'MMMM'});
  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [], y: []};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(0);
  expect(sonda.currentY).toBe(0);

});

it('Uma sonda vindo do norte não deve ocupar o mesmo lugar que outra', () => {
  const sonda = new Sonda({x: 3, y: 4, direcao: 'S', comandos: 'MMMM'});

  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [3,3], y: [3,4]};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(3);
  expect(sonda.currentY).toBe(4);

});

it('Uma sonda vindo do leste não deve ocupar o mesmo lugar que outra', () => {
  const sonda = new Sonda({x: 4, y: 3, direcao: 'W', comandos: 'MMMM'});

  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [3,4], y: [3,3]};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(4);
  expect(sonda.currentY).toBe(3);

});

it('Uma sonda vindo do sul não deve ocupar o mesmo lugar que outra', () => {
  const sonda = new Sonda({x: 3, y: 2, direcao: 'N', comandos: 'MMMM'});

  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [3,3], y: [3,2]};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(3);
  expect(sonda.currentY).toBe(2);

});

it('Uma sonda vindo do oeste não deve ocupar o mesmo lugar que outra', () => {
  const sonda = new Sonda({x: 2, y: 3, direcao: 'E', comandos: 'MMMM'});

  const plato = {width: 5, height: 5};
  const coordenadas_ocupadas = {x: [3,2], y: [3,3]};

  sonda.move(plato, coordenadas_ocupadas);
  expect(sonda.currentX).toBe(2);
  expect(sonda.currentY).toBe(3);

});