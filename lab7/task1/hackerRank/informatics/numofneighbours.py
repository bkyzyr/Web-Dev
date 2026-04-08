n = int(input())
array = list(map(int, input().split()))
print(*(x for x in array if x % 2 == 0))