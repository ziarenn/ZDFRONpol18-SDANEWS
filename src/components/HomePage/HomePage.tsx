import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/api";
const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);

  // 1. useEffect to hook służący do podpinania się pod konkretny moment cyklu życia komponentu.
  // 2. Cykl życia komponentu:
  // a) zamontowanie (wyświetlenie)
  // b) zmiana jakiejś wartości (moment w którym coś w komponencie się zmienia, np. przychodzi jakiś nowy props lub aktualizuje się stan)
  // c) odmontowanie (komponent znika z ekranu)
  // 3. useEffect przyjmuje 2 argumenty:
  // a) funkcja wykonująca się w zadeklarowanym momencie cyklu życia (patrz pkt wyżej)
  // b) lista dependencji (opcjonalny)
  // - brak listy depencji = UE będzie strzelało cały czas jak zwykła funkcja
  // - pusta lista dependencji = strzał tylko przy zamontowaniu

  // yyyy-mm-dd

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  console.log(day, month, year);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${}-${}-${}&apiKey=${API_KEY}`
      )
      .then((data) => {
        console.log(data.data.articles);
      });
  }, []);
  // FETCH + USEEFFECT TO NIE JEST NAJLEPSZY SPOSÓB NA KOMUNIKACJE Z API W REACTCIE, ALTERNATYEWA: REACT QUERY, TEN SPOSÓB JEST MIMO WSZYSTKO OK
  return <div>HomePage</div>;
};

export default HomePage;
