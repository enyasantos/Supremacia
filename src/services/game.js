import concelheiro from '../assets/images/people.png';
import bruxo from '../assets/images/wizard.png';
import executador from '../assets/images/executioner.png';
import padre from '../assets/images/avata.png';
import cavalheiro from '../assets/images/avatar.png';
import mago from '../assets/images/wizard2.png';
import soldado from '../assets/images/soldier.png';
import rainha from '../assets/images/queen.png';

export const frases = [
    ['Estamos sem água no momento. Deveríamos contruir uma barragem?'],
    ['Teremos uma grande festa com um belo banquete, devemos deixar aberto ao povo?'],
    ['Há muitas pessoas para serem executadas! Preciso da ajuda do exército.'],
    ['Nossas estradas estão perigosas para viajantes. Deveriamos aumentar a segurança?'],
    ['Os seus soldados estão cobrando a igreja em troca de proteção. Faça-os parar!'],
    ['O povo está reclamando dos valores dos impostos, o que devemos fazer?'],
    ['Sua defesa está muito fraca. Sugiro a contrução de uma torre.'],
    ['Há novos povos cruzando a fronteira do reino. O que devemos fazer?'],
    ['O salário dos soldados está muito baixo. Pague-os o suficiente regularmente'],
    ['Gostaria de se casar com uma jovem pricesa de um reino vizinho?'],
    ['O povo passa, fome senhor. O preço do pão está alto dmais.'],
];

export const opcoes = [
    ['Sim', 'Não'],
    ['Sim', 'Não'],
    ['Sim', 'Não'],
    ['Sim', 'Não'],
    ['Sim', 'Não'],
    ['Diminuit os impostos', 'Não posso fazer nada'],
    ['Sim', 'Não'],
    ['Feche as fonteiras', 'Dê boas-vindas a eles'],
    ['Sim', 'Não'],
    ['Sim', 'Não'],
    ['Reduzir em 50%', 'Não posso fazer nada'],
    
];
// EXERCITO IGREJA POVO DINHEIRO
export const consequencias = [
    [[0, 0, +5, -5] , [0, 0, -5, 0]],
    [[+5, +5, +5, -5] , [+5, +5, 0, +5]],
    [[-5, 0, +5, 0] , [0, 0, -5, 0]],
    [[-5, +5, 0, 0] , [0, -5, 0, 0]],
    [[0, -5, +5, -5] , [0, +5, -5, +5]],
    [[+5, 0, 0, -5] , [-5, 0, -5, 0]],
    [[+5, 0, 0, -5] , [-5, 0, -5, +5]],
    [[+5, -5, 0, -5] , [-5, 0, 0, 0]],
    [[+5, +5, +5, +5] , [-5, 0, 0, -5]],
    [[0, 0, +5, -5] , [0, 0, -5, 0]],
]

export const personagens = [
    [concelheiro],
    [bruxo],
    [executador],
    [concelheiro],
    [padre],
    [cavalheiro],
    [mago],
    [soldado],
    [rainha],
    [concelheiro],
];

export const personagensNomes = [
    ['Conselheiro do rei'],
    ['Bruxo'],
    ['Executador'],
    ['Conselheiro do rei'],
    ['Padre'],
    ['Caveleiro'],
    ['Mago'],
    ['Soldado'],
    ['Rainha de Ilho'],
    ['Conselheiro do rei'],
];

export const colorBackgound = [
    ['#808FCB'],
    ['#395238'],
    ['#0D1E3C'],
    ['#808FCB'],
    ['#570D0D'],
    ['#274C3B'],
    ['#57290D'],
    ['#48274C'],
    ['#808FCB'],
]