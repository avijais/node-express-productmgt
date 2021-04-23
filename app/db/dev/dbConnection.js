import pool from './pool';

// console.log("pool : ", pool);

pool.on('connect', () => {
    console.log('connected to the db');
});

/**
 * Create User Table
 * CREATE TABLE test
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) UNIQUE NOT NULL, 
  phone VARCHAR(100));
 */
const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        f_name VARCHAR(100) NOT NULL,
        l_name VARCHAR(100),
        mobile VARCHAR(10) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(100) NOT NULL,
        token VARCHAR(128) NULL,
        updated_on DATE NOT NULL,
        created_on DATE NOT NULL
    )`;

    pool.query(userCreateQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};



/**
 * Create Trip Table
 */
// bus_id INTEGER REFERENCES bus(id) ON DELETE CASCADE,
// fare float NOT NULL,
const createProductCategoryTable = () => {
    const productCategoryCreateQuery = `CREATE TABLE IF NOT EXISTS product_category
    (id SERIAL PRIMARY KEY, 
    name VARCHAR(512) NOT NULL,
    description VARCHAR(1024) NOT NULL,
    status integer DEFAULT(1),
    created_on DATE NOT NULL,
    updateed_on DATE NOT NULL)`;

    pool.query(productCategoryCreateQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};


/**
 * Create Product Table
 */
const createProductTable = () => {
    const productCreateQuery = `CREATE TABLE IF NOT EXISTS products
    (id SERIAL PRIMARY KEY,
    name VARCHAR(512) NOT NULL,
    price VARCHAR(24) NOT NULL,
    bar_code VARCHAR(100),
    brand_name VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    mfd DATE,
    exp DATE,
    category_id INTEGER REFERENCES product_category(id),
    status integer DEFAULT(1) NOT NULL,
    created_on DATE NOT NULL,
    updated_on DATE NOT NULL)`;

    pool.query(productCreateQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

/**
 * Drop User Table
 */
const dropUserTable = () => {
    const usersDropQuery = 'DROP TABLE IF EXISTS users';
    pool.query(usersDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};


/**
 * Drop Bus Table
 */
const dropProductTable = () => {
    const productsDropQuery = 'DROP TABLE IF EXISTS products';
    pool.query(productsDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

/**
 * Drop Trip Table
 */
const dropProductCategoryTable = () => {
    const productCategoryDropQuery = 'DROP TABLE IF EXISTS product_category';
    pool.query(productCategoryDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

/**
 * Create All Tables
 */
const createAllTables = () => {
    createUserTable();
    createProductTable();
    createProductCategoryTable();};


/**
 * Drop All Tables
 */
const dropAllTables = () => {
    dropUserTable();
    dropProductTable();
    dropProductCategoryTable();
};

pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});


export {
    createAllTables,
    dropAllTables,
};

require('make-runnable');