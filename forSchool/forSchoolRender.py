import math

# data = [0,5,6,7,8,2]
# colors = ["brown", "brown", "brown"]
data = {
    "brown": 0,
    "black": 25,
    "blue": 10,
    "green": 40,
    "yellow": 5,
    "orange": 40,
    "red": 40,
}
#brown 0.00%, black 0.00% 0.56%, blue 0.56% 5.29%, green 5.29% 13.57%, yellow 13.57% 22.90%, orange 22.90% 40.79%, red 40.79%

n = 51

startProcent = 0
step = 2

outStr = ""

for i in range(n):
    pred = 0
    varI = 0
    outStr += str(step*i+startProcent) + "% {\n        background: conic-gradient("
    for color, procent in zip(data.keys(), data.values()):
        if varI == 0:
            # print("No")
            outStr += f"{color} {round(procent/n*i, 2)}%, "
        elif varI == len(data)-1:
            # outStr += f"{color} {pred + round(procent/n*i, 2)}%, "
            outStr += f"{color} {pred}%, "
        else:
            outStr += f"{color} {pred}% {pred + round(procent/n*i, 2)}%, "
        pred += round(procent/n*i, 2)
        varI += 1
    outStr = outStr[:-2]
    outStr += ");\n    }\n    "
print(outStr)