if __name__ == '__main__':
    n = int(input())
    
    country_set = set()
    
    for _ in range(n):
        country_name = input().strip()
        country_set.add(country_name)
        
    print(len(country_set))