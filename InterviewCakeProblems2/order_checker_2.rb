def order_checker(dine_in_orders, take_out_orders, served_orders)
    dine_in_idx = 0
    take_out_idx = 0
    served_idx = 0

    while served_idx < served_orders.length
        current_order = served_orders[served_idx]
        if current_order == dine_in_orders[dine_in_idx]
            dine_in_idx += 1
        elsif current_order == take_out_orders[take_out_idx]
            take_out_idx += 1
        else
            return false
        end
        served_idx += 1
    end

    return false if dine_in_idx != dine_in_orders.length || take_out_idx != take_out_orders.length
    return true
end

take_out_orders = [1, 3, 5]
dine_in_orders = [2, 4, 6]
served_orders = [1, 2, 4, 6, 5, 3]

take_out_orders2 = [17, 8, 24]
dine_in_orders2 = [12, 19, 2]
served_orders2 = [17, 8, 12, 19, 24, 2]

p order_checker(dine_in_orders,take_out_orders,served_orders)
p order_checker(dine_in_orders2,take_out_orders2,served_orders2)