#given a list of integers, create a function that returns the nth-rarest item.the funtion should 
#be called nth_most_rate signature and its nth_most_rate signature(list,n) where list is the array of 
#integers and n is the nth rarest item.For Example in([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5]),if 2 is supplied as n
#the answer is 2 as 2 is the second rarest item

def nth_most_rate(list,n):
    unique_numbers_list = []
    unique_numbers = set(list)

    for item in unique_numbers:
        unique_numbers_list.append(item)

    print(unique_numbers_list)

    return 6

List = [1,1,2,2,2,3,3,4,5]
print(nth_most_rate(List,1))


