import React, { Fragment } from "react";
import Footer from "../components/Footer";
import classes from './PrivatePolitics.module.css'

const PrivatePolitics = () => {
  return (
    <Fragment>
    <div className={classes.wrapper} >
    <div className={classes.box} >
      <h1>Polityka Prywatności</h1>
      <ol>
        <li>
          Sklep nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem
          informacji zawartych w plikach cookies.
        </li>
        <li>
          Pliki cookies (tak zwane „ciasteczka”) stanowią dane informatyczne, w
          szczególności pliki tekstowe, które przechowywane są w urządzeniu
          końcowym Użytkownika Sklepu i przeznaczone są do korzystania ze stron
          internetowych Sklepu. Cookies zazwyczaj zawierają nazwę strony
          internetowej, z której pochodzą, czas przechowywania ich na urządzeniu
          końcowym oraz unikalny numer.
        </li>
        <li>
          Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Sklepu
          pliki cookies oraz uzyskującym do nich dostęp jest operator Sklepu.
        </li>
        <li>Pliki cookies wykorzystywane są w celu:</li>
        <ul>
          <li>
            dostosowania zawartości stron internetowych Sklepu do preferencji
            Użytkownika oraz optymalizacji korzystania ze stron internetowych; w
            szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika
            Sklepu i odpowiednio wyświetlić stronę internetową, dostosowaną do
            jego indywidualnych potrzeb;
          </li>
          <li>
            tworzenia statystyk, które pomagają zrozumieć, w jaki sposób
            Użytkownicy Sklepu korzystają ze stron internetowych, co umożliwia
            ulepszanie ich struktury i zawartości;
          </li>
        </ul>
        <li>
          W ramach Sklepu stosowane są dwa zasadnicze rodzaje plików cookies:
          „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies
          „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu
          końcowym Użytkownika do czasu opuszczenia strony internetowej lub
          wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki
          cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas
          określony w parametrach plików cookies lub do czasu ich usunięcia
          przez Użytkownika.
        </li>
        <li>W ramach Sklepu stosowane są następujące rodzaje plików cookies</li>
        <ul>
          <li>
            „niezbędne” pliki cookies, umożliwiające korzystanie z usług
            dostępnych w ramach Sklepu, np. uwierzytelniające pliki cookies
            wykorzystywane do usług wymagających uwierzytelniania w ramach
            Sklepu;
          </li>
          <li>
            pliki cookies służące do zapewnienia bezpieczeństwa, na przykład
            wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania w
            ramach Sklepu;
          </li>
          <li>
            „wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o
            sposobie korzystania ze stron internetowych Sklepu;
          </li>
          <li>
            „funkcjonalne” pliki cookies, umożliwiające „zapamiętanie” wybranych
            przez Użytkownika ustawień i personalizację interfejsu Użytkownika,
            np. w zakresie wybranego języka lub regionu, z którego pochodzi
            Użytkownik, rozmiaru czcionki, wyglądu strony internetowej itp.;
          </li>
          <li>
            „reklamowe” pliki cookies, umożliwiające dostarczanie Użytkownikom
            treści reklamowych bardziej dostosowanych do ich zainteresowań.
          </li>
        </ul>
        <li>
          W wielu przypadkach oprogramowanie służące do przeglądania stron
          internetowych (przeglądarka internetowa) domyślnie dopuszcza
          przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
          Użytkownicy Sklepu mogą dokonać w każdym czasie zmiany ustawień
          dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
          szczególności w taki sposób, aby blokować automatyczną obsługę plików
          cookies w ustawieniach przeglądarki internetowej bądź informować o ich
          każdorazowym zamieszczeniu w urządzeniu Użytkownika Sklepu.
          Szczegółowe informacje o możliwości i sposobach obsługi plików cookies
          dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).
        </li>
        <li>Operator Sklepu informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Sklepu.</li>
        <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Sklepu i wykorzystywane mogą być również przez współpracujących z operatorem Sklepu reklamodawców oraz partnerów.</li>
        <li>Więcej informacji na temat plików cookies dostępnych jest  w sekcji „Pomoc” w menu przeglądarki internetowej.</li>
      </ol>
    </div>
    </div>
    <Footer/>
    </Fragment>
  );
};

export default PrivatePolitics;
