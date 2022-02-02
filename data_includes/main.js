PennController.ResetPrefix(null);
PennController.AddHost("https://amor.cms.hu-berlin.de/~anamjoya/zeitungsstudie/");
PennController.DebugOff();

Sequence("Info","Einverständniserklärung","Code","Anleitung","Counter","Trial","Meta");
SetCounter("Counter","inc",1);

//WILLKOMMENSSEITE & INFOBLATT
newTrial("Info",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newText("willkommen", "<p>Willkommen zu unserem Online-Experiment!</p> Bevor es losgeht, benötigen wir zunächst Ihre Einwilligung zur Teilnahme. Bitte lesen Sie dazu als erstes die folgenden Informationen.")
        .center()
        .print()
    ,
    newText("Infoblatt", "<p><b>Informationen zur SFB-Studie</b></p>Im Rahmen des wissenschaftlichen Projekts „Register perception in a multilingual context of German: Differentiation, awareness, and attitudes“ (SFB 1412, Projekt C07) von Prof. Dr. Heike Wiese und Dr. Antje Sauermann (Humboldt-Universität zu Berlin, im Folgenden HU) führen wir, in Kooperation mit Prof.  Zappen-Thomson (University of Namibia, Windhoek), eine Studie zum Thema „Sprachsituationen im Namibia-Deutsch“ durch. In dieser Studie wollen wir herausfinden, wie Menschen sprachliche Äußerungen (z.B. Wörter und Sätze) verarbeiten.<br>Wir laden Sie hiermit ein, an unserer Studie teilzunehmen. Die Teilnahme ist freiwillig. Möchten Sie nicht an unserer Studie teilnehmen, werden Ihnen daraus keinerlei Nachteile entstehen. Bevor Sie sich entscheiden, ob Sie an unserer Studie teilnehmen möchten, lesen Sie bitte folgende Informationen sorgfältig durch und besprechen Sie dies mit anderen Personen, falls Sie dies wünschen. Sollten Sachverhalte unklar sein oder Sie weitere Fragen haben, zögern Sie nicht, nachzufragen. Wir geben Ihnen gerne Auskunft.</p><b>Details der Studie</b></p>Dies ist die erste von drei Teilstudien. Sie werden einen Zeitungsartikel lesen und darin enthaltene sprachliche Auffälligkeiten identifizieren. Außerdem werden wir Sie bitten, einen Fragebogen auszufüllen, über den wir einige persönliche Angaben (z.B. Alter, Geschlecht, Beruf) sowie Informationen zu den von Ihnen gesprochenen Sprachen und über Ihren Sprachgebrauch erfahren, die uns bei unserer Studie helfen können. Die Datensätze, die in den Teilstudien erhoben werden, werden miteinander verknüpft.<br></p><b>Widerruf und Löschung</b></p>Wir weisen Sie ausdrücklich darauf hin, dass Sie ohne Angabe von Gründen das Experiment jederzeit abbrechen und ihre Zusage zur Teilnahme an Folgeexperimenten widerrufen können. Weiterhin können Sie es ablehnen, Fragen zu beantworten. Hieraus entstehen Ihnen keine Nachteile. Zu Beginn der folgenden Datenerhebung erhalten Sie einen individuellen Code, über den wir Ihre Daten auch nach der Datenerhebung löschen können. Nach der Anonymisierung der Daten ist nur noch eine Löschung der biometrischen Daten (der handschriftlich ausgefüllten Fragebögen) möglich.<br></p><b>Vertraulichkeit</b></p>Die im Rahmen der Studie erhobenen Daten umfassen die Angaben auf den Fragebögen sowie die persönlichen Daten zum Alter, Geschlecht, Beruf und Sprach(en)gebrauch. Diese Angaben werden pseudonymisiert und von uns gespeichert. Die Verbindung der Datensätze der Teilstudien erfolgt über einen individuellen Code, den Sie von uns erhalten haben.<br>Alle Daten und Informationen, die wir in diesem Experiment erheben, werden vertraulich behandelt. Daten, die auf dem Computer gespeichert werden, sind pseudonymisiert, verschlüsselt und durch Passwörter gesichert. Sie werden nicht zusammen mit Informationen gespeichert, die dabei helfen könnten, die Daten mit einzelnen Versuchspersonen in Bezug zu setzen. Alle beteiligten Mitarbeiter*innen sind auf die gewissenhafte Einhaltung der datenschutzrechtlichen Anforderungen nach der Datenschutz-Grundverordnung verpflichtet worden.<br></p><b>Weiterverwertung der Daten und langfristige Speicherung</b></p>Publikationen der Forschungsergebnisse in wissenschaftlichen Fachzeitschriften finden nur mit vollständig anonymisierten Daten statt. In den publizierten Fachartikeln genutzte Daten werden mit Bezeichnung verwendeter Datensätze in anonymer Form auf einem vom Sonderforschungsbereich 1412 entwickelten Datenportal gelistet, aber nicht gespeichert. Für die Publikationen und Speicherung der in den Fachartikeln genutzten Daten werden Forschungsdatenrepositorien genutzt. Dort wird die Vollständigkeit der Anonymisierung geprüft. Falls erforderlich, werden zusätzliche Maßnahmen zur Anonymisierung vorgenommen. Die pseudonymisierten Rohdaten verbleiben auf einem HU-internen, verschlüsselten und zugangsbeschränkten Speicher (HU-Box). Entsprechend den gesetzlichen Bestimmungen werden personenbezogene Daten jeweils zum frühestmöglichen Zeitpunkt pseudonymisiert bzw. anonymisiert. Unmittelbar personenbezogene Daten (wie beispielsweise Einwilligungserklärungen) werden sofort nach Ende des Forschungsprojektes, spätestens nach 10 Jahren gelöscht bzw. vernichtet. Die anonymisierten Untersuchungsdaten werden entsprechend den Empfehlungen der Deutschen Forschungsgemeinschaft (DFG) zur Sicherung guter wissenschaftlicher Praxis für die Dauer von mindestens 10 Jahren zu Nachweiszwecken aufbewahrt.<br>Eine Löschung anonymer Daten ist nicht vorgesehen. Die Daten werden, je nach Reichweite der Einwilligung der Versuchspersonen und Art der Daten, nur für das angegebene Forschungsprojekt genutzt, oder auch externen Forschern für rein wissenschaftliche Zwecke oder öffentlich zugänglich gemacht.<br>Falls Sie Fragen zu dieser Studie haben, kontaktieren Sie bitte: Britta Schulte, Prof. Dr. Heike Wiese oder Dr. Antje Sauermann (Humboldt-Universität zu Berlin, Sprach- und literaturwissenschaftliche Fakultät, 030-2093-9674 / 9675, britta.schulte@hu-berlin.de / heike.wiese@hu-berlin.de / antje.sauermann@hu-berlin.de).<br></p><b>Betroffenenrechte</b></p>Im Hinblick auf Ihre nicht-anonymisierten personenbezogenen Daten haben Sie im Rahmen der gesetzlichen Vorgaben gegenüber den verantwortlichen Projektleiterinnen grundsätzlich Anspruch auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch.<br>Darüber hinaus haben Sie das Recht, Ihre Einwilligung bis zur Anonymisierung Ihrer Daten zu widerrufen. Dies hat zur Folge, dass die Verarbeitung Ihrer personenbezogenen Daten, nach Maßgabe Ihrer Widerrufserklärung, für die Zukunft unzulässig wird. Dies berührt die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung jedoch nicht.<br>Haben Sie Zweifel an der Rechtmäßigkeit der Verarbeitung der Sie betreffenden personenbezogenen Daten, haben Sie das Recht, bei einer mitgliedstaatlichen Aufsichtsbehörde Beschwerde einzulegen. Zuständige Aufsichtsbehörde für die Humboldt-Universität zu Berlin ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin, Tel.: +49 30 13889-0, E-Mail: mailbox@datenschutz-berlin.de.<br>Kontaktdaten der Datenschutzbeauftragten der Humboldt-Universität zu Berlin: Gesine Hoffmann-Holland, Unter den Linden 6, 10099 Berlin; E-Mail: datenschutz@uv.hu-berlin.de.<br></p><b>Kontaktdaten Projektleitung</b><br>Prof. Dr. Heike Wiese / Dr. Antje Sauermann <br>Sprach- und literaturwissenschaftliche Fakultät<br>Institut für deutsche Sprache und Linguistik<br>Unter den Linden 6, 10999 Berlin<br>Telefon: +49 30 2093 9674 / 9675<br></p>Es steht Ihnen frei, an unserer Studie teilzunehmen. Falls Sie sich entschließen, nicht an der Studie teilzunehmen, hat dies für Sie keine negativen Folgen. Falls Sie sich entschließen, an der Studie teilzunehmen, werden Sie gebeten, eine Einwilligungserklärung zur Teilnahme abzugeben und den Erhalt dieses Informationsblattes zu bestätigen. Auch danach steht es Ihnen jederzeit frei, das Experiment abzubrechen, ohne dafür Gründe angeben zu müssen.<br></p>")
    ,
    newCanvas("Info",1250,1300)
         .add(100,0, getText("Infoblatt"))
         .print()
    ,
    newButton("weiter","Weiter zur Einwilligungserklärung")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
    getButton("weiter")
        .wait()
)
    ,
//EINVERSTÄNDNISERKLÄRUNG
newTrial("Einverständniserklärung",
newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
   ,
    newText("Einwilligungserklärung","<p><b>Einwilligungserklärung für Proband*innen für das Projekt <i>Register perception in a multilingual context of German: Differentiation, awareness, and attitudes</i></b><br></p>Ich bin über die geplante Untersuchung für das Projekt von Prof. Dr. Heike Wiese und Dr. Antje Sauermann (Humboldt-Universität zu Berlin), welches in Kooperation mit Prof. Marianne Zappen-Thomson (University of Namibia, Windhoek) durchgeführt wird, aufgeklärt worden. Ich habe das vorangehende Proband*inneninformationsblatt für das obige Projekt gelesen und verstanden. Ich fühle mich körperlich in der Lage, an dem Versuch teilzunehmen. Ich bin darauf aufmerksam gemacht worden, dass keine medizinische Diagnostik durchgeführt wird und die aufgezeichneten Daten nicht zur medizinischen Diagnostik verwendet werden.<br></p>Meine Teilnahme an der Studie ist freiwillig. Mir entstehen bei Nichtteilnahme an der Studie keine Nachteile. Ich kann meine Einwilligung jederzeit mündlich bis zur Anonymisierung meiner Daten ohne Angabe von Gründen widerrufen, ohne dass es nachteilige Folgen für mich haben wird. Im Falle meines Widerrufs werden meine persönlichen Daten mit sofortiger Wirkung gelöscht. Da meine Daten nur unter einem Code ohne namentliche Zuordnungsliste gespeichert werden, ist ein etwaiger Widerruf nur bis zur Beendigung der Erhebung meiner Daten oder unter Angabe des Codes möglich. Nach der Erhebung bzw. ohne Mitteilung des Codes ist den Forschenden die Zuordnung der Daten zu meiner Person nicht mehr möglich. Der Code wird mir zu Beginn der Datenerhebung ausgehändigt.<br></p>Mir ist bekannt, dass ich die Studie jederzeit – ohne dass mir daraus Nachteile entstehen – abbrechen kann. Publikationen der Ergebnisse in Fachzeitschriften finden nur mit vollständig anonymisierten Daten statt. Publikationen werden mit Bezeichnung verwendeter Datensätze in anonymer Form auf einem vom Sonderforschungsbereich 1412 entwickelten Datenportal gelistet, aber nicht gespeichert. Für Publikationen und Speicherung der in Publikationen genutzten Daten wird ein Forschungsdatenrepositorium genutzt.<br></p>Unmittelbar personenbezogene Daten (beispielsweise Einwilligungserklärungen) werden sofort nach Ende des Forschungsprojektes, spätestens nach 10 Jahren gelöscht bzw. vernichtet. Die anonymisierten Untersuchungsdaten werden entsprechend den Empfehlungen der DFG zur Sicherung guter wissenschaftlicher Praxis für die Dauer von mindestens 10 Jahren zu Nachweiszwecken aufbewahrt. Biometrische und andere personenbeziehbare Daten werden maximal 10 Jahre nach Veröffentlichung der Forschungsergebnisse zu Nachweiszwecken aufbewahrt und danach vollständig anonymisiert. Eine Löschung anonymer Daten ist nicht vorgesehen.<br></p>Ich habe das Proband*inneninformationsblatt (vorherige Seite) gelesen, fühle mich ausreichend informiert und habe verstanden, worum es geht.<br></p>Mir wurde ausreichend Gelegenheit gegeben, Fragen zu stellen, die alle für mich ausreichend beantwortet wurden. Ich hatte genügend Zeit, mich zu entscheiden.<br></p>Ich habe eine Kopie des Proband*inneninformationsblatts über das Forschungsvorhaben sowie eine Kopie der Einwilligungserklärung erhalten.<br></p>Ich erkläre mich freiwillig zur Teilnahme an der geplanten Untersuchung bereit.<br></p>Ich willige darin ein, dass...<br>...die einzelnen erhobenen Datensätze miteinander verknüpft werden.<br>...meine Daten, wie in dem Proband*inneninformationsblatt beschrieben, verarbeitet werden, die Untersuchungsdatensätze in anonymer Form auf einem Datenportal gelistet und meine anonymisierten (biometrischen und nicht biometrischen) Untersuchungsdaten in einem Forschungsdatenrepositorium gespeichert werden. Meine Daten werden nur für das oben beschriebene wissenschaftliche Projekt und zu keinem anderen Zweck verarbeitet.<br></p>Darüber hinaus bin ich damit einverstanden, dass über das Forschungsdatenrepositorium...<br>...meine anonymisierten (biometrischen und nicht biometrischen) Untersuchungsdaten Wissenschaftler*innen außerhalb dieses Projektes für wissenschaftliche Zwecke und unter Einhaltung der im Informationsblatt beschriebenen Datenverarbeitungsschritte zur Verfügung gestellt werden.<br>...mein anonymisierter Datensatz außerhalb dieses Projektes zur weiteren Nutzung der Öffentlichkeit zur Verfügung gestellt wird. Dies gilt ausschließlich für nicht-biometrische Daten.<br></p>Ich habe zu Beginn der Untersuchung einen Code ausgehändigt bekommen und willige ein, dass meine Datensätze, die zu unterschiedlichen Zeitpunkten entstehen, mittels dieses Codes miteinander verknüpft werden dürfen.<br></p>")
    ,
    newCanvas("Einwilligung",1300,800)
       .add(100,0, getText("Einwilligungserklärung"))
       .print()
    ,
    newButton("Zustimmen", "Ich stimme allen eben genannten Punkten ausdrücklich zu und willige ein, das Experiment zu beginnen.")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
    getButton("Zustimmen")
        .wait()
    )
,
//CODE-EINGABE
newTrial("Code",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newText("Code-Anleitung","</p><b>Vielen Dank! Bitte tragen Sie nun Ihren 10-stelligen Code in das unten stehende Textfeld ein und gehen dabei nach dem folgenden Schema vor:</b><br></p>1. Der zweite und der letzte Buchstabe des Vornamens Ihrer Mutter (bei „Elke“: „LE“). Ist Ihnen der Name unbekannt, der zweite und der letzte Buchstabe des Vornamens Ihrer Großmutter; ist Ihnen auch dieser Name unbekannt: XX.<br>2. Der zweite und der letzte Buchstabe des Vornamens Ihres Vaters (bei „Martin“: „AN“). Ist Ihnen der Name unbekannt, der zweite und der letzte Buchstabe des Vornamens Ihres Großvaters; ist dir auch dieser Name unbekannt: XX.<br>3. Ihr eigener Geburtstag (nur der Tag, zweistellig, z.B. 06).<br>4. Der Geburtstag (zweistellig, s.o.) Ihrer Mutter, wenn unbekannt: Ihres Vaters, wenn unbekannt: Ihrer Großmutter, wenn unbekannt: Ihres Großvaters (Bsp.: Alle unbekannt: 00).<br>5. Der 3. und der letzte Buchstabe des Geburtsnamens Ihrer Mutter, bei Unkenntnis: Ihres eigenen Nachnamens (bei „Müller“ LR).<br></p>Der Code im obigen Beispiel lautet also: LE AN 06 00 LR.<br>Bitte tragen Sie nun Ihren eigenen Code in das Textfeld ein und bestätigen Sie die Eingabe mit Enter.")
,
    newCanvas("Anleitung",1050,300)
    .add(200,0,getText("Code-Anleitung"))
    .print()
,
    newCanvas("Code-Textfeld", 1, 10)
        .center()
        .print()
,
    newTextInput("Texteingabe-Code")
        .center()
        .print()
,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
    getTextInput("Texteingabe-Code")
        .wait()
        .settings.log("final")
,
    newText("Danke","Vielen Dank! Als nächstes erhalten Sie eine kurze Anleitung für das Experiment. Klicken Sie bitte auf den unteren Button, um zu beginnen.<b></p>")
        .center()
        .print()
,
    newButton("weiter","Anleitung beginnen")
        .center()
        .print()
,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
    getButton("weiter")
        .wait()
        )
,
    newTrial("Anleitung",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newText("Anleitung","<p><br>Im Folgenden werden Sie abschnittweise einen Zeitungsartikel lesen, der Abweichungen von der sprachlichen Norm enthält.<p><br>Ihre Aufgabe besteht darin, den Text aufmerksam zu lesen und dabei diese Abweichungen zu identifizieren und zu korrigieren.<p><br>Bitte nutzen Sie dafür die Textfelder neben dem jeweiligen Absatz. Klicken Sie dafür zuerst einmal auf das Textfeld. Dann können Sie ihre Kommentare eingeben. <p><br> Sie können dabei so viel schreiben, wie sie wollen. Wenn Sie möchten, können Sie das Textfeld an seiner unteren rechten Ecke per gehaltenem Mausklick größer ziehen.<p><br>Probieren Sie hier bitte einmal aus, etwas unten in das Textfeld einzugeben und bestätigen Sie Ihre Eingabe mit <b>Enter</b>. Danach können Sie das Experiment beginnen.")
        .center()
        .print()
    ,
    newTextInput("Probe")
        .center()
        .print()
    ,
    getTextInput("Probe")
        .wait()
    ,
    newText("Weiter","<p><br>Alles klar! Klicken Sie nun bitte auf den Button, um das Experiment zu beginnen.")
        .center()
        .print()
    ,
    newButton("Weiter","Experiment beginnen")
        .center()
        .print()
        .wait()
        );

//Zeitung
Template(
    GetTable("BListenaufteilung.csv")
    .setGroupColumn( "Liste" )
    ,
    row => newTrial( "Trial" ,
        defaultImage.css("margin","1em")
        ,
        newImage("Header","BHeader.png").center().print()
        ,
        newCanvas("Top_nebeneinander","auto","auto")
            .add(420,40, newTextInput("Top_Korrektur").size(200,140) )
            .center().print()
        ,
        newImage("TopImage",row.TopImage).print( getCanvas("Top_nebeneinander") )
        ,
        newCanvas("Bottom_nebeneinander","auto","auto")
            .add(420,40, newTextInput("Bottom_Korrektur").size(200,140) )
            .center().print()
        ,
        newImage("BottomImage",row.BottomImage).print( getCanvas("Bottom_nebeneinander") )
        ,
        getTextInput("Top_Korrektur").settings.log("final")
        ,             
        getTextInput("Bottom_Korrektur").settings.log("final")
        ,             
        newButton("Weiter","Weiter").center().print().wait()
    )
    .log( "Group" , row.Liste  )
    .log( "TopText",row.TopImage )
    .log("BottomText",row.BottomImage)
);
    //Metadaten
newTrial("Meta",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
 ,
    newText("Meta-1", "<p>Das war die letzte Aufnahme.<br></p>Nun ben&ouml;tigen wir blo&szlig; noch ein paar letzte Informationen. Bitte beantworten Sie die Fragen in den Textfeldern und best&auml;tigen wie gehabt mit <b>Enter</b>. Falls Sie mehr Platz ben&ouml;tigen sollten, k&ouml;nnen Sie das Textfeld an seiner rechten unteren Ecke anklicken, gedr&uuml;ckt halten und gr&ouml;ßer ziehen.")
        .center()
        .print()
,
    newText("Atmo","<br><b>Wie fanden Sie die Atmosphäre bei der Befragung?</b></p>")
        .center()
        .print()
,
    newScale("Skala1", 5)
    .label(0," ")
    .label(1," ")
    .label(2," ")
    .label(3," ")
    .label(4," ")
        .settings.labelsPosition("bottom")
        .settings.before(newText("formell"))
        .settings.after(newText("informell"))
        .center()
,
    newScale("Skala2", 5)
    .label(0," ")
    .label(1," ")
    .label(2," ")
    .label(3," ")
    .label(4," ")
        .settings.labelsPosition("bottom")
        .settings.before(newText("entspannt"))
        .settings.after(newText("angespannt"))
        .center()
,
    newCanvas(400,80)
        .add(89, 0, getScale("Skala1").settings.log("Final"))
        .add(76, 50, getScale("Skala2").settings.log("Final"))
        .center()
        .print()
,
    newText("Kommentare","<br><b>Ist Ihnen noch etwas aufgefallen oder haben Sie Kommentare?</b></p>")
        .center()
        .print()
,
    newTextInput("weitereKommentare")
        .center()
        .print()
,
    getTextInput("weitereKommentare").settings.log("final")
,
    newText("Geburtsjahr","<p>In welchem Jahr sind Sie geboren?")
        .center()
        .print()
,
    newCanvas("Geburtsjahr", 1, 10)
        .center()
        .print()
,
    newTextInput("Geburtsjahr")
        .center()
        .print()
,
    getTextInput("Geburtsjahr")
        .settings.log("final")
,
    newText("Geschlecht","<p>Geschlecht:")
        .center()
        .print()
,
    newCanvas("Geschlecht", 1, 10)
        .center()
        .print()
,
    newTextInput("Geschlecht")
        .center()
        .print()
,
    getTextInput("Geschlecht")
        .settings.log("final")
,
    newText("Geburtsort", "<p>Geburtsort (Stadt, Region):")
        .center()
        .print()
,
    newCanvas("Geburtsort", 1, 10)
        .center()
        .print()
,
    newTextInput("Geburtsort")
        .center()
        .print()
,
    getTextInput("Geburtsort")
        .settings.log("final")
,
    newText("Aufgewachsen","<p>Wo sind Sie aufgewachsen?")
        .center()
        .print()
,
    newCanvas("Aufgewachsen", 1, 10)
        .center()
        .print()
,
    newTextInput("Aufgewachsen")
        .center()
        .print()
,
    getTextInput("Aufgewachsen")
        .settings.log("final")
,    
    newText("Wohnort","<p>Wohnort (Stadt, Region):")
        .center()
        .print()
,
    newCanvas("Wohnort", 1, 10)
        .center()
        .print()
,
    newTextInput("Wohnort")
        .center()
        .print()
,
    getTextInput("Wohnort")
        .settings.log("final")
,
    newText("SprachenMutter","<p>Welche Sprachen spricht/sprach Ihre Mutter? Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenMutter", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenMutter")
        .center()
        .print()
,
    getTextInput("SprachenMutter")
        .settings.log("final")
,
    newText("SprachenVater","<p>Welche Sprachen spricht/sprach Ihr Vater? Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenVater", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenVater")
        .center()
        .print()
,
    getTextInput("SprachenVater")
        .settings.log("final")
,
    newText("SprachenSelbst","<p>Welche Sprachen sprechen Sie selbst im Alltag? Mit wem und in welchen Situationen? Bitte sortieren und mit der am häufigsten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenSelbst", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenSelbst")
        .center()
        .print()
,
    getTextInput("SprachenSelbst")
        .settings.log("final")
        .wait()
,
    newText("Danke","<p>Vielen Dank f&uuml;r Ihre Teilnahme! Dürfen wir Sie in Zukunft erneut kontaktieren? Wenn ja, geben Sie bitte ihre Telefonnummer oder E-Mailadresse in das Textfeld ein. Wenn nein, lassen Sie das Textfeld bitte einfach frei. <br><p>Die Angabe der Kontaktdaten ist freiwillig. Um Anonymität zu gewährleisten, wird diese Angabe getrennt vom ausgefüllten Fragebogen archiviert.")
        .center()
        .print()
,
    newTextInput("Kontaktinfo")
        .center()
        .print()
,
    getTextInput("Kontaktinfo")
        .settings.log("final")
,
    newText("Leerzeile","<br>")
        .print()
,
    newButton("Ende","Ergebnisse abschicken und beenden")
        .center()
        .print()
        .wait()
        )
