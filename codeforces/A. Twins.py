def Solution(Coins):
    Group1 =0
    Group2 =0
    Result_Group=0

    Coins = sorted(Coins)
    for i in Coins:
        Group1 += i

    for i in Coins[::-1]:
        Group2 += i
        Result_Group += 1
        if Group2 > (Group1/2):
            break

    return Result_Group
if __name__ == "__main__":
    Coins = input()
    Coins_Price = list(map(int,input().split()))
    print(Solution(Coins_Price))