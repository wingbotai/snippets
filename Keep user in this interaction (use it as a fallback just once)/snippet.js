(req, res) => {
    const { action, data = {} } = req.expected() || {};
    const current = res.currentAction();
    if (!data._alreadySeen || action !== current) {
        res.expected(action, { _alreadySeen: true });
    }
};
