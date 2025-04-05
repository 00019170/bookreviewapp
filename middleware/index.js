module.exports = {
    // Пустая функция-заглушка вместо проверки аутентификации
    isLoggedIn: (req, res, next) => next(),
    
    // Заглушка для проверки владельца (все могут редактировать)
    checkReviewOwner: (req, res, next) => next()
  };