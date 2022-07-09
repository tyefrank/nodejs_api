const axios = require('axios');
require('dotenv').config();

const boredActivity = async () => {
    console.log('Realtime activity');
    return await axios.get(`${process.env.boredActivityURL}`);
};

const boredActivityByType = async (type) => {
    console.log('Realtime activity by type');
    return await axios.get(`${process.env.boredActivityURL}?type=${type}`);
}

module.exports = {boredActivity, boredActivityByType};