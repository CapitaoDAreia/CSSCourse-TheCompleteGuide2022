# Hardware Pixel VS Software Pixel

- Existem diferenças e gaps de conversão entre os pixels da tela de um dispositivo
e os pixels que determinamos e manipulamos no CSS.
- As duas distinções são denominadas Hardware Pixel e Software Pixel.
- Basicamente, um dispositivo possui medidas de tela em Hardware Pixel.
- A conversão para Software Pixel se dá baseada em um Pixel Ratio. Veja:
- https://www.mydevice.io/
- Para adaptar esse comportamento e flexibilizá-lo em nosso código, podemos utilizar uma metatag:
-          <meta name="viewport" content="width=device-width, initial-scale=1.0">
- A metatag acima faz o ajuste de pixels baseado no Pixel Ratio.
- name="viewport" essa parte da tag permite-nos informar ao navegador que a tag se refere à viewport
- content="width=device-width, com essa parte informamos ao navegador que é necessária a conversão baseada em pixel ratio
- initial-scale=1.0" e aqui informamos ao navegador que o nosso nível de zoom será o nível padrão