use northwind;
select 
	orders.customer_id,
    customers.first_name,
    products.product_name,
    order_details.product_id, 
    order_details.quantity 
    from order_details
inner join orders on orders.id = order_details.order_id
inner join customers on orders.customer_id = customers.id
inner join products on order_details.product_id = products.id