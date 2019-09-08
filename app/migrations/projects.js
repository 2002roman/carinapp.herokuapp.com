exports.migration = {
    up : 'CREATE TABLE projects (\
             uniqueDataOfUser varchar(255),\
             id varchar(255),\
             projectName varchar(255),\
             status bool,\
             projectData json,\
             configuration json,\
             token_robot varchar(255),\
             token_user varchar(255)\
        );',
    down :'Drop table projects;',
    refresh : 'Delete from projects'
}