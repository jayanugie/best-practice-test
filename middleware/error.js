const error = (err, req, res, next) => {
    console.log(err.toString());  // hanya bisa dipanggil di object error
    return res.status().json({ message: 'an error occured'});
}

module.exports = {
    error,
}