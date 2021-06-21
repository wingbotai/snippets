(req, res) => {
    res.trackAs(false);
    res.setState(req.expectedContext(false, true));
    return null;
};
