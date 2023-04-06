const user = await User.findById("642bfe97c8c4b066429545f3");
console.log(user);
console.log(user.namedFunction);
user.sayHi();
user[1].bestfriend = "642bba29dd0b4591256684eb";
await user[0].save();
