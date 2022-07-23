const { headerTitles, facility, facilities } = require('./jsonData')

exports.getHomepageView = (req, res) =>{
    // all variable

    // render
    return res.render('pages/index', {
        facilites: facilities
    })
}

exports.getInstructorView = (req, res) =>{

    return res.render('pages/instructor', {
        headerTitle: headerTitles.instructor
    })
}

exports.getAboutView = (req, res) =>{

    return res.render('pages/about', {
        headerTitle: headerTitles.about
    })
}

exports.getMembershipView = (req, res) =>{

    return res.render('pages/membership', {
        headerTitle: headerTitles.membership
    })
}