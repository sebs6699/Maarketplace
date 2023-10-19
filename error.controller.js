
function handleError(req, res, error) {
    console.error('error:', error);
  
   
    res.status(500).json({ error: 'error' });
  }
  
function getErrorMessage(errMsg) {
console.log(errMsg);
}


export default  {
    handleError: handleError,
    getErrorMessage:getErrorMessage
};
