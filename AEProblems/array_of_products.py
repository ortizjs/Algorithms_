def arrayOfProducts(array):
    if len(array) == 2:
        return array
    
    products = [None] * len(array)
    product_so_far = 1

    for i in range(len(array)):
        products[i] = product_so_far
        product_so_far *= array[i]
    
    product_so_far = 1

    for i in range(len(array) - 1, -1, -1):
        products[i] *= product_so_far
        product_so_far *= array[i]
    
    return products


        