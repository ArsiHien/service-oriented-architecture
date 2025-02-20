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

call generate_data()