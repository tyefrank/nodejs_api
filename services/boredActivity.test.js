const { boredActivity, boredActivityByType } = require('./boredActivity');

// jest.mock('./boredActivity');

describe('boredActivity Tests', () => {
    test('should return an activity', async () => {
        const result = await boredActivity();
        console.log(result.data);
        expect(result.data).toHaveProperty('activity');
        expect(result.data).toHaveProperty('key');
        expect(result.data).toHaveProperty('type');
    });

    test('should return an activity by type', async () => {
        const result = await boredActivityByType('education');
        expect(result.data.type).toEqual('education');
        expect(result.data).toHaveProperty('activity');
        expect(result.data).toHaveProperty('key');
    });
});