cube = lambda x: x**3

def fibonacci(n):
    fib_list = []
    for i in range(n):
        if i == 0:
            fib_list.append(0)
        elif i == 1:
            fib_list.append(1)
        else:
            fib_list.append(fib_list[-1] + fib_list[-2])
    return fib_list

if __name__ == '__main__':
    n = int(input())
    print(list(map(cube, fibonacci(n))))