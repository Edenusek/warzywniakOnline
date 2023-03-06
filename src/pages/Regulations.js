import React, { Fragment } from "react";
import Footer from "../components/Footer";
import classes from "./Regulations.module.css";

const Regulations = () => {
  return (
    <Fragment>
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <h1>Regulamin</h1>
        <h3>Regulamin sklepu Cebula Celestyna</h3>
        <p>§1</p>
        <h4>POSTANOWIENIA OGÓLNE</h4>
        <span>
          Serwis internetowy dostępny pod adresem internetowym
          cebulaCelestyna.com (zwany dalej „Serwisem”) prowadzony jest przez
          Cebule – Celestyne z siedzibą w Warzywniaku przy ulicy Ogórkowej 5,
          00-000 Sałatkowo (zwana dalej „Sprzedawcą” lub „Usługodawcą”). Kontakt
          ze Sprzedawcą/Usługodawcą możliwy jest poprzez wiadomość drogą
          elektroniczną na adres: kontakt@kontakt
        </span>
        <div className={classes.olBox}>
          <ol>
            <li>
              Niniejszy dokument (zwany dalej „Regulaminem”) określa zasady
              korzystania z serwisu świadczącego następującego usługi:
            </li>
            <ol>
              <li>dostęp online do zapoznania się z ofertą Sprzedawcy,</li>
              <li>zakup oferowanych towarów przez Internet,</li>
            </ol>
            <li>Regulamin skierowany jest do klientów indywidualnych.</li>
            <li>
              Do korzystania z Serwisu i dokonania zakupów niezbędne jest
              spełnienie następujących wymagań technicznych:
            </li>
            <ol>
              <li>posiadanie urządzenia multimedialnego:</li>
              <ol>
                <li>z dostępem do Internetu,</li>
                <li>z zainstalowaną najnowszą wersją przeglądarki,</li>
                <li>
                  z systemem operacyjnym Windows, Mac OS, iOS lub Android,
                </li>
                <li>z obsługą plików Cookies,</li>
              </ol>
              <li>dostęp do poczty elektronicznej,</li>
              <li>posiadanie numeru telefonu komórkowego.</li>
            </ol>
          </ol>
        </div>

        <p>§2</p>
        <h4>DEFINICJE</h4>
        <span>
          Formularz zamówienia – formularz dostępny w Serwisie umożliwiający
          złożenie Zamówienia poprzez dodanie produktów z oferty do wirtualnego
          koszyka, podanie danych osobowych i określenie terminu i adresu
          dostawy oraz sposobu płatności.
        </span>
        <ol>
          <li>
            Zamówienie – Usługa elektroniczna świadczona przez Usługodawcę:
            oświadczenie woli klienta, kończące wypełnianie Formularzu
            zamówienia poprzez naciśnięcie przycisku „zamawiam z obowiązkiem
            zapłaty”.
          </li>
          <li>Użytkownik – osoba korzystająca z Serwisu.</li>
          <li>
            Klient – osoba fizyczna posiadająca pełną zdolność do czynności
            prawnych, a w wypadkach przewidzianych przez przepisy powszechnie
            obowiązujące także osoba fizyczna posiadająca ograniczoną zdolność
            do czynności prawnych lub osoba prawna albo jednostka organizacyjna
            nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność
            prawną, która zawarła lub zamierza zawrzeć Umowę Sprzedaży ze
            Sprzedawcą.
          </li>
          <li>
            Konsument – Klient, będący konsumentem w rozumieniu ustawy o prawach
            konsumenta.
          </li>
          <li>Produkt – towar prezentowany w sklepie internetowym Serwisu.</li>
        </ol>

        <p>§3</p>
        <h4>ZAKUPY W SERWISIE</h4>
        <ol>
          <li>
            Serwis prowadzi sprzedaż detaliczną oraz umożliwia zapoznanie się z
            ofertą i wysłanie zapytania ofertowego dla sprzedaży detalicznej.
          </li>
          <li>
            Sprzedawca umożliwia realizację zamówienia i dostawę Produktów na
            terenie wybranych miast Polski podanych w zakładce Dostawa i
            płatności. Realizacja zamówienia i dostawy na innym obszarze jest
            możliwa tylko po wcześniejszym kontakcie i otrzymaniu jednoznacznego
            potwierdzenia od Sprzedawcy.
          </li>
          <li>
            Ceny wszystkich Produktów widoczne w Serwisie to ceny brutto
            (zawierające podatek VAT), wyrażone w złotych polskich.
          </li>
          <li>
            Produkty mogą nieznacznie odbiegać wagą od podanej wagi na stronie
            Serwisu. Podane ceny są cenami za porcje, a Klient dodając Produkt
            do wirtualnego koszyka zgadza się na otrzymanie Produktu, którego
            waga będzie się różnić o +/- 10%.
          </li>
          <li>W celu złożenia zamówienia należy wykonać następujące kroki:</li>
          <ol>
            <li>
              Wybrać Produkt lub Produkty i dodać je do wirtualnego koszyka.
            </li>
            <li>
              W widoku Koszyk użyć przycisku „Przejdź do realizacji zamówienia”.
            </li>
            <li>
              Wybrać termin dostawy, uzupełnić wymagane dane osobowe i wybrać
              metodę płatności.
            </li>
            <li>Nacisnąć przycisk „Zamawiam z obowiązkiem zapłaty”</li>
          </ol>
          <li>
            Z chwilą otrzymania przez Klienta wiadomości e-mail z potwierdzeniem
            zamówienia, zostaje zawarta Umowa Sprzedaży między Klientem a
            Sprzedawcą.
          </li>
          <li>
            Zdjęcia stanowią propozycję podania. Ze względu na charakter
            sprzedawanych produktów mogą się one różnić od przedstawionych na
            zdjęciach.
          </li>
        </ol>

        <p>§4</p>
        <h4>KOSZTY I SPOSOBY DOSTAWY</h4>

        <ol>
          <li>
            Produkty dostarczane są wyłącznie na terenie miast województwa
            Śląskiego (mieszczące się w zakresie kodów pocztowych) za pomocą
            własnego transportu lub wyspecjalizowanej, zewnętrznej firmy pod
            adres podany w Formularzu zamówienia
          </li>
          <li>
            Dostawa zostanie zrealizowana we wskazanym w Formularzu terminie(nie
            później niż 10 dni od zrealizowania płatności). Godziny dostarczenia
            zamówienia są orientacyjne, zależy od lokalizacji i zdarzeń
            drogowych
          </li>
        </ol>

        <p>§5</p>
        <h4>PŁATNOŚCI</h4>

        <ol>
          <li>Dostępne formy płatności:</li>
          <ol>
            <li>Karty płatnicze Visa i MasterCard</li>
            <li>Przelewy elektroniczne</li>
            <li>Blik</li>
            <li>Portfele elektroniczne</li>
          </ol>
          <li>
            Podmiotem świadczącym obsługę płatności online jest Przelewy24.
          </li>
        </ol>

        <p>§6</p>
        <h4>ODSTĄPIENIE OD UMOWY</h4>

        <ol>
          <li>
            Konsument, który zawarł umowę na odległość, ma prawo od niej
            odstąpić bez podawania przyczyny w terminie 14 dni kalendarzowych, z
            zastrzeżeniem 6 ust. 2.
          </li>
          <li>
            Zgodnie z art. 38 ustawy o prawach konsumenta prawo odstąpienia od
            umowy nie przysługuje Konsumentowi w odniesieniu do umów:
          </li>
          <ol>
            <li>
              w której przedmiotem świadczenia jest rzecz nieprefabrykowana,
              wyprodukowana według specyfikacji Konsumenta lub służąca
              zaspokojeniu jego zindywidualizowanych potrzeb,
            </li>
            <li>
              w której przedmiotem świadczenia jest rzecz ulegająca szybkiemu
              zepsuciu lub mająca krótki termin przydatności do użycia,
            </li>
            <li>
              w której przedmiotem świadczenia jest rzecz dostarczona w
              zapieczętowanym opakowaniu, której po otwarciu opakowania nie
              można zwrócić ze względu na ochronę zdrowia lub ze względów
              higienicznych, jeżeli opakowanie zostało otwarte po dostarczeniu,
            </li>
            <li>
              w której przedmiotem świadczenia są rzeczy, które po dostarczeniu,
              ze względu na swój charakter, zostają nierozłącznie połączone z
              innymi rzeczami.
            </li>
          </ol>
          <li>
            Oświadczenie o odstąpieniu od umowy może zostać złożone w
            następującej formie:
          </li>
          <ol>
            <li>
              pisemnie na adres: CebulaCelestyna Pora ul. Marchwiowa 3/3, 00-000
              Sałatkowo.
            </li>
            <li>
              w formie elektronicznej poprzez wysłanie na adres:
              kontakt@panjarzyna.pl
            </li>
            <li>Do oświadczenia należy dołączyć dowód zakupu.</li>
          </ol>
          <li>Wzór oświadczenia o odstąpieniu od umowy:</li>
          <li>
            Sprzedawca ma obowiązek niezwłocznie, nie później niż w terminie 14
            dni kalendarzowych od dnia otrzymania oświadczenia konsumenta o
            odstąpieniu od umowy, zwrócić konsumentowi wszystkie dokonane przez
            niego płatności. Sprzedawca dokonuje zwrotu płatności na numer konta
            wskazany o oświadczeniu. Jeżeli Sprzedawca nie zaproponował, że sam
            odbierze Produkt od konsumenta, może wstrzymać się ze zwrotem
            płatności otrzymanych od konsumenta do chwili otrzymania Produktu z
            powrotem lub dostarczenia przez konsumenta dowodu jego odesłania, w
            zależności od tego, które zdarzenie nastąpi wcześniej.
          </li>
          <li>
            Konsument ma obowiązek niezwłocznie, nie później niż w terminie 14
            dni kalendarzowych od dnia, w którym odstąpił od umowy, zwrócić
            Produkt Sprzedawcy, chyba że Sprzedawca zaproponował, że sam
            odbierze Produkt. Do zachowania terminu wystarczy odesłanie Produktu
            przed jego upływem. Konsument może zwrócić Produkt na adres: ul.
            Marchwiowa 3/3, 00-000 Sałatkowo.
          </li>
        </ol>

        <p>§7</p>
        <h4>POSTĘPOWANIE REKLAMACYJNE</h4>
        <ol>
          <li>
            Klient w przypadku jeżeli stwierdzi wady Produktów, ma prawo
            złożenia reklamacji. Złożenie reklamacji musi nastąpić w 24 godziny
            od momentu dostawy.
          </li>
          <li>
            Reklamację należy przesłać na adres kontakt@panjarzyna.pl lub listem
            poleconym na adres CebulaCelestyna – ul. Marchwiowa 3/3, 00-000
            Sałatkowo. Rekomenduje się dołączenie do reklamacji dowodu zakupu
            Produktów lub w inny sposób wykazanie nabycia Produktów oraz podanie
            czego dotyczy niezgodność Produktów z umową.
          </li>
          <li>
            Rozpatrzenie reklamacji następuje w terminie 7 dni od daty złożenia
            reklamacji.
          </li>
          <li>
            sposobie rozstrzygnięcia reklamacji Klient zostanie poinformowany na
            wskazany adres e-mail.
          </li>
          <li>
            W przypadku gdy wskutek rozstrzygnięcia reklamacji ma nastąpić zwrot
            ceny za Produkty objęte taką reklamacją, należy podać numer konta na
            które taki zwrot zostanie dokonany.
          </li>
        </ol>

        <p>§8</p>
        <h4>POSTANOWIENIA KOŃCOWE</h4>
        <ol>
          <li>
            Usługodawca zastrzega sobie prawo zmiany niniejszego Regulaminu.
            Zmiany nie mogą naruszać praw Klientów, wynikających z Zamówień
            złożonych przed wprowadzeniem zmiany. Zmiana Regulaminu wchodzi w
            życie w terminie 14 dni od opublikowania w Serwisie. Usługodawca
            poinformuje Zarejestrowanego Użytkownika lub Użytkownika zapisanego
            na Newsletter o zmianie Regulaminu za pomocą wiadomości przesłanej
            drogą elektroniczną zawierającej tekst zmienionego Regulaminu.
            Jeżeli Zarejestrowany Użytkownik lub Użytkownik zapisany na
            Newsletter nie zaakceptuje zmian, powinien powiadomić o tym fakcie
            Administratora poprzez przesłanie informacji zwrotnej o treści „Nie
            akceptuję zmian Regulaminu”, co będzie jednoznaczne z wyrażeniem
            prośby o usunięcie Konta w Serwisie lub/i zaprzestanie otrzymywania
            Newslettera.
          </li>
          <li>
            W sprawach nieuregulowanych w Regulaminie mają zastosowanie
            powszechnie obowiązujące przepisy prawa polskiego, w szczególności:
            Kodeksu cywilnego; ustawy o świadczeniu usług drogą elektroniczną z
            dnia 18 lipca 2002 r. (Dz.U. 2002 nr 144, poz. 1204 ze zm.); dla
            Umów Sprzedaży zawartych do 24 grudnia 2014 roku z Klientami
            będącymi konsumentami – przepisy ustawy o ochronie niektórych praw
            konsumentów oraz o odpowiedzialności za szkodę wyrządzoną przez
            produkt niebezpieczny z dnia 2 marca 2000 r. (Dz.U. 2000 nr 22, poz.
            271 ze zm.) oraz ustawy o szczególnych warunkach sprzedaży
            konsumenckiej oraz o zmianie Kodeksu cywilnego z dnia 27 lipca 2002
            r. (Dz.U. 2002 nr 141, poz. 1176 ze zm.); dla Umów Sprzedaży
            zawartych od 25 grudnia 2014 roku z Klientami będącymi konsumentami
            – przepisy ustawy o prawach konsumenta z dnia 30 maja 2014 r. (Dz.U.
            2014 r. poz. 827 ze zm.); oraz inne właściwe przepisy powszechnie
            obowiązującego prawa.
          </li>
          <li>
            Konsument ma możliwość skorzystania z pozasądowych sposobów
            rozpatrywania reklamacji i dochodzenia roszczeń. Między innymi,
            Konsument ma możliwość:
          </li>
          <ol>
            <li>
              zwrócenia się do stałego polubownego sądu konsumenckiego z
              wnioskiem o rozstrzygnięcie sporu wynikłego z zawartej Umowy
              Sprzedaży,
            </li>
            <li>
              skorzystania z pomocy powiatowego (miejskiego) rzecznika praw
              konsumenta lub organizacji społecznej, do której statutowych zadań
              należy ochrona konsumentów.
            </li>
          </ol>
          <li>
            Bardziej szczegółowych informacji na temat pozasądowych sposobów
            rozpatrywania reklamacji i dochodzenia roszczeń, Konsument może
            szukać na stronie internetowej http://www.uokik.gov.pl
          </li>
          <li>
            Konsument może również skorzystać z platformy ODR, która dostępna
            jest pod adresem http://ec.europa.eu/consumers/odr Platforma służy
            rozstrzyganiu sporów pomiędzy konsumentami i przedsiębiorcami
            dążącymi do pozasądowego rozstrzygnięcia sporu dotyczącego
            zobowiązań umownych wynikających z internetowej umowy sprzedaży lub
            umowy o świadczenie usług.
          </li>
        </ol>
      </div>
    </div>
    <Footer/>
    </Fragment>
  );
};

export default Regulations;
