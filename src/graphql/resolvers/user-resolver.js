import User from '../../models/User';

const UserResolver = {
    Query: {
        user: (root, args) => {
            return new Promise((resolve, reject) => {
                User.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        users: () => {
            return new Promise((resolve, reject) => {
                User.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addUser: (root, {name, email, age}) => {
            const user = new User({name, email, age});

            return new Promise((resolve, reject) => {
                user.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editUser: (root, {_id, name, email, age}) => {
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate({_id}, {$set: {name, email, age}})
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        deleteUser: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                User.findOneAndRemove({_id}).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};

export default UserResolver;