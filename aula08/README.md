# cursoJS
 cursoJS com Curso em Vídeo

 Operadores Relacionais o resultado será verdadeiro ou falso 

 Menor <
 Maior >
 Menor igual<=
 Maior igual =>
 Igual ==
 Diferente !=
 Identico ===

 Quando tiver operadores aritimético e relacionais 
 primeiro será o calculo aritmético 

 Operadores de Identidade 

 5 == 5 true
 5 == '5' true mesmo sendo string
 5 === '5' false , identico para verificar pode usar typeof
 5 === 5 true

 Lógicos 

 Negação !
 Conjução &&
 Disjunção ||

 Negação 

 Não é verdade então é falso 
 ! true false 
 ! false true 

 Conjução 
 só vai ser true se os dois forem treu

true && true >>>  true verdade
true && false >>>  false falso
false && true >>>  false falso
false && false >>>  false falso

Disjução 
só vai ser falso se os dois forem falso 

true || true >>>  true verdade
true || false >>>  true verdade
false || true >>>  true verdade
false || false >>>  false falso

exemplo 

idade >= 15 && idade <= 17 A idade está entre 15 e 17

Precedência Lógicos
operadores 
!
&&
||


Operadores Trenário 

?
:

se a méda do aluno for 5
teste ? true : false 
média >= 7 ? "Aprovado" : false 


var x = 8
var res = x % 2 == 0 ? 5 : 9
res será igual a 5, pq x % 2 é igual a true


var idade = 19
var r = idade>= 18 ? 'Maior' : 'Menor'
o resultado de r será 'Maior'