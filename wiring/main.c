#include <stdio.h>
#include <wiringPi.h>

int main(int argc, char *argv[]) {
    
    luzBano(1);
    delay(500);
    luzCocina(1);
    delay(500);
    luzComedor(1);
    delay(500);
    luzH1(1);
    delay(500);
    luzH2(1);
    delay(500);
    luzSala(1);
    delay(500);

    luzBano(0);
    delay(500);
    luzCocina(0);
    delay(500);
    luzComedor(0);
    delay(500);
    luzH1(0);
    delay(500);
    luzH2(0);
    delay(500);
    luzSala(0);
  




    return 0;
}

