-- 1) Create table
create table if not exists public.products (
  id          integer primary key,
  title       text not null,
  price       numeric(10,2) not null,
  description text,
  category    text
);

-- 2) Insert data (Snapshot from: https://fakestoreapi.com/products)
insert into public.products (id,title,price,description,category) values
(1,'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',109.95,'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday','men''s clothing'),
(2,'Mens Casual Premium Slim Fit T-Shirts ',22.30,'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.','men''s clothing'),
(3,'Mens Cotton Jacket',55.99,'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.','men''s clothing'),
(4,'Mens Casual Slim Fit',15.99,'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.','men''s clothing'),
(5,'John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet',695.00,'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean''s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.','jewelery'),
(6,'Solid Gold Petite Micropave ',168.00,'Satisfaction Guaranteed. Return or exchange any order within 30 days.','jewelery'),
(7,'White Gold Plated Princess',9.99,'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for engagement, wedding, anniversary, Valentine''s Day...','jewelery'),
(8,'Pierced Owl Rose Gold Plated Stainless Steel Double',10.99,'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel','jewelery'),
(9,'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',64.00,'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system','electronics'),
(10,'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',109.00,'Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads.','electronics'),
(11,'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',109.00,'3D NAND flash are applied to deliver high transfer speeds. Remarkable transfer speeds that enable faster bootup and improved overall system performance.','electronics'),
(12,'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',114.00,'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer''s limited warranty','electronics'),
(13,'Acer SB220Q 21.5 inches Full HD IPS Ultra-Thin',599.00,'21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon FreeSync technology.','electronics'),
(14,'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',999.99,'49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side.','electronics'),
(15,'BIYLACLESEN Women''s 3-in-1 Snowboard Jacket Winter Coats',56.99,'Note:The Jackets is US standard size, Please choose size as your usual wear.','women''s clothing'),
(16,'Lock and Love Women''s Removable Hooded Faux Leather Moto Biker Jacket',29.95,'100% POLYURETHANE (shell) 100% POLYESTER (lining) 75% POLYESTER 25% COTTON (sweater)','women''s clothing'),
(17,'Rain Jacket Women Windbreaker Striped Climbing Raincoats',39.99,'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.','women''s clothing'),
(18,'MBJ Women''s Solid Short Sleeve Boat Neck V ',9.85,'95% RAYON 5% SPANDEX, Made in USA or Imported','women''s clothing'),
(19,'Opna Women''s Short Sleeve Moisture',7.95,'100% Polyester, Machine wash, 100% cationic polyester interlock','women''s clothing'),
(20,'DANVOUY Women T Shirt Casual Cotton Short',12.99,'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees.','women''s clothing')
on conflict (id) do update
set title       = excluded.title,
    price       = excluded.price,
    description = excluded.description,
    category    = excluded.category;
