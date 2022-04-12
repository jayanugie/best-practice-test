const notFound = (req, res, next) => {
    return res.status(404).json({ message: 'Location not found'});
}

module.exports = {
    notFound,
}