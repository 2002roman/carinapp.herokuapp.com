exports.migration = {
    up : {
        'CREATE TABLE projects (\
             uniqueDataOfUser varchar(255),\
             id varchar(255),\
             projectName varchar(255),\
             status bool,\
             projectData json,\
             configuration json\
        );'
    },
    down : {
        'Drop table projects;'
    }
}