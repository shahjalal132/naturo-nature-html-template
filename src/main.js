// Import main CSS file
import './styles/main.css'

// Initialize Lucide Icons after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// jQuery Logic (will be available when jQuery loads)
if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(function ($) {
        // Mobile Menu Toggle
        $('#mobile-menu-btn').click(function () {
            $('#mobile-menu').slideToggle(300);
        });

        // Smooth Scroll for anchor links
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 100 // Adjust for sticky header
                }, 800);
            }
        });

        // Simple "Add to Cart" Animation
        $('.group button:has(.lucide-shopping-cart)').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            const btn = $(this);
            const originalContent = btn.html();

            // Change to checkmark
            btn.html('<i data-lucide="check" class="w-5 h-5 text-primary-green"></i>');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // Revert after 1.5s
            setTimeout(function () {
                btn.html(originalContent);
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 1500);
        });
    });
}

