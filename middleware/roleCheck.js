const roles = {
  trainer: {
    can: ["create_challenge", "update_challenge", "delete_challenge"]
  },
  challenger: {
    can: ["create_review", "update_review", "delete_review"]
  }
}

const checkRole = (role, action) => {
    return (req, res, next) => {
        const userRole = req.user.role
        const permissions = roles[userRole]?.can

        if (permissions.icludes(action)) {
            next()
        } else {
            res.status(403).json({ message: "Access Denied" });
        }
    }
}

module.exports = checkRole;