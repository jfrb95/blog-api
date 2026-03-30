module.exports = {
  getIdFromReq(req) {
  return Number(req.params.id);
}
}