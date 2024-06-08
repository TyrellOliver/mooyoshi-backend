\c mooyoshi_app

INSERT INTO users (username, email, password_hash)
VALUES 
('johndoe', 'john@example.com', 'passwordhash1'),
('janedoe', 'jane@example.com', 'passwordhash2'),
('sakura', 'sakura@example.com', 'passwordhash3'),
('sam', 'sam@email.com', 'S@misAWESOME'),
('Xavier', 'xavier@example.com', 'thisIS_X_');

INSERT INTO categories (category_name)
VALUES
('Restaurant'),      --1
('Bar'),             --2
('Spa'),             --3
('Grocery Store'),   --4
('Events'),          --5
('Manga/Bookstore'); --6

INSERT INTO locations (location_name, location_description, location_address, location_latitude, location_longitude)
VALUES
('WakuWaku', 'The restaurant dining hall of our izakaya, serving up classic Japanese comfort foods and a wide array of fun drinks. Located in Japan Village, Brooklyn, a warm and relaxing escape from the city bustle.', '269 36th St, Brooklyn, NY 11232', 40.6561038676, -74.0070620458), --1 category1
('Japan Village', 'Welcome to Japan Village, a captivating cultural oasis nestled in the heart of New York City. As a premier destination for Japanese culture and gastronomy, we are committed to immersing visitors in the rich heritage and vibrant spirit of Japan.', '934 3rd Ave, Brooklyn, NY 11232', 40.6561518069, -74.0064158458), --2 --category 1 & 5
('ICHIRAN Brooklyn', 'ICHIRAN''s story began in Hakata, the epicenter of the tonkotsu ramen movement. We are on a mission to provide our guests with the best tonkotsu ramen, using only the finest ingredients and the most advanced techniques developed by our master artisans.', '374 Johnson Ave, Brooklyn, NY 11206', 40.7075300693, -73.9331830331), --3 category1
('ICHIRAN Times Square', 'ICHIRAN''s story began in Hakata, the epicenter of the tonkotsu ramen movement. We are on a mission to provide our guests with the best tonkotsu ramen, using only the finest ingredients and the most advanced techniques developed by our master artisans.', '152 W 49th St, New York, NY 10020', 40.7600610277, -73.9833245881), --4 category1
('ICHIRAN', 'ICHIRAN''s story began in Hakata, the epicenter of the tonkotsu ramen movement. We are on a mission to provide our guests with the best tonkotsu ramen, using only the finest ingredients and the most advanced techniques developed by our master artisans.', '132 W 31st St, New York, NY 10001', 40.7482699257, -73.9907189651), --5 category1
('Sakagura', 'We continue to be one of the top sake bars in the United States, attracting countless sake lovers from around the world. Our one-of-a-kind menu consists of over 260 kinds of carefully selected sakes, authentic tapas-style Japanese dishes, and homemade desserts. We are known for being a "hidden jewel" of Manhattan also because of our unique and hidden location. Come find us and transport yourself to Tokyo.', '211 E 43rd St B1, New York, NY 10017', 40.7512443706, -73.9731549013), --6 category2
('Katagiri Japanese Grocery', 'Conveniently located in the heart of Manhattan, we have provided New Yorkers with Japanese groceries since Katagiri Brothers Inc. opened its doors in 1907.', '370 Lexington Ave, New York, NY 10017', 40.7509200388, -73.9771101901), --7 category4
('Katagiri Japanese Grocery', 'Conveniently located in the heart of Manhattan, we have provided New Yorkers with Japanese groceries since Katagiri Brothers Inc. opened its doors in 1907.', '224 E 59th St, New York, NY 10022', 40.7608698395, -73.9655818883), --8 category4
('Sunrise Mart', 'Since opening its doors in East Village in 1995, Sunrise Mart has expanded across New York City to serve the growing demand for Japanese essentials. With additional locations operating in Soho, Midtown, and Brooklyn, Sunrise Mart makes it easy for anyone to stock up on Japanese ingredients. Browse the aisles for artisanal bottles of soy sauce, or perhaps grab a delicious bag of green tea flavored Kit Kats!', '12 E 41st St, New York, NY 10017', 40.7523542859, -73.9807056485), -- 9 category4
('Sunrise Mart', 'Since opening its doors in East Village in 1995, Sunrise Mart has expanded across New York City to serve the growing demand for Japanese essentials. With additional locations operating in Soho, Midtown, and Brooklyn, Sunrise Mart makes it easy for anyone to stock up on Japanese ingredients. Browse the aisles for artisanal bottles of soy sauce, or perhaps grab a delicious bag of green tea flavored Kit Kats!', '494 Broome St, New York, NY 10013', 40.7232610017, -74.0025762657), --10 category4
('Midoriya Japanese Grocery', NULL, '60 5th Ave, Brooklyn, NY 11217', 40.6812561848, -73.9773780211), --11 category4
('Mitsuki Japanese Market', NULL, '703 Manhattan Ave, Brooklyn, NY 11222', 40.7255844840, -73.9519569124), --12 category5
('Azabu New York', 'Enjoy traditional Japanese table service upstairs or experience traditional “edo-mae” sushi tucked away in the cozy basement of the building. The master Japanese chefs were trained in their native land and eighty percent of the fish at the eatery is imported from Japan four times a week.', '428 Greenwich St, New York, NY 10013', 40.7224332738, -74.0098930065), --13 category1
('Shibui Spa', 'Our philosophy is one of balance—balance between the traditional and the modern and between nature and city. Our practitioners, who are experts in ancient as well as contemporary healing techniques, approach their craft as art—with devotion, dedication, and compassion.', '377 Greenwich St, New York, NY 10013', 40.7198335392, -74.009911389), --14 category3
('Nishida Sho-ten', 'Japanese noodle soups served in a cozy nook styled like a traditional, old-timey ramen shop', '302 E 49th St, New York, NY 10017', 40.7539904429, -73.9687038437), --15 category1
('Kenkodo NYC', 'We provide Shiatsu with heartfelt services. Shiatsu is a traditional Japanese hands-on therapy based on anatomical and physiological theory and is regulated as a licensed medical therapy with the Ministry of Health and Welfare in Japan..', '211 E 53rd St ground floor, New York, NY 10022', 40.7575289508, -73.9685765117); --16 category3

INSERT INTO location_categories (location_id, category_id)
VALUES
(1,1),
(2,1),
(2,5),
(3,1),
(4,1),
(5,1),
(6,2),
(7,4),
(8,4),
(9,4),
(10,4),
(11,4),
(12,5),
(13,1),
(14,3),
(15,1),
(16,3);

INSERT INTO favorites (user_id, location_id)
VALUES
(1,2),
(1,4),
(2,1),
(2,7),
(2,13),
(3,11),
(3,13),
(3,14),
(5,2),
(5,3),
(5,11),
(5,16);
