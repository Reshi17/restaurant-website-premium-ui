   // Mobile Navigation Toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navMenu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Sticky Header on Scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Menu Category Tabs
        const categoryBtns = document.querySelectorAll('.category-btn');
        const menuItems = document.querySelectorAll('.menu-item');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-category');
                
                // Show/hide menu items based on category
                menuItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Gallery Lightbox
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxClose = document.getElementById('lightboxClose');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').getAttribute('src');
                lightboxImg.setAttribute('src', imgSrc);
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Reservation Form Submission
        const reservationForm = document.getElementById('reservationForm');
        const confirmation = document.getElementById('confirmation');
        const confirmationOverlay = document.getElementById('confirmationOverlay');
        const closeConfirmation = document.getElementById('closeConfirmation');
        
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show the confirmation message
            
            confirmation.classList.add('active');
            confirmationOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Reset form
            reservationForm.reset();
        });
        
        closeConfirmation.addEventListener('click', () => {
            confirmation.classList.remove('active');
            confirmationOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        confirmationOverlay.addEventListener('click', () => {
            confirmation.classList.remove('active');
            confirmationOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Add to Cart buttons
        const addToCartButtons = document.querySelectorAll('.menu-item-btn');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const menuItem = this.closest('.menu-item');
                const itemName = menuItem.querySelector('.menu-item-name').textContent;
                const itemPrice = menuItem.querySelector('.menu-item-price').textContent;
                
                // Visual feedback
                this.textContent = 'Added!';
                this.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    this.textContent = 'Add to Cart';
                    this.style.backgroundColor = '';
                }, 1500);
                
                // In a real application, you would add the item to a shopping cart
                console.log(`Added ${itemName} (${itemPrice}) to cart`);
            });
        });
        
        // Set minimum date for reservation to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);
        
        // Initialize with today's date
        document.getElementById('date').value = today;
        
        // Set default time to next hour
        const now = new Date();
        const nextHour = new Date(now.getTime() + 60 * 60 * 1000);
        const hours = nextHour.getHours().toString().padStart(2, '0');
        const minutes = nextHour.getMinutes().toString().padStart(2, '0');
        document.getElementById('time').value = `${hours}:${minutes}`;
