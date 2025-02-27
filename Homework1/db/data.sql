delimiter $$
create procedure generate_data()
begin
    declare i int default 0;
    while i < 2000
        do
            insert into `order`.orders (price) value (round(rand() * 100000, 2));
            set i = i + 1;
        end while;
end $$
delimiter ;

call generate_data();

# Export product Id to csv
SELECT o.id
FROM `order`.orders AS o
INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.1/Uploads/productId.csv'
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n';
select * from orders where id = "c087f3a3-efa7-11ef-9573-005056c00001";



