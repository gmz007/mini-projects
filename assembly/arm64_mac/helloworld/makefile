main: main.o
	ld main.o -o main -l System -syslibroot `xcrun -sdk macosx --show-sdk-path` -e _start -arch arm64

main.o: main.s
	as main.s -o main.o -arch arm64
