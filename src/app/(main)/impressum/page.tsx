"use client"

import React from "react";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";


const Page: React.FC = () => (
    <div lang="de" className="w-full max-w-5xl mx-auto flex flex-col gap-10">

        <h1 className="text-3xl text-left font-bold mt-12">
            Impressum
        </h1>

        <article className="mt-5">
            <h2 className="font-bold text-2xl mb-5">
                Angaben gemäß § 5 TMG:
            </h2>
            <Table hideHeader>
                <TableHeader>
                    <TableColumn>Angabe</TableColumn>
                    <TableColumn>Wert</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Mario Di Caprio
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Anschrift
                        </TableCell>
                        <TableCell>
                            Schülinstraße 13/1, 89073 Ulm
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Mobil
                        </TableCell>
                        <TableCell>
                            +49 176 31711648
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Email
                        </TableCell>
                        <TableCell>
                            contact@mariodicaprio.com
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </article>

        <article className="flex flex-col gap-5">
            <h2 className="font-bold text-2xl">
                Haftungsausschluss
            </h2>
            <section>
                <h3 className="font-bold text-xl mb-3">
                    Haftung für Inhalte
                </h3>
                <p className="text-justify">
                    Die Inhalte meiner Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                    Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.
                    Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch
                    nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                    Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                    hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                    einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                    werden wir diese Inhalte umgehend entfernen.
                </p>
            </section>
            <section>
                <h3 className="font-bold text-xl mb-3">
                    Haftungsbeschränkung für externe Links
                </h3>
                <p className="text-justify">
                    Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss
                    habe. Daher kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                    inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
                    Links umgehend entfernen.
                </p>
            </section>
            <section>
                <h3 className="font-bold text-xl mb-3">
                    Urheberrecht
                </h3>
                <p className="text-justify">
                    Die von mir erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                    des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter
                    beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
                    eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei
                    Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </p>
            </section>
        </article>

    </div>
);

export default Page;