/// <reference types="cypress" />

import { exists } from 'fs';

/**
0 - Login als Gama "agent1"
1 - wähle Übersichtsseite "Indexfälle"
2 - wähle "neuen Indexfall anlegen"
3 - Vorname -> "Julia"
4 - Nachname ->  "Klein"
5 - Geburtsdatum -> "06.10.1982"
6 - Telefonnummer -> "0621842357"
7 - Email -> "jklein@gmx.de"
8 - Straße -> "Hauptstraße"
9 - Hausnummer -> "152"
10 - PLZ von Mannheim -> "68199"
11 - Stadt -> "Mannheim"
12 - wähle "Speichern"
13 - wähle "Nachverfolgung Starten"
14 - Extrahiere Anmeldelink aus dem Template
15 - Logout als GAMA
16 - Anmeldelink aufrufen
17 - Klick auf Weiter
18 - Benutzername: "Julia"
19 - Passwort: "Password01!"
20 - Passwort bestätgen  "Password01!"
21 - Geburtsdatum: 06.10.1982
22 - AGB aktivieren
23 - Klick auf "Registrieren" Button
24 - Klick auf "weiter"
25 - Haben Sie bereits Covid-19 charakteristische Symptome festgestellt? -> "Nein"  
26 - Bitte geben Sie Ihren behandelnden Hausarzt an. -> Dr. Schmidt
27 - Nennen Sie uns bitte den (vermuteten) Ort der Ansteckung: -> "Familie"
28 - Haben Sie eine oder mehrere relevante Vorerkrankungen? -> "nein"
29 - Arbeiten Sie im medizinischen Umfeld oder in der Pflege? -> "nein"
30 - Haben Sie Kontakt zu Risikopersonen? -> "nein"
31 - Klick "weiter"
32 - Kontakte mit anderen Menschen -> "Manfred Klein"
33 - Klick enter 
34 - wähle "Kontakt anlegen" in Popup
35 - Telefonnummer (mobil) -> "01758631534"
36 - Klick auf "speichern"
37 - Klick auf "Erfassung abschließen"
38 - Logout als Bürger
39 - Login als GAMA "agent1"
40 - suche Indexfall "Julia Klein"
41 - wähle Reiter "Kontakte"
42 - klick auf "Manfred Klein"
43 - Geburtsdatum -> "25.07.1980"
44 - Email -> "mklein@gmx.de"
45 - wähle "Speichern"
46 - wähle "Nachverfolgung Starten"
47 - Extrahiere Anmeldelink aus dem Template
48 - Logout als GAMA
49 - Anmeldelink aufrufen
50 - Klick auf "Weiter"
51 - Benutzername: "Manfred"
52 - Passwort: "Password02!"
53 - Passwort bestätgen  "Password02!"
54 - Geburtsdatum: "25.07.1980"
55 - AGB aktivieren
56 - Klick auf "Registrieren" Button
57 - Straße -> "Hauptstraße"
58 - Hausnummer -> "152"
59 - PLZ von Ilvesheim -> "68549"
60 - Stadt -> "Ilvesheim"
61 - Klick auf "weiter"
CHECK: Popup erscheint mit Text "Bitte prüfen Sie die eingegebene PLZ
Das für die PLZ 68549 zuständige Gesundheitsamt arbeitet nicht mit dieser Software. Bitte überprüfen Sie zur Sicherheit Ihre Eingabe. Ist diese korrekt, dann verwenden Sie diese Software nicht weiter und wenden Sie sich bitte an Ihr zuständiges Gesundheitsamt."
62 - Klick "PLZ bestätigen"
CHECK: Es erscheint folgender Text: "Das für Sie zuständige Gesundheitsamt arbeitet nicht mit Quarano. Bitte wenden Sie sich direkt an Ihr Gesundheitsamt.
Landratsamt Rhein-Neckar-Kreis; Gesundheitsamt; Kurfürstenanlage 38-40; 69115 Heidelberg
E-Mail:	infektionsschutz@rhein-neckar-kreis.de; Telefon:	062215221817; Fax:	062215221899"
CHECK: neue Anmeldung als "Manfred" (Passwort: "Password02!") ist nicht möglich
63 - Login als GAMA "agent1"
64 - wähle Übersichtsseite "Kontaktfälle"
CHECK: Status bei "Manfred Klein" ist "Externe PLZ"
65 - Logout als GAMA
 */
describe('S1 - Externe PLZ führt zu Status externe PLZ', () => {
  it('run scenario 1', () => {
    // 0 - Login als Gama "agent1"
    cy.loginAgent();

    // 1 - wähle Übersichtsseite "Indexfälle"
    cy.get('[data-cy="index-cases"]').should('exist').click();

    // 2 - wähle "neuen Indexfall anlegen"
    cy.get('[data-cy="new-case-button"]').should('exist').click();

    // 3 - Vorname -> "Julia"
    cy.get('[data-cy="input-firstname"]').should('exist').type('Julia');

    // 4 - Nachname ->  "Klein"
    cy.get('[data-cy="input-lastname"]').should('exist').type('Klein');

    // 5 - Geburtsdatum -> "06.10.1982"
    cy.get('[data-cy="input-dayofbirth"]').should('exist').type('06.10.1982');

    // 6 - Telefonnummer -> "0621842357"
    cy.get('[data-cy="phone-number-input"]').should('exist').type('0621842357');

    // 7 - Email -> "jklein@gmx.de"
    cy.get('[data-cy="input-email"]').should('exist').type('jklein@gmx.de');

    // 8 - Straße -> "Hauptstraße"
    cy.get('[data-cy="street-input"]').should('exist').type('Hauptstraße');

    // 9 - Hausnummer -> "152"
    cy.get('[data-cy="house-number-input"]').should('exist').type('152');

    // 10 - PLZ von Mannheim -> "68199"
    cy.get('[data-cy="zip-code-input"]').should('exist').type('68199');

    // 11 - Stadt -> "Mannheim"
    cy.get('[data-cy="city-input"]').should('exist').type('Mannheim');

    // 12 - wähle "Speichern"
    cy.get('[data-cy="client-submit-button"]').should('exist').click();

    // 13 - wähle "Nachverfolgung Starten"
    cy.get('[data-cy="start-tracking-span"]').should('exist').click();
  });
});
