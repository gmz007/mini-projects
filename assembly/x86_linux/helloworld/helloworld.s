section .data
	msg: db 'Hello, World!', 10	; db -> declare bytes <string>, 10 (10 is newline)

section .text

	global _start

	_start:
		mov rax, 1	; write
		mov rdi, 0
		mov rsi, msg
		mov rdx, 14
		syscall

		mov rax, 60	; exit
		mov rdi, 255
		syscall

