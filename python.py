number = 1 
flag = False

if number > 1:
    for i in range(2, number):
        if (number % i) == 0:
            flag = True
            break

if flag:
    print(f"{numbrr} is not a prime number")
else:
    print(f"{number} is a prime number")
