document.addEventListener('DOMContentLoaded', () => {
    
    // Obsługa burger menu (nawigacja mobilna)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Renderowanie FAQ
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer && typeof siteData !== 'undefined') {
        if(siteData.faq.length === 0) {
            faqContainer.innerHTML = '<p class="text-gray-500 text-center">Brak dodanych pytań.</p>';
        } else {
            siteData.faq.forEach((item, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'border-b border-gray-200 py-4';
                
                faqItem.innerHTML = `
                    <button class="w-full text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(${index})">
                        <span class="text-lg font-medium text-gray-800 hover:text-primary transition-colors">${item.question}</span>
                        <svg id="icon-${index}" class="w-5 h-5 text-primary transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="answer-${index}" class="mt-3 text-gray-600 hidden leading-relaxed">
                        ${item.answer}
                    </div>
                `;
                faqContainer.appendChild(faqItem);
            });
        }
    }

    // Renderowanie Testów
    const testsContainer = document.getElementById('tests-container');
    if (testsContainer && typeof siteData !== 'undefined') {
        if(siteData.tests.length === 0) {
            testsContainer.innerHTML = '<p class="text-gray-500 text-center">Brak dostępnych testów.</p>';
        } else {
            siteData.tests.forEach((test) => {
                const testCard = document.createElement('div');
                testCard.className = 'bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300';
                
                testCard.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div>
                            <span class="inline-block px-3 py-1 bg-blue-50 text-primary text-sm font-semibold rounded-full mb-3">${test.year}</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">${test.title}</h3>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3 mt-4">
                        <a href="${test.testUrl || test.url || '#'}" target="_blank" class="inline-flex items-center justify-center bg-primary hover:bg-primaryHover text-white font-medium py-2 px-4 rounded-lg transition-colors">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Pobierz test
                        </a>
                        <a href="${test.answersUrl || '#'}" target="_blank" class="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary border border-primary font-medium py-2 px-4 rounded-lg transition-colors shadow-sm">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Odpowiedzi
                        </a>
                    </div>
                `;
                testsContainer.appendChild(testCard);
            });
        }
    }
});

// Funkcja globalna dla przełączania akordeonu FAQ
window.toggleFaq = function(index) {
    const answerDiv = document.getElementById(`answer-${index}`);
    const iconDiv = document.getElementById(`icon-${index}`);
    
    if (answerDiv.classList.contains('hidden')) {
        answerDiv.classList.remove('hidden');
        iconDiv.classList.add('rotate-180');
    } else {
        answerDiv.classList.add('hidden');
        iconDiv.classList.remove('rotate-180');
    }
};
