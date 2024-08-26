import { pool } from "../db.js"

export const getUsers = async (req, res) => {

    const { rows } = await pool.query('SELECT * FROM userss')
    res.json(rows)
};

export const getUserById = async (req, res) => {
    //de acá se saca un parametro que en este caso es el id
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM userss WHERE id = $1', [id])
    if (rows.length === 0) {
        return res.status(404).json({ message: 'usuario no encontrado' })
    }
    res.json(rows[0]);
};

export const createUser = async (req, res) => {

    try {
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO userss (name, email) VALUES ($1 , $2) RETURNING *', [data.name, data.email])
        return res.json(rows[0])
    } catch (error) {
        if (error?.code === '23505') {
            return res.status(409).json({ message: 'email ya existe' })
        }

        res.status(500).json({ message: 'error del servidor' })
    }

};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM userss WHERE id = $1 RETURNING *', [id])
    if (rowCount === 0) {
        return res.status(404).json({ message: 'usuario no encontrado' })
    }

    return res.sendStatus(204)
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const { rows } = await pool.query('UPDATE userss SET name = $1, email = $2 WHERE id = $3 RETURNING *', [data.name, data.email, id])

    return res.json(rows[0])
}