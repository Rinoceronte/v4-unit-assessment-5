const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    let {username, password, profile_pic} = req.body;
    let db = req.app.get('db');

    const result = await db.user.find_user_by_username([username])[0];
    if(result) {
        return res.status(409).send('Username already exists');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const results = await db.user.create_user([username, hash, profile_pic]);
    const user = results[0];
    req.session.user = { username: user.username, profile_pic: user.profile_pic, id: user.user_id};
    return res.status(201).send(req.session.user);
}

const login = async (req, res) => {
    let {username, password} = req.body;
    let db = req.app.get('db');
    let result = await db.user.find_user_by_username([username]);
    let user = result[0];
    if(!user) {
        return res.status(401).send('Invalid Username or Password');
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password);
    if(!isAuthenticated){
        return res.status(401).send('Invalid Username or Password');
    }
    req.session.user = { username: user.username, profile_pic: user.profile_pic, id: user.user_id}
    return res.status(201).send(req.session.user);
}

const logout = (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
}

const getUser = (req, res) => {
    if(req.session.user) {
        return res.status(201).send(req.session.user);
    }
    return res.sendStatus(404);
}

module.exports = {
    register,
    login,
    logout,
    getUser
}