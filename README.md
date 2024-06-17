# Projeto: Software de palpites sobre o tema Formula E

**Link do projeto em funcionamento:** [Link do projeto](https://www.tinkercad.com/things/jr9rYY468oh-amazing-uusam-bombul/editel?sharecode=IYugaOtSEZ2ZWKNj-zC7pL3EQM2h9QhiCW7uwCZaLnE)

Este projeto utiliza um sensor de temperatura analógico para monitorar a temperatura da pista de Fórmula E, fornecendo alertas visuais (LEDs) e sonoros (buzzer) para alertar sobre temperaturas fora do normal. Além disso, foi utilizado um display LCD para visualizar melhor os dados capturados e o estado do sistema. O objetivo é auxiliar na criação de melhores estratégias de corrida e na previsão de condições climáticas.

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Requisitos](#requisitos)
- [Instruções de Uso](#instruções-de-uso)
- [Instalação](#instalação)
- [Dependências](#dependências)
- [Licença](#licença)
- [Autores](#autores)

## 🚀 Descrição do Projeto

O sistema monitora a temperatura da pista utilizando um sensor de temperatura analógico e apresenta as seguintes funcionalidades:

- Exibição da temperatura em um display LCD.
- Acionamento de LEDs indicativos (Azul, Laranja e Vermelho) de acordo com a faixa de temperatura.
- Emissão de alerta sonoro através de um buzzer quando a temperatura está fora dos padrões.

## 📋 Requisitos

- Arduino (qualquer modelo compatível, no projeto foi utilizado o Arduino Uno)
- Display LCD
- Potenciômetro
- LEDs (Azul, Laranja, Vermelho)
- Buzzer
- Sensor de temperatura (analógico)
- Jumpers
- Protoboard

## ⚙️ Instruções de Uso

1. **Montagem do Circuito:**
   - Conecte o sensor de temperatura ao pino analógico A0 do Arduino.
   - Conecte o display LCD aos pinos digitais 12, 11, 7, 6, 5 e 4 do Arduino.
   - Conecte o LED Azul ao pino digital 10, o LED Laranja ao pino digital 9 e o LED Vermelho ao pino digital 8.
   - Conecte o buzzer ao pino digital 13.
   - Conecte o potenciômetro ao pino analógico A1 para ajustar o contraste do LCD.

2. **Upload do Código:**
   - Faça o upload do código fornecido para a IDE do seu Arduino.

3. **Operação:**
   - O display LCD exibirá a temperatura atual.
   - Os LEDs indicarão o estado da temperatura:
     - Azul: Se a temperatura estiver abaixo de 10°C.
     - Laranja: Se a temperatura estiver entre 10°C e 40°C.
     - Vermelho: Se a temperatura estiver acima de 40°C.
   - O buzzer será acionado quando a temperatura estiver fora dos padrões (menor que 10°C ou maior que 40°C).

## 🔧 Instalação

**Instalação da IDE:**
   - Para passar o código fornecido para seu Arduino é necessário a instalação de sua IDE! [IDE Arduino](https://www.arduino.cc/en/software).

**Instalação das Bibliotecas:**
   - Nesse projeto é necessário a instalação das bibliotecas através do Gerenciador de Bibliotecas da IDE Arduino:
     
   Para instalar essas bibliotecas, siga as etapas abaixo na IDE Arduino:
     1. Vá para **Sketch** > **Include Library** > **Manage Libraries**.
     2. Pesquise por cada instale cada biblioteca mencionada abaixo e instale.

## 📦 Dependências

O projeto necessita das seguintes bibliotecas:

- [LiquidCrystal](https://www.arduino.cc/en/Reference/LiquidCrystal)

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

🎁 Sinta-se à vontade para contribuir com melhorias e novas funcionalidades! Se você encontrar algum problema ou tiver sugestões, fique à vontade para melhorar o projeto!

---

## ✒️ Autores

* **Luiz Felipe Coelho Ramos** - *RM:555074* - [Luiz0770](https://github.com/Luiz0770)
* **Fernando Gonzales Alexandre** - *RM:555045* - [Fernando1403](https://github.com/Fernando1403)
* **Lucas Catroppa Piratininga** - *RM:555450* - [Fernando1403](https://github.com/lucasdias0812)
* **Caio Bucciarelli** - *RM:554899* - [CaioBucciarelli](https://github.com/CaioBucciarelli)
* **Vitor Musolino Teixeira** - *RM:555012* - [Vitormusolino](https://github.com/vitormusolino)
