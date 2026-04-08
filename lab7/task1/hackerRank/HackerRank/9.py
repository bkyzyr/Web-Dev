from itertools import combinations

if __name__ == '__main__':
    s_input, k_input = input().split()
    
    s_sorted = sorted(s_input)
    k = int(k_input)
    
    for i in range(1, k + 1):
        for combo in combinations(s_sorted, i):
            print("".join(combo))