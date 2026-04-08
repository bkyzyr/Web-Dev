def xor(x, y):
    return x != y

data = list(map(int, input().split()))
x = bool(data[0])
y = bool(data[1])
result = xor(x, y)
print(int(result))