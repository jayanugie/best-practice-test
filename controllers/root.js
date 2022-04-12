const hello= (req, res) => {
    return res.render('home/index');
};
/*
function hello(req,res) {
    return res.status(200).json({ message: "hello world"});
}
*/

module.exports = {
    hello,
};