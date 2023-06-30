import { reviews } from "./home";

const ReviewPage = () => {
    reviews();
    window.scrollTo({
        top: 0,
        behavior: 'auto' // Optional: Adds smooth scrolling animation
    });
    const reviewCards = document.querySelector('.reviews-cards');
    reviewCards.classList.remove('reviews-cards');
    reviewCards.classList.add('review-page');

    const cardWrapper = document.querySelector('.card-wrapper');
    cardWrapper.classList.remove('card-wrapper');
    cardWrapper.classList.add('card-page');

    document.querySelector('.review-container').remove();
    document.querySelector('.next-button').remove();
    document.querySelector('.back-button').remove();
}

export default ReviewPage;