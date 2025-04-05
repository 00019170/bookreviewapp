const express = require('express');
const router = express.Router({ mergeParams: true });
const reviewsController = require('../controllers/reviews');
const { isLoggedIn, checkReviewOwner } = require('../middleware');

// Убедитесь, что reviewsController содержит все методы
router.get('/new', reviewsController.getNewReviewForm); // Проверьте эту строку (строка 7)
router.post('/', reviewsController.createReview);

router.get('/:reviewId/edit', reviewsController.getEditReviewForm);
router.put('/:reviewId', reviewsController.updateReview);
router.delete('/:reviewId', reviewsController.deleteReview);

module.exports = router;
