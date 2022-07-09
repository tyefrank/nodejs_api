const boredActivity = async () => {
    console.log('Mocked activity');
    return Promise.resolve({
        data: [
                {"activity":"Learn Express.js","availability":0.25,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://expressjs.com/","key":"3943506"},
                {"activity":"Learn to greet someone in a new language","availability":0.2,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link": "","key":"4704256"},
                {"activity":"Learn how to play a new sport","availability":0.2,"type":"recreational","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5808228"},
                {"activity":"Text a friend you haven't talked to in a long time","availability":0.2,"type":"social","participants":2,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6081071"},
                {"activity":"Learn a new programming language","availability":0.25,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5881028"},
                {"activity":"Learn how to fold a paper crane","availability":0.05,"type":"education","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link": "","key":"3136036"},
                {"activity":"Find a DIY to do","availability":0.3,"type":"diy","participants":1,"price":0.4,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4981819"},
                {"activity":"Learn about the Golden Ratio","availability":0.2,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Golden_ratio","key":"2095681"},
                {"activity":"Volunteer at a local animal shelter","availability":0.5,"type":"charity","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"1382389"},
                {"activity":"Play a game of Monopoly","availability":0.3,"type":"social","participants":4,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"1408058"},
                {"activity":"Bake pastries for you and your neighbor","availability":0.3,"type":"cooking","participants":1,"price":0.4,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"8125168"},
                {"activity":"Bake something you've never tried before","availability":0.3,"type":"cooking","participants":1,"price":0.4,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"5665663"},
                {"activity":"Take your dog on a walk","availability":0.2,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9318514"},
                {"activity":"Meditate for five minutes","availability":0.05,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3699502"},
                {"activity":"Start a book you've never gotten around to reading","availability":0.1,"type":"relaxation","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7114122"},
                {"activity":"Take a caffeine nap","availability":0.08,"type":"relaxation","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":false,"link":"","key":"5092652"},
                {"activity":"Take a bubble bath","availability":0.1,"type":"relaxation","participants":1,"price":0.15,"accessibility":"'Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2581372"},
                {"activity":"Go to a nail salon","availability":0.5,"type":"relaxation","participants":1,"price":0.4,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7526324"},
                {"activity":"Listen to your favorite album","availability":0.2,"type":"music","participants":1,"price":0.08,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3136729"},
                {"activity":"Learn to play a new instrument","availability":0.6,"type":"music","participants":1,"price":0.55,"accessibility":"Major challenges","duration":"hours","kidFriendly":true,"link":"","key":"3192099"},
                {"activity":"Teach your dog a new trick","availability":0.15,"type":"relaxation","participants":1,"price":0.05,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1668223"},
                {"activity":"Make a to-do list for your week","availability":0.05,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5920481"},
    ]})
};

const boredActivityByType = async (type) => {
    console.log('Mocked activity by type');
    return Promise.resolve({
        data: 
            {"activity":"Learn Express.js","availability":0.25,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://expressjs.com/","key":"3943506"},
    })
}

module.exports = {boredActivity, boredActivityByType};