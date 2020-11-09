def order_checker(dine_in_orders, take_out_orders, served_orders):
    dine_in_idx = 0
    take_out_idx = 0
    served_idx = 0

    for current_order in served_orders:
        if dine_in_idx < len(dine_in_orders) and current_order == dine_in_orders[dine_in_idx]:
            dine_in_idx += 1
        elif take_out_idx < len(take_out_orders) and current_order == take_out_orders[take_out_idx]:
            take_out_idx += 1
        else:
            return False
    if dine_in_idx != len(dine_in_orders) or take_out_idx != len(take_out_orders):
        return False
    return True



    
take_out_orders = [1, 3, 5]
dine_in_orders = [2, 4, 6]
served_orders = [1, 2, 4, 6, 5, 3]

take_out_orders2 = [17, 8, 24]
dine_in_orders2 = [12, 19, 2]
served_orders2 = [17, 8, 12, 19, 24, 2]

print order_checker(dine_in_orders, take_out_orders, served_orders)
print order_checker(dine_in_orders2, take_out_orders2, served_orders2)
