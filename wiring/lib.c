#include "lib.h"
#include <wiringPi.h>

#define BANO 21
#define COME 22
#define COCI 23
#define H2 24
#define H1 25
#define SALA 26

#define DBANO 1
#define DTERRAZA 2
#define DH2 3
#define DH1 4
#define DSALA 5

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

int Dbano(){   
    return digitalRead(DBANO);   
}

void Dterraza(int l){   
    return digitalRead(DTERRAZA);   
}

void DH1(int l){   
    return digitalRead(DH1);   
}

void DH2(int l){   
    return digitalRead(DH2);   
}

void Dsala(int l){   
    return digitalRead(DSALA);   
}