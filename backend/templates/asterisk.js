const getText = (kategorie, Os, IPs, FQDN, ServiceTag, RAM, CPU) => {

	let text = `[[Category:${kategorie}]]
{{Infoxbox Server
|Kategorie=Exchangeserver
|Betriebssystem=${Os}
|IPAdresse=${IPs}
|FQDN=${FQDN}
|Zugangsdaten=In Keepass
|Servicetag=${ServiceTag}
|RAM=${RAM}
|CPU=${CPU}
|}}
== Verantwortlichkeit ==
{| class="wikitable"
|'''Rolle''' (Verantwortlicher, Stellvertreter)
|'''Name'''
|'''Datum'''
|-
|Verantwortlicher
|Meier, Björn
|
|-
|Stellvertreter
|
|
|}

== Systembeschreibung ==
Asterisk ist eine freie Software für Computer aller Art, die Funktionalitäten einer Telefonanlage bietet. Sie unterstützt IP-Telefonie (VoIP) mit unterschiedlichen Netzwerkprotokollen und kann mittels Hardware mit Anschlüssen wie POTS (analoger Telefonanschluss), ISDN-Basisanschluss (BRI) oder -Primärmultiplexanschluss (PRI, E1 oder T1) verbunden werden.

Mark Spencer hat Asterisk ursprünglich bei der Firma Digium entwickelt.[7][8] Mittlerweile haben sich noch weitere Entwickler der Asterisk-Gemeinde angeschlossen und so stammen viele Erweiterungen und Applikationen auch von anderen Entwicklern. Der Name stammt von der Bezeichnung für das Sternsymbol ab.

Asterisk wird unter einer dualen Lizenz zur Verfügung gestellt – der GNU General Public License (GPL) als freier Softwarelizenz und einer proprietären Lizenz, die es den Lizenznehmern gestattet, proprietäre, nichtöffentliche Bestandteile auszuliefern.
=== Applikation === 
=== Applikation Owner === 
=== System Owner === 	
=== Hardware === 	
=== OS / DB-System === 	
=== Datenlokation === 
=== Connection === 
=== Ext. Schnittstellen === 
=== Client === 
=== Backup === 
=== Supplier HW ===
=== Supplier SW ===
	
== Jobs und deren Steuerung ==
=== Job 1 ===
=== Job 2 ===
	
	
== System Sicherheit ==
=== Autorisierung Management ===
Welche Autorisierungen wurden aufgesetzt?
Wie werden diese verwaltet
	
	
=== Überwachung der Autorisierungen ===
Wie werden die Autorisierungen überwacht?
Mit welcher Häufigkeit?
	
=== Sicherheitmassnahmen ===
Welche Sicherheitmassnahmen wurden getroffen?
	
== Wartungsprozedere ==
=== System Start ===
Wie wird das System gestartet?
Welche Reihenfolge?
	
=== System Backup ===
Wie werden System Backups durchgeführt?
In welcher Häufigkeit?
	
=== System Kopie ===
Wie werden System Kopien durchgeführt?
In welcher Häufigkeit?
	
=== System Shutdown ===
Wann werden Shutdowns geplant?
Was passiert dann?
	
== Katastrophenfall ==
=== [https://de.wikipedia.org/wiki/Betriebliches_Kontinuit%C3%A4tsmanagement BCM Prozedere] ===
*Welche Notfall Szenarios müssen berücksichtigt werden?
*Wie oft wurden diese erprobt?
*Welche Fehler wurden entdeckt?
	
=== Wiederlauf Plan ===
*Welche [https://de.wikipedia.org/wiki/Betriebliches_Kontinuit%C3%A4tsmanagement BCM] Aktivitäten sind wann geplant?
*Welche Vorbereitungen müssen stattfinden?
*Welche Auswirkungen auf dem Business?`;

	return text;
}

export default {
	getText: getText,
}