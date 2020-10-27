def order_checker(dine_in_orders, take_out_orders, served_orders):
    dine_in_idx = 0
    take_out_idx = 0
    served_idx = 0

    while served_idx < len(served_orders):
        current_order = served_orders[served_idx]
        if dine_in_idx <= len(dine_in_orders) - 1 and current_order == dine_in_orders[dine_in_idx]:
            dine_in_idx += 1
        elif take_out_idx <= len(take_out_orders) - 1 and current_order == take_out_orders[take_out_idx]:
            take_out_idx += 1
        else:
            return False
        served_idx += 1
    if dine_in_idx != len(dine_in_orders) or take_out_idx != len(take_out_orders):
        return False
    return True


Take_out_orders = [17, 8, 24]
Dine_in_orders = [12, 19, 2]
Served_orders = [17, 8, 12, 19, 24, 2]

Take_out_orders2 = [1, 3, 5]
Dine_in_orders2 = [2, 4, 6]
Served_orders2 = [1, 2, 4, 6, 5, 3]


print order_checker(Dine_in_orders, Take_out_orders, Served_orders)
print order_checker(Dine_in_orders2, Take_out_orders2, Served_orders2)

print order_checker([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3])
print order_checker([1, 3, 5, 8, 10], [2, 4, 6], [1, 2, 4, 6, 5, 3, 10, 8])
print order_checker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2])
print order_checker([17, 8, 24], [12, 19, 2, 3], [17, 8, 12, 19, 24, 2, 3])
