#include "DHT.h"
#define dht_type DHT11 //define qual o tipo de sensor DHTxx que se está

/**
* Configurações iniciais sobre os sensores
* DHT11, LM35, LDR5 e TCRT5000
*/
int dht_pin = A0;
DHT dht_1 = DHT(dht_pin, dht_type); //pode-se configurar diversos

float temperatura;
void setup()
{

Serial.begin(9600);
dht_1.begin();
}
void loop()
{
/**
* Bloco do DHT11
*/
float umidade = dht_1.readHumidity();
float temperatura = dht_1.readTemperature();

int leitura = analogRead(dht_pin);

temperatura = (5.0 / 1023) * leitura * 1;
float temperaturaReal = (1.01 * temperatura) + 5.9;

umidade = (5.0 / 1023) * leitura * 1;
float umidadeReal = (0.11 * umidade) + 84.6;

if (isnan(temperatura) or isnan(umidade))
{
Serial.println("Erro ao ler o DHT");
}
else
{
Serial.print(umidadeReal);
Serial.print(";");
Serial.println(temperaturaReal);
//Serial.println(";");
}
delay(3000);
}
