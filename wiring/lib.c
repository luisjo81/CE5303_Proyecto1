#include "lib.h"
#include <wiringPi.h>

#define BANO 21
#define COME 22
#define COCI 23
#define H2 24
#define H1 25
#define SALA 26

wiringPiSetup();
pinMode(BANO, OUTPUT);
pinMode(COME, OUTPUT);
pinMode(COCI, OUTPUT);
pinMode(H2, OUTPUT);
pinMode(H1, OUTPUT);
pinMode(SALA, OUTPUT);

void luzBano(int l){
    
    if (l == 0){
        digitalWrite(BANO, LOW);
    }
    else{
        digitalWrite(BANO, HIGH);
    }
    
}

void luzComedor(int l){
    
    if (l == 0){
        digitalWrite(COME, LOW);
    }
    else{
        digitalWrite(COME, HIGH);
    }
    
}

void luzCocina(int l){
    
    if (l == 0){
        digitalWrite(COCI, LOW);
    }
    else{
        digitalWrite(COCI, HIGH);
    }
    
}

void luzH2(int l){
    
    if (l == 0){
        digitalWrite(H2, LOW);
    }
    else{
        digitalWrite(H2, HIGH);
    }
    
}

void luzH1(int l){
    
    if (l == 0){
        digitalWrite(H1, LOW);
    }
    else{
        digitalWrite(H1, HIGH);
    }
    
}

void luzSala(int l){
    
    if (l == 0){
        digitalWrite(SALA, LOW);
    }
    else{
        digitalWrite(SALA, HIGH);
    }
    
}