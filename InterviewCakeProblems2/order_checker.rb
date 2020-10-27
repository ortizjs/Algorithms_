def order_checker(dine_in_orders, take_out_orders, served_orders)
    dine_in_idx = 0
    take_out_idx = 0
    served_idx = 0

    while served_idx < served_orders.length
        current_order = served_orders[served_idx]
        if dine_in_idx <= dine_in_orders.length - 1 && dine_in_orders[dine_in_idx] == current_order
            dine_in_idx += 1
        elsif take_out_idx <= take_out_orders.length - 1 && take_out_orders[take_out_idx] == current_order
            take_out_idx += 1
        else
            return false
        end
        served_idx += 1
    end
    return false if dine_in_idx != dine_in_orders.length || take_out_idx != take_out_orders.length
    true
end

Take_out_orders = [17, 8, 24];
Dine_in_orders = [12, 19, 2];
Served_orders = [17, 8, 12, 19, 24, 2];

Take_out_orders2 =  [1, 3, 5];
Dine_in_orders2 =  [2, 4, 6];
Served_orders2 =  [1, 2, 4, 6, 5, 3];


p order_checker(Dine_in_orders, Take_out_orders, Served_orders)
p order_checker(Dine_in_orders2, Take_out_orders2, Served_orders2)

p order_checker([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3])
p order_checker([1, 3, 5, 8, 10], [2, 4, 6], [1, 2, 4, 6, 5, 3, 10, 8])
p order_checker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2])
p order_checker([17, 8, 24], [12, 19, 2, 3], [17, 8, 12, 19, 24, 2, 3])