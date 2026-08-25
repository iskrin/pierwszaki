const siteData = {
  // Sekcja FAQ
  // Aby dodać nowe pytanie, dodaj nowy blok { question: "...", answer: "..." } oddzielony przecinkiem
  faq: [
    {
      question: "Czym jest test kwalifikacyjny i kiedy się odbywa?",
      answer:
        "W pierwszy dzień studiowania odbywa się test, na którego podstawie zostaniecie przypisani do grup podstawowych albo rozszerzonych. Przeważnie najlepsze 30 osób dostaje się na rozszerzenie. TESTU NIE DA SIĘ NIE ZDAĆ. Jeżeli test pójdzie wam kiepsko, to nie martwcie się, napisanie słabo testu nie blokuje dostępu do żadnej ze specjalności. Polecam na kilka tygodni przed początkiem października rozwiązać sobie kilka testów dla odświeżenia zdolności matematycznych. Testy z poprzednich lat możecie znaleźć w sekcji Testy.",
    },
    {
      question: "Kiedy zapisujemy się na przedmioty?",
      answer:
        "Dopiero od drugiego semestru. W pierwszym semestrze zostaniecie automatycznie przydzieleni do grup na podstawie wyników testu kwalifikacyjnego.",
    },
    {
      question: "Czy warto iść na rozszerzenie?",
      answer:
        "Zdecydowanie warto! Zalecam podchodzić do sprawy jak najambitniej i spróbować swoich sił na rozszerzeniu. Jeżeli kurs rozszerzony okaże się dla was za trudny, będziecie mogli bez żadnych konsekwencji przepisać się na podstawę.",
    },
    {
      question: "Czy macie czas wolny / czy pracujecie w trakcie studiów?",
      answer:
        'Myślę, że większość z nas nie narzeka na braki czasu wolnego. Oczywiście studia wymagają poświęcenia odpowiedniej ilości czasu na naukę, ale historie o niewychodzeniu z domu i zakuwaniu dzień i noc można raczej wsadzić między bajki. Jeżeli chodzi o pracę, to w trakcie pierwszego roku może być z nią ciężko, choć wyrobienie połowy etatu przy elastycznym grafiku jest jak najbardziej możliwe. Znacząca część studentów udziela korepetycji i to chyba najlepsza praca, jaką możecie dorwać na początku, do czego bardzo zachęcamy. Na 3. roku i wyżej nierzadko studenci pracują już "w branży" jako stażyści lub młodsi specjaliści.',
    },
    {
      question: "Gdzie odbywają się zajęcia?",
      answer:
        'Wszystkie zajęcia "z matematyki" odbywają się w naszym instytucie matematycznym. Poza instytut będziecie musieli się udać na zajęcia z WF (ul. Kuźnicza lub pl. Daniłowskiego) oraz na zajęcia z języków obcych (pl. Nankiera).',
    },
    {
      question: "Czy na zajęciach jest sprawdzana obecność?",
      answer:
        "W 95% nie. Wykłady, jak i ćwiczenia są u nas nieobowiązkowe. Bardzo zachęcamy was jednak do uczęszczania na wszystkie zajęcia odbywające się na pierwszym semestrze. Bardzo ważne jest, aby na początku wyrobić sobie nawyk uczenia się oraz aby przystosować się do uczelnianego trybu nauki. Na ucieczki z zajęć przyjdzie pora na następnych semestrach ;)",
    },
    {
      question: "Co z WF / angielskim?",
      answer:
        "Angielski i WF zaczynacie dopiero od 2. semestru. Jeżeli chodzi o WF, w trakcie licencjatu musicie zrobić 2 semestry. Możliwych sportów do uprawiania jest multum, więc każdy znajdzie coś dla siebie. W przypadku języka angielskiego liczba semestrów do zrobienia będzie zależała od testu zdolności językowych. Liczba obowiązkowych semestrów może wynosić od 0 do 3 w zależności od wyników testu. Test będzie odbywał się zdalnie (!!!!!!) i zostaniecie o nim poinformowani mailowo.",
    },
    {
      question: "Czy muszę umieć programować?",
      answer:
        "Statystyki pokazują, że większość czytających skończy na analizie danych, gdzie zdolności programowania są konieczne. Ale bez stresu, w trakcie studiów będziecie realizować przedmiot Python 1 (nie niektórzy nawet Python 2), gdzie będziecie mieli okazję nauczyć się programowania od podstaw. Kurs Pythona prowadzony przez Dr Jagielle jest moim zdaniem wysokiej jakości, chociaż tempo nauki jest dość szybkie. Dodatkowo nauczycie się programować w R również od podstaw oraz tworzyć bazy danych w PostgreSQL. Więc nie musicie przynieść ze sobą żadnych umiejętności kodowania, jednak ci, którzy takie posiadają, będą mieli trochę łatwiej, szczególnie na początku.",
    },
    {
      question: "Jak wylecieć ze studiów?",
      answer:
        "Jeżeli nie zaliczycie na pierwszym semestrze Analizy Matematycznej 1, zostaniecie skreśleni z listy studentów. To samo tyczy się Analizy Matematycznej 2 na drugim semestrze. Da się z tej nieciekawej sytuacji uratować, ale ogólnie zalecane jest zaliczenie analizy :)",
    },
    {
      question: "Co jeżeli nie zdam przedmiotu?",
      answer:
        "Przed odpowiedzią na pytanie zastanówmy się, jak zdać przedmiot. W większości przypadków (choć nie zawsze) z przedmiotu prowadzone są wykłady i ćwiczenia. Aby zdać cały przedmiot, trzeba zaliczyć oba. Do zaliczenia ćwiczeń przeważnie wystarczy nazbierać odpowiednią liczbę punktów z kolokwiów (sprawdzianów). Aby zaliczyć wykład, trzeba zdać egzamin w sesji egzaminacyjnej. Co ważne, jeżeli nie zaliczymy ćwiczeń, to nie jesteśmy do takiego egzaminu nawet dopuszczeni i już na tym etapie nie zdajemy przedmiotu. Jeżeli uda się zaliczyć ćwiczenia, to ocena z wykładów to przeważnie nasza ocena z egzaminu. Jeżeli nie zaliczymy egzaminu, to czeka nas egzamin poprawkowy w sesji poprawkowej. Jeżeli nie zaliczymy poprawki, to dopiero na tym etapie nie zdajemy przedmiotu. <br><br> W takiej sytuacji, jeżeli przedmiot był obowiązkowy, będziemy musieli go powtórzyć, a taka powtórka kosztuje. Za jedną godzinę wykładów/ćwiczeń płaci się 15 zł. Na przykładzie algebry liniowej 1, jeżeli nie zaliczycie wykładów, czyli nie zdacie egzaminu, to 45 godzin wykładów będzie kosztować was 675 zł, jeżeli nie zostaliście nawet dopuszczeni do egzaminu, ponieważ nie zdaliście ćwiczeń, to będziecie też musieli zapłacić 450 zł za 30 godzin ćwiczeń, czyli razem 450 + 675 = 1125 zł. Jeżeli przedmiot miał mniej godzin ćwiczeń wykładów, to kwota będzie odpowiednio mniejsza. Jednak sami widzicie, że lepiej zdawać przedmioty.",
    },
    {
      question:
        "Czy prowadzący wysyłają prezentacje? / Czy prowadzący są mili?",
      answer:
        'Tak i tak. Na większości przedmiotów pracujemy na skrypcie, a nie na prezentacji. Jeszcze nie zdarzyło mi się, żeby prowadzący odmówił mi jakichkolwiek materiałów z zajęć. Jeżeli chodzi o prowadzących, to oceny wahają się od "w porządku" do "mega kochany". Pomijając moje osobiste opinie, prowadzących, którzy są uniwersalnie nielubiani, można policzyć na palcach jednej ręki i nawet oni nie są aż tacy straszni.',
    },
    {
      question: "Jak wygląda studiowanie na pierwszym semestrze?",
      answer:
        "Wszyscy zostaniecie przypisani do grupy podstawowej lub rozszerzonej. Najważniejsze 3 przedmioty, jakie was czekają, to Analiza Matematyczna 1, Algebra Liniowa 1 oraz Wstęp do Matematyki. Z każdego z tych przedmiotów będziecie mieli wykłady oraz ćwiczenia. Wykład jest dokładnie tym, czym sobie wyobrażacie. Prowadzący wykłada teorię oraz odpowiada na pytania zadane z sali. Grupa wykładowa jest jedna i chodzicie na nią wszyscy razem. <br><br>Grup ćwiczeniowych jest kilka i są one prowadzone przez różne osoby (czasami jest wśród nich wykładowca, czasami nie). Na ćwiczeniach rozwiązujecie listy zadań przygotowane przez wykładowcę. Założenie jest takie, że na ćwiczenia powinniście przyjść z już rozwiązaną w miarę możliwości listą, a wszelkie wątpliwości możecie skonsultować z ćwiczeniowcem. Praktyka pokazuje jednak, że często w natłoku nauki listę zobaczycie na ćwiczeniach pierwszy raz na oczy. Zdecydowanie zachęcamy do rozwiązywania list przed ćwiczeniami, wbrew pozorom przyjście z rozwiązaną nawet częściowo listą o wiele lepiej wpływa na rozumienie tematu niż rozwiązywanie jej na bieżąco z ćwiczeniowcem. <br><br> Ostatecznie na podstawie tych list będą odbywać się kolokwia (również pisane przez wykładowcę), na których będziecie mogli popisać się nowo zdobytą wiedzą. Na pierwszym semestrze kolokwia odbywają się (a przynajmniej odbywały się historycznie) przynajmniej raz na tydzień. Raz z Analizy, raz z Algebry Liniowej. Dochodzą do tego jeszcze 3 kolokwia ze Wstępu do Matematyki i pewnie 2 lub 1 (to nowy przedmiot) ze Wstępu do Kombinatoryki. Opisana częstotliwość kolokwiów dotyczy podstawy, na rozszerzeniu wygląda to trochę inaczej (kolokwia są rzadziej).",
    },
    {
      question: "Czy dużo osób odpada ze studiów?",
      answer:
        "Przemiał wynosi około 40%. Warto pamiętać, że dużo ludzi nie przychodzi nawet na pierwsze zajęcia, ponieważ wybrali inny kierunek, a nie wypisali się poprawnie z naszego. Ostatecznie realnie studia rozpoczyna około 130 ludzi, a kończy 70/80. Mowa tu o licencjacie, jeśli chodzi o magistra, to kończących pełne 5 lat jest jeszcze mniej.",
    },
    {
      question: "Gdzie się płaci za palarnię?",
      answer:
        "Opłatę za palarnię uiszczamy w dziekanacie i wynosi ona 5 zł za semestr. Brak ważnego pozwolenia może skutkować wezwaniem rodziców.",
    },
  ],

  // Sekcja Testów
  // Aby dodać nowy test, dodaj nowy blok z rokiem, tytułem i linkami do plików
  tests: [
    {
      year: "2025/2026",
      title: "Test kwalifikacyjny z matematyki 2025/2026",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2025-26/Analiza1/Kwa25.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2025-26/Analiza1/Kwa25o.pdf",
    },
    {
      year: "2024/2025",
      title: "Test kwalifikacyjny z matematyki 2024/2025",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2024-25/Analiza1/Kwa24.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2024-25/Analiza1/Kwa24o.pdf",
    },

    {
      year: "2023/2024",
      title: "Test kwalifikacyjny z matematyki 2023/2024",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2023-24/Analiza1/Kwa23.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2023-24/Analiza1/Kwa23o.pdf",
    },
    {
      year: "2022/2023",
      title: "Test kwalifikacyjny z matematyki 2022/2023",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2022-23/Analiza1/Kwa22.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2022-23/Analiza1/Kwa22o.pdf",
    },
    {
      year: "2021/2022",
      title: "Test kwalifikacyjny z matematyki 2021/2022",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2021-22/Analiza1/Kwa21a.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2021-22/Analiza1/Kwa21ao.pdf",
    },
    {
      year: "2020/2021",
      title: "Test kwalifikacyjny z matematyki 2020/2021",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2020-21/Analiza1/Kwa20a.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2020-21/Analiza1/Kwa20ao.pdf",
    },
  ],
};
