module.exports = (req, res) => {
  res.status(404)
  res.json('404 | книга или страница не найдена')
}