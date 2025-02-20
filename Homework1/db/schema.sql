create database if not exists `order`;
use `order`;
create table if not exists orders
(
    id    char(36) primary key default (uuid()),
    price double

);
drop database `order`;