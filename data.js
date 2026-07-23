const siteData = {
  // Sekcja FAQ
  // Aby dodać nowe pytanie, dodaj nowy blok { question: "...", answer: "..." } oddzielony przecinkiem
  faq: [
    {
      question: "Czym jest test kwalifiacyjny i kiedy się odbywa?",
      answer:
        "W pierwszy dzień studiowania odbywa się test, na którego podstawie zostaniecie przypisani do grup podstawowych albo rozszerzonych. Przeważnie najlepsze 30 osób dostaje się na rozszerzenie. TESTU NIE DA SIĘ NIE ZDAĆ. Jeżeli test pójdzie wam kiepsko, to nie martwcie się, napisanie słabo testu nie blokuje dostępu do żadnej ze specjalności. Polecam na kilka tygodni przed początkiem października rozwiązać sobie kilka testów dla odświeżenia zdolności matematycznych. Testy z poprzednich lat możecie znaleźć w sekcji Testy.",
    },
    ,
    /*{
      question: "Kiedy zapisujemy się na specjalności?",
      answer:
        "Dla większości z was odpowiedź brzmi - nigdy! Specjalności będziecie realizować, wybierając odpowiednie przedmioty w trakcie zapisów trwających przed każdym semestrem. Wyjątkiem są nauczyciele, którzy będą musieli w dziekanacie złożyć odpowiedni wniosek już w pierwszym semestrze.",
    }*/ {
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
      question: "Gdzie się płaci za palarnie?",
      answer:
        "Opłatę za palarnie uiszczamy w dziekanacie i wynosi ona 5zł za semestr. Brak ważnego pozwolenia może skutkować wezwaniem rodziców.",
    },
  ],

  // Sekcja Testów
  // Aby dodać nowy test, dodaj nowy blok z rokiem, tytułem i linkami do plików
  tests: [
    {
      year: "2025/2026",
      title: "Test kwalifikujący z matematyki 2025/2026",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2025-26/Analiza1/Kwa25.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2025-26/Analiza1/Kwa25o.pdf",
    },
    {
      year: "2024/2025",
      title: "Test kwalifikujący z matematyki 2024/2025",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2024-25/Analiza1/Kwa24.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2024-25/Analiza1/Kwa24o.pdf",
    },

    {
      year: "2023/2024",
      title: "Test kwalifikujący z matematyki 2023/2024",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2023-24/Analiza1/Kwa23.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2023-24/Analiza1/Kwa23o.pdf",
    },
    {
      year: "2022/2023",
      title: "Test kwalifikujący z matematyki 2022/2023",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2022-23/Analiza1/Kwa22.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2022-23/Analiza1/Kwa22o.pdf",
    },
    {
      year: "2021/2022",
      title: "Test kwalifikujący z matematyki 2021/2022",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2021-22/Analiza1/Kwa21a.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2021-22/Analiza1/Kwa21ao.pdf",
    },
    {
      year: "2020/2021",
      title: "Test kwalifikujący z matematyki 2020/2021",
      testUrl: "https://www.math.uni.wroc.pl/~jwr/2020-21/Analiza1/Kwa20a.pdf",
      answersUrl:
        "https://www.math.uni.wroc.pl/~jwr/2020-21/Analiza1/Kwa20ao.pdf",
    },
  ],
};
