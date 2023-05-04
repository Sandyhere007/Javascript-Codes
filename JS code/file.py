print("Welcome Buddy")

while True:
    a = int(input("Enter First Number: "))

    b = int(input("Enter Second Number: "))
    
    sum = a+b
    if(type(a) == int and type(b) == int):
        print("You have entered an integer ")
    else:
        print("Sorry, You have  not entered an integer")
    # print(sum)
    f = open("Answer","a")
    f.write(str( sum))
    f.write("\n")   
