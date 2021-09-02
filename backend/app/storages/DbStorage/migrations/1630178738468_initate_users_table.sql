CREATE TABLE IF NOT EXISTS user (
`id` int (20) primary key auto_increment,
`username` varchar(30) NOT NULL,
`password` varchar(200) NOT NULL
);