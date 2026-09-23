function roleMiddleware(role) {
    return function(req, res, next) {
        if (req.user.next !== role) {
            let message = 'Acesso Negado';
            return res.status(503).json({ message })
        }
        next();
    }
}

export default roleMiddleware