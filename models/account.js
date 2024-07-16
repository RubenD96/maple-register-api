module.exports = (sequelize, DataTypes) => {
    return sequelize.define('accounts', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^\S{4,12}$/i,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
