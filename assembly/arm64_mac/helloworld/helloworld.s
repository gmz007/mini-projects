.global _start
.align 4

_start:
	mov X0, #1		// stdout
	adr X1, helloworld	// addr of helloworld (below)
	mov X2, #13		// length of helloworld (13 characters)
	mov X16, #4		// 4 is write
	svc 0
	
	mov X0, #255
	mov X16, #1
	svc 0

helloworld:	.ascii "Hello World!\n"

