helloworld: helloworld.o
	ld helloworld.o -o helloworld -l System -syslibroot `xcrun -sdk macosx --show-sdk-path` -e _start -arch arm64

helloworld.o: helloworld.s
	as helloworld.s -o helloworld.o -arch arm64
