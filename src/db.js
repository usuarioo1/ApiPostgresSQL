import pg from 'pg'

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'nextjs',
    database: 'nodepg',
    port: '5432'

})

pool.query('SELECT NOW()', ).then(result => {
    console.log(result)
})