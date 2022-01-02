def solution(userinput_list):
    answer_sum = 0
    for check in range(0,int(userinput_list[2])):
        answer_sum += int(userinput_list[0]) * (check+1)
    return answer_sum - int(userinput_list[1])

if __name__ == "__main__":

    input1 = list(input().split(" "))
    if solution(input1) <= 0 :
        print("0")
    else:
        print(solution(input1))