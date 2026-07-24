document.addEventListener("DOMContentLoaded", () => {
  // Obsługa burger menu (nawigacja mobilna)
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Renderowanie FAQ
  const faqContainer = document.getElementById("faq-container");
  if (faqContainer && typeof siteData !== "undefined") {
    if (siteData.faq.length === 0) {
      faqContainer.innerHTML =
        '<p class="text-gray-500 text-center">Brak dodanych pytań.</p>';
    } else {
      siteData.faq.forEach((item, index) => {
        const faqItem = document.createElement("div");
        faqItem.className =
          "bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300";

        faqItem.innerHTML = `
                    <button class="w-full text-left flex justify-between items-center focus:outline-none group" onclick="toggleFaq(${index})">
                        <span class="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors pr-6">${item.question}</span>
                        <span class="bg-blue-50 p-2 rounded-full flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                            <svg id="icon-${index}" class="w-5 h-5 text-primary transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </span>
                    </button>
                    <div id="answer-${index}" class="mt-4 pt-4 border-t border-gray-100 text-gray-600 hidden leading-relaxed">
                        ${item.answer}
                    </div>
                `;
        faqContainer.appendChild(faqItem);
      });
    }
  }

  // Renderowanie Testów
  const testsContainer = document.getElementById("tests-container");
  if (testsContainer && typeof siteData !== "undefined") {
    if (siteData.tests.length === 0) {
      testsContainer.innerHTML =
        '<p class="text-gray-500 text-center">Brak dostępnych testów.</p>';
    } else {
      siteData.tests.forEach((test) => {
        const testCard = document.createElement("div");
        testCard.className =
          "bg-white hover:bg-blue-50 transition-colors duration-200 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between group";

        testCard.innerHTML = `
                       <div class="flex items-center space-x-5 mb-4 md:mb-0 w-full md:w-auto">
                           <div class="w-14 h-14 bg-blue-100 text-primary rounded-xl flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                           </div>
                           <div>
                               <div class="text-sm text-primary font-semibold mb-1">${test.year}</div>
                               <h3 class="text-lg font-bold text-gray-900 leading-tight">${test.title}</h3>
                           </div>
                       </div>
                       <div class="flex space-x-3 w-full md:w-auto mt-2 md:mt-0">
                          <a href="${test.testUrl || test.url || "#"}" target="_blank" class="flex-1 md:flex-none text-center px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary transition-colors shadow-sm">Arkusz PDF</a>
                          <a href="${test.answersUrl || "#"}" target="_blank" class="flex-1 md:flex-none text-center px-6 py-2.5 bg-white text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-primary transition-colors shadow-sm">Odpowiedzi</a>
                       </div>
                `;
        testsContainer.appendChild(testCard);
      });
    }
  }
});

// Funkcja globalna dla przełączania akordeonu FAQ
window.toggleFaq = function (index) {
  const answerDiv = document.getElementById(`answer-${index}`);
  const iconDiv = document.getElementById(`icon-${index}`);

  if (answerDiv.classList.contains("hidden")) {
    answerDiv.classList.remove("hidden");
    iconDiv.classList.add("rotate-180");
  } else {
    answerDiv.classList.add("hidden");
    iconDiv.classList.remove("rotate-180");
  }
};
