def solution(list):
    if"H" in list: return "YES" 
    elif "Q" in list: return "YES" 
    elif "9" in list: return "YES" 
    else: return "NO" 
    
    if __name__ == "__main__": 
        user_input = list(input()) 
        print(solution(user_input))

