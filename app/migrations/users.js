exports.migration = {
    up : 'CREATE TABLE users (\
             uniqueData varchar(255),\
             name varchar(255),\
             lastname varchar(255),\
             token varchar(255),\
             passowrd varchar(255),\
             typeAccess varchar(255)\
        );',
    down : 'Drop table users;',
    refresh : 'Delete from users'
}