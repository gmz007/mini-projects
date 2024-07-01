helloworld: helloworld.o
	ld helloworld.o -o helloworld

helloworld.o: helloworld.s
	nasm helloworld.s -f elf64 -o helloworld.o
