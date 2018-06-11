import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(0,c*d,c):
    print(" ".join([str(a+b*(j+i)) for j in range(c)]))