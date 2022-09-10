#include <stdio.h>
#include <wiringPi.h>

#define DOOR 1
#define LED 2

#define DBANO 1
#define DTERRAZA 2
#define DH2 3
#define DH1 4
#define DSALA 5

#define LBANO 21
#define LCOME 22
#define LCOCI 23
#define LH2 24
#define LH1 25
#define LSALA 26 

int main(int argc, char *argv[]) {

    if (atoi(argv[1]) == DOOR){
        switch (atoi(argv[2]))
        {
        case DBANO:
            printf("La bano esta: %d", Dbano());
            break;

        case DTERRAZA:
            printf("La Terraza esta: %d", Dterraza());
            break;

        case DH1:
            printf("La habitacion 1 esta: %d", DH1());
            break;

        case DH2:
            printf("La habitacion 2 esta: %d", DH2());
            break;

        case DSALA:
            printf("La sala esta: %d", Dsala());
            break;
        
        default:
            printf("No se dio un pin valido");
            break;
        }
    }
    else if (atoi(argv[1]) == LED){
        switch (atoi(argv[2]))
        {
        case LBANO:
            luzBano(atoi(argv[3]));
            break;

        case LCOME:
            luzComedor(atoi(argv[3]));
            break;

        case LCOCI:
            luzCocina(atoi(argv[3]));
            break;

        case LH1:
            luzH1(atoi(argv[3]));
            break;

        case LH2:
            luzH2(atoi(argv[3]));
            break;

        case LSALA:
            luzSala(atoi(argv[3]));
            break;
        
        default:
            printf("No se dio un pin valido");
            break;
        }
    }

}