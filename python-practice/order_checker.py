def order_checker(take_out_orders, dine_in_orders, served_orders):
    current_takeout_idx = 0
    current_dinein_idx = 0

    for order in served_orders:
        if order in take_out_orders:
            if current_takeout_idx == take_out_orders.index(order):
                current_takeout_idx += 1
            else:
                return False
        else:
            if current_dinein_idx == dine_in_orders.index(order):
                current_dinein_idx += 1
            else:
                return False
    return True

def order_checker_recur(take_out_orders, dine_in_orders, served_orders):
    if len(served_orders) == 0:
        return True
    current_served_order = served_orders.pop(0)
    if len(take_out_orders) > 0 and take_out_orders[0] == current_served_order:
        return order_checker_recur(take_out_orders[1:], dine_in_orders, served_orders)
    elif len(dine_in_orders) > 0 and dine_in_orders[0] == current_served_order: 
        return order_checker_recur(take_out_orders, dine_in_orders[1:], served_orders)
    else: 
        return False



print(order_checker([1, 3, 5],[2, 4, 6],[1, 2, 4, 6, 5, 3]))
print(order_checker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))
print("-------------- recursion version below!")
print(order_checker_recur([1, 3, 5],[2, 4, 6],[1, 2, 4, 6, 5, 3]))
print(order_checker_recur([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))

