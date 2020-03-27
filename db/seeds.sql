
-- SEQUELIZE

INSERT INTO sequelData
    (activity_name, main_topic, time_location,
    homework, hint_comment, folder, createdAt, updatedAt)
VALUES
    ('Setting up sequelize', 'Setting up sequelize', '1:10', true, 'Shows how to set up sequelize', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/04-Supplemental', new Date(), new Date()),
    ('Setting up sequelize on bash terminal.', 'Setting up sequelize on bash terminal.', '6:51', true, 'Commands on terminal to set up sequelize project', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/04-Supplemental', new Date(), new Date()), 
    ('07-ORM-To-Sequelize', 'Briefly going over object model of sequelize', '8:34', false, 'Object model for sequelize', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('03-Chirpy-Sequelize', 'Chirpy Sequelize', '12:31', false, 'How to manipulate/define sequelize objects', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/03-Chirpy-Sequelize', new Date(), new Date()),
    ('04-StarWars', 'Star Wars', '14:19', false, '.GET with specific parameters','https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/04-StarWars', new Date(), new Date()),
    ('07-ORM-To-Sequelize', 'To do list application', '16:00', true, 'starting to do list app', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '22:15', false, 'Changing it so it works with Sequelize.  Deleting ORM methods and such.', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '27:13', true, 'Npm install both mysql2 and sequelize for sequelize to work', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '30:12', true, 'Make sure use “npm install -g sequelize sequelize-cli if package not found error(gets you global packages) use sequelize --version to make sure it’s installed', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '32:36', true, 'Make sure to use “sequelize init:models & sequelize init:config”These commands initialize models folder and config folder', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '36:23', true, 'Instructor talks about index.js file inside models folder.  Index.js file never needs to be edited.', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '41:26', true, 'How to define model in sequelize.', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '59:38', true, 'Setting up sequelize object(Tables).', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('07-ORM-To-Sequelize', '07-ORM-To-Sequelize', '1:01:18', true, 'Linking server.js to database', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/07-ORM-To-Sequelize', new Date(), new Date()),
    ('08-Sequelize-Create-Read', '08-Sequelize-Create-Read', '1:31:24', true, 'https://sequelize.org/v5/  Call db variables from defined sequelize object in todo.js example.', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/08-Sequelize-Create-Read', new Date(), new Date()),
    ('08-Sequelize-Create-Read', '08-Sequelize-Create-Read', '1:35:00', true, 'Get and post on api-routes.js  C.R of C.R.U.D', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/08-Sequelize-Create-Read', new Date(), new Date()),
    ('09-Sequelize-Update-Delete', '09-Sequelize-Update-Delete', '1:47:34', true, '.delete and .put  U.D of C.R.U.D', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/09-Sequelize-Update-Delete', new Date(), new Date()),
    ('09-Sequelize-Update-Delete', '09-Sequelize-Update-Delete', '2:29:31', true, 'Goes over .delete and .put for sequelize', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/09-Sequelize-Update-Delete', new Date(), new Date()),
    ('09-Sequelize-Update-Delete', '09-Sequelize-Update-Delete', '2:39:50', true, 'Recap of .delete .put', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/09-Sequelize-Update-Delete', new Date(), new Date()),
    ('09-Sequelize-Update-Delete', '09-Sequelize-Update-Delete', '2:59:52', true, 'Validation to prevent funky glitches on application using sequelize.define to create validations', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/09-Sequelize-Update-Delete', new Date(), new Date()),
    ('10-Sequelize-Validations', '10-Sequelize-Validations', '3:06:57', true, 'Using .catch(err => console.log(err)); to get rid of red validation error on terminal, just to make it look better when it outputs.', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/14-Full-Stack/01-Activities/10-Sequelize-Validations', new Date(), new Date())


-- SELECT * FROM sequelize;

-- EXPRESS
INSERT INTO express (activity_name, main_topic, time_location, 
homework, hint_comment, folder)
VALUES

    ('First Server', 'Server, nodejs,
Http library,
port
', '45:00', true, 'Setting up your first server, basic', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/11-express/01-Activities/01-FirstServer'  NOW(), NOW());
('Two Servers', 'Server, nodejs,
Http library,
port
', '1:33:00', false, 'Shows how to have two server for you app', 'https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/11-express/01-Activities/02-Two-Servers'NOW(), NOW());
('Serving HTML','Server, nodejs, http, html', '1:41:56', true, 'Showing information on the browser from the server', '
https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/11-express/01-Activities/04-Serving-HTML
', NOW(), NOW());

    ("01-FirstServer", "Server, nodejs, Http library,port", "45:00", true, "Setting up your first server, basic", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/11-express/0", NOW(), NOW()),
    ("Two Servers", "Server, nodejs, Http library, port", "1:33:00", false, "Shows how to have two servers for your app", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/11-express/01-Activities/02-Two-Servers", NOW(), NOW()),
    ("Serving HTML", "Server, nodejs, http, html", "1:41:56", true, "Showing info on browser from server", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/11-express/01-Activities/04-Serving-HTML", NOW(), NOW());


-- SELECT * FROM express;

-- OOP
INSERT INTO OOP (activity_name, main_topic, time_location, homework, hint_comment, folder)
VALUES
    ("17-Stu_Prototype_Review", "Update tv constructor function to get searched actors' names", "9:55", true, "Using axios package to search API, repeat function", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/17-Stu-Prototype-Review", NOW(), NOW()),
    ("18-Ins_Classes", "Using classes to structure code", "23:26", false, "classes can inherit properties from each other", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/blob/master/10-OOP/01-Activities/18-Ins-Classes/shape.js", NOW(), NOW()),
	("19-Stu_Classes", "Using classes to make characters fight", "46:00", true, "setInterval for fights, printstats() for battle visual", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/19-Stu-Classes", NOW(), NOW()),
	("20-Ins_Classes", "Classes inherit properties from parent class", "1:04:00", false, "Extends to inherit from parent class", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/20-Ins-Subclasses", NOW(), NOW()),
	("21-Stu-Subclasses", "Adding functionality to classes", "1:49:05", true, "Classes in OOP have ids", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/21-Stu-Subclasses", NOW(), NOW()),
	("22-Ins-Multiple Classes", "Making a class with a property that has multiple classes", "2:00:00", true, "Static properties", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/22-Ins-Multiple-Classes", NOW(), NOW());

-- SELECT * FROM OOP;

-- Node.js
INSERT INTO nodejs (activity_name, main_topic, time_location, homework, hint_comment, folder)
VALUES
    ("8-Stu_TDD_Dissect", "TDD and Jest", "37:36", false, "Using Jest to test", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/08-Stu_TDD-Dissect", NOW(), NOW()),
    ("9-STU_TDD", "Employing tdd before writing prototype methods", "1:08:00", false, ".prototype method", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/09-Stu_TDD", NOW(), NOW()),
	("10-Stu_Pass_Tests", "Fully functional tests", "2:19:25", true, "helps with wk 10 hw", "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/GT-ATL-FSF-PT-11-2019-U-C/tree/master/10-OOP/01-Activities/10-Stu_Pass-Tests", NOW(), NOW())
    
    -- SELECT * FROM nodejs;
 
