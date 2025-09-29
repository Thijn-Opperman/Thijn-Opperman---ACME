# 🚀 ACME Next.js + Supabase Setup Instructies

## ✅ Wat ik al voor je heb gedaan:

- ✅ **Dependencies geïnstalleerd**: axios, @supabase/supabase-js
- ✅ **Supabase client geconfigureerd**: `lib/supabase.ts`
- ✅ **Product types uitgebreid**: met category veld en CRUD types
- ✅ **API routes gemaakt**: volledige CRUD functionaliteit
- ✅ **Admin pagina's gemaakt**: dashboard, nieuwe producten, bewerken
- ✅ **Bestaande pagina's aangepast**: om Supabase te gebruiken
- ✅ **Import script gemaakt**: voor productgegevens van Fake Store API

## 🎯 Wat jij nu moet doen:

### 1. Supabase Project Aanmaken
1. Ga naar [supabase.com](https://supabase.com)
2. Maak een nieuw project aan
3. Noteer je **Project URL** en **Anon Key**

### 2. Database Tabel Aanmaken
1. Ga naar je Supabase dashboard
2. Ga naar **SQL Editor**
3. Voer het volgende SQL script uit:

```sql
-- 1) Create table
create table if not exists public.products (
  id          integer primary key,
  title       text not null,
  price       numeric(10,2) not null,
  description text,
  category    text,
  image       text
);

-- 2) Insert data (Snapshot from: https://fakestoreapi.com/products)
insert into public.products (id,title,price,description,category,image) values
(1,'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',109.95,'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday','men''s clothing','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
(2,'Mens Casual Premium Slim Fit T-Shirts ',22.30,'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.','men''s clothing','https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'),
(3,'Mens Cotton Jacket',55.99,'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.','men''s clothing','https://fakestoreapi.com/img/71li-ujlUL._AC_UX679_.jpg'),
(4,'Mens Casual Slim Fit',15.99,'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.','men''s clothing','https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'),
(5,'John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet',695.00,'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean''s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.','jewelery','https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'),
(6,'Solid Gold Petite Micropave ',168.00,'Satisfaction Guaranteed. Return or exchange any order within 30 days.','jewelery','https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'),
(7,'White Gold Plated Princess',9.99,'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for engagement, wedding, anniversary, Valentine''s Day...','jewelery','https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'),
(8,'Pierced Owl Rose Gold Plated Stainless Steel Double',10.99,'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel','jewelery','https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'),
(9,'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',64.00,'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system','electronics','https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'),
(10,'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',109.00,'Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads.','electronics','https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'),
(11,'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',109.00,'3D NAND flash are applied to deliver high transfer speeds. Remarkable transfer speeds that enable faster bootup and improved overall system performance.','electronics','https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'),
(12,'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',114.00,'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer''s limited warranty','electronics','https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'),
(13,'Acer SB220Q 21.5 inches Full HD IPS Ultra-Thin',599.00,'21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon FreeSync technology.','electronics','https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'),
(14,'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',999.99,'49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side.','electronics','https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'),
(15,'BIYLACLESEN Women''s 3-in-1 Snowboard Jacket Winter Coats',56.99,'Note:The Jackets is US standard size, Please choose size as your usual wear.','women''s clothing','https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'),
(16,'Lock and Love Women''s Removable Hooded Faux Leather Moto Biker Jacket',29.95,'100% POLYURETHANE (shell) 100% POLYESTER (lining) 75% POLYESTER 25% COTTON (sweater)','women''s clothing','https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'),
(17,'Rain Jacket Women Windbreaker Striped Climbing Raincoats',39.99,'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.','women''s clothing','https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2x.jpg'),
(18,'MBJ Women''s Solid Short Sleeve Boat Neck V ',9.85,'95% RAYON 5% SPANDEX, Made in USA or Imported','women''s clothing','https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'),
(19,'Opna Women''s Short Sleeve Moisture',7.95,'100% Polyester, Machine wash, 100% cationic polyester interlock','women''s clothing','https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'),
(20,'DANVOUY Women T Shirt Casual Cotton Short',12.99,'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees.','women''s clothing','https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg')
on conflict (id) do update
set title       = excluded.title,
    price       = excluded.price,
    description = excluded.description,
    category    = excluded.category,
    image       = excluded.image;
```

### 3. Environment Variabelen Configureren
1. Maak een `.env.local` bestand aan in de `front-end-development-week4` directory
2. Voeg de volgende variabelen toe:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Applicatie Starten
```bash
cd front-end-development-week4
npm run dev
```

### 5. Productgegevens Importeren (Optioneel)
Als je de productgegevens wilt importeren van de Fake Store API:

1. Ga naar `http://localhost:3000/api/import-products`
2. Maak een POST request (je kunt Postman gebruiken of curl):
```bash
curl -X POST http://localhost:3000/api/import-products
```

## 🎉 Wat je nu kunt doen:

### Bezoekerskant:
- **Homepage**: `http://localhost:3000`
- **Producten overzicht**: `http://localhost:3000/products`
- **Product detail**: `http://localhost:3000/products/[id]`

### Beheerderskant:
- **Admin dashboard**: `http://localhost:3000/admin`
- **Nieuw product**: `http://localhost:3000/admin/products/new`
- **Product bewerken**: `http://localhost:3000/admin/products/[id]/edit`

## 🔧 CRUD Functionaliteit:

- ✅ **Create**: Nieuwe producten toevoegen via admin interface
- ✅ **Read**: Producten ophalen en tonen op website
- ✅ **Update**: Bestaande producten bewerken via admin interface
- ✅ **Delete**: Producten verwijderen via admin interface

## 📁 Project Structuur:

```
front-end-development-week4/
├── app/
│   ├── api/
│   │   ├── products/
│   │   │   ├── route.ts          # GET, POST /api/products
│   │   │   └── [id]/route.ts     # GET, PUT, DELETE /api/products/[id]
│   │   └── import-products/
│   │       └── route.ts          # POST /api/import-products
│   ├── admin/
│   │   ├── page.tsx             # Admin dashboard
│   │   └── products/
│   │       ├── new/page.tsx      # Nieuw product formulier
│   │       └── [id]/edit/page.tsx # Product bewerken formulier
│   ├── products/
│   │   ├── page.tsx             # Producten overzicht
│   │   └── [productId]/page.tsx # Product detail
│   └── components/
├── lib/
│   ├── supabase.ts              # Supabase client configuratie
│   └── api.ts                   # API utility functies
├── types/
│   └── product.ts               # TypeScript types
└── scripts/
    └── import-products.ts       # Import script
```

## 🚨 Belangrijke Opmerkingen:

1. **Zorg ervoor dat je Supabase project actief is** voordat je de applicatie start
2. **Controleer je environment variabelen** in `.env.local`
3. **Test alle CRUD functionaliteit** na het opzetten
4. **De applicatie gebruikt nu Supabase** in plaats van de Fake Store API

Veel succes met je ACME project! 🎯
