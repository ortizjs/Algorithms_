def get_product_of_all_ints_except_at_index(numbers):
    final_products = []
    before_products = []
    before_total = 1
    after_total = 1

    for i in range(0, len(numbers)):
        current_num = numbers[i]
        before_products.append(before_total)
        before_total *= current_num
    for i in range(len(numbers) - 1, -1, -1):
        current_num = numbers[i]
        before = before_products[i]
        summ = before * after_total
        final_products.insert(0, summ)
        after_total *= current_num
    return final_products
    



nums = [1, 7, 3, 4]
nums2 = [1, 2, 6, 5, 9]
print get_product_of_all_ints_except_at_index(nums)
print get_product_of_all_ints_except_at_index(nums2)
