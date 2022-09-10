CC=gcc
CFLAGS=-Wall -g

all: lib.o lib.a lib.so main.o mainStatic mainDynamic

lib.o: lib.c lib.h
	$(CC) $(CFLAGS) -c -lwiringPi lib.c 

lib.a: lib.o
	ar -rc lib.a lib.o 

lib.so: lib.o 
	$(CC) $(CFLAGS) lib.o -shared -o lib.so -lwiringPi

main.o: main.c
	$(CC) $(CFLAGS) -c main.c -o main.o

mainStatic: lib.a main.o
	$(CC) $(CFLAGS) -o main main.o -L. lib.a -lwiringPi

mainDynamic: lib.so main.o
	$(CC) $(CFLAGS) main.o -L. lib.so -o mainDynamic -lwiringPi