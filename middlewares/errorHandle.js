module.exports = (err, req, res, next) => {
    if(err.status === 500){
      return res.redirect('/error/500')
    } else if(err.status === 404){
      return res.redirect('/error/404')
    } else if(err.status === 502){
      return res.redirect('/error/502')
    }  
}