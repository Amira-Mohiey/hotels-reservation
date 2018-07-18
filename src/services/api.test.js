import { getHotels } from "./api";

beforeEach(function () {
    global.fetch = jest.fn().mockImplementation(() => {
        var promise = new Promise((resolve, reject) => {
            resolve({
                ok: true,
                hotel_name: 'concord',
                json: function () {
                    return {  hotel_name: 'concord' }
                }
            });
        });
        return promise;
    });

});
it("test api fetch ", async function () {
    const response = await new getHotels()
   
    expect(response.hotel_name).toBe('concord');
});