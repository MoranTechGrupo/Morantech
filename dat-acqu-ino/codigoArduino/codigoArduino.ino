#include "DHT.h"
#define dht_type DHT11  //define qual o tipo de sensor DHTxx que se está
/**
* Configurações iniciais sobre os sensores
* DHT11, LM35, LDR5 e TCRT5000
*/
int dht_pin = A0;
DHT dht_1 = DHT(dht_pin, dht_type);  //pode-se configurar diversos
float temperatura;
int switch_pin = 7;
void setup() {
  Serial.begin(9600);
  dht_1.begin();
  pinMode(switch_pin, INPUT);
}

void loop() {


  float umidade = dht_1.readHumidity();
  float temperatura = dht_1.readTemperature();
  int leitura = analogRead(dht_pin);

  temperatura = (5.0 / 1023) * leitura * 1;
  float temperaturaReal = (1.01 * temperatura) + 5.9;
  umidade = (5.0 / 1023) * leitura * 1;
  float umidadeReal = (0.11 * umidade) + 84.6;

  float umidade1;
  float temperatura1;
  float umidade2;
  float temperatura2;
  float umidade3;
  float temperatura3;
  float umidade4;
  float temperatura4;
  float umidade5;
  float temperatura5;

  if (isnan(temperatura) or isnan(umidade)) {
    Serial.println("Erro ao ler o DHT");
  } else {



    temperatura1 = temperaturaReal;
    umidade1 = umidadeReal;
    temperatura2 = temperaturaReal*1.05;
    umidade2 = umidadeReal*1.05;
    temperatura3 = temperaturaReal*0.55;
    umidade3 = umidadeReal*1.15;
    temperatura4 = temperaturaReal*1.25;
    umidade4 = umidadeReal*1.05;
    temperatura5 = temperaturaReal*0.25;
    umidade5 = umidadeReal*0.85;

    Serial.print(temperatura1);
    Serial.print(";");
    Serial.print(umidade1);
    Serial.print(";");
    Serial.print(temperatura2);
    Serial.print(";");
    Serial.print(umidade2);
    Serial.print(";");
    Serial.print(temperatura3);
    Serial.print(";");
    Serial.print(umidade3);
    Serial.print(";");
    Serial.print(temperatura4);
    Serial.print(";");
    Serial.print(umidade4);
    Serial.print(";");
    Serial.print(temperatura5);
    Serial.print(";");
    Serial.println(umidade5);

  }
  delay(2000);
}
