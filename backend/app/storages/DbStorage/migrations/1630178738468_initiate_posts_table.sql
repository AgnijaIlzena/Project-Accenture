CREATE TABLE IF NOT EXISTS posts (
`id` bigint(20) primary key auto_increment,
`title` varchar(75) not null,
`content` text DEFAULT NULL,
`month` varchar(10) not null, 
`year` int(4) not null
) ;


