def get_product_of_all_ints_except_at_index(numbers)
    before_total = 1
    after_total = 1
    final_products = []
    before_products = []

    numbers.each do |number|
        before_products << before_total
        before_total *= number
    end

    i = numbers.length - 1

    while i >= 0
        current_num = numbers[i]
        before = before_products[i]
        summ = after_total * before
        final_products.unshift(summ)
        after_total *= current_num
        i -= 1
    end
    final_products
end

nums = [1, 7, 3, 4]
nums2 = [1, 2, 6, 5, 9]
print get_product_of_all_ints_except_at_index(nums)
print get_product_of_all_ints_except_at_index(nums2)